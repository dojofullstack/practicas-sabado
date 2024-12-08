

console.log("modulo app.js cargado v.1.0.0");


let cart = [];

// Función para agregar un producto al carrito
function addProductCart(producto) {
    if (typeof producto === 'object' && producto !== null) {
        cart.push(producto);
        console.log(`${producto.name} ha sido agregado al carrito.`);

        guardarResumenCarritoEnLocalStorage();
        mostrarResumenCarrito(); // Actualiza el resumen del carrito
    } else {
        console.error("El producto no es válido.");
    }
}


// Función para mostrar el resumen del carrito
function mostrarResumenCarrito() {
    const resumenDiv = document.getElementById('resumenCarrito');
    const totalItemsCartDiv = document.getElementById('total-items-cart');

    // Contamos el número de elementos en el carrito
    const numeroElementos = cart.length;

    // Calculamos el total
    const total = cart.reduce((acc, producto) => acc + producto.price, 0).toFixed(2);

    // Actualizamos el contenido del div
    totalItemsCartDiv.innerHTML = numeroElementos;
    resumenDiv.innerHTML = `
                    <span class="text-lg font-bold"> ${numeroElementos} productos</span>
                    <span class="text-secondary text-lg">Subtotal: $${total}</span>
                    <div class="card-actions">
                    <a href="/project-nike/checkout.html">
                      <button class="btn btn-primary btn-block">Ver Carrito</button>
                    </a>
                    </div>
    `;
}


// Función para guardar el carrito en localStorage
function guardarResumenCarritoEnLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Función para cargar el carrito desde localStorage
function cargarCarritoDesdeLocalStorage() {
    const carritoGuardado = localStorage.getItem('cart');
    if (carritoGuardado) {
        cart = JSON.parse(carritoGuardado);
        mostrarResumenCarrito(); // Muestra el resumen cargado
    }
}


cargarCarritoDesdeLocalStorage();