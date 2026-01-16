function getField(label) {
 const items = document.querySelectorAll("records-record-layout-item");
 for (const item of items) {
   if (item.innerText.includes(label)) {
     return (
       item.querySelector("lightning-formatted-text")?.innerText ||
       item.querySelector("lightning-formatted-number")?.innerText ||
       ""
     );
   }
 }
 return "";
}
export function extractOpportunity() {
 return {
   id: location.pathname.split("/")[2],
   name: getField("Opportunity Name"),
   amount: getField("Amount"),
   stage: getField("Stage"),
   probability: getField("Probability"),
   closeDate: getField("Close Date"),
   extractedAt: Date.now()
 };
}
