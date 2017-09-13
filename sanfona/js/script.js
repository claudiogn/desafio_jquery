$(function(){
	$('.titulo').hover(function(){
		$(this).css('background-color','#9A59B7')
				.css('cursor', 'pointer');
	}, function(){	

		$(this).css('background-color','#8E42AE');
	});

	$('.titulo').click(function(){
		var estado = $(this).parent().find('.conteudo');
		if (!estado.hasClass('show')) {
			$('.caixa').find('.show').slideUp('slow', function(){
				$(this).addClass('hide').removeClass('show');
			});
			estado.slideDown('fast', function(){
				$(this).addClass('show').removeClass('hide');
			});
		}
	});
});