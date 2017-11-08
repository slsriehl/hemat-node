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
            $('#box1_2').show();
        } else if (sel != 'Other:') {
            $('#box1_2').hide();
        }
    });

    $('#box4').change(function () {
        var sel = $('#box4').val();
        if ($.inArray('Other:', sel) >-1) {
            $('#box4_2').show();
        } else {
            $('#box4_2').hide();
        }
    });

    $('#box5').change(function () {
        var sel = $('#box5').val();
        if ($.inArray('Other:', sel) >-1) {
            $('#box5_2').show();
        } else {
            $('#box5_2').hide();
        }
    });

    $('#box6').change(function(){
        var sel = $('#box6').val();
        if (sel == 'Margins negative for tumor') {
            $('#box6_2').show();
            $('#box6_3').show();}
        else {
            $('#box6_2').hide();
            $('#box6_3').hide();}
        if (sel == 'Margin(s) involved by sarcoma') {
            $('#box6_4').show();}
        else {$('#box6_4').hide();}
    });

    $('#box9').change(function () {
        var sel = $('#box9').val();
        if (sel == 'Necrosis present') {
            $('#box9_2').show();
        } else if (sel != 'Necrosis present') {
            $('#box9_2').hide();
        }
    });


//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('#writeReport').on('click', function () {

// .join("\n- ") use this for var with multiple select options
// .replace(/;/g,"\n- ") use this for var that needs option to be split in new line
// Checklist variables
			var captext = "Ewing Sarcoma/PNET Cancer Template (Biopsy)\n\n";
        var box_1 = $("#box1").val();
        if (box_1 == 'Other:'){
            var box_1_2 = $("#box1_2").val();
            captext += "Procedure:\n- "+box_1+" "+box_1_2+"\n";}
        else {captext += "Procedure:\n- "+box_1+"\n";}

        var box_2 = $("#box2").val();
        captext += "\nTumor Site:\n- "+box_2+"\n";

        var box_3 = $("#box3").val();
        if(box_3 != 'Cannot Be Determined'){
            captext += "\nTumor Size:\n- "+box_3.replace(/cm/, '')+"cm\n";}
        else {captext += "\nTumor Size:\n- "+box_3+"\n";}

        var box_4 = $("#box4").val();
        if (box_4 != 'Not applicable'){
            if ($.inArray('Other:', box_4)){
                var box_4_2 = $("#box4_2").val();
                captext += "\n+ Extent of Osseous Tumors:\n- "+box_4.join('\n- ').replace(/Other:/, box_4_2)+"\n";}
            else {captext += "\n+ Extent of Osseous Tumors:\n- "+box_4.join("\n- ")+"\n";}
        }

        var box_5 = $("#box5").val();
        if (box_5 != 'Not applicable'){
            if ($.inArray('Other:', box_4)){
                var box_5_2 = $("#box5_2").val();
                captext += "\n+ Extent of Primary Extraosseous Tumors:\n- "+box_5.join('\n- ').replace(/Other:/, box_5_2)+"\n";}
            else {captext += "\n+ Extent of Primary Extraosseous Tumors:\n- "+box_5.join("\n- ")+"\n";}
        }

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        var box_6_4 = $("#box6_4").val();
        if (box_6 == 'Margins negative for tumor') {
            captext += "\nMargins negative for tumor:\n- Distance from nearest soft tissue margin: "+box_6_2.replace(/cm/, '')+"cm\n- Distance from nearest bone margin: "+box_6_3.replace(/cm/,'')+"cm\n";}
        else if (box_6 == 'Margin(s) involved by sarcoma'){
            captext += "\nMargins involved by sarcoma:\n- Site involved: "+box_6_4+"\n";}
        else {captext += "\nMargins:\n- "+box_6+"\n";}

        var box_7 = $("#box7").val();
        captext += "\n+ Lymph-Vascular Invasion:\n- "+box_7+"\n";
        var box_8 = $("#box8").val();
        captext += "\nPrebiopsy Treatment:\n- "+box_8.join("\n- ")+"\n";

        var box_9 = $("#box9").val();
        if (box_9 == 'Necrosis present'){
            var box_9_2 = $("#box9_2").val();
            captext += "\nNecrosis Postchemotherapy:\n- "+box_9+"\n- Percent necrosis: "+box_9_2+"\n";}
        else {captext += "\nTreatment Effect :\n- "+box_9+"\n";}

        var box_10 = $("#box10").val();
        if (box_10 != 'Not applicable'){
            captext += "\n+ Additional Pathologic Findings:\n- "+box_10+"\n";}

        var box_11 = $("#box11").val();
        captext += "\n+ Cytogenetics:\n- "+box_11+"\n";

        var box_12 = $("#box12").val();
        captext += "\n+ Molecular Pathology:\n- "+box_12.join('\n- ')+"\n";


        $('#outPut-1').val(captext);

				dataObj.singleSection = $('#outPut-1').val();
				makeCreatePdfBtn();
    });
});
