$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/




//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/

    $('#box1').change(function () {
        var sel = $('#box1').val();
        if (sel == 'Other:') {
            $('input[id=box1_2]').show();
        } else if (sel != 'Other:') {
            $('input[id=box1_2]').hide();
        }
    });


    $('#box7').change(function () {
        if ($('#box7').is(':checked')) {
            $('.SubRadio').attr('disabled', 'disabled');
        }
        else if (!$('#box7').is(':checked')) {
            $('.SubRadio').prop('disabled', false);
        }
    });

    $('input[id=box7_2]').change(function () {
        if ( $(this).is(':checked') ) {
            $('#box7_4').show();
        } else {
            $('#box7_4').hide();
        }
    });

    $('input[id=box7_3]').change(function () {
        if ( $(this).is(':checked') ) {
            $('#box7_5').show();
        } else {
            $('#box7_5').hide();
        }
    });

    $('#box8').change(function () {
        var sel = $('#box8').val();
        if (sel == 'Multifocal') {
            $('input[id=box8_2]').show();
        } else if (sel != 'Multifocal:') {
            $('input[id=box8_2]').hide();
        }
    });

    $('#box13').change(function () {
        var sel = $('#box13').val();
        if (sel == 'Other:') {
            $('input[id=box13_2]').show();
        } else if (sel != 'Other:') {
            $('input[id=box13_2]').hide();
        }
    });

    $("#box15").change(function(){
        if ($(this).is(":checked")){
            $(".lnchk").show();}
        else{
            $(".lnchk").hide();}
    });
    $('#box16').change(function () {
        var sel = $('#box16').val();
        if (sel == 'Distant metastasis present') {
            $('input[id=box16_2]').show();
        } else if (sel != 'Distant metastasis present') {
            $('input[id=box16_2]').hide();
        }
    });

    $('#box17').change(function () {
        var sel = $('#box17').val();
        if (sel == 'Stage I') {
            $('.stage1').show();
            $('.stage2').hide();
            $('.stage3').hide();
            $('.stage4').hide();
            $('.stage5').hide();
            $('#bilat').hide();
        }
        if (sel == 'Stage II') {
            $('.stage1').hide();
            $('.stage2').show();
            $('.stage3').hide();
            $('.stage4').hide();
            $('.stage5').hide();
            $('#bilat').hide();
        }
        if (sel == 'Stage III') {
            $('.stage1').hide();
            $('.stage2').hide();
            $('.stage3').show();
            $('.stage4').hide();
            $('.stage5').hide();
            $('#bilat').hide();
        }
        if (sel == 'Stage IV') {
            $('.stage1').hide();
            $('.stage2').hide();
            $('.stage3').hide();
            $('.stage4').show();
            $('.stage5').hide();
            $('#bilat').hide();
        }
        if (sel == 'Stage V') {
            $('.stage1').hide();
            $('.stage2').hide();
            $('.stage3').hide();
            $('.stage4').hide();
            $('.stage5').show();
            $('#bilat').show();
        }
        else if (sel == 'Not applicable' || sel == 'Cannot be assessed') {
            $('.stage1').hide();
            $('.stage2').hide();
            $('.stage3').hide();
            $('.stage4').hide();
            $('.stage5').hide();
            $('#bilat').hide();
        }
    });
    $('#box18').change(function () {
        var sel = $('#box18').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box18_2').show();
        } else {
            $('#box18_2').hide();
        }
    });

    $('#box20').change(function(){
        var sela = $('#box20').val();
        var selb = $('#box20').val();
        if ($.inArray('Margins uninvolved by tumor', sela) >-1) {
            $('#box20_1').show();
            $('#box20_2').show();
        }
        else {
            $('#box20_1').hide();
            $('#box20_2').hide();
        }
        if ($.inArray('Other margin involved by tumor', selb) >-1) {
            $('#box20_3').show();}
        else {
            $('#box20_3').hide();
        }
    });


//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('#writeReport').on('click', function () {

        var captext = "CAP Pediatric Renal Tumor Cancer Summary\n\n";
// .join("\n- ") use this for var with multiple select options
// val().replace(/;/g,"\n- ") use this for var that needs option to be split in new line
// Checklist variables
        var box_1 = $("#box1").val();
        if (box_1 == 'Other:'){
            box_1_2 = $("#box1_2").val();
            captext += "Procedure:\n- "+box_1_2+"\n";}
        else {captext += "Procedure:\n- "+box_1+"\n";}

        var box_2 = $("#box2").val();
        captext += "\nSpecimen Size:\n- "+box_2.replace(/cm/,'')+"cm\n";
        var box_3 = $("#box3").val();
        captext += "\nSpecimen Weight:\n- "+box_3.replace(/gm/,'')+"gm\n";
        var box_4 = $("#box4").val();
        captext += "\nSpecimen Laterality:\n- "+box_4+"\n";


        var box_6 = $("#box6").val();
        captext += "\nTumor Size:\n- "+box_6+"\n";

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        var box_7_3 = $("#box7_3").val();
        if($('#box7_2').is(':checked')){
            var box_7_4 = $("#box7_4").val();
            captext += "\nMultiple tumors are present:\n- Greatest dimension of 2nd tumor: "+box_7_4+"cm\n";}
        if($('#box7_3').is(':checked')){
            var box_7_4 = $("#box7_4").val();
            var box_7_5 = $("#box7_5").val();
            captext += "- Greatest dimension of 3nd tumor: "+box_7_5+"cm\n";}
        else {captext += "\nMultiple tumor foci not present \n";}

        var box_8 = $("#box8").val();
        if (box_8 == 'Multifocal'){
            box_8_2 = $("#box8_2").val();
            captext += "\nTumor Focality:\n- "+box_8+" : Total # of tumors = "+box_8_2+"\n";}
        else {captext += "\nTumor Focality:\n- "+box_8+"\n";}

        var box_9 = $("#box9").val();
        var box_10 = $("#box10").val();
        var box_11 = $("#box11").val();
        var box_11_5 = $("#box11_5").val();
        var box_12 = $("#box12").val();
        captext += "\nMacroscopic Extent of Tumor:\n-[Gerota's Fascia]: "+box_9+"\n\n-[Renal Sinus]: "+box_10+"\n\n-[Renal Vein]: "+box_11+"\n\n-[Renal Capsule]: "+box_11_5+"\n\n-[Adjacent Organ Involvement]: "+box_12+"\n";

        var box_13 = $("#box13").val();
        if (box_13 == 'Other:'){
            box_13_2 = $("#box13_2").val();
            captext += "\nHistologic Type:\n- "+box_13_2+"\n";}
        else {captext += "\nHistologic Type(s):\n- "+box_13.join("\n- ")+"\n";}

        var box_14 = $("#box14").val();
        captext += "\n+ Nephrogenic rests:\n- "  + box_14.join('\n- ') + "\n";

        if ($("#box15").is(':checked')) {
            var box15_2 = $("#box15_2").val();
            var box15_3 = $("#box15_3").val();
            captext += "\nLymph nodes examined: "+box15_2+"\nLymph nodes involved: "+box15_3+"\n";}
        else {
            captext +="\nNo lymph nodes submitted\n";}

        var box_20 = $("#box20").val();
        var box_20_1 = $("#box20_1").val();
        var box_20_2 = $("#box20_2").val();
        var box_20_3 = $("#box20_3").val();
        if ($.inArray('Margins uninvolved by tumor', box_20) > -1 && $.inArray('Other margin involved by tumor', box_20) == -1) { captext += "\nMargins: Uninvolved by tumor\n - Closest margin: "+ box_20_2 +"\n - Distance to this margin: "+ box_20_1.replace(/cm/, '') +" cm\n";}
        else if ($.inArray('Other margin involved by tumor', box_20) > -1 && $.inArray('Margins uninvolved by tumor', box_20) == -1) { captext += "\nMargins:\n- "+box_20.join("\n- ").replace(/Other margin involved by tumor/, box_20_3)+"\n";}
        else {captext += "\nMargins:\n- "+box_20.join("\n- ")+"\n";}


        var box_16 = $("#box16").val();
        if (box_16 == 'Distant metastasis present'){
            box_16_2 = $("#box16_2").val();
            captext += "\nDistant Metastasis:\n- "+box_16+"\n- Metastatic site: "+box_16_2+"\n";}
        else {captext += "\nDistant Metastasis:\n- "+box_16+"\n";}

        var box_18 = $("#box18").val();
        var box_18_2 = $("#box18_2").val();
        if ($.inArray('Other', box_18) >-1){
            captext += "\nAncillary Studies:\n- "+box_18.join('\n- ').replace(/Other/, box_18_2)+"\n";}
        else {captext += "\nAncillary Studies:\n- "+box_18.join('\n- ')+"\n";}

        var box_19 = $("#box19").val();
        captext += "\nUnderlying Genetic Syndrome:\n- "+box_19+"\n";

        var box_17 = $("#box17").val();
        if (box_17 == 'Stage V'){
            box_17_2 = $("#box17_2").val();
            box_17_3 = $("#box17_3").val();
            captext += "\nChildren’s Oncology Group Staging System:\n- "+box_17+"\n- Right Kidney Stage: "+box_17_2+"\n- Left Kidney Stage: "+box_17_3+"\n";}
        else {captext += "\nChildren’s Oncology Group Staging System:\n- "+box_17+"\n";}


        $('#outPut-1').val(captext);

				dataObj.singleSection = $('#outPut-1').val();
				makeCreatePdfBtn();

    });
});
