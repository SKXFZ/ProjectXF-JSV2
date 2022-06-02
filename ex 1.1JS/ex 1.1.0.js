const jogador1 = {nome: 'Shuya', idade: 23, posicao: 'Atacante', envelheceu(id){
    console.log('Shuya está ficando aposentado!')
    this.idade += id
}}

jogador1.envelheceu(1);
console.log(jogador1.nome)
console.log(jogador1.posicao)
console.log(jogador1.idade)

jogador1.envelheceu(1);
console.log(jogador1.nome)
console.log(jogador1.posicao)
console.log(jogador1.idade)
