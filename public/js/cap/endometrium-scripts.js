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
        if ($.inArray('Other', sel) >-1) {
            $('#box2_2').show();}
        else {$('#box2_2').hide();}
    });

    $('#box3').change(function(){
        var sel = $('#box3').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box3_2').show();}
        else {$('#box3_2').hide();}
    });

    $('#box5').change(function(){
        var sel = $('#box5').val();
        if (sel == 'Other') {
            $('#box5_1').show();}
        else {
            $('#box5_1').hide();}
    });

    $('#box7').change(function(){
        var sel = $('#box7').val();
        if (sel == 'Mixed carcinoma') {
            $('#box7_1').show();}
        else {$('#box7_1').hide();}
        if (sel == 'Other') {
            $('#box7_2').show();}
        else {$('#box7_2').hide();}
    });

    $('#box11').change(function(){
        var sel = $('#box11').val();
        if (sel == 'Other') {
            $('#box11_2').show();}
        else {
            $('#box11_2').hide();}
    });

    $('#box12').change(function(){
        var sel = $('#box12').val();
        if (sel == 'Other') {
            $('#box12_2').show();}
        else {
            $('#box12_2').hide();}
    });

    $('#box13').change(function(){
        var sel = $('#box13').val();
        if (sel == 'Other') {
            $('#box13_2').show();}
        else {
            $('#box13_2').hide();}
    });

    $('#box14').change(function(){
        var sel = $('#box14').val();
        if (sel == 'Other') {
            $('#box14_2').show();}
        else {
            $('#box14_2').hide();}
    });

    $('#box24').change(function(){
        var sela = $('#box24').val();
        var selb = $('#box24').val();
        if (sela == "Uninvolved by invasive tumor"){
            $('#box24_1').show();
            $('#box24_2').show();}
        else {$('#box24_1').hide();
            $('#box24_2').hide();}
        if (selb == "Involved by invasive tumor") {
            $('#box24_3').show();}
        else {$('#box24_3').hide();}
    });

    $("#box30").change(function(){
        if ($(this).is(":checked")){
            $(".lnchk").show();}
        else{
            $(".lnchk").hide();}
    });

    $('#box35').change(function(){
        var sel = $('#box35').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box35_1').show();}
        else {$('#box35_1').hide();}
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

        var captext = "Endometrium Cancer Synoptic\nAJCC 2018 cancer staging version\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if ($.inArray('Other', box_1) >-1){
            captext += "\nSpecimen:\n- "  + box_1.join('\n- ').replace(/Other/, box_1_2) + "\n";}
        else {captext += "\nSpecimen:\n- "  + box_1.join('\n- ') + "\n";}

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if ($.inArray('Other', box_2) >-1){
            captext += "\nProcedure:\n- "  + box_2.join('\n- ').replace(/Other/, box_2_2) + "\n";}
        else {captext += "\nProcedure:\n- "  + box_2.join('\n- ') + "\n";}

        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        if ($.inArray('Other', box_3) >-1){
            captext += "\nLymph Node Sampling:\n- "  + box_3.join('\n- ').replace(/Other/, box_3_2) + "\n";}
        else {captext += "\nLymph Node Sampling:\n- "  + box_3.join('\n- ') + "\n";}

        var box_4 = $("#box4").val();
        captext += "\nSpecimen Integrity:\n- "  + box_4+ "\n";

        var box_5 = $("#box5").val();
        var box_5_1 = $("#box5_1").val();
        if (box_5 == 'Other'){
            captext += "\n+ Tumor Site:\n- "  + box_5_1+ "\n";}
        else {captext += "\n+ Tumor Site:\n- "  + box_5+ "\n";}


        var box_6 = $("#box6").val();
        captext += "\nTumor Size:\n- "  + box_6.replace(/cm/,'') + "cm\n";

        var box_7 = $("#box7").val();
        var box_7_1 = $("#box7_1").val();
        var box_7_2 = $("#box7_2").val();
        if (box_7 == 'Mixed carcinoma') { captext += "\nHistologic Type:\n- "+box_7+"\n- "+box_7_1+"\n";}
        else if (box_7 == 'Other'){ captext += "\nHistologic Type:\n- "+box_7+"\n- "+box_7_2+"\n";}
        else {captext += "\nHistologic Type:\n- "+box_7+"\n";}

        var box_8 = $("#box8").val();
        captext += "\nHistologic Grade:\n- "  + box_8+ "\n";

        var box_9 = $("#box9").val();
        captext += "\nMyometrial Invasion:\n- "  + box_9+ "\n";

        var box_10 = $("#box10").val();
        captext += "\nInvolvement of Cervix:\n- "  + box_10.join('\n- ') + "\n";

        var box_11 = $("#box11").val();
        var box_11_2 = $("#box11_2").val();
        captext+="\nInvolvement of other Organs:";
        if (box_11 == 'Other'){
            captext += "\nRight ovary:\n- "  + box_11_2+ "\n";}
        else {captext += "\nRight ovary:\n- "  + box_11+ "\n";}


        var box_12 = $("#box12").val();
        var box_12_2 = $("#box12_2").val();
        if (box_12 == 'Other'){
            captext += "\nLeft ovary:\n- "  + box_12_2+ "\n";}
        else {captext += "\nLeft ovary:\n- "  + box_12+ "\n";}


        var box_13 = $("#box13").val();
        var box_13_2 = $("#box13_2").val();
        if (box_13 == 'Other'){
            captext += "\nRight fallopian tube:\n- "  + box_13_2+ "\n";}
        else {captext += "\nRight fallopian tube:\n- "  + box_13+ "\n";}


        var box_14 = $("#box14").val();
        var box_14_2 = $("#box14_2").val();
        if (box_14 == 'Other'){
            captext += "\nLeft fallopian tube:\n- "  + box_14_2+ "\n";}
        else {captext += "\nLeft fallopian tube:\n- "  + box_14+ "\n";}


        var box_15 = $("#box15").val();
        if(box_15 != "Not applicable"){
            captext += "\nVagina:\n- "  + box_15+ "\n";}

        var box_16 = $("#box16").val();
        if(box_16 != "Not applicable"){
            captext += "\nRight parametrium:\n- "  + box_16+ "\n";}

        var box_17 = $("#box17").val();
        if(box_17 != "Not applicable"){
            captext += "\nLeft parametrium:\n- "  + box_17+ "\n";}

        var box_18 = $("#box18").val();
        if(box_18 != "Not applicable"){
            captext += "\nOmentum:\n- "  + box_18+ "\n";}

        var box_19 = $("#box19").val();
        if(box_19 != "Not applicable"){
            captext += "\nRectal wall:\n- "  + box_19+ "\n";}

        var box_20 = $("#box20").val();
        if(box_20 != "Not applicable"){
            captext += "\nBladder wall:\n- "  + box_20+ "\n";}

        var box_21 = $("#box21").val();
        if(box_21 != "Not applicable"){
            captext += "\nPelvic wall:\n- "  + box_21+ "\n";}

        var box_22 = $("#box22").val();
        if(box_22 != "Not applicable"){
            captext += "\nBladder/bowel mucosa:\n- "  + box_22+ "\n";}

        var box_23 = $("#box23").val();
        if(box_23 != "Not applicable"){
            captext += "\n+ Peritoneal Ascitic Fluid:\n- "  + box_23+ "\n";}

        var box_24 = $("#box24").val();
        var box_24_1 = $("#box24_1").val();
        var box_24_2 = $("#box24_2").val();
        var box_24_3 = $("#box24_3").val();
        if (box_24 == 'Uninvolved by invasive tumor') {
            captext += "\n+ Margins:\n- Margins uninvolved by tumor:\n- Nearest margin: "+box_24_1+"\n- Distance to this margin: " + box_24_2.replace(/mm/,"")+"mm\n";}
        else if (box_24 == 'Involved by invasive tumor'){
            captext += "\n+ Margins:\n- Margins involved by tumor:\n- Margin involved: "+box_24_3+"mm\n";}
        else {captext += "\n+ Margins:\n- "+box_24+"\n";}

        var box_25 = $("#box25").val();
        captext += "\nLymph-Vascular Invasion:\n- "  + box_25+ "\n";

        var box_26 = $("#box26").val();
        var box_27 = $("#box27").val();
        var box_28 = $("#box28").val();
        var box_29 = $("#box29").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_26 != "Not applicable"){captext += box_26.join("")+' '+box_27+" "+box_28+" "+box_29+"\n";}
        else {captext += box_27+" "+box_28+" "+box_29+"\n";}

        if ($("#box30").is(':checked')) {
            var box_31 = $("#box31").val();
            var box_32 = $("#box32").val();
            var box_33 = $("#box33").val();
            var box_34 = $("#box34").val();
            captext += "\nPelvic Lymph nodes examined: "+box_31+"\nPelvic Lymph nodes involved: "+box_32+"\n\nPara-aortic Lymph nodes examined: "+box_32+"\nPara-aortic Lymph nodes invovled: "+box_34+"\n";}

        var box_35 = $("#box35").val();
        var box_35_1 = $("#box35_1").val();
        if($.inArray("None identified", box_35) == -1){
            if ($.inArray('Other', box_35) >-1){
                captext += "\n+ Additional Pathologic Findings:\n- "  + box_35.join('\n- ').replace(/Other/, box_35_1) + "\n";}
            else {captext += "\n+ Additional Pathologic Findings:\n- "  + box_35.join('\n- ') + "\n";}
        }



        $('#outPut-1').val(captext);

				dataObj.singleSection = $('#outPut-1').val();
				makeCreatePdfBtn();

    });
});
