"use strict";

$(window).on('load', function () {
    //*************************************************************//
    //                        Autocomplete                         //
    // *************************************************************/

    //IHCs
    $(function () {
        var availableTags = ["ACTH", "Adenovirus", "ALK-1", "A1-AT", "AFP", "Amyloid-A", "APP", "B72.3", "INI1", "BCL2", "BCL6", "BER-Ep", "Beta-catenin", "Ber-EP4", "BKVirus", "C4d", "CA125", "Calcitonin", "Calponin", "Calretinin", "CD1a", "CD2", "CD3", "CD4", "CD5", "CD7", "CD8", "CD10", "CD15", "CD20", "CD21", "CD23", "CD25", "CD30", "CD34", "CD43", "CD44", "CD45", "CD45RO", "CD56", "CD57", "CD61", "CD68", "CD71", "CD79a", "CD99", "CD117", "CD123", "CD138", "CDX2", "CEA-mono", "CEA-poly", "Chromogranin", "CMV", "ColIV", "CyclinD1", "CDK4", "CK34BE12", "CK8", "CK5/6", "CK7", "CKAE1/3", "CKCam5.2", "CK17", "CK19", "CK20", "CKMAK-6", "D2-40", "DOG-1", "Desmin", "E-cad", "EBV-LMP", "EBV-ISH", "EMA", "ER", "FactorXIIIa", "FSH", "Galectin-3", "Gastrin", "GCDFP", "GFAP", "Glucagon", "GLUT-1", "Glut-Synth", "GlycophorinA", "Glypican-3", "GH", "H.P.", "HBME-1", "HBcore", "HBsurface", "HCG", "HepPar1", "HER2/Neu(IHC)", "HSVI&II", "Actin,muscle", "HHV-8", "HMB45", "HPV-HR(ISH)", "HMB45", "HPL", "IDH-1", "IgA", "IgG", "IgM", "Inhibin", "Insulin", "JCVirus", "Kappa(IHC)", "Lambda(IHC)", "Kappa(ISH)", "Lambda(ISH)", "Ki-67(MIB1)", "LH", "Lysozyme", "Mast-celltrypt", "MelanA", "MelanomaAA", "Mammaglobin", "MAP-2", "MITF", "MLH-1", "MOC-31", "MSH-2", "MSH-6", "MUM-1", "MPO", "Myogenin", "Neu-N", "NF", "NSE", "OCT-2", "OCT3/4", "p16", "p504s", "p53", "p63", "Parainfluenza", "ParvoB19", "PAX-5", "PAX-8", "PDGF-b", "PE10", "Perforin", "pHH3", "PLAP", "PMS-2", "PR", "Prolactin", "PTH", "Prostate triple stain", "PSA", "PSAP", "RCC", "RSV", "S100", "SALL4", "SMA", "SMMHC", "Smoothelin", "Somatostatin", "SurfactantA", "SurfactantB", "Synaptophysin", "Tau", "TdT", "Thyroglobulin", "Toxoplasma", "Transthyretin", "Trypsin", "TSH", "TTF-1", "Tubulin", "Tyrosinase", "Ubiquitin", "Uroplakin", "Varicella", "Villin", "WT-1", "HR HPV in-situ", "FISH", "PCR"];

        function split(val) {
            return val.split(/,\s*/);
        }

        function extractLast(term) {
            return split(term).pop();
        }

        $("input#box24").autocomplete({
            minLength: 1,
            source: function source(request, response) {
                // delegate back to autocomplete, but extract the last term
                response($.ui.autocomplete.filter(availableTags, extractLast(request.term)));
            },
            focus: function focus() {
                // prevent value inserted on focus
                return false;
            },
            select: function select(event, ui) {
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


    $('#box1').on("change", function () {
        var sela = $('#box1').val();
        var trig1 = sela.filter(function (el) {
            return el.indexOf('exenteration') > -1;
        });
        var trig2 = sela.filter(function (el) {
            return el.indexOf('Other') > -1;
        });
        if (trig1.length > 0) {
            $('#box1_2').show();
        } else {
            $('#box1_2').hide();
        }
        if (trig2.length > 0) {
            $('#box1_3').show();
        } else {
            $('#box1_3').hide();
        }
    });

    $('#box3').on("change", function () {
        var sel = $('#box3').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box3_2').show();
        } else {
            $('#box3_2').hide();
        }
    });

    $('#box8').on("change", function () {
        var sel = $('#box8').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box8_2').show();
        } else {
            $('#box8_2').hide();
        }
    });

    $('#box9').on("change", function () {
        var sela = $('#box9').val();
        if (sela.indexOf('Uninvolved') > -1) {
            $('#box9_1').show();
            $('#box9_2').show();
        } else {
            $('#box9_1').hide();
            $('#box9_2').hide();
        }
        if (sela.indexOf("Involved") > -1) {
            $('#box9_3').show();
        } else {
            $('#box9_3').hide();
        }
    });

    $('#box10').on("change", function () {
        var sela = $('#box10').val();
        if (sela.indexOf('Uninvolved') > -1) {
            $('#box10_1').show();
            $('#box10_2').show();
        } else {
            $('#box10_1').hide();
            $('#box10_2').hide();
        }
        if (sela.indexOf("Involved") > -1) {
            $('#box10_3').show();
        } else {
            $('#box10_3').hide();
        }
    });

    $("#box16").on("change", function () {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });

    $('#box22').on("change", function () {
        var sel = $('#box22').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box22_2').show();
        } else {
            $('#box22_2').hide();
        }
    });

    //************************************************************//
    // Script to populate the template data in the output textarea//
    // *************************************************************/
    $('.writeReport').on('click', function () {

        // ***************** INPUT VALIDATION ********************//
        $('select[multiple]:visible').each(function () {
            // Check if at least one selection is made
            if ($(this).val().length > 0) {
                $(this).removeClass('empty');
            } else {
                $(this).addClass('empty');
                $('#cap-valid').show();
            }
        });

        $('input[type="text"]:visible').each(function () {
            // Check if at least one selection is made
            if ($.trim($(this).val()).length > 0) {
                $(this).removeClass('empty');
            } else {
                if ($(this).attr('placeholder').indexOf('applicable') < 0) {
                    $(this).addClass('empty');
                    $('#cap-valid').show();
                }
            }
        });

        // ***************** END VALIDATION ********************//


        var captext = "_____ Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        var box_1_3 = $("#box1_3").val();
        var trig1_box_1 = box_1.filter(function (el) {
            return el.indexOf("exenteration") > -1;
        });
        var trig2_box_1 = box_1.filter(function (el) {
            return el.indexOf("Other") > -1;
        });
        if (trig1_box_1.length > 0 && trig2_box_1.length == 0) {
            captext += "\nProcedure:\n- " + box_1.join("\n- ").replace(/exenteration/, box_1_2) + "\n";
        } else if (trig1_box_1.length == 0 && trig2_box_1.length > 0) {
            captext += "\nProcedure:\n- " + box_1.join("\n- ").replace(/Other/, box_1_3) + "\n";
        } else if (trig1_box_1.length > 0 && trig2_box_1.length > 0) {
            captext += "\nProcedure:\n- " + box_1.join("\n- ").replace(/exenteration/, box_1_2).replace(/Other/, box_1_3) + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1.join("\n- ") + "\n";
        }

        var box_2 = $("#box2").val();
        captext += "\nTumor Size:\n- " + box_2.replace(/cm/, '') + "cm\n";

        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        if ($.inArray('Other', box_3) > -1) {
            captext += "\nHistologic Type:\n- " + box_3.join('\n- ').replace(/Other/, box_3_2) + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_3.join('\n- ') + "\n";
        }

        var box_4 = $("#box4").val();
        captext += "\nHistologic Grade:\n- " + box_4 + "\n";

        var box_5 = $("#box5").val();
        captext += "\nDepth of stromal invasion:\n- " + box_5.replace(/mm/, '') + "mm\n";

        var box_6 = $("#box6").val();
        if (box_6.length > 0) {
            captext += "\nHorizontal extent longitudinal/length:\n- " + box_6.replace(/mm/, '') + "mm\n";
        }

        var box_7 = $("#box7").val();
        if (box_7.length > 0) {
            captext += "\nHorizontal extent circumferential/width:\n- " + box_7.replace(/mm/, '') + "mm\n";
        }

        var box_8 = $("#box8").val();
        var box_8_2 = $("#box8_2").val();
        if ($.inArray('Other', box_8) > -1) {
            captext += "\nOther Tissue/ Organ Involvement:\n- " + box_8.join('\n- ').replace(/Other/, box_8_2) + "\n";
        } else {
            captext += "\nOther Tissue/ Organ Involvement:\n- " + box_8.join('\n- ') + "\n";
        }

        var box_9 = $("#box9").val();
        var box_9_1 = $("#box9_1").val();
        var box_9_2 = $("#box9_2").val();
        var box_9_3 = $("#box9_3").val();
        if (box_9.indexOf("Uninvolved") > -1) {
            captext += "\nMargins - Ectocervical:\n- " + box_9 + "\n- Nearest margin: " + box_9_1 + "\n- Distance to this margin: " + box_9_2.replace(/mm/, "") + "mm\n";
        } else if (box_9.indexOf("Involved") > -1) {
            captext += "\nMargins - Ectocervical:\n- " + box_9 + "\n- Margin involved: " + box_9_3 + "\n";
        } else {
            captext += "\nMargins - Ectocervical:\n- " + box_9 + "\n";
        }

        var box_10 = $("#box10").val();
        var box_10_1 = $("#box10_1").val();
        var box_10_2 = $("#box10_2").val();
        var box_10_3 = $("#box10_3").val();
        if (box_10.indexOf("Uninvolved") > -1) {
            captext += "\nMargins - Radial(Circumferential):\n- " + box_10 + "\n- Nearest margin: " + box_10_1 + "\n- Distance to this margin: " + box_10_2.replace(/mm/, "") + "mm\n";
        } else if (box_10.indexOf("Involved") > -1) {
            captext += "\nMargins - Radial(Circumferential):\n- " + box_10 + "\n- Margin involved: " + box_10_3 + "\n";
        } else {
            captext += "\nMargins - Radial(Circumferential):\n- " + box_10 + "\n";
        }

        var box_11 = $("#box11").val();
        captext += "\nLymphovascular Invasion:\n- " + box_11 + "\n";

        var box_12 = $("#box12").val();
        var box_13 = $("#box13").val();
        var box_14 = $("#box14").val();
        var box_15 = $("#box15").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_12 != "Not applicable") {
            captext += box_12.join("") + ' ' + box_13 + " " + box_14 + " " + box_15 + "\n";
        } else {
            captext += box_13 + " " + box_14 + " " + box_15 + "\n";
        }

        if ($("#box16").is(':checked')) {
            var box_17 = $("#box17").val();
            var box_18 = $("#box18").val();
            var box_19 = $("#box19").val();
            captext += "\nLymph nodes:\n" + "\tTotal Number of Nodes Examined: " + box_17 + "\n" + "\tNumber of Sentinel Nodes Examined: " + box_18 + "\n";
            captext += "\tNumber of Nodes Involved: " + box_19 + "\n";

            var box_20 = $("#box20").val();
            if (box_20.length > 0) {
                captext += "\tNumber of Nodes with Isolated Tumor Cells (ITCs): " + box_20 + "\n";
            }

            var box_21 = $("#box21").val();
            if (box_21 != "Not applicable") {
                captext += "\n\tSpecify Lymph Node(s) with Tumor :\n\t- " + box_21 + "\n";
            }
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_25 = $("#box25").val();
        var box_25_2 = $("#box25_2").val();
        if ($.inArray('Other', box_25) > -1) {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_25.join('\n- ').replace(/Other/, box_25_2) + "\n";
        } else {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_25.join('\n- ') + "\n";
        }

        var box_23 = $("#box26").val();
        if (box_23 != "Not applicable") {
            captext += "\n+ p16 Immunohistochemistry:\n- " + box_23 + "\n";
        }

        var box_24 = $("#box27").val();
        if (box_24.length > 0) {
            captext += "\n+ Ancillary Studies:\n- " + box_24 + "\n";
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});