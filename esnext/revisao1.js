// let e const
{
    var a = 2
    var b = 3
    console.log(b)
}
console.log(a)

// Template String 
const produto = 'iPad'
console.log(`${produto} é caro`)

// Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const { idade: i, nome } = { nome: 'Sabrina', idade: 9 }
console.log(i, nome)