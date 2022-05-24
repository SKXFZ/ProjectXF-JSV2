const msg = document.querySelector('#msg')
const foto = document.querySelector('#ibagem')
const data = new Date();
const hora = 11//data.getHours();

function carregar() {
    msg.innerHTML = `No momento são ${hora} horas e está:`
    if (hora > 00 && hora < 12) {
        foto.src = 'Manhã.png';
        document.body.style.background = '#d2c39a'
    }
    else if (hora > 12 && hora < 18) {
        foto.src = 'Tarde.png';
        document.body.style.background = '#d9844d';
    }
    else {
        foto.src = 'Noite.png';
        document.body.style.background = '#1f3540';
    }
}