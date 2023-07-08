const { error } = require("console");
const path = require("path");
const fs = require("fs");

//Lendo o Aquivo Bairros

const arr = [];
let data = fs.readFileSync("./info/bairros.csv").toString();
const arquivoLimpo = data.split("\n");
const [header, ...bairros] = arquivoLimpo;

for (let i of bairros) {
  const divisaoArquivos = i.split(",");
  arr.push({
    codigo: divisaoArquivos[0],
    nome: divisaoArquivos[1],
    municipio: divisaoArquivos[2],
    uf: divisaoArquivos[3],
    area: divisaoArquivos[4],
  });
}

/*Esse codigo importa o arquivo "concorrentes.csv" converte ele para String
separa o header para extrair somente os dados importantes, apos isso
se percorre a lista adicionando cada elemento em um Array de objetos e 
determinado seu local com as atribuições corretas*/

const codigosBairros = arr.map((code) => {
  return code.codigo;
});

const nomesBairros = arr.map((name) => {
  return name.nome;
});

const municipiosBairros = arr.map((muni) => {
  return muni.municipio;
});

const ufBairros = arr.map((uf) => {
  return uf.uf;
});

const areaBairros = arr.map((area) => {
  return area.area;
});

const codigosBairrosNumero = codigosBairros.map(Number);

const dadosBairros = arr;

module.exports = dadosBairros;
