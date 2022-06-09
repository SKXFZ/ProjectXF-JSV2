function numeros(num) { // <- Função padrão recebendo um valor no parametro
    console.log('Ola mUNdo!')
    return function(Q) { // <- Retornando uma função anonima(Qlqr função que seja vizinha, ou seja, dentro de cadeias de funções ou no escopo global, pode ser acessados os dados)
        return num * Q;
    };
}

const algumNumero = numeros(5); // <- variavel recebendo a função e mandando o argumento para o parametro, caso o retorno tenha um parametro na função, logo a variavel se tornará uma função tambem
console.log(algumNumero(2)) // <- variavel que está mandando um parametro para o retorno da função anonima e exibindo o resultado final da função anonima, que é a ultima linha de comando do escopo