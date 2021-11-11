//Archivo que define las operaciones basicas de los popup en la app Pandora (Abrir y cerrar)

//ASIGNACION DE EVENTOS A BOTONES DE DETALLES PARA LA INFORMACIÓN DE DESAFIOS O EVENTOS
function eventoPopUpDetalleDeDesafioOEvento(){

    let listOpen1 = document.getElementsByName('openModal');
    var modal_container1 = document.getElementById('modal_container1');
    var close1 = document.getElementById('btn_cancelar1');

    //Recorremos el arreglo de elementos con el name openModal3
    for(var i=0; i<listOpen1.length; i++){
        
        listOpen1[i].addEventListener('click', (e) => {
            e.preventDefault();
            modal_container1.classList.add('show');
        },false);
    }
    
    close1.addEventListener('click', (e) => {
        e.preventDefault();
        modal_container1.classList.remove('show');
    },false); 
}

//ASIGNACION DE EVENTOS A BOTONES DE DETALLES PARA LA INFORMACIÓN DE LOS TRABAJOS DESTACADOS
function eventoPopUpDetalleTrabajo(){

    let listOpen2 = document.getElementsByName('openModal2');
    var modal_container2 = document.getElementById('modal_container2');
    var close2 = document.getElementById('btn_cancelar2');

    //Recorremos el arreglo de elementos con el name openModal3
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

//ASIGNACION DE EVENTO A BOTON "EVALUAR" PARA LA EVALUACION DE LAS COMPETENCIAS ESPECÍFICAS
const listOpen3 = document.getElementsByName('openModal3');
const modal_container3 = document.getElementById('modal_container3');
const close3 = document.getElementById('btn_cancelar3');

//Recorremos el arreglo de elementos con el name openModal2
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


//ASIGNACION DE EVENTO A BOTON "DESACTIVAR ACTIVIDAD" PARA LA DESACTIVACION DE LOS DESAFIOS Y EVENTOS
function eventoPopUpDesactivarActividad(){

    let listOpen4 = document.getElementsByName('openModal4');
    var modal_container4 = document.getElementById('modal_container4');
    var close4 = document.getElementById('btn_cancelar4');

    //Recorremos el arreglo de elementos con el name openModal3
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

//ASIGNACION DE EVENTO A BOTON "ACTIVAR ACTIVIDAD" PARA LA ACTIVACION DE LOS DESAFIOS Y EVENTOS
function eventoPopUpActivarActividad(){

    let listOpen5 = document.getElementsByName('openModal5');
    var modal_container5 = document.getElementById('modal_container5');
    var close5 = document.getElementById('btn_cancelar5');

    //Recorremos el arreglo de elementos con el name openModal3
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
eventoPopUpDetalleDeDesafioOEvento();
eventoPopUpDetalleTrabajo();
eventoPopUpDesactivarActividad();
eventoPopUpActivarActividad();