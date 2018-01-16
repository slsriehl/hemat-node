"use strict";

$(window).on('load', function () {
    //*************************************************************//
    //                        Autocomplete                         //
    // *************************************************************/

    $("input#box4").autocomplete({
        source: ["AIDS-related diffuse large B-cell lymphoma", "Adamantinomatous craniopharyngioma", "Anaplastic (malignant) meningioma", "Anaplastic astrocytoma, IDH-mutant", "Anaplastic astrocytoma, IDH-wildtype", "Anaplastic astrocytoma, NOS", "Anaplastic ependymoma", "Anaplastic ganglioglioma", "Anaplastic large cell lymphoma, ALK-negative", "Anaplastic large cell lymphoma, ALK-positive", "Anaplastic oligoastrocytoma, NOS", "Anaplastic oligodendroglioma, IDH-mutant and 1p/19q-codeleted", "Anaplastic oligodendroglioma, NOS", "Anaplastic pleomorphic xanthoastrocytoma", "Angiocentric glioma", "Angiolipoma", "Angiomatous meningioma", "Angiosarcoma", "Astroblastoma", "Atypical choroid plexus papilloma", "Atypical meningioma", "Atypical neurofibroma", "Atypical teratoid/rhabdoid tumour", "Benign fibrous histiocytoma", "CNS embryonal tumour with rhabdoid features", "CNS embryonal tumour, NOS", "CNS ganglioneuroblastoma", "CNS neuroblastoma", "Cellular schwannoma", "Central neurocytoma", "Cerebellar liponeurocytoma", "Chondroma", "Chondrosarcoma", "Chordoid glioma of the third ventricle", "Chordoid meningioma", "Choroid plexus carcinoma", "Choroid plexus papilloma", "Clear cell ependymoma", "Clear cell meningioma", "Craniopharyngioma", "Desmoid-type fibromatosis", "Desmoplastic infantile astrocytoma and", "Diffuse astrocytoma, IDH-mutant", "Diffuse astrocytoma, IDH-wildtype", "Diffuse astrocytoma, NOS", "Diffuse large B-cell lymphoma of the CNS", "Diffuse leptomeningeal glioneuronal tumour", "Diffuse midline glioma, H3 K27M-mutant", "Dysembryoplastic neuroepithelial tumour", "Dysplastic cerebellar gangliocytoma", "EBV-positive diffuse large B-cell lymphoma, NOS", "Embryonal tumour with multilayered rosettes, C19MC-altered", "Embryonal tumour with multilayered rosettes, NOS", "Ependymoma, NOS", "Ependymoma, RELA fusion-positive", "Epithelioid MPNST", "Epithelioid glioblastoma", "Epithelioid haemangioendothelioma", "Erdheim-Chester disease", "Ewing sarcoma / PNET", "Extraventricular neurocytoma", "Fibrosarcoma", "Fibrous meningioma", "Gangliocytoma", "Ganglioglioma", "Gemistocytic astrocytoma, IDH-mutant", "Giant cell glioblastoma", "Glioblastoma, IDH-mutant", "Glioblastoma, IDH-wildtype", "Glioblastoma, NOS", "Gliosarcoma", "Granular cell tumour of the sellar region", "Haemangioblastoma", "Haemangioma", "Hibernoma", "Histiocytic sarcoma", "Hybrid nerve sheath tumours", "Immunodeficiency-associated CNS lymphomas", "Inflammatory myofibroblastic tumour", "Juvenile xanthogranuloma", "Kaposi sarcoma", "Langerhans cell histiocytosis", "Leiomyoma", "Leiomyosarcoma", "Lipoma", "Liposarcoma", "Low-grade B-cell lymphomas of the CNS", "Lymphomatoid granulomatosis", "Lymphoplasmacyte-rich meningioma", "MALT lymphoma of the dura", "MPNST with perineurial differentiation", "Malignant peripheral nerve sheath tumour", "Medulloblastoma with extensive nodularity", "Medulloblastoma, NOS", "Medulloblastoma, SHH-activated and TP53-mutant", "Medulloblastoma, SHH-activated and TP53-wildtype", "Medulloblastoma, WNT-activated", "Medulloblastoma, classic", "Medulloblastoma, desmoplastic/nodular", "Medulloblastoma, group 3", "Medulloblastoma, group 4", "Medulloblastoma, histologically defined", "Medulloblastoma, large cell / anaplastic", "Medulloblastoma, non-WNT/non-SHH", "Medulloepithelioma", "Melanotic schwannoma", "Meningeal melanocytoma", "Meningeal melanocytosis", "Meningeal melanoma", "Meningeal melanomatosis", "Meningioma", "Meningioma, Meningothelial ", "Meningioma, Fibrous ", "Meningioma, Transitional ", "Meningioma, Psammomatous ", "Meningioma, Angiomatous ", "Meningioma, Microcystic ", "Meningioma, Secretory ", "Meningioma, Lymphoplasmacyte-rich ", "Meningioma, Metaplastic ", "Meningothelial meningioma", "Metaplastic meningioma", "Microcystic meningioma", "Myofibroblastoma", "Myxopapillary ependymoma", "Neurofibroma", "Oligoastrocytoma, NOS", "Oligodendroglioma, IDH-mutant and 1p/19q-codeleted", "Oligodendroglioma, NOS", "Osteochondroma", "Osteoma", "Osteosarcoma", "Papillary craniopharyngioma", "Papillary ependymoma", "Papillary glioneuronal tumour", "Papillary meningioma", "Papillary tumour of the pineal region", "Paraganglioma", "Pediatric low grade glioma (pLGG) not otherwise specified (NOS)", "Perineurioma", "Pilocytic astrocytoma", "Pilomyxoid astrocytoma", "Pineal parenchymal tumour of intermediate differentiation", "Pineoblastoma", "Pineocytoma", "Pituicytoma", "Pleomorphic xanthoastrocytoma", "Plexiform neurofibroma", "Plexiform schwannoma", "Psammomatous meningioma", "Rhabdoid meningioma", "Rhabdomyoma", "Rhabdomyosarcoma", "Rosai-Dorfman disease", "Rosette-forming glioneuronal tumour", "Schwannoma", "Secretory meningioma", "Solitary fibrous tumour / haemangiopericytoma, Grade 1", "Solitary fibrous tumour / haemangiopericytoma, Grade 2", "Solitary fibrous tumour / haemangiopericytoma, Grade 3", "Spindle cell oncocytoma", "Subependymal giant cell astrocytoma", "Subependymoma", "T-cell and NK{T-cell lymphomas of the CNS", "Tanycytic ependymoma", "Transitional meningioma", "Undifferentiated pleomorphic sarcoma / malignant fibrous histiocytoma", "ganglioglioma", "lntravascular large B-cell lymphoma"],
        appendTo: '#Leftpanel'
    });

    $(function () {
        var availableTags = ["GFAP", "KI67", "CD20", "CD3", "CD43", "CD5", "CD138", "Kappa", "Lambda", "EBV ISH", "Synaptophysin", "Chromogranin", "NF", "NeuN", "MAP2", "Olig2", "p53", "CD34", "Pan-Keratin", "CK7", "CK20", "CD45", "CD30", "TTF1", "S100", "Melan-A", "ACTH", "FSH", "GH", "LH", "Prolactin", "TSH", "EMA", "IDH1", "Tdt", "EBV ISH", "Inhibin", "CD56", "INI-1", "ATRX", "H3 K27M"];

        function split(val) {
            return val.split(/,\s*/);
        }

        function extractLast(term) {
            return split(term).pop();
        }

        $("input#box10").autocomplete({
            minLength: 2,
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

    $('#box3').on("change", function () {
        var sel = $('#box3').val();
        if (sel.indexOf("Other") > -1) {

            $('#box3_2').show();
        } else {
            $('#box3_2').hide();
        }
    });

    $('#box6').on("change", function () {
        var sel = $('#box6').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box6_2').show();
        } else {
            $('#box6_2').hide();
        }
    });

    $('#box7').on("change", function () {
        var sela = $('#box7').val();
        if (sela.indexOf('Margins not involved') > -1) {
            $('#box7_1').show();
            $('#box7_2').show();
        } else {
            $('#box7_1').hide();
            $('#box7_2').hide();
        }
        if (sela.indexOf("Margins involved") > -1) {
            $('#box7_3').show();
        } else {
            $('#box7_3').hide();
        }
    });

    $('#box9').on("change", function () {
        var sel = $('#box9').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box9_2').show();
        } else {
            $('#box9_2').hide();
        }
    });

    $('#box12').on("change", function () {
        var sel = $('#box12').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box12_2').show();
        } else {
            $('#box12_2').hide();
        }
    });

    $('#box13').on("change", function () {
        var sel = $('#box13').val();
        if ($.inArray('No therapy', sel) > -1) {
            $('.treated').hide();
        } else {
            $('.treated').show();
        }
    });

    $('#box14').on("change", function () {
        var sel = $('#box14').val();
        if (sel.indexOf("Present") > -1) {

            $('#box14_2').show();
        } else {
            $('#box14_2').hide();
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


        var captext = "CNS Tumor Synoptic\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if ($.inArray('Other', box_1) > -1) {
            captext += "\nTumor Site:\n- " + box_1.join('\n- ').replace(/Other/, box_1_2) + "\n";
        } else {
            captext += "\nTumor Site:\n- " + box_1.join('\n- ') + "\n";
        }

        var box_2 = $("#box2").val();
        captext += "\nLaterality:\n- " + box_2 + "\n";

        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        if (box_3.indexOf("Other") > -1) {
            captext += "\nProcedure:\n- " + box_3_2 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_3 + "\n";
        }

        var box_4 = $("#box4").val();
        captext += "\nHistologic Type:\n- " + box_4 + "\n";

        var box_5 = $("#box5").val();
        captext += "\nHistologic Grade:\n- " + box_5 + "\n";

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6.length > 0) {
            if ($.inArray('Other', box_6) > -1) {
                captext += "\n+ Specimen Handling:\n- " + box_6.join('\n- ').replace(/Other/, box_6_2) + "\n";
            } else {
                captext += "\n+ Specimen Handling:\n- " + box_6.join('\n- ') + "\n";
            }
        }

        var box_7 = $("#box7").val();
        var box_7_1 = $("#box7_1").val();
        var box_7_2 = $("#box7_2").val();
        var box_7_3 = $("#box7_3").val();
        if (box_7.length > 0) {
            if (box_7.indexOf("Not") < 0) {
                if (box_7.indexOf("Margins not involved") > -1) {
                    captext += "\n+ Margins:\n- " + box_7 + "\n- Nearest margin: " + box_7_1 + "\n- Distance to this margin: " + box_7_2.replace(/mm/, "") + "mm\n";
                } else if (box_7.indexOf("Margins involved") > -1) {
                    captext += "\n+ Margins:\n- " + box_7 + "\n- Margin involved: " + box_7_3 + "\n";
                } else {
                    captext += "\n+ Margins:\n- " + box_7 + "\n";
                }
            }
        }

        var box_13 = $("#box13").val();
        if (box_13.length > 0) {
            captext += "\n+ Preresection Treatment:\n- " + box_13.join('\n- ') + "\n";
        }

        var box_14 = $("#box14").val();
        var box_14_2 = $("#box14_2").val();
        if (box_14.length > 0) {
            if (box_14.indexOf("Present") > -1) {
                captext += "\n+ Treatment Effect:\n- Present: " + box_14_2 + "% tumor necrosis\n";
            } else {
                captext += "\n+ Treatment Effect:\n- " + box_14 + "\n";
            }
        }

        captext += "\n-ANCILLARY STUDIES-\n ";
        var box_8 = $("#box8").val();
        if (box_8.length > 1) {
            captext += "\nDesignated block for future studies:\n- " + box_8 + "\n";
        }

        var box_9 = $("#box9").val();
        var box_9_2 = $("#box9_2").val();
        if ($.inArray('Other', box_9) > -1) {
            captext += "\nSpecial Stains:\n- " + box_9.join('\n- ').replace(/Other/, box_9_2) + "\n";
        } else {
            captext += "\nSpecial Stains:\n- " + box_9.join('\n- ') + "\n";
        }

        var box_10 = $("#box10").val();
        if (box_10.length > 1) {
            captext += "\n+ Immunohistochemistry:\n- " + box_10 + "\n";
        }

        var box_11 = $("#box11").val();
        if (box_11.length > 0) {
            captext += "\n+ Electron Microscopy:\n- " + box_11 + "\n";
        }

        var box_12 = $("#box12").val();
        var box_12_2 = $("#box12_2").val();
        if (box_12.length > 0) {
            if ($.inArray('Other', box_12) > -1) {
                captext += "\n+ Molecular Genetic Studies:\n- " + box_12.join('\n- ').replace(/Other/, box_12_2) + "\n";
            } else {
                captext += "\n+ Molecular Genetic Studies:\n- " + box_12.join('\n- ') + "\n";
            }
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});