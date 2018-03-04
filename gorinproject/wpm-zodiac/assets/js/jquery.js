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
		});
                $('#taurus').click(function(){var data = {'action': 'my_action','myPOST': 'taurus'};
		jQuery.post(ajax_url, data, function(response){$('#sample1').html(response.slice(0, -1));});
					 $( "#det" ).removeClass( "hide-disp" );	
		});
                $('#gemini').click(function(){var data = {'action': 'my_action','myPOST':'gemini'};
		jQuery.post(ajax_url, data, function(response){$('#sample1').html(response.slice(0, -1));});
			 $( "#det" ).removeClass( "hide-disp" );	
		});
                $('#cancer').click(function(){var data = {'action': 'my_action','myPOST':'cancer'};
		jQuery.post(ajax_url, data, function(response){$('#sample1').html(response.slice(0, -1));});
		});
                $('#leo').click(function(){var data = {'action': 'my_action','myPOST':'leo'};
		jQuery.post(ajax_url, data, function(response){$('#sample1').html(response.slice(0, -1));});
			 $( "#det" ).removeClass( "hide-disp" );	
		});
$('#vigro').click(function(){var data = {'action': 'my_action','myPOST':'vigro'};
		jQuery.post(ajax_url, data, function(response){$('#sample1').html(response.slice(0, -1));});
			 $( "#det" ).removeClass( "hide-disp" );	
		});
$('#libra').click(function(){var data = {'action': 'my_action','myPOST':'libra'};
		jQuery.post(ajax_url, data, function(response){$('#sample1').html(response.slice(0, -1));});
			 $( "#det" ).removeClass( "hide-disp" );	
		});
$('#scorpio').click(function(){var data = {'action': 'my_action','myPOST':'scorpio'};
		jQuery.post(ajax_url, data, function(response){$('#sample1').html(response.slice(0, -1));});
			 $( "#det" ).removeClass( "hide-disp" );	
		});
$('#sagittairus').click(function(){var data = {'action': 'my_action','myPOST':'sagittairus'};
		jQuery.post(ajax_url, data, function(response){$('#sample1').html(response.slice(0, -1));});
			 $( "#det" ).removeClass( "hide-disp" );	
		});
$('#carpicorn').click(function(){var data = {'action': 'my_action','myPOST':'carpicon'};
		jQuery.post(ajax_url, data, function(response){$('#sample1').html(response.slice(0, -1));});
			 $( "#det" ).removeClass( "hide-disp" );	
		});
$('#aquarius').click(function(){var data = {'action': 'my_action','myPOST':'aquarius'};
		jQuery.post(ajax_url, data, function(response){$('#sample1').html(response.slice(0, -1));});
			 $( "#det" ).removeClass( "hide-disp" );	
		});
$('#pisces').click(function(){var data = {'action': 'my_action','myPOST':'pisces'};
		jQuery.post(ajax_url, data, function(response){$('#sample1').html(response.slice(0, -1));});
			 $( "#det" ).removeClass( "hide-disp" );	
		});
 $( "#det" ).click(function() {
            $( "#det_none" ).removeClass( "hide-disp" );
	    $( "#det" ).addClass( "hide-disp" );
        });
	});