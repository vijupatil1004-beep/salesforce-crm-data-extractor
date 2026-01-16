# Salesforce CRM Data Extractor (Chrome Extension)
A Manifest V3 Chrome Extension that extracts Salesforce Lightning CRM data directly from the UI, stores it locally, and displays it in an interactive popup dashboard.
---
## 🚀 Overview
This project is a Chrome Extension built to extract data from Salesforce CRM objects such as **Opportunities** (and extensible to Leads, Contacts, Accounts, and Tasks).  
It works entirely through **DOM scraping** in Salesforce Lightning (no APIs or SOQL), handling dynamic rendering and ensuring data persistence using Chrome’s local storage.
The extracted data is visualized in a popup dashboard with grouping, search, deletion, and last-sync tracking.
---
## 🛠️ Tech Stack
- **Chrome Extension – Manifest V3**
- **JavaScript (ES6+)**
- **Chrome APIs**: `tabs`, `runtime`, `storage`
- **Shadow DOM** for injected UI feedback
- **Salesforce Lightning DOM scraping**
---
## ✨ Features
- ✅ Auto-detect Salesforce object type
- ✅ Extract Opportunity data (Name, Amount, Stage, Probability, Close Date)
- ✅ Manual **“Extract Current Object”** trigger
- ✅ Shadow DOM status indicator (no CSS conflicts)
- ✅ Deduplicated local storage using `chrome.storage.local`
- ✅ Persistent data across page refresh
- ✅ Popup dashboard:
 - Group Opportunities by stage
 - Search/filter records
 - Delete individual records
 - Display last sync timestamp
---
## 📂 Project Structure
salesforce-crm-data-extractor/
│
├── public/
│ └── manifest.json
│
├── src/
│ ├── background/
│ │ └── serviceWorker.js
│ │
│ ├── content/
│ │ ├── extractor/
│ │ │ └── opportunities.js
│ │ ├── objectDetector.js
│ │ ├── shadowStatus.js
│ │ └── index.js
│ │
│ └── popup/
│ ├── index.html
│ └── index.js
│
└── README.md
---
## ⚙️ Installation & Setup
1. Clone the repository
2. Open Chrome and navigate to:
chrome://extensions
3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select the project root folder
6. Open Salesforce (Lightning Experience)
---
## 🧠 DOM Extraction Strategy
Salesforce Lightning renders content dynamically, so the extension uses:
- **Mutation-safe querying**
- **Label-based field detection** instead of brittle selectors
- **URL + DOM hybrid object detection**
This ensures stability across:
- Record detail pages
- List views
- Dynamic Lightning re-renders
---
## 🗄️ Storage Design
All extracted data is stored locally using `chrome.storage.local`.
```json
{
"salesforce_data": {
"opportunities": [
  {
    "id": "006XXXXXXXXXXXX",
    "name": "Enterprise Deal",
    "amount": "$50,000",
    "stage": "Proposal",
    "probability": "70%",
    "closeDate": "2026-03-31"
  }
],
"lastSync": 1700000000000
}
}
Storage Features
Deduplication by record ID
Update-in-place on re-extraction
Persistent across browser sessions
🖥️ Popup Dashboard
The popup UI provides:
Manual extraction trigger
Grouping of Opportunities by stage
Search and filtering
Record deletion
Last synchronization timestamp
Communication follows Manifest V3 best practices using message passing between popup, content script, and service worker.
🧪 Evaluation Highlights
This project demonstrates:
Strong understanding of Manifest V3 architecture
Handling of dynamic enterprise web apps
Clean separation of concerns
Safe UI injection using Shadow DOM
Reliable local persistence and data integrity
🔮 Future Enhancements
Support for Leads, Contacts, Accounts, and Tasks
Export data as CSV / JSON
Kanban view (Pipeline Inspection) extraction
React + Tailwind popup UI
Real-time sync across multiple tabs
👤 Author
Vijayalaxmi Patil
Chrome Extension | Salesforce Lightning | Frontend Engineering
📄 License
This project is for technical assessment and learning purposes.
