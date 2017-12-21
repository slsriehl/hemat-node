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
        if (sel.indexOf('Solitary') > -1){
            $('#box3_2').show();}
        else {$('#box3_2').hide();}
        if (sel.indexOf('Multiple') > -1){
            $('#box3_3').show();}
        else {$('#box3_3').hide();}
    });

    $('#box4').on("change", function(){
        var sel = $('#box4').val();
        if (sel.indexOf("Other") > -1) {

            $('#box4_2').show();}
        else {
            $('#box4_2').hide();}
    });

    $('#box5').on("change", function(){
        var sel = $('#box5').val();
        if (sel.indexOf("Other") > -1) {

            $('#box5_2').show();}
        else {
            $('#box5_2').hide();}
    });

    $('#box6').on("change", function(){
        var sel = $('#box6').val();
        if ($.inArray('adjacent', sel) >-1) {
            $('#box6_2').show();}
        else {$('#box6_2').hide();}
    });

    $('#box7').on("change", function(){
        var sela = $('#box7').val();
        if (sela.indexOf('Uninvolved') > -1){
            $('#box7_2').show();}
        else {
            $('#box7_2').hide();}

    });


    $('#box8').on("change", function(){
        var sela = $('#box8').val();
        var neg = sela.filter(el => el.indexOf('Uninvolved') > -1);
        if (neg.length > 0) {
            $('#box8_2').show();}
        else {
            $('#box8_2').hide();}
    });

    $('#box9').on("change", function(){
        var sel = $('#box9').val();
        if (sel.indexOf("Not") < 0) {

            $('#box9_2').show();}
        else {
            $('#box9_2').hide();}
    });
    
    $('#box10').on("change", function(){
        var sel = $('#box10').val();
        if (sel.indexOf("Not") < 0) {

            $('#box10_2').show();}
        else {
            $('#box10_2').hide();}
    });
    $("#box17").on("change", function(){
        if ($(this).is(":checked")){
            $(".lnchk").show();
        }
        else{
            $(".lnchk").hide();
        }
    });

    $("#box16").on("change", function(){
        var sel = $("#box16").val();
        if (sel != "pMx"){
            $("#box16_2").show();
        } else {
            $("#box16_2").hide();
        }
    });



    $('#box25').on("change", function(){
        var sela = $('#box25').val();
        var trig1 = sela.filter(el => el.indexOf('hepatitis') > -1);
        var trig2 = sela.filter(el => el.indexOf('Other') > -1);
        if (trig1.length > 0) {
            $('#box25_2').show();}
        else {$('#box25_2').hide();}
        if (trig2.length > 0) {
            $('#box25_3').show();}
        else {$('#box25_3').hide();}
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



        var captext = "Intrahepatic Bile duct Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1.indexOf("Other") > -1) {
            captext += "\nProcedure:\n- "  + box_1_2+ "\n";}
        else {captext += "\nProcedure:\n- "  + box_1+ "\n";}


        var box_2 = $("#box2").val();
        captext += "\nTumor Size:\n- "  + box_2.replace(/cm/,'') + "cm\n";

        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        var box_3_3 = $("#box3_3").val();
        if (box_3.indexOf("Solitary") > -1) {
            captext += "\nTumor Focality:\n- "+box_3+": "+box_3_2+"\n";}
        else if (box_3.indexOf("Multiple") > -1) {
            captext += "\nTumor Focality:\n- "+box_3+": "+box_3_3+"\n";}
        else {captext += "\nTumor Focality:\n- "+box_3+"\n";}

        var box_4 = $("#box4").val();
        var box_4_2 = $("#box4_2").val();
        if (box_4.indexOf("Other") > -1) {
            captext += "\nHistologic Type:\n- "  + box_4_2+ "\n";}
        else {captext += "\nHistologic Type:\n- "  + box_4+ "\n";}


        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if (box_5.indexOf("Other") > -1) {
            captext += "\nHistologic Grade:\n- "  + box_5_2+ "\n";}
        else {captext += "\nHistologic Grade:\n- "  + box_5+ "\n";}


        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if ($.inArray('adjacent', box_6) >-1){
            captext += "\nTumor Extension:\n- "  + box_6.join('\n- ').replace(/organs/, "organs: "+ box_6_2) + "\n";}
        else {captext += "\nTumor Extension:\n- "  + box_6.join('\n- ') + "\n";}

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        captext += "\nMargins:\n";
        if (box_7.indexOf("Uninvolved") > -1) {
            captext += "- Hepatic Parenchymal Margin:\n\t- "+box_7+"\n\t- Distance to this margin: " + box_7_2.replace(/mm/,"")+"mm\n";}
        else {captext += "- Hepatic Parenchymal Margin:\n\t- "+box_7+"\n";}


        var box_8 = $("#box8").val();
        var box_8_2 = $("#box8_2").val();
        var negbox_8 = box_8.filter(el => el.indexOf("Uninvolved") > -1);
        var posbox_8 = box_8.filter(el => el.indexOf("Involved") > -1);
        if (box_8.indexOf('Not') < 0){
            captext += "\n- Bile Duct Margin:\n";
            if (negbox_8.length > 0 ) {
                captext += "\t- "+negbox_8+"\n\t- Distance of invasive carcinoma to this margin: " + box_8_2.replace(/mm/,"")+"mm\n";}
            if (posbox_8.length > 0  ) {
                captext += "\t- "+posbox_8+"\n";}
        }

        var box_9 = $("#box9").val();
        var box_9_2 = $("#box9_2").val();
        if (box_9.indexOf('Not') < 0){
            captext += "\n- "+box_9_2+" Margin:\n\t- "  + box_9+ "\n";
        }
        
        var box_11 = $("#box11").val();
        captext += "\nLymphovascular Invasion:\n- "  + box_11+ "\n";

        var box_12 = $("#box12").val();
        captext += "\n+ Perineural Invasion:\n- "  + box_12+ "\n";

        var box_13 = $("#box13").val();
        var box_14 = $("#box14").val();
        var box_15 = $("#box15").val();
        var box_16 = $("#box16").val();
        var box_16_2 = $("#box16_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_13 != "Not applicable"){
            if (box_16 != "pMx"){
                captext += box_13.join("")+" "+box_14+" "+box_15+" "+box_16+" (metastatic site(s): " + box_16_2 + ")\n";
            } else {
                captext += box_13.join("")+" "+box_14+" "+box_15+" "+box_16+"\n";
            }
        } else {
            if (box_16 != "pMx"){
                captext += box_14+" "+box_15+" "+box_16+" (metastatic site(s): " + box_16_2 + ")\n";
            } else {
                captext += box_14+" "+box_15+" "+box_16+"\n";
            }
        }
        if ($("#box17").is(':checked')) {
            var box_18 = $("#box18").val();
            var box_19 = $("#box19").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: "+box_18+"\n\tLymph nodes involved: "+box_19+"\n";} else {
            captext += "\nLymph nodes: None submitted\n";}

        var box_25 = $("#box25").val();
        var box_25_2 = $("#box25_2").val();
        var box_25_3 = $("#box25_3").val();
        var trig1_box_25 = box_25.filter(el => el.indexOf("hepatitis") > -1);
        var trig2_box_25 = box_25.filter(el => el.indexOf("Other") > -1);
        captext += "\n+ Additional Pathologic Findings:\n";
        if (trig1_box_25.length > 0 ) {
            captext += "- "+box_25.join("\n- ").replace(/hepatitis/, "hepatitis: "+box_25_2);}
        if (trig2_box_25.length > 0 ) {
            captext += "- "+box_25.join("\n- ").replace(/Other/, box_25_3);}
        else {captext += "- "+box_25.join("\n- ");}




        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});


/**
 * Created by Chandra Krishnan on 12/20/2017.
 */
