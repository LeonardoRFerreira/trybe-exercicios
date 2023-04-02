/* Ana começou a ler o livro "O guia do mochileiro das galáxias", que tem 208 páginas. Após 2 minutos ela leu 4 páginas. 
Crie um algoritmo que calcula e imprime o tempo em minutos que Ana levará para ler todo o livro seguindo o formato:
Ana levará X minutos para ler o livro todo. */

let livro = 208
let velocitempo = 2
let numeroDePaginas = 4

let tempo = livro/numeroDePaginas*velocitempo;

console.log('Ana levara ' + tempo + ' minutos para ler o livro todo.')