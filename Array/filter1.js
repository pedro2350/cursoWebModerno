const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Fone', preco: 12.49, fragil: true},
    { nome: 'Copo de plástico', preco: 18.99, fragil: false},
]

const produtosFragilCaro = produtos.filter(function(p) {
    return p.fragil && p.preco > 2000;
});

console.log(produtosFragilCaro);