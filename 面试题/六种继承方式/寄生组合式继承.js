//核心代码
function object(person) {
    function F(params) {}
    F.prototype = person
    return new F()
}
function inheritPrototype(SubType,SuperType) {
    let prototype = object(SuperType.prototype) //生成一个父类原型的副本

    //重写这个实例的constructor
    prototype.constructor = SubType

    //将这个对象副本赋值给 子类的原型
    SubType.prototype = prototype
}

function SuperType(name) {
    this.name = name;
    this.colors = ["red","blue","green"];
}
SuperType.prototype.sayName = function() {
    console.log(this.name);
};
function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}

//调用inheritPrototype函数给子类原型赋值,修复了组合继承的问题
inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function() {
    console.log(this.age);
};
