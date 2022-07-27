//arrays y sus funciones
console.log("imprimir impuesto y añadirlo al array de objetos")
const solution = (array) => array.map(i => ({...i,taxes: Math.trunc(i.price * 0.19)}))

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

console.log("filtrar por tamaño de letras")
const letter =(array)=> array.filter(word => word.length >= 4)
console.log(letter(["uno","dos","tres","cuatro"]))


console.log("filtrar total maximo y delivered enviado")
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


console.log("Busca dentro de un string y descubre si ¿Tiene la clave?")
const solution2 =(word, query) => console.log(word.toLowerCase().includes(query.toLowerCase()))
solution2("Ana lava la tina", "ana")
solution2("Santiago", "tiago")
solution2("Nicolas", "ana")


console.log("Crea un buscador que retorne palabras de acuerdo parámetro de búsqueda")
const solution3 =(words, query) => console.log( words.filter(word => word.includes(query)))
solution3(["ana", "santi", "nico", "anastasia"], "an");
solution3(["ana", "santi", "nico", "anastasia"], "xyz");
solution3(["ana", "santi", "nico", "anastasia"], "ni");


console.log("Calcula la suma total de los elementos")
const suma = (n) => console.log(n.reduce((count, item) => count + item, 0))
suma([1, 1, 1]);
suma([2, 4, 8]);


console.log("suma los elementos de la lista de objetos")
const suma2 = orders =>{
  console.log(orders
    .map((item) => item.total)
    .reduce((count, item) => count + item, 0))
}
suma2([
  {
    customerName: "Nicolas",
    total: 100,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
]);


console.log("determinar si un numero del array es par")
const pares = (array)=> console.log(array.some((item) => item % 2 === 0))

pares([1, 3, 5, 7, 10, 11])
pares([1, 3, 5])


console.log("determinar si todos los elementos son par")
const todos = array => console.log(array.every((item) => item % 2 === 0 ))

todos([2, 4, 6, 8, 10]);
todos([1, 3, 5, 7, 10, 11]);
todos([1, 3, 5]);

console.log("Resuelve si dentro de una lista de cartas tienes el AS")
const as = (card)=> {
  let cards = card.find((item) => item === "AS"); 
  return cards|| false
}

console.log(as(['diamonds', 'hearts', 'spades', 'AS']))
console.log(as(['diamonds', 'hearts', 'spades']))

console.log("Retorna la posición de una llave dentro de una lista")
const llave =(words)=>{
  const index = words.findIndex((item) => item === 'myKey')
  return index !== -1 ? index : false;
}; 
console.log(llave(["diamonds", "myKey", "spades", "AS"]))
console.log(llave(["diamonds", "hearts", "spades"]))
console.log(llave(["myKey", "hearts", "spades"]))

console.log("Transforma un string y sepáralo por comas, como en un CSV")
const csv = (words)=> console.log(words.join(","))
csv(["amor", "sol", "piedra", "día"])
csv(["diamonds", "hearts", "spades"])

console.log("Construye una URL con base a un string")
const url = (title)=> console.log(title.split(' ').join('-').toLowerCase())
url("La forma de correr Python")
url("La API para nunca parar de aprender")
url("Curso de arrays")

//recursividad

console.log("recursividad ")

const recursividad = st =>{
  if(st === 0)return 
  console.log(st)
  return rec(st-1)
}

recursividad(5)

console.log("recursividad | Escribe un programa que invierta una cadena usando recursión. ")

const word = st =>{
  if(st.length < 0)return 
  console.log(st[st.length-1])
  let a = st[st.length-1]
  return word(a)
}

// word("ose")