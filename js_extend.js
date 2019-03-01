//js继承

function  Animal(name){
    this.name = name
    this.sleep = function() {
        console.log(`${this.name} is sleeping....`)
    }
    
}
Animal.prototype.eat = function(food) {
    console.log(`${this.name} eat ${food}`)
}
//1.原型链继承 :子构造函数.prototype = new 父构造函数()
function Cat() {}
Cat.prototype = new Animal('cat')
Cat.prototype.construtor = Cat
console.log(cat.name)
cat.sleep()
cat.eat()
//end
//2. 构造函数继承 使用call和apply借用其他构造函数的成员, 可以解决给父构造函数传递参数的问题, 
function Dog(name,leg) {
    Animal.call(this, name)
    this.name = name || 'erha'
    this.leg = leg
}
let dog = new Dog('haha')
console.log(dog.leg)
dog.sleep()
dog.eat()

//3. 组合继承 借用构造函数 + 原型式继承

// 创建子构造函数
function Pig(name, leg) {
    Animal.call(this, name)
    this.leg = leg
}
Pig.prototype = new Animal('pig')
Pig.prototype.construtor = Pig
 
let pig = new Pig('peiqi', 4)
console.log(pig.leg)
