import rl from 'readline-sync';

let quantidadeAlunos = parseInt(rl.question('Quantos alunos tem na turma?: '));
let somaTurma = 0;

let contadorAlunos = 0;

while (contadorAlunos < quantidadeAlunos) {
    console.log(`\nAluno ${contadorAlunos + 1}:`);
    let somaNotas = 0;

    for (let i = 1; i <= 4; i++) {
        let nota = parseFloat(rl.question(`Digite a nota do ${i}º bimestre: `));
        somaNotas += nota;
    }

    let mediaAluno = somaNotas / 4;
    console.log(`Média do aluno ${contadorAlunos + 1}: ${mediaAluno.toFixed(2)}`);
    
    somaTurma += mediaAluno;
    contadorAlunos++;
}

let mediaTurma = somaTurma / quantidadeAlunos;
console.log(`\nMédia da turma: ${mediaTurma.toFixed(2)}`);
