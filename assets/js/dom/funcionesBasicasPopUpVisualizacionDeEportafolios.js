//Archivo que define las operaciones basicas de los popup en la app Pandora (Abrir y cerrar y dibujarGrafica)
import "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js";


//ASIGNACION DE EVENTOS A BOTONES DE DETALLES PARA LA INFORMACIÓN DE DESAFIOS O EVENTOS
function eventoPopUpDetalleDeDesafioOEvento(){

    let listOpen1 = document.getElementsByName('openModal');
    var modal_container1 = document.getElementById('modal_container1');
    var close1 = document.getElementById('btn_cancelar1');

    //Recorremos el arreglo de elementos con el name openModal1
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

//FUNCION QUE DIBUJA EL GRAFICO DE PERFILAMIENTO PANDORA EN EL EPORTAFOLIO
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




//INVOCACION DE FUNCIONES
eventoPopUpDetalleDeDesafioOEvento();
dibujarGraficoPerfilamientoPandora();
