const contenidoExtra = document.getElementById('contenidoExtra');
const boton = document.querySelector('[data-bs-target="#contenidoExtra"]');

contenidoExtra.addEventListener('show.bs.collapse', () => {
  boton.textContent = 'Ocultar';
});

contenidoExtra.addEventListener('hide.bs.collapse', () => {
  boton.textContent = 'Redes';
});