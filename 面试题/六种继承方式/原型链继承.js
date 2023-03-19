function Father() {
    this.fatherName = "fatherName"
}
Father.prototype.getFatherName = function () {
    return this.fatherName
}

function Child(){
    this.childName = "childName"
}

Child.prototype = new Father()

Child.prototype.getChildName = function () {
    return this.childName
}
let child = new Child()
let child2 = Object.create(child)
console.log(child2.childName)
console.log(child.childName)
