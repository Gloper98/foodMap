$(document).ready(function(){
	var $input_search_id = $('#input-search-id');
	var $input_button = $('#input-button');
	var $input_search = $('#input-search');
	var $logo = $('#logo');
	var $circle_button = $('#circle-button');
	var $title = $('#title'); 
	
	function inputStyle() {
		$input_button.addClass('inputChange');
		$input_search_id.addClass('inputChange');
	}
	function inputStyleReverse() {
		$input_button.removeClass('inputChange');
		$input_search_id.removeClass('inputChange');
	}
	
	function search(){
		$circle_button.removeClass('show');
		$circle_button.addClass('hide');
		$title.removeClass('show'); 
		$title.addClass('hide');
		$logo.removeClass('negative-margin');
		$input_search_id.addClass('show');
		$input_search_id.removeClass('hide');
	}
	
	function hideInput(){
		$input_search_id.removeClass('show');
		$input_search_id.addClass('hide');
		$circle_button.removeClass('hide');
		$circle_button.addClass('show');
		$title.removeClass('hide'); 
		$title.addClass('remove');
		$logo.addClass('negative-margin');
	}
	
	$input_search.focus(inputStyle);
	$input_search.blur(inputStyleReverse);
	$circle_button.click(search);
	$logo.click(hideInput);
})