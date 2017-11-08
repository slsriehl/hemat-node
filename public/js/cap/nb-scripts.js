/* Neuroblastoma CAP Template scripts */

$(window).on('load', function(){
// scripts for div popups here
        $('#box1').change(function() {
            var sel = $('#box1').val();
            if (sel == 'Other:'){
                $('#box1_2').show();
            }else if (sel != 'Other:'){
                $('#box1_2').hide();}
        });

        $('#box2').change(function() {
            var sel = $('#box2').val();
            if (sel == 'Other:'){
                $('#box2_2').show();
            } else if (sel!= 'Other:'){
                $('#box2_2').hide();}
        });

        $('#box3').change(function() {
            var sel = $('#box3').val();
            if ($.inArray('Other', sel) >-1){
                $('#box3_2').show();
            } else {
                $('#box3_2').hide();}
        });

        $('#box7').change(function() {
            var sel = $('#box7').val();
            if ($.inArray('Ganglioneuroblastoma; Nodular subtype:', sel) > -1){
                $('#box7_2').show();
            } else {
                $('#box7_2').hide();}
        });

        $('#box13').change(function() {
            var sel = $('#box13').val();
            if (sel == 'Margin(s) involved by tumor'){
                $('.margin').show();
            } else if (sel != 'Margin(s) involved by tumor'){
                $('.margin').hide();}
        });

        $('#box16').change(function() {
            var sel = $('#box16').val();
            if (sel == 'Regional lymph node metastasis present'){
                $('.regln').show();
            } else if (sel != 'Regional lymph node metastasis present'){
                $('.regln').hide();}
        });

        $('#box19').change(function() {
            var sel = $('#box19').val();
            if (sel == 'Distant metastasis present'){
                $('.distmet').show();
            } else if (sel != 'Distant metastasis present'){
                $('.distmet').hide();}
        });

        $('#box21').change(function(){
            var sel = $('#box21').val();
            if (sel == 'Other') {
                $('#box21_2').show();}
            else {
                $('#box21_2').hide();}
        });

        $('#box22').change(function(){
            var sel = $('#box22').val();
            if (sel == 'Other') {
                $('#box22_2').show();}
            else {
                $('#box22_2').hide();}
        });

        $('#box23').change(function(){
            var sel = $('#box23').val();
            if (sel == 'Other') {
                $('#box23_2').show();}
            else {
                $('#box23_2').hide();}
        });

        $('#box24').change(function(){
            var sel = $('#box24').val();
            if (sel == 'Other') {
                $('#box24_2').show();}
            else {
                $('#box24_2').hide();}
        });



        $('.staging').click(function(){
            $('.staginginfo').toggle();
        });

//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('#writeReport').on('click', function(){


// get assign the values from each text input
        var captext = "Neuroblastoma Cancer Synoptic\n\n";
        var box_1 = $("#box1").val();
        if (box_1 == 'Other:'){
            var box_1_2 = $("#box1_2").val();
            captext += "Specimen Identification:\n- "+box_1_2+"\n";
        }
        else {captext += "Specimen Identification:\n- "+box_1+"\n";}

         var box_2 = $("#box2").val();
         if (box_2 == 'Other:'){
         box_2_2 = $("#box2_2").val();
         captext += "\nProcedure:\n- "+box_2_2+"\n";
         }
         else{captext += "\nProcedure:\n- "+box_2+"\n";}

         var box_3 = $("#box3").val();
         if ($.inArray('Other', box_3) >-1){
         var box_3_2 = $("#box3_2").val();
         captext += "\nSpecimen Laterality:\n- "+box_3.join("\n- ").replace(/Other/, box_3_2)+"\n"; }
         else {captext += "\nSpecimen Laterality:\n- "+box_3.join("\n- ")+"\n";}

         var box_4 = $("#box4").val();
         captext += "\nTumor Size:\n- "+box_4.replace(/cm/, '')+"cm\n";

         var box_6 = $("#box6").val();
         captext += "\nPatient Age:\n- "+box_6+"\n";

         var box_7 = $("#box7").val();
         if ($.inArray('Ganglioneuroblastoma; Nodular subtype:', box_7) > -1){
         var box_7_2 = $("#box7_2").val();
         captext += "\nHistologic Type:\n- "+box_7.join("\n- ").replace(/specify number of nodules/, box_7_2+' nodules')+"\n";
         }
         else {captext += "\nHistologic Type:\n- "+box_7.join("\n- ")+"\n";}

         var box_8 = $("#box8").val();
         captext += "\nDegree of Differentiation:\n- "+box_8+"\n";
         var box_9 = $("#box9").val();
         captext += "\nMitotic-Karyorrhectic Index (MKI):\n- "+box_9+"\n";
         var box_10 = $("#box10").val();
         captext += "\nTumor Calcification:\n- "+box_10+"\n";
         var box_11 = $("#box11").val();
         captext += "\nTreatment History:\n- "+box_11+"\n";
         var box_12 = $("#box12").val();
         captext += "\nInternational Neuroblastoma Pathology Classification (INPC):\n- "+box_12+"\n";

         var box_13 = $("#box13").val();
         if (box_13 == 'Margin(s) involved by tumor'){
         var box_13_2 = $('#box13_2').val();
         captext += "\nMargins:\n- "+box_13+": "+box_13_2+"\n";}
         else {captext += "\nMargins:\n- "+box_13+"\n";}

         var box_14 = $("#box14").val();
         captext += "\nLymph-Vascular Invasion:\n- "+box_14+"\n";
         var box_15 = $("#box15").val();
         captext += "\nExtent of Tumor:\n- "+box_15+"\n";

         var box_16 = $("#box16").val();
         if (box_16 == 'Regional lymph node metastasis present') {
         var box_16_2 = $('#box16_2 ').val();
         captext += "\nRegional Lymph Nodes:\n- "+box_16+"; Site: "+box_16_2+"\n";}
         else {captext += "\nRegional Lymph Nodes:\n- "+box_16+"\n";}


         var box_17 = $("#box17").val();
         captext += "\nNumber of lymph nodes examined:\n- "+box_17+"\n";
         var box_18 = $("#box18").val();
         if (box_17 != 'No lymph nodes submitted'){
         captext += "\nNumber of lymph nodes involved by tumor:\n- "+box_18+"\n";}

         var box_19 = $("#box19").val();
         if (box_19 == 'Distant metastasis present'){
         var box_19_2 = $('#box19_2').val();
         captext += "\nDistant Metastasis:\n- "+box_19+"; Site: "+box_19_2+"\n";}
         else {captext += "\nDistant Metastasis:\n- "+box_19+"\n";}

         var box_20 = $("#box20").val();
         captext += "\nInternational Neuroblastoma Staging System (INSS):\n- "+box_20+"\n";

         captext += '\n-RELEVANT BIOMARKER RESULTS-\n'
         var box_21 = $("#box21").val();
         var box_21_2 = $("#box21_2").val();
         if (box_21 == 'Other'){
         captext += "\nMYCN Status:\n- "  + box_21_2+ "\n";}
         else {captext += "\nMYCN Status:\n- "  + box_21+ "\n";}


         var box_22 = $("#box22").val();
         var box_22_2 = $("#box22_2").val();
         if (box_22 == 'Other'){
         captext += "\nLOH Status:\n- "  + box_22_2+ "\n";}
         else {captext += "\nLOH Status:\n- "  + box_22+ "\n";}


         var box_23 = $("#box23").val();
         var box_23_2 = $("#box23_2").val();
         if (box_23 == 'Other'){
         captext += "\nPloidy:\n- "  + box_23_2+ "\n";}
         else {captext += "\nPloidy:\n- "  + box_23+ "\n";}


         var box_24 = $("#box24").val();
         var box_24_2 = $("#box24_2").val();
         if(box_24 != "Not applicable"){
         if (box_24 == 'Other'){
         captext += "\nAlk status:\n- "  + box_24_2+ "\n";}
         else {captext += "\nAlk status:\n- "  + box_24+ "\n";}
         }


        $('#outPut-1').val(captext);

				dataObj.singleSection = $('#outPut-1').val();
				makeCreatePdfBtn();

    });
});



/**
 * Created by chandrakrishnan on 5/7/2017.
 */
