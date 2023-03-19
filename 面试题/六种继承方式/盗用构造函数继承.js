function Father() {
    this.fatherName = "fatherName"
}

function Child() {
    Father.call(this)
}
let child = new Child()
console.log(child.fatherName)
