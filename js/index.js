bd_prods = [
    { "sku": "01", "nombre": "Guffercty kred GK68 65 %", "precio": "$55.000", "descuento": "$70.000", "categoria": "teclados", "imagen": "teclado3.png","valoraciones":"15" },
    { "sku": "02", "nombre": "Teclado Rk61 HOTSWAP (SWITCH RED)", "precio": "$80.000", "descuento": "$90.000", "categoria": "teclados", "imagen": "teclado2.png","valoraciones":"15" },
    { "sku": "03", "nombre": "Hype Legend Rebel Up", "precio": "$90.000", "descuento": "$120.000", "categoria": "teclados", "imagen": "teclado4.png","valoraciones":"15" },
    { "sku": "04", "nombre": "Kawaii Keeb 2.0 Underglow RGB 60%", "precio": "$225.000", "descuento": "$250.000", "categoria": "teclados", "imagen": "kawaiikeeb.png","valoraciones":"15" },
    { "sku": "05", "nombre": "GMK Analog Dreams R2 X Salvun Keycap", "precio": "$55.990", "descuento": "$70.000", "categoria": "keycaps", "imagen": "gmkanalog.png","valoraciones":"15" },
    { "sku": "06", "nombre": "Keycaps Darling (Doubleshot clone)", "precio": "$25.000", "descuento": "$48.000", "categoria": "keycaps", "imagen": "keycapsdarling.jpg","valoraciones":"15" },
    { "sku": "07", "nombre": "Kuma 60%", "precio": "$160.000", "descuento": "$180.000", "categoria": "teclados", "imagen": "imgs/kuma60.jpg","valoraciones":"15" },
    { "sku": "08", "nombre": "YMD75 V3 QMK - JAPANESE 75%", "precio": "$180.000", "descuento": "$200.000", "categoria": "teclados", "imagen": "YMD75V3.png","valoraciones":"15" },
];

window.addEventListener("load", () => {    
    div_productos = document.getElementById("productos");
    fetch('https://g9cd7530b8a8613-ecommerce.adb.sa-santiago-1.oraclecloudapps.com/ords/inacap_ecommerce/productos_paulobrito/')
        .then((respuesta) => {
            return respuesta.json();
        })
        .then((data) => {
            console.log(data.items);
            for (i in data.items) {
                console.log(data.items[i]);
                tarjeta = `
                <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                    <div class="product-item bg-light mb-4">
                        <div class="product-img position-relative overflow-hidden">
                            <img class="img-fluid w-100" src="imgs/${data.items[i].imagen}" alt="">
                            <div class="product-action">
                                <a class="btnn btnn-outline-dark btnn-square" href=""><i
                                        class="fa fa-shopping-cart"></i></a>
                                <a class="btnn btnn-outline-dark btnn-square" href=""><i class="far fa-heart"></i></a>
                                <a class="btnn btnn-outline-dark btnn-square" href=""><i class="fa fa-search"></i></a>
                            </div>
                        </div>
                        <div class="text-center py-4">
                            <a class="h6 text-decoration-none text-truncate" href="">${data.items[i].nombre}</a>
                            <div class="d-flex align-items-center justify-content-center mt-2">
                                <h5>$${data.items[i].precio}</h5>
                                <h6 class="text-muted ml-2"><del>$${data.items[i].precio_descuento}</del></h6>
                        </div>
                    </div>
                </div>
                `;
                div_productos.innerHTML += tarjeta;
            }
        });
    
});

// Obtener el elemento del carrusel
var carousel = document.getElementById("myCarousel");

// Obtener el elemento que contiene los indicadores
var indicatorsContainer = carousel.querySelector(".carousel-indicators");

// Obtener los elementos de los slides
var slides = carousel.querySelectorAll(".carousel-inner .carousel-item");

// Crear los botones indicadores
for (var i = 0; i < slides.length; i++) {
  var button = document.createElement("button");
  button.type = "button";
  button.setAttribute("data-bs-target", "#myCarousel");
  button.setAttribute("data-bs-slide-to", i.toString());
  if (i === 0) {
    button.classList.add("active");
    button.setAttribute("aria-current", "true");
  }
  indicatorsContainer.appendChild(button);
}

//-----------------------------------------------------------------------------//

// Código JavaScript para inyectar el encabezado en todas las páginas

// Crear el elemento de encabezado
const header = document.createElement('header');
header.className = 'border-bottom';
header.innerHTML = `
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
          <img class="logo_key" src="imgs/logo.png" alt="" >
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="index.html" class="nav-link px-2 link-secondary">Inicio</a></li>
          <li><a href="productos.html" class="nav-link px-2 link-body-emphasis">Productos</a></li>
          <li><a href="contact.html" class="nav-link px-2 link-body-emphasis">Contacto</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control" placeholder="Buscar..." aria-label="Search">
        </form>

        <div class="dropdown text-end">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown"
            aria-expanded="false">
            <img src="imgs/perfil.png" alt="mdo" width="32" height="32" class="rounded-circle">
          </a>
          <ul class="dropdown-menu text-small">
            <li><a class="dropdown-item" href="#">Login</a></li>
            <li><a class="dropdown-item" href="#">Perfil</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"></ul>
        <li><a href="#" class="nav-link px-2 link-body-emphasis"><span class="material-symbols-outlined">
              shopping_cart
            </span></a></li>
        </ul>
      </div>
    </div>
`;

// Obtener el elemento donde se insertará el encabezado
const headerContainer = document.getElementById('header-container'); // Reemplaza 'header-container' con el ID del elemento deseado

// Insertar el encabezado en el elemento contenedor
headerContainer.appendChild(header);

//--------------------------------------------------------------------------------------------------

// Crea el elemento footer
const footer = document.createElement("footer");
footer.innerHTML = `
  <div class="container_footer">
    <div class="logo">
      <a href="index.html"><img src="imgs/logo.png" alt="Logo de la empresa"></a>
      <h3>KeyShop</h3>
    </div>
    <div class="links">
      <h4>Enlaces útiles</h4>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </div>
    <div class="newsletter">
      <h4>Suscríbete para las novedades!</h4>
      <form>
        <input type="email" placeholder="Tu correo electrónico">
        <button type="submit">Suscribirse</button>
      </form>
    </div>
  </div>
`;

// Obtiene el elemento <body> y agrega el footer al final
const footerContainer = document.getElementById("footer");
footerContainer.appendChild(footer);
