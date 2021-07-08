// function logText(text){
//     console.log(text);
//     return text;
// }

// logText(20);
// logText('ddd');
// logText(true);

// function logText<T>(text: T):T {
//     console.log(text);
//     return text;
// }

// logText<string>('dfd');


// function logText(text: string){
//     console.log(text);
//     //text.split('').reverse().join('');
//     return text;
// }


// function logNumber(num: number){
//     console.log(num);
//     return num;
//}
//타입을 다르게하기 위해서 중복코드

function logText(text: string | number){
    console.log(text);
    
    //text.split('').reverse().join('');
    return text;
}

function logText2<T>(text: T): T{
    console.log(text);
    return text;
}

const st = logText2<string>('sdfsd');
st.split('');
const nu = logText2<number>(20);
nu.toLocaleString();


interface dropDown<T> {
    value:T;
    selected : boolean;
}

const obj:dropDown<string> = {value:"asdf", selected:true};
const obj2:dropDown<number> = {value : 30, selected:false};


function logText3<T>(text:T[]):T[] {
    console.log(text.length);
    return text;
}

logText3(['sdfs']);

//제네릭 타입제한 2
interface LengthType {
    length : number;
}

function logText4<T extends LengthType>(text:T):T{
    text.length;
    return text;
}

//logText4(30);
logText4({length:30});