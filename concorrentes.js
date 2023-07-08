const { error } = require("console");
const path = require("path");
const fs = require("fs");

//Lendo o Aquivo concorrentes
const arr = [];
let data = fs.readFileSync("./info/concorrentes.csv").toString();
const arquivoLimpo = data.split("\n");
const [header, ...dados] = arquivoLimpo;

for (let i of dados) {
  const divisaoArquivos = i.split(",");
  arr.push({
    codigoConcorrente: divisaoArquivos[0],
    nome: divisaoArquivos[1],
    faixa_Preco: `R$${divisaoArquivos[3]}0,00`,
    endereco: divisaoArquivos[4],
    municipio: divisaoArquivos[5],
    uf: divisaoArquivos[6],
    bairro: divisaoArquivos[7],
  });
}
console.log(arr);

module.exports = arr;

/*Esse codigo importa o arquivo "concorrentes.csv" converte ele para String
separa o header para extrair somente os dados importantes, apos isso
se percorre a lista adicionando cada elemento em um Array de objetos e 
determinado seu local com as atribuições corretas*/
