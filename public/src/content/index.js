import { detectObjectType } from "./objectDetector";
import { showStatus } from "./shadowStatus";
import { extractOpportunity } from "./extractor/opportunities";
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
 showStatus("Unsupported object for extraction", "error");
}
