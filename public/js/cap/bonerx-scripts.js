"use strict";

$(window).on('load', function () {
    //*************************************************************//
    //                        Autocomplete                         //
    // *************************************************************/


    // WHO tumor list
    $("input#box5").autocomplete({
        source: ["Chondrosarcoma, Central, primary, and secondary", "Chondrosarcoma, Peripheral", "Chondrosarcoma, Dedifferentiated", "Chondrosarcoma, Mesenchymal", "Chondrosarcoma, Clear cell", "Osteosarcoma, Conventional", "Osteosarcoma, Chondroblastic", "Osteosarcoma, Fibroblastic", "Osteosarcoma, Osteoblastic", "Osteosarcoma, Telangiectatic", "Osteosarcoma, Small cell", "Osteosarcoma, Low grade central", "Osteosarcoma, Secondary", "Osteosarcoma, Parosteal", "Osteosarcoma, Periosteal", "Osteosarcoma, High grade surface", "Fibrosarcoma", "Malignant fibrous histiocytoma (undifferentiated pleomorphic sarcoma)", "Ewing sarcoma/PNET", "Plasma cell myeloma", "Malignant lymphoma, NOS", "Malignancy in giant cell tumor", "Chordoma", "Angiosarcoma", "Leiomyosarcoma", "Liposarcoma", "Adamantinoma", "Metastatic malignancy", "Sarcoma, NOS", "Malignant neoplasm"]
    });

    //IHCs
    $(function () {
        var availableTags = ["ACTH", "Adenovirus", "ALK-1", "A1-AT", "AFP", "Amyloid-A", "APP", "B72.3", "INI1", "BCL2", "BCL6", "BER-Ep", "Beta-catenin", "Ber-EP4", "BKVirus", "C4d", "CA125", "Calcitonin", "Calponin", "Calretinin", "CD1a", "CD2", "CD3", "CD4", "CD5", "CD7", "CD8", "CD10", "CD15", "CD20", "CD21", "CD23", "CD25", "CD30", "CD34", "CD43", "CD44", "CD45", "CD45RO", "CD56", "CD57", "CD61", "CD68", "CD71", "CD79a", "CD99", "CD117", "CD123", "CD138", "CDX2", "CEA-mono", "CEA-poly", "Chromogranin", "CMV", "ColIV", "CyclinD1", "CDK4", "CK34BE12", "CK8", "CK5/6", "CK7", "CKAE1/3", "CKCam5.2", "CK17", "CK19", "CK20", "CKMAK-6", "D2-40", "DOG-1", "Desmin", "E-cad", "EBV-LMP", "EBV-ISH", "EMA", "ER", "FactorXIIIa", "FSH", "Galectin-3", "Gastrin", "GCDFP", "GFAP", "Glucagon", "GLUT-1", "Glut-Synth", "GlycophorinA", "Glypican-3", "GH", "H.P.", "HBME-1", "HBcore", "HBsurface", "HCG", "HepPar1", "HER2/Neu(IHC)", "HSVI&II", "Actin,muscle", "HHV-8", "HMB45", "HPV-HR(ISH)", "HMB45", "HPL", "IDH-1", "IgA", "IgG", "IgM", "Inhibin", "Insulin", "JCVirus", "Kappa(IHC)", "Lambda(IHC)", "Kappa(ISH)", "Lambda(ISH)", "Ki-67(MIB1)", "LH", "Lysozyme", "Mast-celltrypt", "MelanA", "MelanomaAA", "Mammaglobin", "MAP-2", "MITF", "MLH-1", "MOC-31", "MSH-2", "MSH-6", "MUM-1", "MPO", "Myogenin", "Neu-N", "NF", "NSE", "OCT-2", "OCT3/4", "p16", "p504s", "p53", "p63", "p57", "Parainfluenza", "ParvoB19", "PAX-5", "PAX-8", "PDGF-b", "PE10", "Perforin", "pHH3", "PLAP", "PMS-2", "PR", "Prolactin", "PTH", "Prostate triple stain", "PSA", "PSAP", "RCC", "RSV", "S100", "SALL4", "SMA", "SMMHC", "Smoothelin", "Somatostatin", "SurfactantA", "SurfactantB", "Synaptophysin", "Tau", "TdT", "Thyroglobulin", "Toxoplasma", "Transthyretin", "Trypsin", "TSH", "TTF-1", "Tubulin", "Tyrosinase", "Ubiquitin", "Uroplakin", "Varicella", "Villin", "WT-1", "HR HPV in-situ", "FISH", "NGS", "Karyotype", "array CGH"];

        function split(val) {
            return val.split(/,\s*/);
        }

        function extractLast(term) {
            return split(term).pop();
        }
        $("input#box20").autocomplete({
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

    // populate pT select box
    var jsonData = {
        "appendicular": {
            "pTx": "pTX: Primary tumor cannot be assessed",
            "pT0": "pT0: No evidence of primary tumor",
            "pT1": "pT1: Tumor ≤8 cm in greatest dimension",
            "pT2": "pT2: Tumor > 8 cm in greatest dimension",
            "pT3": "pT3: Discontinuous tumors in the primary bone site"
        },
        "spine": {
            "pTx": "pTX: Primary tumor cannot be assessed",
            "pT0": "pT0: No evidence of primary tumor",
            "pT1": "pT1: Tumor confined to one vertebral segment or two adjacent vertebral segments",
            "pT2": "pT2: Tumor confined to three adjacent vertebral segments",
            "pT3": "pT3: Tumor confined to four or more adjacent vertebral segments, or any nonadjacent vertebral segments",
            "pT4a": "pT4a: Extension into the spinal canal",
            "pT4b": "pT4b: Evidence of gross vascular invasion or tumor thrombus in the great vessels"
        },
        "pelvis": {
            "pTx": "pTX: Primary tumor cannot be assessed",
            "pT0": "pT0: No evidence of primary tumor",
            "pT1a": "pT1a: Tumor ≤8 cm in greatest dimension",
            "pT1b": "pT1b: Tumor >8 cm in greatest dimension",
            "pT2a": "pT2a: Tumor ≤8 cm in greatest dimens",
            "pT2b": "pT2b: Tumor >8 cm in greatest dimension",
            "pT3a": "Tumor ≤8 cm in greatest dimensionn",
            "pT3b": "Tumor >8 cm in greatest dimens",
            "pT4a": "Tumor involves sacroiliac joint and extends medial to the sacral neurofo",
            "pT4b": "Tumor encasement of external iliac vessels or presence of gross tumor thrombus in major pelvic vessels"
        },
        "none": {
            "pTx": "pTX: Primary tumor cannot be assessed"
        }
    };

    $('#box12').find('option').remove();
    $.each(jsonData['appendicular'], function (val, text) {
        $('#box12').append($('<option></option>').val(val).html(text));
    });

    //*************************************************************//
    //                        Pop-ups                              //
    // *************************************************************/

    $('#box1, #box1_3').on("change", function () {
        var sel = $('#box1').val();
        console.log("sel: " + sel);
        if (sel.indexOf("Other") > -1) {
            $('#box1_2').show();
            $('#box1_3').show();
        } else {
            $('#box1_2').hide();
            $('#box1_3').hide();
        }
        var site = $("#box1").find(":selected").data("proc");
        console.log("site:" + site);
        if (site == 'resection') {
            $(".resection").show();
        } else {
            var box_1_3 = $("#box1_3").val();
            if (site.indexOf('other') > -1 && box_1_3 == 'resection') {
                $(".resection").show();
            } else {
                $(".resection").hide();
            }
        }
    });

    $('#box2').on("change", function () {
        var selection = $('#box2').find(":selected").data("site");
        $('#box12').find('option').remove();
        $.each(jsonData[selection], function (val, text) {
            $('#box12').append($('<option></option>').val(val).html(text));
        });
        var sel = $('#box2').val();
        if (sel.indexOf("specify") > -1) {
            $('#box2_2').show();
        } else {
            $('#box2_2').hide();
        }
    });

    $('#box7').on("change", function () {
        var sel = $('#box7').val();
        if (sel.indexOf("Present") > -1) {

            $('#box7_2').show();
        } else {
            $('#box7_2').hide();
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

    $("#box15").on("change", function () {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });

    $("#box14").on("change", function () {
        var sel = $("#box14").val();
        if (sel != "pMx") {
            $("#box14_2").show();
        } else {
            $("#box14_2").hide();
        }
    });

    $('#box24').on("change", function () {
        var sel = $('#box24').val();
        if (sel.indexOf("Present") > -1) {

            $('#box24_2').show();
        } else {
            $('#box24_2').hide();
        }
    });

    //************************************************************//
    // Script to populate the template data in the output textarea//
    // *************************************************************/
    $('.writeReport').on('click', function () {


        // ***************** INPUT VALIDATION ********************//
                    // reset validation alert, if all goes to plan, it won't show
                    $('#cap-valid').hide();
                    $('#opt-valid').hide();


                    $('select:visible').each(function () {
                        // ignore class=opt
                        if (!$(this).hasClass("opt")) {
                            // Check if at least one selection is made
                            if ($(this).val().length > 0) {
                                $(this).removeClass('empty');
                            } else {
                                $(this).addClass('empty');
                                $('#cap-valid').show();
                            }
                        }
                        if ($(this).hasClass("opt")) {
                            // Check if at least one selection is made
                            if ($.trim($(this).val()).length > 0) {
                                $(this).removeClass('empty-opt');
                            } else {
                                $(this).addClass('empty-opt');
                                $('#opt-valid').show();
                            }
                        }
                    });

                    $('input:visible').each(function () {
                        // ignore search bar in menu
                        if ($(this).prop('type') != "search"){
                            // ignore class=opt
                            if (!$(this).hasClass("opt")) {
                                // Check if at least one selection is made
                                if ($.trim($(this).val()).length > 0) {
                                    $(this).removeClass('empty');
                                } else {
                                    $(this).addClass('empty');
                                    $('#cap-valid').show();
                                }
                            }
                            if ($(this).hasClass("opt")) {
                                // Check if at least one selection is made
                                if ($.trim($(this).val()).length > 0) {
                                    $(this).removeClass('empty-opt');
                                } else {
                                    $(this).addClass('empty-opt');
                                    $('#opt-valid').show();
                                }
                            }
                        }

                    });

                    // *************************** END VALIDATION ******************************//

        var site = $("#box1").find(":selected").data("proc");

        var captext = "Bone Tumor Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        var box_1_3 = $("#box1_3").val(); // biopsy vs resection on other
        if (box_1.indexOf("Other") > -1) {
            captext += "\nProcedure:\n- " + box_1_2 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if (box_2.indexOf("specify") > -1) {
            captext += "\nTumor Site:\n- " + box_2.replace(/, specify/, ": " + box_2_2) + "\n";
        } else {
            captext += "\nTumor Site:\n- " + box_2 + "\n";
        }

        var box_3 = $("#box3").val();
        captext += "\nTumor Location and Extent:\n- " + box_3.join('\n- ') + "\n";

        // resection ------------------------------------------------------------//
        if (site.indexOf('other') > -1 && box_1_3 == 'resection' || site.indexOf('resection') > -1) {
            var box_4 = $("#box4").val();
            captext += "\nTumor Size: " + box_4.replace(/cm/, '') + "cm\n";
        }
        // end resection ------------------------------------------------------------//

        var box_5 = $("#box5").val();
        captext += "\nHistologic Type:\n- " + box_5 + "\n";

        var box_6 = $("#box6").val();
        captext += "\nMitotic Rate:\n- " + box_6 + " per 10 hpf\n";

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if (box_7.indexOf("Present") > -1) {
            captext += "\nNecrosis:\n- Present, " + box_7_2 + "5 necrosis\n";
        } else {
            captext += "\nNecrosis:\n- " + box_7 + "\n";
        }

        var box_8 = $("#box8").val();
        captext += "\nHistologic Grade:\n- " + box_8 + "\n";

        var box_9 = $("#box9").val();
        if (box_9.length > 0) {
            captext += "\n+ Lymphovascular Invasion:\n- " + box_9 + "\n";
        }

        // resection ------------------------------------------------------------//

        if (site.indexOf('other') > -1 && box_1_3 == 'resection' || site.indexOf('resection') > -1) {
            var box_10 = $("#box10").val();
            var box_10_1 = $("#box10_1").val();
            var box_10_2 = $("#box10_2").val();
            var box_10_3 = $("#box10_3").val();
            if (box_10.indexOf("Uninvolved") > -1) {
                captext += "\nMargins:\n- " + box_10 + "\n- Nearest margin: " + box_10_1 + "\n- Distance to this margin: " + box_10_2.replace(/mm/, "") + "mm\n";
            } else if (box_10.indexOf("Involved") > -1) {
                captext += "\nMargins:\n- " + box_10 + "\n- Margin involved: " + box_10_3 + "\n";
            } else {
                captext += "\nMargins:\n- " + box_10 + "\n";
            }

            var box_11 = $("#box11").val();
            var box_12 = $("#box12").val();
            var box_13 = $("#box13").val();
            var box_14 = $("#box14").val();
            var box_14_2 = $("#box14_2").val();
            captext += '\nPathologic Staging (pTNM):\n- ';
            if (box_11 != "Not applicable") {
                if (box_14 != "pMx") {
                    captext += box_11.join("") + " " + box_12 + " " + box_13 + " " + box_14 + " (metastatic site(s): " + box_14_2 + ")\n";
                } else {
                    captext += box_11.join("") + " " + box_12 + " " + box_13 + " " + box_14 + "\n";
                }
            } else {
                if (box_14 != "pMx") {
                    captext += box_12 + " " + box_13 + " " + box_14 + " (metastatic site(s): " + box_14_2 + ")\n";
                } else {
                    captext += box_12 + " " + box_13 + " " + box_14 + "\n";
                }
            }
            if ($("#box15").is(':checked')) {
                var box_16 = $("#box16").val();
                var box_17 = $("#box17").val();
                captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_16 + "\n\tLymph nodes involved: " + box_17 + "\n";
            } else {
                captext += "\nLymph nodes: None submitted\n";
            }
        }
        // end resection ------------------------------------------------------------//

       var box_23 = $("#box23").val();
        captext += "\nPreresection Treatment:\n- " + box_23.join('\n- ') + "\n";

        var box_24 = $("#box24").val();
        var box_24_2 = $("#box24_2").val();
        if (box_24.indexOf("Present") > -1) {
            captext += "\nTreatment Effect:\n- Present, " + box_24_2 + "% tumor necrosis\n";
        } else {
            captext += "\nTreatment Effect:\n- " + box_24 + "\n";
        }

        captext += "\n-- ANCILLARY STUDIES --\n";

        var box_20 = $("#box20").val();
        if (box_20.length > 0) {
            captext += "\nImmunohistochemistry:\n- " + box_20 + "\n";
        }

        var box_21 = $("#box21").val();
        if (box_21.length > 0) {
            captext += "\nCytogenetics:\n- " + box_21 + "\n";
        }

        var box_22 = $("#box22").val();
        if (box_22.length > 0) {
            captext += "\nMolecular genetics:\n- " + box_22 + "\n";
        }

        if (box_20.length == 0 && box_21.length == 0 && box_21.length == 0){
            captext+= "\nNo ancillary testing performed";
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});