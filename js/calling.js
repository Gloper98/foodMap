$(document).ready(function() {
	var $name_calling = $('.name_calling');
	var $number_calling = $('.number_calling');
	var $name_calling_ls = localStorage.getItem('name');
	var $number_calling_ls = localStorage.getItem('phone');
	var $audio = $('#audio');
	$name_calling.text($name_calling_ls);
	$number_calling.text($number_calling_ls);
	$('title').text('Calling'+ ' ' + $name_calling.text());
	$audio.trigger('play');
	setTimeout(function() {
		window.location.href='../index.html';
	}, 120000);
})