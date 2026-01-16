console.log("Salesforce CRM Data Extractor loaded");
import { detectObjectType } from "./objectDetector";
import { showStatus } from "./shadowStatus";
const objectType = detectObjectType();
if (objectType) {
 showStatus(`Detected Salesforce ${objectType}`, "success");
} else {
 showStatus("Salesforce object not detected", "error");
}
