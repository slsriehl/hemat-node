$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/




//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/

    $('#box1').change(function(){
        var sel = $('#box1').val();
        if (sel == 'Enucleation') {
            $('#box1_2').show();}
        else {$('#box1_2').hide();}
        if (sel == 'Other (specify)') {
            $('#box1_3').show();}
        else {$('#box1_3').hide();}
    });



    $('#box4').change(function () {
        var sel = $('#box4').val();
        if ($.inArray('Other:', sel) >-1) {
            $('input[id=box4_2]').show();
        } else {
            $('input[id=box4_2]').hide();
        }
    });

    $('#box8').change(function () {
        var sel = $('#box8').val();
        if ($.inArray('Other:', sel) >-1) {
            $('input[id=box8_2]').show();
        } else {
            $('input[id=box8_2]').hide();
        }
    });

    $('#box9').change(function () {
        var sel = $('#box9').val();
        if ($.inArray('Differentiated', sel) >-1) {
            $('.histo').show();
        } else {
            $('.histo').hide();
        }
    });

    $('#box13').change(function () {
        var sel = $('#box13').val();
        if (sel == 'Other margin(s) involved:') {
            $('input[id=box13_2]').show();
        } else {
            $('input[id=box13_2]').hide();
        }
    });

    $('#box18').change(function () {
        var sel = $('#box18').val();
        if ($.inArray('Mitotic rate (per 40x field):', sel) >-1) {
            $('#box18_2').show();
        } else {
            $('#box18_2').hide();
        }
        if ($.inArray('Neovascularization', sel) >-1) {
            $('#box18_3').show();
        } else {
            $('#box18_3').hide();
        }
        if ($.inArray('Other:', sel) >-1) {
            $('#box18_4').show();
        } else {
            $('#box18_4').hide();
        }

    });


//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('#writeReport').on('click', function () {

        var captext = "Retinoblastoma Cancer Synoptic\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        var box_1_3 = $("#box1_3").val();
        if (box_1 == 'Enucleation') { captext += "\nProcedure:\n- "+box_1+", Optic nerve length: "+box_1_2.replace(/mm/, '')+"mm\n";}
        else if (box_1 == 'Other (specify)'){ captext += "\nProcedure:\n- "+box_1_3+"\n";}
        else {captext += "\nProcedure:\n- "+box_1+"\n";}

        var box_2 = $("#box2").val();
        captext += "\nSpecimen Laterality:\n- "  + box_2+ "\n";

        var box_4 = $("#box4").val();
        var box_4_2 = $("#box4_2").val();
        if ($.inArray('Other:', box_4)){
            captext += "\nTumor Site:\n- "+box_4.join('\n- ').replace(/Other:/, box_4_2)+"\n";}
        else {captext += "\nTumor Site:\n- "+box_4.join("\n- ")+"\n";}

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        var box_6_3 = $("#box6_3").val();
        if ($('#box6').is(':checked')){
            captext += "\nTumor Size After Sectioning:\n- Cannot be determined\n";}
        else {captext += "\nTumor Location After Sectioning:\n- Greatest basal diameter: "+box_6_2.replace(/mm/, '')+"mm\n- Greatest height: "+box_6_3.replace(/mm/,'')+"mm\n";}

        var box_7 = $("#box7").val();
        captext += "\nTumor Site After Sectioning:\n- "  + box_7+ "\n";

        var box_8 = $("#box8").val();
        var box_8_2 = $("#box8_2").val();
        if ($.inArray('Other:', box_8) >-1){
            captext += "\nTumor Involvement of Other Ocular Structures:\n- "  + box_8.join('\n- ').replace(/Other:/, box_8_2) + "\n";}
        else {captext += "\nTumor Involvement of Other Ocular Structures:\n- "  + box_8.join('\n- ') + "\n";}

        var box_10 = $("#box10").val();
        captext += "\nGrowth Pattern :\n- "+box_10+"\n";

        var box_11 = $("#box11").val();
        captext += "\nExtent of Optic Nerve Invasion:\n- "+box_11+"\n";

        var box_12 = $("#box12").val();
        captext += "\nHistologic Grade:\n- "+box_12+"\n";

        var box_9 = $("#box9").val();
        if ($.inArray('Differentiated', box_9) >-1){
            var box_9_2 = $("#box9_2").val();
            captext += "\nHistologic Features:\n- "+box_9.join('\n- ').replace(/Differentiated/, 'Differentiated ('+box_9_2.join(', ')+')')+"\n";}
        else {captext += "\nHistologic Features:\n- "+box_9.join('\n- ')+"\n";}

        var box_9_3 = $("#box9_3").val();
        if(box_9_3 != "Cannot be determined"){
            captext += "\n+ Anaplasia Grade:\n- "  + box_9_3+ "\n";}

        var box_13 = $("#box13").val();
        if (box_13 == 'Other margin(s) involved:'){
            var box_13_2 = $("#box13_2").val();
            captext += "\nMargins :\n- "+box_13_2+"\n";}
        else {captext += "\nMargins :\n- "+box_13+"\n";}

        captext += '\nPathologic Staging (pTNM):\n- ';
        var box_14 = $("#box14").val();
        var box_15 = $("#box15").val();
        var box_16 = $("#box16").val();
        var box_17 = $("#box17").val();
        if (box_14 != 'Not applicable'){
            captext += box_14.join("")+' ';}
        captext += box_15+' '+box_16+' '+box_17+"\n";

        var box_18 = $("#box18").val();
        var box_18_2 = $("#box18_2").val();
        var box_18_3 = $("#box18_3").val();
        var box_18_4 = $("#box18_4").val();
        if ($.inArray('Mitotic rate (per 40x field):', box_18) > -1 && $.inArray('Other:', box_18) == -1 && $.inArray('Neovascularization', box_18) == -1) {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_18.join("\n- ")
                    .replace(/:/, ': ' + box_18_2 + '/hpf') + "\n";
        } else if ($.inArray('Other:', box_18) > -1 && $.inArray('Mitotic rate (per 40x field):', box_18) == -1 && $.inArray('Neovascularization', box_18) == -1) {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_18.join("\n- ")
                    .replace(/Other:/, box_18_4) + "\n";
        } else if ($.inArray('Other:', box_18) > -1 && $.inArray('Mitotic rate (per 40x field):', box_18) > -1) {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_18.join("\n- ")
                    .replace(/:/, ': ' + box_18_2 + '/hpf')
                    .replace(/Other:/, box_18_4) + "\n";
        } else if ($.inArray('Mitotic rate (per 40x field):', box_18) == -1 && $.inArray('Neovascularization', box_18) > -1) {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_18.join("\n- ")
                    .replace(/Neovascularization/, 'Neovascularization: ' + box_18_3) + "\n";
        } else if ($.inArray('Mitotic rate (per 40x field):', box_18) > -1 && $.inArray('Neovascularization', box_18) > -1) {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_18.join("\n- ")
                    .replace(/:/, ': ' + box_18_2 + '/hpf')
                    .replace(/Neovascularization/, 'Neovascularization: ' + box_18_3) + "\n";
        } else {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_18.join("\n- ") + "\n";
        }



        $('#outPut-1').val(captext);

				dataObj.singleSection = $('#outPut-1').val();
				makeCreatePdfBtn();

    });
});
