$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/




//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/

    $('#box1').change(function () {
        var sel = $('#box1').val();
        if (sel == 'Other:') {
            $('input[id=box1_2]').show();
        } else if (sel != 'Other:') {
            $('input[id=box1_2]').hide();
        }
    });

    $('#box4').change(function () {
        var sel = $('#box4').val();
        if (sel == 'Pedunculated with stalk') {
            $('input[id=box4_2]').show();
        } else if (sel != 'Pedunculated with stalk') {
            $('input[id=box4_2]').hide();
        }
    });

    $('#box6').change(function () {
        var sel = $('#box6').val();
        if (sel == 'Other:') {
            $('input[id=box6_2]').show();
        } else if (sel != 'Other:') {
            $('input[id=box6_2]').hide();
        }
    });

    $('#box13').change(function () {
        var sel = $('#box13').val();
        if (sel == 'Other:') {
            $('input[id=box13_2]').show();
        } else if (sel != 'Other:') {
            $('input[id=box13_2]').hide();
        }
    });


//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('#writeReport').on('click', function () {

        var captext = "Colon Cancer (Polypectomy) Summary\n\n";
// Checklist variables
        var box_1 = $("#box1").val();
        if (box_1 == 'Other:'){
            box_1_2 = $("#box1_2").val();
            captext += "Tumor Site:\n- "+box_1+" "+box_1_2+"\n";}
        else {captext += "Tumor Site:\n- "+box_1+"\n";}

        var box_2 = $("#box2").val();
        captext += "\n+ Specimen Integrity:\n- "+box_2+"\n";
        var box_3 = $("#box3").val();
        captext += "\nPolyp size, maximum dimension (cm):\n- "+box_3.replace(/cm/,'')+"cm\n";

        var box_4 = $("#box4").val();
        if (box_4 == 'Pedunculated with stalk'){
            box_4_2 = $("#box4_2").val();
            captext += "\n+ Polyp Configuration:\n- "+box_4+"; Stalk length: "+box_4_2+"cm\n";}
        else {captext += "\n+ Polyp Configuration:\n- "+box_4+"\n";}

        var box_5 = $("#box5").val();
        captext += "\nSize of Invasive Carcinoma (cm): "+box_5+"\n";

        var box_6 = $("#box6").val();
        if (box_6 == 'Other:'){
            box_6_2 = $("#box6_2").val();
            captext += "\nHistologic Type:\n- "+box_6+" "+box_6_2+"\n";}
        else {captext += "\nHistologic Type:\n- "+box_6+"\n";}

        var box_7 = $("#box7").val();
        captext += "\nHistologic Grade:\n- "+box_7+"\n";
        var box_8 = $("#box8").val();
        captext += "\nMicroscopic Tumor Extension:\n- "+box_8+"\n";

        var box_9 = $("#box9").val();
        if($('#box9').is(':checked')){
            captext += "\nMargins:\n Deep Stalk:\n - "+box_9+"\n";}
        if($('#box9_1').is(':checked')){
            var box_9_1 = $("#box9_1").val();
            var box_9_2 = $("#box9_2").val();
            captext += "\nMargins:\n Deep Stalk:\n - "+box_9_1+"\n - Distance to stalk margin (cm): "+box_9_2+"cm\n";}
        if($('#box9_3').is(':checked')){
            var box_9_3  = $("#box9_3").val();
            captext += "\nMargins:\n Deep Stalk:\n - "+box_9_3+"\n";}

        var box_10 = $("#box10").val();
        captext += "\n Mucosal:\n - "+box_10+"\n";
        var box_11 = $("#box11").val();
        captext += "\nLymph-Vascular Invasion:\n- "+box_11+"\n";
        var box_11_5 = $("#box11_5").val();
        captext += "\nTNM (polyp):\n- "+box_11_5+"\n";
        var box_12 = $("#box12").val();
        captext += "\nType of Polyp in Which Invasive Carcinoma Arise:\n- "+box_12+"\n";

        var box_13 = $("#box13").val();
        if (box_13 == 'Other:'){
            box_13_2 = $("#box13_2").val();
            captext += "\nAdditional Pathologic Findings:\n- "+box_13+" "+box_13_2+"\n";}
        else {captext += "\nAdiitional Pathologic Findings:\n- "+box_13+"\n";}


        var box_14 = $("#box14").val();
        captext += "\n+ Ancillary Studies:\n- "+box_14+"\n";


        $('#outPut-1').val(captext);

				dataObj.singleSection = $('#outPut-1').val();
				makeCreatePdfBtn();

    });
});
