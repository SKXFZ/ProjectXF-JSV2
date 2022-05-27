const numero = document.getElementById('numb')
const buton = document.querySelector('#confirm')
const resultado = document.querySelector('#resposta')

buton.addEventListener('click', confirmar);

function confirmar() {
    const validacao = validado();
    let numeroF = Number(numero.value)
    let respost;
    resultado.innerHTML = ''

    for (let i = 0; i <= 10; i++) {
        respost = 0;
        let paragrafo = document.createElement('option')
        paragrafo.text += `${numeroF} x ${i} = ${i * numeroF}`
        resultado.appendChild(paragrafo)
    }
}

function validado () {
    if (numero.value.length == 0) {
        alert('Por favor, informe um numero!')
        return;
    }
}