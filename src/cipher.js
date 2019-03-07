window.cipher = {
  encode: (nortxt, offset1) => {

    let output = '';
    let valOffset = parseInt(offset1);

    for(let i = 0; i < nortxt.length; i++) {
      while (valOffset < 0) {
        valOffset = valOffset + 26;
      }
      const codigoLetra = nortxt.charCodeAt(i);
      if(codigoLetra >= 65 && codigoLetra <= 90) {
      //mayúsculas
        output += String.fromCharCode((codigoLetra - 65 + valOffset) % 26 + 65 );
      } else if (codigoLetra === 32) {
      //espacio  
        output += nortxt[i];
      } else if (codigoLetra >= 97 && codigoLetra <= 122) {
      //minúsculas
        output += String.fromCharCode((codigoLetra - 97 + valOffset) % 26 + 97);
      } else if (codigoLetra >= 33 && codigoLetra <= 64) {
        output += String.fromCharCode((codigoLetra - 33 + valOffset) % 32 + 33 );
      } else  {codigoLetra === 10;
        //salto de línea
        output += String.fromCharCode(codigoLetra);
      }
    }
    return output;
  },
  decode: (nortxt2,offset2) => {

    let result = '';
    let valOffset1 = parseInt(offset2);

    for(let c = 0; c < nortxt2.length; c++) {
      while (valOffset1 < 0) {
        valOffset1 = valOffset1 + 26;
      }
      const codigoletra1 = nortxt2.charCodeAt(c);
      if(codigoletra1 >= 65 && codigoletra1 <= 90) {
        //mayúsculas
        result += String.fromCharCode((codigoletra1 + 65 - valOffset1) % 26 + 65);
      } else if (codigoletra1 === 32) {
        //espacio
        result += nortxt2[c];
      } else if (codigoletra1 >= 97 && codigoletra1 <= 122) {
        //minúsculas
        result += String.fromCharCode((codigoletra1 + 7 - valOffset1) % 26 + 97);
      }  else if (codigoletra1 >= 33 && codigoletra1 <= 64) {
        result += String.fromCharCode((codigoletra1 + 31 - valOffset1) % 32 + 33 );
      } else {codigoletra1 === 10;
        //salto de línea
        result += String.fromCharCode(codigoletra1);
      }
    }
    return result;
  }
};

