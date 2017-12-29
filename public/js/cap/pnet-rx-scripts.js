$(window).on('load', function () {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/



//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/


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




        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});


/**
 * Created by Chandra Krishnan on 11/19/2017.
 */
