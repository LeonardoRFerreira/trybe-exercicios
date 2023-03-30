//exercícios usando if/else e switch/case, operadores aritiméticos (+ - * / %)e operadores lógicos (&& || > = <).

//1 - Elabore alguns códigos e imprima o resultado no console usando o console.log, 
//um para cada operação aritmética básica. Seu código deve ter duas variáveis, a e b, 
//definidas no começo com os valores que serão operados. Escreva códigos para:

let valorA = 360.00;
let valorB = 0.5;
let opsoma = valorA + valorB
console.log(opsoma);
let opsubt = valorA - valorB
console.log(opsubt);
let opmult = valorA * valorB
console.log(opmult);
let opdivi = valorA / valorB
console.log(opdivi);
let oprest = valorA % valorB
console.log(oprest);
let oppote = valorA ** valorB
console.log(oppote);

//2 - Utilize if/else para escrever um código que retorne o maior de dois números. 
//Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

let idadeAna = 20;
let idadePaulo = 20;

if(idadeAna<=0||idadePaulo<=0){
    console.log('Insira um valor válido.')
}  else if(idadeAna>idadePaulo) {
    console.log(idadeAna + " é maior que " + idadePaulo + ". Ana é mais velha que Paulo")
} else if (idadeAna==idadePaulo) {
    console.log(idadeAna + ' e ' + idadePaulo + '. Ana e Paulo tem a mesma idade.')   
} else {
    console.log(idadeAna + ' é menor que ' + idadePaulo + '. Paulo é mais velho que Ana.')
}

//3 - Utilize if/else para escrever um código que retorne o maior de três números. 
//Defina, no começo do seu código, três variáveis com os valores que serão comparados.

let numeroUm = Math.floor(Math.random() * 10);
let numeroDois = Math.floor(Math.random() * 10);
let numeroTres = Math.floor(Math.random() * 10);
let tresNumeros = [numeroUm, numeroDois, numeroTres];
console.log(`Os numeros da lista são ${tresNumeros}.`)

if(numeroUm>numeroDois&&numeroUm>numeroTres) {
    console.log(`O número ${numeroUm} é o maior da lista`)
} else if (numeroUm<numeroDois&&numeroDois>numeroTres) {
    console.log(`O número ${numeroDois} é o maior da lista`)
} else {
    console.log(`O número ${numeroTres} é o maior da lista`)
}

//4 - Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, 
//retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, 
//e “zero”, caso esse valor não seja nem positivo nem negativo.

let valorParam = 0.0000000000000000000000000000000000000000000000000001;

if(valorParam>0) {
    console.log('Positive')
} else if(valorParam==0) {
    console.log('Zero')
} else {
    console.log('Negative')
}

//5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores 
//dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os 
//ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve 
//retornar uma mensagem de erro.

//a soma dos ângulos internos de um triângulo é 180°;
//tipos de triângulo:
//escaleno - todos os lados diferentes;
//isósceles - dois lados com medidas iguais;
//equilátero - todos os lados iguais;
//acutângulo - angulos internos menor que 90°;
//obtusângulo - um ângulo maior que 90°;
//retângulo - um ângulo de exatamente 90°;

let pontoA = 20;
let pontoB = 70;
let pontoC = 180;
let triangulo = 180;

if(triangulo>pontoA+pontoB+pontoC||triangulo<pontoA+pontoB+pontoC) {
    console.log('False')
} else if (pontoA<=0||pontoA>360||pontoB<=0||pontoB>360||pontoC<=0||pontoC>360){
    console.log('Error')
} else {
    console.log('True')
}

//6 - Utilize switch/case para escrever um código que receba o nome de uma peça de 
//xadrez e retorne os movimentos que ela pode fazer.

let pecaXadrez = "bispo";

switch(pecaXadrez) {
    case "peão":
    console.log(`A peça ${pecaXadrez} pode fazer avançar uma casa e comer peças na diagonal.`)
    break;
    case "torre":
    console.log(`A peça ${pecaXadrez} pode fazer avançar quantas casas quiser na horizontal ou vertical, desde que não haja obstáculos.`)
    break;
    case "cavalo":
    console.log(`A peça ${pecaXadrez} pode fazer avançar em L, sendo duas casas em uma direção, e uma casa na direção adjascente. Ela pode pular peças no trajeto.`)
    break;
    case "bispo":
    console.log(`A peça ${pecaXadrez} pode fazer avançar quantas casas quiser nas diagonais, desde que não haja obstáculos. Obs: O Bispo da casa branca anda em casas brancas e o bispo da casa preta anda em casas pretas.`)
    break;
    case "rainha":
    console.log(`A peça ${pecaXadrez} pode fazer avançar quantas casas quiser em todas as direções, desde que não haja obstáculos.`)
    break;
    default:
    console.log(`O rei pode avançar em todas as direções, mas apenas uma casa por vez.`)
}

//7 - Utilize if/else para escrever um código que converta uma nota dada em porcentagem 
//(de 0 a 100) em conceitos de A a F. Siga as seguintes regras:

let notaFinal = 76;

if (notaFinal < 0 || notaFinal > 100) {
  console.log("Erro, nota incorreta!");
} else if (notaFinal >= 90) {
  console.log("A");
} else if (notaFinal >= 80) {
  console.log("B");
} else if (notaFinal >= 70) {
  console.log("C");
} else if (notaFinal >= 60) {
  console.log("D");
} else if (notaFinal >= 50) {
  console.log("E");
} else {
  console.log("F");
}

//8 - Utilize if/else para escrever um código que defina três números em variáveis 
//e retorne true se pelo menos uma das três for par. Caso contrário, o código deve 
//retornar false.

let num1 = Math.floor(Math.random()*10);
let num2 = Math.floor(Math.random()*10);
let num3 = Math.floor(Math.random()*10);


if(num1%2==0||num2%2==0||num3%2==0) {
  console.log(num1, num2, num3)
  console.log('Há ao menos um número par.')
} else {
  console.log("Não há números pares.")
}

//9 - Utilize if/else para escrever um código que defina três números em variáveis 
//e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código 
//deve retornar false.

if(num1%2!=0||num2%2!=0||num3%2!=0) {
  console.log(num1, num2, num3)
  console.log('Há ao menos um número impar.')
} else {
  console.log("Não há números impares.")
}

// 10 - Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos.

let custoProduto = 4.35;
let valorVenda = 8.99;

if(custoProduto>=0 && valorVenda >=0 && valorVenda>custoProduto) {
  let lucroUnitario = valorVenda - custoProduto;
  console.log(`O lucro da empresa por item é de ${lucroUnitario}`)
//  let lucroMil = Math.round(lucroUnitario * 1000).toFixed(2);
  let lucroMil = (lucroUnitario * 1000).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  console.log(`O lucro da empresa após vender 1000 unidades será de ${lucroMil}`)
  console.log(typeof(lucroMil))
} else if (valorVenda<custoProduto) {
  console.log(`Não há lucro`)
} else if (valorVenda<custoProduto){
  console.log(`Este produto dá prejuizo, revise seus preços!!!`)
} else {
  console.log(`Error, os valores não podem ser negativos.`)
}



//11 - Utilize if/else para escrever um código que, dado um salário bruto, calcule o salário 
//líquido a ser recebido.

//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário 
//bruto o INSS e o IR.

  //A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

//    INSS (Instituto Nacional do Seguro Social)
//      Salário bruto até R$ 1.556,94: alíquota de 8%
//      Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//      Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//      Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

//    IR (Imposto de Renda)
//      Até R$ 1.903,98: isento de imposto de renda
//      De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//      De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//      De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//      Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto

//Exemplo: Uma pessoa que possui o salário bruto de R$ 3.000,00 terá o primeiro desconto referente à contribuição do INSS. O cálculo deve ser o demonstrado a seguir.

//  O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

//  Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

//  Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:
//      R$ 2.670,00 - salário com INSS já deduzido.
//      7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25.
//      R$ 142,80 - parcela a ser deduzida do imposto de renda.

//  Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.

//  Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

//  Resultado: R$ 2.612,55.

//De olho na dica 👀: Que tal identificar as alíquotas com variáveis de nomes explicativos?

const salarioBruto = 2390;
let descontoINSS;
let salarioBase;
let descontoIR;

if(salarioBruto<=1556.94) {
  descontoINSS = salarioBruto*0.08;
  salarioBase = salarioBruto - descontoINSS
} else if (salarioBruto>=1556.95 && salarioBruto<2594.93) {
  descontoINSS = salarioBruto*0.09;
  salarioBase = salarioBruto - descontoINSS
} else if (salarioBruto >=2594.93 && salarioBruto < 5189.82) {
  descontoINSS = salarioBruto *0.11;
  salarioBase = salarioBruto - descontoINSS
} else {
  descontoINSS = 570.88
  salarioBase = salarioBruto - descontoINSS;
}

if(salarioBase<=1903.98) {
  descontoIR = 0;
  salarioLiquido = salarioBase -descontoIR;
} else if (salarioBase>1903.98 && salarioBruto<2826.66){
  descontoIR = 142.8;
  salarioLiquido = salarioBase -descontoIR;
} else if(salarioBase>=2826.66 && salarioBase<3751.06){
  descontoIR = 354.8;
  salarioLiquido = salarioBase -descontoIR;
} else if (salarioBase>=3751.06 && salarioBase<4664.68) {
  descontoIR = 636.13;
  salarioLiquido = salarioBase -descontoIR;
} else {
  descontoIR = 869.36;
  salarioLiquido = salarioBase -descontoIR;
}

console.log(`O salário bruto dessa pessoa é ${salarioBruto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}. Seu desconto de INSS é de ${descontoINSS.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}. Seu salário base é de ${salarioBase.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} e seu desconto de IR é de ${descontoIR.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}. Por fim, essa pessoa receberá ${salarioLiquido.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`)
