window.cipher = {
  encode: (nortxt, offset1) => {

    let output = '';
    let valOffset = parseInt(offset1);

    for(let i = 0; i < nortxt.length; i++) {
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
      }
    }
    return output;
  },
  decode: (nortxt2,offset2) => {

    let result = '';
    let valOffset1 = parseInt(offset2);

    for(let c = 0; c < nortxt2.length; c++) {
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
      }
    }
    return result;
  }
};
