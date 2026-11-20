// Execute na raiz do repositório:
// node exemplos.js
// Dados adaptados do material da aula de arrays.

console.log("=== Criar um array e acessar seus elementos ===");

const filmes = ["Homem-Aranha", "Batman", "Superman", "Mulher-Maravilha"];

console.log(filmes);
console.log("Primeiro filme:", filmes[0]); // Homem-Aranha
console.log("Segundo filme:", filmes[1]); // Batman
console.log("Comprimento:", filmes.length); // 4
console.log("Último filme:", filmes[filmes.length - 1]); // Mulher-Maravilha
console.log("Posição inexistente:", filmes[4]); // undefined

console.log("=== Valores de tipos diferentes ===");

const dadosMistos = ["Roberto", 30, { cidade: "São Paulo" }];

console.log("Nome:", dadosMistos[0]); // Roberto
console.log("Idade:", dadosMistos[1]); // 30
console.log("Cidade:", dadosMistos[2].cidade); // São Paulo

console.log("=== Array bidimensional: matriz 3 por 3 ===");

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Primeira linha:", matriz[0]); // [1, 2, 3]
console.log("Linha de índice 1, coluna de índice 2:", matriz[1][2]); // 6
console.log("Última linha, última coluna:", matriz[2][2]); // 9

console.log("=== Arrays com diferentes níveis de aninhamento ===");

const filmesComNotas = [
  ["Homem-Aranha", 5],
  ["Batman", 4.5],
  ["Superman", 4],
  ["Mulher-Maravilha", 4.8, ["Gal Gadot", 40]]
];

console.log("Filme:", filmesComNotas[3][0]); // Mulher-Maravilha
console.log("Nota:", filmesComNotas[3][1]); // 4.8
console.log("Dados aninhados:", filmesComNotas[3][2]); // ["Gal Gadot", 40]
console.log("Nome armazenado:", filmesComNotas[3][2][0]); // Gal Gadot
console.log("Idade armazenada:", filmesComNotas[3][2][1]); // 40

console.log("=== Percorrer o array com for ===");

for (let indice = 0; indice < filmes.length; indice++) {
  console.log(`Índice ${indice}: ${filmes[indice]}`);
}

console.log("=== Percorrer o array com forEach ===");

filmes.forEach((filme, indice) => {
  console.log(`Índice ${indice}: ${filme}`);
});

console.log("=== For com interrupção por break ===");

for (let indice = 0; indice < filmes.length; indice++) {
  console.log("Analisando:", filmes[indice]);

  if (filmes[indice] === "Batman") {
    console.log("Batman encontrado. Encerrando o laço.");
    break;
  }
}

console.log("=== Const permite alterar os elementos do array ===");

const favoritos = ["Homem-Aranha", "Batman"];
favoritos[1] = "Superman";
console.log(favoritos); // ["Homem-Aranha", "Superman"]
// favoritos = []; // TypeError: const impede reatribuir a variável.

console.log("=== Identificar um array ===");

console.log(Array.isArray(filmes)); // true
console.log(typeof filmes); // object: arrays são objetos.
