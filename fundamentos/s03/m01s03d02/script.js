//ARRAYS
//obtenha o valor "Serviços" do array menu;

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);
console.log(menu.length)

//Procure o índice do valor "Portifólio" do array menu:

//let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

//Adicione o valor "Contato" no final do array menu:
menu.push('Contato')
console.log(menu)
console.log(menu.length)

//FOR
//estrutura:
//for (inicialização ; condição de repetição ; incremento ou decremento) {
    //bloco de código
//}
let numero = 6;

for (let contador =1;contador <=10; contador +=1){
    console.log(numero*contador);
}

//ha'um array com 7 nomes, a condição do looping será iniciada no índice 0 ( i = 0, 0 = Paula)
//se o número do i for menor que o tamanho dos nomes, será feito o bloco de código
//OBS: não pode ser menor ou igual, pq senão o último valor será undefined
//depois faz um incremento e retorna para o começo do looping
let nomes = ['Paula' , 'Roberto' , 'Amanda' , 'Cleide' , 'Daniel' , 'Rods' , 'Rogério']
for (let i = 0; i<nomes.length; i+=1){
    console.log('Olá, ' + nomes[i])
}

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for(let i = 0; i<groceryList.length;i+=1){
    console.log(groceryList[i])
}


//for/of
//permite criar loops em objetos iteraveis

let numeros = [1,2,3,4,5];
for (let numero of numeros) {
    console.log(numero);
}
//esse código retorna um valor dentro do arrya numeros para a variável numero e imprime ele

let word = 'hello';
for(let letter of word){
    console.log(letter)
}
//retorna um valor do array word na variável letter. O primeiro valor é H, o segundo E, o terceiro L...

let arrOfNum = [11,22,33];
for (let sum of arrOfNum){
    console.log(arrOfNum);
    sum +=1;
    console.log(sum);
}
//soma 1 unidade aos valores do array, mas não altera o array.

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let listOfNames of names){
    console.log(listOfNames)
}
console.log(names.length)


//while
//executa a iteração com apenas uma condição
//esse comando roda enquanto a condição for verdadeira

let contagem1 = 0;
while(contagem1 !== 5){
    contagem1 +=1;
    console.log(contagem1)
}

//enquanto contagem for diferente de 5 o while continua rodando, ou seja, enquanto contagem !== 5 (true) 
//agora, se o valor de contagem for 6, entramos num loop infinito.
//é possível colocar um break dentro do while para evitar isso

let contagem = 8;
while(contagem !== 5){

    if(contagem>5) {
        console.log('error, valor inicial maior que o valor final')
        break;
    }

    contagem +=1;
    console.log(contagem)
}

//outra opção é isso:
let contagem3 = 0;
while(contagem3 !==5 && contagem3<6){
    contagem3 +=1;
    console.log(contagem3)
}

//geralmente usa-se while quando não se sabe o início e o fim do laço

let dado1 = Math.ceil(Math.random()*20);
console.log(`O resultado do dado 1 é ${dado1}`)
let dado2 = Math.ceil(Math.random()*20);

while(dado2!==dado1) {
    dado2 = Math.ceil(Math.random()*20);
    console.log(`O resuldado do dado 2 é ${dado2}`)
    
}

let n = 9;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado);




//function
//função: seq de tarefas bem definidas e não ambiguas para resolver um probrama
//programa: seq de tarefas bem definidas 

//função tem entrada, processamento e saída

//então o parâmetro é como se fosse uma variável não declarada, daí quando vc chama a função, vc define oq será essavariável não declaradao?
