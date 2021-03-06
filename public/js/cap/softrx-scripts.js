'use strict';

$(window).on('load', function () {
    //*************************************************************//
    //                        Autocomplete                         //
    // *************************************************************/
    // HISTOLOGY
    $(function () {
        var availableTags = ['Atypical lipomatous tumor/Well-differentiated liposarcoma', 'Dedifferentiated liposarcoma', 'Myxoid/round cell liposarcoma', 'Pleomorphic liposarcoma', 'Mixed-type liposarcoma', 'Liposarcoma, not otherwise specified', 'Superficial fibromatoses (palmar/plantar)', 'Desmoid-type fibromatoses', 'Lipofibromatosis', 'Giant cell fibroblastoma', 'Dermatofibrosarcoma protuberans', 'Fibrosarcomatous dermatofibrosarcoma protuberans', 'Pigmented dermatofibrosarcomatous protuberans', 'Solitary fibrous tumor, malignant', 'Inflammatory myofibroblastic tumor', 'Low-grade myofibroblastic sarcoma', 'Myxoinflammatory fibroblastic sarcoma/Atypical myxoinflammatory fibroblastic tumor', 'Infantile fibrosarcoma', 'Adult fibrosarcoma', 'Myxofibrosarcoma', 'Low grade fibromyxoid sarcoma', 'Sclerosing epithelioid fibrosarcoma', 'Plexiform fibrohistiocytic tumor', 'Giant cell tumor of soft tissues', 'Leiomyosarcoma', 'Malignant glomus tumor', 'Embryonal rhabdomyosarcoma (including botryoid, anaplastic)', 'Alveolar rhabdomyosarcoma (including solid, anaplastic)', 'Pleomorphic rhabdomyosarcoma', 'Spindle cell/sclerosing rhabdomyosarcoma', 'Kaposiform hemangioendothelioma', 'Retiform hemangioendothelioma', 'Papillary intralymphatic angioendothelioma', 'Composite hemangioendothelioma', 'Pseudomyogenic (epithelioid sarcoma-like) hemangioendothelioma', 'Kaposi sarcoma', 'Epithelioid hemangioendothelioma', 'Angiosarcoma of soft tissue', 'Malignant peripheral nerve sheath tumor', 'Epithelioid malignant peripheral nerve sheath tumor', 'Malignant Triton tumor', 'Malignant granular cell tumor', 'Ectomesenchymoma', 'Extraskeletal mesenchymal chondrosarcoma', 'Extraskeletal osteosarcoma', 'Hemosiderotic fibrolipomatous tumor', 'Atypical fibroxanthoma', 'Angiomatoid fibrous histiocytoma', 'Ossifying fibromyxoid tumor', 'Ossifying fibromyxoid tumor, malignant', 'Mixed tumour', 'Mixed tumor, NOS malignant', 'Myoepithelioma', 'Myoepithelial carcinoma', 'Phosphaturic mesenchymal tumor, benign', 'Phosphaturic mesenchymal tumor, malignant', 'Synovial sarcoma, spindle cell', 'Synovial sarcoma, biphasic', 'Synovial sarcoma, NOS', 'Epithelioid sarcoma', 'Alveolar soft part sarcoma', 'Clear cell sarcoma of soft tissue', 'Extraskeletal myxoid chondrosarcoma ', 'Extraskeletal Ewing sarcoma', 'Desmoplastic small round cell tumor', 'Extra-renal rhabdoid tumor', 'Malignant mesenchymoma', 'PEComa NOS, benign', 'PEComa NOS, malignant', 'Intimal sarcoma', 'Undifferentiated spindle cell sarcoma', 'Undifferentiated pleomorphic sarcoma ', 'Undifferentiated round cell sarcoma', 'Undifferentiated epithelioid sarcoma', 'Undifferentiated sarcoma NOS'];
        function split(val) {
            return val.split(/,\s*/);
        }

        function extractLast(term) {
            return split(term).pop();
        }

        $("input#box4").autocomplete({
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

    //IHCs
    $(function () {
        var availableTags = ["ACTH", "Adenovirus", "ALK-1", "A1-AT", "AFP", "Amyloid-A", "APP", "B72.3", "INI1", "BCL2", "BCL6", "BER-Ep", "Beta-catenin", "Ber-EP4", "BKVirus", "C4d", "CA125", "Calcitonin", "Calponin", "Calretinin", "CD1a", "CD2", "CD3", "CD4", "CD5", "CD7", "CD8", "CD10", "CD15", "CD20", "CD21", "CD23", "CD25", "CD30", "CD34", "CD43", "CD44", "CD45", "CD45RO", "CD56", "CD57", "CD61", "CD68", "CD71", "CD79a", "CD99", "CD117", "CD123", "CD138", "CDX2", "CEA-mono", "CEA-poly", "Chromogranin", "CMV", "ColIV", "CyclinD1", "CDK4", "CK34BE12", "CK8", "CK5/6", "CK7", "CKAE1/3", "CKCam5.2", "CK17", "CK19", "CK20", "CKMAK-6", "D2-40", "DOG-1", "Desmin", "E-cad", "EBV-LMP", "EBV-ISH", "EMA", "ER", "FactorXIIIa", "FSH", "Galectin-3", "Gastrin", "GCDFP", "GFAP", "Glucagon", "GLUT-1", "Glut-Synth", "GlycophorinA", "Glypican-3", "GH", "H.P.", "HBME-1", "HBcore", "HBsurface", "HCG", "HepPar1", "HER2/Neu(IHC)", "HSVI&II", "Actin,muscle", "HHV-8", "HMB45", "HPV-HR(ISH)", "HMB45", "HPL", "IDH-1", "IgA", "IgG", "IgM", "Inhibin", "Insulin", "JCVirus", "Kappa(IHC)", "Lambda(IHC)", "Kappa(ISH)", "Lambda(ISH)", "Ki-67(MIB1)", "LH", "Lysozyme", "Mast-celltrypt", "MelanA", "MelanomaAA", "Mammaglobin", "MAP-2", "MITF", "MLH-1", "MOC-31", "MSH-2", "MSH-6", "MUM-1", "MPO", "Myogenin", "Neu-N", "NF", "NSE", "OCT-2", "OCT3/4", "p16", "p504s", "p53", "p63", "p57", "Parainfluenza", "ParvoB19", "PAX-5", "PAX-8", "PDGF-b", "PE10", "Perforin", "pHH3", "PLAP", "PMS-2", "PR", "Prolactin", "PTH", "Prostate triple stain", "PSA", "PSAP", "RCC", "RSV", "S100", "SALL4", "SMA", "SMMHC", "Smoothelin", "Somatostatin", "SurfactantA", "SurfactantB", "Synaptophysin", "Tau", "TdT", "Thyroglobulin", "Toxoplasma", "Transthyretin", "Trypsin", "TSH", "TTF-1", "Tubulin", "Tyrosinase", "Ubiquitin", "Uroplakin", "Varicella", "Villin", "WT-1", "HR HPV in-situ", "FISH", "NGS", "Karyotype", "array CGH"];

        function split(val) {
            return val.split(/,\s*/);
        }

        function extractLast(term) {
            return split(term).pop();
        }
        $("input#box17").autocomplete({
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
        var sel = $('#box1').val();
        if (sel.indexOf("Other") > -1) {

            $('#box1_2').show();
        } else {
            $('#box1_2').hide();
        }
    });

    $('#box6').on("change", function () {
        var sel = $('#box6').val();
        if (sel.indexOf("Present") > -1) {

            $('#box6_2').show();
        } else {
            $('#box6_2').hide();
        }
    });

    $('#box8').on("change", function () {
        var sela = $('#box8').val();
        if (sela.indexOf('Uninvolved') > -1) {
            $('#box8_1').show();
            $('#box8_2').show();
        } else {
            $('#box8_1').hide();
            $('#box8_2').hide();
        }
        if (sela.indexOf("Involved") > -1) {
            $('#box8_3').show();
        } else {
            $('#box8_3').hide();
        }
    });

    $("#box13").on("change", function () {
        var sel = $(this).val();
        if (sel != 'pMX') {
            $('#box13_2').show();
        } else {
            $('#box13_2').hide();
        }
    });

    $("#box14").on("change", function () {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });

    // populate pT select box
    var jsonData = {
        "Head and neck": {
            "pTX": "Primary tumor cannot be assessed",
            "pT1": "Tumor ≤2 cm",
            "pT2": "Tumor >2 to ≤4 cm",
            "pT3": "Tumor >4 cm",
            "pT4": "Tumor with invasion of adjoining structures",
            "pT4a": "Tumor with orbital invasion, skull base/dural invasion, invasion of central compartment viscera, involvement of facial skeleton, or invasion of pterygoid muscles",
            "pT4b": "Tumor with brain parenchymal invasion, carotid artery encasement, prevertebral muscle invasion, or central nervous system involvement via perineural spread"
        },
        "Trunk and extremities": {
            "pTX": "Primary tumor cannot be assessed",
            "pT0": "No evidence of primary tumor",
            "pT1": "Tumor 5 cm or less in greatest dimension",
            "pT2": "Tumor more than 5 cm and less than or equal to 10 cm in greatest dimension",
            "pT3": "Tumor more than 10 cm and less than or equal to 15 cm in greatest dimension",
            "pT4": "Tumor more than 15 cm in greatest dimension"
        },
        "Abdominal visceral organs": {
            "pTX": "Primary tumor cannot be assessed",
            "pT1": "Organ confined",
            "pT2": "Tumor extension into tissue beyond organ",
            "pT2a": "Invades serosa or visceral peritoneum",
            "pT2b": "Extension beyond serosa (mesentery)",
            "pT3": "Invades another organ",
            "pT4a": "Multifocal (2 sites)",
            "pT4b": "Multifocal (3-5 sites)",
            "pT4c": "Multifocal (>5 sites)"
        },
        "Thoracic visceral organs": {
            "pTX": "Primary tumor cannot be assessed",
            "pT1": "Organ confined",
            "pT2": "Tumor extension into tissue beyond organ",
            "pT2a": "Invades serosa or visceral peritoneum",
            "pT2b": "Extension beyond serosa (mesentery)",
            "pT3": "Invades another organ",
            "pT4a": "Multifocal (2 sites)",
            "pT4b": "Multifocal (3-5 sites)",
            "pT4c": "Multifocal (>5 sites)"
        },
        "Retroperitoneum": {
            "pTX": "Primary tumor cannot be assessed",
            "pT0": "No evidence of primary tumor",
            "pT1": "Tumor 5 cm or less in greatest dimension",
            "pT2": "Tumor more than 5 cm and less than or equal to 10 cm in greatest dimension",
            "pT3": "Tumor more than 10 cm and less than or equal to 15 cm in greatest dimension",
            "pT4": "Tumor more than 15 cm in greatest dimension"
        },
        "Orbit": {
            "pTX": "Primary tumor cannot be assessed",
            "pT0": "No evidence of primary tumor",
            "pT1": "Tumor ≤2 cm in greatest dimension",
            "pT2": "Tumor >2 cm in greatest dimension without invasion of bony walls or globe",
            "pT3": "Tumor of any size with invasion of bony walls",
            "pT4": "Tumor of any size with invasion of globe or periorbital structures, including eyelid, conjunctiva, temporal fossa, nasal cavity, paranasal sinuses, and/or central nervous system"
        },
        "Not specified": {
            "pTX": "Primary tumor cannot be assessed",
            "pT0": "No evidence of primary tumor",
            "pT1": "Tumor 5 cm or less in greatest dimension",
            "pT2": "Tumor more than 5 cm and less than or equal to 10 cm in greatest dimension",
            "pT3": "Tumor more than 10 cm and less than or equal to 15 cm in greatest dimension",
            "pT4": "Tumor more than 15 cm in greatest dimension"
        }
    };

    $('#box2').on('change', function () {
        var selection = $('#box2').val();
        $('#box11').find('option').remove();
        $.each(jsonData[selection], function (val, text) {
            $('#box11').append($('<option></option>').val(val).html(text));
        });
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

        var captext = "Soft tissue (Resection) Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1.indexOf('Other') > -1) {
            captext += "\nProcedure:\n- " + box_1_2 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        captext += "\nTumor Site:\n- " + box_2 + ": " + box_2_2 + "\n";

        var box_3 = $("#box3").val();
        captext += "\nTumor Size: " + box_3.replace(/cm/, '') + "cm\n";

        var box_4 = $("#box4").val();
        captext += "\nHistologic Type:\n- " + box_4 + "\n";

        var box_5 = $("#box5").val();
        captext += "\nMitotic Rate:\n- " + box_5 + " per 10 hpf\n";

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6 == 'Present') {
            captext += "\nNecrosis:\n- Present: " + box_6_2.replace(/%/, '') + "% necrosis\n";
        } else {
            captext += "\nNecrosis:\n- " + box_6 + "\n";
        }

        var box_7 = $("#box7").val();
        captext += "\nHistologic Grade:\n- " + box_7 + "\n";

        var box_8 = $("#box8").val();
        var box_8_1 = $("#box8_1").val();
        var box_8_2 = $("#box8_2").val();
        var box_8_3 = $("#box8_3").val();
        if (box_8.indexOf("Uninvolved") > -1) {
            captext += "\nMargins:\n- " + box_8 + "\n- Closest margin(s): " + box_8_1 + "\n- Distance to closest margin: " + box_8_2.replace(/cm/, "") + "cm\n";
        } else if (box_8.indexOf("Involved") > -1) {
            captext += "\nMargins:\n- " + box_8 + "\n- Margin involved: " + box_8_3 + "\n";
        } else {
            captext += "\nMargins:\n- " + box_8 + "\n";
        }

        var box_9 = $("#box9").val();
        if (box_9.length > 0) {
            captext += "\n+ Lymphovascular Invasion:\n- " + box_9 + "\n";

        }

        var box_10 = $("#box10").val();
        var box_11 = $("#box11").val();
        var box_12 = $("#box12").val();
        var box_13 = $("#box13").val();
        var box_13_2 = $("#box13_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_10 != "Not applicable") {
            if (box_13 != "pMx") {
                captext += box_10.join("") + ' ' + box_11 + " " + box_12 + " " + box_13 + " (metastatic site(s): " + box_13_2 + ")\n";
            } else {
                captext += box_10.join("") + ' ' + box_11 + " " + box_12 + " " + box_13 + "\n";
            }
        } else {
            if (box_13 != "pMx") {
                captext += box_11 + " " + box_12 + " " + box_13 + " (metastatic site(s): " + box_13_2 + ")\n";
            } else {
                captext += box_11 + " " + box_12 + " " + box_13 + "\n";
            }
        }

        if ($("#box14").is(':checked')) {
            var box_15 = $("#box15").val();
            var box_16 = $("#box16").val();
            captext += "\nLymph nodes examined: " + box_15 + "\nLymph nodes involved: " + box_16 + "\n";
        }

        var box_17 = $("#box17").val();
        captext += "\nImmunohistochemistry:\n- " + box_17 + "\n";

        var box_18 = $("#box18").val();
        captext += "\nCytogenetics:\n- " + box_18 + "\n";

        var box_19 = $("#box19").val();
        captext += "\nMolecular Pathology:\n- " + box_19 + "\n";

        var box_20 = $("#box20").val();
        if (box_20.length > 0) {
            captext += "\n+ Preresection Treatment:\n- " + box_20 + "\n";

        }

        var box_21 = $("#box21").val();
        captext += "\nTreatment Effect:\n- " + box_21 + "\n";

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});