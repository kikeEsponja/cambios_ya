// ********************************* PARA LA PRIMERA PÁGINA *********************************
let ingresar = document.getElementById("ingresar");     // Botón para ingresar
let nombre = document.getElementById("nombre");         // Campo de entrada para el nombre

if(ingresar){
    ingresar.addEventListener("click", function(event) {
        event.preventDefault();
        if (nombre.value.trim() === "") {
            alert("Por favor, ingresa tu nombre.");
        } else {
            alert(`Bienvenido ${nombre.value}, disfruta de los mejores cambios y tasas.`);
            window.location.href = "./vistas/cambios.html"; // Ejemplo de redirección
        }
    });
}
// ********************************* PARA LA SEGUNDA PÁGINA *********************************
let boton = document.getElementById('calcular');
if(boton){
    boton.addEventListener('click', () => {
        let resultado = document.getElementById('resultado');
        let resultado_dolar = document.getElementById('resultado_dolar');
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
        resultado.innerHTML = 'el monto total en Bolívares es: ' + total;
        resultado_dolar.innerHTML = 'el monto total en Dólares es: ' + total / 1300;
    });
}    
const reset = document.createElement('button');
const continuar = document.createElement('button');
continuar.textContent = 'continuar';
continuar.setAttribute('data-bs-toggle', 'modal');
continuar.setAttribute('data-bs-target', '#exampleModal');
const contenedor = document.querySelector('center');
reset.textContent = 'limpiar';

reset.addEventListener('click', () => {
    let entrada = document.getElementById('precio');
    entrada.value = '';
    resultado.innerHTML = '';
});

let fecha = document.getElementById('fecha');
if(fecha){
    let fechaActual = new Date();
    let opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    fecha.textContent = fechaActual.toLocaleDateString('es-ES', opciones);
}

let tasa = document.getElementById('tasa');
if(pais && tasa){
    pais.addEventListener('change', () => {
        if(pais.value === 'arg'){
            tasa.textContent = '21%';
        }else if(pais.value === 'bra'){
            tasa.textContent = '18%';
        }else if(pais.value === 'chi'){
            tasa.textContent = '19%';
        }else if(pais.value === 'col'){
            tasa.textContent = '19%';
        }else if(pais.value === 'ven'){
            tasa.textContent = '16%';
        }else{
            tasa.textContent = '';
        }
    });
    if(pais.value ){
        pais.dispatchEvent(new Event('change')); // Dispara el evento para establecer la tasa al cargar
    }
}
contenedor.appendChild(reset);
contenedor.appendChild(continuar);

let fin = document.getElementById('go');
if(fin){
    fin.addEventListener('click', () => {
        window.location.href = 'https://wa.me/+5491157335475?text=Hola,%20estoy%20interesado%20en%20contactarte.';
    });
}

let volver = document.getElementById('volver');
if(volver){
    volver.addEventListener('click', () => {
        window.history.back();
    });
}