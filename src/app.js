/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Arreglos con las excusas
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  document.write("The Domain Name Generator: ");
  document.write("<br>");
  document.write("<br>");

  for (let i = 0; i < 10; i++) {
    //Generador de número aleatorio
    let sujeto = pronoun[Math.floor(Math.random() * pronoun.length)];
    let adjetivo = adj[Math.floor(Math.random() * adj.length)];
    let sustantivo = noun[Math.floor(Math.random() * noun.length)];

    //Impresión del nombre en la página
    document.write(sujeto + adjetivo + sustantivo + ".com");
    document.write("<br>");
  }

  /*
  //Generador de número aleatorio
  let sujeto = pronoun[Math.floor(Math.random() * pronoun.length)];
  let adjetivo = adj[Math.floor(Math.random() * adj.length)];
  let sustantivo = noun[Math.floor(Math.random() * noun.length)];

  //Impresión del nombre en la página
  document.write(sujeto + adjetivo + sustantivo + ".com");*/
};
