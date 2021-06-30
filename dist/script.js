// Inicio
// Entrada
let form = document.getElementById('form');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let suma = document.getElementById('suma');
let producto = document.getElementById('producto');
let división = document.getElementById('división');
let promedio = document.getElementById('promedio');



// Función Mostrar Error
function mostrarError (mensaje) {
    const error = document.getElementById('error');
    error.className = 'error mensajeError';
    const msjError = document.getElementById('msjError');
    msjError.innerText = mensaje; 
}

// Función Limpiar Error
function limpiarError () {
    const error = document.getElementById('error');
    error.className = 'error';
}

// Escucha de evento
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if ((input1.value === "") || (input2.value === "")) {
        mostrarError('Error: caracter vacio');
        setTimeout(limpiarError, 3000);
    } 
    else if (isNaN(input1.value) || isNaN(input2.value)) {
        mostrarError('Error: no es un número');
        setTimeout(limpiarError, 3000);
    }
    else {
        // Proceso
        let su = Number(input1.value) + Number(input2.value);
        let mu = Number(input1.value) * Number(input2.value);
        let di = Number(input1.value) / Number(input2.value);
        let pro = su/2;

        if (!isFinite(di)) {
            di = 'Operación no permitida';
        }

        // Salida consola
        console.log('La suma de tus números es: ' + Math.round(su * 100) / 100);
        console.log('La multiplicación de tus números es: ' + Math.round(mu * 100) / 100);
        console.log('La división de tus números es: ' + Math.round(di * 100) / 100);
        console.log('El promedio de tus números es: ' + Math.round(pro * 100) / 100);

        // Salida pantalla
        suma.innerText = 'La suma de tus números es: ' + Math.round(su * 100) / 100;
        producto.innerText = 'La multiplicación de tus números es: ' + Math.round(mu * 100) / 100;
        división.innerText = 'La división de tus números es: ' + Math.round(di * 100) / 100;
        promedio.innerText = 'El promedio de tus números es: ' + Math.round(pro * 100) / 100;
    };
})

// Fin


