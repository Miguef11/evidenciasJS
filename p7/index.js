var btn = document.querySelector('#btnCalcular');
btn.addEventListener('click', function(){
    var inicio = Number(document.querySelector('#inicio').value);
    var fin = Number(document.querySelector('#fin').value);
    var operacion = document.querySelector('#operacion').value;
    calcularOperacion(inicio, fin, operacion);
});

function calcularOperacion(inicio, fin, operacion){
    var label = document.getElementById('res')
    var resultado = 0;
    var contador = 0;
    for(var i=inicio; i<=fin; i++) {
        if(operacion == 'suma' || operacion == 'promedio') {
            resultado += i;
            contador++;
        } else if(operacion == 'multiplicacion') {
            resultado = (resultado == 0) ? i : resultado * i;
        }
    }
    if(operacion == 'promedio') {
        resultado = resultado / contador;
    }
    label.textContent = 'El resultado de la operación es: ' + resultado;
}
