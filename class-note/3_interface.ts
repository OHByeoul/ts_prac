interface User {
    age:number;
    name: string;
}

var mama: User = {
    age: 33,
    name : 'nana'
}

function getUser(user: User) {
    console.log(user);
}
const nana = {
    name: 'nana',
    age: 24
}
getUser(nana);

interface SumFunction {
    (a:number,b:number):number;
}

var sum: SumFunction;
sum = function(a:number,b:number):number {
    return a+b;
}

interface StringArray {
    [index:number]: string;
}

var arr:StringArray = ['a','b','c'];

interface StringRegexDictionary {
    [key: string]:RegExp;
}

var obj: StringRegexDictionary = {
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

Object.keys(obj).forEach(function(value){});

// interface Person {
//     name: string;
//     age: number;
// }

interface Developer extends Person{
    language: string;
}

var aa: Developer = {
    name:'nana',
    age: 27,
    language: 'rrr'
}