let ingresar = document.getElementById("ingresar");
//let formulario = document.getElementById("formulario");
let nombre = document.getElementById("nombre");

if(ingresar){
    ingresar.addEventListener("click", function(event) {
        event.preventDefault();
        if (nombre.value.trim() === "") {
            alert("Por favor, ingresa tu nombre.");
        } else {
            alert(`Bienvenido ${nombre.value}, disfruta de los mejores cambios y tasas.`);
            //formulario.reset();
            // Aquí podrías redirigir a otra página o realizar otra acción
            window.location.href = "./vistas/cambios.html"; // Ejemplo de redirección
        }
    });
}

let resultado = document.getElementById("resultado");
let convertir = document.getElementById("convertir");
if(convertir){
    convertir.addEventListener("click", function(event) {
        event.preventDefault();
        let cantidad = parseFloat(document.getElementById("cantidad").value);
        //let monedaOrigen = document.getElementById("monedaOrigen").value;
        //let monedaDestino = document.getElementById("monedaDestino").value;

        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Por favor, ingresa una cantidad válida.");
            return;
        }

        // Aquí podrías implementar la lógica de conversión de monedas
        // Por simplicidad, asumiremos una tasa de cambio ficticia
        let tasaCambio = 1.2; // Ejemplo de tasa de cambio
        let resultadoConversion = cantidad * tasaCambio;

        resultado.textContent = `Resultado: ${resultadoConversion.toFixed(2)}`;
    });
}
/*let monedas = document.getElementById("monedas");
monedas.addEventListener("change", function() {
    let monedaSeleccionada = monedas.value;
    // Aquí podrías implementar la lógica para actualizar las tasas de cambio
    // Por simplicidad, asumiremos que las tasas son fijas
    if (monedaSeleccionada === "USD") {
        document.getElementById("tasaCambio").textContent = "Tasa de cambio: 1 USD = 1.2 EUR";
    } else if (monedaSeleccionada === "EUR") {
        document.getElementById("tasaCambio").textContent = "Tasa de cambio: 1 EUR = 0.83 USD";
    } else {
        document.getElementById("tasaCambio").textContent = "Tasa de cambio no disponible.";
    }
});*/