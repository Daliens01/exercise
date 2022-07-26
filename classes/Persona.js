class Persona{
    constructor(name,last,age){
        this.name = name,
        this.last = last,
        this.age = age
    }

    getName(){
        return this.name
    }
    getLast(){
        return this.last
    }
    getAge(){
        return this.age
    }

    setName(name){
        this.name = name
    }

    setLast(last){
        this.last = last
    }

    setAge(age){
        this.age = age
    }
}

class Alumno extends Persona{
    constructor(matricula,grupo){
        super()
        this.matricula = matricula,
        this.grupo = grupo
    }
    getMatricula(){
        return this.matricula
    }

    setMatricula(matricula){
        this.matricula = matricula
    }
    getGrupo(){
        return this.grupo
    }

    setGrupo(grupo){
        this.grupo = grupo
    }

    getAll(){
        return `nombre: ${this.name}, apellido: ${this.last}, matricula: ${this.matricula}, grupo: ${this.grupo}`
    }
}

const alumno = new Alumno

alumno.setName("heberto")
alumno.setLast("ortiz")
alumno.setAge(21)
alumno.setMatricula(1283712)
alumno.setGrupo("404")

console.log(alumno.getAll())