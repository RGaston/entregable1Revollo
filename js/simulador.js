// ----- Variables y constantes -----
const categorias = ["Primera", "Segunda", "Tercera", "Cuarta", "Quinta", "Sexta"];
let jugadores = [];
let continuar = true;
git 
// ----- Clase y funciones -----
class Jugador {
  constructor(nombre, categoria) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.puntos = 0;
  }

  sumarPuntos(p) {
    this.puntos += p;
  }
}

// Función A: Registrar jugadores
function registrarJugador() {
  const nombre = prompt("Ingrese el nombre del jugador:");
  if (!nombre) return alert("Nombre inválido.");

  let categoria = prompt("Ingrese la categoría del jugador (Primera a Sexta):");
  categoria = categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase();

  if (!categorias.includes(categoria)) {
    alert("Categoría inválida.");
    return;
  }

  const nuevoJugador = new Jugador(nombre, categoria);
  jugadores.push(nuevoJugador);
  alert(`El Jugador ${nombre} fue registrado en categoría ${categoria}.`);
}

// Función B: Cargar puntos a un jugador
function asignarPuntos() {
  if (jugadores.length === 0) return alert("No hay jugadores registrados.");

  const nombre = prompt("Ingrese el nombre del jugador al que quiere sumar puntos:");
  const jugador = jugadores.find(j => j.nombre.toLowerCase() === nombre.toLowerCase());

  if (!jugador) {
    alert("Jugador no encontrado.");
    return;
  }

  const puntos = parseInt(prompt("Ingrese la cantidad de puntos a sumar:"));
  if (isNaN(puntos) || puntos < 0) return alert("Puntos inválidos.");

  jugador.sumarPuntos(puntos);
  alert(`Se sumaron ${puntos} puntos a ${jugador.nombre}. Total: ${jugador.puntos} puntos.`);
}

// Función C: Mostrar ranking en consola
function mostrarRanking() {
  if (jugadores.length === 0) return console.log("No hay jugadores registrados.");

  console.clear();
  console.log("🏆 RANKING GENERAL 🏆");
  jugadores
    .sort((a, b) => b.puntos - a.puntos)
    .forEach((j, index) => {
      console.log(
        `${index + 1}. ${j.nombre} | Categoría: ${j.categoria} | Puntos: ${j.puntos}`
      );
    });
}

// ----- Ciclo de simulación -----
while (continuar) {
  const opcion = prompt(
    "Ingrese un Número para seleccionar la opción:\n1 - Registrar jugador\n2 - Asignar puntos\n3 - Ver ranking (por consola)\n4 - Salir"
  );

  if (opcion === "1") {
    registrarJugador();
  } else if (opcion === "2") {
    asignarPuntos();
  } else if (opcion === "3") {
    mostrarRanking();
  } else if (opcion === "4") {
    continuar = false;
    alert("Simulación finalizada.");
  } else {
    alert("Opción no válida.");
  }
}
