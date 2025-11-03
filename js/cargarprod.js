document.addEventListener('DOMContentLoaded', function() {
    cargarProductosCatalogo();
});

async function cargarProductosCatalogo() {
    try {
        const response = await fetch(`http://200.3.127.46:30016/obtener_catalogo`);

        if (!response.ok) {
            throw new Error('Error al cargar productos');
        }

        const productos = await response.json();
        mostrarProductosEnCatalogo(productos);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('catalogo-productos').innerHTML = `
            <div class="col-span-3 text-center py-8">
                <p class="text-red-500">Error cargando el catálogo</p>
                <p class="text-sm text-gray-500">Es posible que el servidor no esté funcionando</p>
            </div>
        `;
    }
}

function mostrarProductosEnCatalogo(productos) {
    const contenedor = document.getElementById('catalogo-productos');

    if (productos.length === 0) {
        contenedor.innerHTML = `
            <div class="col-span-3 text-center py-12">
                <p class="text-gray-500 text-lg">🎂 Próximamente más tortas deliciosas</p>
                <p class="text-gray-400 mt-2">Estamos preparando nuevas creaciones</p>
            </div>
        `;
        return;
    }

    contenedor.innerHTML = productos.map(producto => `
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="h-48 overflow-hidden">
                <img src="servicios/${producto.fotoUrl || 'img/default-cake.jpg'}" 
                     alt="${producto.nombre}"
                     class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                     onerror="this.src='img/torta-inicio.jpg'">
            </div>

            <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">${producto.nombre}</h3>

                ${producto.descripcion ? `
                    <p class="text-gray-600 mb-4 line-clamp-2">${producto.descripcion}</p>
                ` : ''}

                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold text-pink-700">$${parseFloat(producto.precio).toFixed(2)}</span>
                </div>

                <button onclick="alert('Llega mañana!')" 
                        class="w-full mt-4 bg-pink-700 hover:bg-pink-600 text-white py-2 px-4 rounded-lg transition duration-300">
                    🛒 Agregar al carrito
                </button>
            </div>
        </div>
    `).join('');
}