$ ('#topo').click(function scrollAutomatico(e){
	    e.preventDefault();
	    var id = $(this).attr('href');
	        targetOffset = $(id).offset().top;
    	$('html, body').animate({
        scrollTop: targetOffset 
    	}, 1000);
});
$('.voltaTopo').click(function scrollAutomatico2(e){
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, 1000)
});
$('.verTabela').click(function verTarefas(e){
	e.preventDefault();
	var element = document.createElement('li');
	var pega;
	element.innerHTML += pega = JSON.parse(localStorage.getItem('taskList'));
	listWrapper.appendChild(element);
});
