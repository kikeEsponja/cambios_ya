const pais = document.getElementById('pais');
let paisSeleccionado = document.getElementById("pais_seleccionado");
pais.addEventListener('change', () => {
    if (pais.value === '') {
        paisSeleccionado.textContent = 'Seleccione un país';
    }
    else {
        paisSeleccionado.textContent = 'País seleccionado: ' + pais.options[pais.selectedIndex].text;
    }
});
const cambiarTasa = document.getElementById('cambiar_tasa');
if (cambiarTasa) {
    cambiarTasa.addEventListener('click', () => {
        let tasa = document.getElementById('precio');
        if (tasa.value === '') {
            alert('Por favor, ingrese una tasa válida.');
            return;
        }
        let paisSeleccionado = pais.value;
        if (paisSeleccionado === '') {
            alert('Por favor, seleccione un país.');
            return;
        }

        localStorage.setItem(paisSeleccionado, tasa.value);
        
        alert(`Tasa actualizada a ${tasa.value}% para ${pais.options[pais.selectedIndex].text}`);
    });
}