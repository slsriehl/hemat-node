$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/




//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/

    $("#box11").change(function() {
        $("#box11_1").toggle();
    });

    $("#box16").change(function() {
        $("#box16_1").toggle();
        $("#box16_2").toggle();
        $("#box16_3").toggle();
    });

    $("#box32").change(function() {
        $("#box32_1").toggle();
        $("#box32_2").toggle();
    });

    $('#box1').change(function(){
        var sel = $('#box1').val();
        if ($.inArray('Other:', sel) >-1) {
            $('#box1_2').show();}
        else {$('#box1_2').hide();}
    });

    $('#box2').change(function(){
        var sel = $('#box2').val();
        if (sel == 'Other:') {
            $('#box2_2').show();}
        else {$('#box2_2').hide();}
    });

    $('#box9').change(function(){
        var sel = $('#box9').val();
        if (sel == 'Other:') {
            $('#box9_2').show();}
        else {$('#box9_2').hide();}
    });

    $('#box10').change(function(){
        var sel = $('#box10').val();
        if (sel == 'Other:') {
            $('#box10_2').show();}
        else {$('#box10_2').hide();}
    });

    $('#box14').change(function(){
        var sel = $('#box14').val();
        if ($.inArray('Mucinous tumor component:', sel) >-1) {
            $('#box14_2').show();}
        else {$('#box14_2').hide();}
    });

    $('#box15').change(function(){
        var sel = $('#box15').val();
        if (sel == 'Tumor is adherent to other organs or structures;') {
            $('#box15_2').show();}
        else {$('#box15_2').hide();}
        if (sel == 'Tumor directly invades adjacent structures;') {
            $('#box15_3').show();}
        else {$('#box15_3').hide();}
        if (sel == 'Tumor penetrates to the surface of the visceral peritoneum (serosa) and directly invades adjacent structures;') {
            $('#box15_4').show();}
        else {$('#box15_4').hide();}
    });

    $('#box21').change(function(){
        var sel = $('#box21').val();
        if (sel == 'Uninvolved by invasive carcinoma;') {
            $('#box21_2').show();}
        else {$('#box21_2').hide();}
        if (sel == 'Involved by invasive carcinoma;') {
            $('#box21_3').show();}
        else {$('#box21_3').hide();}
    });

    $('#box26').change(function(){
        var sel = $('#box26').val();
        if (sel == 'Present;') {
            $('#box26_2').show();}
        else {$('#box26_2').hide();}
    });

    $('#box31').change(function(){
        var sel = $('#box31').val();
        if (sel == 'pM1') {
            $('#box31_2').show();}
        else {$('#box31_2').hide();}
    });



//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('#writeReport').on('click', function () {

        var captext = "CAP Colorectal Cancer Summary\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if ($.inArray('Other:', box_1) >-1){
            captext += "\nSpecimen:\n- "  + box_1.join('\n- ').replace(/Other:/, box_1_2) + "\n";}
        else {captext += "\nSpecimen:\n- "  + box_1.join('\n- ') + "\n";}

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if (box_2 == 'Other:'){
            captext += "\nProcedure:\n- "  + box_2_2+ "\n";}
        else {captext += "\nProcedure:\n- "  + box_2+ "\n";}

        var box_3 = $("#box3").val();
        if (box_3 != 'Not applicable'){
            captext += "\n+ Specimen Length: "  + box_3.replace(/cm/, '') + "cm\n";
        }

        var box_4 = $("#box4").val();
        captext += "\nTumor Site:\n- "  + box_4.join('\n- ') + "\n";

        var box_5 = $("#box5").val();
        captext += "\n+ Tumor Location:\n- "  + box_5+ "\n";

        var box_6 = $("#box6").val();
        captext += "\nTumor Size:\n- "  + box_6.replace(/cm/, '') + "cm\n";

        var box_7 = $("#box7").val();
        captext += "\nMacroscopic Tumor Perforation:\n- "  + box_7+ "\n";

        var box_8 = $("#box8").val();
        if (box_8 != 'Not applicable'){
            captext += "\n+ Macroscopic Intactness of Mesorectum:\n- "  + box_8+ "\n";}

        var box_9 = $("#box9").val();
        var box_9_2 = $("#box9_2").val();
        if (box_9 == 'Other:'){
            captext += "\nHistologic Type:\n- "  + box_9_2+ "\n";}
        else {captext += "\nHistologic Type:\n- "  + box_9+ "\n";}

        var box_10 = $("#box10").val();
        var box_10_2 = $("#box10_2").val();
        if (box_10 == 'Other:'){
            captext += "\nHistologic Grade:\n- "  + box_10_2+ "\n";}
        else {captext += "\nHistologic Grade:\n- "  + box_10+ "\n";}

        if ($('#box11').is(':checked')){
            var box_12 = $("#box12").val();
            captext += "\n+ Intratumoral Lymphocytic Response:\n- "  + box_12+ "\n";

            var box_13 = $("#box13").val();
            captext += "\n+ Peritumor Lymphocytic Response (Crohn-like response):\n- "  + box_13+ "\n";

            var box_14 = $("#box14").val();
            var box_14_2 = $("#box14_2").val();
            if ($.inArray('Mucinous tumor component:', box_14) >-1){
                captext += "\n+ Tumor Subtype and Differentiation:\n- "  + box_14.join('\n- ').replace(/Mucinous tumor component:/, box_14_2) + "\n";}
            else {captext += "\n+ Tumor Subtype and Differentiation:\n- "  + box_14.join('\n- ') + "\n";}

        }

        var box_15 = $("#box15").val();
        var box_15_2 = $("#box15_2").val();
        var box_15_3 = $("#box15_3").val();
        var box_15_4 = $("#box15_4").val();
        if (box_15 == 'Tumor is adherent to other organs or structures;') {
            captext += "\nMicroscopic Tumor Extension:\n- "+box_15.replace(/;/, ', organs involved: '+box_15_2)+"\n";}
        else if (box_15 == 'Tumor directly invades adjacent structures;'){
            captext += "\nMicroscopic Tumor Extension:\n- "+box_15.replace(/;/, ', structures involved: '+box_15_3)+"\n";}
        else if (box_15 == 'Tumor penetrates to the surface of the visceral peritoneum (serosa) and directly invades adjacent structures;'){
            captext += "\nMicroscopic Tumor Extension:\n- "+box_15.replace(/;/, ', structures involved: '+box_15_4)+"\n";}
        else {captext += "\nMicroscopic Tumor Extension:\n- "+box_15+"\n";}

        if ($('#box16').is(':checked')) {
            captext += '\nAll Margins Uninvolved by Invasive Carcinoma:\n';
            var box_16_1 = $("#16_1").val();
            captext += "\nDistance of invasive carcinoma from closest margin: "  + box_16_1 + "cm";
            var box_16_2 = $("#16_2").val();
            captext += "\nSpecify margin:: "  + box_16_2 + "\n";
        }

        if (!$('#box16').is(':checked')) {
            var box_17 = $("#box17").val();
            captext += "\nProximal Margin:\n- "  + box_17+ "\n";

            var box_18 = $("#box18").val();
            captext += "\nDistal Margin:\n- "  + box_18+ "\n";

            var box_19 = $("#box19").val();
            captext += "\nCircumferential (Radial) or Mesenteric Margin :\n- "  + box_19+ "\n";

            var box_20 = $("#box20").val();
            if (box_20 != 'Not applicable'){
                captext += "\nDeep Margin (endoscopic mucosal resections):\n- "  + box_20+ "\n";}

            var box_21 = $("#box21").val();
            var box_21_2 = $("#box21_2").val();
            var box_21_3 = $("#box21_3").val();
            if (box_21 != 'Not applicable'){
                if (box_21 == 'Uninvolved by invasive carcinoma;') {
                    captext += "\nMucosal Margin (noncircumferential transanal disk excision):\n- "+box_21.replace(/;/, ', '+box_21_2)+"\n";}
                else if (box_21 == 'Involved by invasive carcinoma;'){
                    captext += "\nMucosal Margin (noncircumferential transanal disk excision):\n- "+box_21.replace(/;/, ', '+box_21_3)+"\n";}
                else {captext += "\nMucosal Margin (noncircumferential transanal disk excision):\n- "+box_21+"\n";}
            }

            var box_22 = $("#box22").val();
            if (box_22 != 'Not applicable'){
                captext += "\nOther involved margin(s):\n- "  + box_22 + "\n";}

            var box_23 = $("#box23").val();
            captext += "\nTreatment Effect:\n- "  + box_23+ "\n";

            var box_24 = $("#box24").val();
            captext += "\nLymph-Vascular Invasion:\n- "  + box_24+ "\n";

            var box_25 = $("#box25").val();
            captext += "\nPerineural Invasion:\n- "  + box_25+ "\n";

            var box_26 = $("#box26").val();
            var box_26_2 = $("#box26_2").val();
            if (box_26 == 'Present;'){
                captext += "\nDiscontinous Extra-mural Tumor Deposits:\n- "  + box_26.replace(/;/, ', # of deposits: '+box_26_2)+ "\n";}
            else {captext += "\nDiscontinous Extra-mural Tumor Deposits:\n- "  + box_26+ "\n";}

            var box_27 = $("#box27").val();
            captext += "\n+ Type of Polyp in Which Invasive Carcinoma Arose:\n- "  + box_27+ "\n";


        }

        var box_28 = $("#box28").val();
        var box_29 = $("#box29").val();
        var box_30 = $("#box30").val();
        var box_31 = $("#box31").val();
        var box_31_2 = $("#box31_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_28 != "Not applicable"){captext += box_28.join("")+' '+box_29+" "+box_30+" "+box_31+"\n";}
        else {captext += box_29+" "+box_30+" "+box_31+"\n";}
        if (box_31 == 'pM1'){captext += "\nMetastatic site(s): "  + box_31_2+ "\n";}


        if ($("#box32").is(':checked')) {
            var box_32_1 = $("#box32_1").val();
            var box_32_2 = $("#box32_2").val();
            captext += "\nLymph nodes examined: "+box_32_1+"\nLymph nodes involved: "+box_32_2+"\n";}



        $('#outPut-1').val(captext);

				dataObj.singleSection = $('#outPut-1').val();
				makeCreatePdfBtn();

    });
});
