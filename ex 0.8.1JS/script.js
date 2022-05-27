let inicio = document.getElementById('inicio')
let fim = document.getElementById('final')
let passo = document.getElementById('step')
const butao = document.querySelector('#buton')
const resultado = document.querySelector('.resposta')

butao.addEventListener('click', confirmar)

function confirmar() {
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = `Impossivel Contar!`;
        return;
    }
    else {
        let ini = Number(inicio.value)
        let fin = Number(fim.value)
        let pass = Number(passo.value)
    
        if (pass === 0) {
            alert('[ERROR] Valor invalido. Considerando passo 1')
            pass = 1
        }
        if (ini < fin) {
            resultado.innerHTML = ''
            for(let i = ini; i <= fin; i += pass) {
                resultado.innerHTML += `${i} \u{27A1} `;
        }  
        }
        else {
            resultado.innerHTML = ''
            for(let i = ini; i >= fin; i -= pass) {
                resultado.innerHTML += `${i} \u{27A1} `;
        }  
        }
        resultado.innerHTML += `\u{1F3F4}`
    }
    
}


