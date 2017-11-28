$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/




//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/

    $("#box4").change(function() {
        $('.tumorsize').toggle();
    });

    $("#box22").change(function() {
        $("#box22_1").toggle();
        $("#box22_2").toggle();
    });

    $('#box1').change(function(){
        var sela = $('#box1').val();
        var selb = $('#box1').val();
        if ($.inArray('Other:', sela) >-1) {
            $('#box1_2').show();}
        else {$('#box1_2').hide();}
        if ($.inArray('Lymphadenectomy, regional nodes;', selb) >-1) {
            $('#box1_3').show();}
        else {$('#box1_3').hide();}
    });

    $('#box8').change(function(){
        var sel = $('#box8').val();
        if (sel == 'Other:') {
            $('#box8_2').show();}
        else {$('#box8_2').hide();}
    });

    $('#box12').change(function(){
        var sel = $('#box12').val();
        if (sel == 'Uninvolved by invasive melanoma') {
            $('#box12_2').show();
            $('#box12_3').show();
        }
        else {
            $('#box12_2').hide();
            $('#box12_3').hide();
        }
        if (sel == 'Involved by invasive melanoma') {
            $('#box12_4').show();}
        else {$('#box12_4').hide();}
    });

    $('#box13').change(function(){
        var sel = $('#box13').val();
        if (sel == 'Uninvolved by melanoma in situ') {
            $('#box13_2').show();
            $('#box13_3').show();
        }
        else {
            $('#box13_2').hide();
            $('#box13_3').hide();
        }
        if (sel == 'Involved by melanoma in situ') {
            $('#box13_4').show();}
        else {$('#box13_4').hide();

        }
    });

    $('#box14').change(function(){
        var sel = $('#box14').val();
        if (sel == 'Uninvolved by invasive melanoma') {
            $('#box14_2').show();}
        else {$('#box14_2').hide();}
    });

    $('#box15').change(function(){
        var sel = $('#box15').val();
        if (sel == '>=1/mm2') {
            $('#box15_2').show();}
        else {$('#box15_2').hide();}
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

        var captext = "Melanoma Cancer Synoptic\nAJCC 2018 cancer staging version\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        var box_1_3 = $("#box1_3").val();
        if ($.inArray('Other:', box_1) > -1 && $.inArray('Lymphadenectomy, regional nodes;', box_1) == -1) {
            captext += "\nProcedure:\n- "+box_1.join("\n- ").replace(/Other:/, box_1_2)+"\n";}
        else if ($.inArray('Lymphadenectomy, regional nodes;', box_1) > -1 && $.inArray('Other:', box_1) == -1) {
            captext += "\nProcedure:\n- "+box_1.join("\n- ").replace(/;/, ': '+box_1_3)+"\n";}
        else if ($.inArray('Other:', box_1) > -1 && $.inArray('Lymphadenectomy, regional nodes;', box_1) > -1) {
            captext += "\nProcedure:\n- "+box_1.join("\n- ").replace(/Other:/, box_1_2).replace(/;/, ': '+box_1_3)+"\n";}
        else {captext += "\nProcedure:\n- "+box_1.join("\n- ")+"\n";}

        var box_2 = $("#box2").val();
        captext += "\nSpecimen Laterality:\n- "  + box_2+ "\n";

        var box_3 = $("#box3").val();
        captext += "\nTumor Site:\n- "  + box_3 + "\n";

        var box_5 = $("#box5").val();
        if ($('#box4').is(':checked')){
            captext += "\nTumor Size:\n- "  + box_5.replace(/cm/,'') + "cm\n";
        }

        var box_6 = $("#box6").val();
        if (box_6 != 'Not applicable'){
            var box_6 = $("#box6").val();
            captext += "\nMacroscopic Satellite Nodule(s) (required for excision specimens only) :\n- "  + box_6+ "\n";	}

        var box_7 = $("#box7").val();
        captext += "\n+Macroscopic Pigmentation:\n- "  + box_7+ "\n";

        var box_8 = $("#box8").val();
        var box_8_2 = $("#box8_2").val();
        if (box_8 == 'Other:'){
            captext += "\nHistologic Type:\n- "  + box_8_2+ "\n";}
        else {captext += "\nHistologic Type:\n- "  + box_8+ "\n";}

        var box_9 = $("#box9").val();
        captext += "\nMaximum Tumor Thickness:\n- "  + box_9.replace(/mm/,'') + "mm\n";

        var box_10 = $("#box10").val();
        captext += "\n+Anatomic Level:\n- "  + box_10+ "\n";

        var box_11 = $("#box11").val();
        captext += "\nUlceration:\n- "  + box_11+ "\n";

        var box_12 = $("#box12").val();
        var box_12_2 = $("#box12_2").val();
        var box_12_3 = $("#box12_3").val();
        var box_12_4 = $("#box12_4").val();
        if (box_12 == 'Uninvolved by invasive melanoma') {
            captext += "\nPeripheral Margin (Invasive):\n- "+box_12+"\n- Closest margin: "+box_12_3+", distance: "+box_12_2.replace(/mm/,'')+"mm\n";}
        else if (box_12 == 'Involved by invasive melanoma'){
            captext += "\nPeripheral Margin (Invasive):\n- "+box_12+"\n- Margin(s) involved: "+box_12_4+"\n";}
        else {captext += "\nPeripheral Margin (Invasive):\n- "+box_12+"\n";}

        var box_13 = $("#box13").val();
        var box_13_2 = $("#box13_2").val();
        var box_13_3 = $("#box13_3").val();
        var box_13_4 = $("#box13_4").val();
        if (box_13 == 'Uninvolved by melanoma in situ') {
            captext += "\nPeripheral Margin (In situ):\n- "+box_13+"\n- Closest margin: "+box_13_3+", distance: "+box_13_2.replace(/mm/,'')+"mm\n";}
        else if (box_13 == 'Involved by melanoma in situ'){
            captext += "\nPeripheral Margin (In situ):\n- "+box_13+"\n- Margin(s) involved: "+box_13_4+"\n";}
        else {captext += "\nPeripheral Margin (In situ):\n- "+box_13+"\n";}

        var box_14 = $("#box14").val();
        var box_14_2 = $("#box14_2").val();
        if (box_14 == 'Uninvolved by invasive melanoma'){
            captext += "\nDeep Margin:\n- Uninvolved by invasive melanoma, distance to deep margin: " + box_14_2.replace(/mm/,'')+ "mm\n";}
        else {captext += "\nDeep Margin:\n- "  + box_14+ "\n";}

        var box_15 = $("#box15").val();
        var box_15_2 = $("#box15_2").val();
        if (box_15 == '>=1/mm2'){
            captext += "\nMitotic Rate:\n- Mitoses / mm^2: "  + box_15_2+ "\n";}
        else {captext += "\nMitotic Rate:\n- "  + box_15+ "\n";}

        var box_16 = $("#box16").val();
        captext += "\nMicrosatellitosis:\n- "  + box_16+ "\n";

        var box_17 = $("#box17").val();
        captext += "\nLymph-Vascular Invasion:\n- "  + box_17+ "\n";

        var box_18 = $("#box18").val();
        captext += "\n+Perineural Invasion:\n- "  + box_18+ "\n";

        var box_19 = $("#box19").val();
        captext += "\n+Tumor-Infiltrating Lymphocytes:\n- "  + box_19+ "\n";

        var box_20 = $("#box20").val();
        captext += "\n+Tumor Regression:\n- "  + box_20+ "\n";

        var box_21 = $("#box21").val();
        captext += "\n+Growth Phase:\n- "  + box_21.join('\n- ') + "\n";

        if ($('#box22').is(':checked')){
            captext += '\nLymph Nodes:';
            var box_23_1 = $("#box23_1").val();
            captext += "\n- Number of sentinel nodes examined: "  + box_23_1;
            var box_23_2 = $("#box23_2").val();
            captext += "\n- Total number of nodes examined: "  + box_23_2;
            var box_23_3 = $("#box23_3").val();
            captext += "\n- Number of lymph nodes with metastases: "  + box_23_3;
            var box_23_4 = $("#box23_4").val();
            captext += "\n+Extranodal tumor extension: "  + box_23_4;
            var box_23_5 = $("#box23_5").val();
            if (box_23_5 != 'Not applicable'){
                captext += "\n+Size of largest metastatic focus, in sentinel node: "  + box_23_5.replace(/mm/,'') + "mm";
            }
            var box_23_6 = $("#box23_6").val();
            if (box_23_6 != 'Not applicable'){
                captext += "\n+Location of metastatic tumor (for sentinel node): "  + box_23_6;
            }
            var box_23_7 = $("#box23_7").val();
            if (box_23_7 != 'Not applicable'){
                captext += "\nMatted nodes: "  + box_23_7+ "\n";
            }
        }

        var box_24 = $("#box24").val();
        var box_25 = $("#box25").val();
        var box_26 = $("#box26").val();
        var box_27 = $("#box27").val();
        captext += '\n\nPathologic Staging (pTNM):\n- ';
        if (box_24 != "Not applicable"){
            captext += box_24.join("")+' '+box_25+" "+box_26+" "+box_27+"\n";}
        else {
            captext += box_25+" "+box_26+" "+box_27+"\n";}


        var box_29 = $("#box29").val();
        if (box_29 != 'None'){
            captext += "\n+ Additional Pathologic Findings:\n- "  + box_29 + "\n";
        }


        $('#outPut-1').val(captext);

				dataObj.singleSection = $('#outPut-1').val();
				makeCreatePdfBtn();

    });
});
