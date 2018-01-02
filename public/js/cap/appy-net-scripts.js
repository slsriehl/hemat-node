$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/




//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/


    $('#box1').on("change", function(){
        var sel = $('#box1').val().toLowerCase();
        console.log(sel);
        if (sel.indexOf("other") > -1) {
            console.log("Other chosen");
            $('#box1_2').show();
        }
        else {
            $('#box1_2').hide();
            $(".segmental").hide();
            if (sel.indexOf("colectomy") > -1){
                $(".segmental").show();
            } else {
                $(".segmental").hide();
            }
        }
    });

    $('#box1_2').on("input", function() {
        var sel = $('#box1_2').val().toLowerCase();
        $(".segmental").hide();
        if (sel.indexOf("colectomy") > -1){ //
            $(".segmental").show();
        } else {
            $(".segmental").hide();
        }
    });

    $('#box2').on("change", function(){
        var sel = $('#box2').val();
        if (sel.indexOf("Other") > -1) {

            $('#box2_2').show();}
        else {
            $('#box2_2').hide();}
    });


    $('#box10').on("change", function(){
        var sel = $('#box10').val();
        if (sel.indexOf('uninvolved') > -1){
            $('.negmargins').show();
            $('.posmargins').hide();
        }
        else {
            $('.negmargins').hide();
            $('.posmargins').show();
        }
    });


    $('#box22').on("change", function(){
        var sel = $('#box22').val();
        if (sel.indexOf("Not") < 0) {

            $('#box22_2').show();}
        else {
            $('#box2_2').hide();}
    });



    $('#box2').on("change", function(){
        var sel = $('#box2').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box2_2').show();}
        else {$('#box2_2').hide();}
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
        if (sel.indexOf("Cannot") < 0) {
            $('#box6_2').show();}
        else {
            $('#box6_2').hide();}
    });

    $('#box7').on("change", function(){
        var sel = $('#box7').val();
        if (sel.indexOf("Cannot") < 0) {
            $('#box7_2').show();}
        else {
            $('#box7_2').hide();}
    });
    
    $('#box8').on("change", function(){
        var sel = $('#box8').val();
        if (sel.indexOf("organs") > -1) {
            $('#box8_2').show();}
        else {
            $('#box8_2').hide();}
    });

    $('#box8').on("change", function(){
        var sel = $('#box8').val();
        if (sel.indexOf("organs") > -1) {
            $('#box8_2').show();}
        else {
            $('#box8_2').hide();}
    });

    $('#box11').on("change", function(){
        var sel = $('#box11').val();
        if (sel.indexOf("Other") > -1) {

            $('#box11_2').show();}
        else {
            $('#box11_2').hide();}
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
        if (sel == "pMx"){
            $("#box28_2").hide();
        } else {
            $("#box28_2").show();
        }
    });



    $('#box32').on("change", function(){
        var sel = $('#box32').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box32_2').show();}
        else {$('#box32_2').hide();}
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



        var captext = "Appendiceal Neuroendocrine Tumor Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

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

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if (box_5.indexOf("Other") > -1) {
            captext += "\nHistologic Type and Grade:\n- "  + box_5_2+ "\n";}
        else {captext += "\nHistologic Type and Grade:\n- "  + box_5+ "\n";}


        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6.indexOf("Cannot") < 0){
            captext += "\nMitotic Rate:\n- "  + box_6+ " (enumerated at "+box_6_2+" per 2 mm^2)\n";
        } else {
            captext += "\nMitotic Rate:\n- "  + box_6+ "\n";

        }

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if (box_7.indexOf("Cannot") < 0){
            captext += "\nKi-67 Proliferation Index:\n- "  + box_7+ " (enumerated at "+box_7_2+" %)\n";
        } else {
            captext += "\nKi-67 Proliferation Index:\n- "  + box_7+ "\n";
        }


        var box_8 = $("#box8").val();
        var box_8_2 = $("#box8_2").val();
        if(box_8 != "Not applicable"){
            if (box_8.indexOf("organs") > -1) {
                captext += "\nTumor Extension:\n- "  + box_8_2+ "\n";}
            else {captext += "\nTumor Extension:\n- "  + box_8+ "\n";}
        }



        var box_10 = $("#box10").val();
        var box_11 = $("#box11").val();
        var box_11_2 = $("#box11_2").val();
        if (box_10.indexOf("uninvolved") > -1) {
            captext += "\nMargins:\n- "+box_10;
            if ($.inArray('Other', box_11) >-1){
                captext += "\n- Margins examined: "  + box_11.join(', ').replace(/Other/, box_11_2) + "\n";
            } else {
                captext += "\n- Margins examined: "  + box_11.join(', ') + "\n";
            }
        }
        else if (box_10.indexOf("involved") > -1) {
            captext += "\nMargins:";
            console.log("margins involved");
            if (box_1.indexOf('colectomy') > -1) {// segmental resection
                var box_12 = $("#box12").val();
                captext += "\n- Proximal: "+box_12 +"\n";

                var box_13 = $("#box13").val();
                captext += "- Distal: "+box_13 +"\n";

                var box_14 = $("#box14").val();
                captext += "- Radial: "+box_14 +"\n";

            } else {
                var box_12 = $("#box12").val();
                captext += "\n- Proximal: "+box_12 +"\n";

                var box_14 = $("#box14").val();
                captext += "- Radial: "+box_14 +"\n";
            }
        }

        var box_22 = $("#box22").val();
        var box_22_2 = $("#box22_2").val();
        if (box_22.indexOf('Not') < 0){
            captext += "- "+box_22_2+" Margin: "  + box_22+ "\n";
        }


        var box_23 = $("#box23").val();
        captext += "\nLymphovascular Invasion:\n- "  + box_23+ "\n";

        var box_24 = $("#box24").val();
        captext += "\n+ Perineural Invasion:\n- "  + box_24+ "\n";

        var box_25 = $("#box25").val();
        var box_26 = $("#box26").val();
        var box_27 = $("#box27").val();
        var box_28 = $("#box28").val();
        var box_28_2 = $("#box28_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_25 != "Not applicable"){
            if (box_28 != "pMx") {
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
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: "+box_30+"\n\tLymph nodes involved: "+box_31+"\n";} else {
            captext += "\nLymph nodes: None submitted\n";}

        var box_32 = $("#box32").val();
        var box_32_2 = $("#box32_2").val();
        if ($.inArray('Other', box_32) >-1){
            captext += "\n+ Additional Pathologic Findings:\n- "  + box_32.join('\n- ').replace(/Other/, box_32_2) + "\n";}
        else {captext += "\n+ Additional Pathologic Findings:\n- "  + box_32.join('\n- ') + "\n";}




        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});



/**
 * Created by Chandra Krishnan on 12/30/2017.
 */
