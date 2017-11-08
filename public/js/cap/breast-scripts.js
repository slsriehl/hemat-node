$(window).on('load', function(){

//**************POP UPS ******************//
    $("input#box5").autocomplete({
        source: ['Microinvasive carcinoma', 'Invasive ductal carcinoma, (NOS)', 'Invasive ductal, Mixed type carcinoma', 'Invasive ductal, Pleomorphic carcinoma', 'Invasive ductal, Carcinoma with osteoclastic giant cells', 'Invasive ductal, Carcinoma with choriocarcinomatous features', 'Invasive ductal, Carcinoma with melanotic features', 'Invasive lobular carcinoma', 'Tubular carcinoma', 'Invasive cribriform carcinoma', 'Medullary carcinoma', 'Mucinous carcinoma', 'Cystadenocarcinoma and columnar cell mucinous carcinoma', 'Signet-ring cell carcinoma', 'Solid neuroendocrine carcinoma', 'Atypical carcinoid tumor', 'Small cell/oat cell carcinoma', 'Large cell neuroendocrine carcinoma', 'Invasive papillary carcinoma', 'Invasive micropapillary carcinoma', 'Apocrine carcinoma', 'Squamous cell carcinoma (metaplastic carcinoma)', 'Adenocarcinoma with spindle cell metaplasia  (metaplastic carcinoma)', 'Adenosquamous carcinoma  (metaplastic carcinoma)', 'Mucoepidermoid carcinoma  (metaplastic carcinoma)', 'Mixed epithelial/mesenchymal metaplastic carcinomas', 'Lipid-rich carcinoma', 'Secretory carcinoma', 'Oncocytic carcinoma', 'Adenoid cystic carcinoma', 'Acinic cell carcinoma', 'Glycogen-rich clear cell carcinoma', 'Sebaceous carcinoma', 'Inflammatory carcinoma', 'Other'
        ],
        appendTo: '#Leftpanel'
    });

    $('#box41_4').on('change', function() {
        var Her2 = $('#box41_3').val();
        var Chr17 = $('#box41_4').val();
        var herratio = Her2 / Chr17;
        $("#box41_5").val(herratio.toFixed(2));
    });
    $('#box14').on('click', function() {
        $('.optDCIS').toggle();
    });

    $('.lnchk').on('change', function() {
        $('.lndiv').toggle();
    });

    $('#box1').on('change', function () {
        var sel = $('#box1').val();
        if (sel == 'Other:') {
            $('input[id=box1_2]').show();
        } else if (sel != 'Other:') {
            $('input[id=box1_2]').hide();
        }
    });

    $('#box2').on('change', function () {
        var sel = $('#box2').val();
        if (sel.indexOf('Other lymph nodes') > -1) {
            $('input[id=box2_2]').show();
        } else if (sel != 'Other lymph nodes') {
            $('input[id=box2_2]').hide();
        }
    });

    $('#box4').on('change', function () {
        var sel = $('#box4').val();
        if ($.inArray('Other:', sel) > -1) {
            $('input[id=box4_3]').show();
        } else {
            $('input[id=box4_3]').hide();
        }

    });

    $('#box5').on('blur', function () {
        var sel = $('#box5').val();
        if (sel == 'Other') {
            $('input[id=box5_2]').show();
        } else if (sel != 'Other') {
            $('input[id=box5_2]').hide();
        }
    });

    $('#box6').on('input', function () {
        var sel = $('#box6').val();
        if (sel == 'Largest focus of invasion >1 mm') {
            $('input[id=box6_2]').show();
        } else {
            $('input[id=box6_2]').hide();
        }
    });

    $('#box12').on('change', function () {
        var sel = $('#box12').val();
        if (sel == 'Multiple foci of invasive carcinoma') {
            $('#box12_2').show();
            $('#box12_3').show();
        } else {
            $('#box12_2').hide();
            $('#box12_3').hide();
        }
    });

    $('#box15').on('change', function () {
        var sel = $('#box15').val();
        if ($.inArray('Other:', sel) >-1) {
            $('#box15_2').show();
        } else {
            $('#box15_2').hide();
        }
    });

    $('#box20').on('change', function () {
        var sel = $('#box20').val();
        if (sel == 'Margins uninvolved by invasive carcinoma') {
            $('#box20_2').show();
            $('#box20_3').show();
        } else {
            $('#box20_2').hide();
            $('#box20_3').hide();
        }
        if (sel == 'Margin(s) positive for invasive carcinoma') {
            $('#box20_4').show();
        } else {
            $('#box20_4').hide();
        }

    });

    $('#box20_5').on('change', function () {
        var sel = $('#box20_5').val();
        if ($.inArray('Other:', sel) >-1) {
            $('#box20_6').show();
        } else {
            $('#box20_6').hide();
        }
    });

    $('#box22').on('change', function () {
        var sel = $('#box22').val();
        if (sel == 'Margins uninvolved by DCIS') {
            $('#box22_2').show();
            $('#box22_3').show();
        } else {
            $('#box22_2').hide();
            $('#box22_3').hide();
        }
        if (sel == 'Margin(s) positive for DCIS') {
            $('#box22_4').show();
        } else {
            $('#box22_4').hide();
        }

    });

    $('#box22_5').on('change', function () {
        var sel = $('#box22_5').val();
        if ($.inArray('Other:', sel) >-1) {
            $('#box22_6').show();
        } else {
            $('#box22_6').hide();
        }
    });

    $('#box36').on('change', function () {
        var sel = $('#box36').val();
        if (sel == 'Positive') {
            $('#box36_2').show();
            $('.Erint').show();
        } else {
            $('#box36_2').hide();
            $('.Erint').hide();
        }
        if (sel == 'Other:') {
            $('#box36_3').show();
        } else {
            $('#box36_3').hide();
        }

    });

    $('#box38').on('change', function () {
        var sel = $('#box38').val();
        if (sel == 'Positive') {
            $('#box38_2').show();
            $('.Print').show();
        } else {
            $('#box38_2').hide();
            $('.Print').hide();
        }
        if (sel == 'Other:') {
            $('#box38_3').show();
        } else {
            $('#box38_3').hide();
        }

    });

    $('#box40').on('change', function () {
        var sel = $('#box40').val();
        if (sel == 'Indeterminate:') {
            $('#box40_2').show();
        } else {
            $('#box40_2').hide();
        }
    });

    $('#box41').on('change', function () {
        var sel = $('#box41').val();
        if (sel == 'Equivocal' || sel == 'Positive (amplified)') {
            $('#box41_3').show();
            $('#box41_4').show();
            $('.Her2rat').show();
        } else {
            $('#box41_3').hide();
            $('#box41_4').hide();
            $('.Her2rat').hide();
        }
        if (sel == 'Indeterminate:') {
            $('#box41_2').show();
        } else {
            $('#box41_2').hide();
        }

    });

    $('#singlechk').on('change', function(){
        $('.singleprobe').toggle();
        if ($(this).is(':checked')){
            $('#dualchk').prop('disabled', true);}
        else {$('#dualchk').prop('disabled', false);}
    });

    $('#dualchk').on('change', function(){
        $('.dualprobe').toggle();
        if ($(this).is(':checked')){
            $('#singlechk').prop('disabled', true);}
        else {$('#singlechk').prop('disabled', false);}
    });

    $('#box37_2').on('change', function(){
        if ($(this).is(':checked')){
            $('#box37_5').select2('val', '6F11');}
        else {$('#box37_5').select2('val', 'SP1');}
    });

    $('#box37_3').on('change', function(){
        var sel = $(this).val();
        if (sel == 'FDA cleared'){
            $('#box37_4').show();}
        else{$('#box37_4').hide();}
    });

    $('#box37_5').on('change', function(){
        var sel = $(this).val();
        if (sel == 'Other'){
            $('#box37_6').show();}
        else{$('#box37_6').hide();}
    });

    $('#box39_2').on('change', function(){
        if ($(this).is(':checked')){
            $('#box39_5').select2('val', '1294');}
        else {$('#box39_5').prop('val', '1E2');}
    });

    $('#box39_3').on('change', function(){
        var sel = $(this).val();
        if (sel == 'FDA cleared'){
            $('#box39_4').show();}
        else{$('#box39_4').hide();}
    });

    $('#box39_5').on('change', function(){
        var sel = $(this).val();
        if (sel == 'Other'){
            $('#box39_6').show();}
        else{$('#box39_6').hide();}
    });

//**************SYNOPTICS****************//
$('#writeReport').on('click', function() {
    var captext = "Invasive Breast Cancer Synoptic\n\n";
// Checklist variables

    var box_1 = $("#box1").val();
    if (box_1 == 'Other:') {
        var box_1_2 = $("#box1_2").val();
        captext += "Specimen Identification:\n- " + box_1_2 + "\n";
    }
    else {
        captext += "Specimen Identification:\n- " + box_1 + "\n";
    }

    var box_2 = $("#box2").val();
    if ($.inArray('Other lymph nodes', box_2) > -1) {
        var box_2_2 = $("#box2_2").val();
        captext += "\nLymph Node sampling:\n- " + box_2.join("\n- ").replace(/Other lymph nodes/, box_2_2) + "\n";
    }
    else {
        captext += "\nLymph Node sampling:\n- " + box_2.join("\n- ") + "\n";
    }

    var box_3 = $("#box3").val();
    if (box_3 == 'Not specified') {
        alert('Please select specimen laterality');
        $('#box3').focus();
        return;
    }
    else {
        captext += "\nSpecimen Laterality:\n- " + box_3 + "\n";
    }

    var box_4 = $("#box4").val();
    if (box_4 != 'Not applicable') {
        if (($.inArray('Position', box_4) > -1) && ($.inArray('Other:', box_4) <= -1)) {
            var box_4_2 = $("#box4_2").val();
            captext += "\nTumor Site(s) of invasive carcinoma:\n- " + box_4.join("\n- ").replace(/Position/, 'Position: ' + box_4_2) + "\n";
        }
        if (($.inArray('Position', box_4) == -1) && ($.inArray('Other:', box_4) > -1)) {
            var box_4_3 = $("#box4_3").val();
            captext += "\nTumor Site(s) of invasive carcinoma:\n- " + box_4.join("\n- ").replace(/Other:/, box_4_3) + "\n";
        }
        if (($.inArray('Position', box_4) > -1) && ($.inArray('Other:', box_4) > -1)) {
            var box_4_2 = $("#box4_2").val();
            var box_4_3 = $("#box4_3").val();
            captext += "\nTumor Site(s) of invasive carcinoma:\n- " + box_4.join("\n- ").replace(/Position/, 'Position: ' + box_4_2).replace(/Other:/, box_4_3) + "\n";
        }
        else {
            captext += "\nTumor Site(s) of invasive carcinoma:\n- " + box_4.join("\n- ") + "\n";
        }
    }

    var box_5 = $("#box5").val();
    if (box_5 == 'Other') {
        var box_5_2 = $("#box5_2").val();
        captext += "\nHistologic Type of Invasive Carcinoma:\n- " + box_5_2 + "\n";
    }
    else {
        captext += "\nHistologic Type of Invasive Carcinoma:\n- " + box_5 + "\n";
    }

    var box_6 = $("#box6").val();
    if (box_6 == 'Largest focus of invasion >1 mm') {
        var box_6_2 = $("#box6_2").val();
        captext += "\nTumor Size (invasive carcinoma): " + box_6_2.replace(/mm/, '') + "mm\n";
    }
    else {
        captext += "\nTumor Size (invasive carcinoma):\n- " + box_6 + "\n";
    }


    var box_7 = $("#box7").val();
    var box_8 = $("#box8").val();
    var box_9 = $("#box9").val();
    var box_10 = $("#box10").val();
    var box_11 = $("#box11").val();
    captext += "\nHistologic Grade (Nottingham Histologic Score):";
    if (box_7 != 'No residual carcinoma' && box_7 != 'Only microinvasion present' && box_7 != 'Score cannot be determined') {
        var BRS_score = parseInt(box_7, 10) + parseInt(box_8, 10) + parseInt(box_9, 10);
        captext += "\nTubular Differentiation\n- " + box_7 + "\n";
        captext += "\nNuclear Pleomorphism:\n- " + box_8 + "\n";
        captext += "\nMitotic Rate:\n- " + box_9 + "\n";
        captext += "\nMitoses per 10 high-power fields:\n- " + box_10 + "\n";
        if (BRS_score <= 5) {
            captext += "\nOverall (Nottingham) Grade = 1\n";
        }
        else if (BRS_score == 6 || BRS_score == 7) {
            captext += "\nOverall (Nottingham) Grade = 2\n";
        }
        else if (BRS_score >= 8) {
            captext += "\nOverall (Nottingham) Grade = 3\n";
        }
    }
    else {
        captext += "\n- " + box_7 + "\n";
    }

    var box_12 = $("#box12").val();
    var box_12_2 = $("#box12_2").val();
    var box_12_3 = $("#box12_3").val();
    if (box_12 != 'Single focus of invasive') {
        if (box_12 == 'Multiple foci of invasive carcinoma') {
            captext += "\nTumor Focality:\n- " + box_12 + "\n  Number of foci: " + box_12_2 + ", Sizes of foci: " + box_12_3 + "\n";
        }
        else {
            captext += "\nTumor Focality:\n- " + box_12 + "\n";
        }
    }
    var box_13 = $("#box13").val();
    captext += "\nDCIS Component:\n- " + box_13.join("\n- ") + "\n";

    if ($('#box14').is(':checked')) {
        var box_14_1 = $("#box14_1").val();
        var box_14_2 = $("#box14_2").val();
        var box_14_3 = $("#box14_3").val();
        captext += "\nSize (Extent) of DCIS: " + box_14_1 + "mm\n- Blocks with DCIS: " + box_14_2 + ", total blocks examined: " + box_14_3 + "\n";
        var box_15 = $("#box15").val();
        var box_15_2 = $("#box15_2").val();
        if ($.inArray('Other:', box_15) > -1) {
            captext += "\nDCIS Architectural Patterns:\n- " + box_15.join("\n- ").replace(/Other:/, box_15_2) + "\n";
        }
        else {
            captext += "\nDCIS Architectural Patterns:\n- " + box_15.join("\n- ") + "\n";
        }
        var box_16 = $("#box16").val();
        captext += "\nDCIS Nuclear Grade\n- " + box_16 + "\n";
        var box_17 = $("#box17").val();
        captext += "\nDCIS Necrosis:\n- " + box_17 + "\n";
        var box_18 = $("#box18").val();
        captext += "\nLCIS Component:\n- " + box_18 + "\n";
    } // end optional CIS part

    var box_19 = $("#box19").val();
    captext += "\nMacroscopic and Microscopic Extent of Tumor:\n- " + box_19.join("\n- ") + "\n";

    var box_20 = $("#box20").val();
    var box_20_2 = $("#box20_2").val();
    var box_20_3 = $("#box20_3").val();
    var box_20_5 = $("#box20_5").val();
    var box_20_6 = $("#box20_6").val();
    var box_21 = $("#box21").val();
    if (box_20 != 'Margins cannot be assessed') {
        if (box_20 == 'Margins uninvolved by invasive carcinoma') {
            captext += "\nMargins uninvolved by invasive carcinoma:\n- Closest margin: " + box_20_2 + ", distance from: " + box_20_3 + "mm\n";
        }
        if (box_20 == 'Margin(s) positive for invasive carcinoma') {
            if ($.inArray('Other:', box_20_5) > -1) {
                captext += "\nMargin(s) involved by invasive carcinoma:\n- " + box_20_5.join('\n- ').replace(/Other:/, box_20_6) + "\n- Extent of involvement: " + box_21 + "\n";
            }
            else {
                captext += "\nMargin(s) involved by invasive carcinoma:\n- " + box_20_5.join('\n- ') + "\n- Extent of involvement: " + box_21 + "\n";
            }
        }
    }
    else {
        captext += "\nMargin Status, Invasive carcinoma:\n- " + box_20 + "\n";
    }

    var box_22 = $("#box22").val();
    var box_22_2 = $("#box22_2").val();
    var box_22_3 = $("#box22_3").val();
    var box_22_5 = $("#box22_5").val();
    var box_22_6 = $("#box22_6").val();
    var box_23 = $("#box23").val();
    if (box_22 != 'DCIS not present') {
        if (box_22 == 'Margins uninvolved by DCIS') {
            captext += "\nMargins uninvolved by DCIS:\n- Closest margin: " + box_22_2 + ", distance from: " + box_22_3 + "mm\n";
        }
        if (box_22 == 'Margin(s) positive for DCIS') {
            if ($.inArray('Other:', box_22_5) > -1) {
                captext += "\nMargin(s) involved by DCIS:\n- " + box_22_5.join('\n- ').replace(/Other:/, box_22_6) + "\n- Extent of involvement: " + box_23 + "\n";
            }
            else {
                captext += "\nMargin(s) involved by DCIS:\n- " + box_22_5.join('\n- ') + "\n- Extent of involvement: " + box_23 + "\n";
            }
        }
    }

    var box_24 = $("#box24").val();
    var box_25 = $("#box25").val();
    var box_26_1 = $("#box26_1").val();
    var box_26_2 = $("#box26_2").val();
    var box_26_3 = $("#box26_3").val();
    var box_26_4 = $("#box26_4").val();
    var ln_sum = parseInt(box_26_1, 10) + parseInt(box_26_2, 10) + parseInt(box_26_3, 10) + parseInt(box_26_4, 10);
    var box_26_5 = $("#box26_5").val();
    if ($('.lnchk').is(':checked')) {
        captext += "\nLymph Nodes:\n- Number of Sentinel Nodes Examined: " + box_24;
        captext += "\n- Total Examined: " + box_25;
        if ((parseInt(box_25, 10) < parseInt(box_24, 10)) || (parseInt(box_25, 10) < ln_sum)) {
            alert('Lymph nodes do not add up correctly, please check your entries');
            $('#box25').focus();
            return;
        }
        if (box_26_1 != '0') {
            captext += '\n- # Lymph nodes with macrometastases: ' + box_26_1;
        }
        if (box_26_2 != '0') {
            captext += '\n- # Lymph nodes with micrometastases: ' + box_26_2;
        }
        if (box_26_3 != '0') {
            captext += '\n- # Lymph nodes with isolated tumor cells: ' + box_26_3;
        }
        if (box_26_4 != '0') {
            captext += '\n- # Lymph nodes without tumor cells: ' + box_26_4;
        }
        if (box_26_5 != 'NA') {
            captext += '\n- Size of largest metastatic deposit: ' + box_26_5 + 'mm\n';
        }

        var box_27 = $("#box27").val();
        captext += "\n\n- Extranodal Extension: " + box_27 + "\n";
        var box_28 = $("#box28").val();
        captext += "\nMethod of Evaluation of Sentinel Nodes:\n- " + box_28.join("\n- ") + "\n";
    }

    var box_29_1 = $("#box29_1").val();
    var box_29_2 = $("#box29_2").val();
    if (box_29_2 != 'No known presurgical therapy') {
        captext += "\nPre-surgical Treatment Effect:\n- (Breast): " + box_29_1 + "\n- (Lymph node): " + box_29_2 + "\n";
    }

    var box_30 = $("#box30").val();
    captext += "\nLymph-Vascular Invasion:\n- " + box_30 + "\n";

    var box_31 = $("#box31").val();
    if (box_31 != 'No skin present') {
        captext += "\nDermal Lymph-Vascular Invasion:\n- " + box_31 + "\n";
    }

    var box_32 = $("#box32").val();
    var box_33 = $("#box33").val();
    var box_34 = $("#box34").val();
    var box_35 = $("#box35").val();
    captext += "\nPathologic Staging (pTNM):\n- ";
    if (box_32 != 'N/A') {
        captext += box_32.join('');
    }
    captext += box_33 + ' ' + box_34 + ' ' + box_35 + '\n';

    var box_42 = $("#box42").val();
    captext += "\nMicrocalcifications:\n- " + box_42.join("\n- ") + "\n";


    captext += "\n\nCAP BREAST BIOMARKER REPORTING\n";
    var box_51 = $("#box51").val();
    if (box_51 == 'Yes') {
        captext += '{Cold ischemia and fixation times meet the requirements specified in the latest version of the ASCO/CAP Guidelines}\n';
    }
    else {
        captext += '{Cold ischemia and fixation times do not meet the requirements specified in the latest version of the ASCO/CAP Guidelines\n}';
    }
    var box_36 = $("#box36").val();
    var box_36_2 = $("#box36_2").val();
    var box_36_3 = $("#box36_3").val();
    var box_37 = $("#box37").val();
    var box_37_2 = $('#box37_2').val();
    var box_37_3 = $('#box37_3').val();
    var box_37_4 = $('#box37_4').val();
    var box_37_5 = $('#box37_5').val();
    var box_37_6 = $('#box37_6').val();
    if (box_36 != 'N/A') {
        if (box_36 == 'Positive') {
            captext += "\nEstrogen Receptor:\n- " + box_36 + " in " + box_36_2 + "% of tumor cells\n";
            captext += "- ER nuclear staining intensity: " + box_37 + "\n";
            if ($('#box37_2').is(':checked')) {
                captext += "- ER status quantified using automated image analysis\n";
            }
            else {
                captext += "- Quantified Image analysis not performed\n";
            }

            if (box_37_3 == 'FDA cleared') {
                captext += '- Antibody type: FDA cleared - ' + box_37_4 + '\n';
            }
            else {
                captext += '- Antibody type: ' + box_37_3 + ', clone: ' + box_37_5 + '\n';
            }
        }
        else if (box_36 == 'Other:') {
            captext += "\nEstrogen Receptor:\n- " + box_36_3 + "\n";
        }
        else {
            captext += "\nEstrogen Receptor:\n- " + box_36 + "\n";
        }

    }

    var box_38 = $("#box38").val();
    var box_38_2 = $("#box38_2").val();
    var box_38_3 = $("#box38_3").val();
    var box_39 = $("#box39").val();
    var box_39_2 = $('#box39_2').val();
    var box_39_3 = $('#box39_3').val();
    var box_39_4 = $('#box39_4').val();
    var box_39_5 = $('#box39_5').val();
    var box_39_6 = $('#box39_6').val();
    if (box_38 != 'N/A') {
        if (box_38 == 'Positive') {
            captext += "\nProgesterone Receptor:\n- " + box_38 + " in " + box_38_2 + "% of tumor cells\n";
            captext += "- PR nuclear staining intensity: " + box_39 + "\n";
            if ($('#box39_2').is(':checked')) {
                captext += "- PR status quantified using automated image analysis\n";
            }
            else {
                captext += "- Quantified Image analysis not performed\n";
            }

            if (box_39_3 == 'FDA cleared') {
                captext += '- Antibody type: FDA cleared - ' + box_39_4 + '\n';
            }
            else {
                captext += '- Antibody type: ' + box_39_3 + ', clone: ' + box_39_5 + '\n';
            }
        }
        else if (box_38 == 'Other:') {
            captext += "\nProgesterone Receptor:\n- " + box_38_3 + "\n";
        }
        else {
            captext += "\nProgesterone Receptor:\n- " + box_38 + "\n";
        }
    }

    var box_40 = $("#box40").val();
    var box_40_2 = $("#box40_2").val();
    var box_40_3 = $("#box40_3").val();
    var box_41 = $("#box41").val();
    var box_41_2 = $("#box41_2").val();
    var box_41_3 = $("#box41_3").val();
    var box_41_4 = $("#box41_4").val();
    var box_41_5 = $("#box41_5").val();
    var box_41_6 = $("#box41_6").val();
    var box_41_7 = $("#box41_6").val();
    var box_41_8 = $("#box41_6").val();

// HER2 by IHC
    if (box_40 != 'Not performed') {
        if (box_40 == 'Indeterminate:') {
            captext += "\nHER2, Immunohistochemistry Studies:\n- Indeterminate score: " + box_40_2 + "\n% of cells with uniform intense complete membrane staining: " + box_40_3.replace(/%/, '') + "%\n";
        }
        else {
            captext += "\nHER2, Immunohistochemistry Studies:\n- " + box_40 + "\n% of cells with uniform intense complete membrane staining: " + box_40_3.replace(/%/, '') + "%\n";
        }
        if ($('#box41_8').is(':checked')) {
            captext += '- HER2 scored using quantitative image analysis\n';
        }
    }

// HER2 by ISH
    if (box_41 != 'Not performed') {
        if (box_41 == 'Equivocal' || box_41 == 'Positive (amplified)') {
            captext += "\nHER2, ISH Results:\n- " + box_41 + "\n- Number of observers: " + box_41_6 + "\n- Number of invasive tumor cells counted: " + box_41_7 + "\n";
            if ($('#singlechk').is(':checked')) {
                captext += "- Average # of Her2 signals per cell: " + box_41_3 + '\n';
            }
            else if ($('#dualchk').is(':checked')) {
                captext += "- Average # of Her2 signals per cell: " + box_41_3 + '\n- Average # of CEP17 signals per cell: ' + box_41_4 + '\n- HER2/CEP17 ratio: ' + box_41_5 + '\n';
            }
            if ($('#box41_8').is(':checked')) {
                captext += '- HER2 scored using quantitative image analysis\n';
            }
        }
        else if (box_41 == 'Indeterminate:') {
            captext += "\nHER2, ISH Results:\n- " + box_41_2 + "\n";
        }
        else {
            captext += "\nHER2, ISH Results:\n- " + box_41 + "\n";
        }
    }

    var box_50 = $("#box50").val();
    if (box_50 != '') {
        captext += '\n- Ki67%: ' + box_50 + '%\n';
    }

    $('#outPut-1').val(captext);

		dataObj.singleSection = $('#outPut-1').val();
		makeCreatePdfBtn();
});

});
