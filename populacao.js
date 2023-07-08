const path = require("path");
const fs = require("fs");

//Lendo o Aquivo populacao
let dadosPopulacao = JSON.parse(fs.readFileSync("./info/populacao.json"));

module.exports = dadosPopulacao;
