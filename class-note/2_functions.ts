function sum(a:number, b:number):number {
    return a+b;
}

function add():number {
    return 20;
}

//옵셔널파라미터
function log(a:string,b?:string,c?:string){

}

log('a','b','c');
log('a','b');
log('a');