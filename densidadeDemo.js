const dadosPopulacao = require("./populacao");
const dadosBairros = require("./bairros");

let listaCodigoPopulacao = [];
let listaPopulacao = [];
let listaDensidade = [];
const codigosBairros = dadosBairros.map((code) => {
  return code.codigo;
});
codigosBairros.pop();

let areaBairros = dadosBairros.map((area) => {
  return Number(area.area);
});
areaBairros.pop();

for (let i of dadosPopulacao) {
  listaCodigoPopulacao.push(i.codigo.toString());
  listaPopulacao.push(i.populacao);
}

for (let i = 0; i <= codigosBairros.length; i++) {
  if (listaCodigoPopulacao[i] == codigosBairros[i]) {
    let densidadeDemo = listaPopulacao[i] / areaBairros[i];
    densidadeDemo = densidadeDemo.toString();
    listaDensidade.push({
      codigo: dadosBairros[i].codigo,
      bairro: dadosBairros[i].nome,
      municipio: dadosBairros[i].municipio,
      densidade: densidadeDemo,
    });
  }
}
console.log(listaDensidade);

module.exports = listaDensidade;
