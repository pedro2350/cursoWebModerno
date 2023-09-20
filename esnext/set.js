// não aceita repetição/não indexada
const times = new Set()
times.add('Vasco')
times.add('Verdao')
times.add('Gambas')
times.add('Bambis')
times.add('Bahea')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Bahea')
console.log(times.has('Bahea'))

const nomes = ['Raquel', 'Melissa', 'Pedrao', 'Adilson']
const nomesSet = new Set(nomes)
console.log(nomesSet)