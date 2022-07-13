let d1 = []
let d2 = []
let suma = [];
let res= {}
let array= []
for (let i = 1; i <= 36; i++) {
    d1[i] = Math.round(Math.random() * 6)
    d2[i] = Math.round(Math.random() * 6)
    suma[i] = (d1[i] + d2[i])
    
document.write(`dado 1: [${d1[i]}] y dado 2: [${d2[i]}] = la suma de los dos es: ${suma[i]}<br>`)

}

document.write(`array de suma: [${suma.sort()}]<br>`)
const as = suma.forEach(el => (res[el] = res[el] + 1 || 1))
document.write(`los numeros totales repetidos son: ${ suma.forEach(el => (res[el] = res[el] + 1 || 1))}`)
// for (let i = 1; i <= 36.000; i++) {
//     array[i]= suma
    
//     document.write(`array de suma: [${array[i]}]<br>`)
//     }

