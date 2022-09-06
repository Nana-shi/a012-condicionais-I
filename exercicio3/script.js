/*Exercicio 3

Crie um código que receba um **prompt** que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const `nacionalidade`.

Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
- brasileira;
- argentina;
- uruguaia;
- chilena;
- colombiana;

Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhum dos valores.

> 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas. 
 
let nacionalidade //= adicione o prompt aqui */

const nacionalidade = prompt("Digite a sua nacionalidade: \nBrasileira - Argentina - Uruguaia - Chilena - Colombiana").trim().toLowerCase()

if(nacionalidade === "brasileira"){
    console.log("Você é Brasileiro!")
} else if(nacionalidade === "argentina"){
    console.log("Você é Argentino!")
} else if(nacionalidade === "uruguaia"){
    console.log("Você é Uruguaio!")
} else if(nacionalidade === "chilena"){
    console.log("Você é Chileno!")
} else if(nacionalidade === "colombiana"){
    console.log("Você é Colombiano!")
} else{
    console.log("Sua nacionalidade não foi encontrada!")
}

//Fim da Atividade 3