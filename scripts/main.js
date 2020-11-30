'use strict';

/*
Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13Converter() {
  let cadena = prompt('Ingrese la palabra u oración a convertir:');

  let cadena2 = cadena.toUpperCase();
  // console.log(cadena2);
  let alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
  let alfabeto2 = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  let arreglo = cadena2.split('');
  // console.log(arreglo);

    for (let i = 0; i < arreglo.length; i++) {
      for (let j = 0; j < alfabeto.length; j++) {
      if (arreglo[i] === alfabeto[j]) {
        arreglo[i] = alfabeto2[j];
        // console.log(arreglo[i]);
      }

      else if (arreglo[i] === alfabeto2[j]) {
        arreglo[i] = alfabeto[j];
        // console.log(arreglo[i]);
      }
  
    }
  }
  // console.log(arreglo);
  let print = arreglo.join('');
  // console.log(print);
  
  alert(`${cadena} decodificado desde rot13 es: ${print}.`);
  
  return print;
}

rot13Converter();