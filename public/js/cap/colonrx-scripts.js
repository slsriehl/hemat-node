$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/




//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/

    $('#box1').on("change", function(){
        var sel = $('#box1').val().toLowerCase();
        var site = $('#box1').find(":selected").data("location");
        if (sel.indexOf("other") > -1) {
            console.log("Other chosen");
            $('#box1_2').show();
        }
        else {
            $('#box1_2').hide();
            $(".segmental").hide();
            $(".emr").hide();
            if (site.indexOf("resection") > -1){ // whipple
                $(".segmental").show();
            } else {
                $(".segmental").hide();
            }
            if (site.indexOf("emr") > -1){ // whipple
                $(".emr").show();
            } else {
                $(".emr").hide();
            }
        }
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

    $('#box14').on("change", function(){
        var sel = $('#box14').val();
        if (sel.indexOf('Uninvolved') > -1){
            $('#box14_1').show()
            $('#box14_2').show()
            $('.insitu').show();
        }
        else {
            $('#box14_1').hide()
            $('#box14_2').hide()
            $('.insitu').show();

        }
        if (sel.indexOf('Involved') > -1){
            $('#box14_3').show()
            $('.insitu').show();
        }
        else {
            $('#box14_3').hide()
            $('.insitu').show();

        }
    });

    $('#box15').on("change", function(){
        var sel = $('#box15').val();
        if (sel.indexOf("Not") < 0) {

            $('#box15_2').show();}
        else {
            $('#box15_2').hide();}
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
        if (sel.indexOf("Other") > -1) {

            $('#box6_2').show();}
        else {
            $('#box6_2').hide();}
    });

    $('#box7').on("change", function(){
        var sel = $('#box7').val();
        if (sel.indexOf("structures") > -1) {

            $('#box7_2').show();}
        else {
            $('#box7_2').hide();}
    });

    $('#box20').on("change", function(){
        var sel = $('#box20').val();
        if (sel.indexOf("Present") > -1) {

            $('#box20_2').show();}
        else {
            $('#box20_2').hide();}
    });

    $("#box25").on("change", function(){
        if ($(this).is(":checked")){
            $(".lnchk").show();
        }
        else{
            $(".lnchk").hide();
        }
    });

    $("#box24").on("change", function(){
        var sel = $("#box24").val();
        if (sel != "pMx"){
            $("#box24_2").show();
        } else {
            $("#box24_2").hide();
        }
    });



    $('#box28').on("change", function(){
        var sela = $('#box28').val();
        var trig1 = sela.filter(el => el.indexOf('type') > -1);
        var trig2 = sela.filter(el => el.indexOf('Other') > -1);
        if (trig1.length > 0) {
            $('#box28_2').show();}
        else {$('#box28_2').hide();}
        if (trig2.length > 0) {
            $('#box28_3').show();}
        else {$('#box28_3').hide();}
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



        var captext = "Colon Cancer (Resection) Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        captext += "\nProcedure:\n- "  + box_1+ "\n";


        var box_2 = $("#box2").val();
        captext += "\nTumor Site:\n- "  + box_2.join('\n- ') + "\n";

        var box_3 = $("#box3").val();
        captext += "\nTumor Size:\n- "  + box_3.replace(/cm/,'') + "cm\n";

        var box_4 = $("#box4").val();
        captext += "\nMacroscopic Tumor Perforation:\n- "  + box_4+ "\n";

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if (box_5.indexOf("Other") > -1) {
            captext += "\nHistologic Type:\n- "  + box_5_2+ "\n";}
        else {captext += "\nHistologic Type:\n- "  + box_5+ "\n";}


        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6.indexOf("Other") > -1) {
            captext += "\nHistologic Grade:\n- "  + box_6_2+ "\n";}
        else {captext += "\nHistologic Grade:\n- "  + box_6+ "\n";}


        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if (box_7.indexOf("structures") > -1) {
            captext += "\nTumor Extension:\n- "  +box_7.replace(/ structures/, ": "+box_7_2)+ "\n";}
        else {captext += "\nTumor Extension:\n- "  + box_7+ "\n";}


        var box_8 = $("#box8").val();
        var box_9 = $("#box9").val();
        var box_9_2 = $("#box9_2").val();
        if (box_8.indexOf("uninvolved") > -1) {
            captext += "\nMargins:\n- "+box_8;
            var box_9_3 = $("#box9_3").val();
            var box_9_4 = $("#box9_4").val();
            var box_9_5 = $("#box9_5").val();
            if ($.inArray('Other', box_9) >-1){
                captext += "\n- Margins examined: "  + box_9.join(', ').replace(/Other/, box_9_2) + "\n";
            } else {
                captext += "\n- Margins examined: "  + box_9.join(', ') + "\n";
            }
            captext += "+ Distance of invasive carcinoma from closest margin: "  + box_9_3.replace(/mm/,'') + "mm\n";
            if (box_9_4 != "n/a"){
                captext += "- Distance of tumor from radial margin: "  + box_9_4.replace(/mm/,'') + "mm\n";
            }
            if (box_9_5 != "n/a"){
                captext += "Distance of tumor from distal margin: "  + box_9_5.replace(/mm/,'') + "mm\n";
            }

        }
        else if (box_8.indexOf("involved") > -1) {
            var site = $('#box1').find(":selected").data("location");
            captext += "\nMargins:";
            console.log("margins involved");
            if (site.indexOf('resection') > -1) {// segmental resection
                var box_10 = $("#box10").val();
                var box_10_2 = $("#box10_2").val();
                if (box_10.indexOf("Uninvolved") > -1) {
                    captext += "\nProximal Margin:\n\t- "  + box_10+"\n\t- Distance of tumor from margin: "+box_10_2+ "mm\n";}
                else {captext += "\nProximal Margin:\n\t- "  + box_10+ "\n";}


                var box_11 = $("#box11").val();
                var box_11_2 = $("#box11_2").val();
                if (box_11.indexOf("Uninvolved") > -1) {
                    captext += "\nDistal Margin:\n\t- "  + box_11+"\n\t- Distance of tumor from margin: "+box_11_2+ "mm\n";}
                else {captext += "\nDistal Margin:\n\t- "  + box_11+ "\n";}


                var box_12 = $("#box12").val();
                var box_12_2 = $("#box12_2").val();
                if (box_12.indexOf("Uninvolved") > -1) {
                    captext += "\nRadial Margin:\n\t- "  + box_12+"\n\t- Distance of tumor from margin: "+box_12_2+ "mm\n";}
                else {captext += "\nnRadial Margin:\n\t- "  + box_12+ "\n";}

            } else if (site.indexOf('emr') > -1) {// emr
                var box_13 = $("#box13").val();
                var box_13_2 = $("#box13_2").val();
                if (box_13.indexOf("Uninvolved") > -1) {
                    captext += "\nDeep Margin:\n\t- "  + box_13+"\n\t- Distance of tumor from margin: "+box_13_2+ "mm\n";}
                else {captext += "\nDeep Margin:\n\t- "  + box_13+ "\n";}


                var box_14 = $("#box14").val();
                var box_14_1 = $("#box14_1").val();
                var box_14_2 = $("#box14_2").val();
                var box_14_3 = $("#box14_3").val();
                var box_14_4 = $("#box14_4").val();
                var filt = box_14_4.filter(el => el.indexOf('All') > -1);
                console.log(filt);
                if (box_14.indexOf("Uninvolved") > -1) {
                    captext += "\nMucosal Margin:\n\t- " + box_14 + "\n\t- Nearest margin to tumor: " + box_14_1 +
                        "\n\t- Distance of invasive tumor to this margin: " +
                        box_14_2 + "mm";
                    if (filt.length == 0){
                        captext += "\n\t- Pre-invasive tumor types involving margin: " + box_14_4.join(', ') + "\n";
                    } else {
                        captext += "\n\t- " + box_14_4.join(', ') + "\n";
                    }

                }

                else if (box_14.indexOf("Involved") > -1) {
                    captext += "\nMucosal Margin:\n\t- "+box_14+"\n\t- Margin involved: "+box_14_3;
                    if (filt.length == 0){
                        captext += "\n\t- Pre-invasive tumor types involving margin: " + box_14_4.join(', ') + "\n";
                    } else {
                        captext += "\n\t- " + box_14_4.join(', ') + "\n";
                    }

                }
                else {captext += "\nMucosal Margin:\n\t- "+box_14+"\n";}


            }
        } else {
            captext += "\n- "+box_8+"\n";
        }

        var box_15 = $("#box15").val();
        var box_15_2 = $("#box15_2").val();
        if (box_15.indexOf('Not') < 0){
            captext += "\n- "+box_15_2+" Margin: "  + box_15+ "\n";
        }var box_16 = $("#box16").val();
        captext += "\nTreatment Effect:\n- "  + box_16+ "\n";

        var box_17 = $("#box17").val();
        captext += "\nLymphovascular Invasion:\n- "  + box_17+ "\n";

        var box_18 = $("#box18").val();
        captext += "\nPerineural Invasion:\n- "  + box_18+ "\n";

        var box_19 = $("#box19").val();
        var box_19_2 = $("#box19_2").val();
            captext += "\n+ Tumor Budding:\n- # of buds in hotspot field: "+box_19_2+"\n- "  + box_19+ "\n";

        var box_20 = $("#box20").val();
        var box_20_2 = $("#box20_2").val();
        if (box_20.indexOf("Present") > -1) {
            captext += "\nTumor Deposits:\n- Present: "  + box_20_2+ " deposits\n";}
        else {captext += "\nTumor Deposits:\n- "  + box_20+ "\n";}


        var box_21 = $("#box21").val();
        var box_22 = $("#box22").val();
        var box_23 = $("#box23").val();
        var box_24 = $("#box24").val();
        var box_24_2 = $("#box24_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_21 != "Not applicable"){
            if (box_24 != "pMx"){
                captext += box_21.join("")+" "+box_22+" "+box_23+" "+box_24+" (metastatic site(s): " + box_24_2 + ")\n";
            } else {
                captext += box_21.join("")+" "+box_22+" "+box_23+" "+box_24+"\n";
            }
        } else {
            if (box_24 != "pMx"){
                captext += box_22+" "+box_23+" "+box_24+" (metastatic site(s): " + box_24_2 + ")\n";
            } else {
                captext += box_22+" "+box_23+" "+box_24+"\n";
            }
        }
        if ($("#box25").is(':checked')) {
            var box_26 = $("#box26").val();
            var box_27 = $("#box27").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: "+box_26+"\n\tLymph nodes involved: "+box_27+"\n";} else {
            captext += "\nLymph nodes: None submitted\n";}

        var box_28 = $("#box28").val();
        var box_28_2 = $("#box28_2").val();
        var box_28_3 = $("#box28_3").val();
        var trig1_box_28 = box_28.filter(el => el.indexOf("type") > -1);
        var trig2_box_28 = box_28.filter(el => el.indexOf("Other") > -1);
        if ((trig1_box_28.length > 0 ) && (trig2_box_28.length == 0  )) {
            captext += "\n+ Additional Pathologic Findings:\n- "+box_28.join("\n- ").replace(/type/, "type: "+ box_28_2)+"\n";}
        else if ((trig1_box_28.length == 0 ) && (trig2_box_28.length > 0  )) {
            captext += "\n+ Additional Pathologic Findings:\n- "+box_28.join("\n- ").replace(/Other/, box_28_3)+"\n";}
        else if ((trig1_box_28.length > 0 ) && (trig2_box_28.length > 0  )) {
            captext += "\n+ Additional Pathologic Findings:\n- "+box_28.join("\n- ").replace(/type/, "type: "+box_28_2).replace(/Other/, box_28_3)+"\n";}
        else {captext += "\n+ Additional Pathologic Findings:\n- "+box_28.join("\n- ")+"\n";}




        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});


