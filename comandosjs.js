/* Extenções para o Chrome e o Visual studio code : Watch in Chrome(Visual Studio)
Visual studio watch in chrome(Navegador Chorme) <- Serve o que estiver sendo modificado no visual code, atualiza em tempo real na pagina do HTML do chrome
 */

/* 'Variaveis'
    -const <- o valor da variavel não pode ser redeclarado, é ultiliado para colocar um valor fixo.

    -let <- variavel que pode o seus valores podem ser modificados e é versatil, porém, em blocos de comandos como 'if, else', ela é exclusivamente de tal bloco e não pode ser acessada fora dela

    -var <- variavel antiga que pode ser redeclarada, trocar seus valores e não possui restrições para acessa-las dentro de algum bloco, porém existe certos erros que acontecem dentro de escorpos do codigo
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
    
    'variavel.ToFixed(2) <- Comando para escolher qnts casas decimais o numero terá'
    'variavel.toFixed(2).replace('.' , ',') <- Comando para trocar o ponto para virgula
    'variavel.toLocaleString('pt-BR' , {style: 'currency', currency: 'BRL'})*/

/* 'Precedencia de operadores'
    - 1º Aritimeticos
        1.2: () <- Tudo que estiver em '()' tem maior precedencia
        1.3: **
        1.4: *, /, %
        1.5: +, -
    - 2º Relacionais <- Todos tem a msm precedencia
    - 3º Logicos
        3.1: ! <- Valor logico 'não' tem precedencia maior
        3.2: && <- valor de conjunção
        3.3: || <- Valor comparativo
     */
    /* 'Processo Ternario'
         Sintaxe: (condição) ? 'Valor verdadeiro' : 'valor falso'
        - ? <- Verdadeiro : <- Falso
        Ex: */

        /* let numero = 50;
        const resultado = numero * 2 !== 150 ? 'Valor alto' : 'Valor padrao';
        console.log(resultado); */

        /* PS : É usado tambem muito para substituir a estrutura if/else, se for uma linha de condição. */

/* MODIFICANDO O HTML CM O DOM
    -window.document <- Comando para acessar os objetos do documento do html;
    -window.location <- Comando para acessar os objetos da localização da URL, paginas do site atual etc;
    -window.history <- comando para acessar os objetos do lugar de onde vc veio, para qual site voce vai e etc;

    document.write('texto') Ou (window.) <- Insere um texto na pagina do HTML ou algum comando especifico no objeto window "window.navigator.appName","window.document.URL"
    
    document.getElementsByTagName('tag') <- acessa o elemento em ' ' da pagina do html atual por tags(h1,p,div...)
    Ex: const para = document.getElementsByTagName('p')[0] <- Coloque dps do () a Array[] e a posição em que vc quer acessar o elemento
    
    document.getElementById(); <- Mesma função de cima, porém, nos () coloca-se o nome da id da pagina do HTML para acessar-la
    
    document.getElementsByName()[]; <- precisa colocar no parametro do elemento em vez de 'ID' colocar 'name'e no () colocar o nome que foi inserido no 'name'
    
    document.getElementsByClassName()[] <- Mesmo skema

    document.querySelector(); <- Forma mais simples e mais moderno, acessa qualquer tipo de elemento, se for para 'id' ou 'class' usar a sintaxe do CSS respectivamente '#nome' , '.nome'.

    *Depois de colocar na variavel o comando, voce pode acessa-la na variavel e colocar comandos a partir dela. 
    */

    /*Ex04.html:
        const corpo = document.body;
        const titulo = document.getElementsByTagName('h1')[0]
        const div = document.getElementById('divi')
        titulo.innerText = ('Modificando o titulo pelo DOM')
        titulo.style.fontWeight = 'normal';
        titulo.style.color = 'red';
        corpo.style.background = 'black'
        corpo.style.color = 'white';
        div.style.background = 'blue'
        div.innerText = 'Loading...';]
    */

    /* Comandos adicionais do DOM
        -variavel.onsubmit = <- Comando para ativar uma acao da variavel
        -variavel.addEventListener(); <- Comando para ativar uma acao da variavel(Simples)
*/
