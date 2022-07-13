const cont = document.querySelectorAll("a")
const p = document.querySelectorAll("p")
let residuo = []
document.write(`numero de enlaces de la pagina es: ${cont.length}<br>`)
for (let i = 0; i < cont.length; i++) {
    
    residuo = cont[i-1]
}
document.write(`el penultimo enlace es: <a href="#">${residuo}</a><br>`)
for (let i = 0; i < cont.length; i++) {
    if(cont[i].attributes[0].nodeValue == "http://prueba"){
    residuo = cont[i].ATTRIBUTE_NODE +1

    console.log(residuo)
    } 
}

document.write(`el numero de enlaces que se coinciden con http://prueba son: ${residuo}<br>`)
document.write(`Número de enlaces del tercer párrafo es: ${p[2].children.length} <br>`)

