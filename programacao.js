$(function(){

	$('#form-familias').hide();
	$('#form-individuais').hide();
	$('#form-grupos').hide();


	$('#btn-familias').click(function(e){
		e.preventDefault();
		$('#form-familias').show();
		$('#form-individuais').hide();
		$('#form-grupos').hide();
		$('#btn-individuais').hide();
		$('#btn-grupos').hide();
	});
	$('#btn-individuais').click(function(e){
		e.preventDefault();
		$('#form-familias').hide();
		$('#form-individuais').show();
		$('#form-grupos').hide();
	});
	$('#btn-grupos').click(function(e){
		e.preventDefault();
		$('#form-familias').hide();
		$('#form-individuais').hide();
		$('#form-grupos').show();
	});

});