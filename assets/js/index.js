let btnMode = document.querySelector('.btn_mode');
let portfolio = document.querySelector('.portfolio');
let mstory = document.querySelector('.port_box.mstory');
let modal = document.querySelector('.modal_wrap');
let modalButton = document.querySelector('.modal_wrap button');
let modalDim = document.querySelector('.modal_wrap .dim');

btnMode.addEventListener('click', function() {
    if(document.querySelector('.content_wrap').classList.contains('dark')) {
        document.querySelector('.content_wrap').classList.remove('dark');
    } else {
        document.querySelector('.content_wrap').classList.add('dark');
    }
});

window.addEventListener('scroll', function(){
    let scrollTop = window.scrollY;
    let portTop = portfolio.getBoundingClientRect().top;
    if(scrollTop >= portTop) {
        portfolio.classList.add('ani');
    } else {
        portfolio.classList.remove('ani');
    }
})

mstory.addEventListener('click', function(){
    modal.style.display = 'block';
})
modalDim.addEventListener('click', function(){
    modal.style.display = 'none';
})
modalButton.addEventListener('click', function(){
    modal.style.display = 'none';
})