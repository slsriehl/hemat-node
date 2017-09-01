$(window).on("load", function (){
    // Smart selection scripts

    // Change output on RBC counts
    $('#box3').on('change', function(){
        var num = parseInt($(this).val(), 10);
        console.log(num);
        if (num > 9 && num <101){
            $('#box7 option:eq(1)').prop('selected', true).trigger('change');
            $('#box7 option:eq(2)').prop('selected', false).trigger('change');
            $('#box10 option:eq(1)').prop('selected', true).trigger('change');
            $('#box10 option:eq(2)').prop('selected', false).trigger('change');
        }else if (num >= 101 && num <=900){
            $('#box7 option:eq(1)').prop('selected', false).trigger('change');
            $('#box7 option:eq(2)').prop('selected', true).trigger('change');
            $('#box10 option:eq(1)').prop('selected', false).trigger('change');
            $('#box10 option:eq(2)').prop('selected', true).trigger('change');
        }else if (num > 900){
            $('#box7 option:eq(1)').prop('selected', false).trigger('change');
            $('#box7 option:eq(2)').prop('selected', false).trigger('change');
            $('#box7 option:eq(3)').prop('selected', true).trigger('change');
            $('#box10 option:eq(1)').prop('selected', false).trigger('change');
            $('#box10 option:eq(2)').prop('selected', true).trigger('change');
        }else if (num <= 9){
            $('#box7 option:eq(1)').prop('selected', false).trigger('change');
            $('#box7 option:eq(2)').prop('selected', false).trigger('change');
            $('#box10 option:eq(1)').prop('selected', false).trigger('change');
            $('#box10 option:eq(2)').prop('selected', false).trigger('change');

        }
    });

    // Cell types
    $('#box6').on('change', function(){
        var sel = $(this).val();
        console.log("cell types: "+sel);
        // neutrophil predominance
        if (sel.indexOf('mxLine203') >=0){
            $('#box10 option:eq(4)').prop('selected', true).trigger('change');
        }else {
            $('#box10 option:eq(4)').prop('selected', false).trigger('change');
        }

        // bone marrow
        if (sel.indexOf('mxLine209') >=0){
            $('#box10 option:eq(5)').prop('selected', true).trigger('change');
        }else {
            $('#box10 option:eq(5)').prop('selected', false).trigger('change');
        }

        // hemosiderin histiocytes
        if (sel.indexOf('mxLine207') >=0){
            console.log('has hemosid in it');
            $('#box10 option:eq(14)').prop('selected', true).trigger('change');
            $('#box11 option:eq(6)').prop('selected', true).trigger('change');
        } else {
            $('#box10 option:eq(14)').prop('selected', false).trigger('change');
            $('#box11 option:eq(6)').prop('selected', false).trigger('change');
        }
    });

    // Abnormal cells are present
    $('#box8').on('change', function () {
       var sel = $(this).val();
       var cells = $('#box7').val();
       var opt = $(this).prop('selectedIndex');

       if (sel != 'mxLine230') {
           $('#box10 option:eq(0)').prop('selected', false).toggle('disabled').trigger('change');
           // rare blasts seen
           if (opt == 1) {
               $('#box10 option:eq(6)').prop('selected', true).trigger('change');
               $('#box11 option:eq(1)').prop('selected', true).trigger('change');
           } else {
               $('#box10 option:eq(6)').prop('selected', false).trigger('change');
               $('#box11 option:eq(1)').prop('selected', false).trigger('change');
           }
           // blasts are seen
           if (opt == 2 || opt == 3) {
               $('#box10 option:eq(7)').prop('selected', true).trigger('change');
               $('#box11 option:eq(2)').prop('selected', true).trigger('change');
               if (cells == 'mxLine222' || cells == 'mxLine223'){
                   console.log('')// peripheral blood contamination addition to comment
                   commLines.commLine103 = commLines.commLine103.replace(/___\./, '___, and likely represents peripheral contamination. ');
               }
           } else {
               $('#box10 option:eq(7)').prop('selected', false).trigger('change');
               $('#box11 option:eq(2)').prop('selected', false).trigger('change');
           }
           // rare atypical cells present
           if (opt == 4) {
               $('#box10 option:eq(8)').prop('selected', true).trigger('change');
               $('#box11 option:eq(4)').prop('selected', true).trigger('change');
           } else {
               $('#box10 option:eq(8)').prop('selected', false).trigger('change');
               $('#box11 option:eq(4)').prop('selected', false).trigger('change');
           }
           // tumor cells present
           if (opt == 5) {
               $('#box10 option:eq(9)').prop('selected', true).trigger('change');
               $('#box11 option:eq(5)').prop('selected', true).trigger('change');
           } else {
               $('#box10 option:eq(9)').prop('selected', false).trigger('change');
               $('#box11 option:eq(5)').prop('selected', false).trigger('change');
           }
           // HLH present
           if (opt == 6) {
               $('#box10 option:eq(13)').prop('selected', true).trigger('change');
               $('#box11 option:eq(3)').prop('selected', true).trigger('change');
           } else {
               $('#box10 option:eq(13)').prop('selected', false).trigger('change');
               $('#box11 option:eq(3)').prop('selected', false).trigger('change');
           }
       }else {
           $('#box10 option:eq(0)').prop('selected', true).toggle('disabled').trigger('change');
       }
    });

    // Microorganisms
    $('#box9').on('change', function(){
       var sel = $(this).val();
       if (sel != 'mxLine240') {
           // few intracellular bugs
           if (sel == 'mxLine241') {
               $('#box10 option:eq(10)').prop('selected', true).trigger('change');
               $('#box11 option:eq(0)').prop('selected', true).trigger('change');
           } else {
               $('#box10 option:eq(10)').prop('selected', false).trigger('change');

           }
           // many intracellular bugs
           if (sel == 'mxLine242') {
               $('#box10 option:eq(11)').prop('selected', true).trigger('change');
               $('#box11 option:eq(0)').prop('selected', true).trigger('change');
           } else {
               $('#box10 option:eq(11)').prop('selected', false).trigger('change');

           }
           //  fungus present
           if (sel == 'mxLine243') {
               $('#box10 option:eq(12)').prop('selected', true).trigger('change');
               $('#box11 option:eq(0)').prop('selected', true).trigger('change');
           } else {
               $('#box10 option:eq(12)').prop('selected', false).trigger('change');
           }
       }  else {
           $('#box10 option:eq(10)').prop('selected', false).trigger('change');
           $('#box10 option:eq(11)').prop('selected', false).trigger('change');
           $('#box10 option:eq(12)').prop('selected', false).trigger('change');
           $('#box11 option:eq(0)').prop('selected', false).trigger('change');

       }


    });

    // report output

    $('#writeReport').on('click', function () {

// assign the values from each text input
        var report_m;
        var report_f;
        var report_c;
        var report_g;
        var type = $('#spc_type').val();

        var box_1 = $("#box1").val(); // Volume

        var box_2 = mxLines[$("#box2").val()]; // gross description

        var box_3 = $("#box3").val(); // rbc count
        if (box_3 == 0){
            box_3 = "<1";}

        var box_4 = $("#box4").val(); // wbc count
        if (box_4 == 0){
            box_4 = "<1";}

        var box_5 = mxLines[$("#box5").val()];// cellularity

        var box_6 = [];
        $("#box6 option:selected").each(function() {
            box_6.push(mxLines[$(this).val()]); // create array of mxLines from selected option
            console.log(box_6);
        });

        if (box_6.length >2){
            box_6 = box_6.slice(0, box_6.length - 1).join(', ') + ", and " + box_6.slice(-1);}
        else {
            box_6 = box_6.join(' and ');
        }

        var box_7 = mxLines[$("#box7").val()];// rbc contaminants

        var box_8 = mxLines[$("#box8").val()]; // abnormal cells

        var box_9 = mxLines[$("#box9").val()]; // microorganisms

        var box_10 = []; //diagnoses
                $("#box10 option:selected").each(function() {
                    box_10.push(dxLines[$(this).val()]); // create arry of dxLines from selected option
                });

                    console.log("diagnoses: "+box_10);


        var box_11 = [];
           $("#box11 option:selected").each(function() {
            box_11.push(commLines[$(this).val()]); // create array of commLines from selected option
            }); //comments
            console.log("comments: "+box_11);

// MICRO
        report_m = 'The cytospin slides are '+box_5+box_6+'. ';

        if(box_7 != "None"){
            report_m += box_7+'. ';
        }
        report_m += box_8+'. ' +box_9+'. A manual differential on an uncentrifuged fluid sample yields '+box_3+' RBC/uL and '+box_4+' WBC/uL.\n\n';
        $('#outPut-1').val(report_m);

//FINAL DIAGNOSIS
        if (type == 2){
            report_f = 'CEREBROSPINAL FLUID, SHUNT ASPIRATE:\n- ' + box_10.join('\n- ');
        }else {
            report_f = 'CEREBROSPINAL FLUID, CYTOLOGY:\n- ' + box_10.join('\n- ');
        }
        $('#outPut-2').val(report_f);

//COMMENTS
            report_c = box_11.join('');

            $('#outPut-4').val(report_c);

// GROSS DESCRIPTION
        if (type == 2){
            report_g = 'CEREBROSPINAL FLUID, SHUNT ASPIRATE: Received without fixative, labeled with the patient\'s name and medical record number, is ' + box_1 + ' ml of ' + box_2 + ' fluid for cytocentrifuge preparation (Diff-Quik stained slides).'

        }else {
            report_g = 'CEREBROSPINAL FLUID, CYTOLOGY: Received without fixative, labeled with the patient\'s name and medical record number, is ' + box_1 + ' ml of ' + box_2 + ' fluid for cytocentrifuge preparation (Diff-Quik stained slides).'
        }
        $('#outPut-3').val(report_g);

				dataObj.micro = $('#outPut-1').val();
				dataObj.finals = $('#outPut-2').val();
				dataObj.gross = $('#outPut-3').val();
				dataObj.comments = $('#outPut-4').val();
				makeCreatePdfBtn();

    });

// COMBINE TO SINGLE REPORT
    // ********************* Combined report function ***********************//
    $('#combineReport').on('click', function () {
        // store your text to localStorage when someone click the link
        var textToPass = $('#outPut-1').val() +'\n\n'+$('#outPut-2').val()+'\n\n'+$('#outPut-3').val()+'\n\n'+$('#outPut-4').val();

        $('#outPut-combine').val(textToPass);
        $('#combined-report').modal("show");

    });


});



/**
 * Created by chandrakrishnan on 5/13/2017.
 */
