$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/

    //IHCs
    $(function () {
        var availableTags = ['Acinic cell carcinoma','Adenoid cystic carcinoma, Low grade','Adenoid cystic carcinoma, Intermediate grade','Adenoid cystic carcinoma, High grade','Adenocarcinoma, not otherwise specified, Low grade','Adenocarcinoma, not otherwise specified, Intermediate grade','Adenocarcinoma, not otherwise specified, High grade','Basal cell adenocarcinoma','Carcinoma ex pleomorphic adenoma (malignant mixed tumor), Low grade','Carcinoma ex pleomorphic adenoma (malignant mixed tumor), High grade','Carcinoma ex pleomorphic adenoma (malignant mixed tumor), Minimally invasive','Carcinoma ex pleomorphic adenoma (malignant mixed tumor), Invasive ','Carcinoma ex pleomorphic adenoma (malignant mixed tumor), Intracapsular (noninvasive)','Carcinosarcoma (true malignant mixed tumor)','(Hyalinizing) clear cell carcinoma','Cystadenocarcinoma','Epithelial-myoepithelial carcinoma','Low-grade cribriform cystadenocarcinoma','Lymphoepithelial carcinoma','Mammary analogue secretory carcinoma','Metastasizing pleomorphic adenoma','Mucoepidermoid carcinoma, Low grade','Mucoepidermoid carcinoma, Intermediate grade','Mucoepidermoid carcinoma, High grade','Mucinous adenocarcinoma (colloid carcinoma)','High-grade neuroendocrine carcinoma','Large cell neuroendocrine carcinoma','Small cell neuroendocrine carcinoma','Myoepithelial carcinoma (malignant myoepithelioma)','Oncocytic carcinoma','Polymorphous low-grade adenocarcinoma','Cribriform adenocarcinoma of minor salivary origin','Salivary duct carcinoma','Sebaceous adenocarcinoma','Sebaceous lymphadenocarcinoma','Sialoblastoma','Squamous cell carcinoma, primary','Undifferentiated carcinoma, large cell type','Carcinoma, type cannot be determined'
        ];

        function split(val) {
            return val.split(/,\s*/);
        }

        function extractLast(term) {
            return split(term).pop();
        }
        $("input#box10").autocomplete({
            minLength: 1,
            source: function (request, response) {
                // delegate back to autocomplete, but extract the last term
                response($.ui.autocomplete.filter(
                    availableTags, extractLast(request.term)));
            },
            focus: function () {
                // prevent value inserted on focus
                return false;
            },
            select: function (event, ui) {
                var terms = split(this.value);
                // remove the current input
                terms.pop();
                // add the selected item
                terms.push(ui.item.value);
                // add placeholder to get the comma-and-space at the end
                terms.push("");
                this.value = terms.join(", ");
                return false;
            }
        });
    });


//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/

    $('#box1').change(function(){
        var sel = $('#box1').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box1_2').show();}
        else {$('#box1_2').hide();}
    });

    $('#box3').change(function(){
        var sel = $('#box3').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box3_2').show();}
        else {$('#box3_2').hide();}
    });

    $('#box6').change(function(){
        var sel = $('#box6').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box6_2').show();}
        else {$('#box6_2').hide();}
    });

    $('#box7').change(function(){
        var sel = $('#box7').val();
        if (sel == 'Multifocal') {
            $('#box7_2').show();}
        else {
            $('#box7_2').hide();}
    });

    $('#box9').change(function(){
        var sel = $('#box9').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box9_2').show();}
        else {$('#box9_2').hide();}
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
        if (sel == 'Margins uninvolved by carcinoma') {
            $('#box12_2').show();}
        else {$('#box12_2').hide();}
        if (sel == 'Margin(s) involved by carcinoma') {
            $('#box12_3').show();}
        else {$('#box12_3').hide();}
    });

    $("#box20").change(function(){
        if ($(this).is(":checked")){
            $(".lnchk").show();}
        else{
            $(".lnchk").hide();}
    });

    $('#box21').change(function(){
        var sel = $('#box21').val();
        if (sel == 'Other') {
            $('#box21_2').show();}
        else {
            $('#box21_2').hide();}
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

        var captext = "Major Salivary Gland Cancer Synoptic\nAJCC 2018 cancer staging version\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if ($.inArray('Other', box_1) >-1){
            captext += "\nSpecimen:\n- "  + box_1.join('\n- ').replace(/Other/, box_1_2) + "\n";}
        else {captext += "\nSpecimen:\n- "  + box_1.join('\n- ') + "\n";}

        var box_2 = $("#box2").val();
        captext += "\nSpecimen status:\n- "  + box_2+ "\n";

        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        if ($.inArray('Other', box_3) >-1){
            captext += "\nProcedure :\n- "  + box_3.join('\n- ').replace(/Other/, box_3_2) + "\n";}
        else {captext += "\nProcedure :\n- "  + box_3.join('\n- ') + "\n";}

        var box_4 = $("#box4").val();
        captext += "\nSpecimen size:\n- "  + box_4.replace(/cm/,'') + "cm\n";

        var box_5 = $("#box5").val();
        captext += "\nSpecimen Laterality:\n- "  + box_5+ "\n";

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if ($.inArray('Other', box_6) >-1){
            captext += "\nTumor Site:\n- "  + box_6.join('\n- ').replace(/Other/, box_6_2) + "\n";}
        else {captext += "\nTumor Site:\n- "  + box_6.join('\n- ') + "\n";}

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if (box_7 == 'Multifocal'){
            captext += "\nTumor Focality: Multifocal, involving: "  + box_7_2+ "\n";}
        else {captext += "\nTumor Focality:\n- "  + box_7+ "\n";}


        var box_8 = $("#box8").val();
        captext += "\nTumor size:\n- "  + box_8.replace(/cm/,'') + "cm\n";

        var box_9 = $("#box9").val();
        var box_9_2 = $("#box9_2").val();
        if ($.inArray('Other', box_9) >-1){
            captext += "\n+ Tumor Description:\n- "  + box_9.join('\n- ').replace(/Other/, box_9_2) + "\n";}
        else {captext += "\n+ Tumor Description:\n- "  + box_9.join('\n- ') + "\n";}

        var box_10 = $("#box10").val();
        captext += "\nHistologic Type:\n- "  + box_10 + "\n";

        var box_11 = $("#box11").val();
        var box_11_2 = $("#box11_2").val();
        if(box_11 != "Not applicable"){
            if (box_11 == 'Other'){
                captext += "\nHistologic Grade:\n- "  + box_11_2+ "\n";}
            else {captext += "\nHistologic Grade:\n- "  + box_11+ "\n";}
        }


        var box_12 = $("#box12").val();
        var box_12_2 = $("#box12_2").val();
        var box_12_3 = $("#box12_3").val();
        if (box_12 == 'Margins uninvolved by carcinoma') { captext += "\nMargins:\n- "+box_12+"\n- "+box_12_2+"\n";}
        else if (box_12 == 'Margin(s) involved by carcinoma'){ captext += "\nMargins:\n- "+box_12+"\n- "+box_12_3+"\n";}
        else {captext += "\nMargins:\n- "+box_12+"\n";}

        var box_13 = $("#box13").val();
        captext += "\nLymph-Vascular Invasion:\n- "  + box_13+ "\n";

        var box_14 = $("#box14").val();
        captext += "\nPerineural Invasion:\n- "  + box_14+ "\n";

        var box_15 = $("#box15").val();
        captext += "\nLymph Nodes, Extranodal Extension :\n- "  + box_15+ "\n";

        var box_16 = $("#box16").val();
        var box_17 = $("#box17").val();
        var box_18 = $("#box18").val();
        var box_19 = $("#box19").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_16 != "Not applicable"){captext += box_16.join("")+' '+box_17+" "+box_18+" "+box_19+"\n";}
        else {captext += box_17+" "+box_18+" "+box_19+"\n";}

        if ($("#box20").is(':checked')) {
            var box_20_1 = $("#box20_1").val();
            var box_20_2 = $("#box20_2").val();
            captext += "\nLymph nodes examined: "+box_20_1+"\nLymph nodes involved: "+box_20_2+"\n";}

        var box_21 = $("#box21").val();
        var box_21_2 = $("#box21_2").val();
        if(box_21 != "Not applicable"){
            if (box_21 == 'Other'){
                captext += "\n+ Additional Pathologic Findings :\n- "  + box_21_2+ "\n";}
            else {captext += "\n+ Additional Pathologic Findings :\n- "  + box_21+ "\n";}
        }


        var box_22 = $("#box22").val();
        captext += "\n+ Ancillary Studies:\n- "  + box_22+ "\n";

        var box_23 = $("#box23").val();
        if(box_23 != "Not applicable"){
            captext += "\n+ Clinical History:\n- "  + box_23+ "\n";}




        $('#outPut-1').val(captext);

				dataObj.singleSection = $('#outPut-1').val();
				makeCreatePdfBtn();

    });
});
