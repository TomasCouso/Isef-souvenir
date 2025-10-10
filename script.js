const frases = [
  "El juego une lo que la rutina separa.",
  "Jugar también es aprender.",
  "Un juego, mil risas.",
  "El movimiento es alegría.",
  "La magia del juego está en compartirlo.",
  "No hay edad para jugar.",
  "Cada juego deja una historia.",
  "El juego nos conecta sin palabras.",
  "Donde hay juego, hay energía.",
  "Jugando se construye comunidad.",
  "Moverse también es expresarse.",
  "Cada risa suma puntos.",
  "Jugar libera lo mejor de nosotros.",
  "El juego no termina, solo cambia de forma.",
  "La mejor estrategia es divertirse.",
  "Jugar es volver a lo esencial.",
  "Donde hay juego, hay vida.",
  "Jugá, reí, repetí.",
  "El cuerpo habla cuando juega.",
  "Nada une tanto como una buena ronda.",
  "El juego transforma espacios en experiencias.",
  "Lo importante no es ganar, es disfrutar.",
  "En cada juego nace una historia nueva.",
  "Jugando también se enseña.",
  "El juego empieza cuando te olvidás del reloj.",
  "Risa compartida, energía multiplicada.",
  "El juego no se explica, se vive.",
  "Cada juego deja una chispa.",
  "El juego rompe el hielo y enciende vínculos.",
  "Una ronda vale más que mil discursos.",
  "El juego nos hace parte.",
  "Cuando jugamos, todo cobra sentido.",
  "El movimiento también comunica.",
  "Donde hay juego, hay confianza.",
  "Cada juego es una excusa para encontrarnos.",
  "Jugar es hacer arte con el cuerpo.",
  "Las reglas cambian, la diversión queda.",
  "El juego despierta lo que la rutina duerme.",
  "Jugando nos descubrimos.",
  "El juego no tiene idioma.",
  "Cada juego deja un recuerdo distinto.",
  "Jugar es crear sin miedo.",
  "Nada más serio que jugar de verdad.",
  "El juego contagia alegría.",
  "Una risa puede cambiar el día.",
  "El cuerpo aprende jugando.",
  "El juego es el lenguaje universal.",
  "El juego nos recuerda quiénes somos.",
  "Jugá, disfrutá, conectá.",
  "El juego deja huellas invisibles.",
];

const frase = frases[Math.floor(Math.random() * frases.length)];
document.getElementById("phrase").textContent = frase;

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
let fogParticles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

function createFog() {
  for (let i = 0; i < 50; i++) {
    fogParticles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 250 + 100, // tamaño grande
      speedX: (Math.random() - 2) * 2, // movimiento suave
      speedY: (Math.random() - 0.5) * 0.1,
      alpha: Math.random() * 0.05 + 0.03, // transparencia baja
    });
  }
}

function drawFog() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fogParticles.forEach((p) => {
    const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
    gradient.addColorStop(0, `rgba(255, 255, 255, ${p.alpha})`);
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x - p.r > canvas.width) p.x = -p.r;
    if (p.x + p.r < 0) p.x = canvas.width + p.r;
    if (p.y - p.r > canvas.height) p.y = -p.r;
    if (p.y + p.r < 0) p.y = canvas.height + p.r;
  });
}

createFog();

function animate() {
  drawFog();
  requestAnimationFrame(animate);
}
animate();