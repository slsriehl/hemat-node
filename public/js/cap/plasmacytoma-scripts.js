$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/




//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/

    $('#box1').change(function(){
        var sel = $('#box1').val();
        if (sel == 'Bone') {
            $('#box1_2').show();}
        else {$('#box1_2').hide();}
        if (sel == 'Other') {
            $('#box1_3').show();}
        else {$('#box1_3').hide();}
    });

    $('#box2').change(function(){
        var sel = $('#box2').val();
        if (sel == 'Other') {
            $('#box2_2').show();}
        else {
            $('#box2_2').hide();}
    });

    $('#box6').change(function(){
        var sel = $('#box6').val();
        if (sel == 'Other') {
            $('#box6_2').show();}
        else {
            $('#box6_2').hide();}
    });


//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('.writeReport').on('click', function () {

        $('input[type="text"]').each(function () {
            if ($(this).val().length < 1) {
                $(this).val($(this).attr('placeholder'));
            }
            if ($(this).val().length < 1) {
                $(this).addClass('empty')
            }
        });

        var captext = "Plasmacytoma Cancer Synoptic\nAJCC 2018 cancer staging version\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        var box_1_3 = $("#box1_3").val();
        if (box_1 == 'Bone') { captext += "\nSpecimen:\n- "+box_1+": "+box_1_2+"\n";}
        else if (box_1 == 'Other'){ captext += "\nSpecimen:\n- "+box_1+": "+box_1_3+"\n";}
        else {captext += "\nSpecimen:\n- "+box_1+"\n";}

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if (box_2 == 'Other'){
            captext += "\nProcedure:\n- "  + box_2_2+ "\n";}
        else {captext += "\nProcedure:\n- "  + box_2+ "\n";}


        var box_3 = $("#box3").val();
        if (box_3 != 'n/a'){
            captext += "\n+ Tumor size:\n- "  + box_3.replace(/cm/,'') + "cm\n";}
        else {captext += "\n+ Tumor size: Not known at this time";}

        var box_4 = $("#box4").val();
        captext += "\n+ Cytology:\n- "  + box_4+ "\n";

        var box_5 = $("#box5").val();
        captext += "\n+ Immunoglobulin deposits:\n- "  + box_5+ "\n";

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6 == 'Other'){
            captext += "\n+ WHO Classification Subtype:\n- "  + box_6_2+ "\n";}
        else {captext += "\n+ WHO Classification Subtype:\n- "  + box_6+ "\n";}


        var box_7 = $("#box7").val();
        captext += "\n+ Immunoglobulin light-chain type:\n- "  + box_7+ "\n";

        var box_8 = $("#box8").val();
        if($.inArray("Not applicable", box_8) == -1){
            captext += "\n+ Cytogenetic results:\n- "  + box_8.join('\n- ') + "\n";}



        $('#outPut-1').val(captext);

				dataObj.singleSection = $('#outPut-1').val();
				makeCreatePdfBtn();

    });
});
