// Inicio
// Entrada
const form = document.getElementById('form');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const suma = document.getElementById('suma');
const producto = document.getElementById('producto');
const división = document.getElementById('división');
const promedio = document.getElementById('promedio');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (input1.value !== "" && input2.value !== "") {
        // Proceso
        const su = parseInt(input1.value) + parseInt(input2.value);
        const mu = parseInt(input1.value) * parseInt(input2.value);
        const di = parseInt(input1.value) / parseInt(input2.value);
        const pro = su/2;

        // Salida consola
        console.log('La suma de tus números es: ' + su);
        console.log('La multiplicación de tus números es: ' + mu);
        console.log('La división de tus números es: ' + di);
        console.log('El promedio de tus números es: ' + pro);

        // Salida pantalla
        suma.innerText = `La suma de tus números es: ${su}`
        producto.innerText = `La multiplicación de tus números es: ${mu}`
        división.innerText = `La división de tus números es: ${di}`
        promedio.innerText = `El promedio de tus números es: ${pro}`

    } else {
        // Salida
        console.log('Inserte los valores de n1 y n2.')
    }
})

// Fin


