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

    $('#box43').on("change", function(){
        var sel = $('#box43').val();
        if (sel.indexOf("present") > -1) {
            $('#box43_2').show();}
        else {
            $('#box43_2').hide();}

        if (sel.indexOf("Other") > -1) {
            $('#box43_3').show();}
        else {
            $('#box43_3').hide();}
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
            captext += "\nProcedure: "  + box_1_2;}
        else {captext += "\nProcedure: "  + box_1;}


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

        captext += "\n\nFROZEN SECTION(S)\n";
        captext += fz_out;

        // resection part
        captext += "\nRESECTION SPECIMEN GROSS DESCRIPTION";
        var box_10 = $("#box10").val();
        captext += "\nResection Part designation: "  + box_10;

        var box_11 = $("#box11").val();
        captext += "\nResection fixative: "  + box_11;

        var box_12 = $("#box12").val();
        captext += "\nResection total length: "  + box_12 + "cm";

        var box_13 = $("#box13").val();
        if (box_13.length > 0){
            captext += "\nMucosal sleeve length: "  + box_13.replace(/cm/,'') + "cm";
        } else {
            captext += "\nMucosal sleeve length: Not applicable";
        }


        var box_14 = $("#box14").val();
        captext += "\nMinimum external gross diameter: "  + box_14.replace(/cm/,'') + "cm";

        var box_15 = $("#box15").val();
        captext += "\nMaximum external gross diameter: "  + box_15.replace(/cm/,'') + "cm";

        var box_16 = $("#box16").val();
        captext += "\nDistance to visualized transition zone: "  + box_16.replace(/cm/,'') + "cm";

        var box_20 = $("#box20").val();
        captext += "\nProximal margin circumferential frozen section: "  + box_20;

        if (box_20.indexOf("Not") < 0){

            var box_21 = $("#box21").val();
            if (box_21.length > 0){
                captext += "\nTransition zone features: "  + box_21.join('\t\n- ');
            }


            var box_23 = $("#box23").val();
            captext += "\nProximal margin frozen section pathologist: "  + box_23;

            var box_24 = $("#box24").val();
            var box_24_2 = $("#box24_2").val();
            if (box_24.indexOf("Submitted") > -1) {
                captext += "\nResidual proximal margin frozen residue: "  + box_24_2;}
            else {captext += "\nResidual proximal margin frozen residue: "  + box_24;}
        }


        var box_30 = $("#box30").val();
        captext += "\nLocations of intraoperative biopsy sites: "  + box_30;

        var box_31 = $("#box31").val();
        captext += "\nLength of ganglionated bowel: "  + box_31;

        var box_32 = $("#box32").val();
        captext += "\nGross appearance of mucosal surface: "  + box_32;

        // Cassette labels
        captext += "\n\nCASSETTE LABELS\n";
        var box_35 = $("#box35").val();
        captext += box_35+ ": Transverse section adjacent to proximal margin\n";

        var box_36 = $("#box36").val();
        captext += box_36+ ": Transverse section adjacent to distal margin\n";

        var box_37 = $("#box37").val();
        captext += box_37+ ": Intervening longitudinal sections (proximal to distal)\n";


        // ostomy block
        if ($("#ostomy").is(":visible")){
            captext += "\n\nOSTOMY SPECIMEN";

            var box_40 = $("#box40").val();
            captext += "\nOstomy Part designation: "  + box_40;

            var box_41 = $("#box41").val();
            captext += "\nOstomy fixative: "  + box_41;

            var box_42 = $("#box42").val();
            captext += "\nOstomy total length: "  + box_42 + "cm";

            var box_43 = $("#box43").val();
            var box_43_2 = $("#box43_2").val();
            var box_43_3 = $("#box43_3").val();
            if (box_43.indexOf("present") > -1) {
                captext += "\nOstomy external orifice appearance: "  + box_43+" ("+box_43_2+"cm segment)";}
            else if (box_43.indexOf("Other") > -1) {
                captext += "\nOstomy external orifice appearance: "  + box_43_3;}
            else {captext += "\nOstomy external orifice appearance: "  + box_43;}

            
            var box_45 = $("#box45").val();
            captext += "\nProximal ostomy margin circumferential frozen section: "  + box_45;

            if (box_45.indexOf("Not") < 0){

                var box_46 = $("#box46").val();
                if (box_46.length > 0){
                    captext += "\nOstomy Transition zone features:\n- "  + box_46.join('\t\n- ');
                }


                var box_47 = $("#box47").val();
                captext += "\nProximal ostomy margin frozen section pathologist: "  + box_47;

                var box_48 = $("#box48").val();
                var box_48_2 = $("#box48_2").val();
                if (box_48.indexOf("Submitted") > -1) {
                    captext += "\nResidual ostomy proximal margin frozen residue: "  + box_48_2;}
                else {captext += "\nResidual ostomy proximal margin frozen residue: "  + box_48;}
            }
        }

        // PROXIMAL MARGIN
        captext += "\n\nPROXIMAL MARGIN";
        var box_60 = $("#box60").val();
        var box_60_2 = $("#box60_2").val();
        if (box_60.indexOf("ganglion") > -1) {
            captext += "\nGanglion cell distribution: "  + box_60+" ("+ box_60_2+ ")";}
        else {captext += "\nGanglion cell distribution: "  + box_60;}


        var box_61 = $("#box61").val();
        var box_61_2 = $("#box61_2").val();
        if (box_61.indexOf("measured") > -1) {
            captext += "\nSubmucosal nerve hypertrophy: "+ box_61+", largest measured nerve: " + box_61_2+ "um";}
        else {captext += "\nSubmucosal nerve hypertrophy: "  + box_61;}


        var box_62 = $("#box62").val();
        captext += "\nNeutrophilic mucosal inflammation: "  + box_62;

        var box_63 = $("#box63").val();
        captext += "\nMucosal ulceration: "  + box_63;

        var box_64 = $("#box64").val();
        captext += "\nEosinophilic inflammation: "  + box_64.join(', ');

        var box_65 = $("#box65").val();
        captext += "\nOther resection finding: "  + box_65;
        
        // DISTAL MARGIN
        captext += "\n\nDISTAL MARGIN";
        var box_66 = $("#box66").val();
        var box_66_2 = $("#box66_2").val();
        if (box_66.indexOf("ganglion") > -1) {
            captext += "\nGanglion cell distribution: "  + box_66+" ("+ box_66_2+ ")";}
        else {captext += "\nGanglion cell distribution: "  + box_66;}


        var box_67 = $("#box67").val();
        var box_67_2 = $("#box67_2").val();
        if (box_67.indexOf("measured") > -1) {
            captext += "\nSubmucosal nerve hypertrophy: "+ box_67+", largest measured nerve: " + box_67_2+ "um\n";}
        else {captext += "\nSubmucosal nerve hypertrophy: "  + box_67;}


        var box_68 = $("#box68").val();
        captext += "\nNeutrophilic mucosal inflammation: "  + box_68;

        var box_69 = $("#box69").val();
        captext += "\nMucosal ulceration: "  + box_69;

        var box_70 = $("#box70").val();
        captext += "\nEosinophilic inflammation: "  + box_70.join(', ');

        var box_71 = $("#box71").val();
        captext += "\nOther resection finding: "  + box_71;

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});


