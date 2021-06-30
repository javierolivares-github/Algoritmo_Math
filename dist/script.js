// Inicio
// Entrada
let form = document.getElementById('form');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let suma = document.getElementById('suma');
let producto = document.getElementById('producto');
let división = document.getElementById('división');
let promedio = document.getElementById('promedio');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if ((input1.value === "") || (input2.value === "")) {
        console.log('error: caracter vacio');
    } 
    else if (isNaN(input1.value) || isNaN(input2.value)) {
        console.log('error: no es un número');
    } 
    else {
        // Proceso
        let su = Number(input1.value) + Number(input2.value);
        let mu = Number(input1.value) * Number(input2.value);
        let di = Number(input1.value) / Number(input2.value);
        let pro = su/2;

        if (!isFinite(di)) {
            di = 'operación no permitida';
        }

        // Salida consola
        console.log('La suma de tus números es: ' + su);
        console.log('La multiplicación de tus números es: ' + mu);
        console.log('La división de tus números es: ' + di);
        console.log('El promedio de tus números es: ' + pro);

        // Salida pantalla
        suma.innerText = 'La suma de tus números es: ' + su;
        producto.innerText = 'La multiplicación de tus números es: ' + mu;
        división.innerText = 'La división de tus números es: ' + di;
        promedio.innerText = 'El promedio de tus números es: ' + pro;
    };
})

// Fin


