$(function(){

	$('#form-familias').hide();
	$('#form-individuais').hide();
	$('#form-grupos').hide();
	$('#btn-cancela').hide();
	$('#btn-confirma').hide();



	$('#btn-familias').click(function(e){
		e.preventDefault();
		$('#form-familias').show();
		$('#form-individuais').hide();
		$('#form-grupos').hide();
		$('#btn-familias').hide();
		$('#btn-individuais').hide();
		$('#btn-grupos').hide();
	});
		e.preventDefault();
		$('#form-familias').hide();
		$('#form-individuais').show();
		$('#form-grupos').hide();
		$('#btn-familias').hide();
		$('#btn-individuais').hide();
		$('#btn-grupos').hide();
	});
	$('#btn-grupos').click(function(e){
		e.preventDefault();
		$('#form-familias').hide();
		$('#form-individuais').hide();
		$('#form-grupos').show();
		$('#btn-familias').hide();
		$('#btn-individuais').hide();
		$('#btn-grupos').hide();
	});
	$('#btn-cancela').click(function(e){
		e.preventDefault();
		$('#form-familias').hide();
		$('#form-individuais').hide();
		$('#form-grupos').hide();
		$('#btn-familias').show();
		$('#btn-individuais').show();
		$('#btn-grupos').show();
	});
	$('#btn-confirma').click(function(e){
		e.preventDefault();
		$('#form-familias').hide();
		$('#form-individuais').hide();
		$('#form-grupos').hide();
		$('#btn-familias').show();
		$('#btn-individuais').show();
		$('#btn-grupos').show();
	});

});