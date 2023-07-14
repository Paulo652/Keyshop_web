function inicializarCarrito() {
    // Obtener el contenedor de los productos en el carrito
    const productosCarrito = document.getElementById('productosCarrito');
    // Obtener el contenedor del total de precios
    const totalCarrito = document.getElementById('totalCarrito');

    // Obtener los productos guardados en el almacenamiento local
    let productosEnCarrito = localStorage.getItem('productosEnCarrito');
    productosEnCarrito = productosEnCarrito ? JSON.parse(productosEnCarrito) : [];

    // Mostrar los productos en la consola
    console.log(productosEnCarrito);

    // Obtener los IDs de los productos guardados
    const idsProductos = productosEnCarrito.map(producto => producto.id);

    // Realizar el fetch a la base de datos filtrando por los IDs
    fetch('https://g9cd7530b8a8613-ecommerce.adb.sa-santiago-1.oraclecloudapps.com/ords/inacap_ecommerce/productos_paulobrito/')
        .then(respuesta => respuesta.json())
        .then(data => {
            console.log(data.items);

            // Filtrar los productos según los IDs guardados
            const productosFiltrados = data.items.filter(producto => idsProductos.includes(producto.id));

            // Generar el HTML para cada producto y calcular el total de precios
            let totalPrecio = 0;
            productosFiltrados.forEach(function (producto) {
                const productoHTML = `
            <div class="producto-carrito">
              <img class="producto-imagen" src="imgs/${producto.imagen}" alt="${producto.nombre}">
              <div class="producto-info">
                <h2>${producto.nombre}</h2>
                <p>Precio: $${producto.precio}</p>
                <!-- Agrega aquí el resto de los detalles del producto que desees mostrar -->
              </div>
              <button class="boton boton-borrar" data-producto-id="${producto.id}">Borrar</button>
              </div>
          `;
                productosCarrito.innerHTML += productoHTML;

                // Sumar el precio del producto al total
                totalPrecio += producto.precio;
            });

            // Mostrar el total de precios
            const totalHTML = `
          <h3>Total: $${totalPrecio}</h3>
        `;
            totalCarrito.innerHTML = totalHTML;

            // Obtener los botones de "Borrar"
            const botonesBorrar = document.querySelectorAll('.boton-borrar');
            botonesBorrar.forEach(function (boton) {
                boton.addEventListener('click', function () {
                    const productoId = this.getAttribute('data-producto-id');
                    eliminarProductoCarrito(productoId);
                });
            });
        });
}

// Función para eliminar un producto del carrito
function eliminarProductoCarrito(productoId) {
    // Obtener los productos guardados en el almacenamiento local
    let productosEnCarrito = localStorage.getItem('productosEnCarrito');
    productosEnCarrito = productosEnCarrito ? JSON.parse(productosEnCarrito) : [];

    // Filtrar los productos para eliminar el producto con el ID correspondiente
    productosEnCarrito = productosEnCarrito.filter(producto => parseInt(producto.id) !== parseInt(productoId));

    // Guardar los productos actualizados en el almacenamiento local
    localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));

    // Esperar un corto período de tiempo antes de recargar la página
    setTimeout(function () {
        // Recargar la página para reflejar los cambios
        location.reload();
    }, 100);
}
window.onload = function () {
    agregarHeader();
    agregarFooter();
    inicializarCarrito();
};