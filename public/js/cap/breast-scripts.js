'use strict';

$(window).on('load', function () {
    //*************************************************************//
    //                        Autocomplete                         //
    // *************************************************************/


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
        if (sel.indexOf("Size") > -1) {

            $('#box3_2').show();
        } else {
            $('#box3_2').hide();
        }
    });

    $('#box5').on("change", function () {
        var sel = $('#box5').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box5_2').show();
        } else {
            $('#box5_2').hide();
        }
    });

    $('#box8').on("change", function () {
        var sela = $('#box8').val();
        if (sela != "Cannot be assessed") {
            $(".margins").show();
        } else {
            $(".margins").hide();
        }
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

    $("#box14").on("change", function () {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });

    $("#box13").on("change", function () {
        var sel = $("#box13").val();
        if (sel != "pMx") {
            $("#box13_2").show();
        } else {
            $("#box13_2").hide();
        }
    });

    $("#box18, #box17").on("input", function () {
        var ln_itc = parseInt($("#box17").val(), 10) + parseInt($("#box18").val(), 10);
        console.log("ln_itc:" + ln_itc);
        if (ln_itc == 0) {
            $(".itc").show();
        } else {
            $(".itc").hide();
        }

        if (ln_itc > 0) {
            $(".posnodes").show();
        } else {
            $(".posnodes").hide();
        }
    });

    $('#box30').on("change", function () {
        var sel = $('#box30').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box30_2').show();
        } else {
            $('#box30_2').hide();
        }
    });

    $('#box40').on("change", function () {
        var sel = $('#box40').val();
        if (sel.indexOf("Positive") > -1) {
            $('#box40_2').show();
            $('#box40_3').show();
        } else {
            $('#box40_2').hide();
            $('#box40_3').hide();
        }
    });

    $('#box41').on("change", function () {
        var sel = $('#box41').val();
        if (sel.indexOf("Positive") > -1) {
            $('#box41_2').show();
            $('#box41_3').show();
        } else {
            $('#box41_2').hide();
            $('#box41_3').hide();
        }
    });

    $('#box43').on("change", function () {
        var sel = $('#box43').val();
        if (sel.indexOf("indeterminate") > -1) {
            $('#box43_2').show();
        } else {
            $('#box43_2').hide();
        }
        if (sel.indexOf("Not") < 0) {
            $('#box43_1').show();
        } else {
            $('#box43_1').hide();
        }
    });

    $('#box44').on("change", function () {
        var sel = $('#box44').val();
        var fish = $('#box44').find(":selected").data("fish");
        if (sel.indexOf("indeterminate") > -1) {
            $('#box44_2').show();
        } else {
            $('#box44_2').hide();
        }
        if (fish == "performed") {
            $(".her2f").show();
        } else {
            $(".her2f").hide();
        }
    });

    $('#box45_3').on("change", function () {
        var sel = $('#box45_3').val();
        if (sel.indexOf('Dual') > -1) {
            $('#box45_3_2').show();
        } else {
            $('#box45_3_2').hide();
        }
        if (sel.indexOf('Single') > -1) {
            $('#box45_3_3').show();
        } else {
            $('#box45_3_3').hide();
        }
    });

    $('#box51').on("change", function () {
        var sel = $('#box51').val();
        if (sel.indexOf("Other") > -1) {

            $('#box51_2').show();
        } else {
            $('#box51_2').hide();
        }
    });

    $('#box52').on("change", function () {
        var sel = $('#box52').val();
        if (sel.indexOf('Food') > -1) {
            $('#box52_2').show();
        } else {
            $('#box52_2').hide();
        }
        if (sel.indexOf('Laboratory') > -1) {
            $('#box52_3').show();
        } else {
            $('#box52_3').hide();
        }
    });

    $('#box52_4').on("change", function () {
        var sel = $('#box52_4').val();
        if (sel.indexOf("Other") > -1) {

            $('#box52_4_2').show();
        } else {
            $('#box52_4_2').hide();
        }
    });

    $('#box53').on("change", function () {
        var sel = $('#box53').val();
        if (sel.indexOf('Food') > -1) {
            $('#box53_2').show();
        } else {
            $('#box53_2').hide();
        }
        if (sel.indexOf('Laboratory') > -1) {
            $('#box53_3').show();
        } else {
            $('#box53_3').hide();
        }
    });

    $('#box54_4').on("change", function () {
        var sel = $('#box54_4').val();
        if (sel.indexOf("Other") > -1) {

            $('#box54_4_2').show();
        } else {
            $('#box54_4_2').hide();
        }
    });

    $('#box54').on("change", function () {
        var sel = $('#box54').val();
        if (sel.indexOf('Food') > -1) {
            $('#box54_2').show();
        } else {
            $('#box54_2').hide();
        }
        if (sel.indexOf('Laboratory') > -1) {
            $('#box54_3').show();
        } else {
            $('#box54_3').hide();
        }
    });

    $('#box53_4').on("change", function () {
        var sel = $('#box53_4').val();
        if (sel.indexOf("Other") > -1) {

            $('#box53_4_2').show();
        } else {
            $('#box53_4_2').hide();
        }
    });

    $('#box55').on("change", function () {
        var sel = $('#box55').val();
        if (sel.indexOf("Food") > -1) {
            $('#box55_2').show();
        } else {
            $('#box55_2').hide();
        }
    });

    $('#box56').on("change", function () {
        var sel = $('#box56').val();
        if (sel.indexOf("Performed") > -1) {

            $('#box56_2').show();
        } else {
            $('#box56_2').hide();
        }
    });

    $('#box105').on("change", function () {
        var sel = $('#box105').val();
        if (sel.indexOf("Multiple") > -1) {

            $('#box105_2').show();
        } else {
            $('#box105_2').hide();
        }
    });

    $('#box106').on("change", function () {
        var sel = $('#box106').val();
        if (sel.indexOf("present") > -1) {

            $('.dcis').show();
        } else {
            $('.dcis').hide();
        }
    });

    $('#box108').on("change", function () {
        var sela = $('#box108').val();
        if (sela != "Cannot be assessed") {
            $(".margins-inv").show();
        } else {
            $(".margins-inv").hide();
        }
        if (sela.indexOf('Uninvolved') > -1) {
            $('#box108_1').show();
            $('#box108_2').show();
        } else {
            $('#box108_1').hide();
            $('#box108_2').hide();
        }
        if (sela.indexOf("Involved") > -1) {
            $('#box108_3').show();
        } else {
            $('#box108_3').hide();
        }
    });

    $('#box110').on("change", function () {
        var sel = $('#box110').val();
        if (sel.indexOf("given") > -1) {

            $('#box110_2').show();
        } else {
            $('#box110_2').hide();
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
                $(this).addClass('empty');
                $('#cap-valid').show();
            }
        });

        // ***************** END VALIDATION ********************//


        var captext = "Invasive Breast Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1.indexOf("Other") > -1) {
            captext += "\nProcedure:\n- " + box_1_2 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }

        var box_2 = $("#box2").val();
        captext += "\nSpecimen Laterality:\n- " + box_2 + "\n";

        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        if (box_3.indexOf("Size") > -1) {
            captext += "\nTumor Size: " + box_3_2 + "mm\n";
        } else {
            captext += "\nTumor Size: " + box_3 + "mm\n";
        }

        var box_100 = $("#box100").val();
        var box_100_2 = $("#box100_2").val();
        if (box_100.indexOf("Other") > -1) {
            captext += "\nHistologic Type:\n- " + box_100_2 + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_100 + "\n";
        }

        captext += "\nHistologic Grade (Nottingham Histologic Score)\n";
        var box_101 = $("#box101").val(); // T score
        var num_t = parseInt($("#box101").find(":selected").data("t"), 10);
        console.log("T:" + num_t);
        captext += "\tGlandular/Tubular Differentiation: " + box_101 + "\n";

        var box_102 = $("#box102").val();
        var num_n = parseInt($("#box102").find(":selected").data("n"), 10);
        console.log("N:" + num_n);
        captext += "\tNuclear Pleomorphism: " + box_102 + "\n";

        var box_103 = $("#box103").val();
        var num_m = parseInt($("#box103").find(":selected").data("m"), 10);
        console.log("M:" + num_m);
        captext += "\tMitotic Rate: " + box_103 + "\n";

        var box_104 = $("#box104").val();
        captext += "\tMitoses per 10 hpf: " + box_104 + "\n";

        var brs_score = num_t + num_n + num_m;
        console.log("brs score:" + brs_score);
        if (brs_score < 10) {
            if (brs_score < 6) {
                captext += "\tOverall Grade: Grade 1 (score - " + brs_score + ")\n";
            } else if (brs_score > 7) {
                captext += "\tOverall Grade: Grade 3 (score - " + brs_score + ")\n";
            } else {
                captext += "\tOverall Grade: Grade 2 (score - " + brs_score + ")\n";
            }
        } else {
            captext += "\tOverall Grade: Not applicable due to absence of macroinvasive tumor\n";
        }

        var box_105 = $("#box105").val();
        var box_105_2 = $("#box105_2").val();
        if (box_105.indexOf("Multiple") > -1) {
            captext += "\n+ Tumor Focality:\n- Multiple foci of invasive carcinoma\n- Additional Foci/Size(s): " + box_105_2 + "\n";
        } else {
            captext += "\n+ Tumor Focality:\n- " + box_105 + "\n";
        }

        var box_107 = $("#box107").val();
        if (box_107 != "Not applicable") {
            captext += "\nTumor Extension:\n- " + box_107 + "\n";
        }

        // INVASIVE MARGINS -----------------------------------------------//
        var box_108 = $("#box108").val();
        var box_108_1 = $("#box108_1").val();
        var box_108_2 = $("#box108_2").val();
        var box_108_3 = $("#box108_3").val();
        if (box_108.indexOf("Uninvolved") > -1) {
            captext += "\nMargins - Invasive carcinoma:\n- " + box_108 + "\n- Nearest margin: " + box_108_1 + "\n- Distance of invasive carcinoma to this margin: " + box_108_2.replace(/mm/, "") + "mm\n";
        } else if (box_108.indexOf("Involved") > -1) {
            captext += "\nMargins - Invasive carcinoma:\n- " + box_108 + "\n- Margin involved: " + box_108_3 + "\n";
        } else {
            captext += "\nMargins - Invasive carcinoma:\n- " + box_108 + "\n";
        }

        if (box_108 != "Cannot be assessed") {
            captext += "\nDistance of invasive carcinoma to other margins\n";
            var box_109_1 = $("#box109_1").val();
            if (box_109_1 != 0) {
                captext += "\tDistance from superior margin: " + box_109_1.replace(/mm/, '') + "mm\n";
            } else {
                captext += "\tSuperior margin: Involved\n";
            }

            var box_109_2 = $("#box109_2").val();
            if (box_109_2 != 0) {
                captext += "\tDistance from inferior margin: " + box_109_2.replace(/mm/, '') + "mm\n";
            } else {
                captext += "\tInferior margin: Involved\n";
            }

            var box_109_3 = $("#box109_3").val();
            if (box_109_3 != 0) {
                captext += "\tDistance from medial margin: " + box_109_3.replace(/mm/, '') + "mm\n";
            } else {
                captext += "\tMedial margin: Involved\n";
            }

            var box_109_4 = $("#box109_4").val();
            if (box_109_4 != 0) {
                captext += "\tDistance from lateral margin: " + box_109_4.replace(/mm/, '') + "mm\n";
            } else {
                captext += "\tLateral margin: Involved\n";
            }

            var box_109_5 = $("#box109_5").val();
            if (box_109_5 != 0) {
                captext += "\tDistance from anterior margin: " + box_109_5.replace(/mm/, '') + "mm\n";
            } else {
                captext += "\tAnterior margin: Involved\n";
            }

            var box_109_6 = $("#box109_6").val();
            if (box_109_6 != 0) {
                captext += "\tDistance from posterior margin: " + box_109_6.replace(/mm/, '') + "mm\n";
            } else {
                captext += "\tPosterior margin: Involved\n";
            }
        }

        var box_10 = $("#box10").val();
        var box_11 = $("#box11").val();
        var box_12 = $("#box12").val();
        var box_12_0 = $("#box12_0").val();
        var box_13 = $("#box13").val();
        var box_13_2 = $("#box13_2").val();
        var nmod = '';
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_12_0.indexOf("Not") < 0) {
            if (box_12_0 == "sn") {
                nmod = " (sn)";
                console.log(nmod);
            } else {
                nmod = " (fn)";
                console.log(nmod);
            }
        }
        if (box_10 != "Not applicable") {
            if (box_13 != "pMx") {
                captext += box_10.join("") + " " + box_11 + " " + box_12 + nmod + " " + box_13 + " (metastatic site(s): " + box_13_2 + ")\n";
            } else {
                captext += box_10.join("") + " " + box_11 + " " + box_12 + nmod + " " + box_13 + "\n";
            }
        } else {
            if (box_13 != "pMx") {
                captext += box_11 + " " + box_12 + nmod + " " + box_13 + " (metastatic site(s): " + box_13_2 + ")\n";
            } else {
                captext += box_11 + " " + box_12 + nmod + " " + box_13 + "\n";
            }
        }
        if ($("#box14").is(':checked')) {
            var box_15 = $("#box15").val();
            var box_16 = $("#box16").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_15 + "\n\tSentinel nodes involved: " + box_16 + "\n";

            var box_17 = $("#box17").val();
            captext += "\tNumber of Lymph Nodes with Macrometastases: " + box_17 + "\n";

            var box_18 = $("#box18").val();
            captext += "\tNumber of Lymph Nodes with Micrometastases: " + box_18 + "\n";

            var ln_itc = parseInt($("#box17").val(), 10) + parseInt($("#box18").val(), 10);
            var box_19 = $("#box19").val();
            if (ln_itc == 0) {
                captext += "\tNumber of Lymph Nodes with Isolated Tumor Cells: " + box_19 + "\n";
            }
            if (ln_itc > 0) {
                var box_20 = $("#box20").val();
                captext += "\t+ Size of Largest Metastatic Deposit: " + box_20.replace(/mm/, '') + "mm\n";

                var box_21 = $("#box21").val();
                captext += "\t+ Extranodal Extension: " + box_21 + "\n";
            }
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_110 = $("#box110").val();
        if (box_110.indexOf("given") > -1) {
            var box_111 = $("#box111").val();
            captext += "\nTreatment Effect in the Breast:\n- " + box_111 + "\n";

            var box_112 = $("#box112").val();
            captext += "\nTreatment Effect in the Lymph Nodes:\n- " + box_112 + "\n";
        } else {
            captext += "\nTreatment Effect:\n- " + box_110 + "\n";
        }

        var box_113 = $("#box113").val();
        captext += "\n+ Lymphovascular Invasion:\n- " + box_113 + "\n";

        // DCIS segment --------------------------------------------------//
        var box_106 = $("#box106").val();
        if (box_106.indexOf("present") > -1) {
            captext += "\n------------------------\n\nDuctal Carcinoma In Situ:\n- " + box_106;

            var box_4_1 = $("#box4_1").val();
            captext += "\n\t+ Number of blocks with DCIS: " + box_4_1 + "\n";

            var box_4_2 = $("#box4_2").val();
            captext += "\t+ Number of blocks examined: " + box_4_2 + "\n";

            var box_5 = $("#box5").val();
            var box_5_2 = $("#box5_2").val();
            if ($.inArray('Other', box_5) > -1) {
                captext += "\t+ Architectural Patterns: " + box_5.join(', ').replace(/Other/, box_5_2) + "\n";
            } else {
                captext += "\t+ Architectural Patterns: " + box_5.join(', ') + "\n";
            }

            var box_6 = $("#box6").val();
            captext += "\t+ Nuclear Grade: " + box_6 + "\n";

            var box_7 = $("#box7").val();
            captext += "\t+ Necrosis: " + box_7 + "\n";

            // DCIS MARGINS ---------------------------------------------------//
            var box_8 = $("#box8").val();
            var box_8_1 = $("#box8_1").val();
            var box_8_2 = $("#box8_2").val();
            var box_8_3 = $("#box8_3").val();
            if (box_8.indexOf("Uninvolved") > -1) {
                captext += "\nMargins - DCIS:\n- " + box_8 + "- Nearest margin: " + box_8_1 + "\n- Distance of DCIS to this margin: " + box_8_2.replace(/mm/, "") + "mm\n";
            } else if (box_8.indexOf("Involved") > -1) {
                captext += "\nMargins- DCIS:\n- " + box_8 + "\n- Margin involved: " + box_8_3 + "\n";
            } else {
                captext += "\nMargins- DCIS:\n- " + box_8 + "\n";
            }

            if (box_8 != "Cannot be assessed") {
                captext += "\nDistance of DICS to other margins\n";
                var box_9_1 = $("#box9_1").val();
                if (box_9_1 != 0) {
                    captext += "\tDistance from superior margin: " + box_9_1.replace(/mm/, '') + "mm\n";
                } else {
                    captext += "\tSuperior margin: Involved\n";
                }

                var box_9_2 = $("#box9_2").val();
                if (box_9_2 != 0) {
                    captext += "\tDistance from inferior margin: " + box_9_2.replace(/mm/, '') + "mm\n";
                } else {
                    captext += "\tInferior margin: Involved\n";
                }

                var box_9_3 = $("#box9_3").val();
                if (box_9_3 != 0) {
                    captext += "\tDistance from medial margin: " + box_9_3.replace(/mm/, '') + "mm\n";
                } else {
                    captext += "\tMedial margin: Involved\n";
                }

                var box_9_4 = $("#box9_4").val();
                if (box_9_4 != 0) {
                    captext += "\tDistance from lateral margin: " + box_9_4.replace(/mm/, '') + "mm\n";
                } else {
                    captext += "\tLateral margin: Involved\n";
                }

                var box_9_5 = $("#box9_5").val();
                if (box_9_5 != 0) {
                    captext += "\tDistance from anterior margin: " + box_9_5.replace(/mm/, '') + "mm\n";
                } else {
                    captext += "\tAnterior margin: Involved\n";
                }

                var box_9_6 = $("#box9_6").val();
                if (box_9_6 != 0) {
                    captext += "\tDistance from posterior margin: " + box_9_6.replace(/mm/, '') + "mm\n";
                } else {
                    captext += "\tPosterior margin: Involved\n";
                }
            }

            captext += "\n\n----------------------\n";
        } else {
            captext += "\n------------------------\n\nDuctal Carcinoma In Situ:\n- " + box_106 + "\n\n----------------------\n";;
        }

        // END DCIS segment --------------------------------------------------//


        // HORMONE BIO-MARKERS -----------------------------------------------//

        captext += "\n--- ANCILLARY HORMONE RECEPTOR STUDIES ---\n";
        var box_40 = $("#box40").val();
        var box_40_2 = $("#box40_2").val();
        var box_40_3 = $("#box40_3").val();
        if (box_40.indexOf("Positive") > -1) {
            captext += "\nEstrogen Receptor Status: Positive, " + box_40_2 + "(" + box_40_3 + ")\n";
        } else {
            captext += "\nEstrogen Receptor Status: " + box_40 + "\n";
        }

        var box_41 = $("#box41").val();
        var box_41_2 = $("#box41_2").val();
        var box_41_3 = $("#box41_3").val();
        if (box_41.indexOf("Positive") > -1) {
            captext += "\nProgesterone Receptor Status: Positive, " + box_41_2 + "(" + box_41_3 + ")\n";
        } else {
            captext += "\nProgesterone Receptor Status: " + box_41 + "\n";
        }

        var box_43 = $("#box43").val();
        var box_43_1 = $("#box43_1").val();
        var box_43_2 = $("#box43_2").val();
        if (box_43 != "Not applicable") {
            if (box_43.indexOf("indeterminate") > -1) {
                captext += "\nHER2 Immunohistochemistry:\n- " + box_43_2 + "\n";
            } else {
                captext += "\nHER2 Immunohistochemistry:\n- " + box_43 + "\n- % cells with intense membranous staining: " + box_43_1 + "%\n";
            }
        }

        var box_44 = $("#box44").val();
        var box_44_2 = $("#box44_2").val();
        var fish = $("#box44").find(":selected").data("fish");
        if (box_44 != "Not applicable") {
            if (box_44.indexOf("indeterminate") > -1) {
                captext += "\nHER2 FISH: Cannot be determined, due to: " + box_44_2;
            } else {
                if (fish == "performed") {
                    captext += "\nHER2 FISH: " + box_44;
                    var box_45_1 = $("#box45_1").val();
                    captext += "\n\tNumber of observers: " + box_45_1;

                    var box_45_2 = $("#box45_2").val();
                    captext += "\n\tNumber of invasive tumor cells counted: " + box_45_2;

                    var box_45_3 = $("#box45_3").val();
                    var box_45_4 = $("#box45_4").val();
                    var box_45_5 = $("#box45_5").val();
                    var her_sig = parseInt($("#box45_4").val(), 10) / parseInt($("#box45_5").val(), 10);
                    console.log("her sig%:" + her_sig);
                    if (box_45_3.indexOf("Dual") > -1) {
                        captext += "\n\tHER2 FISH assay type: " + box_45_3;
                        captext += "\n\tAverage number of HER2 signals per cell: " + box_45_4;
                        captext += "\n\tAverage number of CEP17 signals per cell: " + box_45_5;
                        captext += "\n\tHER2/CEP17 Ratio: " + her_sig.toFixed(2) + "\n";
                    } else if (box_45_3.indexOf("Single") > -1) {
                        captext += "\n\tHER2 FISH assay type: " + box_45_3;
                        captext += "\n\tAverage number of HER2 signals per cell: " + box_45_4 + "\n";
                    } else {
                        captext += "\n\tHER2 FISH assay type: Assay type unknown\n";
                    }
                } else {
                    captext += "\nHER2 FISH: " + box_44 + "\n";
                }
            }
        }

        var box_46 = $("#box46").val();
        captext += "\nKi-67: " + box_46 + "%\n";

        captext += "\n--- BIO-MARKER METHODOLOGY ---\n";

        var box_50 = $("#box50").val();
        captext += "\n+ Testing Performed on Block Number(s): " + box_50 + "\n";

        var box_51 = $("#box51").val();
        var box_51_2 = $("#box51_2").val();
        if (box_51.indexOf("Other") > -1) {
            captext += "\nFixative:\n- " + box_51_2 + "\n";
        } else {
            captext += "\nFixative:\n- " + box_51 + "\n";
        }

        var box_52 = $("#box52").val();
        var box_52_2 = $("#box52_2").val();
        var box_52_3 = $("#box52_3").val();
        var box_52_4 = $("#box52_4").val();
        var box_52_4_2 = $("#box52_4_2").val();
        if (box_52.indexOf("Food") > -1) {
            captext += "\nEstrogen Receptor:\n- " + box_52 + "\n- Test/Vendor: " + box_52_2 + "\n";
        } else if (box_52.indexOf("Laboratory") > -1) {
            captext += "\nEstrogen Receptor:\n- " + box_52 + "\n";

            if (box_52_4.indexOf("Other") > -1) {
                captext += "- Primary ER Antibody Clone: " + box_52_4_2 + "\n";
            } else {
                captext += "- Primary ER Antibody Clone: " + box_52_4 + "\n";
            }
        }

        var box_53 = $("#box53").val();
        var box_53_2 = $("#box53_2").val();
        var box_53_3 = $("#box53_3").val();
        var box_53_4 = $("#box53_4").val();
        var box_53_4_2 = $("#box53_4_2").val();
        if (box_53.indexOf("Food") > -1) {
            captext += "\nProgesterone Receptor:\n- " + box_53 + "\n- Test/Vendor: " + box_53_2 + "\n";
        } else if (box_53.indexOf("Laboratory") > -1) {
            captext += "\nProgesterone Receptor:\n- " + box_53 + "\n";

            if (box_53_4.indexOf("Other") > -1) {
                captext += "- Primary PR Antibody Clone: " + box_53_4_2 + "\n";
            } else {
                captext += "- Primary PR Antibody Clone: " + box_53_4 + "\n";
            }
        }

        var box_54 = $("#box54").val();
        var box_54_2 = $("#box54_2").val();
        var box_54_3 = $("#box54_3").val();
        var box_54_4 = $("#box54_4").val();
        var box_54_4_2 = $("#box54_4_2").val();
        if (box_54.indexOf("Food") > -1) {
            captext += "\nHER2 (IHC) Receptor:\n- " + box_54 + "\n- Test/Vendor: " + box_54_2 + "\n";
        } else if (box_54.indexOf("Laboratory") > -1) {
            captext += "\nHER2 (IHC) Receptor:\n- " + box_54 + "\n";

            if (box_54_4.indexOf("Other") > -1) {
                captext += "- Primary HER2 Antibody Clone: " + box_54_4_2 + "\n";
            } else {
                captext += "- Primary HER2 Antibody Clone: " + box_54_4 + "\n";
            }
        }

        var box_55 = $("#box55").val();
        var box_55_2 = $("#box55_2").val();
        if (box_55.indexOf("Not") < 0) {
            if (box_55.indexOf("FDA") > -1) {
                captext += "\nHER2 FISH:\n- FDA Approved Test\n- Test Vendor:" + box_55_2 + "\n";
            } else {
                captext += "\nHER2 FISH:\n- " + box_55 + "\n";
            }
        }

        var box_56 = $("#box56").val();
        var box_56_3 = $("#box56_3").val();
        if (box_56.indexOf("Performed") > -1) {
            captext += "\n+ Image Analysis:\n- Performed\n- Biomarkers scored by QIA: " + box_56_3.join(", ") + "\n";
        } else {
            captext += "\n+ Image Analysis:\n- " + box_56 + "\n";
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});

/**
 * Created by Chandra Krishnan on 12/31/2017.
 */