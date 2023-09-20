const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()  // remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e  remover elementos

// adicionar 
pilotos.splice(2, 0, 'bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.slice(3, 1) // massa quebrou novamente :(
console.log(pilotos)    

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)
// Com o slice voce consegue pegar um pedaço do array

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)