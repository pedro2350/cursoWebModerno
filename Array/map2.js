const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Borracha", "preco": 41.22 }',
    '{ "nome": "Borracha", "preco": 7.58 }',
]

const precos = carrinho.map(item => {
    const objeto = JSON.parse(item);
    return objeto.preco;
});

console.log(precos);
// Retornar um array apenas com os preços