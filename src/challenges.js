// Desafio 1
function compareTrue(p1, p2) {
  let trueFalse = false;
  if (p1 === true && p2 === true) {
    trueFalse = true;
  }
  return trueFalse;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, altura) {
  let calculo = (base * altura) / 2;
  return calculo;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(frase) {
  let separando = frase.split(' ');
  return separando;
}
console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(array) {
  let lastFirst = '';
  lastFirst += `${array[array.length - 1]}, ${array[0]}`;
  return lastFirst;
}
console.log(concatName(['Livia', 'Joao', 'Vini', 'Sol']));

// Desafio 5
function footballPoints(wins, ties) {
  let res = wins * 3 + ties * 1;
  return res;
}
  console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(numbers) {
  let maiorNumero = numbers[0]; // é uma string
  let vezesRepetidas = 0;
  for (let index in numbers) {
    if (maiorNumero < numbers[index]) {
      maiorNumero = numbers[index];
    }
  }
  for (let index in numbers) {
    if (maiorNumero === numbers[index]) {
      vezesRepetidas += 1;
    }
  }
  return vezesRepetidas;
}
console.log(highestCount([1, 9, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } else if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return 'cat2';
  } else if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(currentNumber) {
  let div = [];
  for (let index in currentNumber) {
    if (currentNumber[index] % 3 == 0 && currentNumber[index] % 5 == 0) {
      div.push('fizzBuzz')
    } else if (currentNumber[index] % 3 === 0) {
      div.push('fizz')
    } else if (currentNumber[index] % 5 === 0) {
      div.push('buzz')
    } else if (currentNumber[index] % 3 !== 0 && currentNumber[index] % 5 !== 0) {
      div.push('bug!')
    }
  }
  return div;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  let frase = [];
  for (let index in string) {
    if (string[index] === 'a') {
      frase.push('1') 
    } else if (string[index] === 'e') {
      frase.push('2') 
    } else if (string[index] === 'i') {
      frase.push('3') 
    } else if (string[index] === 'o') {
      frase.push('4') 
    } else if (string[index] === 'u') {
      frase.push('5') 
    } else {
      frase.push(string[index]);
    }
} 
return frase.join('');
}
console.log(encode('How are you today?'));

function decode(string) {
  let frase = [];
  for (let index in string) {
    if (string[index] === '1') {
      frase.push('a') 
    } else if (string[index] === '2') {
      frase.push('e') 
    } else if (string[index] === '3') {
      frase.push('i') 
    } else if (string[index] === '4') {
      frase.push('o') 
    } else if (string[index] === '5') {
      frase.push('u') 
    } else {
      frase.push(string[index])
    }
} 
return frase.join('');
}
console.log(decode('How are you today?'));

// Desafio 10
function techList(tecnologias, nome) {
  let container = [];
  if (tecnologias.length === 0 || !nome) {
    return 'Vazio!';
  } else {
    for (let index = tecnologias.length -2; index >= 2; index -= 1) {
    container.push({tech: tecnologias[index], name: nome});
    }
    for (let index = tecnologias.length -1; index >= tecnologias.length -1; index -= 1) {
      container.push({tech: tecnologias[index], name: nome});
    }
    for (let index = tecnologias.length -4; index >= 0; index -= 1) {
      container.push({tech: tecnologias[index], name: nome});
    }
    return container  
  }
}
console.log(techList([0], ''));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
