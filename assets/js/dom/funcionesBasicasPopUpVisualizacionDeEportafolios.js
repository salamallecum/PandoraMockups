//Archivo que define las operaciones basicas de los popup en la app Pandora (Abrir y cerrar y dibujarGrafica)
//import "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js";


//Va para laplantilla de muestreo del eportafolio
//FUNCION QUE DIBUJA EL GRAFICO DE PERFILAMIENTO PANDORA EN EL EPORTAFOLIO
/*
function dibujarGraficoPerfilamientoPandora(){

    var ctx = document.getElementById("grafPerfPandora");
    var myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ["Noble lider", "Virtuoso tecnológico", "Explorador", "Maestro de los procesos"],
            datasets: [{
                label: 'Estudiante',
                data: [25, 80, 40, 70],
                backgroundColor: 'rgba(87,35,100, .6)',
                borderColor: [
                    'rgba(87,35,100, 1)',
                ],
                borderWidth: 3
            }]
        },
    });
}
*/

//ASIGNACION DE EVENTOS A BOTONES COMPARTIR EL EPORTAFOLIO DEL ESTUDIANTE CON EL EMPLEADOR
function eventoPopUpCompartirEportafolio(){

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




//INVOCACION DE FUNCIONES
eventoPopUpCompartirEportafolio();
//dibujarGraficoPerfilamientoPandora();
