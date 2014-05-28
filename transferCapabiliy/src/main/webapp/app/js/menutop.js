$( document ).ready(function() {
$('#mymenu').prepend('<div id="my-button">Menu</div>');
	$('#mymenu #my-button').on('click', function(){
		var menu = $(this).next('ul');
		if (menu.hasClass('myopen')) {
			menu.removeClass('myopen');
		}
		else {
			menu.addClass('myopen');
		}
	});
});