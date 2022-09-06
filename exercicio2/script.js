/*
Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio,
e um booleano que responda se a pessoa está cursando alguma faculdade.

Crie um `if` para cada variável, checando as seguintes afirmacões:
- Se a pessoa tem 18 anos ou mais;
- Se a pessoa terminou o ensino médio;
- Se a pessoa NÃO está cursando alguma faculdade;

Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

<details>

<summary>Exemplo</summary>

Caso a primeira pessoa tenha idade >=18:

<b>"A pessoa é maior de idade"</b>

e caso não seja:

<b>"A pessoa é menor de idade"</b>

</details>
*/
/*
let idade = 20
let maiorIdade = idade >= 18
let isCursandoOutraFaculdade = true
*/

const idade = prompt("Qual é a sua idade?")
const cursandoMedio = prompt("Você está cursando o ensino médio? \nResponda com \"sim\" ou \"não\"").toLowerCase()
const cursandoFacul = prompt("Você está fazendo alguma faculdade?\nResponda com \"sim\" ou \"não\"").toLowerCase()

if(idade >= 18){
    console.log("Você é maior de idade!")
}else{
    console.log("Você é menor de idade!")
}

if (cursandoMedio === "sim"){
    console.log("Você está cursando o ensino médio!")
} else if(cursandoMedio === "não"){
    console.log("Você não está cursando o ensino médio!")
} else{
    console.log("Sua resposta é invalida")
}

if(cursandoFacul === "sim"){
    console.log("Você está cursando uma faculdade!")
} else if(cursandoFacul === "não"){
    console.log("Você não está cursando uma faculdade!")
} else{
    console.log("Sua resposta é invalida!")
}

//Fim da Atividade 2