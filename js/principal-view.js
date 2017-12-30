$(document).ready(function(){
	var $input_search_id = $('#input-search-id');
	var $input_button = $('#input-button');
	var $input_search = $('#input-search');
	
	function inputStyle() {
		$input_button.addClass('inputChange');
		$input_search_id.addClass('inputChange');
	}
	function inputStyleReverse() {
		$input_button.removeClass('inputChange');
		$input_search_id.removeClass('inputChange');
	}
	
	$input_search.focus(inputStyle);
	$input_search.blur(inputStyleReverse);
})