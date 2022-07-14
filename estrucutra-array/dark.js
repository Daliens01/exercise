class Array{
    constructor(){
        this.length = 0
        this.data = {}
    }

    get(i){
        return this.data[i]
    }

    push(i){
        this.data[this.length] = i
        this.length++
        return this.data
    }
    pop(){
        const i = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return i
    }
    delete(i){
        const item = this.data[i]

        this.shiftIthis(i)
    }
    shiftIthis(index){
        for (let i = index; i < this.length; i++) {
           this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length--
    }
}