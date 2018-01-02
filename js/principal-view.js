$(document).ready(function(){
	var $input_search_id = $('#input-search-id');
	var $input_button = $('#input-button');
	var $input_search = $('#input-search');
	var $logo = $('#logo');
	var $circle_button = $('#circle-button');
	var $title = $('#title'); 
	var $search_result_div = $('#search-results');
	var $menu = $('.menu');
	var $info_body = $('.info_body');
	var $map2 = $('#map2');
	var $info_menu_body = $('.info_menu_body');
	var $menu_dishes = $('#menu_dishes');
	var $close = $('.close');
	var $ad_cross = $('.ad-cross');
	var $img_ad = $('.img_ad');
	var $calling_btn = $('.calling_btn');
	var $menu_image = $('.menu-image')
	
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
			$search_result_div.append('<div class="col-xs-5 lot   outline padding-right padding-left mg-col" data-type=' + establishments_data[i].type + ' data-district=' + establishments_data[i].district + ' data-toggle="modal" data-target="#myModal" >' + 
	  				'<div id="' + i + '" class="modal_set background-image">' + 
	  				'<div class="dark-filter">' + 
	  					'<h4 class="white restaurant-name">' + establishments_data[i].name + '</h4>' + 
	  					'<p class="white slogan">' + establishments_data[i].slogan + '</p>' +
							'<span class="icon-sad icons">' + '<p class="number">' + establishments_data[i].sad + '</p></span><span class="icon-smile icons"><p class="number">' + establishments_data[i].happy + '</p></span><span class="icon-wink icons"><p class="number">' + establishments_data[i].veryhappy + '</p></span><span class="icon-paperplane"></span>' +
	  				'</div>' +
	  				'</div>' +
	  			'</div>');
			$('#' + i ).css('background-image', establishments_data[i].image );
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
	
	function show_info_modal() {
		for(var i=0;i<establishments_data.length;i++){
			if($(this).prop('id') == i){
				$('.establishment_name').text(establishments_data[i].name);
				$('.establishment_address').text(establishments_data[i].address);
				$('.schedule_info').text(establishments_data[i].schedule);
				$('.web_info').text(establishments_data[i].web);
				$('.number_info').text(establishments_data[i].delivery);
				$('.price_info').text(establishments_data[i].price);
			}
		}
	}
	
	function return_state_modal(){
		$menu_dishes.empty();
		$menu_image.addClass('hide');
	}
	
	function dishes(){
		if($info_menu_body.hasClass('hide')){
			$menu_dishes.empty();
		} else {
			$img_ad.addClass('show');
			$img_ad.removeClass('hide');
			for(var i=0; i<establishments_data.length;i++){
			  if($('.establishment_name').text() === establishments_data[i].name){
					$menu_image.attr('src', establishments_data[i].modal_image);
					$menu_image.removeClass('hide');
					for ( var j = 0; j< establishments_data[i].menu.length;j++){
						 $menu_dishes.append( 
             '<li class="dish"><span class="icon-circle"></span>' + establishments_data[i].menu[j].dish + '<span class="dish_price orange">' + establishments_data[i].menu[j].money + '</span>' + '</li>');
					}
			  }
		  }
		}
	}
	
	function showMenu() {
		$info_body.toggle('.hide');
		$map2.toggle('.hide');
		$info_menu_body.toggleClass('hide');
		$menu.toggleClass('active_info');
	}
	
	function hideAd(){
		$img_ad.removeClass('show');
		$img_ad.addClass('hide');
	}
	
	function calling_establishment() {
		localStorage.name=$('.establishment_name').text();
		localStorage.phone=$('.number_info').text();
		window.location.replace("../views/calling.html");
	}
	
	$input_search.focus(inputStyle);
	$input_search.blur(inputStyleReverse);
	$circle_button.click(search);
	$logo.click(hideInput);
	establishment_div_maker();
	$input_search.keyup(general_filter);
	$menu.on('click',showMenu);
	$menu.on('click',dishes);
	$close.on('click',return_state_modal);
	$ad_cross.click(hideAd);
	$calling_btn.click(calling_establishment);
	console.log(establishments_data);
	$('.modal_set').click(show_info_modal);
})