'use strict';

$(window).on('load', function () {
    //*************************************************************//
    //                        Autocomplete                         //
    // *************************************************************/


    //*************************************************************//
    //                        Pop-ups                              //
    // *************************************************************/
    $('#box1').change(function(){
        var sel = $('#box1').val();
        if (sel == 'Present') {
            $('#box1_2').show();}
        else {
            $('#box1_2').hide();}
    });

    $('#box41').change(function(){
        var sel = $('#box41').val();
        if (sel == 'Present') {
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


        var captext = "\n-- CNS Molecular Genetics Biomarker Results --\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if(box_1 != "Not performed") {

            if (box_1 == 'Present') {
                captext += "\nATRX mutation:\n- Present: " + box_1_2 + "\n";
            }
            else {
                captext += "\nATRX mutation:\n- " + box_1 + "\n";
            }
        }


        var box_5 = $("#box5").val();
        if(box_5 != "Not performed") {

            captext += "\nBRAF mutation:\n- " + box_5 + "\n";
        }

        var box_6 = $("#box6").val();
        if(box_6 != "Not performed") {

            captext += "\nBRAF rearrangement:\n- " + box_6 + "\n";
        }

        var box_10 = $("#box10").val();
        if(box_10 != "Not performed") {

            captext += "\nBeta-catenin mutation:\n- " + box_10 + "\n";
        }

        var box_11 = $("#box11").val();
        if(box_11 != "Not performed") {

            captext += "\nBeta-catenin nuclear IHC:\n- " + box_11 + "\n";
        }

        var box_15 = $("#box15").val();
        if(box_15 != "Not performed") {

            captext += "\nC19MC alteration:\n- " + box_15 + "\n";
        }

        var box_20 = $("#box20").val();
        if(box_20 != "Not performed") {

            captext += "\n1p/19q codeletion:\n- " + box_20 + "\n";
        }

        var box_25 = $("#box25").val();
        if(box_25 != "Not performed") {
            captext += "\nChromosome 7  gain:\n- " + box_25 + "\n";
        }

        var box_30 = $("#box30").val();
        if(box_30 != "Not performed") {
            captext += "\nPTEN deletion:\n- " + box_30 + "\n";
        }

        var box_31 = $("#box31").val();
        if(box_31 != "Not performed") {
            captext += "\nPTEN mutation:\n- " + box_31 + "\n";
        }

        var box_35 = $("#box35").val();
        if(box_35 != "Not performed") {
            captext += "\nEGFR amplification:\n- " + box_35 + "\n";
        }

        var box_36 = $("#box36").val();
        if(box_36 != "Not performed") {
            captext += "\nEGFRvIII mutation:\n- " + box_36 + "\n";
        }

        var box_40 = $("#box40").val();
        if(box_40 != "Not performed") {
            captext += "\nFGFR1 mutation:\n- " + box_40 + "\n";
        }

        var box_41 = $("#box41").val();
        var box_41_2 = $("#box41_2").val();
        if(box_41 != "Not performed") {
            if (box_41 == 'Present') {
                captext += "\nH3 gene family mutation:\n- Present:  " + box_41_2 + "\n";
            }
            else {
                captext += "\nH3 gene family mutation:\n- " + box_41 + "\n";
            }
        }


        var box_42 = $("#box42").val();
        if(box_42 != "Not performed") {
            captext += "\nAlk alteration:\n- " + box_42 + "\n";
        }

        var box_43 = $("#box43").val();
        if(box_43 != "Not performed") {
            captext += "\nNTRK alteration:\n- " + box_43 + "\n";
        }

        var box_44 = $("#box44").val();
        if(box_44 != "Not performed") {
            captext += "\nBCOR alteration:\n- " + box_44 + "\n";
        }

        var box_45 = $("#box45").val();
        if(box_45 != "Not performed") {
            captext += "\nSMARBC1 alteration:\n- " + box_45 + "\n";
        }

        var box_50 = $("#box50").val();
        if(box_50 != "Not performed") {
            captext += "\nIDH1/2 mutation:\n- " + box_50 + "\n";
        }

        var box_55 = $("#box55").val();
        if(box_55 != "Not performed") {
            captext += "\nIsochromosome 17q:\n- " + box_55 + "\n";
        }

        var box_60 = $("#box60").val();
        if(box_60 != "Not performed"){
            captext += "\nMGMT promoter methylation:\n- "  + box_60+ "\n";
        }

        var box_65 = $("#box65").val();
        if(box_65 != "Not performed"){
            captext += "\nMonosomy 6:\n- "  + box_65+ "\n";
        }

        var box_70 = $("#box70").val();
        if(box_70 != "Not performed"){
            captext += "\nMYC amplification:\n- "  + box_70+ "\n";
        }

        var box_71 = $("#box71").val();
        if(box_71 != "Not performed"){
            captext += "\nMYCN amplification:\n- "  + box_71+ "\n";
        }

        var box_75 = $("#box75").val();
        if(box_75 != "Not performed"){
            captext += "\nNAB2-STAT6 fusion:\n- "  + box_75+ "\n";
        }

        var box_80 = $("#box80").val();
        if(box_80 != "Not performed"){
            captext += "\nRELA fusion:\n- "  + box_80+ "\n";
        }

        var box_85 = $("#box85").val();
        if(box_85 != "Not performed"){
            captext += "\nTERT promoter mutation:\n- "  + box_85+ "\n";
        }

        var box_90 = $("#box90").val();
        if(box_90 != "Not performed"){
            captext += "\nTP53 mutation:\n- "  + box_90+ "\n";
        }


        var box_95 = $("#box95").val();
        if(box_95 != "Not performed"){
            captext += "\nYAP1 fusion:\n- "  + box_95+ "\n";
        }

        var box_98 = $("#box98").val();
        if (box_98.length > 0){
            captext += "\nOther cytogenetic findings:\n"  + box_98 + "\n";
        }

        var box_99 = $("#box99").val();
        if (box_99.length > 0){
            captext += "\nOther molecular findings:\n"  + box_99 + "\n";
        }



        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});