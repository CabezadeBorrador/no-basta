const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const categorias = [
  "Animales", "Animales marinos", "Insectos",
  "Frutas", "Verduras", "Comidas favoritas", "Marcas de comida rápida",
  "Países", "Ciudades", "Lugares turísticos",
  "Colores", "Fenómenos naturales", "Planetas o cuerpos celestes", "Elementos de la tabla periódica", "Partes de una planta",
  "Nombres de persona", "Profesiones", "Celebridades",
  "Películas famosas", "Programas de televisión", "Dibujos animados", "Videojuegos", "Juegos de mesa", "Canciones populares", "Grupos musicales",
  "Superhéroes", "Villanos", "Celebraciones",
  "Juguetes", "Cosas en la cocina", "Cosas en el baño", "Cosas en la escuela", "Cosas en la oficina", "Cosas que hay en una mochila",
  "Cosas que se encuentran en la playa", "Cosas que hay en una granja", "Cosas en un supermercado",
  "Partes del cuerpo", "Deportes", "Medios de transporte", "Marcas de autos", "Marcas de ropa", "Marcas de tecnología", "Redes sociales",
  "Cosas que vuelan", "Cosas que ruedan", "Cosas que hacen ruido", "Cosas que huelen mal", "Cosas que puedes romper", "Cosas suaves", "Cosas pegajosas",
  "Cosas en un aeropuerto", "Cosas en la carretera"
];

let temporizador;
let tiempoRestante = 60;

function generarLetra() {
  const letra = letras[Math.floor(Math.random() * letras.length)];
  document.getElementById("letra").textContent = letra;
}

function generarCategoria() {
  const categoria = categorias[Math.floor(Math.random() * categorias.length)];
  document.getElementById("categoria").textContent = categoria;
}

function iniciarTemporizador() {
  clearInterval(temporizador);
  tiempoRestante = 60;
  actualizarTemporizador();
  temporizador = setInterval(() => {
    tiempoRestante--;
    actualizarTemporizador();
    if (tiempoRestante <= 0) {
      clearInterval(temporizador);
      document.getElementById("alarma").play();
    }
  }, 1000);
}

function actualizarTemporizador() {
  const minutos = String(Math.floor(tiempoRestante / 60)).padStart(2, "0");
  const segundos = String(tiempoRestante % 60).padStart(2, "0");
  document.getElementById("temporizador").textContent = `${minutos}:${segundos}`;
}

function reiniciarJuego() {
  document.getElementById("letra").textContent = "-";
  document.getElementById("categoria").textContent = "-";
  document.getElementById("temporizador").textContent = "01:00";
  clearInterval(temporizador);
}
