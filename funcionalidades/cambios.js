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

let boton = document.getElementById('calcular');
if(boton){
    boton.addEventListener('click', () => {
        let resultado = document.getElementById('resultado');
        let impuesto = 0;

        let pais = document.getElementById('pais');
        if(pais.value == 'arg'){
            impuesto = 21;
        }else if(pais.value == 'bra'){
            impuesto = 18;
        }else if(pais.value == 'chi'){
            impuesto = 19;
        }else if(pais.value == 'col'){
            impuesto = 19;
        }else if(pais.value == 'ven'){
            impuesto = 16;
        }else{
            resultado.textContent = 'país no válido';
        }

        let monto = parseFloat(document.getElementById('precio').value);
        let iva = (monto * impuesto) / 100;
        let total = (monto + iva);
        if(!monto){
            alert('ingrese un monto');
        }
        if(isNaN(total)){
            resultado.textContent = 'cálculo no válido';
            return;
        }
        resultado.innerHTML = 'el monto total es: ' + total;
    });

    const reset = document.createElement('button');
    const contenedor = document.querySelector('center');
    reset.textContent = 'limpiar';

    reset.addEventListener('click', () => {
        let entrada = document.getElementById('precio');
        entrada.value = '';
        resultado.innerHTML = '';
    });

    contenedor.appendChild(reset);
}
let fecha = document.getElementById('fecha');
if(fecha){
    let fechaActual = new Date();
    let opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    fecha.textContent = fechaActual.toLocaleDateString('es-ES', opciones);
}