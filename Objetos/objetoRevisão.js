// Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
      modelo: 'A4',
      vaalor: '89000',
      proprietario: {
        nome: 'Raul',
        idade: 40,
        endereco: {
          logradouro: 'Rua ABC',
          numero: 123
        }
      },
    condutores: [{
        nome: 'Junior',
        idade: 40
    }, {
        nome: 'Ana', 
        idade: 42
    }],
    calcularValorSeguro: function() {
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario'] ['endereco'] ['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)