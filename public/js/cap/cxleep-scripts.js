$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/



//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/

    $('#box1').change(function(){
        var sel = $('#box1').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box1_2').show();}
        else {$('#box1_2').hide();}
    });

    $('#box2').change(function(){
        var sel = $('#box2').val();
        if (sel == 'Other') {
            $('#box2_2').show();}
        else {
            $('#box2_2').hide();}
    });

    $('#box3').change(function(){
        var sel = $('#box3').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box3_2').show();}
        else {$('#box3_2').hide();}
    });

    $('#box5').change(function(){
        var sel = $('#box5').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box5_2').show();}
        else {$('#box5_2').hide();}
    });

    $('#box9').change(function(){
        var sela = $('#box9').val();
        var selb = $('#box9').val();
        if (($.inArray('Not involved by invasive carcinoma', sela) >-1) && ($.inArray('Involved by invasive carcinoma', sela) == -1)) {
            $('#box9_1').show();
            $('#box9_2').show();}
        else {$('#box9_1').hide();
            $('#box9_2').hide();}
        if (($.inArray('Involved by invasive carcinoma', selb) >-1) && ($.inArray('Not involved by invasive carcinoma', sela) == -1)) {
            $('#box9_3').show();}
        else {$('#box9_3').hide();}
    });

    $('#box10').change(function(){
        var sela = $('#box10').val();
        var selb = $('#box10').val();
        if (($.inArray('Not involved by invasive carcinoma', sela) >-1) && ($.inArray('Involved by invasive carcinoma', sela) == -1)) {
            $('#box10_1').show();
            $('#box10_2').show();}
        else {$('#box10_1').hide();
            $('#box10_2').hide();}
        if (($.inArray('Involved by invasive carcinoma', selb) >-1) && ($.inArray('Not involved by invasive carcinoma', sela) == -1)) {
            $('#box10_3').show();}
        else {$('#box10_3').hide();}
    });

    $('#box11').change(function(){
        var sela = $('#box11').val();
        var selb = $('#box11').val();
        if (($.inArray('Not involved by invasive carcinoma', sela) >-1) && ($.inArray('Involved by invasive carcinoma', sela) == -1)) {
            $('#box11_1').show();
            $('#box11_2').show();}
        else {$('#box11_1').hide();
            $('#box11_2').hide();}
        if (($.inArray('Involved by invasive carcinoma', selb) >-1) && ($.inArray('Not involved by invasive carcinoma', sela) == -1)) {
            $('#box11_3').show();}
        else {$('#box11_3').hide();}
    });

    $('#box13').change(function(){
        var sel = $('#box13').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box13_2').show();}
        else {$('#box13_2').hide();}
    });



//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('#writeReport').on('click', function () {

        var captext = "CAP Bone Tumor Resection Cancer Summary\n\n";

        var captext = "CAP Cervix Cancer Summary\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if ($.inArray('Other', box_1) >-1){
            captext += "\nSpecimen:\n- "  + box_1.join('\n- ').replace(/Other/, box_1_2) + "\n";}
        else {captext += "\nSpecimen:\n- "  + box_1.join('\n- ') + "\n";}

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if (box_2 == 'Other'){
            captext += "\nProcedure:\n- "  + box_2_2+ "\n";}
        else {captext += "\nProcedure:\n- "  + box_2+ "\n";}


        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        if ($.inArray('Other', box_3) >-1){
            captext += "\nTumor Site:\n- "  + box_3.join('\n- ').replace(/Other/, box_3_2) + "\n";}
        else {captext += "\nTumor Site:\n- "  + box_3.join('\n- ') + "\n";}

        var box_4 = $("#box4").val();
        captext += "\nTumor Size:\n- "  + box_4.replace(/cm/,'') + "cm\n";

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if ($.inArray('Other', box_5) >-1){
            captext += "\nHistologic Type:\n- "  + box_5.join('\n- ').replace(/Other/, box_5_2) + "\n";}
        else {captext += "\nHistologic Type:\n- "  + box_5.join('\n- ') + "\n";}

        var box_6 = $("#box6").val();
        captext += "\nHistologic Grade:\n- "  + box_6+ "\n";

        var box_7 = $("#box7").val();
        captext += "\nStromal Invasion - Depth:\n- "  + box_7.replace(/mm/,'') + "mm\n";

        var box_8 = $("#box8").val();
        captext += "\nStromal Invasion - Horizontal extent:\n- "  + box_8.replace(/mm/,'') + "mm\n";

        var box_9 = $("#box9").val();
        var box_9_1 = $("#box9_1").val();
        var box_9_2 = $("#box9_2").val();
        var box_9_3 = $("#box9_3").val();
        if (($.inArray('Not involved by invasive carcinoma', box_9) > -1 && $.inArray('Involved by invasive carcinoma', box_9) == -1)) {
            captext += "\nMargin Status:\nEndocervical margin :\n- Margins uninvolved by tumor:\n- Nearest margin: "+box_9_1+"\n- Distance to this margin: " + box_9_2.replace(/mm/,"")+"mm\n";}
        else if (($.inArray('Involved by invasive carcinoma', box_9) > -1 && $.inArray('Not involved by invasive carcinoma', box_9) == -1)) {
            captext += "\nEndocervical margin:\n- Margins involved by tumor:\n- Margin involved: "+box_9_3+"mm\n";}

        var box_10 = $("#box10").val();
        var box_10_1 = $("#box10_1").val();
        var box_10_2 = $("#box10_2").val();
        var box_10_3 = $("#box10_3").val();
        if (($.inArray('Not involved by invasive carcinoma', box_10) > -1 && $.inArray('Involved by invasive carcinoma', box_10) == -1)) {
            captext += "\nExocervical margin:\n- Margins uninvolved by tumor:\n- Nearest margin: "+box_10_1+"\n- Distance to this margin: " + box_10_2.replace(/mm/,"")+"mm\n";}
        else if (($.inArray('Involved by invasive carcinoma', box_10) > -1 && $.inArray('Not involved by invasive carcinoma', box_10) == -1)) {
            captext += "\nExocervical margin:\n- Margins involved by tumor:\n- Margin involved: "+box_10_3+"mm\n";}

        var box_11 = $("#box11").val();
        var box_11_1 = $("#box11_1").val();
        var box_11_2 = $("#box11_2").val();
        var box_11_3 = $("#box11_3").val();
        if (($.inArray('Not involved by invasive carcinoma', box_11) > -1 && $.inArray('Involved by invasive carcinoma', box_11) == -1)) {
            captext += "\nDeep margin :\n- Margins uninvolved by tumor:\n- Nearest margin: "+box_11_1+"\n- Distance to this margin: " + box_11_2.replace(/mm/,"")+"mm\n";}
        else if (($.inArray('Involved by invasive carcinoma', box_11) > -1 && $.inArray('Not involved by invasive carcinoma', box_11) == -1)) {
            captext += "\nDeep margin :\n- Margins involved by tumor:\n- Margin involved: "+box_11_3+"mm\n";}

        var box_12 = $("#box12").val();
        captext += "\nLymph-Vascular Invasion:\n- "  + box_12+ "\n";

        var box_13 = $("#box13").val();
        var box_13_2 = $("#box13_2").val();
        if ($.inArray('Other', box_13) >-1){
            captext += "\n+ Additional Pathologic Findings:\n- "  + box_13.join('\n- ').replace(/Other/, box_13_2) + "\n";}
        else {captext += "\n+ Additional Pathologic Findings:\n- "  + box_13.join('\n- ') + "\n";}

        $('#outPut-1').val(captext);

    });
});
