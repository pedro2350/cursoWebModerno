const empresas = ["tesla", "microsoft", "sony"]

function imprimir(nome, indice) {
    console.log(`${indice + 1} ${nome}`)
}

empresas.forEach(imprimir)
empresas.forEach(function(a) {
    console.log(a)
})
