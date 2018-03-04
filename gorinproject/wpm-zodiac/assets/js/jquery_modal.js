	jQuery(document).ready(function($)
	{
		if( res==undefined )
		{
			var res;
			var znak = '0';
			var response ='';
			var ajax_url = '/wp-admin/admin-ajax.php';
		}
				
                $('#aries').click(function(){
var data = {'action': 'my_action','myPOST': 'aries', 'znak':znak};
		jQuery.post(ajax_url, data, function(response){
		$('#sample1').html(response.slice(0, -1));
		});
			 $( "#det" ).removeClass( "hide-disp" );
$('#overlay').fadeIn(400, function(){ $('#modal_form') 	.css('display', 'block')    .animate({opacity: 1, top: '50%'}, 200); 	});	
		});
                $('#taurus').click(function(){var data = {'action': 'my_action','myPOST': 'taurus'};
		jQuery.post(ajax_url, data, function(response){$('#sample1').html(response.slice(0, -1));});
					 $( "#det" ).removeClass( "hide-disp" );	
$('#overlay').fadeIn(400, function(){ $('#modal_form') 	.css('display', 'block')    .animate({opacity: 1, top: '50%'}, 200); 	});
		});
                $('#gemini').click(function(){var data = {'action': 'my_action','myPOST':'gemini'};
		jQuery.post(ajax_url, data, function(response){$('#sample1').html(response.slice(0, -1));});
			 $( "#det" ).removeClass( "hide-disp" );	
$('#overlay').fadeIn(400, function(){ $('#modal_form') 	.css('display', 'block')    .animate({opacity: 1, top: '50%'}, 200); 	});
		});
                $('#cancer').click(function(){var data = {'action': 'my_action','myPOST':'cancer'};
		jQuery.post(ajax_url, data, function(response){$('#sample1').html(response.slice(0, -1));});
 $( "#det" ).removeClass( "hide-disp" );
$('#overlay').fadeIn(400, function(){ $('#modal_form') 	.css('display', 'block')    .animate({opacity: 1, top: '50%'}, 200); 	});
		});
                $('#leo').click(function(){var data = {'action': 'my_action','myPOST':'leo'};
		jQuery.post(ajax_url, data, function(response){$('#sample1').html(response.slice(0, -1));});
			 $( "#det" ).removeClass( "hide-disp" );	
$('#overlay').fadeIn(400, function(){ $('#modal_form') 	.css('display', 'block')    .animate({opacity: 1, top: '50%'}, 200); 	});
		});
$('#vigro').click(function(){var data = {'action': 'my_action','myPOST':'vigro'};
		jQuery.post(ajax_url, data, function(response){$('#sample1').html(response.slice(0, -1));});
			 $( "#det" ).removeClass( "hide-disp" );	
$('#overlay').fadeIn(400, function(){ $('#modal_form') 	.css('display', 'block')    .animate({opacity: 1, top: '50%'}, 200); 	});
		});
$('#libra').click(function(){var data = {'action': 'my_action','myPOST':'libra'};
		jQuery.post(ajax_url, data, function(response){$('#sample1').html(response.slice(0, -1));});
			 $( "#det" ).removeClass( "hide-disp" );	
$('#overlay').fadeIn(400, function(){ $('#modal_form') 	.css('display', 'block')    .animate({opacity: 1, top: '50%'}, 200); 	});
		});
$('#scorpio').click(function(){var data = {'action': 'my_action','myPOST':'scorpio'};
		jQuery.post(ajax_url, data, function(response){$('#sample1').html(response.slice(0, -1));});
			 $( "#det" ).removeClass( "hide-disp" );	
$('#overlay').fadeIn(400, function(){ $('#modal_form') 	.css('display', 'block')    .animate({opacity: 1, top: '50%'}, 200); 	});
		});
$('#sagittairus').click(function(){var data = {'action': 'my_action','myPOST':'sagittairus'};
		jQuery.post(ajax_url, data, function(response){$('#sample1').html(response.slice(0, -1));});
			 $( "#det" ).removeClass( "hide-disp" );	
$('#overlay').fadeIn(400, function(){ $('#modal_form') 	.css('display', 'block')    .animate({opacity: 1, top: '50%'}, 200); 	});
		});
$('#carpicorn').click(function(){var data = {'action': 'my_action','myPOST':'carpicon'};
		jQuery.post(ajax_url, data, function(response){$('#sample1').html(response.slice(0, -1));});
			 $( "#det" ).removeClass( "hide-disp" );	
$('#overlay').fadeIn(400, function(){ $('#modal_form') 	.css('display', 'block')    .animate({opacity: 1, top: '50%'}, 200); 	});
		});
$('#aquarius').click(function(){var data = {'action': 'my_action','myPOST':'aquarius'};
		jQuery.post(ajax_url, data, function(response){$('#sample1').html(response.slice(0, -1));});
			 $( "#det" ).removeClass( "hide-disp" );	
$('#overlay').fadeIn(400, function(){ $('#modal_form') 	.css('display', 'block')    .animate({opacity: 1, top: '50%'}, 200); 	});
		});
$('#pisces').click(function(){var data = {'action': 'my_action','myPOST':'pisces'};
		jQuery.post(ajax_url, data, function(response){$('#sample1').html(response.slice(0, -1));});
			 $( "#det" ).removeClass( "hide-disp" );	
$('#overlay').fadeIn(400, function(){ $('#modal_form') 	.css('display', 'block')    .animate({opacity: 1, top: '50%'}, 200); 	});
		});
 $( "#det" ).click(function() {
            $( "#det_none" ).removeClass( "hide-disp" );
	    $( "#det" ).addClass( "hide-disp" );
        });

	$('#modal_close, #overlay').click( function(){ 
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,  
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400); 
				}
			);
	});
	});