// Crear el elemento de encabezado
function agregarHeader() {

    const header = document.createElement('header');
    header.className = 'border-bottom';
    header.innerHTML = `
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
          <img class="logo_key" src="imgs/logo.png" alt="" >
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="index.html" class="nav-link px-2 link-body-emphasis">Inicio</a></li>
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
            <li><a class="dropdown-item" href="login.html">Login</a></li>
            <li><a class="dropdown-item" href="#">Perfil</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"></ul>
        <li><a href="carrito.html" class="nav-link px-2 link-body-emphasis"><span class="material-symbols-outlined">
              shopping_cart
            </span></a></li>
        </ul>
      </div>
    </div>
`;

const body = document.body;
// Inserta el header antes del primer hijo del body
body.insertBefore(header, body.firstChild);
}


//--------------------------------------------------------------------------------------------------

// footer.js
function agregarFooter() {
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
            <li><a href="index.html">Inicio</a></li>
            <li><a href="productos.html">Productos</a></li>
            <li><a href="contact.html">Contacto</a></li>
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

    document.body.appendChild(footer);

}
window.onload = function () {
    agregarHeader();
    agregarFooter();
};