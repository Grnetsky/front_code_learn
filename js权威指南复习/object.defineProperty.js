let chinaMapShadow = {value:0}
Object.defineProperty(chinaMapShadow,'value',{
  set(v) {
    console.log("chinaMapShadow改变",v)
    return '123'
  },
  get(){
    console.log("chinaMapShadow获取")
    return 666

  }
})

chinaMapShadow.value = 123
console.log(chinaMapShadow.value)