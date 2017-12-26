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

    $('#box2').on("change", function(){
        var sel = $('#box2').val();
        if (sel.indexOf("Other") > -1) {

            $('#box2_2').show();}
        else {
            $('#box2_2').hide();}
    });

    $('#box4').on("change", function(){
        var sel = $('#box4').val();
        if (sel.indexOf("Multifocal") > -1) {

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


    $('#box8').on("change", function(){
        var sel = $('#box8').val();
        if (sel.indexOf("structures") > -1) {

            $('#box8_2').show();}
        else {
            $('#box8_2').hide();}
    });

    $('#box9').on("change", function(){
        var sel = $('#box9').val();
        if (sel.indexOf('uninvolved') > -1){
            $('#box9_2').show();}
        else {$('#box9_2').hide();}
        if (sel.indexOf(' involved') > -1){
            $('#box9_3').show();}
        else {$('#box9_3').hide();}
    });



    $('#box10').on("change", function(){
        var sel = $('#box10').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box10_2').show();}
        else {$('#box10_2').hide();}
    });

    $('#box15').on("change", function(){
        var sel = $('#box15').val();
        if (sel.indexOf("Not") < 0) {

            $('#box15_2').show();}
        else {
            $('#box15_2').hide();}
    });

    $('#box18').on("change", function(){
        var sel = $('#box18').val();
        if (sel.indexOf("Present") > -1) {

            $('#box18_2').show();}
        else {
            $('#box18_2').hide();}
    });

    $("#box23").on("change", function(){
        if ($(this).is(":checked")){
            $(".lnchk").show();
        }
        else{
            $(".lnchk").hide();
        }
    });

    $("#box22").on("change", function(){
        var sel = $("#box22").val();
        if ((sel.indexOf("pMx") > -1 ) || (sel.indexOf("pM1a") > -1)){
            $("#box22_2").hide();
        } else {
            $("#box22_2").show();
        }
    });



    $('#box26').on("change", function(){
        var sel = $('#box26').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box26_2').show();}
        else {$('#box26_2').hide();}
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



        var captext = "Jejunal and Ileal Neuroendocrine Tumor Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1.indexOf("Other") > -1) {
            captext += "\nProcedure:\n- "  + box_1_2+ "\n";}
        else {captext += "\nProcedure:\n- "  + box_1+ "\n";}


        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if (box_2.indexOf("Other") > -1) {
            captext += "\nTumor Site:\n- "  + box_2_2+ "\n";}
        else {captext += "\nTumor Site:\n- "  + box_2+ "\n";}


        var box_3 = $("#box3").val();
        captext += "\nTumor Size:\n- "  + box_3.replace(/cm/,'') + "cm\n";

        var box_4 = $("#box4").val();
        var box_4_2 = $("#box4_2").val();
        if (box_4.indexOf("Multifocal") > -1) {
            captext += "\nTumor Focality:\n- Multifocal: "  + box_4_2+ " tumors\n";}
        else {captext += "\nTumor Focality:\n- "  + box_4+ "\n";}


        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if (box_5.indexOf("Other") > -1) {
            captext += "\nHistologic Type and Grade:\n- "  + box_5_2+ "\n";}
        else {captext += "\nHistologic Type and Grade:\n- "  + box_5+ "\n";}


        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        captext += "\nMitotic Rate:\n- "  + box_6+ " (enumerated at "+box_6_2+" per 2 mm^2)\n";


        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        captext += "\nKi-67 Labeling Index:\n- "  + box_7+ " (enumerated at "+box_7_2.replace(/\%/, '')+"%)\n";


        var box_8 = $("#box8").val();
        var box_8_2 = $("#box8_2").val();
        if (box_8.indexOf("structures") > -1) {
            captext += "\nTumor Extension:\n- Tumor invades the following structures: "  + box_8_2+ "\n";}
        else {captext += "\nTumor Extension:\n- "  + box_8+ "\n";}


        var box_9 = $("#box9").val();
        var box_9_2 = $("#box9_2").val();
        var box_9_3 = $("#box9_3").val();
        captext += "\nMargins:\n "
        if (box_9.indexOf("uninvolved") > -1) {



            var box_10 = $("#box10").val();
            var box_10_2 = $("#box10_2").val();
            if ($.inArray('Other', box_10) >-1){
                captext += "\t-Margins examined: "  + box_10.join(', ').replace(/Other/, box_10_2) + "\n";}
            else {captext += "\t-Margins examined: "  + box_10.join(', ') + "\n";}


            var box_11 = $("#box11").val();
            captext += "\t+ Distance of tumor from closest margin: "  + box_11.replace(/mm/,'') + "mm\n";
        }
        else if (box_9.indexOf("involved") > -1) {

            var box_12 = $("#box12").val();
            captext += "\t- Proximal Margin: " + box_12 + "\n";

            var box_13 = $("#box13").val();
            captext += "\n\t- Distal Margin: " + box_13 + "\n";

            var box_14 = $("#box14").val();
            captext += "\n\t- Radial Margin: " + box_14 + "\n";

            var box_15 = $("#box15").val();
            var box_15_2 = $("#box15_2").val();
            if (box_15 != "Not applicable") {
                captext += "\n\t- " + box_15_2 + " Margin: " + box_15 + "\n";
            }
            else {
                captext += "\n- " + box_9 + "\n";
            }
        }






            var box_16 = $("#box16").val();
            captext += "\nLymphovascular Invasion:\n- "  + box_16+ "\n";

            var box_17 = $("#box17").val();
            captext += "\n+ Perineural Invasion:\n- "  + box_17+ "\n";

            var box_18 = $("#box18").val();
            var box_18_2 = $("#box18_2").val();
            if (box_18.indexOf("Present") > -1) {
                captext += "\nLarge Mesenteric Masses:\n- Present: "  + box_18_2+ " masses\n";}
            else {captext += "\nLarge Mesenteric Masses:\n- "  + box_18+ "\n";}


            var box_19 = $("#box19").val();
            var box_20 = $("#box20").val();
            var box_21 = $("#box21").val();
            var box_22 = $("#box22").val();
            var box_22_2 = $("#box22_2").val();
            captext += '\nPathologic Staging (pTNM):\n- ';
            if (box_19 != "Not applicable"){
                if ((box_22 != "pMx") || (box_22 != "pM1a")){
                    captext += box_19.join("")+" "+box_20+" "+box_21+" "+box_22+" (metastatic site(s): " + box_22_2 + ")\n";
                } else {
                    captext += box_19.join("")+" "+box_20+" "+box_21+" "+box_22+"\n";
                }
            } else {
                if ((box_22 != "pMx") || (box_22 != "pM1a")){
                    captext += box_20+" "+box_21+" "+box_22+" (metastatic site(s): " + box_22_2 + ")\n";
                } else {
                    captext += box_20+" "+box_21+" "+box_22+"\n";
                }
            }
            if ($("#box23").is(':checked')) {
                var box_24 = $("#box24").val();
                var box_25 = $("#box25").val();
                captext += "\nLymph nodes:\n\tLymph Nodes Examined: "+box_24+"\n\tLymph nodes involved: "+box_25+"\n";} else {
                captext += "\nLymph nodes: None submitted\n";}

            var box_26 = $("#box26").val();
            var box_26_2 = $("#box26_2").val();
            if ($.inArray('Other', box_26) >-1){
                captext += "\n+ Additional Pathologic Findings:\n- "  + box_26.join('\n- ').replace(/Other/, box_26_2) + "\n";}
            else {captext += "\n+ Additional Pathologic Findings:\n- "  + box_26.join('\n- ') + "\n";}




            $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});


/**
 * Created by Chandra Krishnan on 12/25/2017.
 */
