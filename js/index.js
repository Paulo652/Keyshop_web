bd_prods = [
    { "sku": "01", "nombre": "Guffercty kred GK68 65 %", "precio": "$55.000", "descuento": "$70.000", "categoria": "teclados", "imagen": "imgs/teclado3.png","valoraciones":"15" },
    { "sku": "02", "nombre": "Teclado Rk61 HOTSWAP (SWITCH RED)", "precio": "$80.000", "descuento": "$90.000", "categoria": "teclados", "imagen": "imgs/teclado2.png","valoraciones":"15" },
    { "sku": "03", "nombre": "Hype Legend Rebel Up", "precio": "$90.000", "descuento": "$120.000", "categoria": "teclados", "imagen": "imgs/teclado4.png","valoraciones":"15" },
    { "sku": "04", "nombre": "Kawaii Keeb 2.0 Underglow RGB 60%", "precio": "$225.000", "descuento": "$250.000", "categoria": "teclados", "imagen": "imgs/kawaiikeeb.png","valoraciones":"15" },
    { "sku": "05", "nombre": "GMK Analog Dreams R2 X Salvun Keycap", "precio": "$55.990", "descuento": "$70.000", "categoria": "keycaps", "imagen": "imgs/gmkanalog.png","valoraciones":"15" },
    { "sku": "06", "nombre": "Keycaps Darling (Doubleshot clone)", "precio": "$25.000", "descuento": "$48.000", "categoria": "keycaps", "imagen": "imgs/keycapsdarling.jpg","valoraciones":"15" },
    { "sku": "07", "nombre": "Kuma 60%", "precio": "$160.000", "descuento": "$180.000", "categoria": "teclados", "imagen": "imgs/kuma60.jpg","valoraciones":"15" },
    { "sku": "08", "nombre": "YMD75 V3 QMK - JAPANESE 75%", "precio": "$180.000", "descuento": "$200.000", "categoria": "teclados", "imagen": "imgs/YMD75V3.png","valoraciones":"15" },
];

for (numvuelta in bd_prods) {

    tarjeta = `
    <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div class="product-item bg-light mb-4">
            <div class="product-img position-relative overflow-hidden">
                <img class="img-fluid w-100" src="${bd_prods[numvuelta].imagen}" alt="">
                <div class="product-action">
                    <a class="btnn btnn-outline-dark btnn-square" href=""><i
                            class="fa fa-shopping-cart"></i></a>
                    <a class="btnn btnn-outline-dark btnn-square" href=""><i class="far fa-heart"></i></a>
                    <a class="btnn btnn-outline-dark btnn-square" href=""><i class="fa fa-search"></i></a>
                </div>
            </div>
            <div class="text-center py-4">
                <a class="h6 text-decoration-none text-truncate" href="">${bd_prods[numvuelta].nombre}</a>
                <div class="d-flex align-items-center justify-content-center mt-2">
                    <h5>${bd_prods[numvuelta].precio}</h5>
                    <h6 class="text-muted ml-2"><del>${bd_prods[numvuelta].descuento}</del></h6>
                </div>
                <div class="d-flex align-items-center justify-content-center mb-1">
                    <small class="fa fa-star text-primary mr-1"></small>
                    <small class="fa fa-star text-primary mr-1"></small>
                    <small class="fa fa-star text-primary mr-1"></small>
                    <small class="fa fa-star text-primary mr-1"></small>
                    <small class="fa fa-star-half-alt text-primary mr-1"></small>
                    <small>${bd_prods[numvuelta].valoraciones}</small>
                </div>
            </div>
        </div>
    </div>
    `;
    document.getElementById('productos').innerHTML += tarjeta;
    console.log(bd_prods[numvuelta]);
}

