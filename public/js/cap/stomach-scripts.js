$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/

    //IHCs
    $(function () {
        var availableTags = ["ACTH", "Adenovirus", "ALK-1", "A1-AT", "AFP",
            "Amyloid-A", "APP", "B72.3", "INI1", "BCL2", "BCL6", "BER-Ep",
            "Beta-catenin", "Ber-EP4", "BKVirus", "C4d", "CA125", "Calcitonin",
            "Calponin", "Calretinin", "CD1a", "CD2", "CD3", "CD4", "CD5", "CD7",
            "CD8", "CD10", "CD15", "CD20", "CD21", "CD23", "CD25", "CD30",
            "CD34", "CD43", "CD44", "CD45", "CD45RO", "CD56", "CD57", "CD61",
            "CD68", "CD71", "CD79a", "CD99", "CD117", "CD123", "CD138", "CDX2",
            "CEA-mono", "CEA-poly", "Chromogranin", "CMV", "ColIV", "CyclinD1",
            "CDK4", "CK34BE12", "CK8", "CK5/6", "CK7", "CKAE1/3", "CKCam5.2",
            "CK17", "CK19", "CK20", "CKMAK-6", "D2-40", "DOG-1", "Desmin",
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
        $("input#box27").autocomplete({
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

    $('#box6').change(function(){
        var sel = $('#box6').val();
        if (sel == 'Other') {
            $('#box6_2').show();}
        else {
            $('#box6_2').hide();}
    });

    $('#box7').change(function(){
        var sel = $('#box7').val();
        if (sel == 'Tumor directly invades adjacent structures') {
            $('#box7_2').show();}
        else {$('#box7_2').hide();}
        if (sel == 'Tumor penetrates to the surface of the visceral peritoneum (serosa) and directly invades adjacent structures') {
            $('#box7_3').show();}
        else {$('#box7_3').hide();}
    });

    $('#box8').change(function(){
        if ($('#box8').is(':checked')){
            $('#marginneg').show();
            $('#marginpos').hide();}
        else {
            $('#marginneg').hide();
            $('#marginpos').show();}
    });

    $('#box15').change(function(){
        var sel = $('#box15').val();
        if (sel == 'Involved by invasive carcinoma') {
            $('#box15_2').show();}
        else {$('#box15_2').hide();}
        if (sel == 'Uninvolved by invasive carcinoma') {
            $('#box15_3').show();}
        else {$('#box15_3').hide();}
    });

    $("#box23").change(function(){
        if ($(this).is(":checked")){
            $(".lnchk").show();}
        else{
            $(".lnchk").hide();}
    });

    $('#box26').change(function(){
        var sel = $('#box26').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box26_2').show();}
        else {$('#box26_2').hide();}
    });

    $('#box28').change(function(){
        var sel = $('#box28').val();
        if (sel == 'Other') {
            $('#box28_2').show();}
        else {
            $('#box28_2').hide();}
    });

    $('#box29').change(function(){
        var sel = $('#box29').val();
        if (sel == 'HER2 by IHC') {
            $('#her2ihc').show();}
        else {
            $('#her2ihc').hide();}
        if (sel == 'HER2 by FISH'){
            $('#her2fish').show();
        }
        else {
            $('#her2fish').hide();
        }
    });$('#box30b').change(function(){
        var sel = $('#box30b').val();
        if (sel == 'Other') {
            $('#box30b_2').show();}
        else {
            $('#box30b_2').hide();}
    });

    $('#box36').change(function(){
        var sel = $('#box36').val();
        if (sel == 'FDA cleared') {
            $('#box36_1').show();}
        else {$('#box36_1').hide();}
        if (sel == 'Laboratory-developed test') {
            $('#box36_2').show();}
        else {$('#box36_2').hide();}
    });


//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('#writeReport').on('click', function () {

        var captext = "CAP Gastric Cancer Summary\n\n";

        var box_1 = $("#box1").val();
        captext += "\nSpecimen:\n- "  + box_1.join('\n- ') + "\n";

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
        if (box_4 != 'Cannot be determined'){
            captext += "\nTumor Size:\n- "  + box_4.replace(/cm/,'') + "cm\n";}
        else {captext += "\nTumor Size:\n- "  + box_4 + "\n";}

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if ($.inArray('Other', box_5) >-1){
            captext += "\nHistologic Type:\n- "  + box_5.join('\n- ').replace(/Other/, box_5_2) + "\n";}
        else {captext += "\nHistologic Type:\n- "  + box_5.join('\n- ') + "\n";}

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6 == 'Other'){
            captext += "\nHistologic Grade:\n- "  + box_6_2+ "\n";}
        else {captext += "\nHistologic Grade:\n- "  + box_6+ "\n";}


        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        var box_7_3 = $("#box7_3").val();
        if (box_7 == 'Tumor directly invades adjacent structures') { captext += "\nMicroscopic Extent of Tumor:\n- "+box_7+"\n- "+box_7_2+"\n";}
        else if (box_7 == 'Tumor penetrates to the surface of the visceral peritoneum (serosa) and directly invades adjacent structures'){ captext += "\nMicroscopic Extent of Tumor:\n- "+box_7+"\n- "+box_7_3+"\n";}
        else {captext += "\nMicroscopic Extent of Tumor:\n- "+box_7+"\n";}

        var box_9a = $("#box9a").val();
        var box_9b = $("#box9b").val();
        if ($('#box8').is(':checked')){
            captext += "\nAll margins negative for carcinoma:\n- Closest margin: "  + box_9a+"\n- Distance to this margin: "+box_9b.replace(/cm/,'') + "cm\n";
        }

        var box_10 = $("#box10").val();
        var box_11 = $("#box11").val();
        var box_12 = $("#box12").val();
        var box_13 = $("#box13").val();
        var box_14 = $("#box14").val();
        var box_15 = $("#box15").val();
        var box_15_2 = $("#box15_2").val();
        var box_15_3 = $("#box15_3").val();
        if (!$('#box8').is(':checked')){
            captext += "\nProximal Margin:\n- "  + box_10.join('\n- ') + "\n";

            captext += "\nDistal Margin:\n- "  + box_11.join('\n- ') + "\n";

            captext += "\nOmental Margins:\n- "  + box_12.join('\n- ') + "\n";

            if(box_13 != "Not applicable"){
                captext += "\nDeep Margin:\n- "  + box_13+ "\n";}

            if(box_14 != "Not applicable"){
                captext += "\nMucosal Margins:\n- "  + box_14+ "\n";}

            if (box_15 != 'Not applicable'){
                if (box_15 == 'Involved by invasive carcinoma') { captext += "\nOther Margin:\n- "+box_15+"\n- "+box_15_2+"\n";}
                else if (box_15 == 'Uninvolved by invasive carcinoma'){ captext += "\nOther Margin:\n- "+box_15+"\n- "+box_15_3+"\n";}
                else {captext += "\nOther Margin:\n- "+box_15+"\n";}
            }
        }

        var box_16 = $("#box16").val();
        if(box_16 != "Not applicable"){
            captext += "\nTreatment Effect :\n- "  + box_16+ "\n";}

        var box_17 = $("#box17").val();
        captext += "\nLymph-Vascular Invasion:\n- "  + box_17+ "\n";

        var box_18 = $("#box18").val();
        captext += "\n+ Perineural Invasion:\n- "  + box_18+ "\n";

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
            captext += "\nLymph nodes examined: "+box_24+"\nLymph nodes involved: "+box_25+"\n";}

        var box_26 = $("#box26").val();
        var box_26_2 = $("#box26_2").val();
        if ($.inArray('Other', box_26) >-1){
            captext += "\n+ Additional Pathologic Findings:\n- "  + box_26.join('\n- ').replace(/Other/, box_26_2) + "\n";}
        else {captext += "\n+ Additional Pathologic Findings:\n- "  + box_26.join('\n- ') + "\n";}

        var box_27 = $("#box27").val();
        if (box_27 != 'enter IHCs, if performed'){
            captext += "\n+ Ancillary Studies:\n- "  + box_27 + "\n";}
        else {captext += "\n+ Ancillary Studies:\n- None performed\n";}


        var box_28 = $("#box28").val();
        var box_28_2 = $("#box28_2").val();
        if (box_28 == 'Other'){
            captext += "\n+ Clinical History:\n- "  + box_28_2+ "\n";}
        else {captext += "\n+ Clinical History:\n- "  + box_28+ "\n";}

        var box_29 = $("#box29").val();
        if(box_29 == "Not performed"){
            captext += "\nHER2 Testing:\n- "  + box_29+ "\n";}

        if (box_29 == 'HER2 by IHC'){
            var box_30 = $("#box30").val();
            captext += "\n+ HER2 by immunohistochemistry:\n- "  + box_30+ "\n";

            var box_30b = $("#box30b").val();
            var box_30b_2 = $("#box30b_2").val();
            if (box_30b == 'Other'){
                captext += "+HER2 antibody clone: "  + box_30b_2+ "\n";}
            else {captext += "\n+HER2 antibody clone: "  + box_30b+ "\n";}
        }
        if (box_29 == 'HER2 by FISH'){
            var box_31 = $("#box31").val();
            captext += "\n+ HER2 by in-situ hybridization:\n- "  + box_31+ "\n";

            var box_32 = $("#box32").val();
            captext += "\nNumber of observers: "  + box_32 + "\n";

            var box_33 = $("#box33").val();
            captext += "\nNumber of invasive cancer cells counted: "  + box_33 + "\n";

            var box_34 = $("#box34").val();
            captext += "\nAverage number of HER2 (ERBB2) signals per cancer cell: "  + box_34 + "\n";

            var box_35 = $("#box35").val();
            captext += "\nAverage number of CEP17 signals per cancer cell: "  + box_35 + "\n";

            var box_36 = $("#box36").val();
            var box_36_1 = $("#box36_1").val();
            var box_36_2 = $("#box36_2").val();
            if (box_36 == 'FDA cleared') { captext += "\n+ HER2 - method used: "+box_36+", "+box_36_1+"\n";}
            else if (box_36 == 'Laboratory-developed test'){ captext += "+HER2 - method used: "+box_36+", "+box_36_2+"\n";}
            else {captext += "+HER2 - method used: "+box_36+"\n";}
        }



        $('#outPut-1').val(captext);

				dataObj.singleSection = $('#outPut-1').val();
				makeCreatePdfBtn();

    });
});
