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
        var sel = $('#box7').val();
        if (sel.indexOf("Present") > -1) {

            $('#box7_2').show();}
        else {
            $('#box7_2').hide();}
    });

    $('#box10').on("change", function(){
        var sel = $('#box10').val();
        if (sel.indexOf("Present") > -1) {

            $('#box10_2').show();}
        else {
            $('#box10_2').hide();}
    });

    $('#box11').on("change", function(){
        var sel = $('#box11').val();
        if (sel.indexOf('structures') >-1) {
            $('#box11_2').show();}
        else {$('#box11_2').hide();}
    });

    $('#box12').on("change", function(){
        var sel = $('#box12').val();
        if (sel.indexOf("Involved") > -1) {

            $('#box12_2').show();}
        else {
            $('#box12_2').hide();}
    });

    $('#box50').on("change", function(){
        var sel = $('#box50').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box50_2').show();}
        else {$('#box50_2').hide();}
    });

    $("#box18").on("change", function(){
        if ($(this).is(":checked")){
            $(".lnchk").show();
        }
        else{
            $(".lnchk").hide();
        }
    });

    $("#box17").on("change", function(){
        var sel = $("#box17").val();
        if (sel != "pMx"){
            $("#box17_2").show();
        } else {
            $("#box17_2").hide();
        }
    });

    $("#box20").on('input', function(){
        var sel = $(this).val();
        if (sel > 0){
            $(".posnodes").show();
        } else {
            $(".posnodes").hide();
        }
    });



    $('#box22').on("change", function(){
        var sela = $('#box22').val();
        var trig1 = sela.filter(el => el.indexOf('Glomerular') > -1);
        var trig2 = sela.filter(el => el.indexOf('Tubulointerstitial') > -1);
        var trig3 = sela.filter(el => el.indexOf('Vascular') > -1);
        var trig4 = sela.filter(el => el.indexOf('Other') > -1);
        if (trig1.length > 0) {
            $('#box22_2').show();}
        else {$('#box22_2').hide();
        }
        if (trig2.length > 0) {
            $('#box22_3').show();}
        else {$('#box22_3').hide();}
        if (trig3.length > 0) {
            $('#box22_4').show();}
        else {$('#box22_4').hide();}
        if (trig4.length > 0) {
            $('#box22_5').show();}
        else {$('#box22_5').hide();}


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



        var captext = "Renal Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

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
            captext += "\n+ Tumor Site:\n- "  + box_3.join(', ').replace(/Other/, box_3_2) + "\n";}
        else {captext += "\n+ Tumor Site:\n- "  + box_3.join(', ') + "\n";}

        var box_4 = $("#box4").val();
        captext += "\nTumor Size:\n- "  + box_4.replace(/cm/,'') + "cm\n";

        var box_5 = $("#box5").val();
        captext += "\nTumor Focality:\n- "  + box_5+ "\n";

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6.indexOf("Other") > -1) {
            captext += "\nHistologic Type:\n- "  + box_6_2+ "\n";}
        else {captext += "\nHistologic Type:\n- "  + box_6+ "\n";}


        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if (box_7.indexOf("Present") > -1) {
            captext += "\nSarcomatoid Features:\n- Present: "  + box_7_2+ "%\n";}
        else {captext += "\nSarcomatoid Features:\n- "  + box_7+ "\n";}


        var box_8 = $("#box8").val();
        captext += "\nRhabdoid Features:\n- "  + box_8+ "\n";

        var box_9 = $("#box9").val();
        captext += "\nHistologic Grade:\n- "  + box_9+ "\n";

        var box_10 = $("#box10").val();
        var box_10_2 = $("#box10_2").val();
        if (box_10.indexOf("Present") > -1) {
            captext += "\nTumor Necrosis:\n- Present: "  + box_10_2+ "%\n";}
        else {captext += "\nTumor Necrosis:\n- "  + box_10+ "\n";}


        var box_11 = $("#box11").val();
        var box_11_2 = $("#box11_2").val();
        if (box_11.indexOf('structures') >-1){
            captext += "\nTumor Extension:\n- "  + box_11.replace(/structures/, "structures, including: " + box_11_2) + "\n";}
        else {captext += "\nTumor Extension:\n- "  + box_11 + "\n";}

        var box_12 = $("#box12").val();
        if (box_12.indexOf("Involved") > -1) {
            captext += "\nMargins:\n- "  +box_12+"\n";
            var box_50 = $("#box50").val();
            var box_50_2 = $("#box50_2").val();
            if ($.inArray('Other', box_50) >-1){
                captext += "\t- "  + box_50.join('\n\t- ').replace(/Other/, box_50_2) + "\n";}
            else {captext += "\t- "  + box_50.join('\n\t- ') + "\n";}

        }
        else {captext += "\nMargins:\n- "  + box_12+ "\n";}




        var box_13 = $("#box13").val();
        captext += "\n+ Lymphovascular Invasion:\n- "  + box_13+ "\n";

        var box_14 = $("#box14").val();
        var box_15 = $("#box15").val();
        var box_16 = $("#box16").val();
        var box_17 = $("#box17").val();
        var box_17_2 = $("#box17_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_14 != "Not applicable"){
            if (box_17 != "pMx"){
                captext += box_14.join("")+" "+box_15+" "+box_16+" "+box_17+" (metastatic site(s): " + box_17_2 + ")\n";
            } else {
                captext += box_14.join("")+" "+box_15+" "+box_16+" "+box_17+"\n";
            }
        } else {
            if (box_17 != "pMx"){
                captext += box_15+" "+box_16+" "+box_17+" (metastatic site(s): " + box_17_2 + ")\n";
            } else {
                captext += box_15+" "+box_16+" "+box_17+"\n";
            }
        }
        if ($("#box18").is(':checked')) {
            var box_19 = $("#box19").val();
            var box_20 = $("#box20").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: "+box_19+"\n\tLymph nodes involved: "+box_20+"\n";} else {
            captext += "\nLymph nodes: None submitted\n";
                    var box_21 = $("#box21").val();
        captext += "\n+ Size of Largest Metastatic Deposit:\n- "  + box_21.replace(/cm/,'') + "cm\n";
            }

        var box_22 = $("#box22").val();
        var box_22_2 = $("#box22_2").val();
        var box_22_3 = $("#box22_3").val();
        var box_22_4 = $("#box22_4").val();
        var box_22_5 = $("#box22_5").val();
        var trig1_box_22 = box_22.filter(el => el.indexOf("Glomerular") > -1);
        var trig2_box_22 = box_22.filter(el => el.indexOf("Tubulointerstitial") > -1);
        var trig3_box_22 = box_22.filter(el => el.indexOf("Vascular") > -1);
        var trig4_box_22 = box_22.filter(el => el.indexOf("Other") > -1);
        captext += "\nPathologic Findings in Nonneoplastic Kidney:\n";
        if (trig1_box_22.length > 0){
            captext += "- Glomerular disease: "+box_22_2+"\n";
        }
        if (trig2_box_22.length > 0){
            captext += "- Tubulointerstitial disease: "+box_22_3+"\n";
        }
        if (trig3_box_22.length > 0){
            captext += "- Vascular disease: "+box_22_4+"\n";
        }
        if (trig4_box_22.length > 0){
            captext += "- Other disease: "+box_22_5+"\n";
        }

        else {captext += "- "+box_22.join("\n- ")+"\n";}




        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});


