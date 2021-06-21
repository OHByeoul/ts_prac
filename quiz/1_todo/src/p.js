let a = [
    {gender:'male',name:'a'},
    {gender:'male',name:'a'},
    {gender:'female',name:'b'}
];

let filtered = a.filter(function(item){
    if(item.gender == 'male'){
        return item;
    }
});
console.log(filtered);