'use strict';

$(window).on('load', function () {
    //*************************************************************//
    //                        Autocomplete                         //
    // *************************************************************/

    //carcinomas
    $("input#box8").autocomplete({
        source: ['Adenocarcinoma, NOS', 'Adenocarcinoma, Lepidic predominant', 'Adenocarcinoma, Acinar predominant', 'Adenocarcinoma, Papillary predominant', 'Adenocarcinoma, Solid predominant', 'Adenocarcinoma, Micropapillary predominant', 'Invasive mucinous adenocarcinoma', 'Mixed invasive mucinous and nonmucinous adenocarcinoma', 'Colloid adenocarcinoma', 'Fetal adenocarcinoma', 'Enteric adenocarcinoma', 'Minimally invasive adenocarcinoma, Nonmucinous', 'Minimally invasive adenocarcinoma, Mixed nonmucinous and mucinous', 'Minimally invasive adenocarcinoma, Mucinous', 'Adenocarcinoma in situ, Nonmucinous', 'Adenocarcinoma in situ, Mixed nonmucinous and mucinous', 'Adenocarcinoma in situ, Mucinous', 'Squamous cell carcinoma', 'Keratinizing squamous cell carcinoma', 'Non-keratinizing squamous cell carcinoma', 'Basaloid squamous cell carcinoma', 'Small cell carcinoma', 'Combined small cell carcinoma ', 'Large cell neuroendocrine carcinoma', 'Typical carcinoid tumor', 'Atypical carcinoid tumor', 'Large cell carcinoma', 'Adenosquamous carcinoma', 'Pleomorphic carcinoma', 'Spindle cell carcinoma', 'Giant cell carcinoma', 'Carcinosarcoma', 'Pulmonary blastoma', 'Lymphoepithelioma-like carcinoma', 'NUT carcinoma', 'Mucoepidermoid carcinoma', 'Adenoid cystic carcinoma', 'Epithelial-myoepithelial carcinoma', 'Carcinoma, type cannot be determined', 'Non-small cell carcinoma, subtype cannot be determined', 'Other'],
        appendTo: '#Leftpanel'
    });

    //*************************************************************//
    //                        Pop-ups                              //
    // *************************************************************/

    $('#box1').on("change", function () {
        var sel = $('#box1').val();
        if (sel.indexOf('Other') > -1) {
            $('#box1_2').show();
        } else {
            $('#box1_2').hide();
        }
        if (sel.indexOf('resection') > -1) {
            $('#box1_3').show();
        } else {
            $('#box1_3').hide();
        }
    });

    $('#box3').on("change", function () {
        var sela = $('#box3').val();
        var trig1 = sela.filter(function (el) {
            return el.indexOf('Other') > -1;
        });
        var trig2 = sela.filter(function (el) {
            return el.indexOf('lobar') > -1;
        });
        if (trig1.length > 0) {
            $('#box3_2').show();
        } else {
            $('#box3_2').hide();
        }
        if (trig2.length > 0) {
            $('#box3_3').show();
        } else {
            $('#box3_3').hide();
        }
    });

    $('#box9').on("change", function () {
        var sel = $('#box9').val();
        if (sel.indexOf('Other') > -1) {
            $('#box9_2').show();
        } else {
            $('#box9_2').hide();
        }
        if (sel.indexOf('Combined') > -1) {
            $('#box9_3').show();
        } else {
            $('#box9_3').hide();
        }
        if (sel.indexOf('lepidic') > -1) {
            $(".lepidic").show();
            $(".nonlepidic").hide();
        } else {
            $(".lepidic").hide();
            $(".nonlepidic").show();
        }
    });

    $('#box9_4').on('change', function () {
        var sel = $(this).val();
        if (sel.indexOf('Yes') > -1) {
            $(".lepidic").show();
            $(".nonlepidic").hide();
        } else {
            $(".lepidic").hide();
            $(".nonlepidic").show();
        }
    });

    $('#box10').on("change", function () {
        var sel = $('#box10').val();
        if (sel.indexOf("Other") > -1) {

            $('#box10_2').show();
        } else {
            $('#box10_2').hide();
        }
    });

    $('#box14').on("change", function () {
        var sel = $('#box14').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box14_2').show();
        } else {
            $('#box14_2').hide();
        }
    });

    $('#box15').on("change", function () {
        var sela = $('#box15').val();
        if (sela.indexOf('uninvolved') > -1) {
            $('#box15_1').show();
        } else {
            $('#box15_1').hide();
        }
        if (sela.indexOf("margins involved") > -1) {
            $('#box15_3').show();
        } else {
            $('#box15_3').hide();
        }
    });

    $('#box16').on("change", function () {
        var sel = $('#box16').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box16_2').show();
        } else {
            $('#box16_2').hide();
        }
    });

    $('#box24').on("change", function () {
        var sel = $('#box24').val();
        if (sel.indexOf("carcinoma") > -1) {

            $('#box24_2').show();
        } else {
            $('#box24_2').hide();
        }
    });

    $("#box30").on("change", function () {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });

    $("#box29").on("change", function () {
        var sel = $("#box29").val();
        if (sel != "pMx" || sel != "pM1a") {
            $("#box29_2").show();
        } else {
            $("#box29_2").hide();
        }
    });

    $("#box32").on("input", function () {
        setTimeout(100);
        if ($(this).val() > 0) {
            $(".posnodes").show();
        } else {
            $(".posnodes").hide();
        }
    });

    $('#box35').on("change", function () {
        var sel = $('#box35').val();
        if (sel.indexOf('Other') > -1) {
            $('#box35_2').show();
        } else {
            $('#box35_2').hide();
        }
        if (sel.indexOf('specify') > -1) {
            $('#box35_3').show();
        } else {
            $('#box35_3').hide();
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



        var captext = "Lung Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        var box_1_3 = $("#box1_3").val();
        if (box_1.indexOf("Other") > -1) {
            captext += "\nProcedure:\n- " + box_1 + "\n- " + box_1_2 + "\n";
        } else if (box_1.indexOf("resection") > -1) {
            captext += "\nProcedure:\n- " + box_1 + ": " + box_1_3 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }

        var box_2 = $("#box2").val();
        captext += "\nSpecimen Laterality:\n- " + box_2 + "\n";

        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        var box_3_3 = $("#box3_3").val();
        var trig1_box_3 = box_3.filter(function (el) {
            return el.indexOf("Other") > -1;
        });
        var trig2_box_3 = box_3.filter(function (el) {
            return el.indexOf("lobar") > -1;
        });
        if (trig1_box_3.length > 0 && trig2_box_3.length == 0) {
            captext += "\nTumor Site:\n- " + box_3.join("\n- ").replace(/Other/, box_3_2) + "\n";
        } else if (trig1_box_3.length == 0 && trig2_box_3.length > 0) {
            captext += "\nTumor Site:\n- " + box_3.join("\n- ").replace(/lobar/, "lobar: " + box_3_3) + "\n";
        } else if (trig1_box_3.length > 0 && trig2_box_3.length > 0) {
            captext += "\nTumor Site:\n- " + box_3.join("\n- ").replace(/Other/, box_3_2).replace(/lobar/, "lobar: " + box_3_3) + "\n";
        } else {
            captext += "\nTumor Site:\n- " + box_3.join("\n- ") + "\n";
        }

        var box_9 = $("#box9").val();
        var box_9_2 = $("#box9_2").val();
        var box_9_3 = $("#box9_3").val();
        if (box_9.indexOf("Other") > -1) {
            captext += "\nHistologic Type:\n- " + box_9_2 + "\n";
        } else if (box_9.indexOf("Combined") > -1) {
            captext += "\nHistologic Type:\n- " + box_9 + ", non-small-cell component: " + box_9_3 + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_9 + "\n";
        }

        if ($('#box9_4').val() == "No") {
            var box_4 = $("#box4").val();
            captext += "\nTumor Size: " + box_4.replace(/cm/, '') + "cm\n";
        } else {
            var box_6 = $("#box6").val();
            if (box_6.indexOf("n") < 0) {
                captext += "\nTotal Tumor Size (Invasive and Lepidic Components):\n- " + box_6.replace(/cm/, '') + "cm\n";
            }

            var box_7 = $("#box7").val();
            if (box_7.indexOf("n") < 0) {
                captext += "\nInvasive Tumor Size: " + box_7.replace(/cm/, '') + "cm\n";
            }
        }
        var box_8 = $("#box8").val();
        captext += "\nTumor Focality:\n- " + box_8 + "\n";

        var box_10 = $("#box10").val();
        var box_10_2 = $("#box10_2").val();
        if (box_10.length  > 0){
            if (box_10.indexOf("Other") > -1) {
                captext += "\n+ Histologic Grade:\n- " + box_10_2 + "\n";
            } else {
                captext += "\n+ Histologic Grade:\n- " + box_10 + "\n";
            }
                }

        var box_11 = $("#box11").val();
        if (box_11.length  > 0){
            captext += "\n+ Spread Through Air Spaces:\n- " + box_11 + "\n";
                }

        var box_12 = $("#box12").val();
        captext += "\nVisceral Pleura Invasion:\n- " + box_12 + "\n";

        var box_13 = $("#box13").val();
        var list_13 = $("#box13 option:selected").text();
        if (list_13.length > 0) {
            captext += "\nLymphovascular Invasion:\n- Present: " + box_13.join(', ') + "\n";
        } else {
            captext += "\nLymphovascular Invasion:\n- " + box_13.join('\n- ') + "\n";
        }

        var box_14 = $("#box14").val();
        var box_14_2 = $("#box14_2").val();
        if ($.inArray('Other', box_14) > -1) {
            captext += "\nDirect Invasion of Adjacent Structures:\n- " + box_14.join('\n- ').replace(/Other/, box_14_2) + "\n";
        } else {
            captext += "\nDirect Invasion of Adjacent Structures:\n- " + box_14.join('\n- ') + "\n";
        }

        var box_15 = $("#box15").val();
        var box_15_1 = $("#box15_1").val();
        var box_15_3 = $("#box15_3").val();
        captext += "\nMargins:\n";
        if (box_15.indexOf("uninvolved") > -1) {
            var box_16 = $("#box16").val();
            var box_16_2 = $("#box16_2").val();
            if ($.inArray('Other', box_16) > -1) {
                captext += "\tMargins examined:  " + box_16.join(', ').replace(/Other/, box_16_2) + "\n";
            } else {
                captext += "\tMargins examined: " + box_16.join(', ') + "\n";
            }

            var box_17 = $("#box17").val();
            var box_18 = $("#box18").val();
            captext += "\tDistance of invasive carcinoma from closest margin: " + box_17.replace(/cm/, '') + "cm ("+box_18+")\n";


            var box_19 = $("#box19").val();
            var box_20 = $("#box20").val();
            if (box_19.indexOf("Not") < 0) {
                captext += "\tDistance of carcinoma in situ from closest margin: " + box_19.replace(/cm/, '') + "cm ("+box_20+")\n";
            }
        } else if (box_15.indexOf("margins involved") > -1) {
            var box_21 = $("#box21").val();
            captext += "\n\tBronchial Margin:\n\t- " + box_21.join('\n\t- ') + "\n";

            var box_22 = $("#box22").val();
            captext += "\n\tVascular Margin:\n\t- " + box_22 + "\n";

            var box_23 = $("#box23").val();
            captext += "\n\tParenchymal Margin:\n\t- " + box_23.join('\n\t- ') + "\n";

            var box_24 = $("#box24").val();
            var box_24_2 = $("#box24_2").val();
            if (box_24 != "Not applicable") {
                captext += "\t" + box_24_2 + " Margin: " + box_24 + "\n";
            }
        }

        var box_25 = $("#box25").val();
        captext += "\nTreatment Effect:\n- " + box_25 + "\n";

        var box_26 = $("#box26").val();
        var box_27 = $("#box27").val();
        var box_28 = $("#box28").val();
        var box_29 = $("#box29").val();
        var box_29_2 = $("#box29_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_26 != "Not applicable") {
            if (box_29 != "pMx") {
                captext += box_26.join("") + " " + box_27 + " " + box_28 + " " + box_29 + " (metastatic site(s): " + box_29_2 + ")\n";
            } else {
                captext += box_26.join("") + " " + box_27 + " " + box_28 + " " + box_29 + "\n";
            }
        } else {
            if (box_29 != "pMx" || box_29 != "pM1a") {
                captext += box_27 + " " + box_28 + " " + box_29 + " (metastatic site(s): " + box_29_2 + ")\n";
            } else {
                captext += box_27 + " " + box_28 + " " + box_29 + "\n";
            }
        }
        if ($("#box30").is(':checked')) {
            var box_31 = $("#box31").val();
            var box_32 = $("#box32").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_31 + "\n\tLymph nodes involved: " + box_32 + "\n";
            if (box_32 > 0) {
                var box_33 = $("#box33").val();
                captext += "\tNodal station(s) involved: " + box_33 + "\n";
                var box_34 = $("#box34").val();
                if (box_34.length  > 0){
                    captext += "\t+ Extranodal Extension: " + box_34 + "\n";
                    }
            }
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_35 = $("#box35").val();
        var box_35_2 = $("#box35_2").val();
        var box_35_3 = $("#box35_3").val();
        if (box_35.length  > 0){
            if (box_35.indexOf("Other") > -1) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_35 + "\n- " + box_35_2 + "\n";
            } else if (box_35.indexOf("specify") > -1) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_35 + "\n- " + box_35_3 + "\n";
            } else {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_35 + "\n";
            }
                }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});