$(document).ready(function($) {
	$('.toggleButton').click(function(){
		$('#topPanel').slideToggle();
		return false;
	});
	$('#close').click(function(){
		$('#topPanel').slideToggle();
		return false;
	});
});