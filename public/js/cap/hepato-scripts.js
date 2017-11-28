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
        $("input#boxZZ").autocomplete({
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
        if (sel == 'Other') {
            $('#box3_2').show();}
        else {
            $('#box3_2').hide();}
    });

    $('#box6').change(function(){
        var sel = $('#box6').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box6_2').show();}
        else {$('#box6_2').hide();}
    });

    $('#box8').change(function(){
        var sel = $('#box8').val();
        if ($.inArray('Hepatoblastoma, Other', sel) >-1) {
            $('#box8_2').show();}
        else {$('#box8_2').hide();}
    });

    $('#box9').change(function(){
        var sel = $('#box9').val();
        if (sel == 'Present') {
            $('#box9_2').show();}
        else {
            $('#box9_2').hide();}
    });

    $('#box10').change(function(){
        var sel = $('#box10').val();
        if (sel == 'Uninvolved by tumor') {
            $('#box10_2').show();}
        else {$('#box10_2').hide();}
        if (sel == 'Involved by tumor') {
            $('#box10_3').show();}
        else {$('#box10_3').hide();}
    });

    $('#box11').change(function(){
        var sel = $('#box11').val();
        if (sel == 'Uninvolved by tumor') {
            $('#box11_3').show();}
        else {
            $('#box11_3').hide();}
    });

    $("#box14").change(function(){
        if ($(this).is(":checked")){
            $(".lnchk").show();}
        else{
            $(".lnchk").hide();}
    });

    $('#box17').change(function(){
        var sel = $('#box17').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box17_2').show();}
        else {$('#box17_2').hide();}
    });

    $('#box19').change(function(){
        var sel = $('#box19').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box19_2').show();}
        else {$('#box19_2').hide();}
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

        var captext = "Pediatric Liver Cancer Synoptic\nAJCC 2018 cancer staging version\n\n";

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if(box_2 != "Not applicable"){
            if (box_2 == 'Other'){
                captext += "\nResection:\n- "  + box_2_2+ "\n";}
            else {captext += "\nResection:\n- "  + box_2+ "\n";}
        }


        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        if (box_3 == 'Other'){
            captext += "\nTumor site:\n- "  + box_3_2+ "\n";}
        else {captext += "\nTumor site:\n- "  + box_3+ "\n";}


        var box_4 = $("#box4").val();
        captext += "\nTumor size:\n- "  + box_4.replace(/cm/,'') + " cm\n";


        var box_5 = $("#box5").val();
        captext += "\n+ Tumor focality:\n- "  + box_5+ "\n";

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if ($.inArray('Other', box_6) >-1){
            captext += "\n+ Macroscopic extension of tumor:\n- "  + box_6.join('\n- ').replace(/Other/, box_6_2) + "\n";}
        else {captext += "\n+ Macroscopic extension of tumor:\n- "  + box_6.join('\n- ') + "\n";}

        var box_7 = $("#box7").val();
        captext += "\nPreoperative Treatment:\n- "  + box_7+ "\n";

        var box_8 = $("#box8").val();
        var box_8_2 = $("#box8_2").val();
        if ($.inArray('Hepatoblastoma, Other', box_8) >-1){
            captext += "\nHistologic Type:\n- "  + box_8.join('\n- ').replace(/Hepatoblastoma, Other/, box_8_2) + "\n";}
        else {captext += "\nHistologic Type:\n- "  + box_8.join('\n- ') + "\n";}

        var box_9 = $("#box9").val();
        var box_9_2 = $("#box9_2").val();
        if (box_9 == 'Present'){
            captext += "\n+ Treatment Effect:\n- Present, "  + box_9_2.replace(/%/,'')+ "% necrosis\n";}
        else {captext += "\n+ Treatment Effect:\n- "  + box_9+ "\n";}


        var box_10 = $("#box10").val();
        var box_10_2 = $("#box10_2").val();
        var box_10_3 = $("#box10_3").val();
        if (box_10 == 'Uninvolved by tumor') { captext += "\nResection Margin:\n- "+box_10+"\n- Closest margin distance: "+box_10_2+"\n";}
        else if (box_10 == 'Involved by tumor'){ captext += "\nResection Margin:\n- "+box_10+"\n- "+box_10_3+"\n";}
        else {captext += "\nResection Margin:\n- "+box_10+"\n";}

        var box_11 = $("#box11").val();
        var box_11_3 = $("#box11_3").val();
        if (box_11 == 'Uninvolved by tumor'){
            captext += "\nCapsular surface margin:\n- Uninvolved by tumor, closest distance: "  + box_11_3.replace(/cm/,'')+ " cm\n";}
        else {captext += "\nCapsular surface margin:\n- "  + box_11+ "\n";}


        var box_12 = $("#box12").val();
        captext += "\n+ Lymph-Vascular Invasion, Macroscopic:\n- "  + box_12.join('\n- ') + "\n";

        var box_13 = $("#box13").val();
        captext += "\n+ Lymph-Vascular Invasion, Microscopic:\n- "  + box_13+ "\n";

        if ($("#box14").is(':checked')) {
            var box_14_2 = $("#box14_2").val();
            var box_14_3 = $("#box14_3").val();
            captext += "\nLymph node involvement:\n\tLymph nodes examined: "+box_14_2+"\n\tLymph nodes involved: "+box_14_3+"\n";}

        var box_15 = $("#box15").val();
        if(box_15 != "Not applicable"){
            captext += "\nDistant Metastases:\n- "  + box_15+ "\n";}

        var box_16 = $("#box16").val();
        captext += "\n+ Staging (Children's Oncology Group):\n- "  + box_16 + "\n";

        var box_17 = $("#box17").val();
        var box_17_2 = $("#box17_2").val();
        if ($.inArray('Other', box_17) >-1){
            captext += "\n+ Additional Pathologic Findings:\n- "  + box_17.join('\n- ').replace(/Other/, box_17_2) + "\n";}
        else {captext += "\n+ Additional Pathologic Findings:\n- "  + box_17.join('\n- ') + "\n";}

        var box_18 = $("#box18").val();
        captext += "\nSerum AFP level:\n- "  + box_18+ "\n";

        var box_19 = $("#box19").val();
        var box_19_2 = $("#box19_2").val();
        if ($.inArray('Other', box_19) >-1){
            captext += "\n+ Ancillary Studies:\n- "  + box_19.join('\n- ').replace(/Other/, box_19_2) + "\n";}
        else {captext += "\n+ Ancillary Studies:\n- "  + box_19.join('\n- ') + "\n";}


        $('#outPut-1').val(captext);
				dataObj.singleSection = $('#outPut-1').val();
				makeCreatePdfBtn();

    });
});
