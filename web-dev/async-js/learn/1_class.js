class Rectrangle{
    constructor(length, breadth, color){
        this.length = length
        this.breadth = breadth
        this.color = color
    }
    area(){
        return this.length*this.breadth
    }
    print(){
        console.log("Color is: " + this.color)
    }
}

const rect = new Rectrangle(10, 20, "blue")
console.log(rect.area())
rect.print()

//Predefined Class
const time = new Date()
console.log(time.getFullYear())

const map = new Map()
map.set('name', 'Seven')
map.set('age', 22)
console.log(map.get('age'))