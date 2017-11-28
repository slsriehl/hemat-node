$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/

    $("input#box5").autocomplete({
        source: ['Embryonal',
            'Alveolar',
            'Spindle cell and sclerosing',
            'Ectomesenchymoma',
            'Rhabdomyosarcoma, NOS',
            'Other:'],
        appendTo: '#Leftpanel'

    });


//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/

    $('#box1').change(function(){
        var sel = $('#box1').val();
        if (sel == 'Amputation') {
            $('#box1_2').show();}
        else {$('#box1_2').hide();}
        if (sel == 'Other') {
            $('#box1_3').show();}
        else {$('#box1_3').hide();}
    });

    $('#box3').change(function () {
        var sel = $('#box3').val();
        if (sel == 'Other:') {
            $('#box3_2').show();
        } else {
            $('#box3_2').hide();
        }
    });

    $('#box5').blur(function () {
        var sel = $('#box5').val();
        if (sel == 'Other:') {
            $('#box5_2').show();
        } else {
            $('#5_2').hide();
        }
    });

    $('#box7_5').change(function(){
        var sel = $('#box7_5').val();
        if (sel == 'Other') {
            $('#box7_5_2').show();}
        else {
            $('#box7_5_2').hide();}
    });

    $('#box8').change(function () {
        var sel = $('#box8').val();
        if (sel == 'Sarcoma involvement of margins not identified') {
            $('#box8_2').show();
            $('#box8_3').hide();
        }
        else if (sel == 'Margin(s) involved by sarcoma') {
            $('#box8_3').show();
            $('#box8_2').hide();
        }
        else if (sel == 'Cannot be assessed' || 'Indeterminate') {
            $('#box8_2').hide();
            $('#box8_3').hide();
        }
    });

    $('#box9').change(function () {
        var sel = $('#box9').val();
        if (sel == 'Metastatic involvement of regional lymph nodes not identified' || sel == 'Regional lymph node metastasis present') {
            $('#lymphnodes').show();
        } else if (sel == 'No regional lymph nodes sampled' || sel == 'No nodes submitted or found'){
            $('#lymphnodes').hide();
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

        var captext = "Rhabdomyosarcoma Cancer Synoptic\nAJCC 2018 cancer staging version\n\n";
        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        var box_1_3 = $("#box1_3").val();
        if (box_1 == 'Amputation') { captext += "\nProcedure:\n- "+box_1+": "+box_1_2+"\n";}
        else if (box_1 == 'Other'){ captext += "\nProcedure:\n- "+box_1+": "+box_1_3+"\n";}
        else {captext += "\nProcedure:\n- "+box_1+"\n";}

        var box_2 = $("#box2").val();
        if(box_2 != "Not applicable"){
            captext += "\n+ Preoperative treatment:\n- "  + box_2+ "\n";}

        var box_3 = $("#box3").val();
        if (box_3 == 'Other:'){
            box_3_2 = $("#box3_2").val();
            captext += "\nTumor Site:\n- "+box_3_2+"\n";}
        else {captext += "\nTumor Site:\n- "+box_3+"\n";}

        var box_4 = $("#box4").val();
        captext += "\nTumor size:\n- "  + box_4.replace(/cm/,'') + "cm\n";

        var box_5 = $("#box5").val();
        if (box_5 == 'Other:'){
            box_5_2 = $("#box5_2").val();
            captext += "\nHistologic Type:\n- "+box_5_2+"\n";}
        else {captext += "\nHistologic Type:\n- "+box_5+"\n";}

        var box_7 = $("#box7").val();
        captext += "\nAnaplasia:\n- "+box_7+"\n";

        var box_7_5 = $("#box7_5").val();
        var box_7_5_2 = $("#box7_5_2").val();
        if (box_7_5 == 'Other'){
            captext += "\nFusion Status:\n- "  + box_7_5_2+ "\n";}
        else {captext += "\nFusion Status:\n- "  + box_7_5+ "\n";}

        var box_8 = $("#box8").val();
        if (box_8 == 'Sarcoma involvement of margins not identified'){
            box_8_2 = $("#box8_2").val();
            captext += "\nMargins:\n- "+box_8+"\n- Distance of sarcoma to closest margin: "+box_8_2+"cm\n";}
        else if (box_8== 'Margin(s) involved by sarcoma'){
            box_8_3 = $("#box8_3").val();
            captext += "\nMargins:\n- "+box_8+": "+box_8_3+" margin\n";}
        else {captext += "\nMargins:\n- "+box_8+"\n";}

        var box_9 = $("#box9").val();
        var box_10 = $("#box10").val();
        var box_11 = $("#box11").val();

        captext += "\nLymph Nodes:\n- "+box_9+"\n";

        if (box_9 == 'Metastatic involvement of regional lymph nodes not identified' || box_9 == 'Regional lymph node metastasis present') {
            if (parseInt(box_11, 10) > parseInt(box_10,10)){alert ('Lymph node count error, please check your numbers'); $('#box10').focus(); return;}
            captext += "\nNumber of Lymph Nodes Examined:\n- "+box_10+"\n";
            captext += "\nNumber of Lymph Nodes Involved:\n- "+box_11+"\n";}

        var box_12 = $("#box12").val();
        if (box_12 = ' '){
            captext += "\nDistant Metastasis:\n- Not applicable\n";}
        else {captext += "\nDistant Metastasis:\n- "+box_12+"\n";}

        var box_13 = $("#box13").val();
        captext += "\nThe Intergroup Rhabdomyosarcoma Study Postsurgical Clinical Grouping System:\n- "+box_13+"\n";



        $('#outPut-1').val(captext);

				dataObj.singleSection = $('#outPut-1').val();
				makeCreatePdfBtn();
    });
});
