$(window).on('load', function() {

// Set variables across the different functions
// temporary holder for checkbox id
    var part_choice  = null;
    var diag_choice  = null;
    var micro_choice = null;
    var comm_choice  = null;

// new text
    var final_text = $('#outPut-3').val();
    var micro_text = $('#outPut-2').val();
    var comm_text  = $('#outPut-4').val();

// old micro text to revert to
    var final_old = '';
    var micro_old = '';
    var comm_old  = '';


// MODIFIERS FOR CLICK EVENTS GOES HERE ------//
    $("#PT_4_imm").on("blur", function (){
        if ($(this).val().length > 0){
            // PT immediate
            var PT_ref_imm = $("#PT_ref_imm").val() || "9.4 - 12.5";
            var PT_ctrl_imm = $("#PT_ctrl_imm").val();
            var PT_pat_imm = $("#PT_pat_imm").val();
            var PT_1_imm = $("#PT_1_imm").val();
            var PT_4_imm = $("#PT_4_imm").val();
            var PT_chang_4_imm_cor = ((PT_pat_imm - PT_4_imm)/(PT_pat_imm - PT_ctrl_imm))*100;
            $("#PT_chang_4_imm").val(PT_chang_4_imm_cor.toFixed(1)).trigger("change");
        } else {
            $("#PT_chang_4_imm").val("Enter immediate PT values");
        }
    });

    $("#PTT_4_imm").on("blur", function (){
        if ($(this).val().length > 0) {
            // PTT immediate
            var PTT_ref_imm = $("#PTT_ref_imm").val() || "25.1 - 36.5";
            var PTT_ctrl_imm = $("#PTT_ctrl_imm").val();
            var PTT_pat_imm = $("#PTT_pat_imm").val();
            var PTT_1_imm = $("#PTT_1_imm").val();
            var PTT_4_imm = $("#PTT_4_imm").val();
            var PTT_chang_4_imm_cor = ((PTT_pat_imm - PTT_4_imm) / (PTT_pat_imm - PTT_ctrl_imm)) * 100;
            $("#PTT_chang_4_imm").val(PTT_chang_4_imm_cor.toFixed(1)).trigger("change");
        } else {
            $("#PTT_chang_4_imm").val("Enter immediate PTT values");
        }
    });

    $("#PTT_4_inc").on("input", function (){
        if ($(this).val().length > 1) {
            // PTT incubated
            var PTT_ref_inc = $("#PTT_ref_inc").val() || "25.1 - 36.5";
            var PTT_ctrl_inc = $("#PTT_ctrl_inc").val();
            var PTT_pat_inc = $("#PTT_pat_inc").val();
            var PTT_1_inc = $("#PTT_1_inc").val();
            var PTT_4_inc = $("#PTT_4_inc").val();
            var PTT_chang_4_inc_cor = ((PTT_pat_inc - PTT_4_inc) / (PTT_pat_inc - PTT_ctrl_inc)) * 100;
            $("#PTT_chang_4_inc").val(PTT_chang_4_inc_cor.toFixed(1)).trigger("change");
        } else {
            $("#PTT_chang_4_inc").val("Enter 1hr PTT values");
        }
    });

    //Helpers

    // PT helpers - no PTT
    $("#PT_chang_4_imm").on('change', function(){
        console.log("PT Chang triggered");
        // get variables of interest
        var PT_ctrl_imm     = $("#PT_ctrl_imm").val();
        var PT_pat_imm      = $("#PT_pat_imm").val();
        var PTT_pat_imm      = $("#PTT_pat_imm").val();
        var PT_chang_imm    = $("#PT_chang_4_imm").val();

            if (PTT_pat_imm.length <1){ // Assuming no PTT run..
                if (PT_pat_imm <= 13) {
                    console.log("Normal PT");
                    $("[data-dx='101']").closest('label').addClass("helpful");
                } else {
                    console.log("Not normal PT");
                    // Clear any helpers first
                    $('.helpful').removeClass('helpful');
                    if (PT_chang_imm >= 40){
                        console.log("PT correcting");
                        $("[data-dx='400']").closest('label').addClass("helpful");
                    } else {
                        console.log("PT not correcting");
                        $("[data-dx='410']").closest('label').addClass("helpful");
                    }
                }
            }
        });

    // PTT helpers - no PT
    $("#PTT_chang_4_inc").on('change', function(){
        // get variables of interest
        var PTT_ctrl_imm    = $("#PTT_ctrl_imm").val();
        var PTT_pat_imm     = $("#PTT_pat_imm").val();
        var PT_pat_imm      = $("#PT_pat_imm").val();
        var PT_chang_imm    = $("#PT_chang_4_imm").val();
        var PTT_chang_imm   = $("#PTT_chang_4_imm").val();
        var PTT_chang_inc   = $("#PTT_chang_4_inc").val();

        // normal PTT and PT
        if ((PTT_pat_imm <= 38) && (PT_pat_imm <= 13)) {
            // Clear any helpers first
            $('.helpful').removeClass('helpful');
            console.log("Normal PT and PTT");
            $("[data-dx='100']").closest('label').addClass("helpful");
        } else if ((PTT_pat_imm <= 38) && (PT_pat_imm > 13)){
            // Clear any helpers first
            $('.helpful').removeClass('helpful');
            console.log("Normal PTT and not normal PT");
            $("[data-dx='102']").closest('label').addClass("helpful");
        } else {
            // Clear any helpers first
            $('.helpful').removeClass('helpful');
            console.log("PTT and PT are not normal");
        }

        // Prolonged PTT - no PT run
        if (PT_pat_imm.length == 0){
            if (PTT_pat_imm > 38){
                if ((PTT_chang_imm >= 40) && (PTT_chang_inc >= 10)){
                    console.log("PTT prolonged and corrects imm+inc");
                    // Clear any helpers first
                    $('.helpful').removeClass('helpful');
                    $("[data-dx='300']").closest('label').addClass("helpful");
                } else if ((PTT_chang_imm < 40) && (PTT_chang_inc >=10)){
                    console.log("PTT prolonged and corrects only imm");
                    // Clear any helpers first
                    $('.helpful').removeClass('helpful');
                    $("[data-dx='305']").closest('label').addClass("helpful");
                } else if ((PTT_chang_imm < 40) && (PTT_chang_inc < 10)){
                    console.log("PTT prolonged and doesn't correct");
                    // Clear any helpers first
                    $('.helpful').removeClass('helpful');
                    $("[data-dx='310']").closest('label').addClass("helpful");
                }
            }
        } else if (PT_pat_imm <= 13){ // Prolonged PTT, normal PT
            if (PTT_pat_imm > 38){
                if ((PTT_chang_imm >= 40) && (PTT_chang_inc >= 10)){
                    console.log("PTT prolonged and corrects imm+inc, normal PT");
                    // Clear any helpers first
                    $('.helpful').removeClass('helpful');
                    $("[data-dx='300']").closest('label').addClass("helpful");
                    $("[data-dx='101']").closest('label').addClass("helpful");
                } else if ((PTT_chang_imm < 40) && (PTT_chang_inc >=10)){
                    console.log("PTT prolonged and corrects only imm, normal PT");
                    // Clear any helpers first
                    $('.helpful').removeClass('helpful');
                    $("[data-dx='305']").closest('label').addClass("helpful");
                    $("[data-dx='101']").closest('label').addClass("helpful");
                } else if ((PTT_chang_imm < 40) && (PTT_chang_inc < 10)){
                    console.log("PTT prolonged and doesn't correct, normal PT");
                    // Clear any helpers first
                    $('.helpful').removeClass('helpful');
                    $("[data-dx='310']").closest('label').addClass("helpful");
                    $("[data-dx='101']").closest('label').addClass("helpful");
                }
            }
        } else if (PT_pat_imm > 13) { // Prolonged PTT and prolonged PT
            // If PT corrects and PTT corrects both ways
            if (PTT_pat_imm > 38) {
                if ((PT_chang_imm >= 50) && (PTT_chang_imm >= 40) && (PTT_chang_inc >= 10)) {
                    console.log("PTT & PT prolonged and corrects imm+inc");
                    // Clear any helpers first
                    $('.helpful').removeClass('helpful');
                    $("[data-dx='200']").closest('label').addClass("helpful");
                } // If PT corrects and PTT corrects immediate only
                else if ((PT_chang_imm >= 50) && (PTT_chang_imm >= 40) && (PTT_chang_inc < 10)) {
                    console.log("PTT & PT prolonged and corrects only imm, not after inc");
                    // Clear any helpers first
                    $('.helpful').removeClass('helpful');
                    $("[data-dx='205']").closest('label').addClass("helpful");
                } // If PT and PTT don't correct
                else if ((PT_chang_imm < 50) && ((PTT_chang_imm < 40) || (PTT_chang_inc < 10))) {
                    console.log("PTT & PT prolonged and doesn't correct imm or inc");
                    // Clear any helpers first
                    $('.helpful').removeClass('helpful');
                    $("[data-dx='210']").closest('label').addClass("helpful");
                } // If PT doesn't correct, but PTT does
                else if ((PT_chang_imm < 50) && ((PTT_chang_imm >= 40) || (PTT_chang_inc >= 10))) {
                    console.log("PTT & PT prolonged and doesn't correct imm or inc");
                    // Clear any helpers first
                    $('.helpful').removeClass('helpful');
                    $("[data-dx='305']").closest('label').addClass("helpful");
                    $("[data-dx='410']").closest('label').addClass("helpful");
                }
            }
        }
    });


//--END CLICK MODIFIERS --------------------//



// **** ADD MICROS WITH ONE-CLICK UNDO *****//
//											//
//											//


// fill final diagnosis textbox
    function print_final() {
        if (diag_choice !== null) {
            final_text += dxLines["dxLine"+diag_choice] + '';
            comm_text += commLines["commLine"+comm_choice] + '';
            diag_choice = null;
            comm_choice = null;
            $('#outPut-3').val(final_text);
            $('#outPut-4').val(comm_text);
            console.log("print diagnosis");

        }
    }

/* fill micros textbox
    function print_micro() {
        console.log("print micro");
        if (micro_choice !== null) {
            micro_text += mxLines[micro_choice] + '\n';
            micro_choice = null;
            $('#outPut-2').val(micro_text);
        }
    }

// fill comment textbox
    function print_comm() {
        console.log("print comment");
        if (comm_choice !== null) {
            comm_text += comLines[comm_choice] + '';
            comm_choice = null;
            $('#outPut-4').val(comm_text);
        }
    }
*/
// Retain any manual edits within textarea
    $('textarea').on('input', function () {
        if ($(this).is('#outPut-3')) {
            final_text = $(this).val();
        }
        else if ($(this).is('#outPut-2')) {
            micro_text = $(this).val();
        }
        else if ($(this).is('#outPut-4')) {
            comm_text = $(this).val();
        }
    });


// Micros: add new selection to list, unless unchecked
    $('input:checkbox').on('change', function () {
     if ($(this).attr('data-dx') > -1) {
            if ($(this).is(':checked')) {
                diag_choice = $(this).data("dx");
                comm_choice = $(this).data("dx");
                final_old = final_text;
                comm_old = comm_text;
                print_final();
            } else {
                var del = $(this).data("dx");
                // remove unchecked final diagosis
                var re = new RegExp(dxLines["dxLine"+del] + '$'); // assign RegExp to this value + '$' last occurrence
                final_old = final_text.replace(re, ''); // replace last occurrence
                final_text = final_old;
                $('#outPut-3').val(final_old); // if unchecked, textarea = prior text
                // remove unchecked comment
                var rec = new RegExp(commLines["commLine"+del] + '$'); // assign RegExp to this value + '$' last occurrence
                comm_old = comm_text.replace(rec, ''); // replace last occurrence
                comm_text = comm_old;
                $('#outPut-4').val(comm_old); // if unchecked, textarea = prior text

            }
        }
    });
//											//
//											//
// **** ADD MICROS WITH ONE-CLICK UNDO *****//



// ********************* Combined report function ***********************//

    $('#writeReport').on('click', function () {
        // **** MIXING STUDY PSEUDO TABLE CONSTRUCT **** //
        var hep_hx = $("#heparin").val();
        // PT immediate
        var PT_ref_imm = $("#PT_ref_imm").val() || "9.4 - 12.5";
        var PT_ctrl_imm = $("#PT_ctrl_imm").val();
        var PT_pat_imm = $("#PT_pat_imm").val();
        var PT_1_imm = $("#PT_1_imm").val();
        var PT_4_imm = $("#PT_4_imm").val();
        var PT_chang_4_imm = $("#PT_chang_4_imm").val();

        /*/ PT incubated - not useful
        var PT_ref_inc = $("#PT_ref_inc").val() || "9.4 - 12.5";
        var PT_ctrl_inc = $("#PT_ctrl_inc").val();
        var PT_pat_inc = $("#PT_pat_inc").val();
        var PT_1_inc = $("#PT_1_inc").val();
        var PT_4_inc = $("#PT_4_inc").val();
        */

        // PTT immediate
        var PTT_ref_imm = $("#PTT_ref_imm").val() || "9.4 - 12.5";
        var PTT_ctrl_imm = $("#PTT_ctrl_imm").val();
        var PTT_pat_imm = $("#PTT_pat_imm").val();
        var PTT_1_imm = $("#PTT_1_imm").val();
        var PTT_4_imm = $("#PTT_4_imm").val();
        var PTT_chang_4_imm = $("#PTT_chang_4_imm").val();
        // PTT incubated
        var PTT_ref_inc = $("#PTT_ref_inc").val() || "25.1 - 36.5";
        var PTT_ctrl_inc = $("#PTT_ctrl_inc").val();
        var PTT_pat_inc = $("#PTT_pat_inc").val();
        var PTT_1_inc = $("#PTT_1_inc").val();
        var PTT_4_inc = $("#PTT_4_inc").val();
        var PTT_chang_4_inc = $("#PTT_chang_4_inc").val();

        // Footers and disclaimers
        var disclaimer = "\n* Correction % defined as per:\nChang et al. Am J Clin Pathol 2002;117:62-73\n"

        if (PT_pat_imm != 0){
            console.log (PT_pat_imm, "PT data is not empty");
            var PT_mix_head = "PT MIXING STUDIES \t\tCLOTTING TIME\n";
            var PT_data  =  "IMMEDIATE \n"+
                            "  PT reference range\t\t\t"+PT_ref_imm+" s\n"+
                            "  PT normal control\t\t\t"+PT_ctrl_imm+" s\n"+
                            "  PT clotting time\t\t\t"+PT_pat_imm+" s\n"+
                            "  PT 1:1 mix\t\t\t\t"+PT_1_imm+" s\n"+
                            "  PT 4:1 mix\t\t\t\t"+PT_4_imm+" s\n";
            var PT_text = PT_mix_head + PT_data;
        } else {
            PT_text = '';
            console.log ("PT data is empty");
        }

        if (PTT_pat_imm != 0){
            console.log (PTT_pat_imm, "PTT data is not empty");
            var PTT_mix_head  =  "\nPTT MIXING STUDIES \t\tCLOTTING TIME\n";
            var PTT_data  = "IMMEDIATE \n"+
                            "  PTT reference range\t\t\t"+PTT_ref_imm+" s\n"+
                            "  PTT normal control\t\t\t"+PTT_ctrl_imm+" s\n"+
                            "  PTT clotting time\t\t\t"+PTT_pat_imm+" s\n"+
                            "  PTT 1:1 mix\t\t\t\t"+PTT_1_imm+" s\n"+
                            "  PTT 4:1 mix\t\t\t\t"+PTT_4_imm+" s\n"+
                            "\nINCUBATED (1 HOUR)\n"+
                            "  PTT reference range\t\t\t"+PTT_ref_inc+" s\n"+
                            "  PTT normal control\t\t\t"+PTT_ctrl_inc+" s\n"+
                            "  PTT clotting time\t\t\t"+PTT_pat_inc+" s\n"+
                            "  PTT 1:1 mix\t\t\t\t"+PTT_1_inc+" s\n"+
                            "  PTT 4:1 mix\t\t\t\t"+PTT_4_inc+" s\n";

            var PTT_text = PTT_mix_head + PTT_data;
        } else {
            PTT_text = '';
            console.log ("PTT data is empty");
        }

        if ((PT_chang_4_imm.length > 0) && (PTT_chang_4_imm.length > 0)) {
            var Chang_data = "\nPERCENT CORRECTION*\t4:1 PT\t|4:1 PTT\n" +
                "IMMEDIATE\t\t" + PT_chang_4_imm + "%\t" + "|"+PTT_chang_4_imm + "%\n"+
                "INCUBATED\t\t\t|" + PTT_chang_4_inc + "%\n";

        } else if ((PT_chang_4_imm.length < 1) && (PTT_chang_4_imm.length > 0)){
                Chang_data = "\nPERCENT CORRECTION*\t4:1 PTT\n" +
                "IMMEDIATE\t\t" + PTT_chang_4_imm + "%\n" +
                "INCUBATED\t\t" + PTT_chang_4_inc + "%\n";
        } else if ((PT_chang_4_imm.length > 0) && (PTT_chang_4_imm.length < 1)){
                Chang_data = "\nPERCENT CORRECTION*\t4:1 PT\n" +
                    "IMMEDIATE\t\t" + PTT_chang_4_imm + "%\n";
        } else {
            Chang_data = "";
        }

        $("#outPut-2").val(PT_text + PTT_text + Chang_data + disclaimer);

        // store your text to localStorage when someone click the link
        var textToPass = $('#outPut-2').val() + '\n\nCOAGULATION MIXING STUDIES:\n' + $('#outPut-3').val() + '\n\n' + $('#outPut-4').val();
        $('#outPut-combine').val(textToPass);
        $('#combined-report').modal("show");
        dataObj.singleSection = $('#outPut-combine').val();
        makeCreatePdfBtn();
    });

// ======================================================================//


});