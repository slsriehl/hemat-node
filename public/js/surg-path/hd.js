$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/




//*************************************************************//
//                        Replace                              //
// *************************************************************/

    // Ostomy site
    $('#grLine150').on('change', function(){
        var text = $(this).val();
        console.log("grLine150 changed");
        grLines.grLine150 = grLines.grLine150.replace(/#gr-150#/, text)
    });

    // Any prior resections
    $('#grLine155').on('change', function(){
        var text = $(this).val();
        console.log("grLine155 changed");
        grLines.grLine155 = grLines.grLine155.replace(/#gr-155#/, text)
    });

    // Frozen section part/location
    $('#grLine200').on('change', function(){
        var text = $(this).val();
        var part = $(".fz-part").val();
        grLines.grLine200 = grLines.grLine200
                            .replace(/:.*\)/, ": "+part+")")
                            .replace(/#gr-200#/, text);
    });


    // Frozen section of resection prox margin
    $("#mxLine50").on("change", function(){
       var text = $(this).val();
        mxLines.mxLine50 = mxLines.mxLine50.replace(/: \)/, ": "+text+")");
    });

    $(".fz-rx-path").on("blur", function(){
        var text = $(this).val();
        mxLines.mxLine50 = mxLines.mxLine50.replace(/\n$/, "\nEn face frozen section of proximal margin (donut) (pathologist: "+text+"): ");
        console.log(mxLines.mxLine50);
    });

    // Resection - frozen section residue
    $("#grLine255").on("change", function(){
        var text = $(this).val();
        grLines.grLine255 = grLines.grLine255.replace(/cassette: /, "cassette: "+text);
    });

    // Gross lengths
    $("#grLine270, #grLine275, #grLine280, #grLine285").on("change", function (){
        var text = $(this).val();
        var id = $(this).attr("id");
        console.log(text, id);
        grLines[id] = grLines[id].replace(/: /, ": "+text+"cm");
    });

//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/



// **** ADD MICROS WITH ONE-CLICK UNDO *****//
//											//
//											//
// Set variables across the different functions
// temporary holder for checkbox id
        var gross_choice  = null;
        var diag_choice  = null;
        var micro_choice = null;
        var comm_choice  = null;

// new text
        var gross_text = $('#outPut-1').val();
        var micro_text = $('#outPut-2').val();
        var final_text = $('#outPut-3').val();
        var comm_text  = $('#outPut-4').val();

// old micro text to revert to
        var gross_old = '';
        var final_old = '';
        var micro_old = '';
        var comm_old  = '';


// fill gross textbox
    function print_gross(){
        if (gross_choice !== null) {
            gross_text += grLines[gross_choice] + '';
            gross_choice = null;
            $('#outPut-1').val(gross_text);
}
    }

// fill micros textbox
        function print_micro() {
            if (micro_choice !== null) {
                micro_text += mxLines[micro_choice] + '\n';
                micro_choice = null;
               // $('input:checkbox[id*="mxLine"]').prop( "checked", false );
              //  $("label").removeClass("highlight");
                $('#outPut-2').val(micro_text);
            }
        }

// fill final diagnosis textbox
        function print_final() {
            console.log("print final");
            if (diag_choice !== null) {
                final_text += dxLines[diag_choice] + '';
                diag_choice = null;
              //  $('input:checkbox[id*="dxLine"]').prop( "checked", false );
              //  $("label").removeClass("highlight");
                $('#outPut-3').val(final_text);
            }
        }

// fill comment textbox
        function print_comm() {
            if (comm_choice !== null) {
                comm_text += commLines[comm_choice] + '';
                comm_choice = null;
                $('#outPut-4').val(comm_text);
            }
        }

// Retain any manual edits within textarea
        $('textarea').on('input', function(){
            if ($(this).is('#outPut-3')){
                final_text = $(this).val();}
            else if ($(this).is('#outPut-2')){
                micro_text = $(this).val();}
            else if ($(this).is('#outPut-4')){
                comm_text = $(this).val();}
                else if ($(this).is('#outPut-1')){
                gross_text = $(this).val();}
        });


// Micros: add new selection to list, unless unchecked
        $('input:not(".ignore")').on('change', function () {

            if ($(this).attr('id').indexOf('grLine') > -1){
                if ($(this).is(':checked')) {
                    console.log("input:chk change");
                    gross_choice = $(this).attr('id');
                    gross_old = gross_text;
                    print_gross();
                } else if ($(this).is("input:text")){
                    console.log("input:text change");
                    gross_choice = $(this).attr('id');
                    gross_old = gross_text;
                    print_gross();
                } else {
                    var del = $(this).attr('id');
                    gross_old = gross_text.replace(grLines[del], '');
                    gross_text = gross_old;
                    $('#outPut-1').val(gross_old); // if unchecked, textarea = prior text
                }
            }
            else if ($(this).attr('id').indexOf('dxLine') > -1){
                if ($(this).is(':checked')) {
                    diag_choice = $(this).attr('id');
                    final_old = final_text;
                    print_final();
                } else if ($(this).is("input:text")){
                    console.log("input:text change");
                    diag_choice = $(this).attr('id');
                    final_old = final_text;
                    print_final();
                } else {
                    del = $(this).attr('id');
                    var re = new RegExp(dxLines[del] + '$'); // assign RegExp to this value + '$' last occurrence
                    final_old = final_text.replace(re, ''); // replace last occurrence
                    final_text = final_old;
                    $('#outPut-3').val(final_old); // if unchecked, textarea = prior text
                }
            }
            else if ($(this).attr('id').indexOf('mxLine') > -1){
                if ($(this).is(':checked')) {
                    micro_choice = $(this).attr('id');
                    micro_old = micro_text;
                    print_micro();
                } else if ($(this).is("input:text")){
                    console.log("input:text change");
                    micro_choice = $(this).attr('id');
                    micro_old = micro_text;
                    print_micro();
                } else {
                    del = $(this).attr('id');
                    micro_old = micro_text.replace(mxLines[del], '');
                    micro_text = micro_old;
                    $('#outPut-2').val(micro_old); // if unchecked, textarea = prior text
                }
            }
            else if ($(this).attr('id').indexOf('commLine') > -1){
                if ($(this).is(':checked')) {
                    comm_choice = $(this).attr('id');
                    comm_old = comm_text;
                    print_comm();
                } else if ($(this).is("input:text")){
                    console.log("input:text change");
                    comm_choice = $(this).attr('id');
                    comm_old = comm_text;
                    print_comm();
                } else {
                    del = $(this).attr('id');
                    comm_old = comm_text.replace(commLines[del], '');
                    comm_text = comm_old;
                    $('#outPut-4').val(comm_old); // if unchecked, textarea = prior text
                }
            }
        });
//											//
//											//
// **** ADD MICROS WITH ONE-CLICK UNDO *****//




});
/**
 * Created by Chandra Krishnan on 2/3/2018.
 */
