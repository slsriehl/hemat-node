$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/




//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/

    $('#box1').on("change", function(){
        var sel = $('#box1').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box1_2').show();}
        else {$('#box1_2').hide();}
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
        if (sel.indexOf("type") > -1) {

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
        if (sel.indexOf("Present") > -1) {
            if (sel.indexOf("measured") > -1){
                $(".measure-inv").show();
            }else{
                $(".measure-inv").hide();
            }
            if (sel.indexOf("estimated") > -1){
                $(".estimate-inv").show();
            } else {
                $(".estimate-inv").hide();
            }

            $('#box6_2').show();
        }
        else {
            $('#box6_2').hide();}
    });

    $('#box9').on("change", function(){
        var sel = $('#box9').val();
        if (sel.indexOf("cannot be determined") > -1) {
            $('#box9_2').show();
            $('.inv').hide();

        }
        else {
            $('#box9_2').hide();
            $('.inv').show();

        }
    });$('#box13').on("change", function(){
        var sel = $('#box13').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box13_2').show();}
        else {$('#box13_2').hide();}
    });

    $('#box14').on("change", function(){
        var sel = $('#box14').val();
        if (sel.indexOf("explain") > -1) {

            $('#box14_2').show();}
        else {
            $('#box14_2').hide();}
    });

    $('#box15').on("change", function(){
        var sel = $('#box15').val();
        if (sel.indexOf("Uninvolved") > -1) {

            $('#box15_2').show();}
        else {
            $('#box15_2').hide();}
    });

    $('#box16').on("change", function(){
        var sel = $('#box16').val();
        if (sel.indexOf("Uninvolved") > -1) {

            $('#box16_2').show();}
        else {
            $('#box16_2').hide();}
    });

    $("#box21").on("change", function(){
        if ($(this).is(":checked")){
            $(".lnchk").show();
        }
        else{
            $(".lnchk").hide();
        }
    });

    $("#box20").on("change", function(){
        var sel = $("#box20").val();
        if (sel != "pMx"){
            $("#box20_2").show();
        } else {
            $("#box20_2").hide();
        }
    });
    var pelnodes = 0;
    $(".pelnode").on("input", function(){
        pelnodes = pelnodes + parseInt($(this).val(), 10);
        console.log("# pos pelvic nodes: "+pelnodes);
        if (pelnodes > 0){
            $(".pelnodes").show();
        } else {
            $(".pelnodes").hide();
        }
    });

    var paranodes = 0;
    $(".paranode").on("input", function(){
        paranodes = paranodes + parseInt($(this).val(), 10);
        console.log("# pos paravic nodes: "+paranodes);
        if (paranodes > 0){
            $(".paranodes").show();
        } else {
            $(".paranodes").hide();
        }
    });
    
    $('#box40').on("change", function(){
        var sel = $('#box40').val();
        if (sel.indexOf("Other") > -1) {

            $('#box40_2').show();}
        else {
            $('#box40_2').hide();}
    });

    $('#box41').on("change", function(){
        var sel = $('#box41').val();
        if (sel.indexOf("Other") > -1) {

            $('#box41_2').show();}
        else {
            $('#box41_2').hide();}
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

        $('input:visible').each(function () {
            // Check if at least one selection is made
            if ($.trim($(this).val()).length > 0) {
                $(this).removeClass('empty');
            } else {
                    $(this).addClass('empty');
                    $('#cap-valid').show();
                }
        });

        // ***************** END VALIDATION ********************//

        var captext = "Endometrial Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if ($.inArray('Other', box_1) >-1){
            captext += "\nProcedure:\n- "  + box_1.join('\n- ').replace(/Other/, box_1_2) + "\n";}
        else {captext += "\nProcedure:\n- "  + box_1.join('\n- ') + "\n";}

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if (box_2.indexOf("Other") > -1) {
            captext += "\n+Specimen Integrity:\n- "  + box_2_2+ "\n";}
        else {captext += "\n+Specimen Integrity:\n- "  + box_2+ "\n";}


        var box_3 = $("#box3").val();
        captext += "\n+ Tumor Size:\n- "  + box_3.replace(/cm/,'') + "cm\n";

        var box_4 = $("#box4").val();
        var box_4_2 = $("#box4_2").val();
        if (box_4.indexOf("type") > -1) {
            captext += "\nHistologic Type:\n- "  + box_4.replace(/,.*type/, ": "+box_4_2)+ "\n";}
        else {captext += "\nHistologic Type:\n- "  + box_4+ "\n";}


        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if(box_5 != "Not applicable"){
            if (box_5.indexOf("Other") > -1) {
                captext += "\nHistologic Grade:\n- "  + box_5_2+ "\n";}
            else {captext += "\nHistologic Grade:\n- "  + box_5+ "\n";}
        }


        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6.indexOf("Present") > -1) {
            captext += "\nMyometrial Invasion:\n- Present";

            if (box_6.indexOf('measured') >-1) {
                var box_7 = parseInt($("#box7").val(), 10);
                captext += "\n\tDepth of invasion: " + box_7 + "mm\n";

                var box_8 = parseInt($("#box8").val(), 10);
                var pct = (box_7/box_8)*100;
                captext += "\tMyometrial thickness: " + box_8 + "mm\n\tPercentage of myometrial invasion: "+pct.toFixed(1)+"%\n";

            }
            if (box_6.indexOf('estimated') >-1) {

                var box_9 = $("#box9").val();
                var box_9_2 = $("#box9_2").val();
                if (box_9.indexOf("cannot be determined") > -1) {
                    captext += "\n\tDepth of invasion and/or thickness cannot be determined, due to: " + box_9_2 + "\n";
                }
                else {
                    captext += ": " + box_9 + "\n";
                }
            }

        }
        else {captext += "\nMyometrial Invasion:\n- "  + box_6+ "\n";}

        var box_10 = $("#box10").val();
        captext += "\n+ Adenomyosis:\n- "  + box_10+ "\n";

        var box_11 = $("#box11").val();
        captext += "\nUterine Serosa Involvement:\n- "  + box_11+ "\n";

        var box_12 = $("#box12").val();
        captext += "\nCervical Stromal Involvement:\n- "  + box_12+ "\n";

        var box_13 = $("#box13").val();
        var box_13_2 = $("#box13_2").val();
        if ($.inArray('Other', box_13) >-1){
            captext += "\nOther Tissue/Organ Involvement:\n- "  + box_13.join('\n- ').replace(/Other/, box_13_2) + "\n";}
        else {captext += "\nOther Tissue/Organ Involvement:\n- "  + box_13.join('\n- ') + "\n";}

        var box_14 = $("#box14").val();
        var box_14_2 = $("#box14_2").val();
        if (box_14.indexOf("explain") > -1) {
            captext += "\n+ Peritoneal/ Ascitic Fluid:\n- "  + box_14.replace(/\ (explain\)/, ", reason: "+box_14_2)+ "\n";}
        else {captext += "\n+ Peritoneal/ Ascitic Fluid:\n- "  + box_14+ "\n";}


        var box_15 = $("#box15").val();
        var box_15_2 = $("#box15_2").val();
        if(box_15 != "Not applicable"){
            if (box_15.indexOf("Uninvolved") > -1) {
                captext += "\nEctocervical/Vaginal Cuff Margin:\n- Uninvolved by carcinoma\n- Distance of invasive carcinoma to margin: "  + box_15_2+ "cm\n";}
            else {captext += "\nEctocervical/Vaginal Cuff Margin:\n- "  + box_15+ "\n";}
        }


        var box_16 = $("#box16").val();
        var box_16_2 = $("#box16_2").val();
        if(box_16 != "Not applicable"){
            if (box_16.indexOf("Uninvolved") > -1) {
                captext += "\nParametrial/Paracervical Margin:\n- Uninvolved by carcinoma\n- Distance of invasive carcinoma to margin: "  + box_16_2+ "cm\n";}
            else {captext += "\nParametrial/Paracervical Margin:\n- "  + box_16+ "\n";}
        }


        var box_17 = $("#box17").val();
        var box_18 = $("#box18").val();
        var box_19 = $("#box19").val();
        var box_20 = $("#box20").val();
        var box_20_2 = $("#box20_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if ($("#box21").is(':checked')) { // check if nodes are present
            var pelsen = parseInt($("#box22").val(), 10) - parseInt($("#box23").val(), 10);
            console.log("pel: "+pelsen);
            var parasen = parseInt($("#box30").val(), 10) - parseInt($("#box31").val(), 10);
            console.log("para: "+parasen);
            console.log("pel+para:"+(pelsen + parasen));
            if ((pelsen + parasen) === 0) { // check if only sentinel nodes are sampled, total - sentinel should be 0
                box_19 = box_19.concat("(sn)");
                console.log("sn applied");
            } else {
                box_19 = box_19.replace("(sn)", "");
                console.log("sn not applied");
            }
        }

        if (box_17 != "Not applicable"){
            if (box_20 != "pMx"){
                captext += box_17.join("")+" "+box_18+" "+box_19+" "+box_20+" (metastatic site(s): " + box_20_2 + ")\n";
            } else {
                captext += box_17.join("")+" "+box_18+" "+box_19+" "+box_20+"\n";
            }
        } else {
            if (box_20 != "pMx"){
                captext += box_18+" "+box_19+" "+box_20+" (metastatic site(s): " + box_20_2 + ")\n";
            } else {
                captext += box_18+" "+box_19+" "+box_20+"\n";
            }
        }


        if ($("#box21").is(':checked')) {
            var box_22 = parseInt($("#box22").val(), 10);
            var box_23 = parseInt($("#box23").val(), 10);
            var box_24 = $("#box24").val();
            var box_25 = parseInt($("#box25").val(), 10);
            var box_26 = parseInt($("#box26").val(), 10);
            var box_27 = parseInt($("#box27").val(), 10);
            var box_28 =$("#box28").val();
            captext += "\nLymph nodes: Pelvic" +
                        "\n\tTotal Pelvic Nodes Examined: "+box_22;
                        if (box_22 > 0) {

                            captext+="\n\tTotal Pelvic Sentinel Nodes Examined: " + box_23 +
                            "\n\tLaterality of Pelvic Node(s) Examined: " + box_24 +
                            "\n\tPelvic Nodes with Macrometastasis: " + box_25 +
                            "\n\tPelvic Nodes with Micrometastasis: " + box_26 +
                            "\n\tPelvic Nodes with Isolated Tumor Cells: " + box_27;
                            if (pelnodes > 0){
                                captext+= "\n\tLaterality of Pelvic Node(s) with Tumor: "+box_28+"\n";
                            }
                        }

            var box_30 = parseInt($("#box30").val(), 10);
            var box_31 = parseInt($("#box31").val(), 10);
            var box_32 = $("#box32").val();
            var box_33 = parseInt($("#box33").val(), 10);
            var box_34 = parseInt($("#box34").val(), 10);
            var box_35 = parseInt($("#box35").val(), 10);
            var box_36 = $("#box36").val();
            captext += "\n\nLymph nodes: Para-Aortic" +
                "\n\tTotal Para-Aortic Nodes Examined: "+box_30;
            if (box_30 > 0) {

                captext+="\n\tTotal Para-Aortic Sentinel Nodes Examined: " + box_31 +
                    "\n\tLaterality of Para-Aortic Node(s) Examined: " + box_32 +
                    "\n\tPara-Aortic Nodes with Macrometastasis: " + box_33 +
                    "\n\tPara-Aortic Nodes with Micrometastasis: " + box_34 +
                    "\n\tPara-Aortic Nodes with Isolated Tumor Cells: " + box_35;
                if (paranodes > 0){
                    captext+= "\n\tLaterality of Para-Aortic Node(s) with Tumor: "+box_36+"\n";
                }
            }           
                        
                        
                        
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_40 = $("#box40").val();
        var box_40_2 = $("#box40_2").val();
        if (box_40.indexOf("Other") > -1) {
            captext += "\n\n+ Additional Pathologic Findings:\n- "  + box_40_2+ "\n";}
        else {captext += "\n\n+ Additional Pathologic Findings:\n- "  + box_40+ "\n";}



        var box_41 = $("#box41").val();
        var box_41_2 = $("#box41_2").val();
        if (box_41.indexOf("Other") > -1) {
            captext += "\n+ Clinical History:\n- "  + box_41_2+ "\n";}
        else {captext += "\n+ Clinical History:\n- "  + box_41+ "\n";}





        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});


