document.getElementById("extract").addEventListener("click", async () => {
 const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
 chrome.tabs.sendMessage(tab.id, {
   action: "EXTRACT_CURRENT"
 });
});
