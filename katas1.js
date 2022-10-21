// ----> 1 <---- //

function cubicSquare() {
    for (let cont = 1; cont <= 10; cont++) {
      console.log(cont ** 3); 
    }
    console.log("Fim 1")
  }
  
  cubicSquare()
  
  // ----> 2 <---- //
  
  function divisiblesFor(numberLimitador, numberDivosor) {
    for (let cont = 0; cont <= numberLimitador; cont++) {
      if (cont % numberDivosor === 0) {
        console.log(cont);
      }
    }
    console.log("Fim 2")
  }
  
  divisiblesFor (100, 10)
  
  // ----> 3 <---- //
  
  function stringElement(string, number) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] == string[number]) {
        console.log(string[i].toUpperCase());
      }
    }
    console.log("Fim 3")
  }
  
  stringElement ("algorítmos", 7);
  
  // ----> 4 <---- //
  
  function stringSlicer(string, numberPar) {
    let resultado = "";
    for (let i = 0; i < numberPar; i++) {
      resultado += string[i];
    }
    console.log(resultado);
    console.log("Fim 4")
  }
  
  stringSlicer ("ALGORITIMO", 4)
  
  // ----> 5 <---- // ----- aqui
  
  function stringRest(string, number) {
    let resultado = "";
    for (let i = number; i < string.length; i++) {
      resultado += string[i];
    }
    console.log(resultado);
    console.log("Fim 5")
  }
  
  stringRest("ALGORITMOS", 2);
  
  // ----> 6 <---- //
  
  function countVowels(string) {
    let number = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === "a") {
        number++;
      } else if (string[i] === "e") {
        number++;
      } else if (string[i] === "i") {
        number++;
      } else if (string[i] === "o") {
        number++;
      } else if (string[i] === "u") {
        number++;
      } else {
      }
    }
    console.log(number);
    console.log("Fim 6")
  }
  
  countVowels("abacaxi");
  
  // ----> 7 <---- //
  
  function countTextOccurrences(stringText, stringL) {
    let number = 0;
    for (let i = 0; i < stringText.length; i++) {
      if (stringText[i] == stringL) {
        number++;
      }
    }
    console.log(number);
    console.log("Fim 7")
  }
  
  countTextOccurrences("abacaxi", "a");
  
  // ----> 8 <---- //
  
  function textBackwards(string) {
    let text = "";
    for (let i = string.length - 1; i >= 0; i--) {
      text += string[i];
    }
    console.log(text);
    console.log("Fim 8")
  }
  
  textBackwards("abacaxi");
  
  // ----> 9 <---- //
  
  function removeBlank(string) {
    let text = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== " ") {
        text += string[i];
      } else {
      }
    }
    console.log(text);
    console.log("Fim 9")
  }
  
  removeBlank("Não ficará espaços em branco");
  
  // ----> 10 <---- //
  
  function encryptText(string) {
    let text = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i] === "a") {
        text += "x";
      } else if (string[i] === "e") {
        text += "y";
      } else if (string[i] === "i") {
        text += "w";
      } else if (string[i] === "o") {
        text += "k";
      } else if (string[i] === "u" || string[i] === "U") {
        text += "z";
      } else {
        text += string[i];
      }
    }
    console.log(text);
    console.log("Fim 10")
  }
  
  encryptText("Uma frase ultra secreta que precisa ser criptografada");