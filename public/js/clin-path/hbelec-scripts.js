$(window).on('load', function(){
    // Pop-ups
    $('#txhx').on("change", function(){
        var sel = $('#txhx').val();
        if (sel.indexOf("Yes") > -1) {
            $('.tx-date').show();}
        else {
            $('.tx-date').hide();}
    });


    // decimels
    $("input[type=number]").on('blur', function(){
        this.value = parseFloat(this.value).toFixed(1);
    });



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
        }
        if (hbH.length>0){
            micro +=    'HbAH'.padEnd(20, ".") + hbH + "%\n";
        }
        if (hbD.length>0){
            micro +=    'HbD'.padEnd(20, ".") + hbD + "%\n";
        }
        if (hbE.length>0){
            micro +=    'HbE'.padEnd(20, ".") + hbE + "%\n";
        }
        if (hbX.length>0){
            micro +=    'Other Hb'.padEnd(20, ".") + hbX + "% (Capillary zone: "+hbX_zone+")\n";
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
        $('#outPut-3').val(final);

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
