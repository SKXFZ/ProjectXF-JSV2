function numeros(a) {
    for (let valores of arguments) { // <- O comando do JavaScript 'arguments' ele armazenas todos os valores que foram mandados para a função, seja ela com parametros ou não(*Esse comando não funciona para -arrowfunction-*)
        console.log(valores)
    }
}
numeros(5, 3, 10, 20)


function nomes(a, b="Otero", c) {
    console.log(a + b + c)
}
nomes('Osvaldo ', undefined , ' Robert') // <- Caso voce não queira enviar o 2ºvalor para a função, coloque 'undefined' e ela retornará um valor declarado no parametro da função


function produtos(moveis, eletrodomesticos, ...etc) { // <- O ultimo parametro que for declarado pode pegar o resto dos valores enviados para a função colocando "..." atras do parametro, somente o ultimo parametro
    console.log(moveis, eletrodomesticos, etc)
}
produtos('armario ', ' geladeira ', 50, 90, 10)