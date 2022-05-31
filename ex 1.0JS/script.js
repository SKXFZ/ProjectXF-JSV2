const numeros = document.getElementById('numero')
const geradorNumeros = document.querySelector('#gerador')
const valores = document.querySelector('#valores')
const butao = document.getElementById('buton')
const textofinal = document.getElementById('resultado')
const armazem = []


geradorNumeros.addEventListener('click', addNumeros)
butao.addEventListener('click', confirmar)

function ehnumero(n) {
    if (Number(n > 1 && n < 100)) {
        return true;
    } else {
        return false;
    }
}
function ehlista (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function addNumeros() {
    if (ehnumero(numeros.value) && !ehlista(numeros.value, armazem)) {
        let numerosF = Number(numeros.value)
        armazem.push(numerosF)
        let elemento = document.createElement('option')
        elemento.innerHTML = `O valor adicionado foi ${numerosF}`
        valores.appendChild(elemento)
        textofinal.innerHTML = ''
    } else {
        alert('Valor invalido ou já está na lista');
    }
    numeros.value = ''
    numeros.focus();
    }

    function confirmar() {
        let variavelM = 0
        let variavelm = armazem[0]
        let total = 0
        let media = 0
        for (let i = 0; i < armazem.length; i++) {
            if (variavelM < armazem[i]) {
                variavelM = armazem[i]
            }
            if (armazem[i] < variavelm) {
                variavelm = armazem[i]
            }
            total += armazem[i]
        }
        media = total / armazem.length
        textofinal.innerHTML = ''
        textofinal.innerHTML = `Ao todo, temos ${armazem.length} numeros cadastrados <br />`
        textofinal.innerHTML += `O maior valor informado foi ${variavelM} <br />`
        textofinal.innerHTML += `O menor valor informado foi ${variavelm} <br />`
        textofinal.innerHTML += `O valor somado de tudo é ${total} <br />`
        textofinal.innerHTML += `A media dos valores digitados é ${media} <br />`
    }

