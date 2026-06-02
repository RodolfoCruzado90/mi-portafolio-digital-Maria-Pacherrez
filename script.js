// ================= ANIMACIÓN DE SECCIONES =================

const reveals = document.querySelectorAll(".reveal");

function mostrarSecciones() {

    reveals.forEach((elemento) => {

        const alturaVentana = window.innerHeight;
        const distanciaElemento = elemento.getBoundingClientRect().top;
        const puntoVisible = 100;

        if (distanciaElemento < alturaVentana - puntoVisible) {

            elemento.classList.add("active");

        }

    });

}

window.addEventListener("scroll", mostrarSecciones);
window.addEventListener("load", mostrarSecciones);

// ================= MENÚ ACTIVO =================

const enlaces = document.querySelectorAll(".nav-links a");

enlaces.forEach(enlace => {

    enlace.addEventListener("click", () => {

        enlaces.forEach(item => item.classList.remove("activo"));

        enlace.classList.add("activo");

    });

});