// Variables globales
let sonidoAlarma = new Audio("https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg"); 
let temporizadorActivo = null;

const letras = "ABCDEFGHIJLMNOPQRSTUV".split("");

const categorias = [
  "Frutas", "Verduras", "Animales", "Países", "Ciudades", "Nombres de persona", "Profesiones", "Colores", "Partes del cuerpo", "Deportes",
  "Comidas", "Películas", "Programas tv", "Juguetes", "Videojuegos", "Dibujos animados", "Juegos de mesa", "Superhéroes", "Villanos",
  "Cosas en la cocina", "Cosas en el baño", "Cosas en la escuela", "Cosas en la oficina", "Cosas que hay en una mochila", "Cosas que se encuentran en la playa", "Cosas que hay en una granja", "Cosas en un supermercado",
  "Transporte", "Marcas", "Lugares turísticos", "Cosas en un aeropuerto", "Cosas en la carretera",
  "Animales marinos", "Insectos", 
  "Prendas de vestir", "Celebridades",
  "Cosas que vuelan", "Cosas que ruedan", "Cosas que hacen ruido", "Cosas que huelen mal", "Cosas que puedes romper", "Cosas suaves", "Cosas pegajosas"
];

// Generar letra aleatoria con efecto ruleta
function generarLetra() {
  const contenedor = document.getElementById("letra");
  let contador = 0;
  const intervalo = setInterval(() => {
    const letraTemporal = letras[Math.floor(Math.random() * letras.length)];
    contenedor.textContent = letraTemporal;
    contador++;
    if (contador > 15) {
      clearInterval(intervalo);
    }
  }, 50);
}

// Generar categoría aleatoria
function generarCategoria() {
  const contenedor = document.getElementById("categoria");
  const aleatoria = categorias[Math.floor(Math.random() * categorias.length)];
  contenedor.textContent = aleatoria;
}

// Iniciar temporizador de 30 segundos con milisegundos
function iniciarTemporizador() {
  const display = document.getElementById("temporizador");
  let tiempo = 30000; // 30 segundos en milisegundos
  const intervalo = 10;

  if (temporizadorActivo) clearInterval(temporizadorActivo);

  temporizadorActivo = setInterval(() => {
    tiempo -= intervalo;
    if (tiempo <= 0) {
      clearInterval(temporizadorActivo);
      display.textContent = "00.00";
      sonidoAlarma.play();
    } else {
      const segundos = Math.floor(tiempo / 1000).toString().padStart(2, '0');
      const milis = Math.floor((tiempo % 1000) / 10).toString().padStart(2, '0');
      display.textContent = `${segundos}.${milis}`;
    }
  }, intervalo);
}

// Repetir ronda: reinicia todo
function reiniciarJuego() {
  if (temporizadorActivo) clearInterval(temporizadorActivo);
  document.getElementById("letra").textContent = "?";
  document.getElementById("categoria").textContent = "?";
  document.getElementById("temporizador").textContent = "30.00";
}
