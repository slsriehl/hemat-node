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

    $('#box32').on("change", function(){
        var sel = $('#box32').val();
        if (sel.indexOf("Other") > -1) {

            $('#box32_2').show();}
        else {
            $('#box32_2').hide();}
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
        var captext = "Hirschsprung disease resection synoptic\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1.indexOf("takedown") > -1) {
            captext += "\nProcedure: "  + box_1_2;}
        else {captext += "\nProcedure: "  + box_1;}


        // frozen sections
        // Frozen section arrays
        var fz_part =   []; // fz parts
        var fz_diag =   []; // fz diagnosis at the end
        $(".pblock").each(function(){
            var fztext = "("+$(this).find(".fz-part").val().toUpperCase() +
                ") " + $(this).find(".fz-loc").val() + ": "+
                "\n\tBiopsy type: " + $(this).find(".fz-type").val() +
                "\n\tPathologist: " + $(this).find(".fz-path").val() +
                "\n\tIntra-Op Dx: " + $(this).find(".fz-iodx").val() +
                "\n\tPerm Dx: "     + $(this).find(".fz-finaldx").val();

            if ($(".fz-residue").length > 1 ){
                console.log("FZ length:" + $(".fz-residue").length);
                fztext += "\n\tResidue: " + $(this).find(".fz-residue").val() +
                "\n\n";
            } else {
                console.log("fz residue empty");
                console.log("FZ length:" + $(".fz-residue").length);
                fztext += "\n\tResidue: Kept in OCT\n\n";
            }
            fz_part.push(fztext)

            // final diagnosis
            var fzdx =  "("+$(this).find(".fz-part").val() + ") " +       // (A)
                        "COLON, " + $(this).find(".fz-loc").val() + ", "+ // (A) COLON, SIGMOID
                        $(this).find(".fz-type").val() + " BIOPSY: \n" +  // (A) COLON, SIGMOID, SEROMUSCULAR BIOPSY:
                        "- "+ $(this).find(".fz-finaldx").val() +"\n";

            fz_diag.push(fzdx.toUpperCase());

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
        captext += "\n----------------------------------------\n";
        captext += "\nRESECTION SPECIMEN - GROSS DESCRIPTION";
        var box_10 = $("#box10").val();
        var box_10_2 = $("#box10_2").val();
        captext += "\n("  + box_10+") "+box_10_2+": ";

        var box_11 = $("#box11").val();
        captext += "\n\tResection status: "  + box_11;

        var box_12 = $("#box12").val();
        captext += "\n\tResection total length: "  + box_12 + "cm";

        var box_13 = $("#box13").val();
        if (box_13.length > 0){
            captext += "\n\tMucosal sleeve length: "  + box_13.replace(/cm/,'') + "cm";
        } else {
            captext += "\n\tMucosal sleeve length: Not applicable";
        }


        var box_14 = $("#box14").val();
        captext += "\n\tMinimum external gross diameter: "  + box_14.replace(/cm/,'') + "cm";

        var box_15 = $("#box15").val();
        captext += "\n\tMaximum external gross diameter: "  + box_15.replace(/cm/,'') + "cm";

        var box_16 = $("#box16").val();
        captext += "\n\tDistance to visualized transition zone: "  + box_16.replace(/cm/,'') + "cm";

                var box_30 = $("#box30").val();
        captext += "\n\tLocations of intraoperative biopsy sites: "  + box_30;

        // Suppressed during draft stage
        // var box_31 = $("#box31").val();
        // captext += "\n\tLength of ganglionated bowel: "  + box_31;

        var box_32 = $("#box32").val();
        var box_32_2 = $("#box32_2").val();
        if (box_32.indexOf("Other") > -1) {
            captext += "\nGross appearance of mucosal surface: "  + box_32_2;
        }
        else {
            captext += "\n\tGross appearance of mucosal surface: "  + box_32;
        }

        // Cassette labels
        captext += "\n\nRESECTION CASSETTE LABELS\n";
        var box_34 = $("#box34").val();
        if (box_34.length > 0) {
            captext += box_34+ ": Proximal resection margin frozen residue\n";

        }

        var box_35 = $("#box35").val();
        captext += box_35+ ": Transverse section adjacent to proximal margin\n";

        var box_36 = $("#box36").val();
        captext += box_36+ ": Transverse section adjacent to distal margin\n";

        var box_37 = $("#box37").val();
        captext += box_37+ ": Intervening sections\n";


        
        // PROXIMAL MARGIN
        captext += "\n\nRESECTION SPECIMEN - MICROSCOPIC DESCRIPTION\nPROXIMAL MARGIN";
        var box_20 = $("#box20").val();
        captext += "\n\tProximal margin frozen section: "  + box_20;

        if (box_20.indexOf("Not") < 0){

            var box_21 = $("#box21").val();
            if (box_21.length > 0){
                captext += "\n\tTransition zone features: \n\t- "  + box_21.join('\n\t- ');
            }


            var box_23 = $("#box23").val();
            captext += "\n\tProximal margin frozen section pathologist: "  + box_23;

            var box_24 = $("#box24").val();
            var box_24_2 = $("#box24_2").val();
            captext += "\n\tResidual proximal margin frozen tissue: "  + box_24;
        }

        var box_60 = $("#box60").val();
        var box_60_2 = $("#box60_2").val();
        if (box_60.indexOf("ganglion") > -1) {
            captext += "\n\tGanglion cell distribution: "  + box_60+" ("+ box_60_2+ ")";}
        else {captext += "\n\tGanglion cell distribution: "  + box_60;}


        var box_61 = $("#box61").val();
        var box_61_2 = $("#box61_2").val();
        if (box_61.indexOf("measured") > -1) {
            captext += "\n\tSubmucosal nerve hypertrophy: "+ box_61+", largest measured nerve: " + box_61_2+ "um";}
        else {captext += "\n\tSubmucosal nerve hypertrophy: "  + box_61;}

        /* suppressed in this draft
        var box_62 = $("#box62").val();
        captext += "\nNeutrophilic mucosal inflammation: "  + box_62;

        var box_63 = $("#box63").val();
        captext += "\nMucosal ulceration: "  + box_63;

        var box_64 = $("#box64").val();
        captext += "\nEosinophilic inflammation: "  + box_64.join(', ');
        */

        var box_65 = $("#box65").val();
        if (box_65.length > 0) {
            captext += "\n\tOther resection finding: "  + box_65;
        }

        // DISTAL MARGIN
        captext += "\n\nDISTAL MARGIN";
        var box_66 = $("#box66").val();
        var box_66_2 = $("#box66_2").val();
        if (box_66.indexOf("ganglion") > -1) {
            captext += "\n\tGanglion cell distribution: "  + box_66+" ("+ box_66_2+ ")";}
        else {captext += "\n\tGanglion cell distribution: "  + box_66;}


        var box_67 = $("#box67").val();
        var box_67_2 = $("#box67_2").val();
        if (box_67.indexOf("measured") > -1) {
            captext += "\n\tSubmucosal nerve hypertrophy: "+ box_67+", largest measured nerve: " + box_67_2+ "um";}
        else {captext += "\n\tSubmucosal nerve hypertrophy: "  + box_67;}

        /* suppressed in this draft

        var box_68 = $("#box68").val();
        captext += "\nNeutrophilic mucosal inflammation: "  + box_68;

        var box_69 = $("#box69").val();
        captext += "\nMucosal ulceration: "  + box_69;

        var box_70 = $("#box70").val();
        captext += "\nEosinophilic inflammation: "  + box_70.join(', ');
        */
        var box_71 = $("#box71").val();
        if  (box_71.length > 0){
            captext += "\n\tOther resection finding: "  + box_71;
        }

        // LONGITUDINAL STRIPS
        captext += "\n\nRESECTION LONGITUDINAL STRIPS OR TRANSVERSE MAPPING";

        var box_80 = $("#box80").val();
        captext += "\n\tDistance to most distal submucosal ganglion cell: "  + box_80.replace(/cm/,'') + "cm";

        var box_81 = $("#box81").val();
        captext += "\n\tDistance to most distal intermyenteric ganglion cell: "  + box_81.replace(/cm/,'') + "cm";

        var box_82 = $("#box82").val();
        captext += "\n\tDistance to closest hypertrophic nerves: "  + box_82.replace(/cm/,'') + "cm";

        var box_83 = $("#box83").val();
        captext += "\n\tNeutrophilic mucosal inflammation: "  + box_83;

        var box_84 = $("#box84").val();
        captext += "\n\tUlceration: "  + box_84;

        var box_85 = $("#box85").val();
        captext += "\n\tEosinophilic inflammation: "  + box_85.join(', ');

        var box_86 = $("#box86").val();
        if (box_86.length > 0){
            captext += "\n\tOther microscopic finding(s): "  + box_86;
        }

        // ostomy block
        if ($("#ostomy").is(":visible")){
            captext += "\n\n----------------------------------------\nOSTOMY SPECIMEN" +
                           "\n\nGROSS DESCRIPTION";

            var box_40 = $("#box40").val();
            var box_40_2 = $("#box40_2").val();
            captext += "\n("  + box_40+") "+box_40_2+":";

            var box_41 = $("#box41").val();
            captext += "\n\tOstomy staus: "  + box_41;

            var box_42 = $("#box42").val();
            captext += "\n\tOstomy total length: "  + box_42 + "cm";

            var box_43 = $("#box43").val();
            var box_43_2 = $("#box43_2").val();
            var box_43_3 = $("#box43_3").val();
            if (box_43.indexOf("present") > -1) {
                captext += "\n\tOstomy external orifice appearance: "  + box_43+" ("+box_43_2+"cm segment)";}
            else if (box_43.indexOf("Other") > -1) {
                captext += "\n\tOstomy external orifice appearance: "  + box_43_3;}
            else {captext += "\n\tOstomy external orifice appearance: "  + box_43;}


            var box_45 = $("#box45").val();
            captext += "\n\tProximal ostomy margin frozen section: "  + box_45;

            if (box_45.indexOf("Not") < 0){

                var box_46 = $("#box46").val();
                if (box_46.length > 0){
                    captext += "\n\tOstomy Transition zone features:\n\t- "  + box_46.join('\n\t- ');
                }


                var box_47 = $("#box47").val();
                captext += "\n\tProximal ostomy margin frozen section pathologist: "  + box_47;

            }

            var box_49 = $("#box49").val();
            captext += "\n\nOSTOMY CASSETTE CODE:";

            if (box_45.indexOf("Not") < 0) {
                var box_48 = $("#box48").val();
                var box_48_2 = $("#box48_2").val();
                if (box_48.indexOf("Submitted") > -1) {
                    captext += "\n"+box_48_2+": Ostomy proximal margin frozen residue";}
                else {captext += "\n"+ box_48 +": Ostomy proximal margin frozen residue";}

            }

            captext+= "\n"+box_49+": Circumferential adjacent to proximal margin";

            var box_50 = $("#box50").val();
            captext += "\n"+box_50 +": Longitudinal strip\n";

            captext += "\n\nOSTOMY MICROSCOPIC DESCRIPTION\nPROXIMAL MARGIN:";

            var box_100 = $("#box100").val();
            var box_100_2 = $("#box100_2").val();
            if (box_100.indexOf("ganglion") > -1) {
                captext += "\n\tGanglion cell distribution: "  + box_100+" ("+ box_100_2+ ")";}
            else {captext += "\n\tGanglion cell distribution: "  + box_100;}

            var box_101 = $("#box101").val();
            var box_101_2 = $("#box101_2").val();
            if (box_101.indexOf("measured") > -1) {
                captext += "\n\tSubmucosal nerve hypertrophy: "+ box_101+", largest measured nerve: " + box_101_2+ "um";}
            else {captext += "\n\tSubmucosal nerve hypertrophy: "  + box_101;}

            /* suppressed in this draft
            var box_102 = $("#box102").val();
            captext += "\nNeutrophilic mucosal inflammation: "  + box_102;

            var box_103 = $("#box103").val();
            captext += "\nMucosal ulceration: "  + box_103;

            var box_104 = $("#box104").val();
            captext += "\nEosinophilic inflammation: "  + box_104.join(', ');
            */

            var box_105 = $("#box105").val();
            if (box_105.length > 0) {
                captext += "\n\tOther ostomy proximal margin finding(s): "  + box_105;
            }

            captext += "\n\nLONGITUDINAL STRIPS\n";

            var box_110 = $("#box110").val();
            if (box_110.length > 0){
                captext += "\n\tDistance to most distal submucosal ganglion cell: "  + box_110.replace(/cm/,'') + "cm";
            }

            var box_111 = $("#box111").val();
            if (box_111.length > 0) {
                captext += "\n\tDistance to most distal intermyenteric ganglion cell: "  + box_111.replace(/cm/,'') + "cm";
            }

            var box_112 = $("#box112").val();
            if (box_112.length > 0) {
                captext += "\n\tDistance to closest hypertrophic nerves: "  + box_112.replace(/cm/,'') + "cm";
            }

            var box_113 = $("#box113").val();
            captext += "\n\tNeutrophilic mucosal inflammation: "  + box_113;

            var box_114 = $("#box114").val();
            captext += "\n\tUlceration: "  + box_114;

            var box_115 = $("#box115").val();
            captext += "\n\tEosinophilic inflammation: "  + box_115.join(', ');

            var box_116 = $("#box116").val();
            if (box_116.length > 0){
                captext += "\n\tOther microscopic finding(s): "  + box_116;
            }

        }

        captext += "\n\n----------------------------------------\n";

        captext += "\n\nFINAL DIAGNOSIS\n";

        // Frozen section diagnoses
        captext += fz_diag.join('\n');

        // Pull-through diagnoses
        captext += "\n("  + box_10.toUpperCase()+") COLON, "+box_10_2.replace(/ colon/, '').toUpperCase()+", RESECTION (LENGTH: "+box_12+"cm):";

        captext += "\n- COLONIC AGANGLIONOSIS (HIRSCHSPRUNG DISEASE), WITH THE FOLLOWING FEATURES:";

        var gang_length
        // compare distance to submucosal ganglion and myenteric ganglion, take longer one to calculate aganglionic segment
        var sub_gang = Number(box_80);
        var myen_gang = Number (box_81);

        if (sub_gang >= myen_gang){
            gang_length = sub_gang;
        } else {
            gang_length = myen_gang;
        }
        captext += "\n\t- DISTAL AGANGLIONIC SEGMENT: "+(box_12-gang_length)+" CM ";

        captext += "\n\t- PROXIMAL END OF TRANSITION ZONE: "+box_82+" CM FROM PROXIMAL MARGIN "

        if (box_20.indexOf("transition") > -1) { // if proximal is transition zone
                captext += "\n\t- HISTOPATHOLOGICAL FEATURES OF TRANSITION ZONE AT PROXIMAL MARGIN, AS FOLLOWS:\n\t\t- " +
                            box_21.map(function (x) { return x.toUpperCase() }).join('\n\t\t- ');
        } else if (box_20.indexOf("Absent") > -1){ // if proximal is aganglionic
            captext += "\n\t- ABSENT CIRCUMFERENTIAL GANGLION CELLS AT PROXIMAL MARGIN ";
        } else { // if proximal is normal
            captext += "\n\t- NO SIGNIFICANT NEUROMUSCULAR PATHOLOGY AT THE PROXIMAL SURGICAL MARGIN ";
        }

        // ostomy final (if needed)
        if ($("#ostomy").is(":visible")) {
        captext += "\n\n("  + box_40+") BOWEL SEGMENT, "+box_40_2.toUpperCase()+", OSTOMY TAKEDOWN:";

        captext += "\n- ENTEROCUTANEOUS ANASTOMOSIS WITH THE FOLLOWING FEATURES:";

            if (box_45.indexOf("No") > -1) { // if proximal is transition zone
                captext += "\n- NO SIGNIFICANT NEUROMUSCULAR PATHOLOGY AT THE PROXIMAL SURGICAL MARGIN";
            } else {
                captext += "\n- "+box_100+"\n\t- "+box_46.map(function (x) { return x.toUpperCase()}).join('\n\t- ');
            }

        }


        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});


