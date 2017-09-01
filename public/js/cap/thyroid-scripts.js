$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/

    $(function () {
        var availableTags = ["ACTH", "Adenovirus", "ALK-1", "A1-AT", "AFP",
            "Amyloid-A", "APP", "B72.3", "INI1", "BCL2", "BCL6", "BER-Ep",
            "Beta-catenin", "Ber-EP4", "BKVirus", "BRAF V600E", "C4d", "CA125", "Calcitonin",
            "Calponin", "Calretinin", "CD1a", "CD2", "CD3", "CD4", "CD5", "CD7",
            "CD8", "CD10", "CD15", "CD20", "CD21", "CD23", "CD25", "CD30",
            "CD34", "CD43", "CD44", "CD45", "CD45RO", "CD56", "CD57", "CD61",
            "CD68", "CD71", "CD79a", "CD99", "CD117", "CD123", "CD138", "CDX2",
            "CEA-mono", "CEA-poly", "Chromogranin", "CMV", "ColIV", "CyclinD1",
            "CDK4", "Keratin 34BE12", "Keratin 8", "Keratin 5/6", "Keratin 7", "Keratin AE1/3", "Keratin Cam5.2",
            "Keratin 17", "Keratin 19", "Keratin 20", "Keratin MAK-6", "D2-40", "DOG-1", "Desmin",
            "E-cad", "EBV-LMP", "EBV-ISH", "EMA", "ER", "FactorXIIIa", "FSH",
            "Galectin-3", "Gastrin", "GCDFP", "GFAP", "Glucagon", "GLUT-1",
            "Glut-Synth", "GlycophorinA", "Glypican-3", "GH", "H.P.", "HBME-1",
            "HBcore", "HBsurface", "HCG", "HepPar1", "HER2/Neu(IHC)", "HSVI&II",
            "Actin,muscle", "HHV-8", "HMB45", "HPV-HR(ISH)", "HMB45", "HPL",
            "IDH-1", "IgA", "IgG", "IgM", "Inhibin", "Insulin", "JCVirus",
            "Kappa(IHC)", "Lambda(IHC)", "Kappa(ISH)", "Lambda(ISH)",
            "Ki-67(MIB1)", "LH", "Lysozyme", "Mast-celltrypt", "MelanA",
            "MelanomaAA", "Mammaglobin", "MAP-2", "MITF", "MLH-1", "MOC-31",
            "MSH-2", "MSH-6", "MUM-1", "MPO", "Myogenin", "Neu-N", "NF", "NSE",
            "OCT-2", "OCT3/4", "p16", "p504s", "p53", "p63", "Parainfluenza",
            "ParvoB19", "PAX-5", "PAX-8", "PDGF-b", "PE10", "Perforin", "pHH3",
            "PLAP", "PMS-2", "PR", "Prolactin", "PTH", "Prostate triple stain",
            "PSA", "PSAP", "RCC", "RSV", "S100", "SALL4", "SMA", "SMMHC",
            "Smoothelin", "Somatostatin", "SurfactantA", "SurfactantB",
            "Synaptophysin", "Tau", "TdT", "Thyroglobulin", "Toxoplasma",
            "Transthyretin", "Trypsin", "TSH", "TTF-1", "Tubulin", "Tyrosinase",
            "Ubiquitin", "Uroplakin", "Varicella", "Villin", "WT-1"
        ];

        function split(val) {
            return val.split(/,\s*/);
        }

        function extractLast(term) {
            return split(term).pop();
        }
        $("input#box28").autocomplete({
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
        if ($.inArray('Other:', sel) >-1) {
            $('#box1_2').show();}
        else {$('#box1_2').hide();}
    });

    $('#box2').change(function(){
        var sel = $('#box2').val();
        if ($.inArray('Other:', sel) >-1) {
            $('#box2_2').show();}
        else {$('#box2_2').hide();}
    });

    $('#box7').change(function(){
        var sel = $('#box7').val();
        if ($.inArray('Other:', sel) >-1) {
            $('#box7_2').show();}
        else {$('#box7_2').hide();}
    });

    $('#box9').change(function(){
        var sel = $('#box9').val();
        if ($.inArray('Other:', sel) >-1) {
            $('#box9_1').show();}
        else {$('#box9_1').hide();}
        if ($.inArray('Papillary carcinoma', sel) >-1) {
            $('.papcahisto').show();}
        else {$('.papcahisto').hide();}
        if ($.inArray('Follicular carcinoma', sel) >-1) {
            $('.folcahisto').show();}
        else {$('.folcahisto').hide();}
    });

    $('#box10_1').change(function(){
        var sel = $('#box10_1').val();
        if (sel == 'Other:') {
            $('#box10_1b').show();}
        else {$('#box10_1b').hide();}
    });

    $('#box10_2').change(function(){
        var sel = $('#box10_2').val();
        if (sel == 'Other:') {
            $('#box10_2b').show();}
        else {$('#box10_2b').hide();}
    });

    $('#box13').change(function(){
        var sel = $('#box13').val();
        if (sel == 'Margins uninvolved by carcinoma') {
            $('#box13_1').show();}
        else {$('#box13_1').hide();}
        if (sel == 'Margin(s) involved by carcinoma') {
            $('#box13_2').show();}
        else {$('#box13_2').hide();}
    });

    $('#box23').change(function(){
        $('.lndiv').toggle();
    });


//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('#writeReport').on('click', function () {


        var captext = "CAP Thyroid cancer summary\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if ($.inArray('Other:', box_1) > -1){
            captext += "\nProcedure:\n- "  + box_1.join('\n- ').replace(/Other:/, box_1_2)+ "\n";}
        else {captext += "\nProcedure:\n- "  + box_1.join('\n- ')+ "\n";}

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if ($.inArray('Other:', box_2) > -1){
            captext += "\n+ Lymph node sampling:\n- "  + box_2.join('\n- ').replace(/Other:/,'')+box_2_2+ "\n";
        }
        else {captext += "\n+ Lymph node sampling:\n- "  + box_2.join('\n- ')+ "\n";}

        var box_3 = $("#box3").val();
        captext += "\n+ Specimen Integrity:\n- "  + box_3+ "\n";

        var box_4_1 = $("#box4_1").val();
        var box_4_2 = $("#box4_2").val();
        var box_4_3 = $("#box4_3").val();
        var box_4_4 = $("#box4_4").val();
        var box_4_5 = $("#box4_5").val();
        var box_4_6 = $("#box4_6").val();
        captext += "\nSpecimen Size:"
        if (box_4_1 != "Dimensions (cm)"){
            captext += '\n- Right lobe ('+ box_4_1.replace(/cm/,'') + "cm)";}
        if (box_4_2 != "Dimensions (cm)"){
            captext += '\n- Left lobe ('+ box_4_2.replace(/cm/,'') + "cm)";}
        if (box_4_3 != "Dimensions (cm)"){
            captext += '\n- Isthmus ('+ box_4_3.replace(/cm/,'') + "cm)";}
        if (box_4_4 != "Dimensions (cm)"){
            captext += '\n- Central compartment ('+ box_4_4.replace(/cm/,'') + "cm)";}
        if (box_4_5 != "Dimensions (cm)"){
            captext += '\n- Right neck dissection ('+ box_4_5.replace(/cm/,'') + "cm)";}
        if (box_4_6 != "Dimensions (cm)"){
            captext += '\n- Left neck dissection ('+ box_4_6.replace(/cm/,'') + "cm)";}
        else if (box_4_1 == "Dimensions (cm)" && box_4_2 == "Dimensions (cm)" && box_4_3 == "Dimensions (cm)" && box_4_4 == "Dimensions (cm)" && box_4_5 == "Dimensions (cm)" && box_4_6 == "Dimensions (cm)"){
            captext += '\n- Size cannot be determined (see gross description)'}

        var box_5 = $("#box5").val();
        captext += "\n\n+ Specimen weight: "  + box_5.replace(/g/, '') + "g\n";

        var box_6 = $("#box6").val();
        captext += "\nTumor Focality:\n- "  + box_6 + "\n";

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if ($.inArray('Other:', box_7) > -1){
            captext += "\nTumor Laterality:\n- "  + box_7.join('\n- ').replace(/Other:/,'')+box_7_2 + "\n";}
        else {captext += "\nTumor Laterality:\n- "  + box_7.join('\n- ') + "\n";}

        var box_8 = $("#box8").val();
        captext += "\nTumor Size:\n- "  + box_8.replace(/cm/,'') + "cm\n";

        var box_9 = $("#box9").val();
        var box_9_1 = $("#box9_1").val();
        var box_10_1 = $("#box10_1").val();
        var box_10_1b = $("#box10_1b").val();
        var box_11 = $("#box11").val();
        var box_11_1 = $("#box11_1").val();
        var papca = '';
        var folca = '';
        captext += '\nHistologic Type:';
        if ($.inArray('Papillary carcinoma', box_9) >-1){
            if (box_10_1 == 'Other:'){
                box_10_1 = box_10_1.replace(/Other:/, box_10_1b);
                papca = 'Papillary carcinoma (Variant: '+box_10_1+')';}
            else {
                papca = 'Papillary carcinoma (Variant: '+box_10_1+')';}
            captext += '\n- '+papca+'\n';
        }
        else if ($.inArray('Follicular carcinoma', box_9) >-1){
            if (box_11 != 'typical'){
                folca = 'Follicular carcinoma (Variant: '+box_11+'), '+box_11_1;}
            else {
                folca = 'Follicular carcinoma, '+box_11_1;}
            captext += '\n- '+folca+'\n';
        }
        else if ($.inArray('Other:', box_9) >-1){
            captext += "\n- " +box_9_1 + "\n";}
        else {captext += "\n- " +box_9.join('\n- ') + "\n";}

        var box_13 = $("#box13").val();
        var box_13_1 = $("#box13_1").val();
        var box_13_2 = $("#box13_2").val();
        if (box_13 == 'Margins uninvolved by carcinoma') {
            captext += "\nMargins uninvolved by carcinoma:\n- Distance to closest margin: "+box_13_1.replace(/mm/, '')+"mm\n";}
        else if (box_13 == 'Margin(s) involved by carcinoma'){
            captext += "\nMargin(s) involved by carcinoma: "+box_13_2+"\n";}
        else {captext += "\nMargins:\n- "+box_13+"\n";}


        var box_15 = $("#box15").val();
        captext += "\nAngionvasion:\n- "  + box_15 + "\n";

        var box_16 = $("#box16").val();
        captext += "\nLymphatic Invasion:\n- "  + box_16+ "\n";

        var box_17 = $("#box17").val();
        captext += "\n+Perineural Invasion:\n- "  + box_17+ "\n";

        var box_18 = $("#box18").val();
        captext += "\nExtrathyroidal Extension:\n- "  + box_18+ "\n";


        var box_19 = $("#box19").val();
        var box_20 = $("#box20").val();
        var box_21 = $("#box21").val();
        var box_22 = $("#box22").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_19 != "Not applicable"){captext += box_19.join("")+' '+box_20+" "+box_21+" "+box_22+"\n";}
        else {captext += box_20+" "+box_21+" "+box_22+"\n";}

        if ($("#box23").is(':checked')) {
            var box_24 = $("#box24").val();
            var box_25 = $("#box25").val();
            var box_26 = $("#box26").val();
            var box_26b = $("#box26b").val();

            if (box_25 != "0"){
                captext += "\nLymph nodes examined: "+box_24+"\nLymph nodes involved: "+box_25+"\nLymph Node, extranodal extension: "+box_26+'\nSize of largest metastatic deposit: '+box_26b.replace(/mm/,'')+"mm\n";
            }
            else {
                captext += "\nLymph nodes examined: "+box_24+"\nLymph nodes involved: "+box_25+"\nLymph Node, extranodal extension: "+box_26+'\n';
            }

        }

        var box_27 = $("#box27").val();
        if (box_27 != 'None identified'){
            captext += "\n+ Additional Pathologic Findings:\n- "  + box_27.join('\n- ') + "\n";}

        var box_28 = $("#box28").val();
        if (box_28 != 'Enter stains performed, if any'){
            captext += "\n+Immunohistochemistry performed:\n- "  + box_28 + "\n";}
        else {captext += "\n+ Immunohistochemistry not performed\n";}

        var box_29 = $("#box29").val();
        if (box_29 != 'None performed'){
            captext += "\n+ Ancillary testing performed:\n- "  + box_29.join('\n- ') + "\n";}
        else {captext += "\n+ Cytogenetic/Molecular testing not performed\n";}

        var box_30 = $("#box30").val();
        if (box_30 != 'No known pertinent history'){
            captext += "\n+Clinical history:\n- "  + box_29.join('\n- ') + "\n";}
        else {captext += "\n+ Clinical history:\n- "+box_30+'\n';}

        $('#outPut-1').val(captext);

				dataObj.singleSection = $('#outPut-1').val();
				makeCreatePdfBtn();

    });
});
