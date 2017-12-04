$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/
    // Histology autocomplete
    $("input#box5").autocomplete({
        source: [
            "Papillary carcinoma, Classic (usual)", "Papillary carcinoma, Clear cell variant",
            "Papillary carcinoma, Columnar cell variant", "Papillary carcinoma, Cribriform-morular variant",
            "Papillary carcinoma, Diffuse sclerosing variariant", "Papillary carcinoma, Follicular variant, encapsulated/well demarcated, infiltrative",
            "Papillary carcinoma, Follicular variant, encapsulated/well demarcated, with tumor capsular invasion",
            "Papillary carcinoma, Follicular variant, encapsulated/well demarcated, non-invasive", "Papillary carcinoma, Hobnail variant",
            "Papillary carcinoma, Macrofollicular variant", "Papillary carcinoma, Microcarcinoma (microtumor)",
            "Papillary carcinoma, Oncocytic variant (follicular variant, nonfollicular variant)", "Papillary carcinoma, Solid variant",
            "Papillary carcinoma, Tall cell variant", "Papillary carcinoma, Warthin-like variant",
            "Follicular carcinoma, minimally invasive", "Follicular carcinoma, minimally invasive, oncocytic (Hürthle cell) variant",
            "Follicular carcinoma, minimally invasive, Clear cell variant", "Follicular carcinoma, minimally invasive, Mucinous variant",
            "Follicular carcinoma, minimally invasive, with signet cells", "Follicular carcinoma, encapsulated angioinvasive",
            "Follicular carcinoma, encapsulated angioinvasive, oncocytic (Hürthle cell) variant",
            "Follicular carcinoma, encapsulated angioinvasive, Clear cell variant",
            "Follicular carcinoma, encapsulated angioinvasive, Mucinous variant",
            "Follicular carcinoma, encapsulated angioinvasive, with signet cells", "Follicular carcinoma, widely invasive",
            "Follicular carcinoma, widely invasive, oncocytic (Hürthle cell) variant",
            "Follicular carcinoma, widely invasive, Clear cell variant", "Follicular carcinoma, widely invasive, Mucinous variant",
            "Follicular carcinoma, widely invasive, with signet cells", "Poorly differentiated thyroid carcinoma",
            "Undifferentiated (anaplastic) carcinoma, focal or minor component without extrathyroidal extension",
            "Undifferentiated (anaplastic) carcinoma, major component",
            "Undifferentiated (anaplastic) carcinoma, not otherwise specified", "Medullary carcinoma",
            "Carcinoma, type cannot be determined", "Other histologic type"
        ],
        appendTo: '#Leftpanel'
    });


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
             "Ubiquitin", "Uroplakin", "Varicella", "Villin", "WT-1", "HR HPV in-situ", 
             "FISH", "NGS", "Karyotype", "array CGH"
         ];
 
         function split(val) {
             return val.split(/,\s*/);
         }
 
         function extractLast(term) {
             return split(term).pop();
         }
         $("input#XXX").autocomplete({
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

    $('#box3').on("change", function(){
        var sel = $('#box3').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box3_2').show();}
        else {$('#box3_2').hide();}
    });

    $('#box6').on("change", function(){
        var sela = $('#box6').val();
        if (sela.indexOf('Uninvolved') > -1){
            $('#box6_2').show();}
        else {
            $('#box6_2').hide();}
        if (sela.indexOf("Involved") > -1) {
            $('#box6_3').show();}
        else {$('#box6_3').hide();}
    });

    $("#box16").on("change", function(){
        if ($(this).is(":checked")){
            $(".lnchk").show();}
        else{
            $(".lnchk").hide();}
    });

    $("#box18").on("input", function(){
        var sel = $(this).val();
        if (sel > 0){
            $('.node-involved').show();
        } else {
            $('.node-involved').hide();
        }
    });

    $('#box19').on("change", function(){
        var sel = $('#box19').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box19_2').show();}
        else {$('#box19_2').hide();}
    });

    $('#box20').on("change", function(){
        var sel = $('#box20').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box20_2').show();}
        else {$('#box20_2').hide();}
    });

    $('#box23').on("change", function(){
        var sela = $('#box23').val();
        var trig1 = sela.filter(el => el.indexOf('Parathyroid') > -1);
        var trig2 = sela.filter(el => el.indexOf('Other') > -1);
        if (trig1.length > 0) {
            $('#box23_2').show();}
        else {$('#box23_2').hide();}
        if (trig2.length > 0) {
            $('#box23_3').show();}
        else {$('#box23_3').hide();}
    });

    $('#box24').on("change", function(){
        var sela = $('#box24').val();
        var trig1 = sela.filter(el => el.indexOf('Postoperative serum marker') > -1);
        var trig2 = sela.filter(el => el.indexOf('Other') > -1);
        if (trig1.length > 0) {
            $('#box24_2').show();}
        else {$('#box24_2').hide();}
        if (trig2.length > 0) {
            $('#box24_3').show();}
        else {$('#box24_3').hide();}
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



        var captext = "Thyroid Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        captext += "\nProcedure:\n- "  + box_1+ "\n";

        var box_2 = $("#box2").val();
        captext += "\nTumor Focality:\n- "  + box_2+ "\n";

        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        if ($.inArray('Other', box_3) >-1){
            captext += "\nTumor Site:\n- "  + box_3.join('\n- ').replace(/Other/, box_3_2) + "\n";}
        else {captext += "\nTumor Site:\n- "  + box_3.join('\n- ') + "\n";}

        var box_4 = $("#box4").val();
        captext += "\nTumor Size:\n- "  + box_4.replace(/cm/,'') + "cm\n";

        var box_5 = $("#box5").val();
        captext += "\nHistologic Type:\n- "  + box_5 + "\n";

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        var box_6_3 = $("#box6_3").val();
        if (box_6.indexOf("Uninvolved") > -1) {
            captext += "\nMargins:\n- "+box_6+"\n- Distance to nearest margin: " + box_6_2.replace(/mm/,"")+"mm\n";}
        else if (box_6.indexOf("Involved") > -1) {
            captext += "\nMargins:\n- "+box_6+"\n- Margin involved: "+box_6_3+"\n";}
        else {captext += "\nMargins:\n- "+box_6+"\n";}

        var box_7 = $("#box7").val();
        captext += "\nAngioinvasion:\n- "  + box_7+ "\n";

        var box_8 = $("#box8").val();
        captext += "\nLymphatic Invasion:\n- "  + box_8+ "\n";

        var box_9 = $("#box9").val();
        captext += "\nMitotic Rate:\n- "  + box_9 + " per 10 hpf\n";

        var box_10 = $("#box10").val();
        captext += "\n+ Perineural Invasion:\n- "  + box_10+ "\n";

        var box_11 = $("#box11").val();
        captext += "\nExtrathyroidal Extension:\n- "  + box_11+ "\n";

        var box_12 = $("#box12").val();
        var box_13 = $("#box13").val();
        var box_14 = $("#box14").val();
        var box_15 = $("#box15").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_12 != "Not applicable"){captext += box_12.join("")+' '+box_13+" "+box_14+" "+box_15+"\n";}
        else {captext += box_13+" "+box_14+" "+box_15+"\n";}

        if ($("#box16").is(':checked')) {
            var box_17 = $("#box17").val();
            var box_18 = $("#box18").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_17 + "\n";

            var box_20 = $("#box20").val();
            var box_20_2 = $("#box20_2").val();
            if ($.inArray('Other', box_20) > -1) {
                captext += "\tLymph Node Levels examined: " + box_20.join(', ').replace(/Other/, box_20_2) + "\n";
            }
            else {
                captext += "\tLymph Node Levels examined: " + box_20.join(', ') + "\n";
            }

            captext += "\tLymph nodes involved: " + box_18 + "\n";

            if (box_18 > 0) {
                        var box_19 = $("#box19").val();
                        var box_19_2 = $("#box19_2").val();
                        if ($.inArray('Other', box_19) > -1) {
                            captext += "\tLymph Node Levels involved: " + box_19.join(', ').replace(/Other/, box_19_2) + "\n";
                        }
                        else {
                            captext += "\tLymph Node Levels involved: " + box_19.join(', ') + "\n";
                        }

                        var box_21 = $("#box21").val();
                        captext += "\tSize of Largest Metastatic Deposit: " + box_21.replace(/cm/, '') + "cm\n";

                        var box_22 = $("#box22").val();
                        captext += "\tExtranodal Extension: " + box_22 + "\n";
                    }
                }else {
                        captext += "\nLymph nodes: None submitted\n";
                    }





        var box_23 = $("#box23").val();
        var box_23_2 = $("#box23_2").val();
        var box_23_3 = $("#box23_3").val();
        var trig1_box_23 = box_23.filter(el => el.indexOf("Parathyroid") > -1);
        var trig2_box_23 = box_23.filter(el => el.indexOf("Other") > -1);
        if ((trig1_box_23.length > 0 ) && (trig2_box_23.length == 0  )) {
            captext += "\n+ Additional Pathologic Findings:\n- "+box_23.join("\n- ").replace(/Parathyroid gland(s) present/, "Parathyroid gland(s) identified: "+box_23_2+" in total")+"\n";}
        else if ((trig1_box_23.length == 0 ) && (trig2_box_23.length > 0  )) {
            captext += "\n+ Additional Pathologic Findings:\n- "+box_23.join("\n- ").replace(/Other/, box_23_3)+"\n";}
        else if ((trig1_box_23.length > 0 ) && (trig2_box_23.length > 0  )) {
            captext += "\n+ Additional Pathologic Findings:\n- "+box_23.join("\n- ").replace(/Parathyroid gland(s) present/, "Parathyroid gland(s) identified: "+box_23_2+" in total").replace(/Other/, box_23_3)+"\n";}
        else {captext += "\n+ Additional Pathologic Findings:\n- "+box_23.join("\n- ")+"\n";}

        var box_24 = $("#box24").val();
        var box_24_2 = $("#box24_2").val();
        var box_24_3 = $("#box24_3").val();
        var trig1_box_24 = box_24.filter(el => el.indexOf("Postoperative serum marker") > -1);
        var trig2_box_24 = box_24.filter(el => el.indexOf("Other") > -1);
        if ((trig1_box_24.length > 0 ) && (trig2_box_24.length == 0  )) {
            captext += "\n+ Clinical History:\n- "+box_24.join("\n- ").replace(/marker/, "marker: "+box_24_2)+"\n";}
        else if ((trig1_box_24.length == 0 ) && (trig2_box_24.length > 0  )) {
            captext += "\n+ Clinical History:\n- "+box_24.join("\n- ").replace(/Other/, box_24_3)+"\n";}
        else if ((trig1_box_24.length > 0 ) && (trig2_box_24.length > 0  )) {
            captext += "\n+ Clinical History:\n- "+box_24.join("\n- ").replace(/marker/, "marker: "+box_24_2).replace(/Other/, box_24_3)+"\n";}
        else {captext += "\n+ Clinical History:\n- "+box_24.join("\n- ")+"\n";}




        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});


