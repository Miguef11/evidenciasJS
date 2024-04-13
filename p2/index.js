document.getElementById('btnCalcular').addEventListener('click', function() {
    var precio = document.getElementById('precio').value;
    var descuento = document.getElementById('descuento').value;

    var precioFinal = precio - (precio * (descuento / 100));
    document.getElementById('precio_final').innerText = "Precio final: " + precioFinal.toFixed(2);
});
