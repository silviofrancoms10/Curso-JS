"use strict";

/*
var nome = "João"; //variável global

let nome2 = "Silvio"; //variável local
*/

function teste() {

    if (true) {
        var nome = "João"; //variável global
        let nome2 = "Silvio"; //variável local
        console.log(nome);
        console.log(nome2);
    }
    console.log(nome);
    //console.log(nome2);

}
teste();

let nome = "João";
nome = "Silvio";
nome = 10;

console.log("LET: ",nome);

const curso = "JavaScript constante";
//curso = "HTML ";
console.log(curso);