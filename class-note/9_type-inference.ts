var a = 10;

function getB(b=10){
    var c = 'aa';
    return b+c;
}

//타입추론 2
// interface Dropdown<T> {
//     value : T;
//     title : string;
// }

// var shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'ttttt'
// }

//타입추론 3

interface Dropdown<T> {
    value : T;
    title : string;
}

interface DetailedDropdown<T> extends Dropdown<T> {
    description : string;
    tag : T;
}

var detailedItem: DetailedDropdown<string> = {
    title: 'ttttt',
    description: 'dddd',
    value : 'vv',
    tag : 'tt'
}
