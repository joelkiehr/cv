document.addEventListener("DOMContentLoaded", function () {
  // Selecciona el botón
  const downloadBtn = document.getElementById("btn-cv");

  // Agrega el evento de clic
  downloadBtn.addEventListener("click", function () {
      const link = document.createElement("a");
      link.href = "cv/CV Joel Kiehr.pdf"; // Ruta del PDF
      link.download = "Cv Joel Kiehr.pdf"; // Nombre al descargar
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  });
});

