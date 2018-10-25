$(window).on('load', function() {
//*************************************************************//
//                        Replace / Clone                      //
// *************************************************************/




//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/
    $('#box1').on("change", function(){
        var sel = $('#box1').val();
        if (sel.indexOf("Other") > -1) {

            $('#box1_2').show();}
        else {
            $('#box1_2').hide();}
    });

    $('#box2').on("change", function(){
        var sel = $('#box2').val();
        if (sel.indexOf("Other") > -1) {

            $('#box2_2').show();}
        else {
            $('#box2_2').hide();}
    });

    $('#box6').on("change", function(){
        var sel = $('#box6').val();
        if ($.inArray('Submucosal nerve hypertrophy (other, specify)', sel) >-1) {
            $('#box6_2').show();}
        else {$('#box6_2').hide();}
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
        if (box_1.indexOf("Other") > -1) {
            captext += "\nType of Pull-through procedure:\n- "  + box_1_2+ "\n";}
        else {captext += "\nType of Pull-through procedure:\n- "  + box_1+ "\n";}


        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if (box_2.indexOf("Other") > -1) {
            captext += "\nSurgical technique:\n- "  + box_2_2+ "\n";}
        else {captext += "\nSurgical technique:\n- "  + box_2+ "\n";}


        var box_3 = $("#box3").val();
        captext += "\nLength of Distal Aganglionic Segment:\n- "  + box_3.replace(/cm/,'') + "cm\n";

        var box_4 = $("#box4").val();
        if (box_4.length>0){
            captext += "\nLength of Resected Proximal Ganglionic Bowel:\n- "  + box_4.replace(/cm/,'') + "cm\n";

        }

        var box_5 = $("#box5").val();
        captext += "\nAnatomic location of Transition Zone:\n- "  + box_5+ "\n";

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if ($.inArray('Submucosal nerve hypertrophy (other, specify)', box_6) >-1){
            captext += "\nHistology of Proximal Surgical Margin:\n- "  + box_6.join('\n- ').replace(/Submucosal nerve hypertrophy \(other, specify\)/, box_6_2) + "\n";}
        else {captext += "\nHistology of Proximal Surgical Margin:\n- "  + box_6.join('\n- ') + "\n";}

        var box_7 = $("#box7").val();
        captext += "\nProximal margin intraoperative frozen section performed?:\n- "  + box_7+ "\n";

        var box_8 = $("#box8").val();
        captext += "\nEosinophilic inflammation:\n- "  + box_8+ "\n";

        var box_9 = $("#box9").val();
        captext += "\nArterial adventitial fibromuscular dysplasia:\n- "  + box_9+ "\n";

        var box_10 = $("#box10").val();
        captext += "\nAbundant large submucosal ganglia:\n- "  + box_10+ "\n";

        var box_11 = $("#box11").val();
        captext += "\nActive enterocolitis:\n- "  + box_11+ "\n";

        var box_12 = $("#box12").val();
        if (box_12.length  > 0){
            captext += "\nAny additional findings:\n- "  + box_12 + "\n";
        }



        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });

    // toggle sentence case in final diagnosis

});


