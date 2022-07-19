//imprimir impuesto y añadirlo al array de objetos
const solution = (array) => array.map(i => ({...i,taxes: Math.trunc(i.price * .19)}))

console.log(solution([
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    }
  ]))
//filtrar por tamaño de letras
const letter =(array)=> array.filter(word => word.length >= 4)
console.log(letter(["uno","dos","tres","cuatro"]))

//filtrar total maximo y delivered enviado
const  buy =(array) =>  array.filter(array => array.total >= 100 && array.delivered == true)
console.log(buy([
  {
    customerName: "Nicolas",
    total: 100,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  }
]))

//
const solution2 =(word, query) =>{
  if(word.includes("ana") && query.includes("ana")){
    console.log(true)
  }else{
    console.log(false)
  }
}

solution2("Ana lava la tina", "ana")
solution2("Santiago", "tiago")
solution2("Nicolas", "ana")