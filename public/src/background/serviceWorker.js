chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
 if (message.action === "SAVE_DATA") {
   chrome.storage.local.get("salesforce_data", (res) => {
     const data = res.salesforce_data || {};
     chrome.storage.local.set({ salesforce_data: data });
   });
 }
});
