chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
 if (message.action === "SAVE_RECORD") {
   chrome.storage.local.get("salesforce_data", (res) => {
     const data = res.salesforce_data || {
       opportunities: [],
       lastSync: Date.now()
     };
     const list = data[message.objectType] || [];
     const index = list.findIndex(r => r.id === message.record.id);
     if (index > -1) {
       list[index] = message.record;
     } else {
       list.push(message.record);
     }
     data[message.objectType] = list;
     data.lastSync = Date.now();
     chrome.storage.local.set({ salesforce_data: data });
   });
 }
});
