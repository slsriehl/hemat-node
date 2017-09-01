$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/




//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/

    $("#box18").change(function () {
        $('#box18_2').toggle();
        $('#box18_3').toggle();
    });

    $("#box19").change(function () {
        var box_19 = $("#box19").val();
        if (box_19 == 'Pathologic findings present'){
            $('.normalkidney').show();
        } else
            $('.normalkidney').hide();

    });

    $('#box1').change(function(){
        var sel = $('#box1').val();
        if (sel == 'Other:') {
            $('#box1_2').show();}
        else {$('#box1_2').hide();}
    });

    $('#box3').change(function(){
        var sel = $('#box3').val();
        if ($.inArray('Other:', sel) >-1) {
            $('#box3_2').show();}
        else {$('#box3_2').hide();}
    });

    $('#box6').change(function(){
        var sel = $('#box6').val();
        if ($.inArray('Tumor extension into other organ(s);', sel) >-1) {
            $('#box6_2').show();}
        else {$('#box6_2').hide();}
    });


    $('#box7').change(function(){
        var sel = $('#box7').val();
        if (sel == 'Other:') {
            $('#box7_2').show();}
        else {$('#box7_2').hide();}
    });

    $('#box8').change(function(){
        var sel = $('#box8').val();
        if (sel == 'Present;') {
            $('#box8_2').show();}
        else {$('#box8_2').hide();}
    });

    $('#box10').change(function(){
        var sel = $('#box10').val();
        if (sel == 'Other:') {
            $('#box10_2').show();}
        else {$('#box10_2').hide();}
    });

    $('#box11').change(function(){
        var sel = $('#box11').val();
        if ($.inArray('Tumor extension into other organ(s);', sel) >-1) {
            $('#box11_2').show();}
        else {$('#box11_2').hide();}
    });

    $('#box12').change(function(){
        var sel = $('#box12').val();
        if ($.inArray('Other:', sel) > -1) {
            $('#box12_2').show();}
        else {$('#box12_2').hide();}
    });


//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('#writeReport').on('click', function () {

        var captext = "CAP Kidney Cancer summary\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1 == 'Other:'){
            captext += "\nProcedure:\n- "  + box_1_2+ "\n";}
        else {captext += "\nProcedure:\n- "  + box_1+ "\n";}

        var box_2 = $("#box2").val();
        captext += "\nSpecimen Laterality:\n- "  + box_2+ "\n";

        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        if ($.inArray('Other:', box_3) >-1){
            captext += "\nTumor Site:\n- "  + box_3.join('\n- ').replace(/Other:/, box_3_2) + "\n";}

        var box_4 = $("#box4").val();
        captext += "\nTumor Size:\n- "  + box_4 + "\n";

        var box_5 = $("#box5").val();
        captext += "\nTumor Focality:\n- "  + box_5+ "\n";

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if ($.inArray('Tumor extension into other organ(s);', box_6) >-1){
            captext += "\nMacroscopic Extent of Tumor:\n- "  + box_6.join('\n- ').replace(/;/, ': '+box_6_2) + "\n";}
        else {captext += "\nMacroscopic Extent of Tumor:\n- "  + box_6.join('\n- ') + "\n";}

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if (box_7 == 'Other:'){
            captext += "\nHistologic Type:\n- "  + box_7_2+ "\n";}
        else {captext += "\nHistologic Type:\n- "  + box_7+ "\n";}

        var box_8 = $("#box8").val();
        var box_8_2 = $("#box8_2").val();
        if (box_8 == 'Present;'){
            captext += "\nSarcomatoid Features:\n- "  + box_8.replace(/;/, ', '+box_8_2)+ "% of tumor\n";}
        else {captext += "\nSarcomatoid Features:\n- "  + box_8+ "\n";}

        var box_9 = $("#box9").val();
        captext += "\nTumor Necrosis:\n- "  + box_9+ "\n";

        var box_10 = $("#box10").val();
        var box_10_2 = $("#box10_2").val();
        if (box_10 == 'Other:'){
            captext += "\nHistologic Grade (Fuhrman Nuclear Grade):\n- "  + box_10_2+ "\n";}
        else {captext += "\nHistologic Grade (Fuhrman Nuclear Grade):\n- "  + box_10+ "\n";}

        var box_11 = $("#box11").val();
        var box_11_2 = $("#box11_2").val();
        if ($.inArray('Tumor extension into other organ(s);', box_11) >-1){
            captext += "\nMicroscopic Tumor Extension:\n- "  + box_11.join('\n- ').replace(/;/, ', '+box_11_2) + "\n";}
        else {captext += "\nMicroscopic Tumor Extension:\n- "  + box_11.join('\n- ') + "\n";}

        var box_12 = $("#box12").val();
        var box_12_2 = $("#box12_2").val();
        if ($.inArray('Other:', box_12) > -1){
            captext += "\nMargins:\n- "  + box_12.join('\n- ').replace(/Other:/, box_12_2)+ "\n";}
        else {captext += "\nMargins:\n- "  + box_12.join('\n- ')+ "\n";}

        var box_13 = $("#box13").val();
        captext += "\n+ Lymph-Vascular Invasion:\n- "  + box_13+ "\n";

        var box_14 = $("#box14").val();
        var box_15 = $("#box15").val();
        var box_16 = $("#box16").val();
        var box_17 = $("#box17").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_14 != "Not applicable"){captext += box_14.join("")+' '+box_15+" "+box_16+" "+box_17+"\n";}
        else {captext += box_15+" "+box_16+" "+box_17+"\n";}

        if ($("#box18").is(':checked')) {
            var box_18_2 = $("#box18_2").val();
            var box_18_3 = $("#box18_3").val();
            captext += "\nLymph nodes examined: "+box_18_2+"\nLymph nodes involved: "+box_18_3+"\n";}

        var box_19 = $("#box19").val();
        var box_19_2 = $("#box19_2").val();
        var box_19_3 = $("#box19_3").val();
        var box_19_4 = $("#box19_4").val();
        var box_19_5 = $("#box19_5").val();

        if (box_19 != 'Pathologic findings present'){
            captext += "\nPathologic Findings in Nonneoplastic Kidney:\n- "  + box_19+ "\n";}

        if (box_19 == 'Pathologic findings present'){
            captext += "\nPathologic Findings in Nonneoplastic Kidney:\n";}
        if (box_19_2 != 'specify type'){
            captext += "\n  Glomerular disease: "  + box_19_2 ;}
        if (box_19_3 != 'specify type'){
            captext += "\n  Tubulointerstitial disease: "  + box_19_3 ;}
        if (box_19_4 != 'specify type'){
            captext += "\n  Vascular disease: "  + box_19_4 ;}
        if (box_19_5 != 'specify type'){
            captext += "\n  Other: "  + box_19_5 ;}

        var box_20 = $("#box20").val();
        if (box_20 != 'Not applicable'){
            captext += "\n+  Other Tumors and/or Tumor-like Lesions:\n- "  + box_20 + "\n";}


        $('#outPut-1').val(captext);

				dataObj.singleSection = $('#outPut-1').val();
				makeCreatePdfBtn();

    });
});
/**
 * Created by Chandra Krishnan on 8/16/2017.
 */
