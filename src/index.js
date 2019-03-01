/* Acá va tu código */
window.onload = () => {
    document.getElementById('second').style.display='none';
    document.getElementById('third').style.display='none';
}

document.getElementById('start').addEventListener('click', () => {
    document.getElementById('first').style.display='none';
    document.getElementById('second').style.display='block';
    document.getElementById('third').style.display='none';
});

let cif = document.getElementById('cipherbox');
let offset = document.getElementById('shifter');
let cifh2 = document.getElementById('studentcipher');
let offseth3 = document.getElementById('decipheroffset');

document.getElementById('profesor').addEventListener('click', () => {
    cifh2.innerHTML=cif.value;
    offseth3.innerHTML= offset.value;
    document.getElementById('first').style.display='none';
    document.getElementById('second').style.display='none';
    document.getElementById('third').style.display='block';
});

document.getElementById('again').addEventListener('click', () => {
    document.getElementById('first').style.display='none';
    document.getElementById('second').style.display='block';
    document.getElementById('third').style.display='none';
});

let nortxt = document.getElementById('normal');
let enctxt = document.getElementById('ciphertxt');
let offset1 = document.getElementById('shift1');
let mostrarnumber = document.getElementById('numbershift');

offset1.addEventListener('input', () => {
    enctxt.value = cipher.encode(nortxt.value, offset1.value);
    mostrarnumber.innerHTML = "# Desplazamientos:  " + offset1.value;
});

let nortxt2 = document.getElementById('cifradotxt');
let enctxt1 = document.getElementById('answerciphertxt');
let offset2 = document.getElementById('shift2');
let mostrarnumber1 = document.getElementById('numbershift1');

offset2.addEventListener('input', () => {
    enctxt1.value = cipher.decode(nortxt2.value, offset2.value);
    mostrarnumber1.innerHTML = "# Desplazamientos:  " + offset2.value;
});