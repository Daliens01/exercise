let a = document.getElementById("1")
let a2 = document.getElementById("2")
let a3 = document.getElementById("3")
let p = document.getElementById("p1")
let p2 = document.getElementById("p2")
let p3 = document.getElementById("p3")

p.style.display = "block"
p2.style.display = "block"
p3.style.display = "block"

a.addEventListener("click",()=>{
    if(p.style.display == "block"){
        p.style.display ="none" 
        a.innerText = "Mostrar contenidos"
    }else if(p.style.display == "none"){
        p.style.display = "block"
        a.innerText = "Ocultar contenidos"
    }
   
})
a2.addEventListener("click",()=>{
    if(p2.style.display == "block"){
        p2.style.display ="none" 
        a2.innerText = "Mostrar contenidos"
    }else if(p2.style.display == "none"){
        p2.style.display = "block"
        a2.innerText = "Ocultar contenidos"
    }
   
})
a3.addEventListener("click",()=>{
    if(p3.style.display == "block"){
        p3.style.display ="none" 
        a3.innerText = "Mostrar contenidos"
    }else if(p3.style.display == "none"){
        p3.style.display = "block"
        a3.innerText = "Ocultar contenidos"
    }
   
})