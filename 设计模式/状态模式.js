class Context{
  #states = []

  constructor(){
    
  }
  addState(state){
    if(this.#states.includes(state))return false
    this.#states.push(state)
  }  

  removeState(state){
    if(!this.#states.includes(state))return false
    return this.#states.splice(this.#states.indexOf(state),1)
  }

  behaviour(){
    this.#states.forEach((i)=>{
      i
    })
  }
}