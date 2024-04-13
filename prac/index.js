document.getElementById('calcular').addEventListener('click', function() {
    calcularSumatorias();
});

function calcularSumatorias() {
    var numero = parseInt(document.getElementById('numero').value);
    var multiplo = parseInt(document.getElementById('multiplo').value);
    var resultadoDiv = document.getElementById('resultado');
    var resultadoHTML = '';

    for (var i = numero; i >= 1; i--) {
        if (i % multiplo === 0) {
            resultadoHTML += `<strong>${i} es múltiplo de ${multiplo}</strong><br>`;
        } else {
            resultadoHTML += `${i} no es múltiplo de ${multiplo}<br>`;
        }
    }

    resultadoDiv.innerHTML = resultadoHTML;
}
