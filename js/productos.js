const listaDeTortas = [
  {
    nombre: "Torta Toffe",
    descripcion: "Exquisita Torta Toffe cubierta con chocolate tortres hecho con el cacacao más suave.",
    precio: "$15000",
    imagen: "torta-toffee.jpg"
  },
  {
    nombre: "Chocotorta",
    descripcion: "Chocotorta cubierta con delicioso chocolate en rama.",
    precio: "$20000",
    imagen: "chocotorta.jpg"
  },
  {
    nombre: "LemonPie",
    descripcion: "LemonPie hecho con los mejores limones de Santa Fe y con una dulce crema Chantilly",
    precio: "$15000",
    imagen: "lemon-pie.jpg"
  },
  {
    nombre: "Torta Argentina",
    descripcion: "Mira el partido de argentina con esta hermosa torta de bizcochuelo blanco y negro relleno con el mejor Dulce de Leche y decorada como nuestra enseña patria",
    precio: "$10000",
    imagen: "tortaargentina.jpg"
  }
];

const contenedor = document.getElementById("lista-productos");

listaDeTortas.forEach(torta => {
  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta";

  tarjeta.innerHTML = `
    <img src="${torta.imagen}" alt="${torta.nombre}">
    <h3>${torta.nombre}</h3>
    <p>${torta.descripcion}</p>
    <h5><strong>${torta.precio}</strong></h5>
    <button>Comprar</button>
  `;

  // Seleccionamos el botón recién creado y le agregamos un evento
  const boton = tarjeta.querySelector("button");
  boton.addEventListener("click", () => {
    alert(`¡Compraste la ${torta.nombre}!`);
  });

  contenedor.appendChild(tarjeta);
});