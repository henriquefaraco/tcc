$(function(){

	$('#btn-familias').click(function(){
		$('#form-familias').show();
		$('#form-individuais').hide();
		$('#form-grupos').hide();
	});
	$('#btn-individuais').click(function(){
		$('#form-familias').hide();
		$('#form-individuais').show();
		$('#form-grupos').hide();
	});
	$('#btn-grupos').click(function(){
		$('#form-familias').hide();
		$('#form-individuais').hide();
		$('#form-grupos').show();
	});

});