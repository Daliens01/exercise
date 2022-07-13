let span = document.getElementsByClassName("adicional")

 function muestra(){
    span[0].attributes[0].nodeValue = `adicional visible`
    addEventListener("click",()=>{
        span[0].attributes[0].nodeValue = `adicional oculto`
    })
}