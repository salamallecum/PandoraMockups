
//Archivo que define las operaciones basicas de los popup en la app Pandora (Abrir y cerrar)

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
},false);


//ASIGNACION DE EVENTOS A BOTONES ELIMINAR PARA LA ELIMINACIÓN DE CONVOCATORIAS
function eventoPopUpEliminacionDeConvocatorias(){

    let listOpen3 = document.getElementsByName('openModal3');
    var modal_container3 = document.getElementById('modal_container3');
    var close3 = document.getElementById('btn_cancelar3');

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
function eventoPopUpActualizacionDeConvocatorias(){

    let listOpen2 = document.getElementsByName('openModal2');
    var modal_container2 = document.getElementById('modal_container2');
    var close2 = document.getElementById('btn_cancelar2');

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

//ASIGNACION DE EVENTOS A BOTONES EDITAR PARA LA VISUALIZACIÓN DE CONVOCATORIAS
function eventoPopUpDetalleDeConvocatorias(){

    let listOpen4 = document.getElementsByName('openModal4');
    var modal_container4 = document.getElementById('modal_container4');
    var close4 = document.getElementById('btn_cancelar4');

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

//ASIGNACION DE EVENTOS A BOTONES COMPARTIR EL EPORTAFOLIO DEL ESTUDIANTE CON EL EMPLEADOR
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
    },false); 
}

//INVOCACION DE FUNCIONES
eventoPopUpActualizacionDeConvocatorias();
eventoPopUpEliminacionDeConvocatorias();
eventoPopUpDetalleDeConvocatorias();
eventoPopUpCompartirEportafolio();
