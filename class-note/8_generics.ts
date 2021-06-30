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