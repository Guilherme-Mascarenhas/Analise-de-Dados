const { error } = require("console");
const path = require("path");
const fs = require("fs");
const moment = require("moment");

//Lendo o Aquivo Evento de Fluxo
let listaDatas = [];
const arr = [];
let data = fs.readFileSync("./info/eventos_de_fluxo.csv").toString();
const arquivoLimpo = data.split("\n");
const [header, ...dados] = arquivoLimpo;

for (let i of dados) {
  const divisaoArquivos = i.split(",");
  arr.push({
    codigo: divisaoArquivos[0],
    datetime: divisaoArquivos[1],
    codigoConcorrente: divisaoArquivos[2],
  });

  // Neste momento a variavel " arr " contem todo o arquivo "evento_de_fluxo.csv" convetido para um objeto. Um array de Objetos
}
const datatime = arr.map((data) => {
  return data.datetime;
});
let teste = 0;
for (let i of datatime) {
  teste = +1;
  let data = new Date(i);
  listaDatas.push(data);
}
let valordividido = 0;
const encontrarObjetosComCodigosIguais = (arrayObjetos) => {
  const objetosComCodigosIguais = {};

  //A partir desse momento as funcões foram desenvolvidas com a ajuda de OpenAi

  //Variavel que separa dos datetime(horarios) por periodos de manha, tarde e noite
  const obterPeriodo = (datetime) => {
    const hora = moment(datetime, "YYYY-MM-DD HH:mm:ss").format("H");
    if (hora < 6) {
      return "noite";
    } else if (hora < 12) {
      return "manha";
    } else if (hora < 18) {
      return "tarde";
    } else {
      return "noite";
    }
  };

  const periodos = ["manha", "tarde", "noite"]; // Lista de períodos

  //Esse laço de repetição percorre a nossa lista "arr" e agrupa os elementos pelo seu "codigo_Concorrente" e
  for (const objeto of arrayObjetos) {
    const codigoConcorrente = objeto.codigoConcorrente;
    const datetime = objeto.datetime;

    if (!objetosComCodigosIguais[codigoConcorrente]) {
      objetosComCodigosIguais[codigoConcorrente] = {
        codigoConcorrente,
        fluxoMedio: {},
      };
    }

    const diaSemana = moment(datetime, "YYYY-MM-DD HH:mm:ss").format("dddd");
    const periodoDoDia = obterPeriodo(datetime);

    // Inicializa o objeto do dia da semana, se ainda não estiver definido
    if (!objetosComCodigosIguais[codigoConcorrente].fluxoMedio[diaSemana]) {
      objetosComCodigosIguais[codigoConcorrente].fluxoMedio[diaSemana] = {};
    }

    // Inicializa os períodos dentro do objeto do dia da semana, se ainda não estiverem definidos
    if (
      !periodos.every((periodo) =>
        objetosComCodigosIguais[codigoConcorrente].fluxoMedio[
          diaSemana
        ].hasOwnProperty(periodo)
      )
    ) {
      for (const periodo of periodos) {
        objetosComCodigosIguais[codigoConcorrente].fluxoMedio[diaSemana][
          periodo
        ] = 0;
      }
    }

    objetosComCodigosIguais[codigoConcorrente].fluxoMedio[diaSemana][
      periodoDoDia
    ]++;
  }

  //Nesse momento ao pegar os valores dos objetos, cria-se um novo objeto onde tera dos periodos do dia, separando por dia da semana
  return Object.values(objetosComCodigosIguais).map((objeto) => {
    let fluxoMedioFormatado = {};
    let i = 0;
    for (const [diaSemana, periodos] of Object.entries(objeto.fluxoMedio)) {
      const totalPeriodos = Object.values(periodos).reduce(
        (total, valor) => total + valor,
        0
      );

      fluxoMedioFormatado[diaSemana] = {
        manha: periodos.manha || 0,
        tarde: periodos.tarde || 0,
        noite: periodos.noite || 0,
      };
      //Nesse momento houve uma dificuldade em percorrer "valorFluxoMedioPeriodo" e inseri-lo no "elemento 1",
      //Para assim entregar todos os valores da lista
      //Mas para exemplo utilizei somente o index 0
      let valorFluxoMedioPeriodo = Object.values({ fluxoMedioFormatado });
      valordividido = JSON.stringify(valorFluxoMedioPeriodo[0]);

      i++;
    }

    return {
      ...objeto,
      //elemento 1
      fluxoMedio: valordividido,
    };
  });
};

const objetosComCodigosIguais = encontrarObjetosComCodigosIguais(arr);
console.log(objetosComCodigosIguais);
module.exports = objetosComCodigosIguais;
