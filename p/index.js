
var edades= [18,15,20,5,11,22,50,41,26];
var nombres= ['Miguel','Dani','Mario'];
var variado = [25,'Pedro',7.5,'Juan']



console.log(variado.indexOf('nada'));

nombres.push('Nuevo');
/*
nombres.shift();//Elimina el primer elemento del array
console.log(nombres);
nombres.log(pop); //Elimina el ultimo elemento del array
console.log(nombres);
*/
var opciones= '';
var filas = '';
for(var j=0; j< nombres.length; j++){
    opciones += '<option value="'+j+'">'+nombres[j]+'</optiones>';
    filas += '<tr><td>'+(j+1)+'</td><td>'+nombres[j]+'</td></tr>';
}
document.querySelector('#opciones').innerHTML = opciones;
document.querySelector('#tabla').innerHTML = filas;


let array1 = [10,5,6,8,2];
let array2 = [3,7,20,16,1];
let array3 = [];
for(let i=0;i<array1.length;i++){
    array3.push(array1[i] + array2[i]);

}
console.log(array3);