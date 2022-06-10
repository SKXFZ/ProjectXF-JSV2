// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, a, p) { // Função declarada com parametros
  return { // Retornando objetos
    nome,
    sobrenome,

    fala(assunto = 'falando sobre NADA') {
      return `${nome} ${sobrenome} está ${assunto}.`; // 
    },

    altura: a,
    peso: p,

    // Getter
    get imc() { // <- Para fazer uma função se passar por um objeto, coloque 'get' e depois o nome da função
      const indice = this.peso / (this.altura ** 2); // *this* em parte, ele acessa qualquer chaves de dentro do objetos
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
const p2 = criaPessoa('João', 'Otávio', 1.90, 57);
console.log(criaPessoa('Junior', 'Otávio', 1.5, 110))

console.log(p1.fala());
console.log(p2.imc); // <- Inves do 'imc' ser executada como função, ela é executada como atributo


