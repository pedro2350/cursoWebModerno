const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedrao', nota: 9.8, bolsista: false},
    { nome: 'Pamela', nota: 8.7, bolsista: true},
]

// Desafio 1: todos os alunos são bolsitas?

const todosSaoBolsistas = alunos.reduce(function(resultado, aluno) {
    return resultado && aluno.bolsista;
}, true);

console.log('Todos os alunos são bolsistas?', todosSaoBolsistas);


// desafio 2: algum aluno é bolsista

const algumEhBolsista = alunos.reduce(function(resultado, aluno) {
    return resultado || aluno.bolsista;
}, false);

console.log('Algum aluno é bolsista?', algumEhBolsista);