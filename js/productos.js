const listaDeTortas = [
  {
    nombre: "Torta Toffe",
    descripcion: "Exquisita Torta Toffe cubierta con chocolate tortres hecho con el cacao más suave",
    precio: "$15000",
    imagen: "img/torta-toffee.jpg"
  },
  {
    nombre: "Chocotorta",
    descripcion: "Chocotorta cubierta con delicioso chocolate en rama",
    precio: "$20000",
    imagen: "img/chocotorta.jpg"
  },
  {
    nombre: "LemonPie",
    descripcion: "LemonPie hecho con los mejores limones de Santa Fe y con una dulce crema Chantilly",
    precio: "$15000",
    imagen: "img/lemon-pie.jpg"
  },
  {
    nombre: "Torta Argentina",
    descripcion: "Mirá el partido de Argentina con esta hermosa torta de bizcochuelo blanco y negro relleno con el mejor Dulce de Leche y decorada como nuestra enseña patria",
    precio: "$10000",
    imagen: "img/tortaargentina.jpg"
  },
  {
    nombre: "Torta Oreo",
    descripcion: "Torta Hecha con las mejores galletitas y en frio para pasar el calor",
    precio: "$17500",
    imagen: "img/torta-oreo.jpg"
  },
  {
    nombre: "Rogel",
    descripcion: "Rogel de finas capas con el mejor dulce de leche casero",
    precio: "$22000",
    imagen: "img/rogel.jpg"
  },
  {
    nombre: "Selva Negra",
    descripcion: "Torta de selva negra para los amantes del chocolate semiamargo",
    precio: "$20000",
    imagen: "img/selva-negra.jpg"
  },
  {
    nombre: "Red Velvet",
    descripcion: "Torta Red Velvet para celebrar el amor",
    precio: "$25000",
    imagen: "img/red-velvet.jpg"
  }
];

const contenedor = document.getElementById("lista-productos");

listaDeTortas.forEach(torta => {
  const tarjeta = document.createElement("div");
  tarjeta.className = `
    bg-pink-100 rounded-lg shadow-xl overflow-hidden
    hover:shadow-2xl hover:-translate-y-1
    transition-transform transition-shadow duration-300
    flex flex-col w-full max-w-[30%]
`;
  tarjeta.innerHTML = `
    <img src="${torta.imagen}" alt="${torta.nombre}" class="w-1/3 h-auto object-cover">
    <div class="p-4 flex flex-col justify-between w-2/3">
      <div>
        <h3 class="text-xl font-bold tracking-wide mb-2">${torta.nombre}</h3>
        <p class="text-gray-700 text-base mb-4">${torta.descripcion}</p>
        <p class="text-lg font-bold text-gray-800 mb-4">${torta.precio}</p>
      </div>
      <button class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors w-fit self-end">Comprar</button>
    </div>
  `;

  const boton = tarjeta.querySelector("button");
  boton.addEventListener("click", () => {
    alert(`¡Compraste la ${torta.nombre}!`);
  });

  contenedor.appendChild(tarjeta);
});







