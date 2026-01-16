import { detectObjectType } from "./objectDetector";
import { showStatus } from "./shadowStatus";
import { extractOpportunity } from "./extractor/opportunities";
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
 if (message.action === "EXTRACT_CURRENT") {
   const objectType = detectObjectType();
   if (objectType === "opportunities") {
     showStatus("Extracting Opportunity...", "info");
     const data = extractOpportunity();
     chrome.runtime.sendMessage({
       action: "SAVE_RECORD",
       objectType: "opportunities",
       record: data
     });
     showStatus("Opportunity extracted successfully", "success");
   } else {
     showStatus("This object is not supported yet", "error");
   }
 }
});
