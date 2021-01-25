$(window).on('load', function(){
    var isTransfused = false;
    // Modifiers
    // Transfused?
    $('#txhx').on("change", function(){
        var sel = $('#txhx').val();
        if (sel.indexOf("Yes") > -1) {
            isTransfused = true;
            $('.tx-date').show();
            $.each(commLines, function (key, val) {
                commLines[key] = commLines[key].replace(/suggestive of previously transfused/, 'consistent with previously transfused');
            });
            $(".abnl-choice.trans").css("background-color", "#ff725e");
        }
        else {
            isTransfused = false;
            $('.tx-date').hide();
            $.each(commLines, function (key, val) {
                commLines[key] = commLines[key].replace(/consistent with previously transfused/, 'suggestive of previously transfused');
            });
            $(".abnl-choice.trans").css("background-color", "#ffffff");
        }
    });
    // Microcytic Erythrocytosis?
    $('#mcv').on("change", function(){
        var sel_mcv = $('#mcv').val();
        var sel_eryth = $('#eryth').val();
        if ((sel_mcv.indexOf("Yes") > -1) && (sel_eryth.indexOf("Yes") > -1)) {
            $(".mcv.eryth").css("background-color", "#72b7ff");
        }
        else {
            $(".mcv.eryth").css("background-color", "#ffffff");
        }
    });

    // decimels and sum total validation
    function calculateTotal() {
        var sum = 0;
        $(".pct").each(function () {
            if(!isNaN(this.value) && this.value.length!=0) {
                sum += parseFloat(this.value);
            }
            console.log("sum:", sum);
        })
        if (sum > 100){
            $(".alert").show();
        } else {
            $(".alert").hide();

        }
        console.log(sum);
    }

    $("input.pct").on('blur', function(){
        this.value = parseFloat(this.value).toFixed(1);
        calculateTotal();
    });

    //########################LOGIC HELPERS#################################

    $(".pct").on('input', function () {
        var sel = $(this).prop("class"); // get class as each input engaged
        var val = parseFloat($(this).val()); // get numeric value
        var hbclass = sel.match(/...(?= pct)/);
        console.log("pct class?", hbclass);

        // if value exists for abnormal Hbs
        if (sel.indexOf('abnl') > 0){
            // Reset option coloring to neutral
            $(".abnl").css("background-color", "#ffffff");
            $(".thal").css("background-color", "#ffffff");

            // if value is a number and > 0
            if(!isNaN(this.value) && this.value.length!=0) {
                // find the input with %age values and highlight corresponding options
                if (sel.indexOf(hbclass[0]) > 0){
                    console.log(".abnl-choice."+hbclass[0], " exists!");
                    $(".abnl-choice."+hbclass[0]).css("background-color", "#f3fd58");
                }
                // if concurrent beta-thal (A2 > 3.5%)
                // get the value of hbA2
                var hba2 = parseFloat($(".hba2").val());
                if  (hba2 > 3.4) {
                    console.log("elevated A2 and and abnormal hemoglobin here");

                    console.log("HbA2: "+hba2);
                        // find the input with %age values and highlight corresponding options
                        console.log(hbclass[0], " in abnormal amounts!");
                        $(".thal.hba2-hi").not('.noabnl').css("background-color", "#FF008C");
                    }
            } else {
                    // Reset option coloring to neutral
                    console.log("HbX absent!");
                    $(".abnl-choice").css("background-color", "#ffffff");
                }
            }
        // if value exists for abnormal amounts of HbA2 && no abnormal hemoglobines
        else if (sel.indexOf('quant-A2') > 0) {
            // active only if no concurrent abnormal hemoglobins are present
            var abnormal_hb = $(".abnl").val();
            console.log("abnl values array: ", abnormal_hb.length);
            if (abnormal_hb.length == 0){
                console.log("only elevated A2; no abnormal hemoglobins here");
                $(".thal").css("background-color", "#ffffff");
                var hba2 = parseFloat($(".hba2").val());
                // if value is a number and > 0
                if(hba2 > 3.4) {
                    console.log("HbA2: "+hba2);
                    // find the input with %age values and highlight corresponding options
                    console.log(hbclass[0], " in abnormal amounts!");
                    $(".thal.hba2-hi").not('.abnl-choice').css("background-color", "#FF008C");
                } else if(hba2 < 2.0) {
                    // find the input with %age values and highlight corresponding options
                    console.log(hbclass[0], " in abnormal amounts!");
                    $(".thal.hba2-low").not('.abnl-choice').css("background-color", "#FF008C");
                } else {
                    // Reset option coloring to neutral
                    $(".thal").css("background-color", "#ffffff");
                }
            }
        }
        // if value exists for abnormal amounts of HbF
        if (sel.indexOf('quant-F') > 0) {
            $(".hbf").css("background-color", "#ffffff");

            var hbF = parseFloat($(".hbf").val());
            var age = $("#age").find(":selected").data("age");
            // if value is > 2.0 in non-newborn
            if(hbF > 2 && age !=2) {
                console.log("HbF: "+hbF);
                // find the input with %age values and highlight corresponding options
                console.log("HbF in abnormal amounts!");
                $(".hbf.adult").css("background-color", "#84fda7");
            }
            // if value is > 14.0 in newborn
            else if(hbF > 14 && age ==2) {
                // find the input with %age values and highlight corresponding options
                console.log(hbclass[0], " in abnormal amounts!");
                $(".hbf.child").css("background-color", "#84fda7");
            } else {
                // Reset option coloring to neutral
                $(".hbf.adult").css("background-color", "#ffffff");
                $(".hbf.child").css("background-color", "#ffffff");
            }
        }
    })

    // Modifiers by clinical data

    //######################################################################

    // Show hbtext on hbinterp selection
    $("#hbinterp").on("change", function(){
       var sel = $(this).find(":selected").data("dx");
       console.log("HbInterp selection data val: "+ sel);

        $("#hbtext").val(commLines[sel]);
    });

    $('#writeReport').on('click', function(){
        // Raw Capillary zone electrophoresis data
        var hbA     =   $("#HbA_pct").val();
        var hbA2    =   $("#HbA2_pct").val();
        var hbF     =   $("#HbF_pct").val();
        var hbBarts =   $("#HbBarts_pct").val();
        var hbS     =   $("#HbS_pct").val();
        var hbC     =   $("#HbC_pct").val();
        var hbE     =   $("#HbE_pct").val();
        var hbH     =   $("#HbH_pct").val();
        var hbD     =   $("#HbD_pct").val();
        var hbX     =   $("#HbX_pct").val();
        var hbX_zone     =   $("#HbX_zone").val();

        // Clinical questions and interpretations
        var tx_hx = $("#txhx").val();
        var tx_date = $("#date-pick").val();

        var age = $("#age").val();
        var mcv = $("#mcv").val();
        var eryth = $("#eryth").val();
        var ferritin = $("#ferritin").val();

        // Hb Interpretation values
        var hbinterp = dxOuts[$("#hbinterp").find(":selected").data("dx")];
        var hbtext = $("#hbtext").val();

        var micro   =   'HEMOGLOBIN ELECTROPHORESIS\n\n';

        // Build Hb table here
        if (hbA.length > 0){
            micro +=    'HbA'.padEnd(20, ".") + hbA + "%\n";
        }
        if (hbA2.length>0){
            micro +=    'HbA2'.padEnd(20, ".") + hbA2 + "%\n";
        }
        if (hbF.length>0){
            micro +=    'HbF'.padEnd(20, ".") + hbF + "%\n";
            hbinterp = hbinterp.replace(/FF/, hbF);
        }
        if (hbS.length>0){
            micro +=    'HbS'.padEnd(20, ".") + hbS + "%\n";
            hbinterp = hbinterp.replace(/SS/, hbS);
        }
        if (hbC.length>0){
            micro +=    'HbC'.padEnd(20, ".") + hbC + "%\n";
            hbinterp = hbinterp.replace(/CC/, hbC);
        }
        if (hbBarts.length>0){
            micro +=    'HbBarts'.padEnd(20, ".") + hbBarts + "%\n";
            hbinterp = hbinterp.replace(/BB/, hbBarts);
        }
        if (hbH.length>0){
            micro +=    'HbAH'.padEnd(20, ".") + hbH + "%\n";
            hbinterp = hbinterp.replace(/HH/, hbH);
        }
        if (hbD.length>0){
            micro +=    'HbD'.padEnd(20, ".") + hbD + "%\n";
            hbinterp = hbinterp.replace(/DD/, hbD);
        }
        if (hbE.length>0){
            micro +=    'HbE'.padEnd(20, ".") + hbE + "%\n";
            hbinterp = hbinterp.replace(/EE/, hbE);
        }
        if (hbX.length>0){
            micro +=    'Other Hb'.padEnd(20, ".") + hbX + "% (Capillary zone: "+hbX_zone+")\n";
            hbinterp = hbinterp.replace(/XX/, hbX);
        }

        // Ancillary data
        if (tx_hx == 'Yes'){
            micro +=    '\nTransfusion history?'.padEnd(30, ".")+tx_hx+ " (on "+tx_date+")";
        } else {
            micro +=    '\nTransfusion history?'.padEnd(30, ".")+tx_hx;
        }
            micro +=    '\nMicrocytosis?'.padEnd(30, ".")+mcv;
            micro +=    '\nLow ferritin?'.padEnd(30, ".")+ferritin;


        // Replace abnormal hemoglobins in outputs
        var final   =   'HEMOGLOBIN ELECTROPHORESIS:';

        console.log("HbInterp text=", hbinterp);

        final  +=   '\n'+hbinterp;


        // Add to comments
        var comment =   hbtext;


        // Microscopic output
        $('#outPut-2').val(micro+"\n\n");

        // Final diagnosis
        $('#outPut-3').val(final + "\n\nCPT: 83020-26");

        // Comment
        $('#outPut-4').val(comment);;


        var textToPass = $('#outPut-2').val()+'\nFINAL DIAGNOSIS\n'+$('#outPut-3').val()+'\n\nCOMMENT\n'+$('#outPut-4').val();

        $('#outPut-combine').val(textToPass);
        $('#combined-report').modal("show");

        dataObj.singleSection = $('#outPut-2').val();
        makeCreatePdfBtn();
    });

});



/**
 * Created by Chandra Krishnan on 6/12/20.
 */
