const confirmar = document.querySelector('#buton')
confirmar.addEventListener('click', avaliacao)

function avaliacao() {
    const idade = document.querySelector('#ano')
    const data = new Date();
    const ano = data.getFullYear();
    const msg = document.getElementById('msg')
    if (idade.value.length == 0 || idade.value > ano) {
        alert('[ERRO] Verifique seus dados e tente novamente!')
    }
    else {
        const radx = document.getElementsByName('radsex')
        const idadeF = ano - Number(idade.value)
        let genero;
        let img = document.createElement('img');
        img.setAttribute('id', 'foto')
        if (radx[0].checked) {
            genero = 'Homem'
            if (idadeF <= 18) {
                img.setAttribute('src', 'images/menino-criança-adolecente.png')
            }
            else if (idadeF <= 40) {
                img.setAttribute('src', 'images/homem-jovem-adulto.png')
            }
            else {
                img.setAttribute('src', 'images/homem-coroa.png')
            }
        }
        

        if (radx[1].checked) {
            genero = 'Mulher'
            if (idadeF <= 18) {
                img.setAttribute('src', 'images/menina-criança-adolecente.png')
            }
            else if (idadeF <= 40) {
                img.setAttribute('src', 'images/mulher-jovem-adulta.png')
            }
            else {
                img.setAttribute('src', 'images/mulher-coroa.png')
            }
        }
        msg.style.textAlign = 'center'
        msg.innerHTML = `Detectamos ${genero} com ${idadeF} anos.`
        msg.innerHTML += '<br />'
        msg.appendChild(img)
    }
}


