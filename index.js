// LISTA DE EXERCÍCIOS I
// Lógica de Programação
// Escreva um programa utilizando a Javascript ES6 (arrow functions, classes, importação
// de funções, etc) para cada um dos problemas abaixo:

//Iniciando o proejto
// 1- Rode o comando YARN no seu terminal
// 2- Rode o comando YARN DEV para iniciar o projeto

// 1. Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu
// perímetro.

let calcularRetangulo = (base, altura) => {
    console.log(`Àrea do retângulo:`, (base * altura));
    console.log(`Perímetro do retângulo:`, (base * 2) + (altura * 2));
}
// calcularRetangulo(4,2);

// 2. Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.

let calcularQuadrado = (lado) => {
    console.log(`Àrea do quadrado:`, (lado * lado));
    console.log(`Perímetro do quadrado:`, (lado * 2));
}
// calcularQuadrado(3);

// 3. Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da
// mesma.

let calcularCircunferencia = (raio) => {
    console.log(`Area da circunferência:`, (3.14 * (raio * raio)));
    console.log(`Perímetro da circunferência:`, (2 * 3.14 * raio));
}
// calcularCircunferencia(5);

// 4. Dado os três lados de um triângulo determinar o perímetro do mesmo.

let calcularTriangulo = (lados) => console.log(`Perímetro:`, lados.reduce((total, lado) => total + lado));

// calcularTriangulo([5,3,2]);

// 5. Ler um número inteiro e exibir o seu sucessor e seu antecessor.
let exibirNumeroSucessorEAntecessor = (numero) =>console.log(`Antecessor:`, numero - 1, '/ Sucessor:', numero+1);

// exibirNumeroSucessorEAntecessor(4)

// 6. Solicitar a idade de uma pessoa em dias e informar na tela a idade em anos, meses e
// dias.
let informarIdade = (dias) => {
    const meses = dias/30.417;
    const anos = meses/12; 
    console.log(`Sua idade pode ser ${dias} dias, ${meses.toFixed(2)} meses ou ${anos.toFixed(2)} anos`);
}

// informarIdade(6927)

// 7. Dado que a fórmula para conversão de Fahrenheit para Celsius é C = 5/9 (F – 32), leu
// um valor de temperatura em Fahrenheit e exibi-lo em Celsius

const converterParaCelsius = (temperatura) => console.log(5/9 * (temperatura-32));

// converterParaCelsius(10);

// 8. Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo,
// dado seu raio e sua altura.

const calcularVolume = (raio,altura) => {
    console.log(3.14 * altura * (raio*raio));
}
// calcularVolume(3,8)

// 9. Faça um algoritmo para calcular a nota semestral de um aluno. A nota semestral é
// obtida pela média aritmética entre a nota de 2 bimestres. Cada nota de bimestre é
// composta por 2 notas de provas.

const notaSemestral = (provas) => console.log(provas.reduce((total, prova) => total+prova)/2);

// notaSemestral([10,10,10,10])

// 10. Faça um algoritmo que transforme uma velocidade fornecida em m/s pelo usuário
// para Km/h. Para tal, multiplique o valor em m/s por 3,6.
const converterParaKm = (velocidade) => console.log(velocidade * 3.6)

// converterParaKm(100)