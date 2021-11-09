//Archivo que define las operaciones basicas de los popup en la app Pandora (Abrir y cerrar)

//ASIGNACION DE EVENTO A BOTON "EVALUAR" PARA LA EVALUACION DE LAS COMPETENCIAS ESPECÍFICAS
const listOpen4 = document.getElementsByName('openModal4');
const modal_container4 = document.getElementById('modal_container4');
const close4 = document.getElementById('btn_cancelar4');

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


//-------------------------------------------------------------------------------------------------------------------------------------------

//EVENTOS POPUP REGISTRO DE DESAFIOS PERSONALIZADOS
const open5 = document.getElementById('openModal5');
const modal_container5 = document.getElementById('modal_container5');
const close5 = document.getElementById('btn_cancelar5');


open5.addEventListener('click', (e) => {
    e.preventDefault();
    modal_container5.classList.add('show');
},false);


close5.addEventListener('click', (e) => {
    e.preventDefault();
    modal_container5.classList.remove('show');
},false);


//ASIGNACION DE EVENTOS A BOTONES ELIMINAR PARA LA ELIMINACIÓN DE DESAFIOS PERSONALIZADOS
function eventoPopUpEliminacionDeDesafiosPersonalizados(){

    let listOpen6 = document.getElementsByName('openModal6');
    var modal_container6 = document.getElementById('modal_container6');
    var close6 = document.getElementById('btn_cancelar6');

    //Recorremos el arreglo de elementos con el name openModal3
    for(var i=0; i<listOpen6.length; i++){
        
        listOpen6[i].addEventListener('click', (e) => {
            e.preventDefault();
            modal_container6.classList.add('show');
        },false);
    }
    
    close6.addEventListener('click', (e) => {
        e.preventDefault();
        modal_container6.classList.remove('show');
    },false); 
}


//ASIGNACION DE EVENTOS A BOTONES EDITAR PARA LA ACTUALIZACIÓN DE DESAFIOS PERSONALIZADOS
function eventoPopUpActualizacionDeDesafiosPersonalizados(){

    let listOpen7 = document.getElementsByName('openModal7');
    var modal_container7 = document.getElementById('modal_container7');
    var close7 = document.getElementById('btn_cancelar7');

    //Recorremos el arreglo de elementos con el name openModal2
    for(var i=0; i<listOpen7.length; i++){
        
        listOpen7[i].addEventListener('click', (e) => {
            e.preventDefault();
            modal_container7.classList.add('show');
        },false);
    }
    
    close7.addEventListener('click', (e) => {
        e.preventDefault();
        modal_container7.classList.remove('show');
    },false); 
}


//INVOCACION DE FUNCIONES
eventoPopUpActualizacionDeDesafiosPersonalizados();
eventoPopUpEliminacionDeDesafiosPersonalizados();
