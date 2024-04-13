// Sesion 3 IMA
import { storage } from "./Storage.js";

var estudiantes = (storage.obtener('estudiantes') == '') ? [] : JSON.parse(storage.obtener('estudiantes'));
llenaTabla();

var inputMatricula = document.querySelector('#matricula');
var inputNombre = document.querySelector('#nombre');
var inputApellidos = document.querySelector('#apellidos');
var inputCarrera = document.querySelector('#carrera');
var botonGuardar = document.querySelector('#guardar');

botonGuardar.addEventListener('click', () => {
    var estudiante = {
        matricula: inputMatricula.value,
        nombre: inputNombre.value,
        apellidos: inputApellidos.value,
        carrera: inputCarrera.value
    };
    estudiantes.push(estudiante);
    storage.asignar('estudiantes', JSON.stringify(estudiantes));
    inputMatricula.value = '';
    inputNombre.value = '';
    inputApellidos.value = '';
    inputCarrera.value = '';
    llenaTabla();
});

function llenaTabla() {
    var body = '';
    for (var i = 0; i < estudiantes.length; i++) {
        var estudiante = estudiantes[i];
        var btnEditar = '<button id="btnE' + i + '" data-indice="' + i +
            '" class="btn btn-warning btnEditar">Editar</button>';
        var btnEliminar = '<button data-indice="' + i +
            '" class="btn btn-danger btnEl">Eliminar</button>';
        var inputMatricula = '<input id="inputM' + i + '" class="form-control d-none" value="' + estudiante.matricula + '">';
        var inputNombre = '<input id="inputN' + i + '" class="form-control d-none" value="' + estudiante.nombre + '">';
        var inputApellidos = '<input id="inputA' + i + '" class="form-control d-none" value="' + estudiante.apellidos + '">';
        var inputCarrera = '<input id="inputC' + i + '" class="form-control d-none" value="' + estudiante.carrera + '">';
        var guardar = '<button class="btn btn-success btnGuar d-none" id="boton' + i +
            '" data-indice="' + i + '">Guardar</button>';
        body += '<tr><td>' + (i + 1) + '</td><td>' + inputMatricula + '<div id="divM' + i + '">' +
            estudiante.matricula + '</div></td><td>' + inputNombre + '<div id="divN' + i + '">' +
            estudiante.nombre + '</td><td>' + inputApellidos + '<div id="divA' + i + '">' +
            estudiante.apellidos + '</td><td>' + inputCarrera + '<div id="divC' + i + '">' +
            estudiante.carrera + '</td><td>' + btnEditar + '' + guardar + '</td><td>' + btnEliminar + '</td></tr>';
    }
    document.querySelector('#datos').innerHTML = body;
    eventos();
}

function eventos(){
    var btnEliminar = document.querySelectorAll('.btnEl');
    btnEliminar.forEach(elem => elem.addEventListener('click', event =>{
        var indice = event.target.getAttribute('data-indice');
        eliminar(indice);
    }));
    var btnEditar = document.querySelectorAll('.btnEditar');
    btnEditar.forEach(elem => elem.addEventListener('click', event =>{
        var indice = event.target.getAttribute('data-indice');
        show(indice);
    }));
    var btnGuardar = document.querySelectorAll('.btnGuar');
    btnGuardar.forEach(elem => elem.addEventListener('click', event =>{
        var indice = event.target.getAttribute('data-indice');
        actualizar(indice);
    }));
}

function eliminar(indice){
    estudiantes.splice(indice,1);
    storage.asignar('estudiantes', JSON.stringify(estudiantes));
    llenaTabla();
}

function show(indice){
    ['M', 'N', 'A', 'C'].forEach(letter => {
        var div = document.querySelector('#div' + letter + indice);
        var campo = document.querySelector('#input' + letter + indice);
        var botonEd = document.querySelector('#btnE' + indice);
        var botonG = document.querySelector('#boton' + indice);
        div.classList.add('d-none');
        campo.classList.remove('d-none');
        botonEd.classList.add('d-none');
        botonG.classList.remove('d-none');
    });
}

function actualizar(indice){
    var estudiante = {
        matricula: document.querySelector('#inputM' + indice).value,
        nombre: document.querySelector('#inputN' + indice).value,
        apellidos: document.querySelector('#inputA' + indice).value,
        carrera: document.querySelector('#inputC' + indice).value
    };
    estudiantes[indice] = estudiante;
    storage.asignar('estudiantes', JSON.stringify(estudiantes));
    llenaTabla();
}








