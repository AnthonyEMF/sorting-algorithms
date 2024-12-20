// Cargar todo el DOM
document.addEventListener('DOMContentLoaded', function(){
    // Eventos
    btnAgregar.addEventListener('click', () => agregarDato(8, 20));
    btnRandom.addEventListener('click', () => graficoAleatorio(8, 20));
    btnOrdenar.addEventListener('click', () => iniciarOrdenamiento(algoritmoSeleccion));
    btnLimpiar.addEventListener('click', () => detenerOrdenamiento(visualizacion, ''));
    // Agregar dato cuando se presione la tecla "Enter"
    inputDatos.addEventListener('keypress', e => {
        if(e.key === "Enter"){
            agregarDato(8, 20);
        }
    });
});

/* ----- Funciones Principales ----- */

// Funcion para implementar el algoritmo de seleccion
async function algoritmoSeleccion() {
    for (let i = 0; i < arreglo.length - 1; i++) {
      // Encuentra el índice del elemento más pequeño en la sección no ordenada
      let minimo = i;
      for (let j = i + 1; j < arreglo.length; j++) {
        // if (detener) return; // Si se detiene el proceso, salir de la función
  
        // Visualizar comparaciones
        const recuadros = document.querySelectorAll(".recuadro");
        recuadros[j].style.backgroundColor = "red";
        recuadros[minimo].style.backgroundColor = "green";
        await new Promise((resolve) => setTimeout(resolve, 400)); // Esperar 400 ms
  
        if (arreglo[j] < arreglo[minimo]) {
          minimo = j; // Actualiza el índice del elemento más pequeño
        }
  
        // Restaurar el color original de las recuadros después de la comparación
        recuadros[j].style.backgroundColor = "dodgerblue";
        recuadros[minimo].style.backgroundColor = "dodgerblue";
      }

      if (detener) return;
  
      // Intercambia el elemento mínimo con el elemento actual
      if (i !== minimo) {
        [arreglo[i], arreglo[minimo]] = [arreglo[minimo], arreglo[i]]; // Intercambia elementos
        imprimirArreglo(arreglo); // Actualiza la visualización
      }
    }
}

// Funcion para renderizar el arreglo en forma de recuadros
function imprimirArreglo(){
    limpiarHTML(visualizacion);

    arreglo.forEach((dato) => {
        const divRecuadro = document.createElement('div');
        divRecuadro.classList.add('recuadro');
        divRecuadro.textContent = dato;

        visualizacion.appendChild(divRecuadro);
    });
}