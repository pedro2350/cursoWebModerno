const produtos = [
    { nome: 'spray', preco: 49.99, fragil: false},
    { nome: 'Placa de video', preco: 3000, fragil: true},
    { nome: 'Panela', preco: 12.49, fragil: true},
    { nome: 'Camisa', preco: 18.99, fragil: false},
]

const produtosFragilCaro = produtos.filter(function(p) {
    return p.fragil && p.preco > 2000;
});

console.log(produtosFragilCaro);