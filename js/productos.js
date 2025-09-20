const listaDeTortas = [
  {
    nombre: "Torta Toffe",
    descripcion: "Exquisita Torta Toffe cubierta con chocolate tortres hecho con el cacao más suave.",
    precio: "$15000",
    imagen: "img/torta-toffee.jpg"
  },
  {
    nombre: "Chocotorta",
    descripcion: "Chocotorta cubierta con delicioso chocolate en rama.",
    precio: "$20000",
    imagen: "img/chocotorta.jpg"
  },
  {
    nombre: "LemonPie",
    descripcion: "LemonPie hecho con los mejores limones de Santa Fe y con una dulce crema Chantilly.",
    precio: "$15000",
    imagen: "img/lemon-pie.jpg"
  },
  {
    nombre: "Torta Argentina",
    descripcion: "Mirá el partido de Argentina con esta hermosa torta de bizcochuelo blanco y negro relleno con el mejor Dulce de Leche y decorada como nuestra enseña patria.",
    precio: "$10000",
    imagen: "img/tortaargentina.jpg"
  }
];

const contenedor = document.getElementById("lista-productos");

listaDeTortas.forEach(torta => {
  const tarjeta = document.createElement("div");
  tarjeta.className = `
    bg-white rounded-lg shadow-md overflow-hidden
    hover:shadow-xl hover:-translate-y-1
    transition-transform transition-shadow duration-300
    flex flex-col w-full max-w-xs
  `;

  tarjeta.innerHTML = `
    <img src="${torta.imagen}" alt="${torta.nombre}" class="w-full h-48 object-cover">
    <div class="p-4 flex flex-col flex-grow">
      <h3 class="text-lg font-semibold mb-2">${torta.nombre}</h3>
      <p class="text-gray-600 text-sm mb-4 flex-grow">${torta.descripcion}</p>
      <p class="text-lg font-bold text-gray-800 mb-4">${torta.precio}</p>
      <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors">Comprar</button>
    </div>
  `;

  const boton = tarjeta.querySelector("button");
  boton.addEventListener("click", () => {
    alert(`¡Compraste la ${torta.nombre}!`);
  });

  contenedor.appendChild(tarjeta);
});




