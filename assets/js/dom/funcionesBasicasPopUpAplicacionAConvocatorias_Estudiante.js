
//Archivo que define las operaciones basicas de los popup en la app Pandora (Abrir y cerrar)

//ASIGNACION DE EVENTOS A BOTONES PARA LA APLICACION DE CONVOCATORIAS DE TIPO COMITE
function eventoPopUpAplicacionAConvocatoriasComite(){

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

//ASIGNACION DE EVENTOS A BOTONES PARA LA APLICACION DE CONVOCATORIAS DE TIPO PRACTICAS
function eventoPopUpAplicacionAConvocatoriasPracticas(){

    let listOpen5 = document.getElementsByName('openModal5');
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

//INVOCACION DE FUNCIONES
eventoPopUpAplicacionAConvocatoriasComite();
eventoPopUpAplicacionAConvocatoriasPracticas();
