$(document).ready(function(){
	var $input_search_id = $('#input-search-id');
	var $input_button = $('#input-button');
	var $input_search = $('#input-search');
	var $logo = $('#logo');
	var $circle_button = $('#circle-button');
	var $title = $('#title'); 
	var $search_result_div = $('#search-results');
	
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
	
	function establishment_div_maker(){
		for(var i=0; i<establishments_data.length; i++){
			$search_result_div.append('<div class="col-xs-5 lot outline padding-right padding-left mg-col" data-type=' + establishments_data[i].type + ' data-district=' + establishments_data[i].district + '>' + 
	  				'<div class="background-image">' + 
	  				'<div class="dark-filter">' + 
	  					'<h4 class="white restaurant-name">' + establishments_data[i].name + '</h4>' + 
	  					'<p class="white slogan">' + establishments_data[i].slogan + '</p>' +
							'<span class="icon-sad icons">' + '<p class="number">' + establishments_data[i].sad + '</p></span><span class="icon-smile icons"><p class="number">' + establishments_data[i].happy + '</p></span><span class="icon-wink icons"><p class="number">' + establishments_data[i].veryhappy + '</p></span><span class="icon-paperplane"></span>' +
	  				'</div>' +
	  				'</div>' +
	  			'</div>');
		}
	}
	
	function random_search() { 
      if ($(this).text().indexOf($input_search.val().toLowerCase()) !== -1) {
        $(this).show();
      }
    }
	
	function type_search() { 
      if ($(this).data('type').indexOf($input_search.val().toLowerCase()) !== -1) {
        $(this).show();
      }
    }
	
	function district_search() { 
      if ($(this).data('district').indexOf($input_search.val().toLowerCase()) !== -1) {
        $(this).show();
      }
    }
	
	function general_filter() {
	  var $lot = $('.lot');
    $lot.hide();
    $lot.each(random_search);
    $lot.each(type_search);
    $lot.each(district_search);
  }

	$input_search.focus(inputStyle);
	$input_search.blur(inputStyleReverse);
	$circle_button.click(search);
	$logo.click(hideInput);
	establishment_div_maker();
	$input_search.keyup(general_filter);
})