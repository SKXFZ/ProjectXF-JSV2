/* 'Variaveis'
    -const <- o valor da variavel não pode ser redeclarado, é ultiliado para colocar um valor fixo.

    -let <- variavel que pode o seus valores podem ser modificados e é versatil, porém, em blocos de comandos como 'if, else', ela é exclusivamente de tal bloco e não pode ser acessada fora dela

    -var <- variavel antiga que pode ser redeclarada, trocar seus valores e não possui restrições para acessa-las dentro de algum bloco, porém existe certos erros que acontecem nela
    Ex:
    */
   
   /* const valor = 0;
   const nome = 'Osvaldo';
   let strike = 20;
   let fire = true;
   fire = false;
   console.log(fire)
   var pessoa = 'Ornaldo';
   var numero = 100;
   numero = 200;
   console.log(numero); */

   /* 'Outros comandos'
        typeof nome  <- verifica o tipo de valor da variavel;
        alert('texto'); <- Aparece uma mensagem no navegador;
        confirm('Deseja confirmar?');  <- Comando de confirmação de algo;
        prompt('texto');  <- Comando de entrada de dados no navegador;
        document.write('texto'); <- Saida de dados na tela do navegador;
        document.body.innerHTML = 'Um texto' <- Saida de dados no console do navegador ou code;
        variavel.length <- Mostra a quantidade de letras da variavel;
        variavel.toUpperCase() <- deixa todas as letras maiusculas
        variavel.toLowerCase() <- deixa todas as letras minusculas
        Number.isInteger() <- Checagem se o numero da variavel é inteiro
        Number.isNaN() <- Checa se a variavel possui uma conta invalida(Um valor de number x texto)
        */

/* 'Processo casting(Trocar o valor da variavel)'
    ex: */

    /* let numero = '10';
    console.log(`Vamos trocar a variavel ${numero} para numero`)
    numero = Number.parseInt(numero); // Ou parse.float ou só Number
    console.log(typeof numero);

    let nome = 20;
    console.log(`Vamos trocar a variavel ${nome} para string`)
    nome = nome.toString(); // Ou tambem pode usar -> String(nome)
    console.log(typeof nome); 
    
    'variavel.Tofixed(2) <- Comando para escolher qnts casas decimais o numero terá'
    'variavel.toFixed(2).replace('.' , ',') <- Comando para trocar o ponto para virgula
    'variavel.toLocaleString('pt-BR' , {style: 'currency', currency: 'BRL'})*/

