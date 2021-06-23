enum Shoes {
    Nike = '나이',
    Adidas = '아디'
}

let mysho = Shoes.Nike;
console.log(mysho);

enum Answer {
    Y = 'Y',
    N = 'N',
}

function askQuestion(answer: Answer){
    if(answer ===Answer.Y){
        console.log('yyy');
    }
    if(answer ===Answer.N){
        console.log('nono')
    }
}
askQuestion(Answer.Y);