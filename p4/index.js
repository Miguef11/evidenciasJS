var div= document.querySelector('#res');

var fin = document.querySelector('#fin');
fin.addEventListener('keypress',function(event){
    console.log(event);

    if(event.charCode == 13){
        div.innerHTML = '';
        var factorial = 1;
        for(var i=1; i<=fin.value; i++){
            factorial *= i;
        }
        div.innerHTML += 'El factorial de ' + fin.value + ' es ' + factorial;
    } 
});
