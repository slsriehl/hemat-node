$('#antibody').on('change', function(){
		var sel = $(this).val();
		var diag = dxLines["dxLine"+sel];
		var comment = comLines["comLine"+sel];
		$('#outPut-1').val(diag+'\n\n'+comment);
});
