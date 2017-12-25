$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/




//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/


    $('#box1').on("change", function(){
        var sel = $('#box1').val();
        if (sel.indexOf("Other") > -1) {

            $('#box1_2').show();}
        else {
            $('#box1_2').hide();}
    });

    $('#box3').on("change", function(){
        var sel = $('#box3').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box3_2').show();}
        else {$('#box3_2').hide();}
    });

    $('#box6').on("change", function(){
        var sel = $('#box6').val();
        if (sel.indexOf("Other") > -1) {

            $('#box6_2').show();}
        else {
            $('#box6_2').hide();}
    });

    $('#box7').on("change", function(){
        var sela = $('#box7').val();
        var trig1 = sela.filter(el => el.indexOf('Other') > -1);
        var trig2 = sela.filter(el => el.indexOf('organ(s)') > -1);
        if (trig1.length > 0) {
            $('#box7_2').show();}
        else {$('#box7_2').hide();}
        if (trig2.length > 0) {
            $('#box7_3').show();}
        else {$('#box7_3').hide();}
    });

    $('#box9').on("change", function(){
        var sela = $('#box9').val();
        if (sela.indexOf("Involved") > -1) {
            $('#box9_3').show();}
        else {$('#box9_3').hide();}
    });

    $("#box14").on("change", function(){
        if ($(this).is(":checked")){
            $(".lnchk").show();
        }
        else{
            $(".lnchk").hide();
        }
    });

    $("#box13").on("change", function(){
        var sel = $("#box13").val();
        if (sel != "pMx"){
            $("#box13_2").show();
        } else {
            $("#box13_2").hide();
        }
    });



    $('#box17').on("change", function(){
        var sela = $('#box17').val();
        var trig1 = sela.filter(el => el.indexOf('Other') > -1);
        var trig2 = sela.filter(el => el.indexOf('type') > -1);
        if (trig1.length > 0) {
            $('#box17_2').show();}
        else {$('#box17_2').hide();}
        if (trig2.length > 0) {
            $('#box17_3').show();}
        else {$('#box17_3').hide();}
    });



//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('.writeReport').on('click', function () {

    // ***************** INPUT VALIDATION ********************//
        $('select[multiple]:visible').each(function () {
            // Check if at least one selection is made
            if ($(this).val().length > 0) {
                $(this).removeClass('empty');
            } else {
                $(this).addClass('empty');
                $('#cap-valid').show();
            }
        });

        $('input[type="text"]:visible').each(function () {
            // Check if at least one selection is made
            if ($.trim($(this).val()).length > 0) {
                $(this).removeClass('empty');
            } else {
                    $(this).addClass('empty');
                    $('#cap-valid').show();
                }
        });

        // ***************** END VALIDATION ********************//



        var captext = "Mesothelioma Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1.indexOf("Other") > -1) {
            captext += "\nProcedure:\n- "  + box_1_2+ "\n";}
        else {captext += "\nProcedure:\n- "  + box_1+ "\n";}


        var box_2 = $("#box2").val();
        captext += "\nSpecimen Laterality:\n- "  + box_2+ "\n";

        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        if ($.inArray('Other', box_3) >-1){
            captext += "\nTumor Site:\n- "  + box_3.join('\n- ').replace(/Other/, box_3_2) + "\n";}
        else {captext += "\nTumor Site:\n- "  + box_3.join('\n- ') + "\n";}


        var box_5 = $("#box5").val();
        captext += "\nTumor Focality:\n- "  + box_5+ "\n";

        var box_4 = $("#box4").val();
        if (box_4.indexOf('Not') < 0) {
            captext += "\n+ Tumor Size:\n- "  + box_4.replace(/cm/,'') + "cm\n";}


        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6.indexOf("Other") > -1) {
            captext += "\nHistologic Type:\n- "  + box_6_2+ "\n";}
        else {captext += "\nHistologic Type:\n- "  + box_6+ "\n";}


        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        var box_7_3 = $("#box7_3").val();
        var trig1_box_7 = box_7.filter(el => el.indexOf("Other") > -1);
        var trig2_box_7 = box_7.filter(el => el.indexOf("organ(s)") > -1);
        if ((trig1_box_7.length > 0 ) && (trig2_box_7.length == 0  )) {
            captext += "\nTumor Extension:\n- "+box_7.join("\n- ").replace(/Other/, box_7_2)+"\n";}
        else if ((trig1_box_7.length == 0 ) && (trig2_box_7.length > 0  )) {
            captext += "\nTumor Extension:\n- "+box_7.join("\n- ").replace(/organ\(s\)/, "organs: "+ box_7_3)+"\n";}
        else if ((trig1_box_7.length > 0 ) && (trig2_box_7.length > 0  )) {
            captext += "\nTumor Extension:\n- "+box_7.join("\n- ").replace(/Other/, box_7_2).replace(/organ\(s\)/, "organs: "+ box_7_3)+"\n";}
        else {captext += "\nTumor Extension:\n- "+box_7.join("\n- ")+"\n";}

        var box_9 = $("#box9").val();
        var box_9_3 = $("#box9_3").val();
        if (box_9.indexOf("Involved") > -1) {
            captext += "\nMargins:\n- "+box_9+"\n- Margin involved: "+box_9_3+"\n";}
        else {captext += "\nMargins:\n- "+box_9+"\n";}

        var box_10 = $("#box10").val();
        var box_11 = $("#box11").val();
        var box_12 = $("#box12").val();
        var box_13 = $("#box13").val();
        var box_13_2 = $("#box13_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_10 != "Not applicable"){
            if (box_13 != "pMx"){
                captext += box_10.join("")+" "+box_11+" "+box_12+" "+box_13+" (metastatic site(s): " + box_13_2 + ")\n";
            } else {
                captext += box_10.join("")+" "+box_11+" "+box_12+" "+box_13+"\n";
            }
        } else {
            if (box_13 != "pMx"){
                captext += box_11+" "+box_12+" "+box_13+" (metastatic site(s): " + box_13_2 + ")\n";
            } else {
                captext += box_11+" "+box_12+" "+box_13+"\n";
            }
        }
        if ($("#box14").is(':checked')) {
            var box_15 = $("#box15").val();
            var box_16 = $("#box16").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: "+box_15+"\n\tLymph nodes involved: "+box_16+"\n";} else {
            captext += "\nLymph nodes: None submitted\n";}

        var box_17 = $("#box17").val();
        var box_17_2 = $("#box17_2").val();
        var box_17_3 = $("#box17_3").val();
        var trig1_box_17 = box_17.filter(el => el.indexOf("Other") > -1);
        var trig2_box_17 = box_17.filter(el => el.indexOf("type") > -1);
        if ((trig1_box_17.length > 0 ) && (trig2_box_17.length == 0  )) {
            captext += "\n+ Additional Pathologic Findings:\n- "+box_17.join("\n- ").replace(/Other/, box_17_2)+"\n";}
        else if ((trig1_box_17.length == 0 ) && (trig2_box_17.length > 0  )) {
            captext += "\n+ Additional Pathologic Findings:\n- "+box_17.join("\n- ").replace(/type/, box_17_3)+"\n";}
        else if ((trig1_box_17.length > 0 ) && (trig2_box_17.length > 0  )) {
            captext += "\n+ Additional Pathologic Findings:\n- "+box_17.join("\n- ").replace(/Other/, box_17_2).replace(/type/, box_17_3)+"\n";}
        else {captext += "\n+ Additional Pathologic Findings:\n- "+box_17.join("\n- ")+"\n";}




        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});



/**
 * Created by Chandra Krishnan on 12/24/2017.
 */
