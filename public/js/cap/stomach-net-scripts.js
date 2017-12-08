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

    $('#box2').on("change", function(){
        var sel = $('#box2').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box2_2').show();}
        else {$('#box2_2').hide();}
    });

    $('#box4').on("change", function(){
        var sel = $('#box4').val();
        if (sel.indexOf("Multifocal") > -1) {

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

    $('#box8').on("change", function(){
        var sel = $('#box8').val();
        if (sel.indexOf("adjacent") > -1) {

            $('#box8_2').show();}
        else {
            $('#box8_2').hide();}
    });

    $('#box9').on("change", function(){
        var sela = $('#box9').val();
        var proc = $('#box1').val();
        if (sela.indexOf('uninvolved') > -1){
            $('#box9_1').show();
            $('#box9_2').show();
        } else {
            $('#box9_1').hide();
            $('#box9_2').hide();
        }
        if (sela.indexOf("margins involved") > -1) {
            $('.margins').show();
            if (proc != "Endoscopic resection") {
                $(".gastrectomy").show();
                $(".emr").hide();
            } else {
                $(".gastrectomy").hide();
                $(".emr").show();
            }
        } else {
            $('.margin').hide();
            $(".gastrectomy").hide();
            $(".emr").hide();
        }
    });



    $("#box16").on("change", function(){
        if ($(this).is(":checked")){
            $(".lnchk").show();}
        else{
            $(".lnchk").hide();}
    });

    $('#box19').on("change", function(){
        var sel = $('#box19').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box19_2').show();}
        else {$('#box19_2').hide();}
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



        var captext = "Stomach Neuroendocrine Tumor Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1 == 'Other'){
            captext += "\nProcedure:\n- "  + box_1_2+ "\n";}
        else {captext += "\nProcedure:\n- "  + box_1+ "\n";}


        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if ($.inArray('Other', box_2) >-1){
            captext += "\nTumor Site:\n- "  + box_2.join(',  ').replace(/Other/, box_2_2) + "\n";}
        else {captext += "\nTumor Site:\n- "  + box_2.join(', ') + "\n";}

        var box_3 = $("#box3").val();
        captext += "\nTumor Size:\n- "  + box_3.replace(/cm/,'') + "cm\n";

        var box_4 = $("#box4").val();
        var box_4_2 = $("#box4_2").val();
        if (box_4 == 'Multifocal'){
            captext += "\nTumor Focality:\n- Multifocal: "  + box_4_2+ " tumors\n";}
        else {captext += "\nTumor Focality:\n- "  + box_4+ "\n";}


        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if (box_5 == 'Other'){
            captext += "\nHistologic Type and Grade:\n- "  + box_5_2+ "\n";}
        else {captext += "\nHistologic Type and Grade:\n- "  + box_5+ "\n";}


        var box_6 = $("#box6").val();
        captext += "\nMitotic Rate:\n- "  + box_6+ "\n";

        var box_7 = $("#box7").val();
        captext += "\nKi-67 Labeling Index:\n- "  + box_7+ "\n";

        var box_8 = $("#box8").val();
        var box_8_2 = $("#box8_2").val();
        if (box_8 == 'adjacent'){
            captext += "\nTumor Extension:\n- "  + box_8_2+ "\n";}
        else {captext += "\nTumor Extension:\n- "  + box_8+ "\n";}


        var box_9 = $("#box9").val();
        var box_9_1 = $("#box9_1").val();
        var box_9_2 = $("#box9_2").val();
        if (box_9.indexOf("uninvolved") > -1) {
            captext += "\nMargins:\n- "+box_9+"\n- Margins assesed: "+box_9_1+"\n- Distance to closest margin: " + box_9_2.replace(/mm/,"")+"mm\n";}
        else if (box_9.indexOf("margins involved") > -1) {

            var box_9_3 = $("#box9_3").val();
            captext += "\nProximal Margin:\n- "  + box_9_3+ "\n";

            var box_9_4 = $("#box9_4").val();
            captext += "\nDistal Margin:\n- "  + box_9_4+ "\n";

            var box_9_5 = $("#box9_5").val();
            captext += "\nOmental Margin:\n- "  + box_9_5+ "\n";


            var box_9_6 = $("#box9_6").val();
            captext += "\nDeep Margin:\n- "  + box_9_6+ "\n";

            var box_9_7 = $("#box9_7").val();
            captext += "\nMucosal Margin:\n- "  + box_9_7+ "\n";


            var box_9_8 = $("#box9_8").val();
            var box_9_8_2 = $("#box9_8_2").val();
            if (box_9_8 == 'Specify margin'){
                captext += "\nOther margin:\n- "  + box_9_8_2+ "\n";}
            else {captext += "\nOther margin:\n- "  + box_9_8+ "\n";}

        }



        var box_10 = $("#box10").val();
        captext += "\nLymphovascular Invasion:\n- "  + box_10+ "\n";

        var box_11 = $("#box11").val();
        captext += "\n+ Perineural Invasion:\n- "  + box_11+ "\n";

        var box_12 = $("#box12").val();
        var box_13 = $("#box13").val();
        var box_14 = $("#box14").val();
        var box_15 = $("#box15").val();
        var box_15_2 = $("#box15_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_12 != "Not applicable"){
            if (box_15_2.length > 0){
                captext += box_12.join("") + ' ' + box_13 + " " + box_14 + " " + box_15 + "\nMetastatic sites: "+box_15_2+"\n";
            }else {
                captext += box_12.join("") + ' ' + box_13 + " " + box_14 + " " + box_15 + "\n";
            }
        }
        else {
            if (box_15_2.length > 0){
                captext += box_13 + " " + box_14 + " " + box_15 + "\nMetastatic sites: "+box_15_2+"\n";
            }else {
                captext += box_13 + " " + box_14 + " " + box_15 + "\n";
            }
            }

        if ($("#box16").is(':checked')) {
            var box_17 = $("#box17").val();
            var box_18 = $("#box18").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: "+box_17+"\n\tLymph nodes involved: "+box_18+"\n";} else {
            captext += "\nLymph nodes: None submitted\n";}

        var box_19 = $("#box19").val();
        var box_19_2 = $("#box19_2").val();
        if ($.inArray('Other', box_19) >-1){
            captext += "\n+ Additional Pathologic Findings:\n- "  + box_19.join('\n- ').replace(/Other/, box_19_2) + "\n";}
        else {captext += "\n+ Additional Pathologic Findings:\n- "  + box_19.join('\n- ') + "\n";}




        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});



/**
 * Created by Chandra Krishnan on 12/5/2017.
 */
