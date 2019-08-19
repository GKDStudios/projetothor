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
	var pega = JSON.parse(window.localStorage.getItem('taskList'));
	 element.innerHTML += pega;
	listWrapper.appendChild(element);
	console.log(pega);
});
