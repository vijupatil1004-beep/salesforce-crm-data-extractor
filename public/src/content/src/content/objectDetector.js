export function detectObjectType() {
 const url = window.location.href;
 if (url.includes("/Lead/")) return "leads";
 if (url.includes("/Contact/")) return "contacts";
 if (url.includes("/Account/")) return "accounts";
 if (url.includes("/Opportunity/")) return "opportunities";
 if (url.includes("/Task/")) return "tasks";
 return null;
}
