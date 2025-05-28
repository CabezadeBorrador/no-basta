const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");

const categorias = [
  "Frutas", "Verduras", "Animales", "Países", "Ciudades", "Nombres de persona", "Profesiones", "Colores", "Partes del cuerpo", "Deportes",
  "Comidas favoritas", "Películas famosas", "Programas de televisión", "Juguetes", "Videojuegos", "Dibujos animados", "Juegos de mesa", "Superhéroes", "Villanos", "Celebraciones",
  "Cosas en la cocina", "Cosas en el baño", "Cosas en la escuela", "Cosas en la oficina", "Cosas que hay en una mochila", "Cosas que se encuentran en la playa", "Cosas que hay en una granja", "Cosas en un supermercado",
  "Medios de transporte", "Marcas de autos", "Lugares turísticos", "Cosas en un aeropuerto", "Cosas en la carretera",
  "Animales marinos", "Insectos", "Fenómenos naturales", "Planetas o cuerpos celestes", "Elementos de la tabla periódica", "Partes de una planta",
  "Marcas de ropa", "Marcas de tecnología", "Marcas de comida rápida", "Celebridades", "Redes sociales", "Canciones populares", "Grupos musicales",
  "Cosas que vuelan", "Cosas que ruedan", "Cosas que hacen ruido", "Cosas que huelen mal", "Cosas que puedes romper", "Cosas suaves", "Cosas pegajosas"
];

function generarLetra() {
  let iterations = 15;
  const display = document.getElementById("letra");

  let intervalo = setInterval(() => {
    const letraTemporal = letras[Math.floor(Math.random() * letras.length)];
    display.textContent = letraTemporal;
    iterations--;

    if (iterations <= 0) {
      clearInterval(intervalo);
      const letraFinal = letras[Math.floor(Math.random() * letras.length)];
      display.textContent = letraFinal;
    }
  }, 80);
}

function generarCategoria() {
  const categoria = categorias[Math.floor(Math.random() * categorias.length)];
  document.getElementById("categoria").textContent = categoria;
}

function iniciarTemporizador() {
  const display = document.getElementById("temporizador");
  let tiempo = 30000; // 30 segundos en milisegundos
  const intervalo = 10; // actualiza cada 10 ms

  const countdown = setInterval(() => {
    tiempo -= intervalo;
    if (tiempo <= 0) {
      clearInterval(countdown);
      display.textContent = "00.00";
      new Audio("chicharra.mp3").play(); // sonido final
    } else {
      const segundos = Math.floor(tiempo / 1000).toString().padStart(2, '0');
      const milis = Math.floor((tiempo % 1000) / 10).toString().padStart(2, '0');
      display.textContent = `${segundos}.${milis}`;
    }
  }, intervalo);
}

function reiniciar() {
  document.getElementById("letra").textContent = "-";
  document.getElementById("categoria").textContent = "-";
  document.getElementById("temporizador").textContent = "30.00";
}
