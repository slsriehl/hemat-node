
$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/

 


//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/

    $('.pclone').on('click', function () {
        var des = '<button class="btn btn-outline-danger pdestroy p-2 m-2">Delete part</button>';
        // create the new element via clone(), and manipulate it's ID using newNum value
        var newElem = $('.pblock:last').clone(true);

        // insert the new element after the last "duplicatable" input field
        $('.pblock:last').after(newElem);
        //    $(".pblock:last td:first").replaceWith( "<td>" + newNum + "</td>" );

    });

    $('.pdestroy').on('click', function (){
        console.log("done");
        $(this).closest('.pblock').remove();
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
    



        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});




/**
 * Created by Chandra Krishnan on 12/11/2017.
 */
