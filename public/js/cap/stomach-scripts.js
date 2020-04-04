"use strict";

$(window).on('load', function () {
    //*************************************************************//
    //                        Autocomplete                         //
    // *************************************************************/

    //IHCs
    $(function () {
        var availableTags = ["ACTH", "Adenovirus", "ALK-1", "A1-AT", "AFP", "Amyloid-A", "APP", "B72.3", "INI1", "BCL2", "BCL6", "BER-Ep", "Beta-catenin", "Ber-EP4", "BKVirus", "C4d", "CA125", "Calcitonin", "Calponin", "Calretinin", "CD1a", "CD2", "CD3", "CD4", "CD5", "CD7", "CD8", "CD10", "CD15", "CD20", "CD21", "CD23", "CD25", "CD30", "CD34", "CD43", "CD44", "CD45", "CD45RO", "CD56", "CD57", "CD61", "CD68", "CD71", "CD79a", "CD99", "CD117", "CD123", "CD138", "CDX2", "CEA-mono", "CEA-poly", "Chromogranin", "CMV", "ColIV", "CyclinD1", "CDK4", "CK34BE12", "CK8", "CK5/6", "CK7", "CKAE1/3", "CKCam5.2", "CK17", "CK19", "CK20", "CKMAK-6", "D2-40", "DOG-1", "Desmin", "E-cad", "EBV-LMP", "EBV-ISH", "EMA", "ER", "FactorXIIIa", "FSH", "Galectin-3", "Gastrin", "GCDFP", "GFAP", "Glucagon", "GLUT-1", "Glut-Synth", "GlycophorinA", "Glypican-3", "GH", "H.P.", "HBME-1", "HBcore", "HBsurface", "HCG", "HepPar1", "HER2/Neu(IHC)", "HSVI&II", "Actin,muscle", "HHV-8", "HMB45", "HPV-HR(ISH)", "HMB45", "HPL", "IDH-1", "IgA", "IgG", "IgM", "Inhibin", "Insulin", "JCVirus", "Kappa(IHC)", "Lambda(IHC)", "Kappa(ISH)", "Lambda(ISH)", "Ki-67(MIB1)", "LH", "Lysozyme", "Mast-celltrypt", "MelanA", "MelanomaAA", "Mammaglobin", "MAP-2", "MITF", "MLH-1", "MOC-31", "MSH-2", "MSH-6", "MUM-1", "MPO", "Myogenin", "Neu-N", "NF", "NSE", "OCT-2", "OCT3/4", "p16", "p504s", "p53", "p63", "Parainfluenza", "ParvoB19", "PAX-5", "PAX-8", "PDGF-b", "PE10", "Perforin", "pHH3", "PLAP", "PMS-2", "PR", "Prolactin", "PTH", "Prostate triple stain", "PSA", "PSAP", "RCC", "RSV", "S100", "SALL4", "SMA", "SMMHC", "Smoothelin", "Somatostatin", "SurfactantA", "SurfactantB", "Synaptophysin", "Tau", "TdT", "Thyroglobulin", "Toxoplasma", "Transthyretin", "Trypsin", "TSH", "TTF-1", "Tubulin", "Tyrosinase", "Ubiquitin", "Uroplakin", "Varicella", "Villin", "WT-1"];

        function split(val) {
            return val.split(/,\s*/);
        }

        function extractLast(term) {
            return split(term).pop();
        }
        $("input#box27").autocomplete({
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
        var site = $('#box1').find(":selected").data("proc");
        if (sel.indexOf("Other") > -1) {
            $('#box1_2').show();
        } else {
            $('#box1_2').hide();
            $(".gastrectomy").hide();
            $(".emr").hide();
            if (site == "resection") {
                // resection
                $(".gastrectomy").show();
            } else {
                $(".gastrectomy").hide();
            }
            if (site == "emr") {
                // emr
                $(".emr").show();
            } else {
                $(".emr").hide();
            }
        }

    });

    $('#box2').on("change", function () {
        var sel = $('#box2').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box2_2').show();
        } else {
            $('#box2_2').hide();
        }
    });

    $('#box4').on("change", function () {
        var sel = $('#box4').val();
        if (sel.indexOf("Other histologic type") > -1) {

            $('#box4_2').show();
        } else {
            $('#box4_2').hide();
        }
    });

    $('#box5').on("change", function () {
        var sel = $('#box5').val();
        if (sel.indexOf("Other") > -1) {

            $('#box5_2').show();
        } else {
            $('#box5_2').hide();
        }
    });

    $('#box6').on("change", function () {
        var sel = $('#box6').val();
        if (sel.indexOf("adjacent") > -1) {

            $('#box6_2').show();
        } else {
            $('#box6_2').hide();
        }
    });


    $('#box7').on("change", function () {
        var sel = $('#box7').val();
        if (sel.indexOf('uninvolved') > -1) {
            $('.negmargins').show();
            $('.posmargins').hide();
        } else {
            $('.negmargins').hide();
            $('.posmargins').show();
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

    $("#box15").on("change", function () {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });

    $('#box18').on("change", function () {
        var sela = $('#box18').val();
        var trig1 = sela.filter(function (el) {
            return el.indexOf('Polyps') > -1;
        });
        var trig2 = sela.filter(function (el) {
            return el.indexOf('Other') > -1;
        });
        if (trig1.length > 0) {
            $('#box18_2').show();
        } else {
            $('#box18_2').hide();
        }
        if (trig2.length > 0) {
            $('#box18_3').show();
        } else {
            $('#box18_3').hide();
        }
    });

    $('#box29').change(function () {
        var sel = $('#box29').val();
        if (sel == 'HER2 by IHC') {
            $('#her2ihc').show();
        } else {
            $('#her2ihc').hide();
        }
        if (sel == 'HER2 by FISH') {
            $('#her2fish').show();
        } else {
            $('#her2fish').hide();
        }
        if (sel == 'HER2 by genomic testing') {
            $('#her2genomic').show();
        } else {
            $('#her2genomic').hide();
        }
    });

    $('#box30b').change(function () {
        var sel = $('#box30b').val();
        if (sel == 'Other') {
            $('#box30b_2').show();
        } else {
            $('#box30b_2').hide();
        }
    });

    $("#box35").on("input", function(){
       var her = parseFloat($("#box34").val(), 10);
       var cep = parseFloat($("#box35").val(), 10);
       console.log(her,cep);
       var rat = Number(Math.round((her/cep)+'e2')+'e-2');
       console.log(rat);
       if (rat >= 2){
           $("#box31").val("Positive (amplified)");
           $("#herrat").val(rat);
       }else {
           $("#box31").val("Negative (not amplified)");
           $("#herrat").val(rat);
       }

    });

    $('#box36').change(function () {
        var sel = $('#box36').val();
        if (sel == 'FDA cleared') {
            $('#box36_1').show();
        } else {
            $('#box36_1').hide();
        }
        if (sel == 'Laboratory-developed test') {
            $('#box36_2').show();
        } else {
            $('#box36_2').hide();
        }
    });

    $('#box37').on("change", function(){
        var sel = $('#box37').val();
        if (sel.indexOf("Positive") > -1) {

            $('#box37_2').show();}
        else {
            $('#box37_2').hide();}
    });

    $("#box50").on("change", function () {
        var sel = $("#box50").val();
        if ($.inArray("Other", sel) > -1) {
            $("#box50_2").show();
        } else {
            $("#box50_2").hide();
        }
    });

    $("#box65").on("change", function () {
        var sel = $("#box65").val();
        if (sel != "pMx") {
            $("#box65_2").show();
        } else {
            $("#box65_2").hide();
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

        var captext = "Gastric Carcinoma Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1 == 'Other') {
            captext += "\nProcedure:\n- " + box_1_2 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if ($.inArray('Other', box_2) > -1) {
            captext += "\nTumor Site:\n- " + box_2.join('\n- ').replace(/Other/, box_2_2) + "\n";
        } else {
            captext += "\nTumor Site:\n- " + box_2.join('\n- ') + "\n";
        }

        var box_3 = $("#box3").val();
        captext += "\nTumor Size: " + box_3.replace(/cm/, '') + "cm\n";

        var box_4 = $("#box4").val();
        var box_4_2 = $("#box4_2").val();
        if (box_4 == 'Other histologic type') {
            captext += "\nHistologic Type:\n- " + box_4_2 + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_4 + "\n";
        }

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if (box_5 == 'Other') {
            captext += "\nHistologic Grade:\n- " + box_5_2 + "\n";
        } else {
            captext += "\nHistologic Grade:\n- " + box_5 + "\n";
        }

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6.indexOf('adjacent') > -1) {
            captext += "\nTumor Extension:\n- Tumor invades adjacent structures including: " + box_6_2 + "\n";
        } else {
            captext += "\nTumor Extension:\n- " + box_6 + "\n";
        }

        var box_7 = $("#box7").val();
        var box_50 = $("#box50").val();
        var box_50_2 = $("#box50_2").val();
        var box_50_3 = $("#box50_3").val();
        var box_60 = $("#box60").val(); // prox
        var box_61 = $("#box61").val(); // dist
        var box_62 = $("#box62").val(); // omental
        var box_63 = $("#box63").val(); // deep
        var box_64 = $("#box64").val(); // mucosal
        var box_65 = $("#box65").val(); // other
        var box_65_2 = $("#box65_2").val(); // other label
        var site = $("#box1").find(":selected").data("proc");
        captext += "\nMargins:";
        if (box_7.indexOf("uninvolved") > -1) {
                if ($.inArray('Other', box_50) > -1) {
                    captext += "\n- " + box_7 + "\n- Margins assesed: " + box_50.join(", ").replace(/Other/, box_50_2) + "\n- Distance of carcinoma to closest margin: " + box_50_3 + "mm\n";
                } else {
                    captext += "\n- " + box_7 + "\n- Margins assesed: " + box_50.join(", ") + "\n- Distance of carcinoma to closest margin: " + box_50_3 + "mm\n";
                }
            } else  {
                    if (site == "resection"){
                        captext += "\n\tProximal Margin:\n\t- " + box_60.join("\n\t- ") + "\n";

                        captext += "\n\tDistal Margin:\n\t- " + box_61.join("\n\t- ") + "\n";

                        captext += "\n\tOmental Margin:\n\t- " + box_62.join("\n\t- ") + "\n";
                    } else if (site == "emr"){
                        captext += "\n\tDeep Margin:\n\t- " + box_63 + "\n";

                        captext += "\n\tMucosal Margin:\n\t- " + box_64.join("\n\t- ") + "\n";

                    }
            }

            if (box_65 != 'Not applicable') {
                captext += "\n\t"+box_65_2+" margin:\n\t- " + box_65 + "\n";
            }

        var box_8 = $("#box8").val();
        captext += "\nTreatment Effect:\n- " + box_8 + "\n";

        var box_9 = $("#box9").val();
        captext += "\nLymphovascular Invasion:\n- " + box_9 + "\n";

        var box_10 = $("#box10").val();
        if (box_10.length > 0) {
            captext += "\n+ Perineural Invasion:\n- " + box_10 + "\n";
        }

        if ($("#box15").is(':checked')) {
            var box_16 = $("#box16").val();
            var box_17 = $("#box17").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_16 + "\n\tLymph nodes involved: " + box_17 + "\n";
        } else {
            captext += "\nLymph nodes: None submitted\n";
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


        var box_18 = $("#box18").val();
        var box_18_2 = $("#box18_2").val();
        var box_18_3 = $("#box18_3").val();
        var trig1_box_18 = box_18.filter(function (el) {
            return el.indexOf("Polyps") > -1;
        });
        var trig2_box_18 = box_18.filter(function (el) {
            return el.indexOf("Other") > -1;
        });
        if (box_18.length > 0) {
            if (trig1_box_18.length > 0 && trig2_box_18.length == 0) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_18.join("\n- ").replace(/Polyps/, box_18_2) + "\n";
            } else if (trig1_box_18.length == 0 && trig2_box_18.length > 0) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_18.join("\n- ").replace(/Other/, box_18_3) + "\n";
            } else if (trig1_box_18.length > 0 && trig2_box_18.length > 0) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_18.join("\n- ").replace(/Polyps/, box_18_2).replace(/Other/, box_18_3) + "\n";
            } else {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_18.join("\n- ") + "\n";
            }

        }

        var box_27 = $("#box27").val();
        if (box_27.length  > 0) {
            captext += "\n+ Ancillary Studies:\n- Immunohistochemistry: " + box_27 + "\n";
        } else {
            captext += "\n+ Ancillary Studies:\n- None performed\n";
        }

        var box_29 = $("#box29").val();
        if (box_29 == "Not performed") {
            captext += "\nHER2 Testing:\n- " + box_29 + "\n";
        }

        if (box_29 == 'HER2 by IHC') {
            var box_30 = $("#box30").val();
            captext += "\n+ HER2 by immunohistochemistry:\n- " + box_30 + "\n";

            var box_30b = $("#box30b").val();
            var box_30b_2 = $("#box30b_2").val();
            if (box_30b == 'Other') {
                captext += "+HER2 antibody clone: " + box_30b_2 + "\n";
            } else {
                captext += "\n+HER2 antibody clone: " + box_30b + "\n";
            }
        }
        if (box_29 == 'HER2 by FISH') {
            var box_31 = $("#box31").val();
            captext += "\n+ HER2 by in-situ hybridization:\n- " + box_31 + "\n";

            var box_32 = $("#box32").val();
            captext += "\tNumber of observers: " + box_32 + "\n";

            var box_33 = $("#box33").val();
            captext += "\tNumber of invasive cancer cells counted: " + box_33 + "\n";

            var box_34 = $("#box34").val();
            captext += "\tAverage number of HER2 signals per cancer cell: " + box_34 + "\n";

            var box_35 = $("#box35").val();
            captext += "\tAverage number of CEP17 signals per cancer cell: " + box_35 + "\n";

            var box_36 = $("#box36").val();
            var box_36_1 = $("#box36_1").val();
            var box_36_2 = $("#box36_2").val();
            if (box_36 == 'FDA cleared') {
                captext += "\n+ HER2 - method used: " + box_36 + ", " + box_36_1 + "\n";
            } else if (box_36 == 'Laboratory-developed test') {
                captext += "+HER2 - method used: " + box_36 + ", " + box_36_2 + "\n";
            } else {
                captext += "+HER2 - method used: " + box_36 + "\n";
            }
        }

        if (box_29 == 'HER2 by genomic testing'){

            var box_37 = $("#box37").val();
            var box_37_2 = $("#box37_2").val();
            if (box_37.indexOf("Positive") > -1) {
                captext += "\nHER2 by genomic testing:\n- Positive: "  + box_37_2+ "\n";}
            else {captext += "\nHER2 by genomic testing:\n- "  + box_37+ "\n";}

            var box_38 = $("#box38").val();
            if (box_37.length > 0){
                captext += "\nSpecify genomic testing method:\n- "  + box_38 + "\n";
            } else {
                captext += "\nSpecify genomic testing method:\n- Unspecified\n";
            }
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});