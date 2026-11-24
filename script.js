// =========================================
// 1. CONFIGURACIÓN DEL WHATSAPP DE JOSEFINA
// =========================================
// Reemplazá los ceros por el número real de Jose (sin el + ni espacios)
// En Argentina (La Plata): 549 + 221 + número sin el 15
const TELEFONO_JOSE = "5491132493539";

const formulario = document.getElementById("form-turno");
const selectServicio = document.getElementById("servicio");
const inputNombre = document.getElementById("nombre");
const tarjetasTrabajos = document.querySelectorAll(".item-galeria");

// =========================================
// 2. AL TOCAR UN TRABAJO, IR AL FORMULARIO
// =========================================
tarjetasTrabajos.forEach(function (tarjeta) {
  tarjeta.addEventListener("click", function () {
    const servicioElegido = tarjeta.getAttribute("data-servicio");

    if (servicioElegido && selectServicio) {
      selectServicio.value = servicioElegido;
    }

    const seccionTurnos = document.getElementById("turnos");
    if (seccionTurnos) {
      seccionTurnos.scrollIntoView({ behavior: "smooth" });
    }

    if (inputNombre) {
      setTimeout(function () {
        inputNombre.focus();
      }, 500);
    }
  });
});

// =========================================
// 3. ENVIAR CONSULTA ARMADA A WHATSAPP
// =========================================
if (formulario) {
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = inputNombre ? inputNombre.value.trim() : "";
    const servicio = selectServicio ? selectServicio.value : "";
    const inputFranja = document.getElementById("franja");
    const franja = inputFranja ? inputFranja.value.trim() : "";

    let mensaje = `Hola Jose! Soy *${nombre}* ✨\n`;
    mensaje += `Te escribo desde la web de *Poonte Lindaaa* para consultar por un turno:\n\n`;
    mensaje += `• *Servicio:* ${servicio}\n`;

    if (franja !== "") {
      mensaje += `• *Día / Horario preferido:* ${franja}\n`;
    }

    mensaje += `\n¿Qué disponibilidad tenés?`;

    const mensajeCodificado = encodeURIComponent(mensaje);
    const urlWhatsApp = `https://wa.me/${TELEFONO_JOSE}?text=${mensajeCodificado}`;

    window.open(urlWhatsApp, "_blank", "noopener,noreferrer");
  });
}

// =========================================
// 4. FLECHAS DEL CARRUSEL DE TRABAJOS
// =========================================
const carrusel = document.getElementById("carrusel-trabajos");
const btnIzquierda = document.querySelector(".btn-izq");
const btnDerecha = document.querySelector(".btn-der");

if (carrusel && btnIzquierda && btnDerecha) {
  btnDerecha.addEventListener("click", function () {
    carrusel.scrollBy({ left: 300, behavior: "smooth" });
  });

  btnIzquierda.addEventListener("click", function () {
    carrusel.scrollBy({ left: -300, behavior: "smooth" });
  });
}