var inputNumero = document.querySelector ('#numero');
var pResultado = document.querySelector ('#resultado');
var btnEvalNumero = document.querySelector ('#btnEvalNumero');
btnEvalNumero.addEventListener('click', evalNumero);

var selectOpciones = document.querySelector ('#opciones');
selectOpciones.addEventListener('change, evalOpcion');

var opcion = selectOpciones.value;
switch(opcion) {
    case 'mitad':
    pResultado.textContent = 'La mitad es' + (numero/2);
    break;
    case 'cuadrado':
    pResultado.textContent = 'El cuadrado es ' + (numero*numero);
    break;
    case 'par':
    if(numero%2 === 0) {
        pResultado.textContent 'Es par';
    }
    else {
        pResultado.textContent = 'Es impar';
    }
    break;
    default:
    pResultado.textContent = '';
}

function evalOpcion() {
    var numero = number (inputNumero.value);
    var opcion = selectOpciones.value;

    if(opcion === 'mitad') {
        pResultado.textContent = 'La mitad es '+ (numero/2);    
    }
 else  if(opcion === 'cuadrado) {
    
    pResultado.textContent = 'El cuadrado es ' + (numero*numero);
 } 

 else if(opcion === 'par') {
    
    if(numero % === 0) {
        pResultado.textContent = 'Es par';
    }
 else {
        pResultado.textContent = 'Es impar';
    }
}


function evalNumero () {
    var numero = number (inputNumero.value);

    if(numero > 0) {
        pResultado.textContent = 'El numero ' + numero + 'es positivo'
    }
    else {
        pResultado.textContent = 'El numero' + numero 'es negativo';
    }
    else {
        pResultado.textContent = 'El numero es cero';
    }
}