loadMenu();
loadRubrique();

function toggleShowForm(id){
    document.querySelector(id).classList.toggle('show-create-form');
}   

function loadMenu(){
    const menus = document.querySelectorAll('.menu');
    menus.forEach(m => {
        m.querySelector('.title').addEventListener('click', (e) => {
            m.querySelector('.rubriques').classList.toggle('show-content');
            m.querySelector('.hidden-form-ctn').classList.toggle('show-content');
        })
    })
}

function loadRubrique(){
    const menus = document.querySelectorAll('.rubrique');
    menus.forEach(m => {
        m.querySelector('.title').addEventListener('click', (e) => {
            m.querySelector('.articles').classList.toggle('show-content');
            m.querySelector('.hidden-form-ctn').classList.toggle('show-content');
        })
    })
}
