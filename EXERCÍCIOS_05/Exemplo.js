import rl from 'readline-sync';

let num = rl.questionInt('Informe um número: ');

while(num<=10){
    num++;
    if (num % 0 == 0) {
        continue;
    }
    else{
        console.log(num)
    }
    
}