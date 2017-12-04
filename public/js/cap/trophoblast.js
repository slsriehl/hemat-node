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
            "OCT-2", "OCT3/4", "p16", "p504s", "p53", "p63", "p57", "Parainfluenza",
            "ParvoB19", "PAX-5", "PAX-8", "PDGF-b", "PE10", "Perforin", "pHH3",
            "PLAP", "PMS-2", "PR", "Prolactin", "PTH", "Prostate triple stain",
            "PSA", "PSAP", "RCC", "RSV", "S100", "SALL4", "SMA", "SMMHC",
            "Smoothelin", "Somatostatin", "SurfactantA", "SurfactantB",
            "Synaptophysin", "Tau", "TdT", "Thyroglobulin", "Toxoplasma",
            "Transthyretin", "Trypsin", "TSH", "TTF-1", "Tubulin", "Tyrosinase",
            "Ubiquitin", "Uroplakin", "Varicella", "Villin", "WT-1", "HR HPV in-situ", "FISH", "NGS", "Karyotype", "array CGH"
        ];

        function split(val) {
            return val.split(/,\s*/);
        }

        function extractLast(term) {
            return split(term).pop();
        }
        $("input#box18").autocomplete({
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

    $('#box1').on("change", function(){
        var sel = $('#box1').val();
        if (sel.indexOf("Other") > -1) {

            $('#box1_2').show();}
        else {
            $('#box1_2').hide();}
    });

    $('#box2').on("change", function(){
        var sel = $('#box2').val();
        if (sel.indexOf("Other") > -1) {

            $('#box2_2').show();}
        else {
            $('#box2_2').hide();}
    });

    $('#box3').on("change", function(){
        var sel = $('#box3').val();
        if (sel.indexOf("Other") > -1) {

            $('#box3_2').show();}
        else {
            $('#box3_2').hide();}
    });

    $('#box5').on("change", function(){
        var sel = $('#box5').val();
        if (sel.indexOf("Other") > -1) {

            $('#box5_2').show();}
        else {
            $('#box5_2').hide();}
    });

    $('#box6').on("change", function(){
        var sel = $('#box6').val();
        var trig = sel.filter(el => el.indexOf('Other') > -1);
        if (trig.length > 0) {
            $('#box6_2').show();}
        else {$('#box6_2').hide();}
    });

    $('#box7').on("change", function(){
        var sela = $('#box7').val();
        if (sela.indexOf('Uninvolved') > -1){
            $('#box7_1').show();
            $('#box7_2').show();}
        else {$('#box7_1').hide();
            $('#box7_2').hide();}
        if (sela.indexOf("Involved") > -1) {
            $('#box7_3').show();}
        else {$('#box7_3').hide();}
    });

    $("#box12").on("change", function(){
        var sel = $(this).val();
        if (sel == 'pM1b') {
            $(".met-sites").show();
        } else {
            $(".met-sites").hide();
        }
    });

    $('#box16').on("change", function(){
        var sela = $('#box16').val();
        var trig1 = sela.filter(el => el.indexOf('Lymph') > -1);
        var trig2 = sela.filter(el => el.indexOf('Other') > -1);
        if (trig1.length > 0) {
            $('#box16_2').show();}
        else {$('#box16_2').hide();}
        if (trig2.length > 0) {
            $('#box16_3').show();}
        else {$('#box16_3').hide();}
    });




//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('.writeReport').on('click', function () {

    // ***************** INPUT VALIDATION ********************//
          $('select[multiple]:visible').each(function() {
            // Check if at least one selection is made
            if($(this).val().length > 0) {
                $(this).removeClass('empty');
            } else {
                $(this).addClass('empty');
                $('#cap-valid').show();
            }
        });

        $('input[type="text"]:visible').each(function() {
            // Check if at least one selection is made
            if($.trim($(this).val()).length > 0) {
                $(this).removeClass('empty');
            } else {
                if ($(this).attr('placeholder').indexOf('applicable') < 0) {
                    $(this).addClass('empty');
                    $('#cap-valid').show();
                }
            }
        });

    // ***************** END VALIDATION ********************//



        var captext = "Gestational Trophoblastic Tumor Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1 == 'Other'){
            captext += "\nProcedure:\n- "  + box_1_2+ "\n";}
        else {captext += "\nProcedure:\n- "  + box_1+ "\n";}


        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if(box_2 != "Not applicable"){
            if (box_2.indexOf("Other") > -1) {
                captext += "\nSpecimen integrity:\n- "  + box_2_2+ "\n";}
            else {captext += "\nSpecimen integrity:\n- "  + box_2+ "\n";}
        }


        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        if (box_3 == 'Other'){
            captext += "\nTumor Site:\n- "  + box_3_2+ "\n";}
        else {captext += "\nTumor Site:\n- "  + box_3+ "\n";}


        var box_4 = $("#box4").val();
        captext += "\nTumor Size:\n- "  + box_4.replace(/cm/,'') + "cm\n";

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if (box_5 == 'Other histologic type not listed'){
            captext += "\nHistologic Type:\n- "  + box_5_2+ "\n";}
        else {captext += "\nHistologic Type:\n- "  + box_5+ "\n";}


        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
            if ($.inArray('Other', box_6) >-1){
                captext += "\nOther Tissue/Organ Involvement:\n- "  + box_6.join('\n- ').replace(/Other/, box_6_2) + "\n";}
            else {captext += "\nOther Tissue/Organ Involvement:\n- "  + box_6.join('\n- ') + "\n";}


        var box_7 = $("#box7").val();
        var box_7_1 = $("#box7_1").val();
        var box_7_2 = $("#box7_2").val();
        var box_7_3 = $("#box7_3").val();
        if (box_7.indexOf("Uninvolved") > -1) {
            captext += "\nMargins:\n- "+box_7+"\n- Nearest margin: "+box_7_1+"\n- Distance to this margin: " + box_7_2.replace(/mm/,"")+"mm\n";}
        else if (box_7.indexOf("Involved") > -1) {
            captext += "\nMargins:\n- "+box_7+"\n- Margin involved: "+box_7_3+"\n";}
        else {captext += "\nMargins:\n- "+box_7+"\n";}

        var box_8 = $("#box8").val();
        captext += "\nLymphovascular Invasion:\n- "  + box_8+ "\n";

        var box_9 = $("#box9").val();
        var box_10 = $("#box10").val();
        var box_11 = $("#box11").val();
        var box_12 = $("#box12").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_9 != "Not applicable"){captext += box_9.join("")+' '+box_10+" "+box_12+"\n";}
        else {captext += box_10+" "+box_12+"\n";}


        var box_16 = $("#box16").val();
        var box_16_2 = $("#box16_2").val();
        var box_16_3 = $("#box16_3").val();
        if (box_12 == "pM1b") {
            var trig1_box_16 = box_16.filter(el => el.indexOf("Lymph") > -1);
            var trig2_box_16 = box_16.filter(el => el.indexOf("Other") > -1);
            if ((trig1_box_16.length > 0 ) && (trig2_box_16.length == 0  )) {
                captext += "\nSpecify metastatic sites:\n- " + box_16.join("\n- ").replace(/Lymph node\(s\)/, "Lymph nodes: " + box_16_2) + "\n";
            }
            else if ((trig1_box_16.length == 0 ) && (trig2_box_16.length > 0  )) {
                captext += "\nSpecify metastatic sites:\n- " + box_16.join("\n- ").replace(/Other/, box_16_3) + "\n";
            }
            else if ((trig1_box_16.length > 0 ) && (trig2_box_16.length > 0  )) {
                captext += "\nSpecify metastatic sites:\n- " + box_16.join("\n- ").replace(/Lymph node\(s\)/, "Lymph nodes: " + box_16_2).replace(/Other/, box_16_3) + "\n";
            }
            else {
                captext += "\nSpecify metastatic sites:\n- " + box_16.join("\n- ") + "\n";
            }
        }

        var box_17 = $("#box17").val();
        captext += "\n+ FIGO Stage:\n- "  + box_17+ "\n";

        var box_18 = $("#box18").val();
        captext += "\n+ Ancillary Studies:\n- "  + box_18.replace(/\,$/, '') + "\n";




        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});



/**
 * Created by Chandra Krishnan on 12/2/2017.
 */
