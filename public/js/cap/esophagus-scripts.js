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
        $("input#box26").autocomplete({
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
        if (sel == 'Other') {
            $('#box2_2').show();}
        else {
            $('#box2_2').hide();}
    });

    $('#box3').change(function(){
        var sel = $('#box3').val();
        if (sel == 'Other') {
            $('#box3_2').show();}
        else {
            $('#box3_2').hide();}
    });

    $('#box4').change(function(){
        var sel = $('#box4').val();
        if ((sel == 'Not specified') || (sel == 'Cannot be assessed')) {
            alert ('negative');
            $('#box4_2').hide();}
        else {
            alert ('positive');
            $('#box4_2').show();}
    });

    $('#box6').change(function(){
        var sel = $('#box6').val();
        if (sel == 'Other') {
            $('#box6_2').show();}
        else {
            $('#box6_2').hide();}
    });

    $('#box6').change(function(){
        var sel = $(this).val();
        if(sel.toLowerCase().indexOf('squamous') > -1) {
            $('.sccgrade').show();
            $('.adenograde').hide();
        }
        else if (sel.toLowerCase().indexOf('squamous') == -1){
            $('.sccgrade').hide();
            $('.adenograde').show();
        }
    });

    $('#box9').change(function(){
        var sel = $('#box9').val();
        if (sel == 'Tumor directly invades adjacent structures ') {
            $('#box9_2').show();}
        else {
            $('#box9_2').hide();}
    });

    $('#box10').change(function(){
        if ($('#box10').is(':checked')){
            $('#marginneg').show();
            $('#marginpos').hide();}
        else {
            $('#marginneg').hide();
            $('#marginpos').show();}
    });

    $('#box15').change(function(){
        var sel = $('#box15').val();
        if (sel != 'Not applicable') {
            $('#box15_2').show();}
        else {
            $('#box15_2').hide();}
    });

    $("#box22").change(function(){
        if ($(this).is(":checked")){
            $(".lnchk").show();}
        else{
            $(".lnchk").hide();}
    });


    $('#box25').change(function(){
        var sel = $('#box25').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box25_2').show();}
        else {$('#box25_2').hide();}
    });


    $('#box27').change(function(){
        var sel = $('#box27').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box27_2').show();}
        else {$('#box27_2').hide();}
    });


//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('#writeReport').on('click', function () {


        var captext = "Esophageal Cancer Synoptic\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if ($.inArray('Other', box_1) >-1){
            captext += "\nSpecimen:\n- "  + box_1.join('\n- ').replace(/Other/, box_1_2) + "\n";}
        else {captext += "\nSpecimen:\n- "  + box_1.join('\n- ') + "\n";}

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if (box_2 == 'Other'){
            captext += "\nProcedure:\n- "  + box_2_2+ "\n";}
        else {captext += "\nProcedure:\n- "  + box_2+ "\n";}


        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        if (box_3 == 'Other'){
            captext += "\nTumor Site:\n- "  + box_3_2+ "\n";}
        else {captext += "\nTumor Site:\n- "  + box_3+ "\n";}


        var box_4 = $("#box4").val();
        var box_4_2 = $("#box4_2").val();
        if (box_4 != 'Cannot be assessed'){
            captext += "\nRelationship of Tumor to Esophagogastric Junction:\n- "  + box_4+ "\n- Distance from tumor center to EGJ: "+ box_4_2.replace(/cm/,'')+ "cm\n";}
        else {captext += "\nRelationship of Tumor to Esophagogastric Junction:\n- "  + box_4+ "\n";}

        var box_5 = $("#box5").val();
        captext += "\nTumor Size:\n- "  + box_5.replace(/cm/,'') + "cm\n";

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6 == 'Other'){
            captext += "\nHistologic Type :\n- "  + box_6_2+ "\n";}
        else {captext += "\nHistologic Type :\n- "  + box_6+ "\n";}


        var box_7 = $("#box7").val();
        if(box_7 != "Not applicable"){
            captext += "\nHistologic Grade:\n- "  + box_7+ "\n";}

        var box_8 = $("#box8").val();
        if(box_8 != "Not applicable"){
            captext += "\nHistologic Grade:\n- "  + box_8+ "\n";}

        var box_9 = $("#box9").val();
        var box_9_2 = $("#box9_2").val();
        if (box_9 == 'Tumor directly invades adjacent structures '){
            captext += "\nMicroscopic Tumor Extension :\n- "  + box_9_2+ "\n";}
        else {captext += "\nMicroscopic Tumor Extension :\n- "  + box_9+ "\n";}


        var box_11a = $("#box11a").val();
        var box_11b = $("#box11b").val();
        if ($('#box10').is(':checked')){
            captext += "\nAll margins negative for carcinoma:\n- Closest margin: "  + box_11a+"\n- Distance to this margin: "+box_11b.replace(/cm/,'') + "cm\n";
        }

        var box_12 = $("#box12").val();
        captext += "\nProximal margin:\n- "  + box_12.join('\n- ') + "\n";

        var box_13 = $("#box13").val();
        captext += "\nDistal margin:\n- "  + box_13.join('\n- ') + "\n";

        var box_14 = $("#box14").val();
        captext += "\nCircumferential or Deep Margin:\n- "  + box_14+ "\n";

        var box_15 = $("#box15").val();
        var box_15_2 = $("#box15_2").val();
        if(box_15 != "Not applicable"){
            captext += "\n"+box_15_2+" margin:\n- "  + box_15+ "\n";}

        var box_16 = $("#box16").val();
        captext += "\nTreatment effect:\n- "  + box_16+ "\n";

        var box_17 = $("#box17").val();
        captext += "\n+ Perineural Invasion :\n- "  + box_17+ "\n";

        var box_18 = $("#box18").val();
        var box_19 = $("#box19").val();
        var box_20 = $("#box20").val();
        var box_21 = $("#box21").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_18 != "Not applicable"){captext += box_18.join("")+' '+box_19+" "+box_20+" "+box_21+"\n";}
        else {captext += box_19+" "+box_20+" "+box_21+"\n";}

        if ($("#box22").is(':checked')) {
            var box_23 = $("#box23").val();
            var box_24 = $("#box24").val();
            captext += "\nLymph nodes examined: "+box_23+"\nLymph nodes involved: "+box_24+"\n";}


        var box_25 = $("#box25").val();
        var box_25_2 = $("#box25_2").val();
        if ($.inArray('Other', box_25) >-1){
            captext += "\nAdditional Pathologic Findings :\n- "  + box_25.join('\n- ').replace(/Other/, box_25_2) + "\n";}
        else {captext += "\nAdditional Pathologic Findings :\n- "  + box_25.join('\n- ') + "\n";}

        var box_26 = $("#box26").val();
        captext += "\n+ Ancillary studies (IHCs, special stains):\n- "  + box_26 + "\n";

        var box_27 = $("#box27").val();
        var box_27_2 = $("#box27_2").val();
        if ($.inArray('Other', box_27) >-1){
            captext += "\n+ Clinical history:\n- "  + box_27.join('\n- ').replace(/Other/, box_27_2) + "\n";}
        else {captext += "\n+ Clinical history:\n- "  + box_27.join('\n- ') + "\n";}



        $('#outPut-1').val(captext);

				dataObj.singleSection = $('#outPut-1').val();
				makeCreatePdfBtn();

    });
});
