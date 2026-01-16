export function showStatus(message, type = "info") {
 const host = document.createElement("div");
 const shadow = host.attachShadow({ mode: "open" });
 const color =
   type === "success" ? "#16a34a" :
   type === "error" ? "#dc2626" :
   "#2563eb";
 shadow.innerHTML = `
<style>
     .badge {
       position: fixed;
       top: 20px;
       right: 20px;
       padding: 10px 14px;
       background: ${color};
       color: white;
       font-size: 13px;
       border-radius: 6px;
       z-index: 999999;
       font-family: sans-serif;
     }
</style>
<div class="badge">${message}</div>
 `;
 document.body.appendChild(host);
 setTimeout(() => host.remove(), 3000);
}
