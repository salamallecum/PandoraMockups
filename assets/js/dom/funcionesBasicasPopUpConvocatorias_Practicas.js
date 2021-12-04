
//Archivo que define las operaciones basicas de los popup en la app Pandora (Abrir y cerrar)

//ROL COORDINACION DE PRACTICAS PROFESIONALES-----------------------------------------------------------------------------------------------------------

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
    },false); 
}

//INVOCACION DE FUNCIONES
eventoPopUpCompartirEportafolio();
