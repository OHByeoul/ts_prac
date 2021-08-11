// function fetchItems(): string[]{
//     var items = ['a','b','c'];
//     return items;
// }

//let result = fetchItems();

function fetchItems(): Promise<string[]>{
    let items: string[] = ['a','b','c'];
    return new Promise(function(resolve){
        resolve(items);
    });
}
fetchItems();
