const sorteadosOriginal = [10, 3, 11, 18, 5, 14, 19, 4, 25, 7, 20, 1, 23, 6, 24];
const sorteadosOrdenados = sorteadosOriginal.sort();

const lista1 = [1, 3, 4, 5, 9, 10, 11, 12, 13, 14, 19, 20, 22, 24, 25];
const lista2 = [4, 5, 7, 9, 10, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24];
const lista3 = [1, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 17, 20, 22, 25];
const lista4 = [1, 3, 5, 7, 8, 9, 11, 12, 18, 19, 20, 21, 22, 24, 25];
const lista5 = [1, 2, 4, 6, 9, 11, 13, 14, 15, 16, 17, 18, 19, 22, 24];
const lista6 = [1, 3, 4, 5, 7, 9, 10, 11, 12, 13, 15, 17, 18, 19, 20, 21, 22, 24, 25];
const listaT1 = [3, 4, 5, 7, 10, 11, 13, 14, 16, 18, 19, 21, 22, 24, 25];
const listaT2 = [1, 2, 5, 6, 8, 9, 12, 14, 15, 17, 18, 20, 21, 23, 25];
const listaT3 = [1, 4, 5, 6, 8, 9, 11, 12, 16, 19, 202, 21, 23, 24, 25];

let numerosIguais = 0;

for (const numero of sorteadosOrdenados) {
  if (numero in lista1) {
    numerosIguais++;
  }
}

console.log(`Número de números iguais: ${numerosIguais}`);
