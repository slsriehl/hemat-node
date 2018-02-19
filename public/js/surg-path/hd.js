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
            var newElem = $('.pblock:first').clone(true);

            // $(newElem).append(remove);
            newElem.find(':input').attr('id', function (i, val) {
                return val + count;
            });
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
        $(this).closest('.pblock').remove();
        $(".text-info:last").remove();
        $('.remove:last').show();
        count--;
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

    $('#box7').on("change", function(){
        var sel = $('#box7').val();
        if (sel.indexOf("Submitted") > -1) {

            $('#box7_2').show();}
        else {
            $('#box7_2').hide();}
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

        var box_2 = $("#box2").val();
        captext += "Frozen section(s)\nPart Type:\n- "  + box_2 + "\n";

        var box_3 = $("#box3").val();
        captext += "\nLocation:\n- "  + box_3 + "\n";

        var box_4 = $("#box4").val();
        captext += "\nBiopsy type:\n- "  + box_4+ "\n";

        var box_5 = $("#box5").val();
        captext += "\nPathologist:\n- "  + box_5 + "\n";

        var box_6 = $("#box6").val();
        captext += "\nFrozen section diagnosis:\n- "  + box_6+ "\n";

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if (box_7.indexOf("Submitted") > -1) {
            captext += "\nFrozen section residue: Submitted in cassette: "  + box_7_2+ "\n";}
        else {captext += "\nFrozen section residue:\n- "  + box_7+ "\n";}

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});


