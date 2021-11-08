
//Archivo que define las operaciones basicas de los popup en la app Pandora (Abrir y cerrar)

//EVENTOS POPUP SELECCIÓN DE TIPO DE COMPETENCIA A CREAR
const open = document.getElementById('openModal');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('btn_cancelar');


open.addEventListener('click', (e) => {
    e.preventDefault();
    modal_container.classList.add('show');
},false);


close.addEventListener('click', (e) => {
    e.preventDefault();
    modal_container.classList.remove('show');
},false);

//EVENTOS POPUP REGISTRO DE COMPETENCIA GENERAL
const open1 = document.getElementById('openModal1');
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


//ASIGNACION DE EVENTOS A BOTONES ELIMINAR PARA LA ELIMINACIÓN DE COMPETENCIAS GENERALES
function eventoPopUpEliminacionDeCompetenciaGeneral(){

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


//ASIGNACION DE EVENTOS A BOTONES EDITAR PARA LA ACTUALIZACIÓN DE COMPETENCIAS GENERALES
function eventoPopUpActualizacionDeCompetenciaGeneral(){

    let listOpen5 = document.getElementsByName('openModa5');
    var modal_container5 = document.getElementById('modal_container5');
    var close5 = document.getElementById('btn_cancelar5');

    //Recorremos el arreglo de elementos con el name openModal5
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

















//EVENTOS POPUP REGISTRO DE COMPETENCIA ESPECIFICA-----------------------------------------------------------------------------------------------------------------------
const open2 = document.getElementById('openModal2');
const modal_container2 = document.getElementById('modal_container2');
const close2 = document.getElementById('btn_cancelar2');


open2.addEventListener('click', (e) => {
    e.preventDefault();
    modal_container2.classList.add('show');
    modal_container1.classList.remove('show');
},false);


close2.addEventListener('click', (e) => {
    e.preventDefault();
    modal_container2.classList.remove('show');
},false);


//ASIGNACION DE EVENTOS A BOTONES ELIMINAR PARA LA ELIMINACIÓN DE COMPETENCIAS ESPECIFICAS-----------------------------------------------------------------------------------------------------------------------
function eventoPopUpEliminacionDeCompetenciaEspecifica(){

    let listOpen4 = document.getElementsByName('openModal4');
    var modal_container4 = document.getElementById('modal_container4');
    var close4 = document.getElementById('btn_cancelar4');
   

    //Recorremos el arreglo de elementos con el name openModal4
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


//ASIGNACION DE EVENTOS A BOTONES EDITAR PARA LA ACTUALIZACIÓN DE COMPETENCIAS ESPECÍFICAS
function eventoPopUpActualizacionDeCompetenciaEspecifica(){

    let listOpen6 = document.getElementsByName('openModal6');
    var modal_container6 = document.getElementById('modal_container6');
    var close6 = document.getElementById('btn_cancelar6');

    //Recorremos el arreglo de elementos con el name openModal6
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


//INVOCACION DE FUNCIONES COMPETENCIAS GENERALES-----------------------------------------------------------------------------------------------------------------------
eventoPopUpEliminacionDeCompetenciaGeneral();
eventoPopUpActualizacionDeCompetenciaGeneral()


//INVOCACION DE FUNCIONES COMPETENCIAS ESPECÍFICAS-----------------------------------------------------------------------------------------------------------------------
eventoPopUpEliminacionDeCompetenciaEspecifica();
eventoPopUpActualizacionDeCompetenciaEspecifica();