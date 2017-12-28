$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/

// form clone for multiple nodules
    var count = 2;
    $('.clone').on('click', function () {
        var num = $('.pblock').length;

            if (num < 5){
                // create the new element via clone(), and manipulate it's ID using newNum value
                var newElem = $('.pblock:first').clone(true);

               // $(newElem).append(remove);
                newElem.find(':input').attr('id', function(i, val) {
                    return val + count;
                });
                var header = "<h6 class='mt-3 text-info'>Tumor nodule #"+(count)+"</h6>";

                count++;
                // insert the new element after the last "duplicatable" input field
                $('.pblock:last').after(newElem);
                $('.pblock:last').before(header);
                $('.remove').hide();
                $('.remove:last').show();

            }

    });

    $('.remove').on('click', function (){
        $(this).closest('.pblock').remove();
        $(".text-info:last").remove();
        count--;
    });




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
        if (sel.indexOf("Multiple") > -1) {

            $('#box2_2').show();}
        else {
            $('#box2_2').hide();}
    });

    $('.site').on("change", function(){
        var sel = $(this).val();
        if (sel.indexOf('Other') > -1){
            $('.site_2').show();}
        else {$('.site_2').hide();}
        if (sel.indexOf('location') > -1){
            $('.site_3').show();}
        else {$('.site_3').hide();}
    });

    $('#box7').on("change", function(){
        var sel = $('#box7').val();
        if (sel.indexOf("Other") > -1) {

            $('#box7_2').show();}
        else {
            $('#box7_2').hide();}
    });

    $('#box8').on("change", function(){
        var sel = $('#box8').val();
        if (sel.indexOf("Other") > -1) {

            $('#box8_2').show();}
        else {
            $('#box8_2').hide();}
    });

    $('#box9').on("change", function(){
        var sel = $('#box9').val();
        if ($.inArray('organs', sel) >-1) {
            $('#box9_2').show();}
        else {$('#box9_2').hide();}
    });

    $('#box10').on("change", function(){
        var sela = $('#box10').val();
        if (sela.indexOf('Uninvolved') > -1){
            $('#box10_1').show();
            $('#box10_2').show();}
        else {$('#box10_1').hide();
            $('#box10_2').hide();}
        if (sela.indexOf("Involved") > -1) {
            $('#box10_3').show();}
        else {$('#box10_3').hide();}
    });

    $('#box11').on("change", function(){
        var sel = $('#box11').val();
        if (sel.indexOf("Not") < 0) {

            $('#box11_2').show();}
        else {
            $('#box11_2').hide();}
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



    $('#box21').on("change", function(){
        var sela = $('#box21').val();
        var trig1 = sela.filter(el => el.indexOf('Other') > -1);
        var trig2 = sela.filter(el => el.indexOf('hepatitis') > -1);
        if (trig1.length > 0) {
            $('#box21_2').show();}
        else {$('#box21_2').hide();}
        if (trig2.length > 0) {
            $('#box21_3').show();}
        else {$('#box21_3').hide();}
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



        var captext = "Hepatocellular Carcinoma Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1.indexOf("Other") > -1) {
            captext += "\nProcedure:\n- "  + box_1_2+ "\n";}
        else {captext += "\nProcedure:\n- "  + box_1+ "\n";}


        var box_2 = $("#box2").val();
        captext += "\nTumor Focality:\n- "  + box_2+ "\n";

        //--------------------------------------------------------------//

        // Tumor nodule #1

        // Tumor nodule #1

        var box_3_1 = $("#box3_1").val();
        var box_3_2 = $("#box3_2").val();
        var box_3_3 = $("#box3_3").val();
        captext += "\nTumor Characteristics: Primary Tumor nodule\n"
        if (box_3_1.indexOf("Other") > -1) {
            captext += "\tTumor Site: "+box_3_2+"\n";}
        else if (box_3_1.indexOf("location") > -1) {
            captext += "\tTumor Site: Segmental location, "+box_3_3+"\n";}
        else {captext += "\tTumor Site: "+box_3_1+"\n";}

        var box_4_1 = $("#box4_1").val();
        captext += "\tTumor Size: "  + box_4_1.replace(/cm/,'') + "cm\n";

        var box_5_1 = $("#box5_1").val();
        captext += "\tTreatment Effect: "  + box_5_1+ "\n";

        var box_6_1 = $("#box6_1").val();
        captext += "\t+ Satellitosis: "  + box_6_1+ "\n";

        // nodule #2
        if ( $('.pblock').length == 2) {
            var box_3_12 = $("#box3_12").val();
            var box_3_22 = $("#box3_22").val();
            var box_3_32 = $("#box3_32").val();
            captext += "\nTumor Characteristics: Tumor nodule #2\n"
            if (box_3_12.indexOf("Other") > -1) {
                captext += "\tTumor Site: "+box_3_22+"\n";}
            else if (box_3_12.indexOf("location") > -1) {
                captext += "\tTumor Site: Segmental location, "+box_3_32+"\n";}
            else {captext += "\tTumor Site: "+box_3_12+"\n";}

            var box_4_12 = $("#box4_12").val();
            captext += "\tTumor Size: "  + box_4_12.replace(/cm/,'') + "cm\n";

            var box_5_12 = $("#box5_12").val();
            captext += "\tTreatment Effect: "  + box_5_12+ "\n";

            var box_6_12 = $("#box6_12").val();
            captext += "\t+ Satellitosis: "  + box_6_12+ "\n";
        }

        // nodule #3
        if ( $('.pblock').length == 3) {
            var box_3_13 = $("#box3_13").val();
            var box_3_23 = $("#box3_22").val();
            var box_3_33 = $("#box3_32").val();
            captext += "\nTumor Characteristics: Tumor nodule #3\n"
            if (box_3_13.indexOf("Other") > -1) {
                captext += "\tTumor Site: "+box_3_23+"\n";}
            else if (box_3_13.indexOf("location") > -1) {
                captext += "\tTumor Site: Segmental location, "+box_3_33+"\n";}
            else {captext += "\tTumor Site: "+box_3_13+"\n";}

            var box_4_13 = $("#box4_13").val();
            captext += "\tTumor Size: "  + box_4_13.replace(/cm/,'') + "cm\n";

            var box_5_13 = $("#box5_13").val();
            captext += "\tTreatment Effect: "  + box_5_13+ "\n";

            var box_6_13 = $("#box6_13").val();
            captext += "\t+ Satellitosis: "  + box_6_13+ "\n";
        }

        // nodule #4
        if ( $('.pblock').length == 4) {
            var box_3_14 = $("#box3_14").val();
            var box_3_24 = $("#box3_22").val();
            var box_3_34 = $("#box3_32").val();
            captext += "\nTumor Characteristics: Tumor nodule #4\n"
            if (box_3_14.indexOf("Other") > -1) {
                captext += "\tTumor Site: "+box_3_24+"\n";}
            else if (box_3_14.indexOf("location") > -1) {
                captext += "\tTumor Site: Segmental location, "+box_3_34+"\n";}
            else {captext += "\tTumor Site: "+box_3_14+"\n";}

            var box_4_14 = $("#box4_14").val();
            captext += "\tTumor Size: "  + box_4_14.replace(/cm/,'') + "cm\n";

            var box_5_14 = $("#box5_14").val();
            captext += "\tTreatment Effect: "  + box_5_14+ "\n";

            var box_6_14 = $("#box6_14").val();
            captext += "\t+ Satellitosis: "  + box_6_14+ "\n";
        }

        // nodule #5
        if ( $('.pblock').length == 5) {
            var box_3_15 = $("#box3_15").val();
            var box_3_25 = $("#box3_22").val();
            var box_3_35 = $("#box3_32").val();
            captext += "\nTumor Characteristics: Tumor nodule #2\n"
            if (box_3_15.indexOf("Other") > -1) {
                captext += "\tTumor Site: "+box_3_25+"\n";}
            else if (box_3_15.indexOf("location") > -1) {
                captext += "\tTumor Site: Segmental location, "+box_3_35+"\n";}
            else {captext += "\tTumor Site: "+box_3_15+"\n";}

            var box_4_15 = $("#box4_15").val();
            captext += "\tTumor Size: "  + box_4_15.replace(/cm/,'') + "cm\n";

            var box_5_15 = $("#box5_15").val();
            captext += "\tTreatment Effect: "  + box_5_15+ "\n";

            var box_6_15 = $("#box6_15").val();
            captext += "\t+ Satellitosis: "  + box_6_15+ "\n";
        }




        //-----------------------------------------------//

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if (box_7.indexOf("Other") > -1) {
            captext += "\nHistologic Type:\n- "  + box_7_2+ "\n";}
        else {captext += "\nHistologic Type:\n- "  + box_7+ "\n";}


        var box_8 = $("#box8").val();
        var box_8_2 = $("#box8_2").val();
        if (box_8.indexOf("Other") > -1) {
            captext += "\nHistologic Grade:\n- "  + box_8_2+ "\n";}
        else {captext += "\nHistologic Grade:\n- "  + box_8+ "\n";}


        var box_9 = $("#box9").val();
        var box_9_2 = $("#box9_2").val();
        if ($.inArray('organs', box_9) >-1){
            captext += "\nTumor Extension:\n- "  + box_9.join('\n- ').replace(/organs/, "organs: " + box_9_2) + "\n";}
        else {captext += "\nTumor Extension:\n- "  + box_9.join('\n- ') + "\n";}

        var box_10 = $("#box10").val();
        var box_10_2 = $("#box10_2").val();
        if (box_10.indexOf("Uninvolved") > -1) {
            captext += "\nMargins - Parenchymal:\n\t- "+box_10+"\n\t- Distance to this margin: " + box_10_2.replace(/mm/,"")+"mm\n";}
        else {captext += "\nMargins - Parenchymal:\n\t- "+box_10+"\n";}

        var box_11 = $("#box11").val();
        var box_11_2 = $("#box11_2").val();
        if(box_11 != "Not applicable"){
            if (box_11.indexOf("Not") < 0) {
                captext += "\nMargins - "+box_11_2+":\n\t- "  + box_11+ "\n";}
            else {captext += "\nMargins -"+box_11_2+":\n\t- "  + box_11+ "\n";}
        }


        var box_12 = $("#box12").val();
        captext += "\nVascular Invasion:\n- "  + box_12+ "\n";

        var box_13 = $("#box13").val();
        captext += "\n+ Perineural Invasion:\n- "  + box_13+ "\n";

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
            captext += "\nLymph nodes: None submitted\n";}

        var box_21 = $("#box21").val();
        var box_21_2 = $("#box21_2").val();
        var box_21_3 = $("#box21_3").val();
        var trig1_box_21 = box_21.filter(el => el.indexOf("Other") > -1);
        var trig2_box_21 = box_21.filter(el => el.indexOf("hepatitis") > -1);
        if ((trig1_box_21.length > 0 ) && (trig2_box_21.length == 0  )) {
            captext += "\n+ Additional Pathologic Findings:\n- "+box_21.join("\n- ").replace(/Other/, box_21_2)+"\n";}
        else if ((trig1_box_21.length == 0 ) && (trig2_box_21.length > 0  )) {
            captext += "\n+ Additional Pathologic Findings:\n- "+box_21.join("\n- ").replace(/hepatitis/, "hepatitis: "+box_21_3)+"\n";}
        else if ((trig1_box_21.length > 0 ) && (trig2_box_21.length > 0  )) {
            captext += "\n+ Additional Pathologic Findings:\n- "+box_21.join("\n- ").replace(/Other/, box_21_2).replace(/hepatitis/, "hepatitis: "+box_21_3)+"\n";}
        else {captext += "\n+ Additional Pathologic Findings:\n- "+box_21.join("\n- ")+"\n";}




        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});


/**
 * Created by Chandra Krishnan on 12/27/2017.
 */
