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
            if ((sel.indexOf("whipple") < 0)){ // not whipple
                $(".segmental").show();
                $(".whipple").hide();
            } else {
                $(".segmental").hide();
                $(".whipple").show();
            }
        }
    });

    $('#box1_2').on("input", function() {
        var sel = $('#box1_2').val().toLowerCase();
        if ((sel.indexOf("whipple") < 0)){ // not whipple
            $(".segmental").show();
            $(".whipple").hide();
        } else {
            $(".segmental").hide();
            $(".whipple").show();
        }
    });



    $('#box2').on("change", function(){
        var sel = $('#box2').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box2_2').show();}
        else {$('#box2_2').hide();}
    });

    $('#box4').on("change", function(){
        var sel = $('#box4').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box4_2').show();}
        else {$('#box4_2').hide();}
    });

    $('#box6').on("change", function(){
        var sel = $('#box6').val();
        if ($.inArray('structures', sel) >-1) {
            $('#box6_2').show();}
        else {$('#box6_2').hide();}
    });

    $('#box8').on("change", function(){
        var sel = $('#box8').val();
        if (sel.indexOf('uninvolved') > -1){
            $('.negmargins').show();
            $('.posmargins').hide();
        }
        else {
            $('.negmargins').hide();
            $('.posmargins').show();
        }
    });



    $('#box9').on("change", function(){
        var sela = $('#box9').val();
        var neg = sela.filter(el => el.indexOf('Uninvolved') > -1);
        var pos = sela.filter(el => el.indexOf('Involved') > -1);
        if (neg.length > 0) {
            $('#box9_2').show();}
        else {
            $('#box9_2').hide();}
    });

    $('#box10').on("change", function(){
        var sela = $('#box10').val();
        var neg = sela.filter(el => el.indexOf('Uninvolved') > -1);
        var pos = sela.filter(el => el.indexOf('Involved') > -1);
        if (neg.length > 0) {
            $('#box10_2').show();}
        else {
            $('#box10_2').hide();}

    });

    $('#box11').on("change", function(){
        var sela = $('#box11').val();
        var neg = sela.filter(el => el.indexOf('Uninvolved') > -1);
        var pos = sela.filter(el => el.indexOf('Involved') > -1);
        if (neg.length > 0) {
            $('#box11_2').show();}
        else {
            $('#box11_2').hide();}

    });

    $('#box12').on("change", function(){
        var sela = $('#box12').val();
        if (sela.indexOf('Uninvolved') > -1){
            $('#box12_2').show();}
        else {
            $('#box12_2').hide();}
    });

    $('#box13').on("change", function(){
        var sela = $('#box13').val();
        var neg = sela.filter(el => el.indexOf('Uninvolved') > -1);
        var pos = sela.filter(el => el.indexOf('Involved') > -1);
        if (neg.length > 0) {

            $('#box13_2').show();}
        else {
            $('#box13_2').hide();}

    });

    $('#box16').on("change", function(){
        var sela = $('#box16').val();
        var neg = sela.filter(el => el.indexOf('Uninvolved') > -1);
        var pos = sela.filter(el => el.indexOf('Involved') > -1);
        if (neg.length > 0) {

            $('#box16_2').show();}
        else {
            $('#box16_2').hide();}

    });

    $('#box17').on("change", function(){
        var sel = $('#box17').val();
        if (sel.indexOf("Not") < 0) {

            $('#box17_2').show();}
        else {
            $('#box17_2').hide();}
    });

    $("#box24").on("change", function(){
        if ($(this).is(":checked")){
            $(".lnchk").show();
        }
        else{
            $(".lnchk").hide();
        }
    });

    $("#box23").on("change", function(){
        var sel = $("#box23").val();
        if (sel != "pMx"){
            $("#box23_2").show();
        } else {
            $("#box23_2").hide();
        }
    });



    $('#box26').on("change", function(){
        var sel = $('#box26').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box26_2').show();}
        else {$('#box26_2').hide();}
    });

    $('#box27').on("change", function(){
        var sel = $('#box27').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box27_2').show();}
        else {$('#box27_2').hide();}
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



        var captext = "Distal Bile Duct Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1.indexOf("Other") > -1) {
            captext += "\nProcedure:\n- "  + box_1_2+ "\n";}
        else {captext += "\nProcedure:\n- "  + box_1+ "\n";}


        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if ($.inArray('Other', box_2) >-1){
            captext += "\nTumor Site:\n- "  + box_2.join('\n- ').replace(/Other/, box_2_2) + "\n";}
        else {captext += "\nTumor Site:\n- "  + box_2.join('\n- ') + "\n";}

        var box_3 = $("#box3").val();
        captext += "\nTumor Size:\n- "  + box_3.replace(/cm/,'') + "cm\n";

        var box_4 = $("#box4").val();
        var box_4_2 = $("#box4_2").val();
        if ($.inArray('Other', box_4) >-1){
            captext += "\nHistologic Type:\n- "  + box_4.join('\n- ').replace(/Other/, box_4_2) + "\n";}
        else {captext += "\nHistologic Type:\n- "  + box_4.join('\n- ') + "\n";}

        var box_5 = $("#box5").val();
        captext += "\nHistologic Grade:\n- "  + box_5+ "\n";

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if ($.inArray('structures', box_6) >-1){
            captext += "\nTumor Extension:\n- "  + box_6.join('\n- ').replace(/structures/, box_6_2) + "\n";}
        else {captext += "\nTumor Extension:\n- "  + box_6.join('\n- ') + "\n";}

        var box_7 = $("#box7").val();
        captext += "\nDepth of Tumor Extension:\n- "  + box_7+ "\n";

        var box_8 = $("#box8").val();
        var box_27 = $("#box27").val();
        var box_27_2 = $("#box27_2").val();
        if (box_8.indexOf("uninvolved") > -1) {
            captext += "\nMargins:\n- "+box_8;
                if ($.inArray('Other', box_27) >-1){
                    captext += "\nMargins examined: "  + box_27.join(', ').replace(/Other/, box_27_2) + "\n";
                } else {
                    captext += "\nMargins examined: "  + box_27.join(', ') + "\n";
                }
            }
            else if (box_8.indexOf("involved") > -1) {
                captext += "\nMargins:";
                console.log("margins involved");
                if (box_1.indexOf('Whipple') < 0) {// not whipple
                    console.log("not whipple margins");
                var box_9 = $("#box9").val();
                var box_9_2 = $("#box9_2").val();
                captext += "\n- Proximal Bile duct:\n";
                var negbox_9 = box_9.filter(el => el.indexOf("Uninvolved") > -1);
                var posbox_9 = box_9.filter(el => el.indexOf("Involved") > -1);
                if (negbox_9.length > 0 ) {
                    captext += "\t- "+negbox_9+"\n\t- Distance of invasive carcinoma to the margin: " + box_9_2.replace(/mm/,"")+"mm\n";}
                if (posbox_9.length > 0  ) {
                    captext += "\t- "+posbox_9+"\n";}

                var box_10 = $("#box10").val();
                var box_10_2 = $("#box10_2").val();
                captext += "\n- Distal Bile duct:\n";
                var negbox_10 = box_10.filter(el => el.indexOf("Uninvolved") > -1);
                var posbox_10 = box_10.filter(el => el.indexOf("Involved") > -1);
                if ((negbox_10.length > 0 ) && (posbox_10.length == 0  )) {
                    captext += "\t- "+negbox_10+"\n\t- Distance of invasive carcinoma to this margin: " + box_10_2.replace(/mm/,"")+"mm\n";}
                else if ((negbox_10.length == 0 ) && (posbox_10.length > 0  )) {
                    captext += "\t- "+posbox_10+"\n";}

                var box_16 = $("#box16").val();
                var box_16_2 = $("#box16_2").val();
                captext += "\n- Radial:\n";
                var negbox_16 = box_16.filter(el => el.indexOf("Uninvolved") > -1);
                var posbox_16 = box_16.filter(el => el.indexOf("Involved") > -1);
                if (negbox_16.length > 0 ) {
                    captext += "\t- "+negbox_16+"\n\t- Distance of invasive carcinoma to this margin: " + box_16_2.replace(/mm/,"")+"mm\n";}
                if (posbox_16.length > 0  ) {
                    captext += "\t- "+posbox_16+"\n";}

            } else { // whipple procedure
                    console.log("yes whipple margins");
                    var box_11 = $("#box11").val();
                    var box_11_2 = $("#box11_2").val();
                    var negbox_11 = box_11.filter(el => el.indexOf("Uninvolved") > -1);
                    var posbox_11 = box_11.filter(el => el.indexOf("Involved") > -1);
                    captext += "\n- Pancreatic neck/parenchymal:\n";
                    if (negbox_11.length > 0 ) {
                        captext += "\t- "+negbox_11+"\n\t- Distance of invasive carcinoma to this margin: " + box_11_2.replace(/mm/,"")+"mm\n";}
                    if (posbox_11.length > 0  ) {
                        captext += "\t- "+posbox_11+"\n";}

                    var box_12 = $("#box12").val();
                    var box_12_2 = $("#box12_2").val();
                    if (box_12.indexOf("Uninvolved") > -1) {
                        captext += "\n - Uncinate:\n\t- "+box_12+"\n\t- Distance of invasive carcinoma to this margin: " + box_12_2.replace(/mm/,"")+"mm\n";}
                    else if (box_12.indexOf("Involved") > -1) {
                        captext += "\n- Uncinate:\n\t- "+box_12+"\n";}
                    else {captext += "\n- Uncinate:\n\t- "+box_12+"\n";}

                    var box_13 = $("#box13").val();
                    var box_13_2 = $("#box13_2").val();
                    captext += "\n- Bile duct:\n";
                    var negbox_13 = box_13.filter(el => el.indexOf("Uninvolved") > -1);
                    var posbox_13 = box_13.filter(el => el.indexOf("Involved") > -1);
                    if (negbox_13.length > 0 ) {
                        captext += "\t- "+negbox_13+"\n\t- Distance of invasive carcinoma to this margin: " + box_13_2.replace(/mm/,"")+"mm\n";}
                    if (posbox_13.length > 0  ) {
                        captext += "\t- "+posbox_13+"\n";}

                    var box_14 = $("#box14").val();
                    captext += "\n- Proximal Margin:\n\t- "  + box_14.join('\n\t- ') + "\n";

                    var box_15 = $("#box15").val();
                    captext += "\n- Distal Margin:\n\t- "  + box_15.join('\n\t- ') + "\n";
                }
        }

        var box_17 = $("#box17").val();
        var box_17_2 = $("#box17_2").val();
        if (box_17.indexOf('Not') < 0){
            captext += "\n- "+box_17_2+" Margin:\n\t- "  + box_17+ "\n";
        }


        var box_18 = $("#box18").val();
        captext += "\nLymphovascular Invasion:\n- "  + box_18+ "\n";

        var box_19 = $("#box19").val();
        captext += "\nPerineural Invasion:\n- "  + box_19+ "\n";

        var box_20 = $("#box20").val();
        var box_21 = $("#box21").val();
        var box_22 = $("#box22").val();
        var box_23 = $("#box23").val();
        var box_23_2 = $("#box23_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_20 != "Not applicable"){
            if (box_23 != "pMx"){
                captext += box_20.join("")+" "+box_21+" "+box_22+" "+box_23+" (metastatic site(s): " + box_23_2 + ")\n";
            } else {
                captext += box_20.join("")+" "+box_21+" "+box_22+" "+box_23+"\n";
            }
        } else {
            if (box_23 != "pMx"){
                captext += box_21+" "+box_22+" "+box_23+" (metastatic site(s): " + box_23_2 + ")\n";
            } else {
                captext += box_21+" "+box_22+" "+box_23+"\n";
            }
        }
        if ($("#box24").is(':checked')) {
            var box_25 = $("#box25").val();
            var box_26 = $("#box26").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: "+box_25+"\n\tLymph nodes involved: "+box_26+"\n";} else {
            captext += "\nLymph nodes: None submitted\n";}

        var box_28 = $("#box28").val();
        var box_28_2 = $("#box28_2").val();
        if ($.inArray('Other', box_28) >-1){
            captext += "\n+ Additional Pathologic Findings:\n- "  + box_28.join('\n- ').replace(/Other/, box_28_2) + "\n";}
        else {captext += "\n+ Additional Pathologic Findings:\n- "  + box_28.join('\n- ') + "\n";}




        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});


/**
 * Created by Chandra Krishnan on 12/20/2017.
 */
