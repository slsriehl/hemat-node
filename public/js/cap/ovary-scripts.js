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
            "Ubiquitin", "Uroplakin", "Varicella", "Villin", "WT-1", "BRAF V600E", "HER2/Neu (FISH)", "HER2/Neu (IHC)"
        ];

        function split(val) {
            return val.split(/,\s*/);
        }

        function extractLast(term) {
            return split(term).pop();
        }
        $("input#box32").autocomplete({
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

    $('#box2').change(function(){
        var sel = $('#box2').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box2_2').show();}
        else {$('#box2_2').hide();}
    });

    $('#box11').change(function(){
        var sela = $('#box11').val();
        var selb = $('#box11').val();
        if (sela == 'Mixed epithelial borderline tumor' || sela == 'Mixed malignant germ cell tumor' || sela == 'Mixed epithelial carcinoma') {
            $('#box11_1').show();}
        else {$('#box11_1').hide();}
        if (selb == 'Other sex cord-stromal tumor' || selb == 'Other') {
            $('#box11_2').show();}
        else {$('#box11_2').hide();}

    });

    $('#box13').change(function(){
        var sel = $('#box13').val();
        if (sel == 'Present (Epithelial)' || sel == 'Present (Desmoplastic)') {
            $('#box13_2').show();}
        else {$('#box13_2').hide();}
    });

    $('#box14').change(function(){
        var sel = $('#box14').val();
        if (sel == 'Present') {
            $('#box14_2').show();}
        else {$('#box14_2').hide();}
    });

    $('#box15').change(function(){
        var sel = $('#box15').val();
        if (sel == 'Other') {
            $('#box15_2').show();}
        else {$('#box15_2').hide();}
    });

    $('#box16').change(function(){
        var sel = $('#box16').val();
        if (sel == 'Other') {
            $('#box16_2').show();}
        else {$('#box16_2').hide();}
    });

    $('#box17').change(function(){
        var sel = $('#box17').val();
        if (sel == 'Other') {
            $('#box17_2').show();}
        else {$('#box17_2').hide();}
    });

    $('#box18').change(function(){
        var sel = $('#box18').val();
        if (sel == 'Other') {
            $('#box18_2').show();}
        else {$('#box18_2').hide();}
    });

    $('#box19').change(function(){
        var sel = $('#box19').val();
        if (sel == 'Other') {
            $('#box19_2').show();}
        else {$('#box19_2').hide();}
    });

    $('#box20').change(function(){
        var sel = $('#box20').val();
        if (sel == 'Other') {
            $('#box20_2').show();}
        else {$('#box20_2').hide();}
    });

    $('#box21').change(function(){
        var sel = $('#box21').val();
        if (sel == 'Other') {
            $('#box21_2').show();}
        else {$('#box21_2').hide();}
    });

    $('#box22').change(function(){
        var sel = $('#box22').val();
        if (sel == 'Involved') {
            $('#box22_2').show();}
        else {$('#box22_2').hide();}
    });

    $("#box29").change(function() {
        $('.lndiv').toggle();
    });

    $('#box31').change(function(){
        var sel = $('#box31').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box31_2').show();}
        else {$('#box31_2').hide();}
    });


//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('#writeReport').on('click', function () {


        var captext = "CAP Ovary Cancer Summary\n\n";

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
        captext += "\nLymph Node Sampling:\n- "  + box_3+ "\n";

        var box_4 = $("#box4").val();
        var box_5 = $("#box5").val();
        var box_6 = $("#box6").val();

        if (box_4 == 'Not applicable' && box_5 == 'Not applicable' && box_6 == 'Not applicable'){
            captext += '\nSpecimen integrity:\n- Not applicable\n';}
        else {captext += '\nSpecimen integrity:';}
        if (box_4 != 'Not applicable'){
            captext += "\n- Right Ovary: "  + box_4;}

        if (box_5 != 'Not applicable'){
            captext += "\n- Left Ovary: "  + box_5;}

        if (box_6 != 'Not applicable'){
            captext += "\n- Morcellated Specimen: "  + box_6;}

        var box_7 = $("#box7").val();
        captext += "\n\nPrimary Tumor Site:\n- "  + box_7+ "\n";

        var box_8 = $("#box8").val();
        captext += "\nOvarian Surface Involvement:\n- "  + box_8+ "\n";

        captext += "\nTumor Size:";
        var box_9 = $("#box9").val();
        var box_10 = $("#box10").val();
        if (box_9 != 'Cannot be determined'){
            captext += "\n- Right Ovary: "  + box_9.replace(/cm/,'')+'cm';}
        if (box_10 != 'Cannot be determined'){
            captext += "\n- Left Ovary: "  + box_10.replace(/cm/,'')+'cm';}

        var box_11 = $("#box11").val();
        var box_11_1 = $("#box11_1").val();
        var box_11_2 = $("#box11_2").val();
        if ($.inArray('Mixed', box_11) > -1 && $.inArray('Other', box_11) == -1) { captext += "\n\nHistologic Type:\n- "+box_11.join("\n- ").replace(/tumor/, 'tumor: '+ box_11_1)+"\n";} else if ($.inArray('Other', box_11) > -1 && $.inArray('Mixed', box_11) == -1) { captext += "\n\nHistologic Type:\n- "+box_11.join("\n- ").replace(/Other/, box_11_2)+"\n";} else if ($.inArray('Mixed', box_11) > -1 && $.inArray('Other', box_11) > -1) { captext += "\n\nHistologic Type:\n- "+box_11.join("\n- ").replace(/tumor/, 'tumor :'+ box_11_1).replace(/Other/, box_11_2)+"\n";} else {captext += "\n\nHistologic Type:\n- "+box_11.join("\n- ")+"\n";}

        var box_12 = $("#box12").val();
        captext += "\nHistologic grade:\n- "  + box_12+ "\n";

        var box_13 = $("#box13").val();
        var box_13_2 = $("#box13_2").val();
        if (box_13 == 'Present (Epithelial)' || box_13 == 'Present (Desmoplastic)'){
            captext += "\nImplants:\n- Noninvasive implants: "+box_13+', involving '+ box_13_2+ "\n";}
        else {captext += "\nImplants:\n- Noninvasive implants not present\n";}

        var box_14 = $("#box14").val();
        var box_14_2 = $("#box14_2").val();
        if (box_14 == 'Present'){
            captext += "\n- Invasive implants: "+box_14+', involving ' + box_14_2+ "\n";}
        else {captext += "\n- Invasive implants not present\n";}


        var box_15 = $("#box15").val();
        var box_15_2 = $("#box15_2").val();
        var box_16 = $("#box16").val();
        var box_16_2 = $("#box16_2").val();
        var box_17 = $("#box17").val();
        var box_17_2 = $("#box17_2").val();
        var box_18 = $("#box18").val();
        var box_18_2 = $("#box18_2").val();
        var box_19 = $("#box19").val();
        var box_19_2 = $("#box19_2").val();
        var box_20 = $("#box20").val();
        var box_20_2 = $("#box20_2").val();
        var box_21 = $("#box21").val();
        var box_21_2 = $("#box21_2").val();
        var box_22 = $("#box22").val();
        var box_22_2 = $("#box22_2").val();

        if (box_15 == 'Not applicable' && box_16 == 'Not applicable' && box_17 == 'Not applicable' && box_18 == 'Not applicable' && box_19 == 'Not applicable' && box_20 == 'Not applicable' && box_21 == 'Not applicable' && box_22 == 'Not applicable'){
            captext += '\nExtent of involvement of other tissues/organs:\n- None\n';}
        else {captext += '\nExtent of involvement of other tissues/organs:';}
        if (box_15 != 'Not applicable'){
            if (box_15 == 'Other'){
                captext += "\n- Right ovary: "  + box_15_2+ "\n";}
            else {captext += "\n- Right ovary: "  + box_15+ "\n";}
        }

        if (box_16 != 'Not applicable'){
            if (box_16 == 'Other'){
                captext += "\n- Left ovary: "  + box_16_2+ "\n";}
            else {captext += "\n- Left ovary: "  + box_16+ "\n";}
        }

        if (box_17 != 'Not applicable'){
            if (box_17 == 'Other'){
                captext += "\n- Right fallopian tube: "  + box_17_2+ "\n";}
            else {captext += "\n- Right fallopian tube: "  + box_17+ "\n";}
        }

        if (box_18 != 'Not applicable'){
            if (box_18 == 'Other'){
                captext += "\n- Left fallopian tube: "  + box_18_2+ "\n";}
            else {captext += "\n- Left fallopian tube: "  + box_18+ "\n";}
        }

        if (box_19 != 'Not applicable'){
            if (box_19 == 'Other'){
                captext += "\n- Omentum: "  + box_19_2+ "\n";}
            else {captext += "\n- Omentum: "  + box_19+ "\n";}
        }

        if (box_20 != 'Not applicable'){
            if (box_20 == 'Other'){
                captext += "\n- Uterus: "  + box_20_2+ "\n";}
            else {captext += "\n- Uterus: "  + box_20+ "\n";}
        }

        if (box_21 != 'Not applicable'){
            if (box_21 == 'Other'){
                captext += "\n- Peritoneum: "  + box_21_2+ "\n";}
            else {captext += "\n- Peritoneum: "  + box_21+ "\n";}
        }

        if (box_22 != 'Not applicable'){
            if (box_22 == 'Involved'){
                captext += "\n- Other involved organs: "  + box_22_2+ "\n";}
            else {captext += "\n- Other organs: "  + box_22+ "\n";}
        }

        var box_23 = $("#box23").val();
        if (box_23 != 'Not applicable'){
            captext += "\n+Treatment effect:\n- "  + box_23+ "\n";}

        var box_24 = $("#box24").val();
        captext += "\n+Lymph-Vascular invasion:\n- "  + box_24+ "\n";

        var box_25 = $("#box25").val();
        var box_26 = $("#box26").val();
        var box_27 = $("#box27").val();
        var box_28 = $("#box28").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_25 != "Not applicable"){captext += box_25.join("")+' '+box_26+" "+box_27+" "+box_28+"\n";}
        else {captext += box_26+" "+box_27+" "+box_28+"\n";}

        if ($("#box29").is(':checked')) {
            var box_29_1 = $("#box29_1").val();
            var box_29_2 = $("#box29_2").val();
            captext += "\nLymph nodes examined: "+box_29_1+"\nLymph nodes involved: "+box_29_2+"\n";}

        var box_30 = $("#box30").val();
        if (box_30 != 'Not applicable'){
            captext += "\n+Additional Pathologic Findings (select all that apply):\n- "  + box_30.join('\n- ')+ "\n";}

        var box_31 = $("#box31").val();
        var box_31_2 = $("#box31_2").val();
        if (box_31 != 'Not applicalbe'){
            if ($.inArray('Other', box_31) >-1){
                captext += "\nClinical History:\n- "  + box_31.join('\n- ').replace(/Other/, box_31_2) + "\n";}
            else {captext += "\nClinical History:\n- "  + box_31.join('\n- ') + "\n";}
        }

        var box_32 = $("#box32").val();
        if (box_32 != 'start typing IHC or genetic studies'){
            captext += "\nAncillary studies:\n- "  + box_32 + "\n";}
        else {captext += "\nAncillary studies: None performed\n";}

        $('#outPut-1').val(captext);

    });
});
