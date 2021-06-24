const n1 = 9
const n2 = 2
const su = n1 + n2

const contenedor = document.getElementById('contenedor')

const algoritmo = document.createElement('div')
algoritmo.classList.add('algoritmo')
algoritmo.innerHTML = `
    <h1>Algoritmo Sumar</h1>
    <small>Hallar la suma de dos numeros.</small>
    <p>Entrada (1): ${n1}</p>
    <p>Entrada (2): ${n2}</p>
    <p>Salida: ${su}</p>
`

contenedor.appendChild(algoritmo)

console.log(op_math)
console.log(Math.round(op_math))


