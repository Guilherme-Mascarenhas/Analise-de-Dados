**Solução**

Utilizei o NodeJs para realizar esse projeto, devido a sua afinidade com manipulação de arquivos.
Com a leitura de arquivos feita pelo modulo "FS" do Node, conseguimos ter acesso aos dados dos arquivo.
Com o arquivo "populacao.json" a leitura foi mais facil devido a seu formato ".json", onde interando pela lista
ja é possivel armazenar os dados em objetos dentro de Listas.
Agora com os demais arquivos com a extensão ".csv", foi preciso tratar esses dados antes de criar objetos com eles.

O projeto foi desenvolvido em partes, primeiro foi realizado o modulo "bairros.js", a leitura e tratamento dos dados do
arquivo "bairros.csv", e apos isso comparamos os dados com a "popuação.json", onde foram separados pelo "Codigo_bairro". Então
resumindo foi utilizado o Codigo_bairro, que esta presente em ambos os arquivos para poder junta-los e manter a coerencia dos dados.

A segunda etapa foi criar o modulo "EventoFluxo.js" onde a partir do arquivo "evento_de_fluxo.csv", coletamos os dados
e apos a ajuda da Intelicencia Artificial criamos uma função que separa o fluxo de pessoas pelo codigo do concorrente
e filtra para que seja separado em 3 periodos, manha, tarde e noite.

A terceira e ultima parte foi criar o modulo "index.js" onde agrupamos todos esses modulos e juntamos os dados tratados em um so Objeto.

**Considerções**
O Arquivo "Concorrente.csv" não tem o codigo do bairro, devido a isso não foi possivel implementar a Densidade Demografica na resolução final.
Mas se Rodar o Modulo "densidadeDemo.js" tera a densidade demografica separada por bairros.

O Arquivo "Fluxo de pessoas.csv" tem excesso de virgulas devido a isso não foi possivel localizar corretamente os bairros devido a virgula
no nome da maioria dos bairros. A faixa de preco do arquivo esta confusão,hora tem numero, hora tem nomes.

Como teria realizado a conexão dos modulos
Exemplo:
Atraves do arquivo "Concorrente.csv" ja junto com os dados de "Fluxo de pessoas.csv" pelo Codigo do Concorrente, teria acessa a prorpiedade
"Codigo_bairro" presente em "Concorrente.js" e juntaria com a informação de "bairros.js". Mas devido o arquivo não apresentar tal informação
não foi possivel a junção.

No Readme está presente essa informação dentro dos exemplos.
