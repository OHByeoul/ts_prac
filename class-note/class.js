function P(name,age) {
    this.name = name;
    this.age = age;
}

var s = new personalbar('cc',44);

class P {
    constructor(name, age){
        console.log('create');
        this.name = name;
        this.age = age;
    }
}

var p = new P('dd',24);
console.log(p);