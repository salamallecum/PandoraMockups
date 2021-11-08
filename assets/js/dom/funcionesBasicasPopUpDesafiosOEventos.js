

//EVENTOS POPUP APLICACION DE UN TRABAJO DESTACADO A UN DESAFIO O EVENTO
const open3 = document.getElementById('openModa3');
const modal_container3 = document.getElementById('modal_container3');
const close3 = document.getElementById('btn_cancelar3');


open3.addEventListener('click', (e) => {
    e.preventDefault();
    modal_container3.classList.add('show');
},false);


close3.addEventListener('click', (e) => {
    e.preventDefault();
    modal_container3.classList.remove('show');
},false);
