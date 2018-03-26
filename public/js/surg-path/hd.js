$(window).on('load', function() {
//*************************************************************//
//                        Replace / Clone                      //
// *************************************************************/

    // form clone for multiple nodules
    var count = 2;
    $('.clone').on('click', function () {
        var num = $('.pblock').length;

        if (num < 5) {

            // create the new element via clone(), and manipulate it's ID using newNum value
            var newElem = $('.pblock:first').clone(true).find("input").val("").end();

            var header = "<h6 class='mt-3 text-info'>Frozen Section #" + count + "</h6>";

            count++;
            // insert the new element after the last "duplicatable" input field
            $('.pblock:last').after(newElem);
            $('.pblock:last').before(header);
            $('.remove').hide();
            $('.remove:last').show();
        }

    });

    $('.remove').on('click', function () {
        var num = $('.pblock').length;
        console.log(num);
        if (num >1){
            $(this).closest('.pblock').remove();
            $(".text-info:last").remove();
            $('.remove:last').show();
        } else {
            $('.remove:last').hide();

        }
    });



//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/
    $('#box1').on("change", function(){
        var sel = $('#box1').val();
        if (sel.indexOf("takedown") > -1) {
            $('#box1_2').show();
            $('#box1_3').show();
        }
        else {
            $('#box1_2').hide();
            $('#box1_3').hide();

        }
    });

    $('.fz-residue').on("change", function(){
        var sel = $(this).val();
        if (sel.indexOf("Submitted") > -1) {
            $(this).closest('.fz-residue').next('.fz-residue2').show();}
        else {
            $(this).closest('.fz-residue').next('.fz-residue2').hide();}
    });


    $("#box20").on("change", function(){
        var sel = $("#box20").val();
        if (sel.indexOf("Not") < 0){
            $(".resection-frozen").show();

            if (sel.indexOf("transition") > -1){
                $(".transition").show();
            } else {
                $(".transition").hide();
            }
        } else {
            $(".resection-frozen").hide();
        }


    });

    $("#box45").on("change", function(){
        var sel = $("#box45").val();
        if (sel.indexOf("Not") < 0){
            $(".ostomy-resection-frozen").show();

            if (sel.indexOf("transition") > -1){
                $(".ostomy-transition").show();
            } else {
                $(".ostomy-transition").hide();
            }
        } else {
            $(".ostomy-resection-frozen").hide();
        }


    });

    $('#box24').on("change", function(){
        var sel = $('#box24').val();
        if (sel.indexOf("Submitted") > -1) {

            $('#box24_2').show();}
        else {
            $('#box24_2').hide();}
    });

    $('#box48').on("change", function(){
        var sel = $('#box48').val();
        if (sel.indexOf("Submitted") > -1) {

            $('#box48_2').show();}
        else {
            $('#box48_2').hide();}
    });

    $('.fz-finaldx').on("change", function(){
        var sel = $(this).val();
        if (sel.indexOf("Other") > -1) {

            $(this).closest('.fz-finaldx').next('.fz-finaldx2').show();}
        else {
            $(this).closest('.fz-finaldx').next('.fz-finaldx2').hide();}
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
        var captext = "Hirschsprung disease resection synoptic\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1.indexOf("takedown") > -1) {
            captext += "\nProcedure:\n- "  + box_1_2+ "\n";}
        else {captext += "\nProcedure:\n- "  + box_1+ "\n";}


        // frozen sections
        // Frozen section arrays
        var fz_part =   []; // fz parts

        $(".pblock").each(function(){
            var fztext = "Part designation: " + $(this).find(".fz-part").val() +
                "\n\tLocation: "    + $(this).find(".fz-loc").val() +
                "\n\tBiopsy type: " + $(this).find(".fz-type").val() +
                "\n\tPathologist: " + $(this).find(".fz-path").val() +
                "\n\tIntra-Op Dx: " + $(this).find(".fz-iodx").val() +
                "\n\tPerm Dx: "     + $(this).find(".fz-finaldx").val() +
                "\n\tResidue: "     + $(this).find(".fz-residue").val() +
                "\n\n";
            fz_part.push(fztext);
        });
        console.log(fz_part);

        var fzlen = fz_part.length;
        var fz_out = '';
        for (var i=0; i<fzlen; i++){
            fz_out += fz_part[i];
        }

        captext += "\nFROZEN SECTION(S)\n";
        captext += fz_out;

        // resection part
        captext += "\n\nRESECTION SPECIMEN GROSS DESCRIPTION\n";
        var box_10 = $("#box10").val();
        captext += "\nResection Part designation:\n- "  + box_10 + "\n";

        var box_11 = $("#box11").val();
        captext += "\nResection fixative:\n- "  + box_11+ "\n";

        var box_12 = $("#box12").val();
        captext += "\nResection total length:\n- "  + box_12 + "cm\n";

        var box_13 = $("#box13").val();
        if (box_13.length > 0){
            captext += "\nMucosal sleeve length:\n- "  + box_13.replace(/cm/,'') + "cm\n";
        } else {
            captext += "\nMucosal sleeve length:\n- Not applicable\n";
        }


        var box_14 = $("#box14").val();
        captext += "\nMinimum external gross diameter:\n- "  + box_14.replace(/cm/,'') + "cm\n";

        var box_15 = $("#box15").val();
        captext += "\nMaximum external gross diameter:\n- "  + box_15.replace(/cm/,'') + "cm\n";

        var box_16 = $("#box16").val();
        captext += "\nDistance to visualized transition zone:\n- "  + box_16.replace(/cm/,'') + "cm\n";

        var box_20 = $("#box20").val();
        captext += "\nProximal margin circumferential frozen section:\n- "  + box_20+ "\n";

        if (box_20.indexOf("Not") < 0){

            var box_21 = $("#box21").val();
            if (box_21.length > 0){
                captext += "\nTransition zone features:\n- "  + box_21.join('\n- ') + "\n";
            }


            var box_23 = $("#box23").val();
            captext += "\nProximal margin frozen section pathologist:\n- "  + box_23 + "\n";

            var box_24 = $("#box24").val();
            var box_24_2 = $("#box24_2").val();
            if (box_24.indexOf("Submitted") > -1) {
                captext += "\nResidual proximal margin frozen residue:\n- "  + box_24_2+ "\n";}
            else {captext += "\nResidual proximal margin frozen residue:\n- "  + box_24+ "\n";}
        }


        var box_30 = $("#box30").val();
        captext += "\nLocations of intraoperative biopsy sites:\n- "  + box_30 + "\n";

        var box_31 = $("#box31").val();
        captext += "\nLength of ganglionated bowel:\n- "  + box_31 + "\n";

        var box_32 = $("#box32").val();
        captext += "\nGross appearance of mucosal surface:\n- "  + box_32+ "\n";


        // ostomy block
        if ($("#ostomy").is(":visible")){
            captext += "\nOSTOMY SPECIMEN\n";
            var box_45 = $("#box45").val();
            captext += "\nProximal ostomy margin circumferential frozen section:\n- "  + box_45+ "\n";

            if (box_45.indexOf("Not") < 0){

                var box_46 = $("#box46").val();
                if (box_46.length > 0){
                    captext += "\nOstomy Transition zone features:\n- "  + box_46.join('\n- ') + "\n";
                }


                var box_47 = $("#box47").val();
                captext += "\nProximal ostomy margin frozen section pathologist:\n- "  + box_47 + "\n";

                var box_48 = $("#box48").val();
                var box_48_2 = $("#box48_2").val();
                if (box_48.indexOf("Submitted") > -1) {
                    captext += "\nResidual ostomy proximal margin frozen residue:\n- "  + box_48_2+ "\n";}
                else {captext += "\nResidual ostomy proximal margin frozen residue:\n- "  + box_48+ "\n";}
            }
        }

        // PROXIMAL MARGIN
        captext += "\nPROXIMAL MARGIN\n";
        var box_60 = $("#box60").val();
        var box_60_2 = $("#box60_2").val();
        if (box_60.indexOf("ganglion") > -1) {
            captext += "\nGanglion cell distribution:\n- "  + box_60+"\n- "+ box_60_2+ "\n";}
        else {captext += "\nGanglion cell distribution:\n- "  + box_60+ "\n";}


        var box_61 = $("#box61").val();
        var box_61_2 = $("#box61_2").val();
        if (box_61.indexOf("measured") > -1) {
            captext += "\nSubmucosal nerve hypertrophy:\n- "+ box_61+", largest measured nerve: " + box_61_2+ "um\n";}
        else {captext += "\nSubmucosal nerve hypertrophy:\n- "  + box_61+ "\n";}


        var box_62 = $("#box62").val();
        captext += "\nNeutrophilic mucosal inflammation:\n- "  + box_62+ "\n";

        var box_63 = $("#box63").val();
        captext += "\nMucosal ulceration:\n- "  + box_63+ "\n";

        var box_64 = $("#box64").val();
        captext += "\nEosinophilic inflammation:\n- "  + box_64.join('\n- ') + "\n";

        var box_65 = $("#box65").val();
        captext += "\nOther resection finding:\n- "  + box_65 + "\n";
        
        // DISTAL MARGIN
        captext += "\nDISTAL MARGIN\n";
        var box_66 = $("#box66").val();
        var box_66_2 = $("#box66_2").val();
        if (box_66.indexOf("ganglion") > -1) {
            captext += "\nGanglion cell distribution:\n- "  + box_66+"\n- "+ box_66_2+ "\n";}
        else {captext += "\nGanglion cell distribution:\n- "  + box_66+ "\n";}


        var box_67 = $("#box67").val();
        var box_67_2 = $("#box67_2").val();
        if (box_67.indexOf("measured") > -1) {
            captext += "\nSubmucosal nerve hypertrophy:\n- "+ box_67+", largest measured nerve: " + box_67_2+ "um\n";}
        else {captext += "\nSubmucosal nerve hypertrophy:\n- "  + box_67+ "\n";}


        var box_68 = $("#box68").val();
        captext += "\nNeutrophilic mucosal inflammation:\n- "  + box_68+ "\n";

        var box_69 = $("#box69").val();
        captext += "\nMucosal ulceration:\n- "  + box_69+ "\n";

        var box_70 = $("#box70").val();
        captext += "\nEosinophilic inflammation:\n- "  + box_70.join('\n- ') + "\n";

        var box_71 = $("#box71").val();
        captext += "\nOther resection finding:\n- "  + box_71 + "\n";

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});


