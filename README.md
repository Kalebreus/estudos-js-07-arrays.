# 07 — Arrays em JavaScript

Arrays permitem organizar uma sequência de valores em uma mesma estrutura. Podemos acessar cada elemento por um índice, combinar tipos de dados e percorrer os elementos com laços.

Os exemplos desta aula foram adaptados dos dados do material disponibilizado no ZIP.

## Criando e acessando um array

Usamos colchetes para criar um array e vírgulas para separar seus elementos:

```js
const filmes = ["Homem-Aranha", "Batman", "Superman", "Mulher-Maravilha"];

console.log(filmes[0]); // Homem-Aranha
console.log(filmes[3]); // Mulher-Maravilha
```

Os índices começam em **zero**:

| Índice | Elemento |
| ---: | --- |
| `0` | `"Homem-Aranha"` |
| `1` | `"Batman"` |
| `2` | `"Superman"` |
| `3` | `"Mulher-Maravilha"` |

## Comprimento e último índice

A propriedade `length` indica o comprimento do array:

```js
console.log(filmes.length); // 4
console.log(filmes[filmes.length - 1]); // Mulher-Maravilha
```

Nesse array, sem posições vazias, `length` corresponde à quantidade de elementos. Como os índices começam em `0`, o último índice é `length - 1`: aqui, `3`.

### Posição inexistente

Ler uma posição que não existe retorna `undefined`:

```js
console.log(filmes[10]); // undefined

// console.log(filmes[10].length); // TypeError.
```

O primeiro acesso não causa erro. Já a linha comentada tenta acessar uma propriedade de `undefined`, o que causa `TypeError`. O mesmo cuidado vale ao tentar continuar um acesso com mais colchetes sobre um valor `undefined`.

## Elementos de tipos diferentes

Um array pode conter strings, números, objetos e outros valores:

```js
const dadosMistos = ["Roberto", 30, { cidade: "São Paulo" }];

console.log(dadosMistos[0]); // Roberto
console.log(dadosMistos[1]); // 30
console.log(dadosMistos[2].cidade); // São Paulo
```

No índice `2`, temos um objeto. Primeiro, `dadosMistos[2]` acessa esse objeto; depois, `.cidade` acessa sua propriedade.

## Arrays dentro de arrays

Cada par de colchetes acessa um nível. Podemos representar uma matriz com arrays de linhas:

```js
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matriz[0]); // [1, 2, 3]
console.log(matriz[1][2]); // 6
console.log(matriz[2][0]); // 7
```

Esse exemplo representa uma matriz regular de **3 linhas e 3 colunas**. Em `matriz[1][2]`, o primeiro índice escolhe a segunda linha e o segundo escolhe a terceira coluna.

### Estruturas com tamanhos e profundidades diferentes

Arrays aninhados não precisam formar uma matriz regular:

```js
const filmesComNotas = [
  ["Homem-Aranha", 5],
  ["Batman", 4.5],
  ["Superman", 4],
  ["Mulher-Maravilha", 4.8, ["Gal Gadot", 40]]
];

console.log(filmesComNotas[0][0]); // Homem-Aranha
console.log(filmesComNotas[1][1]); // 4.5
console.log(filmesComNotas[3][2][0]); // Gal Gadot
console.log(filmesComNotas[3][2][1]); // 40
```

Aqui, os três primeiros arrays de filme possuem dois elementos. O quarto possui três, e seu último elemento também é um array. Portanto, a estrutura tem tamanhos e profundidades diferentes, sem formar uma matriz regular de dimensão fixa.

O caminho até `"Gal Gadot"` passa por três níveis de arrays:

1. `[3]` escolhe os dados de `"Mulher-Maravilha"` no array externo.
2. `[2]` escolhe o array `["Gal Gadot", 40]` dentro desses dados.
3. `[0]` escolhe o nome dentro desse último array.

## Percorrendo com for

Podemos usar um contador para acessar cada elemento:

```js
for (let i = 0; i < filmes.length; i++) {
  console.log(i, filmes[i]);
}
```

O contador começa em `0` e a condição é `i < filmes.length`. Para os quatro filmes, os índices visitados são `0`, `1`, `2` e `3`.

Usar `i <= filmes.length` faria o laço acessar uma posição adicional, de índice `4`, que nesse exemplo retorna `undefined`.

## Percorrendo com forEach

O método `forEach` recebe uma função callback que é chamada para cada elemento visitado:

```js
filmes.forEach((filme, indice) => {
  console.log(indice, filme);
});
```

Os dois primeiros argumentos recebidos pela callback são:

- `filme`: o valor do elemento atual.
- `indice`: o índice desse elemento.

Esses nomes são parâmetros escolhidos para o exemplo. As duas formas acima percorrem os mesmos quatro filmes e exibem seus índices.

### Escolhendo a estrutura

O `for` oferece controle explícito sobre o contador e permite encerrar o laço com `break`:

```js
for (let i = 0; i < filmes.length; i++) {
  if (filmes[i] === "Batman") {
    console.log(`Batman encontrado no índice ${i}.`);
    break;
  }
}
```

Nesse exemplo, o laço termina ao encontrar `"Batman"`, sem visitar os filmes seguintes.

Já `forEach` não permite usar `break` para interromper o percurso. Um `return` dentro de sua callback encerra apenas aquela chamada da callback; os próximos elementos continuam sendo visitados.

Além disso, **`forEach` retorna `undefined`, não um novo array**. Sua callback pode executar ações e alterar dados, mas o método não produz automaticamente um array com os resultados.

Use a estrutura que deixe a intenção clara: `for` ajuda quando precisamos controlar a repetição ou interrompê-la; `forEach` é outra opção para executar uma ação sobre os elementos.

## Arrays declarados com const

`const` impede reatribuir a variável, mas permite alterar elementos do array:

```js
const favoritos = ["Homem-Aranha", "Batman"];

favoritos[1] = "Superman";
console.log(favoritos); // ["Homem-Aranha", "Superman"]

// favoritos = ["Mulher-Maravilha"]; // TypeError: reatribuição de const.
```

Alterar um elemento mantém a variável apontando para o mesmo array. Reatribuir a variável tentaria fazê-la apontar para outro valor.

## Verificando se um valor é um array

Arrays são objetos em JavaScript. Por isso, `typeof` retorna `"object"`. Para identificar especificamente um array, usamos `Array.isArray()`:

```js
console.log(typeof filmes); // object
console.log(Array.isArray(filmes)); // true
console.log(Array.isArray({ cidade: "São Paulo" })); // false
```

## Clonar o repositório

```bash
git clone https://github.com/Kalebreus/estudos-js-07-arrays..git estudos-js-07-arrays
cd estudos-js-07-arrays
```

O nome do repositório termina com um ponto. O comando acima escolhe `estudos-js-07-arrays` como nome da pasta local.

## Executar os exemplos

Com uma versão LTS do [Node.js](https://nodejs.org/) instalada, execute na raiz do repositório:

```bash
node exemplos.js
```

Não é necessário instalar dependências. O arquivo [exemplos.js](exemplos.js) reúne os acessos por índice, arrays mistos e aninhados, percursos e verificações desta aula. As linhas que causariam erros ficam comentadas.

## Para praticar

1. Adicione um filme ao final de `filmes` e observe `length` e o último elemento.
2. Acesse o número `9` em `matriz` usando dois índices.
3. Altere o nome dentro do array aninhado de `filmesComNotas` e repita o acesso com três índices.
4. Troque o filme procurado no `for` com `break` e observe quando o laço termina.

[Catálogo de estudos](https://github.com/Kalebreus/reposit-rio)
