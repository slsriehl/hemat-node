$('#writeReport').on('click', function(){
		var sel = $('#antibody').val();
		var diag = dxLines["dxLine"+sel];
		var comment = comLines["comLine"+sel];
		$('#outPut-1').val(diag+'\n\n'+comment);

		dataObj.singleSection = $('#outPut-1').val();
		makeCreatePdfBtn();
});
