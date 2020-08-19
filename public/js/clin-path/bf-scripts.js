$(window).on('load', function(){
/*
    window.onerror = function(msg, linenumber) {
        alert('Oops! I think you missed picking a selection somewhere. Check the form below and try again\n'+msg+"\n"+linenumber);
        return true;
    }
    */

//********** POP-UPS ********************//
$("#box1").on("change", function(){
   var sel = $(this).val();
    if ($.inArray("mxLine021", sel) > -1 ) {
        $("#box1b").show();
    } else {
        $("#box1b").hide();
    }
});

$("#box5").on("change", function(){
    var sel = $(this).val();
    if ($.inArray('ORO', sel) > -1) {
        $(".lipid").show();
    } else {
        $(".lipid").hide();
    }

    if ($.inArray('Fe', sel) > -1) {
        $(".iron").show();
    } else {
        $(".iron").hide();
    }

    if ($.inArray('GMS', sel) > -1) {
        $(".fungus").show();
    } else {
        $(".fungus").hide();
    }

});

$("#cell_count").on("change", function(){
   if ($(this).is(":checked")){
       $(".count").show();
   } else {
       $(".count").hide();
   }

});

$("#cellblock").on("change", function(){
    if ($(this).is(":checked")){
        $(".cblock").show();
    } else {
        $(".cblock").hide();
    }

});

$(".double").on("change", function(){
   $(".dbl-text").toggle();
});



// ********* WRITE REPORT ***************//


$('#done').on('click', function(){

// get assign the values from each text input
        var gross = '';
        var parts = []; // place holder to add part types
        var proc = []; // place holder for procedure types
        var clinical = '';
        var cells_maj = [];  //place holder to add  major cell types
        var cells_min = [];  //place holder to add minor cell types
        var microDesc = []; // place holder to add micro descriptors
        var micro = '';
        var diag = '';
        var stains = []; //place holder to add stains
        var blood = '';
        var comArr = []; // array of comments
        var comment = ''; // comment text

// Clinical history
        var box_0 = $("#box0").val();
        clinical += "CLINICAL HISTORY:\n\n" + box_0.replace(/\w\S*/, function (txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}) + "\n";

// Gross description
        var box_1 = $('#box1').val(); // part type
        var box_1b = $('#box1b').val(); // other part type
        if ($.inArray("mxLine021", box_1) > -1){
            mxLines.mxLine021 = mxLines.mxLine021.replace(/.*/, box_1b);
        }
        $.each(box_1, function(){
           parts.push(mxLines[this]);
        });

        $('#box1 option:selected').each(function(){
            proc.push($(this).data("proc"))
        }); // get procedure type


        var box_2 = $("#box2").val(); // volume
        var box_3 = $("#box3").val(); // consistency
        var box_4 = $("#box4").val(); // color
        var box_5 = $("#box5").val(); // stains ordered
        var cbcount = toWords($("#cb_count").val()); // cb # of blocks
        var cblabel = $("#cb_label").val(); // cb block label


        if (proc.length > 1){
            gross =  arrayToSentence(parts).toUpperCase() + ", ASPIRATE: ";
        } else {
            gross = arrayToSentence(parts).toUpperCase() + ", " + proc + ": ";
        }

        if ($(".double").is(":checked")){
            gross += "Received without fixative are two separate specimen containers labeled '"+arrayToSentence(parts)+"', which are combined and result in "+box_2+"ml of " +
                box_3 + ", " + box_4+ " fluid for cytocentrifuge preparation. ";

        } else {
            gross += "Received without fixative and labeled '"+arrayToSentence(parts)+
                "' is a single specimen container containing "+box_2+"ml of " +
                box_3 + ", " + box_4+ " fluid for cytocentrifuge preparation. ";

        }

        // total cytology slides gross
        gross += "\n\nTotal cytology slides:\t "+box_5.length +
                "\nCytology stains:\t "+arrayToSentence(box_5)+"\n";

    // cell block gross
    if ($("#cellblock").is(":checked")){
        gross += "\nA portion of the sample is used to prepare "+ cbcount +"cell block(s), labeled: "+cblabel+".";
    }


// Microscopic description
        var box_6 = $("#box6").val(); // cellularity


        // Collect check box values for major cell types
        $(".cells-major").find(':checkbox').each(function (){
            if ($(this).is(":checked")){
               // alert ("cells major clicked");
                var sel = $(this).attr("id");
                // not checked, do program
                cells_maj.push(mxLines[sel]);
            } else {
                // do nothing
            }
        });

        // Collect check box values for minor cell types
        $(".cells-minor").find(':checkbox').each(function (){
            if ($(this).is(":checked")){
              //  alert ("cells minor clicked");
                var sel = $(this).attr("id");
                // not checked, do program
                cells_min.push(mxLines[sel]);
                console.log("minor cells"+cells_min);
            } else {
                // do nothing
            }
        });

        // adjust micro for two specimen sites
        if ($(".double").is(":checked")){
            micro = "The cytospin slides from the '"+ arrayToSentence(parts) +"' combined sample consist predominantly of "+arrayToSentence(cells_maj);
        } else {
            micro = "The cytospin slides from the '"+ arrayToSentence(parts) +"' sample consist predominantly of "+arrayToSentence(cells_maj);
        }
            if (cells_min.length > 0 && parts.length === 1){
                micro += " and lesser "+arrayToSentence(cells_min)+". "
            } else if (cells_min.length > 0 && parts.length > 1) {
                micro += ", with lesser "+arrayToSentence(cells_min)+". "
            } else {
                micro += ". "
            }

        // add any morphologic descriptors
        $("input:checkbox").each(function(){
            if ($(this).is(":checked") && $(this).data().hasOwnProperty("desc")){
                var sel = $(this).data("desc");
                microDesc.push(mxLines[sel]);
            }
        })

        if (microDesc.length > 0){
            $.each(microDesc, function(index, val){ // loop through array and return value to end of micro
                micro += val;
            });
        }

    // Add any microbiology or pertinent negatives
        $(".cells-other").find(':checkbox').each(function (){
            if ($(this).is(":checked")){
                //  alert ("cells minor clicked");
                var sel = $(this).attr("id");
                // not checked, do program
                micro += mxLines[sel]+". ";
            } else {
                // do nothing
            }
        });

    // Add cell block description
        if ($("#cellblock").is(":checked")){
            var cb_cell = $("#cb_cellularity").val();
            var cb_pop = $("#cb_population").val();
            micro += mxLines[cb_cell] + mxLines[cb_pop];
        }


   // Special studies
        var box_9 = $("#box9").val();
        var box_10 = $("#box10").val();
        var box_11 = $("#box11").val();

        // ORO
        if ($.inArray('ORO', box_5) > -1) {
            if (box_9 == 'Not applicable') {
                $('#error').html('<h5>You forgot the ORO stain!</h5>')
                $('#alert-modal').modal('show');
                $("#box9").focus();

            } else {
                micro += mxLines[box_9];
            }
        }

        // Fe
        if ($.inArray('Fe', box_5) > -1) {
            if (box_10 == 'Not applicable') {
                $('#error').html('<h5>You forgot the Fe stain!</h5>');
                $('#alert-modal').modal('show');
                $("#box10").focus();
            } else {
                micro += mxLines[box_10];
            }
        }

        // GMS
        if ($.inArray('GMS', box_5) > -1) {
            if (box_11 == 'Not applicable') {
                $('#error').html('<h5>You forgot the GMS stain!</h5>');
                $('#alert-modal').modal('show');
                $("#box11").focus();

            } else {
                micro += mxLines[box_11];
            }
        }

        // Any IHCs to cell block?
        if (typeof ihcout !== 'undefined') {
            micro += "\n\n"+ihcout;
        }

        // Manual cell count
        var box_13 = Number($("#box13").val()) || 0; // macropahges
        var box_14 = Number($("#box14").val()) || 0; // lymphocytes
        var box_15 = Number($("#box15").val()) || 0; // neutrophils
        var box_16 = Number($("#box16").val()) || 0; // eosinophils
        var box_17 = Number($("#box17").val()) || 0; // Mesothelial
        var box_18 = Number($("#box18").val()) || 0; // malignant

        var sum_diff = box_13 + box_14 + box_15 + box_16 + box_17 + box_18;
        console.log("diff sum:"+sum_diff);

        if ($("#cell_count").is(":checked")){
            if (sum_diff >100){
                alert('Your manual cell count adds up to more than 100%. Please check your inputs');
                $('#box13').focus();
                return;
            } else {
                micro += "\n\nManual differential:\n" +
                    "Macrophages:\t" + box_13 + "%\n" +
                    "Neutrophils:\t" + box_14 + "%\n" +
                    "Lymphocytes:\t" + box_15 + "%\n" +
                    "Eosinophils:\t" + box_16 + "%\n" +
                    "Mesothelial:\t" + box_17 + "%\n" +
                    "Malignant:\t " + box_18 + "%\n" +
                    "\n\nCPT code: 89051";
            }
        }

        // Final diagnosis
        if (proc.length > 1){
            diag =  arrayToSentence(parts).toUpperCase() + ", ASPIRATE:\n"+
                "- Predominance of "+arrayToSentence(cells_maj);
        } else {
            diag =  arrayToSentence(parts).toUpperCase() + ", "+proc+":\n"+
                "- Predominance of "+arrayToSentence(cells_maj);
        }
            $(".cells-other").find(':checkbox').each(function () {
                if ($(this).is(":checked")) {
                    diag += "\n- " + dxLines[$(this).data("diag")];
                }
            });

        // Comments
        // search through checkboxes to find any checked items that contain a data-com element, collect them
        $("input:checkbox").each(function(){
            if ($(this).is(":checked") && $(this).data().hasOwnProperty("com")){
                var sel = $(this).data("com");
                comArr.push(commLines[sel]);
            }
        })

        if (comArr.length > 0){
            diag = diag.replace(/$/, " (see comment)");
        }

        comment = comArr.join("");

        $('#outPut-1').val(micro);
        $('#outPut-2').val(diag);
        $('#outPut-3').val(gross);
        $('#outPut-4').val(comment);

				// get clinical history

        // store your text to localStorage when someone click the link

				if(!$('#alert-modal').hasClass('show')) {
					var textToPass =    "\n"+clinical+
                                        '\n\nMICROSCOPIC DESCRIPTION\n\n'+$('#outPut-1').val()+
                                        '\n\nFINAL DIAGNOSIS\n\n'+$('#outPut-2').val()+
                                        '\n\n\nCOMMENT\n\n'+$('#outPut-4').val()+
                                        '\n\n\nGROSS DESCRIPTION\n\n'+$('#outPut-3').val();

                        $('#outPut-combine').val(textToPass);

	            $('#combined-report').modal("show");
					dataObj.singleSection = $('#outPut-combine').val();
					makeCreatePdfBtn();
				}

    });




// ********************* Combined report function ***********************//
    // $('#writeReport').on('click', function () {
    //     // get clinical history
    //     var box_0 = $("#box0").val();
    //     clinical = "Clinical History\n\n" + box_0.join(', ').replace(/\w\S*/, function (txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}) + "\n";
		//
    //     // store your text to localStorage when someone click the link
    //     var textToPass = clinical+'\n\n'+$('#outPut-1').val()+'\n\n'+$('#outPut-2').val()+'\n\n'+$('#outPut-3').val()+'\n\n'+$('#outPut-4').val();
    //     $('#outPut-combine').val(textToPass);
    //     $('#combined-report').modal("show");
    // });




















});

/**
 * Created by chandrakrishnan on 5/16/2017.
 */
