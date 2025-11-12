document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form-contacto");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // 🔹 Captura automática de todos los campos del formulario
    const data = Object.fromEntries(new FormData(form));

    try {
      await fetch("https://saddlebrown-newt-806509.hostingersite.com/enviar-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      alert("Mensaje enviado correctamente ✅");
      form.reset();
    } catch (error) {
      alert("Error al enviar el mensaje ❌");
      console.error(error);
    }
  });
});
