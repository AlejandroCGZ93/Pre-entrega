let menu = document.querySelector('.menu')

function juego(){
    var imagenes = document.querySelectorAll('#imagenes img');
     drop1 = document.getElementById('caja1');  
     drop2 = document.getElementById('caja2'); 
     drop3 = document.getElementById('caja3'); 

    for(var i=0; i<imagenes.length; i++){
    imagenes[i].addEventListener('dragstart', mover, false);
    imagenes[i].addEventListener('dragend', soltar, false);
    }

    drop1.addEventListener('dragenter', function(evento){
    evento.preventDefault(); }, false);
    drop1.addEventListener('dragover', function(evento){
    evento.preventDefault(); }, false);
    drop1.addEventListener('drop', suelto1, false);


    drop2.addEventListener('dragenter', function(evento){
        evento.preventDefault(); }, false);
    drop2.addEventListener('dragover', function(evento){
    evento.preventDefault(); }, false);
    drop2.addEventListener('drop', suelto2, false);


    drop3.addEventListener('dragenter', function(evento){
        evento.preventDefault(); }, false);
    drop3.addEventListener('dragover', function(evento){
    evento.preventDefault(); }, false);
    drop3.addEventListener('drop', suelto3, false);

}
function mover(evento){
    elemento=evento.target;
    evento.dataTransfer.setData('Text', elemento.getAttribute('id'));
}
function soltar(evento){
    elemento=evento.target;
    elemento.style.visibility='hidden';
} 

function suelto1(evento){
    evento.preventDefault();
    var id=evento.dataTransfer.getData('Text');
    if(id!="imagen4"){
        var src=document.getElementById(id).src;
    drop1.innerHTML='<img src="'+src+'" height="300px" width="300px">';
    }else{
    drop1.innerHTML='la imagen no es admitida';
    }
}

function suelto2(evento){
    evento.preventDefault();
    var id=evento.dataTransfer.getData('Text');
    if(id!="imagen4"){
        var src=document.getElementById(id).src;
    drop2.innerHTML='<img src="'+src+'"height="300px" width="300px">';
    }else{
    drop2.innerHTML='la imagen no es admitida';
    }
}
function suelto3(evento){
    evento.preventDefault();
    var id=evento.dataTransfer.getData('Text');
    if(id!="imagen4"){
        var src=document.getElementById(id).src;
    drop3.innerHTML='<img src="'+src+'"height="300px" width="300px">';
    }else{
    drop3.innerHTML='la imagen no es admitida';
    }
}

function reinicio() {
    window.location.reload();
}
juego()