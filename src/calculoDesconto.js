function calcularValorCompra( valorCompra, desconto ){
    const resultado = valorCompra - ( valorCompra * desconto / 100);
    return resultado;
}

module.exports = {
    calcularValorCompra
}