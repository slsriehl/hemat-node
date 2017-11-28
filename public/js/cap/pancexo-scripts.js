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
            "Ubiquitin", "Uroplakin", "Varicella", "Villin", "WT-1", "FISH testing", "Karyotype", "KRAS mutation testing", "BRAF V600E"
        ];

        function split(val) {
            return val.split(/,\s*/);
        }

        function extractLast(term) {
            return split(term).pop();
        }
        $("input#box15").autocomplete({
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
            $('#box_2').show();}
        else {$('#box_2').hide();}
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
        else {$('#box6_2').hide();}
    });

    $('#box7').change(function(){
        var sela = $('#box7').val();
        var selb = $('#box7').val();
        if ($.inArray('Tumor invades other peripancreatic soft tissue', sela) >-1) {
            $('#box7_2').show();}
        else {$('#box7_2').hide();}
        if ($.inArray('Tumor invades other adjacent organs or structures', selb) >-1) {
            $('#box7_3').show();}
        else {$('#box7_3').hide();}
    });

    $('#box8').change(function(){
        var sela = $('#box8').val();
        if (sela == 'Margins uninvolved by invasive carcinoma') {
            $('#box8_2').show();}
        else {$('#box8_2').hide();}
        if (sela == 'Margins involved by invasive carcinoma') {
            $('.marginpos').show();}
        else {$('.marginpos').hide();}
    });

    $('#box8a').change(function(){
        var sel = $('#box8a').val();
        if (sel == 'Uninvolved by pancreatic high-grade intraepithelial neoplasia or invasive carcinoma') {
            $('#box8a_2').show();}
        else {
            $('#box8a_2').hide();}
    });

    $('#box8b').change(function(){
        var sel = $('#box8b').val();
        if (sel == 'Uninvolved by pancreatic high-grade intraepithelial neoplasia or invasive carcinoma') {
            $('#box8b_2').show();}
        else {
            $('#box8b_2').hide();}
    });

    $('#box8c').change(function(){
        var sel = $('#box8c').val();
        if (sel == 'Uninvolved by pancreatic high-grade intraepithelial neoplasia or invasive carcinoma') {
            $('#box8c_2').show();}
        else {
            $('#box8c_2').hide();}
    });

    $('#box8d').change(function(){
        var sel = $('#box8d').val();
        if (sel == 'Uninvolved by pancreatic high-grade intraepithelial neoplasia or invasive carcinoma') {
            $('#box8d_2').show();}
        else {
            $('#box8d_2').hide();}
    });

    $('#box8e').change(function(){
        var sel = $('#box8e').val();
        if (sel == 'Uninvolved by pancreatic high-grade intraepithelial neoplasia or invasive carcinoma') {
            $('#box8e_2').show();}
        else {
            $('#box8e_2').hide();}
    });

    $('#box8f').change(function(){
        var sel = $('#box8f').val();
        if (sel == 'Uninvolved by pancreatic high-grade intraepithelial neoplasia or invasive carcinoma') {
            $('#box8f_2').show();}
        else {
            $('#box8f_2').hide();}
    });

    $('#box8g').change(function(){
        var sel = $('#box8g').val();
        if (sel == 'Uninvolved by pancreatic high-grade intraepithelial neoplasia or invasive carcinoma') {
            $('#box8g_2').show();}
        else {
            $('#box8g_2').hide();}
    });

    $('#box13').change(function(){
        if ($(this).is(':checked')){
            $('.lndiv').show();}
        else {
            $('.lndiv').hide();}
    });

    $('#box14').change(function(){
        var sel = $('#box14').val();
        if (sel == 'Other') {
            $('#box14_2').show();}
        else {$('#box14_2').hide();}
    });



    $('#box16').change(function(){
        var sel = $('#box16').val();
        if (sel == 'Other') {
            $('#box16_2').show();}
        else {$('#box16_2').hide();}
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

        var captext = "Exocrine Pancreas Cancer Synoptic\nAJCC 2018 cancer staging version\n\n";
        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if ($.inArray('Other', box_1) >-1){
            captext += "\nSpecimen:\n- "  + box_1.join('\n- ').replace(/Other/, box_1_2) + "\n";}
        else {captext += "\nSpecimen:\n- "  + box_1.join('\n- ') + "\n";}

        var box_2 = $("#box2").val();
        var box__2 = $("#box_2").val();
        if (box_2 == 'Other'){
            captext += "\nProcedure:\n- "  + box__2+ "\n";}
        else {captext += "\nProcedure:\n- "  + box_2+ "\n";}


        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        if ($.inArray('Other', box_3) >-1){
            captext += "\nTumor Site:\n- "  + box_3.join('\n- ').replace(/Other/, box_3_2) + "\n";}
        else {captext += "\nTumor Site:\n- "  + box_3.join('\n- ') + "\n";}

        var box_4 = $("#box4").val();
        captext += "\nTumor Size (cm):\n- "  + box_4.replace(/cm/,'') + "cm\n";

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if ($.inArray('Other', box_5) >-1){
            captext += "\nHistologic Type:\n- "  + box_5.join('\n- ').replace(/Other/, box_5_2) + "\n";}
        else {captext += "\nHistologic Type:\n- "  + box_5.join('\n- ') + "\n";}

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6 != 'Not applicable'){
            if (box_6 == 'Other'){
                captext += "\nHistologic grade:\n- "  + box_6_2+ "\n";}
            else {captext += "\nHistologic grade:\n- "  + box_6+ "\n";}
        }
        else {captext += "\nTumor type not graded\n";}

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        var box_7_3 = $("#box7_3").val();
        if ($.inArray('Tumor invades other peripancreatic soft tissue', box_7) > -1 && $.inArray('Tumor invades other adjacent organs or structures', box_7) == -1) { captext += "\nMicroscopic Tumor Extension:\n- "+box_7.join("\n- ").replace(/Tumor invades other peripancreatic soft tissue/, box_7_2)+"\n";}
        else if ($.inArray('Tumor invades other adjacent organs or structures', box_7) > -1 && $.inArray('Tumor invades other peripancreatic soft tissue', box_7) == -1) { captext += "\nMicroscopic Tumor Extension:\n- "+box_7.join("\n- ").replace(/;/, ': '+box_7_3)+"\n";}
        else if ($.inArray('Tumor invades other peripancreatic soft tissue', box_7) > -1 && $.inArray('Tumor invades other adjacent organs or structures', box_7) > -1) { captext += "\nMicroscopic Tumor Extension:\n- "+box_7.join("\n- ").replace(/Tumor invades other peripancreatic soft tissue/, box_7_2).replace(/;/, ': '+box_7_3)+"\n";}
        else {captext += "\nMicroscopic Tumor Extension:\n- "+box_7.join("\n- ")+"\n";}

        var box_8 = $("#box8").val();
        var box_8_2 = $("#box8_2").val();
        if (box_8 == 'Margins uninvolved by invasive carcinoma'){
            captext += "\nMargins:\n- "+box_8+"\n- Distance to closest margin is "+box_8_2.replace(/cm/,'')+"cm\n";}
        else if (box_8 = "Margins involved by invasive carcinoma"){

            var box_8a = $("#box8a").val();
            var box_8a_2 = $("#box8a_2").val();
            if (box_8a == 'Uninvolved by pancreatic high-grade intraepithelial neoplasia or invasive carcinoma'){
                captext += "\nProximal Pancreatic Parenchymal Margin: "+box_8a+", Distance to margin: " + box_8a_2.replace(/mm/,'')+ "mm\n";}
            else {captext += "\nProximal Pancreatic Parenchymal Margin:\n- "  + box_8a+ "\n";}


            var box_8b = $("#box8b").val();
            var box_8b_2 = $("#box8b_2").val();
            if(box_8b != "Not applicable"){
                if (box_8b == 'Uninvolved by pancreatic high-grade intraepithelial neoplasia or invasive carcinoma'){
                    captext += "\nDistal Pancreatic Parenchymal Margin: "+box_8b+", Distance to margin: " + box_8b_2.replace(/mm/,'')+ "mm\n";}
                else {captext += "\nDistal Pancreatic Parenchymal Margin:\n- "  + box_8b+ "\n";}
            }

            var box_8c = $("#box8c").val();
            var box_8c_2 = $("#box8c_2").val();
            if(box_8c != "Not applicable"){
                if (box_8c == 'Uninvolved by pancreatic high-grade intraepithelial neoplasia or invasive carcinoma'){
                    captext += "\nPancreatic Neck/Parenchymal Margin: "+box_8c+", Distance to margin: " + box_8c_2.replace(/mm/,'')+ "mm\n";}
                else {captext += "\nPancreatic Neck/Parenchymal Margin:\n- "  + box_8c+ "\n";}
            }

            var box_8d = $("#box8d").val();
            var box_8d_2 = $("#box8d_2").val();
            if(box_8d != "Not applicable"){
                if (box_8d == 'Uninvolved by pancreatic high-grade intraepithelial neoplasia or invasive carcinoma'){
                    captext += "\nUncinate Margin: "+box_8d+", Distance to margin: " + box_8d_2.replace(/mm/,'')+ "mm\n";}
                else {captext += "\nUncinate Margin:\n- "  + box_8d+ "\n";}
            }

            var box_8e = $("#box8e").val();
            var box_8e_2 = $("#box8e_2").val();
            if(box_8e != "Not applicable"){
                if (box_8e == 'Uninvolved by pancreatic high-grade intraepithelial neoplasia or invasive carcinoma'){
                    captext += "\nBile duct Margin: "+box_8e+", Distance to margin: " + box_8e_2.replace(/mm/,'')+ "mm\n";}
                else {captext += "\nBile duct Margin:\n- "  + box_8e+ "\n";}
            }

            var box_8f = $("#box8f").val();
            var box_8f_2 = $("#box8f_2").val();
            if(box_8f != "Not applicable"){
                if (box_8f == 'Uninvolved by pancreatic high-grade intraepithelial neoplasia or invasive carcinoma'){
                    captext += "\nProximal Margi: "+box_8f+", Distance to margin: " + box_8f_2.replace(/mm/,'')+ "mm\n";}
                else {captext += "\nProximal Margin:\n- "  + box_8f+ "\n";}
            }

            var box_8g = $("#box8g").val();
            var box_8g_2 = $("#box8g_2").val();
            if(box_8g != "Not applicable"){
                if (box_8g == 'Uninvolved by pancreatic high-grade intraepithelial neoplasia or invasive carcinoma'){
                    captext += "\nDistal Margin: "+box_8g+", Distance to margin: " + box_8g_2.replace(/mm/,'')+ "mm\n";}
                else {captext += "\nDistal Margin:\n- "  + box_8g+ "\n";}
            }


        }
        else {captext += "\nMargins:\n- "+box_8+"\n";}

        var box_9 = $("#box9").val();
        if (box_9 != 'No prior treatment'){
            captext += "\nTreatment effect:\n- "  + box_9+ "\n";}


        var box_10 = $("#box10").val();
        captext += "\nLymph-vascular invasion:\n- "  + box_10+ "\n";

        var box_11 = $("#box11").val();
        captext += "\nPerineural invasion:\n- "  + box_11+ "\n";

        var box_12_1 = $("#box12_1").val();
        var box_12_2 = $("#box12_2").val();
        var box_12_3 = $("#box12_3").val();
        var box_12_4 = $("#box12_4").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_12_1 != "Not applicable"){captext += box_12_1.join("")+' '+box_12_2+" "+box_12_3+" "+box_12_4+"\n";}
        else {captext += box_12_2+" "+box_12_3+" "+box_12_4+"\n";}

        if ($("#box13").is(':checked')) {
            var box_13_2 = $("#box13_2").val();
            var box_13_3 = $("#box13_3").val();
            captext += "\nLymph nodes examined: "+box_13_2+"\nLymph nodes involved: "+box_13_3+"\n";}

        var box_14 = $("#box14").val();
        var box_14_2 = $("#box14_2").val();
        if (box_14 == 'Other'){
            captext += "\n+Additional pathologic findings (select all that apply):\n- "  + box_14_2+ "\n";}
        else {captext += "\n+Additional pathologic findings (select all that apply):\n- "  + box_14+ "\n";}


        var box_15 = $("#box15").val();
        captext += "\n+Ancillary studies:\n- "  + box_15 + "\n";

        var box_16 = $("#box16").val();
        var box_16_2 = $("#box16_2").val();
        if (box_16 != 'Not specified'){
            if (box_16 == 'Other'){
                captext += "\nClinical history:\n- "  + box_16_2+ "\n";}
            else {captext += "\nClinical history:\n- "  + box_16+ "\n";}
        }



        $('#outPut-1').val(captext);


				dataObj.singleSection = $('#outPut-1').val();
				makeCreatePdfBtn();
    });
});
/**
 * Created by Chandra Krishnan on 8/16/2017.
 */
