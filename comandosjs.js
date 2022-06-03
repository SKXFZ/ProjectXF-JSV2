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
        - ? <- Verdadeiro 
        - : <- Falso
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

/* 'EVENTOS DO DOM E COMANDOS'
    -Site de diversos codigos para interações : https://developer.mozilla.org/pt-BR/docs/Web/Events
    Ou : https://www.w3schools.com/jsref/dom_obj_event.asp
    
    function <- Comando para criar um bloco de funções;
    function nome() {} <- Nome qualquer que executa sua função fora do bloco;
    function nome '()' <- É possivel colocar algum parametro para que a função receba e use dentro dela;
    *Se caso a sua função precisar retornar algum valor, use o comando no final da função "return;". É possivel tambem colocar uma expressão no "return"
    Ex: return x + y;
    Ex:*/

    {/* <div id="area" onclick="clicar()">
        Loading...
    </div>
 
        function clicar() {
            const local = document.getElementById('area');
            local.innerText = 'Terminado!';
            local.style.backgroundColor = 'red';
        } */}

    /* variavel.addEventListener() <- Comando simples e apenas na parte Javascript que faz a mesma função de escutar um evento em tal elemento
    Ex: De : <div id="area" onclick="clicar()">  
        Para : area.addEventListener('click', clicar) <- Entre '' colocar o comando do evento e depois um nome qualquer referente ao evento.
        
    input <- Existe varios tipos de inputs, mais comum são (Button, number, text...)
    */

    /* Para mandar um valor para o parametro da função, fica assim:
    Ex: */

    /* function contador (n) {
        numeros = []
        for (let i = 0; i < n; i++) {
            numeros.push(i)
        }
        return numeros;
    }
    const valor = contador(5) // <- valor que será recebido no parametro da função
    console.log(valor) */
    /* -Dependendo do valor que será recebido no parametro, é possivel indicar um valor diretamente no parametro caso não receba nada
    Ex: 

    function soma (n1, n2=0) <- Coloque um valor qualquer no parametro{} 
    const valor = soma(2) <- Se o valor que será enviado estiver só um numero...*/

    /* É possivel colocar uma função diretamente em variavel
    Ex: 
    Const valor = function nome <- Não é necessario indicar um nome para a função (parametro) {}*/

/* ESTRUTURA SWITCH/CASE(Repita-até)
    Ex :
    switch (variavel-checavel) { <- Essa estrutura só funciona se as condições percorrerem a numeração(1, 2, 3, 4...)
	case 1:
	variavel = 'valor';
	break; <- Comando para finalizar a estrutura caso o valor seja verdadeiro
	case 2: 
	variavel = 'valor';
	break; <- Comando para finalizar a estrutura caso o valor seja verdadeiro

    default <- pode ser colocado como a ultima condição caso não atenda o resto dos 'cases'
} 
*/

/* 'Estrutura While/DO-While'
    - A estrurua while é um laço padrão das estruturas de repetições
    - O Do-While é o laço inverso.
    Ex:
    do{            <- O laço executa primeiro os comandos e depois testa a condição
        *comandos*
        *comandos*
    } while (condição)
     */

/* 'Arrays ou Vetor' 
    -Para declarar um vetor é só colocar "[]";
    Ex : const numeros = [2, 4, 10] ou [];
    -Para declarar um novo valor em tal posição coloque numeros[posição ou indice] = valor desejado;
    Ex : numeros[1] = 5
        novo valor = numeros [2, 5, 10]

    -Para colocar um novo valor no inicio do vetor, coloque o atributo "numeros.
    unshift(valor)"
    -Para eliminar o ultimo valor do array, coloque "numeros.pop" ou "numeros.shift" para remover do primeiro
    -Para colocar um novo valor no final do vetor,
    coloque o atributo "numeros.push(valor)"
    Ex: numeros.push(5);
        novo valor = numeros[2, 5, 10, 5]
        numeros.unshift(7)
        novo valor = numeros[7, 2, 5, 10, 5]
    
    Para saber o comprimento ou quantos elementos o array possui, coloque o comando "numeros.length";
    Para colocar as posições em ordem crescente no array, coloque o comando "numeros.sort();"
    Ex: numeros.sort();
        novo valor = numeros[10, 2, 5, 5]
    *O comando ".sort" é um pouco bugado, procure saber mais sobre*

    -É possivel e recomendado usar as estruturas de repetições para acessar com mais facilidade os indices dos arrays, objetos etc
    *Estrutura de repetição "In" <- Ele retorna os indices do arrays ou objetos*
    Ex:   */

    /* const numeros = [2, 5, 3, 15]
    for (let i in numeros) {
        console.log(numeros[i])
    } */

    /* Para saber se existe tal valor na variavel que contém array, coloque o seguinte comando numeros.indexOf(valor)
    Ex: 
    */

    /* const numeros = [2, 5, 1, 6, 7]
    console.log(numeros.indexOf(5))
    console.log(numeros.indexOf(10)) 
    *Se aparecer o "-1" quer dizer que o valor não foi encontrado* */

    /* *Estrutura de repetição "of" <- Ele retorna o valor do array (Não é bom usar essa estrutura em objetos)
    Ex: */

    /* const carroFord = {
        motor: 'V8',
        pneu: 'Pirelli',
        combustivel: 'Alcool'
    }

    for (let i of carroFord) {  // Para objetos, essa estrutura dá erro
        console.log(carroFord[i])
    } */

    /* const carroFord = ['V8', 'Pirelli', 'Alcool']
    for (let i of carroFord) { // Modo certo para usar o "of" em arrays
        console.log(i)
    } */


/* 'OBJETOS' 
    -Para declarar um objeto coloque "{}" *Cheque o exercicio 1.1.0JS*
    Ex : 
        const pessoa1 = {
        Nome: 'Maira',
        Sobrenome: 'Minanda',
        idade: 24
        };
    -Console.log(pessoa1.nome *sobrenome ou idade*); <- Para acessar um determinado atributo do objeto
    *This.nome* <- Ele acessa diretamente a variavel do objeto declarado */

    /* Ex:
    const jogador1 = {nome: 'Shuya', idade: 23, posicao: 'Atacante', envelheceu(id){
        console.log('Shuya está ficando aposentado!')
        this.idade += id
    }}
    jogador1.envelheceu(2);
    console.log(jogador1.nome)
    console.log(jogador1.posicao)
    console.log(jogador1.idade) */

    /* PS: Tambem pode-se criar um função para o objeto acessar-la 
    Ex: function criarpessoa (Nome, Sobrenome, idade) { <- Atribuição dos parametros
    return {nome, sobrenome, idade}; <- Valores que serão retornados
    }
    const pessoa1 = criarpessoa('Joao', 'Paulo' 25); <- Enviar os valores para o parametro da function

    console.log(pessoa1.nome); Exibir na tela o comando */

    