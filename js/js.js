


// Selecciona todos los elementos de proyecto con el efecto de desplazamiento
const projects = document.querySelectorAll('.scroll-fade-up');

// Función para verificar si el elemento está en la vista
function toggleVisibility() {
  projects.forEach(project => {
    const rect = project.getBoundingClientRect();
    // Verifica si el proyecto está visible en la ventana
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      project.classList.add('visible');
    } else {
      project.classList.remove('visible');
    }
  });
}

// Ejecuta la función al cargar y cada vez que se haga scroll
window.addEventListener('scroll', toggleVisibility);
window.addEventListener('load', toggleVisibility);
