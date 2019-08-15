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
	var pega =	JSON.parse(localStorage.getItem('taskList'));
});