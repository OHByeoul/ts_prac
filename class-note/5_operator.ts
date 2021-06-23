// function logMessage(value: string){
//     console.log(value);
// }

logMessage('hh');
logMessage(100);

function logMessage(value: string|number){
    console.log(value);
}

function message(val: string|number){
    if(typeof val === 'number'){
        val.toLocaleString();
    }
    if(typeof val ==='string'){
        val.toString();
    }
    throw new TypeError('val must be string or number');
}

interface Developer {
    name: string;
    skill: string;
}

interface Per {
    name: string;
    skill: string;
}

function ask(someone: Developer|Per){

}