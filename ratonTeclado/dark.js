let raton = document.getElementById("raton")
let tec = document.getElementById("teclado")

function muestraInformacion(event){
    raton.innerHTML = `eje x: ${event.pageX} y eje Y: ${event.pageY} <br> eje x: ${event.clientX} y eje Y: ${event.clientY}`
    box1.style.backgroundColor = "#FFF"
  
}

window.addEventListener('mousemove', muestraInformacion);
window.addEventListener('keypress', (e)=>{
    tec.innerHTML = `tecla ${e.key}, codigo de tecla ${e.keyCode}`
    box2.style.backgroundColor =  "#CCE6FF"
});


box1.addEventListener("click",()=>{
    box1.style.backgroundColor = "#FFFFCC"
})