class Client{
    constructor(Clientname){
        this.Clientname = Clientname
    }
    getClient(){
        return this.client
    }
}

class Cafetería extends Client{
    constructor(name,client){
        super(client)
        this.name = name
    }
    getCafe(client){
        if(client){
            return ` la Cafetería ${this.name}, ha preparado un cafe para ${client}`
        }else{
            return ` la Cafetería ${this.name}, ha preparado un cafe para ${this.Clientname}`
        }
    }
    getFrappe(client){
        if(client){
            return ` la Cafetería ${this.name}, ha preparado un cafe para ${client}`
        }else{
            return ` la Cafetería ${this.name}, ha preparado un cafe para ${this.Clientname}`
        }
    }
    getTe(client){
        if(client){
            return ` la Cafetería ${this.name}, ha preparado un cafe para ${client}`
        }else{
            return ` la Cafetería ${this.name}, ha preparado un cafe para ${this.Clientname}`
        }
    }
    getSand(client){
        if(client){
            return ` la Cafetería ${this.name}, ha preparado un cafe para ${client}`
        }else{
            return ` la Cafetería ${this.name}, ha preparado un cafe para ${this.Clientname}`
        }
    }
}
const coffee = new Cafetería("Italian Coffee","Heberto")
const cliente = new Client("alex")
let otroNombre = cliente.getClient()
console.log(coffee.getCafe(otroNombre||"alex"))
console.log(coffee.getFrappe())
console.log(coffee.getTe())
console.log(coffee.getSand())