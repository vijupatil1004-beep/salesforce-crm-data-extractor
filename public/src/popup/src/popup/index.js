const dataDiv = document.getElementById("data");
const extractBtn = document.getElementById("extract");
const searchInput = document.getElementById("search");
const timestampDiv = document.getElementById("timestamp");
let allData = [];
extractBtn.addEventListener("click", async () => {
 const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
 chrome.tabs.sendMessage(tab.id, { action: "EXTRACT_CURRENT" });
});
searchInput.addEventListener("input", () => {
 renderData(allData, searchInput.value.toLowerCase());
});
function deleteRecord(id) {
 chrome.storage.local.get("salesforce_data", (res) => {
   const data = res.salesforce_data;
   data.opportunities = data.opportunities.filter(o => o.id !== id);
   chrome.storage.local.set({ salesforce_data: data }, () => {
     loadData();
   });
 });
}
function renderData(data, search = "") {
 dataDiv.innerHTML = "";
 const grouped = {};
 data.forEach(o => {
   if (!o.name.toLowerCase().includes(search)) return;
   grouped[o.stage] = grouped[o.stage] || [];
   grouped[o.stage].push(o);
 });
 Object.keys(grouped).forEach(stage => {
   const h = document.createElement("h4");
   h.innerText = stage;
   dataDiv.appendChild(h);
   grouped[stage].forEach(o => {
     const div = document.createElement("div");
     div.className = "record";
     div.innerHTML = `
<strong>${o.name}</strong><br/>
       Amount: ${o.amount}<br/>
       Probability: ${o.probability}<br/>
<button data-id="${o.id}" style="margin-top:4px;">Delete</button>
     `;
     div.querySelector("button").onclick = () => deleteRecord(o.id);
     dataDiv.appendChild(div);
   });
 });
}
function loadData() {
 chrome.storage.local.get("salesforce_data", (res) => {
   const data = res.salesforce_data;
   if (!data) return;
   allData = data.opportunities || [];
   timestampDiv.innerText = `Last Sync: ${new Date(data.lastSync).toLocaleString()}`;
   renderData(allData);
 });
}
loadData();
