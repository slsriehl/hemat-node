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
            "Ubiquitin", "Uroplakin", "Varicella", "Villin", "WT-1", "HR HPV in-situ", "FISH", "PCR"
        ];

        function split(val) {
            return val.split(/,\s*/);
        }

        function extractLast(term) {
            return split(term).pop();
        }
        $("input#box19").autocomplete({
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

    $('#box4').change(function(){
        var sel = $('#box4').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box4_1').show();}
        else {$('#box4_1').hide();}
    });

    $('#box5').change(function(){
        var sel = $('#box5').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box5_2').show();}
        else {$('#box5_2').hide();}
    });

    $('#box9').change(function(){
        var sela = $('#box9').val();
        var selb = $('#box9').val();
        if (sela == "Margins uninvolved by invasive carcinoma"){
            $('#box9_1').show();
            $('#box9_2').show();
            $('#hsil_margin').show();
            $('#box9_4').hide();}
        if (selb == "Margin(s) involved by invasive carcinoma") {
            $('#box9_4').show();
            $('#box9_1').hide();
            $('#box9_2').hide();
            $('#hsil_margin').hide();
        }
    });

    $("#box15").change(function(){
        if ($(this).is(":checked")){
            $(".lnchk").show();}
        else{
            $(".lnchk").hide();}
    });

    $('#box18').change(function(){
        var sel = $('#box18').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box18_2').show();}
        else {$('#box18_2').hide();}
    });



//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('#writeReport').on('click', function () {

        var captext = "CAP Cervical Cancer Summary\n\n";

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
        captext += "\nTumor Size:\n- "  + box_3.replace(/cm/,'') + "cm\n";

        var box_4 = $("#box4").val();
        var box_4_1 = $("#box4_1").val();
        if ($.inArray('Other', box_4) >-1){
            captext += "\nTumor Site:\n- "  + box_4.join('\n- ').replace(/Other/, box_4_1) + "\n";}
        else {captext += "\nTumor Site:\n- "  + box_4.join('\n- ') + "\n";}

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if ($.inArray('Other', box_5) >-1){
            captext += "\nHistologic Type:\n- "  + box_5.join('\n- ').replace(/Other/, box_5_2) + "\n";}
        else {captext += "\nHistologic Type:\n- "  + box_5.join('\n- ') + "\n";}

        var box_6 = $("#box6").val();
        if(box_6 != ""){
            captext += "\nHistologic Grade:\n- "  + box_6+ "\n";}

        var box_7 = $("#box7").val();
        if (box_7 != "Cannot be assessed"){
            captext += "\nStromal Invasion - Depth: "  + box_7.replace(/mm/,'') + "mm\n";}
        else {captext += "\nStromal Invasion - Depth: "  + box_7 + "\n";}

        var box_8 = $("#box8").val();
        if (box_8 != "Cannot be assessed"){
            captext += "\nStromal Invasion - Horizontal extent: "  + box_8.replace(/mm/,'') + "mm\n";}
        else {captext += "\nStromal Invasion - Horizontal extent: "  + box_8 + "\n";}

        var box_9 = $("#box9").val();
        var box_9_1 = $("#box9_1").val();
        var box_9_2 = $("#box9_2").val();
        var box_9_3 = $("#box9_3").val();
        var box_9_4 = $("#box9_4").val();
        if (box_9 == 'Margins uninvolved by invasive carcinoma') {
            captext += "\nMargins:\n- Margins uninvolved by tumor\n\t- Nearest margin: "+box_9_1+"\n\t- Distance to this margin: " + box_9_2.replace(/mm/,"")+"mm\n\t- "+box_9_3+"\n";}
        else if (box_9 == 'Margin(s) involved by invasive carcinoma'){
            captext += "\nMargins:\n- Margins involved by tumor:\n- Margin involved: "+box_9_4+"\n";}
        else {captext += "\nMargins:\n- "+box_9+"\n";}

        var box_10 = $("#box10").val();
        captext += "\nLymph-Vascular Invasion:\n- "  + box_10+ "\n";

        var box_11 = $("#box11").val();
        var box_12 = $("#box12").val();
        var box_13 = $("#box13").val();
        var box_14 = $("#box14").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_11 != "Not applicable"){captext += box_11.join("")+' '+box_12+" "+box_13+" "+box_14+"\n";}
        else {captext += box_12+" "+box_13+" "+box_14+"\n";}

        if ($("#box15").is(':checked')) {
            var box_16_1 = $("#box16_1").val();
            var box_16_2 = $("#box16_2").val();
            var box_16_3 = $("#box16_3").val();
            var box_17_1 = $("#box17_1").val();
            var box_17_2 = $("#box17_2").val();
            var box_17_3 = $("#box17_3").val();

            if (box_17_1 > box_16_1){
                alert ('More nodes positive than were submitted, please check you data');
                return;
                $("#box17_1").focus();}
            captext += "\nLymph nodes examined:\n";
            if (box_16_1 != 0){
                captext += "\t- Pelvic nodes examined: "+box_16_1+"\n\t- Pelvic lymph nodes involved: "+box_17_1+"\n";}
            if (box_16_2 != 0){
                captext += "\t- Para-aortic nodes examined: "+box_16_1+"\n\t- Para-aortic lymph nodes involved: "+box_17_2+"\n";}
            if (box_16_3 != 0){
                captext += "\t- Other nodes examined: "+box_16_3+"\n\t- Other lymph nodes involved: "+box_17_3+"\n";}
        }

        var box_18 = $("#box18").val();
        var box_18_2 = $("#box18_2").val();
        if ($.inArray('Other', box_18) >-1){
            captext += "\n+ Additional Pathologic Findings:\n- "  + box_18.join('\n- ').replace(/Other/, box_18_2) + "\n";}
        else {captext += "\n+ Additional Pathologic Findings:\n- "  + box_18.join('\n- ') + "\n";}

        var box_19 = $("#box19").val();
        if (box_19 != 'None performed'){
            captext += "\n+ Ancillary Studies:\n- "  + box_19 + "\n";}

        $('#outPut-1').val(captext);

				dataObj.singleSection = $('#outPut-1').val();
				makeCreatePdfBtn();

    });
});/**
 * Created by Chandra Krishnan on 8/16/2017.
 */
