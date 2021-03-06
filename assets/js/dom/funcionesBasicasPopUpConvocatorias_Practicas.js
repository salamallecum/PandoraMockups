
//Archivo que define las operaciones basicas de los popup en la app Pandora (Abrir y cerrar)

//ROL COORDINACION DE PRACTICAS PROFESIONALES-----------------------------------------------------------------------------------------------------------

//EVENTOS POPUP REGISTRO DE CONVOCATORIAS
const open1 = document.getElementById('openModal');
const modal_container1 = document.getElementById('modal_container1');
const close1 = document.getElementById('btn_cancelar1');


open1.addEventListener('click', (e) => {
    e.preventDefault();
    modal_container1.classList.add('show');
},false);


close1.addEventListener('click', (e) => {
    e.preventDefault();
    modal_container1.classList.remove('show');
    limpiarFormularioRegistroDeConvocatorias();
},false);


//ASIGNACION DE EVENTOS A BOTONES ELIMINAR PARA LA ELIMINACIÓN DE CONVOCATORIAS
let listOpen3 = document.getElementsByName('openModal3');
var modal_container3 = document.getElementById('modal_container3');
var close3 = document.getElementById('btn_cancelar3');

function eventoPopUpEliminacionDeConvocatorias(){

    //Recorremos el arreglo de elementos con el name openModal3
    for(var i=0; i<listOpen3.length; i++){
        
        listOpen3[i].addEventListener('click', (e) => {
            e.preventDefault();
            modal_container3.classList.add('show');
        },false);
    }
    
    close3.addEventListener('click', (e) => {
        e.preventDefault();
        modal_container3.classList.remove('show');
    },false); 
}


//ASIGNACION DE EVENTOS A BOTONES EDITAR PARA LA ACTUALIZACIÓN DE CONVOCATORIAS
let listOpen2 = document.getElementsByName('openModal2');
var modal_container2 = document.getElementById('modal_container2');
var close2 = document.getElementById('btn_cancelar2');

function eventoPopUpActualizacionDeConvocatorias(){

    //Recorremos el arreglo de elementos con el name openModal2
    for(var i=0; i<listOpen2.length; i++){
        
        listOpen2[i].addEventListener('click', (e) => {
            e.preventDefault();
            modal_container2.classList.add('show');
        },false);
    }
    
    close2.addEventListener('click', (e) => {
        e.preventDefault();
        modal_container2.classList.remove('show');
    },false); 
}

//ASIGNACION DE EVENTOS A BOTONES DETALLE DE CONVOCATORIAS
let listOpen4 = document.getElementsByName('openModal4');
var modal_container4 = document.getElementById('modal_container4');
var close4 = document.getElementById('btn_cancelar4');

function eventoPopUpDetalleDeConvocatorias(){

    //Recorremos el arreglo de elementos con el name openModal2
    for(var i=0; i<listOpen4.length; i++){
        
        listOpen4[i].addEventListener('click', (e) => {
            e.preventDefault();
            modal_container4.classList.add('show');
        },false);
    }
    
    close4.addEventListener('click', (e) => {
        e.preventDefault();
        modal_container4.classList.remove('show');
    },false); 
}


//ASIGNACION DE EVENTOS A BOTONES COMPARTIR EL EPORTAFOLIO DEL ESTUDIANTE CON EL EMPLEADOR (ROL PRACTICAS)
function eventoPopUpCompartirEportafolio(){

    let listOpen5 = document.getElementsByName('openModal5');
    var modal_container5 = document.getElementById('modal_container5');
    var close5 = document.getElementById('btn_cancelar5');

    //Recorremos el arreglo de elementos con el name openModal2
    for(var i=0; i<listOpen5.length; i++){
        
        listOpen5[i].addEventListener('click', (e) => {
            e.preventDefault();
            modal_container5.classList.add('show');
        },false);
    }
    
    close5.addEventListener('click', (e) => {
        e.preventDefault();
        modal_container5.classList.remove('show');
        limpiarFormularioCompartirEportafolio();
    },false); 
}

//EVENTOS POPUP REGISTRO DE CONVOCATORIA SATISFACTORIO
const open6 = document.getElementById('btn_guardarConvocatoria');
const modal_container6 = document.getElementById('modal_container6');
const close6 = document.getElementById('btn_aceptar1');

open6.addEventListener('click', (e) => {
    e.preventDefault();
    modal_container6.classList.add('show');
},false); 

close6.addEventListener('click', (e) => {
    e.preventDefault();
    modal_container6.classList.remove('show');
    modal_container1.classList.remove('show');
},false);


//EVENTOS POPUP ACTUALIZACION DE CONVOCATORIA SATISFACTORIO
const open7 = document.getElementById('btn_actualizarConvocatoria');
const modal_container7 = document.getElementById('modal_container7');
const close7 = document.getElementById('btn_aceptar2');

open7.addEventListener('click', (e) => {
    e.preventDefault();
    modal_container7.classList.add('show');
},false); 

close7.addEventListener('click', (e) => {
    e.preventDefault();
    modal_container7.classList.remove('show');
    modal_container2.classList.remove('show');
},false);


//EVENTOS POPUP ELIMINACION DE CONVOCATORIA SATISFACTORIO
const open8 = document.getElementById('btn_eliminarConvocatoria');
const modal_container8 = document.getElementById('modal_container8');
const close8 = document.getElementById('btn_aceptar3');

open8.addEventListener('click', (e) => {
    e.preventDefault();
    modal_container8.classList.add('show');
},false); 

close8.addEventListener('click', (e) => {
    e.preventDefault();
    modal_container8.classList.remove('show');
    modal_container3.classList.remove('show');
},false);


//FUNCION QUE RESETEA LOS CAMPOS DEL FORMULARIO DE REGISTRO DE CONVOCATORIAS
function limpiarFormularioRegistroDeConvocatorias(){
    
    const formRegistro = document.getElementById('formularioDeRegistroDeConvocatorias_Practicas');
    formRegistro.reset();
}

//FUNCION QUE RESETEA LOS CAMPOS DEL FORMULARIO DE COMPARTIR EPORTAFOLIOS
function limpiarFormularioCompartirEportafolio(){
    
    const formRegistro = document.getElementById('formularioParaCompartirEportafolio');
    formRegistro.reset();
}


//INVOCACION DE FUNCIONES
eventoPopUpEliminacionDeConvocatorias();
eventoPopUpActualizacionDeConvocatorias();
eventoPopUpDetalleDeConvocatorias();
eventoPopUpCompartirEportafolio();
