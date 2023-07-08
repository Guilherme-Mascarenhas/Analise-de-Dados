const fluxoMedio = require("./eventoFluxo");
const listaConcorrente = require("./concorrentes");
const densidadeDemo = require("./densidadeDemo");

const juntarArraysPorCodigoConcorrente = (array1, array2) => {
  const objetosJuntos = [];

  for (const objeto1 of array1) {
    const codigoConcorrente = objeto1.CodigoConcorrente;

    for (const objeto2 of array2) {
      if (objeto2.CodigoConcorrente === codigoConcorrente) {
        objetosJuntos.push({ ...objeto1, ...objeto2 });
        break;
      }
    }
  }

  return objetosJuntos;
};

const objetosJuntos = juntarArraysPorCodigoConcorrente(
  listaConcorrente,
  fluxoMedio
);
console.log(objetosJuntos);

/* Na resoluçao final não está aparecendo a Densidade Demografica, pois os arquivos que deveriam estar com o "Codigo_bairro"
para a Implementação estão sem, como é o caso do "Concorrente.csv"  e "Eventos_de_fluxos.csv" devido 
a isso não foi possivel adicionar de forma coerente a aplicação.

Também não foi possivel utilizar os Nomes dos bairros, pois o arquivo "Eventos_de_fluxos.csv" esta com os enderecos bagunçados.
Esse é o arquivo principal onde roda a aplicação, 

analisando o codigo percebe-se que ele junta os arrays de objetos ja tratados e importados dos modulos.*/
