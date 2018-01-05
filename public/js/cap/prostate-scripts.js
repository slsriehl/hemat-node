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

    $('#box4').on("change", function(){
        var sel = $('#box4').val();
        if (sel.indexOf("Other") > -1) {

            $('#box4_2').show();}
        else {
            $('#box4_2').hide();}
    });

    $('#box5, #box6, #box7').on("change", function(){
        var gleas1 = parseInt($("#box5").find(":selected").data("gleas"), 10);
        var gleas2 = parseInt($("#box6").find(":selected").data("gleas"), 10);
        var gleas3 = parseInt($("#box7").find(":selected").data("gleas"), 10);
        console.log("gleason1 pattern chosen: "+gleas1);
        console.log("gleason2 pattern chosen: "+gleas2);
        console.log("gleason3 pattern chosen: "+gleas3);
        if (gleas3){
            var gtot = ""+gleas1 + gleas2 + gleas3;
        } else {
            gtot = ""+gleas1 + gleas2;
        }
        console.log("gleas concat:"+gtot);
        if ((gtot.match(/4/g) || []).length == 1) {
            $('.pct-4').show();
        } else {
            $('.pct-4').hide();
        }
        if ((gtot.match(/5/g) || []).length == 1) {
            $('.pct-5').show();
        } else {
            $('.pct-5').hide();

        }

    });

    $('#box12').on("change", function(){
        var sela = $('#box12').val();
        if (sela.indexOf("Present") > -1) {
            $('.epe-site').show();}
        else {$('.epe-site').hide();}
    });

    
    
    $('#box13').on("change", function(){
        var sel = $('#box13').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box13_2').show();}
        else {$('#box13_2').hide();}
    });

    $('#box16').on("change", function(){
        var sela = $('#box16').val();
        if (sela.indexOf("Involved") > -1) {
            $('#box16_3').show();}
        else {$('#box16_3').hide();}
    });

    $('#box19').on("change", function(){
        var sel = $('#box19').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box19_2').show();}
        else {$('#box19_2').hide();}
    });

    $('#box20').on("change", function(){
        var sel = $('#box20').val();
        if (sel.indexOf("Present") > -1) {

            $('#box20_2').show();}
        else {
            $('#box20_2').hide();}
    });

    $('#box22').on("change", function(){
        var sel = $('#box22').val();
        if ($.inArray('Other therapy effects', sel) >-1) {
            $('#box22_2').show();}
        else {$('#box22_2').hide();}
    });

    $("#box29").on("change", function(){
        if ($(this).is(":checked")){
            $(".lnchk").show();
        }
        else{
            $(".lnchk").hide();
        }
    });

    $("#box28").on("change", function(){
        var sel = $("#box28").val();
        if (sel != "pMx"){
            $("#box28_2").show();
        } else {
            $("#box28_2").hide();
        }
    });


    $("#box31").on("input", function() {
        var num = parseInt($(this).val(), 10);
        if (num > 0){
            $(".posnodes").show();
        } else {
            $(".posnodes").hide();
        }
    });

    $('#box32').on("change", function(){
        var sel = $('#box32').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box32_2').show();}
        else {$('#box32_2').hide();}
    });

    $('#box35').on("change", function(){
        var sela = $('#box35').val();
        var trig1 = sela.filter(el => el.indexOf('Inflammation') > -1);
        var trig2 = sela.filter(el => el.indexOf('Other') > -1);
        if (trig1.length > 0) {
            $('#box35_2').show();}
        else {$('#box35_2').hide();}
        if (trig2.length > 0) {
            $('#box35_3').show();}
        else {$('#box35_3').hide();}
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


        var captext = "Proastate Carcinoma Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1.indexOf("Other") > -1) {
            captext += "\nProcedure:\n- "  + box_1_2+ "\n";}
        else {captext += "\nProcedure:\n- "  + box_1+ "\n";}


        captext += "\n+ Prostate Size:\n";
        var box_2 = $("#box2").val();
        captext += "\t+ Weight: "  + box_2 + "g\n";

        var box_3 = $("#box3").val();
        captext += "\t+ Size: "  + box_3.replace(/cm/g, '') + "cm\n";

        var box_4 = $("#box4").val();
        var box_4_2 = $("#box4_2").val();
        if (box_4.indexOf("Other") > -1) {
            captext += "\n--------------------\nHistologic Type:\n- "  + box_4_2+ "\n";}
        else {captext += "\n--------------------\nHistologic Type:\n- "  + box_4+ "\n";}

        var gleas1 = parseInt($("#box5").find(":selected").data("gleas"), 10);
        var gleas2 = parseInt($("#box6").find(":selected").data("gleas"), 10);
        var gleas3 = parseInt($("#box7").find(":selected").data("gleas"), 10);
        var gtot = ""+gleas1+gleas2;

        var grgp = {
            "11":"Grade Group 1",
            "12":"Grade Group 1",
            "21":"Grade Group 1",
            "22":"Grade Group 1",
            "23":"Grade Group 1",
            "31":"Grade Group 1",
            "32":"Grade Group 1",
            "33":"Grade Group 1",
            "34":"Grade Group 2",
            "43":"Grade Group 3",
            "44":"Grade Group 4",
            "35":"Grade Group 4",
            "53":"Grade Group 4",
            "54":"Grade Group 5",
            "45":"Grade Group 5"
        }
        captext += "\n\tGleason Score: "+(gleas1 + gleas2)+" ("+gleas1+"+"+gleas2+")\n";
        captext += "\tGrade Group: "+grgp[gtot]+"\n";
        captext += "\n\nHistologic Grade:\n";
        var box_5 = $("#box5").val();
        captext += "\tPrimary Gleason Pattern: "  + box_5+ "\n";

        var box_6 = $("#box6").val();
        captext += "\tSecondary Gleason Pattern: "  + box_6+ "\n";

        var box_7 = $("#box7").val();
        if(box_7 != "Not applicable"){
            captext += "\tTertiary Gleason Pattern: "  + box_7+ "\n";}

        var box_8 = $("#box8").val();
        if (box_8.length > 0){
            captext += "\n\t+ Percentage of pattern 4: "  + box_8 + "%\n";
        }
        var box_9 = $("#box9").val();
        if (box_9.length > 0){
            captext += "\t+ Percentage of pattern 5: "  + box_9 + "%\n";
        }
        captext += "\n--------------------\n";



        var box_10 = $("#box10").val();
        captext += "\n+ Intraductal Carcinoma:\n- "  + box_10+ "\n";

        var box_11 = $("#box11").val();
        captext += "\nTumor Quantitation:\n- Percentage of prostate involved by tumor: "  + box_11 + "%\n";

        var box_12 = $("#box12").val();
        captext += "\nExtraprostatic Extension:\n- "  + box_12+ "\n";

        var box_13 = $("#box13").val();
        var box_13_2 = $("#box13_2").val();
        if ($.inArray('Other', box_13) >-1){
            captext += "\n+ Location of Extraprostatic Extension: "  + box_13.join(', ').replace(/Other/, box_13_2) + "\n";}
        else {captext += "\n+ Location of Extraprostatic Extension: "  + box_13.join(', ') + "\n";}

        var box_14 = $("#box14").val();
        captext += "\nUrinary Bladder Neck Invasion:\n- "  + box_14+ "\n";

        var box_15 = $("#box15").val();
        captext += "\nSeminal Vesicle Invasion:\n- "  + box_15+ "\n";

        var box_16 = $("#box16").val();
        captext += "\nMargins:\n- "+box_16+"\n";

        if (box_16.indexOf('Involved') > -1){

            // pos margins here
            var box_17 = $("#box17").val();
            captext += "\tExtent of margin involvement: "  + box_17+ "\n";

            var box_18 = $("#box18").val();
            captext += "\t+ Focality of margin involvement: "  + box_18+ "\n";

            var box_19 = $("#box19").val();
            var box_19_2 = $("#box19_2").val();
            if ($.inArray('Other', box_19) >-1){
                captext += "\tLocation of Positive Margins: "  + box_19.join(', ').replace(/Other/, box_19_2) + "\n";}
            else {captext += "\tLocation of Positive Margins: "  + box_19.join(', ') + "\n";}

        }







        var box_20 = $("#box20").val();
        var box_20_2 = $("#box20_2").val();
        if (box_20.indexOf("Present") > -1) {
            captext += "\n+ Margin Positivity in Area of Extraprostatic Extension:\n- Present, involving: "  + box_20_2+ "\n";}
        else {captext += "\n+ Margin Positivity in Area of Extraprostatic Extension:\n- "  + box_20+ "\n";}


        var box_21 = $("#box21").val();
        if(box_21 != "Not applicable"){
            captext += "\n+ Gleason Pattern at Positive Margin(s):\n- "  + box_21+ "\n";}

        var box_22 = $("#box22").val();
        var box_22_2 = $("#box22_2").val();
        if ($.inArray('Other therapy effects', box_22) >-1){
            captext += "\nTreatment Effect:\n- "  + box_22.join('\n- ').replace(/Other/, box_22_2) + "\n";}
        else {captext += "\nTreatment Effect:\n- "  + box_22.join('\n- ') + "\n";}

        var box_23 = $("#box23").val();
        captext += "\n+ Lymphovascular Invasion:\n- "  + box_23+ "\n";

        var box_24 = $("#box24").val();
        captext += "\n+ Perineural Invasion:\n- "  + box_24+ "\n";

        var box_25 = $("#box25").val();
        var box_26 = $("#box26").val();
        var box_27 = $("#box27").val();
        var box_28 = $("#box28").val();
        var box_28_2 = $("#box28_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_25 != "Not applicable"){
            if (box_28 != "pMx"){
                captext += box_25.join("")+" "+box_26+" "+box_27+" "+box_28+" (metastatic site(s): " + box_28_2 + ")\n";
            } else {
                captext += box_25.join("")+" "+box_26+" "+box_27+" "+box_28+"\n";
            }
        } else {
            if (box_28 != "pMx"){
                captext += box_26+" "+box_27+" "+box_28+" (metastatic site(s): " + box_28_2 + ")\n";
            } else {
                captext += box_26+" "+box_27+" "+box_28+"\n";
            }
        }
        if ($("#box29").is(':checked')) {
            var box_30 = $("#box30").val();
            var box_31 = $("#box31").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: "+box_30+
                "\n\tLymph nodes involved: "+box_31;

            var box_32 = $("#box32").val();
            var box_32_2 = $("#box32_2").val();
            if ($.inArray('Other', box_32) >-1){
                captext += "\n\tInvolved nodes: "  + box_32.join(', ').replace(/Other/, box_32_2)+"\n";}
            else {captext += "\n\tInvolved nodes: "  + box_32.join(', ')+"\n";}


            var box_33 = $("#box33").val();
            captext += "\n\t+ Size of Largest Metastatic Deposit: "  + box_33 + "cm\n";

            var box_34 = $("#box34").val();
            captext += "\n\t+ Extranodal Extension: "  + box_34+ "\n";


        } else {
            captext += "\nLymph nodes: None submitted\n";}





        var box_35 = $("#box35").val();
        var box_35_2 = $("#box35_2").val();
        var box_35_3 = $("#box35_3").val();
        var trig1_box_35 = box_35.filter(el => el.indexOf("Inflammation") > -1);
        var trig2_box_35 = box_35.filter(el => el.indexOf("Other") > -1);
        if ((trig1_box_35.length > 0 ) && (trig2_box_35.length == 0  )) {
            captext += "\n+ Additional Pathologic Findings:\n- "+box_35.join("\n- ").replace(/Inflammation/, "Inflammation: "+ box_35_2)+"\n";}
        else if ((trig1_box_35.length == 0 ) && (trig2_box_35.length > 0  )) {
            captext += "\n+ Additional Pathologic Findings:\n- "+box_35.join("\n- ").replace(/Other/, box_35_3)+"\n";}
        else if ((trig1_box_35.length > 0 ) && (trig2_box_35.length > 0  )) {
            captext += "\n+ Additional Pathologic Findings:\n- "+box_35.join("\n- ").replace(/Inflammation/, "Inflammation: "+ box_35_2).replace(/Other/, box_35_3)+"\n";}
        else {captext += "\n+ Additional Pathologic Findings:\n- "+box_35.join("\n- ")+"\n";}




        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});


/**
 * Created by Chandra Krishnan on 1/4/2018.
 */
