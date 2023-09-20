function Carro(velocidadeMaxima = 200, delta = 5) {
    // Atributo privado
    let velocidadeAtual = 0

    // método publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const bmw = new Carro
bmw.acelerar()
console.log(bmw.getVelocidadeAtual())

const fusca = new Carro(350, 20)
fusca.acelerar()
console.log(fusca.getVelocidadeAtual())