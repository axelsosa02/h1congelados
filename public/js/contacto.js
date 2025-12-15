

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form-contacto");

  if (!form) return;
  console.log("Formulario cargado:", form);


  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Enviando formulario...", form);

    // 🔹 Captura automática de todos los campos del formulario
    const data = Object.fromEntries(new FormData(form));

    try {
      await fetch("https://h1congelados.onrender.com/enviar-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

       // Abrir la modal de éxito
      if (window.showModal) {
        window.showModal();
      }
      
      form.reset();
    } catch (error) {
      alert("Error al enviar el mensaje ❌");
      console.error(error);
    }
  });
});
