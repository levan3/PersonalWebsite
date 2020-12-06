function projects(){
	$('.GOL').css('height', $('.GOL').width());
	$('.GOL h3').css('padding-top', ($('.GOL').height() - $('.GOL h3').height() - $('.GOL .row').outerHeight())/2);
	$('.Testing').css('height', $('.Testing').width());
	$('.Testing h3').css('padding-top', ($('.Testing').height() - $('.Testing h3').height() - $('.Testing .row').outerHeight())/2);
	$('.stockmarket').css('height', $('.stockmarket').width());
	$('.stockmarket h3').css('padding-top', ($('.stockmarket').height() - $('.stockmarket h3').height() - $('.stockmarket .row').outerHeight())/2);

	$(window).resize(function(){
		setTimeout(projects, 500);
	});
}