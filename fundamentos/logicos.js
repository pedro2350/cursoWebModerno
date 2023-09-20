function compras(trabalho1, trabalho2) {
    const comprasSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprasSorvete // operador unário

    return { comprasSorvete, comprarTv50, comprarTv32, manterSaudavel }

}

console.log(compras(true, true))