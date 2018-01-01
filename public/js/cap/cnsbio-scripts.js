$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/




//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/

$("#box1").on('change', function(){
   var sel = $(this).val();
   if (sel.indexOf('Embryonal') > -1){
       $(".embryonal").show();
       $(".glioma").hide();
   } else {
       $(".embryonal").hide();
       $(".glioma").show();
   }
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



        var captext = "CNS Cyto-Molecular Biomarker Results\n\n";

        var box_1 = $('#box1').val();

        if (box_1.indexOf('Embryonal') > -1){

            var box_2 = $("#box2").val();
            if(box_2 != "Not applicable"){
                captext += "\nNuclear Beta-Catenin Immunohistochemistry: "  + box_2+ "\n";}

            var box_3 = $("#box3").val();
            if(box_3 != "Not applicable"){
                captext += "\nMonosomy 6: "  + box_3+ "\n";}

            var box_4 = $("#box4").val();
            if(box_4 != "Not applicable"){
                captext += "\nGAB1 Immunohistochemistry: "  + box_4+ "\n";}

            var box_5 = $("#box5").val();
            if(box_5 != "Not applicable"){
                captext += "\nMYC Amplification: "  + box_5+ "\n";}

            var box_6 = $("#box6").val();
            if(box_6 != "Not applicable"){
                captext += "\nMYCN Amplification: "  + box_6+ "\n";}

            var box_7 = $("#box7").val();
            if(box_7 != "Not applicable"){
                captext += "\nIsochromosome 17: "  + box_7+ "\n";}

            var box_8 = $("#box8").val();
            if(box_8 != "Not applicable"){
                captext += "\nINI1 Immunohistochemistry: "  + box_8+ "\n";}

            var box_9 = $("#box9").val();
            if(box_9 != "Not applicable"){
                captext += "\n+ SMARCB1/INI1/HNSF5 Mutation: "  + box_9+ "\n";}

        }

        if (box_1.indexOf('Glioma') > -1) {

            var box_20 = $("#box20").val();
            if(box_20 != "Not applicable"){
                captext += "\nIDH1/2 Mutation: "  + box_20+ "\n";}

            var box_21 = $("#box21").val();
            if(box_21 != "Not applicable"){
                captext += "\nIDH1 R132H Immunohistochemistry: "  + box_21+ "\n";}

            var box_22 = $("#box22").val();
            if(box_22 != "Not applicable"){
                captext += "\n1p/19q Deletion: "  + box_22+ "\n";}

            var box_23 = $("#box23").val();
            if(box_23 != "Not applicable"){
                captext += "\nTP53 Mutation: "  + box_23+ "\n";}

            var box_24 = $("#box24").val();
            if(box_24 != "Not applicable"){
                captext += "\nATRX Mutation: "  + box_24+ "\n";}

            var box_25 = $("#box25").val();
            if(box_25 != "Not applicable"){
                captext += "\nATRX Immunohistochemistry: "  + box_25+ "\n";}

            var box_26 = $("#box26").val();
            if(box_26 != "Not applicable"){
                captext += "\nEGFR Amplification: "  + box_26+ "\n";}

            var box_27 = $("#box27").val();
            if(box_27 != "Not applicable"){
                captext += "\n10q23 Deletion: "  + box_27+ "\n";}

            var box_28 = $("#box28").val();
            if(box_28 != "Not applicable"){
                captext += "\nPTEN Mutatio: "  + box_28+ "\n";}

            var box_29 = $("#box29").val();
            if(box_29 != "Not applicable"){
                captext += "\nMGMT Promoter Methylation: "  + box_29+ "\n";}

            var box_30 = $("#box30").val();
            if(box_30 != "Not applicable"){
                captext += "\nBRAF Mutation: "  + box_30+ "\n";}

            var box_31 = $("#box31").val();
            if(box_31 != "Not applicable"){
                captext += "\nBRAF V600E Immunohistochemistry: "  + box_31+ "\n";}

            var box_32 = $("#box32").val();
            if(box_32 != "Not applicable"){
                captext += "\nBRAF Rearrangement: "  + box_32+ "\n";}

            var box_33 = $("#box33").val();
            captext += "\nKi-67%: "  + box_33 + "%\n";

        }




        var box_40 = $("#box40").val();
        captext += "\nOther cyto-molecular results:\n- "  + box_40 + "\n";




        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});


