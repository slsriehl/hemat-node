$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/




//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/

    $('#box13_0').change(function() {
        var val = $('#box13_0').val();
        if (val == 1){
            $('.pTbone').show();
        } else {
            $('.pTbone').hide();
        }
        if (val == 2){
            $('.pTsoft').show();
        } else {
            $('.pTsoft').hide();
        }
    });

    $('#box1').change(function () {
        var sel = $('#box1').val();
        if (sel == 'Other:') {
            $('#box1_2').show();
        } else {
            $('#box1_2').hide();
        }
        if (sel == 'Amputation:') {
            $('#box1_3').show();
        } else {
            $('#box1_3').hide();
        }

    });

    $('#box4').change(function () {
        var sel = $('#box4').val();
        if ($.inArray('Other:', sel) >-1) {
            $('#box4_2').show();
        } else {
            $('#box4_2').hide();
        }
    });

    $('#box5').change(function () {
        var sel = $('#box5').val();
        if ($.inArray('Other:', sel) >-1) {
            $('#box5_2').show();
        } else {
            $('#box5_2').hide();
        }
    });

    $('#box6').change(function () {
        var sel = $('#box6').val();
        if (sel == 'Margins uninvolved by tumor') {
            $('#box6_2').show();
        } else {
            $('#box6_2').hide();
        }
        if (sel == 'Margin(s) involved by tumor') {
            $('#box6_3').show();
        } else {
            $('#box6_3').hide();
        }

    });


    $('#box9').change(function () {
        var sel = $('#box9').val();
        if (sel == 'Necrosis present') {
            $('#box9_2').show();
        } else if (sel != 'Necrosis present') {
            $('#box9_2').hide();
        }
    });


    $('#box16').change(function () {
        var sel = $('#box16').val();
        if (sel == 'pN1a') {
            $('#box16_3').show();
            $('#box16_4').hide();
        } else {
            $('#box16_3').hide();
            $('#box16_4').show();
        }
        if (sel == 'pN1b') {
            $('#box16_5').show();
            $('#box16_2').hide();
        } else {
            $('#box16_5').hide();
            $('#box16_2').show();
        }

    });

    $('#box17').change(function () {
        var sel = $('#box17').val();
        if (sel == 'pM1b') {
            $('#box17_2').show();
        } else {
            $('#box17_2').hide();
        }

    });

    $('#box18').change(function () {
        var sel = $('#box18').val();
        if (sel == 'pM1') {
            $('#box18_2').show();
        } else {
            $('#box187_2').hide();
        }

    });


//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('.writeReport').on('click', function () {

        $('input[type="text"]').each(function () {
            if ($(this).val().length < 1) {
                $(this).val($(this).attr('placeholder'));
            }
            if ($(this).val().length < 1) {
                $(this).addClass('empty')
            }
        });

        var captext = "Ewing Sarcoma/PNET (Resection) Cancer Synoptic\nAJCC 2018 cancer staging version\n\n";
        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        var box_1_3 = $("#box1_3").val();
        if (box_1 == 'Other:'){
            captext += "Procedure:\n- "+box_1+" "+box_1_2+"\n";}
        if (box_1 == 'Amputation:'){
            captext += "Procedure:\n- "+box_1+" "+box_1_3+"\n";}
        else {captext += "Procedure:\n- "+box_1+"\n";}

        var box_2 = $("#box2").val();
        captext += "\nTumor Site:\n- "+box_2+"\n";

        var box_3 = $("#box3").val();
        if(box_3 != 'Cannot Be Determined'){
            captext += "\nTumor Size:\n- "+box_3.replace(/cm/, '')+"cm\n";}
        else {captext += "\nTumor Size:\n- "+box_3+"\n";}

        var box_4 = $("#box4").val();
        if (box_4 != 'Not applicable'){
            if ($.inArray('Other:', box_4)){
                var box_4_2 = $("#box4_2").val();
                captext += "\n+ Extent of Osseous Tumors:\n- "+box_4.join('\n- ').replace(/Other:/, box_4_2)+"\n";}
            else {captext += "\n+ Extent of Osseous Tumors:\n- "+box_4.join("\n- ")+"\n";}
        }

        var box_5 = $("#box5").val();
        if (box_5 != 'Not applicable'){
            if ($.inArray('Other:', box_4)){
                var box_5_2 = $("#box5_2").val();
                captext += "\n+ Extent of Primary Extraosseous Tumors:\n- "+box_5.join('\n- ').replace(/Other:/, box_5_2)+"\n";}
            else {captext += "\n+ Extent of Primary Extraosseous Tumors:\n- "+box_5.join("\n- ")+"\n";}
        }

        var box_6 = $("#box6").val();
        var box_6_2  = $("#box6_2").val();
        var box_6_3  = $("#box6_3").val();
        if (box_6 == 'Margins uninvolved by tumor'){
            captext += "\nMargins uninvolved by tumor:\n- Distance to closest margin: "+box_6_2+"cm\n";}
        if (box_6 == 'Margin(s) positive for sarcoma'){
            captext += "\nMargins involved by tumor:\n- Margin(s) involved: "+box_6_3 +"\n";}
        else {captext += "\nMargins:\n- Cannot be assessed\n";}

        var box_7 = $("#box7").val();
        captext += "\n+ Lymph-Vascular Invasion:\n- "+box_7+"\n";
        var box_8 = $("#box8").val();
        captext += "\nPrebiopsy Treatment:\n- "+box_8.join("\n- ")+"\n";

        var box_9 = $("#box9").val();
        if (box_9 == 'Necrosis present'){
            var box_9_2 = $("#box9_2").val();
            captext += "\nNecrosis Postchemotherapy:\n- "+box_9+": "+box_9_2+"%\n";}
        else {captext += "\nNecrosis Postchemotherapy:\n- "+box_9+"\n";}

        var box_10 = $("#box10").val();
        if (box_10 != 'Not applicable'){
            captext += "\n+ Additional Pathologic Findings:\n- "+box_10+"\n";}

        var box_11 = $("#box11").val();
        captext += "\n+ Cytogenetics:\n- "+box_11+"\n";

        var box_12 = $("#box12").val();
        captext += "\n+ Molecular Pathology:\n- "+box_12.join('\n- ')+"\n";

        var box_13 = $("#box13").val();
        var box_13_0 = $("#box13_0").val();
        var box_14 = $("#box14").val();
        var box_15 = $("#box15").val();
        var box_16 = $("#box16").val();
        var box_16_2 = $("#box16_2").val();
        var box_16_3 = $("#box16_3").val();
        var box_16_4 = $("#box16_4").val();
        var box_16_5 = $("#box16_5").val();
        var box_17 = $("#box17").val();
        var box_17_2 = $("#box17_2").val();
        var box_18 = $("#box18").val();
        var box_18_2 = $("#box18_2").val();
        captext += "\nPathologic Staging (pTNM):\n- ";
        if (box_13 != 'Not applicable'){
            captext += box_13.join('');}
        if (box_13_0 == 1){
            captext += box_14+' ';
        }
        if (box_13_0 == 2){
            captext += box_15+' ';
        }
        if (box_16 == 'pN1a' || box_16 == 'pN1b'){
            captext += 'pN1 ';
        }
        else {captext += box_16+' ';}
        if (box_13_0 == 1){
            if (box_17 == 'pM1b'){
                captext += box_17+'('+box_17_2+')';}
            else {captext += box_17;}
        }
        if (box_13_0 == 2){
            if (box_18 == 'pM1'){
                captext += box_18+'('+box_18_2+')';}
            else {captext += box_18+' ';}

        }
        if (box_16 == 'pN0'){
            captext +='\n\nLymph nodes examined:\n- # of regional nodes: '+box_16_2+'\n- # of non-regional nodes: '+box_16_4+'\n';}
        if (box_16 == 'pN1a'){
            captext +='\n\nLymph nodes:\n- # of regional nodes examined: '+box_16_2+'\n- # of regional nodes involved: '+box_16_3+'\n';}
        if (box_16 =='pN1b'){
            captext +='\n\nLymph nodes:\n- # of non-regional nodes: '+box_16_4+'\n- # of non-regional nodes involved: '+box_16_5+'\n';}




        $('#outPut-1').val(captext);
				dataObj.singleSection = $('#outPut-1').val();
				makeCreatePdfBtn();

    });
});
