 $('ul.nav li.dropdown').hover(function() {
	$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
				$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
				}
);

$('#top-sign-up').on('click', changeToSignUpContent);
$('#modal-close-btn').on('click', resetBackToSignIn);
$('#close-button').on('click', resetBackToSignIn);
$('#modal-sign-up').on('click', changeToSignUpContent);


function changeToSignUpContent()
{
	$('#exampleModalLabel').html('Sign Up');
	$('#sign-in-btn').html('Sign Up');
	$('.modal-body').html($('#sign-up-content').html());	
}

function resetBackToSignIn(){
	$('#exampleModalLabel').html('Sign In');
	$('#sign-in-btn').html('Sign In');
	$('.modal-body').html($('#sign-in-content').html());
	$('#modal-sign-up').on('click', changeToSignUpContent);
}