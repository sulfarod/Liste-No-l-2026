const textarea = document.getElementById("content");
const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");
const status = document.getElementById("status");

saveBtn.addEventListener("click", () => {
  const value = textarea.value.trim();

  if (!value) {
    status.textContent = "Écrivez quelque chose avant d’enregistrer.";
    return;
  }

  localStorage.setItem("siteContent", value);
  status.textContent = "Votre texte a été enregistré.";
});

clearBtn.addEventListener("click", () => {
  textarea.value = "";
  localStorage.removeItem("siteContent");
  status.textContent = "Contenu effacé.";
});

window.addEventListener("load", () => {
  const saved = localStorage.getItem("siteContent");
  if (saved) {
    textarea.value = saved;
    status.textContent = "Contenu précédent restauré.";
  }
});