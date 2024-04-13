import { storage } from "./Storage.js";
let btn = document.querySelector('#btn1');
btn.addEventListener('click', () =>{
    let nuevonombre = document.querySelector('#nuevonombre');
    document.querySelector('#nom').innerHTML = nuevonombre.value;
    storage.asignar('usuario',nuevonombre.value);
    nuevonombre.value=' ';
});
let nombreLocal = storage.obtener('usuario');
document.querySelector('#nom').innerHTML = nombreLocal;
