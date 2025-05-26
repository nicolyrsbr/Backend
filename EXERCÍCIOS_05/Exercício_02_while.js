import rl from 'readline-sync';

let numAlunos = rl.questionInt('Quantos alunos tem na turma?: ');

let contAlunos = 1;
let somaMedias = 0;

while (contAlunos <= numAlunos) {
    console.log(`\nAluno ${contAlunos}:`);

    let contBimestre = 1;
    let somaNotas = 0;
    
    while (contBimestre <= 4) {
        let nota = rl.questionInt(`Digite a nota do ${contBimestre}º bimestre do aluno ${contAlunos}: `);
        somaNotas += nota;
        contBimestre++
    }

    let mediaAluno = somaNotas / 4;
    somaMedias += mediaAluno;
    console.log(`Média do aluno ${contAlunos}: ${mediaAluno.toFixed(2)}`);

    contAlunos++;
}

let mediaTurma = somaMedias / numAlunos;
console.log(`\nMédia da turma: ${mediaTurma.toFixed(2)}`);
