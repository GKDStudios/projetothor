$ ('#topo').click(function scrollAutomatico(e){
	    e.preventDefault();
	    var id = $(this).attr('href');
	        targetOffset = $(id).offset().top;
    	$('html, body').animate({
        scrollTop: targetOffset 
    	}, 1000);
});

//Scroll automatico 2.

$('.voltaTopo').click(function scrollAutomatico2(e){
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, 1000)
});

//Função para abrir a lista de afazeres e feitos.

$('.verTabela').click(function verTarefas(e){
	e.preventDefault();
	var element = document.createElement('li');
	var pega1 = window.localStorage.getItem('taskList');
	var pega2 = window.localStorage.getItem('taskState');
	var pega3 = window.localStorage.getItem('taskHora');
	var pega4 = window.localStorage.getItem('taskFeita');
	element.innerHTML += pega1 +' | ';
	element.innerHTML += pega2 +' | ';
	element.innerHTML += pega3 +' | ';
	element.innerHTML += pega4;
	listWrapper.appendChild(element);
});
