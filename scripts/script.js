const formulario = document.querySelector('#nueva-actividad form');
const actividadesContenedor = document.querySelector('#actividades');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const titulo = document.querySelector('#titulo').value;
    const descripcion = document.querySelector('#descripcion').value;
    const imagen = document.querySelector('#imagen').value;

    // Crear la tarjeta
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');

    const imagenTarjeta = document.createElement('img');
    imagenTarjeta.src = imagen;
    tarjeta.appendChild(imagenTarjeta);

    const tituloTarjeta = document.createElement('h3');
    tituloTarjeta.textContent = titulo;
    tarjeta.appendChild(tituloTarjeta);

    const descripcionTarjeta = document.createElement('p');
    descripcionTarjeta.textContent = descripcion;
    tarjeta.appendChild(descripcionTarjeta);

    // Agregar la tarjeta al contenedor
    actividadesContenedor.appendChild(tarjeta);

    // Limpiar el formulario
    formulario.reset();
});
