
//Archivo que define las operaciones basicas de los popup en la app Pandora (Abrir y cerrar)

//ASIGNACION DE EVENTOS POPUP APLICACION DE UN TRABAJO DESTACADO A UN DESAFIO O EVENTO
function eventoPopUpAplicacionAUnDesafioOEvento(){

    let listOpen3 = document.getElementsByName('openModal3');
    var modal_container3 = document.getElementById('modal_container3');
    var close3 = document.getElementById('btn_cancelar3');

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
}

//INVOCACION DE FUNCIONES
eventoPopUpAplicacionAUnDesafioOEvento();
