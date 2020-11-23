$(window).on('load', function(){

//********** POP-UPS ********************//

$("#box5").on("change", function(){
   var sel = $(this).val();
   if($.inArray("ORO", sel) > -1){
       $(".lipid").show();
    } else {
       $(".lipid").hide();
   }
    if($.inArray("Fe", sel) > -1){
        $(".iron").show();
    } else {
        $(".iron").hide();
    }
    if($.inArray("GMS", sel) > -1){
        $(".fungus").show();
    } else {
        $(".fungus").hide();
    }
    if($.inArray("cell count", sel) > -1){
        $(".count").show();
    } else {
        $(".count").hide();
    }
});

    $("#box6").on("change", function() {
        var sel = $(this).val();
        console.log(sel);
        if (sel == "mxLine158"){
            $(".blood").hide();
        } else {
            $(".blood").show();
            $(".blood option:eq(0)").prop('selected', true);
        }
    });


// ********* WRITE REPORT ***************//
$('#done').on('click', function(){

// get assign the values from each text input
        var micro = '';
        var diag = '';
        var stains = ['']; //place holder to add stains
        var cells = '';
        var blood = '';
        var gross = '';
        var comment = '';
        var clinical = '';

// Clinical history
        var box_0 = $("#box0").val();
        clinical += "Clinical History\n\n" + box_0.join(', ').replace(/\w\S*/, function (txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}) + "\n";

// Gross description
        var box_1 = $('#box1').val();
        var source_text = arrayToSentence(box_1).toLowerCase();
        var box_2 = $('#box2').val();
        var box_3 = $('#box3').val();
        var box_4 = $('#box4').val();
        var box_5 = $('#box5').val();

        var stains_list = box_5.join();

        var stains_num;
            if ($.inArray('cell count', box_5) > -1){
                stains_num = box_5.length - 1;
            } else {
                stains_num = box_5.length;
            }

        if ($('.double').is(':checked')){
            gross += "LUNG, "+box_1.join(', ').replace(/.*/, function(a) { return a.toUpperCase(); })+" BRONCHOALVEOLAR LAVAGE: Received without fixative are two specimen bottles, labeled with the patient's name and '"+box_1.join('\' and \'').replace(/.*/, function(a) { return a.toLowerCase(); })+"'. The specimens are combined to account for "+box_2+"ml of "+box_3.join(', ')+" "+box_4+" fluid. The following cytospin preparations are performed on the material: "+stains_num+" total slides prepared ("+stains_list+").\n\n";
        }
        else{
            gross += "LUNG, "+box_1.join(', ').replace(/lobe,/, 'and').replace(/.*/, function(a) { return a.toUpperCase(); })+", BRONCHOALVEOLAR LAVAGE: Received without fixative is a single specimen bottle, labeled with the patient's name and '"+box_1.join(', ').replace(/lobe,/, 'and').replace(/.*/, function(a) { return a.toLowerCase(); })+"'. The specimen accounts for "+box_2+"ml of "+box_3.join(', ')+" "+box_4+" fluid. The following cytospin preparations are performed on the material: "+stains_num+" total slides prepared ("+stains_list+").\n\n";
        }

// Microscopic description
        var box_6 = $("#box6").val();
        var box_7 = $("#box7").val();
        var box_8 = $("#box8").val();
        var box_9 = $("#box9").val();
        var box_10 = $("#box10").val();
        var box_11 = $("#box11").val();
        var box_12 = $("#box12").val();
        var box_20 = $("#box20").val();


        micro +=    "The cytospin slides from the '"+source_text+"' sampling are "+box_12+" and consist "+
                    mxLines[box_6]+ ". ";

        // Add any background blood description (unless user selects hemorrhage for cell mixture
        if (box_6 != "mxLine158"){
            micro+= mxLines[box_20]+". ";
        }
        if (box_20 == 'mxLine181') { // scant blood
            blood = 'dxLine107';
            comment += commLines.commLine109;
        } else if (box_20 == 'mxLine182') { // moderate blood
            blood = 'dxLine108';
            comment += commLines.commLine109;
        }

        // resume rest of microscopic description
            micro += mxLines[box_7]+ ". " + mxLines[box_8]+". ";

        // add cell mixture to diagnosis
        if (box_6 == 'mxLine150' || box_6 == 'mxLine151'){  // predom macs
            cells = 'dxLine100';
        } else if (box_6 == 'mxLine152'){  // mixed macs and neuts
            cells = 'dxLine102';
        } else if (box_6 == 'mxLine153' || box_6 == 'mxLine154'){  // mostly neuts
            cells = 'dxLine101';
        } else if (box_6 == 'mxLine155') { // squames
            cells = 'dxLine104';
        } else if (box_6 == 'mxLine156') { // mucoid debris
            cells = 'dxLine105';
        } else if (box_6 == 'mxLine157') { // necroinflammatory material
            cells = 'dxLine106';
        } else if (box_6 == 'mxLine158') { // hemorrhage
            cells = 'dxLine109';
            comment += commLines.commLine110;
        }


        // add microorganisms to diagnosis
        if (box_7 == 'mxLine203'){
            stains.push(dxLines.dxLine127);
            comment += commLines.commLine101;
        } else if (box_7 == 'mxLine201' && box_11 == 'Not applicable') {
            stains.push(dxLines.dxLine130);
        } else if (box_7 == 'mxLine204' && box_11 == 'Not applicable') {
            stains.push(dxLines.dxLine131);
        } else if (box_7 == 'mxLine205' && box_11 == 'Not applicable') {
            stains.push(dxLines.dxLine132);
        } else if (box_7 == 'mxLine206' && box_11 == 'Not applicable') {
            stains.push(dxLines.dxLine130);
            stains.push(dxLines.dxLine127);
        }

// ORO
        if ($.inArray('ORO', box_5) > -1) {
            if (box_9 == 'Not applicable') {
                $('#error').html('<h5>You forgot the ORO stain!</h5>')
                $('#alert-modal').modal('show');
            } else {
                micro += mxLines[box_9] + ". ";
                // add oro to finals
                if (box_9 == 'mxLine230') { // no ORO
                    stains.push(dxLines.dxLine122);
                } else if (box_9 == 'mxLine231') {// few ORO
                    stains.push(dxLines.dxLine123);
                } else if (box_9 == 'mxLine232') {// many ORO
                    if (box_6 == 'mxLine150' || box_6 == 'mxLine151') {// & few neuts
                        stains.push(dxLines.dxLine124); // aspiration
                        comment += commLines.commLine102; // aspiration comment
                    } else if (box_6 == 'mxLine152' || box_6 == 'mxLine153') { // many neuts
                        stains.push(dxLines.dxLine124); // aspiration
                        comment += commLines.commLine103; // aspiration vs injury comment
                    } else {
                        stains.push((dxLines.dxLine124).replace(/\(see comment\)/, '')); // aspiration
                    }
                }
            }
        }

// Fe
        if ($.inArray('Fe', box_5) > -1) {
            if (box_10 == 'Not applicable') {
                $('#error').html('<h5>You forgot the Fe stain!</h5>');
                $('#alert-modal').modal('show');
            } else {
                micro += mxLines[box_10] + ". ";
                // add fe to finals
                if (box_10 == 'mxLine233') { // no Fe
                    stains.push(dxLines.dxLine121);
                } else if (box_10 == 'mxLine234') {// few Fe
                    stains.push(dxLines.dxLine125);
                    comment += commLines.commLine107;
                } else if (box_10 == 'mxLine235') {// many Fe
                    stains.push(dxLines.dxLine126);
                    comment += commLines.commLine108;
                }
            }
        }

// GMS
        if ($.inArray('GMS', box_5) > -1) {
            if (box_11 == 'Not applicable') {
                $('#alert-modal').modal('show');
            } else {
                micro += mxLines[box_11] + ".\n";
                if (box_11 == 'mxLine236') { // GMS negative
                    stains.push(dxLines.dxLine140);
                    comment += commLines.commLine101;
                } else if (box_11 == 'mxLine237') { // GMS hyphae
                    stains.push(dxLines.dxLine141);
                    comment += commLines.commLine104;
                } else if (box_11 == 'mxLine238') { // GMS yeast
                    stains.push(dxLines.dxLine142);
                    comment += commLines.commLine104;
                } else if (box_11 == 'mxLine239') { // GMS pcp
                    stains.push(dxLines.dxLine143);
                    comment += commLines.commLine105;
                }
            }
        }

// BAL Differential
        var box_13 = Number($("#box13").val()) || 0;
        var box_14 = Number($("#box14").val()) || 0;
        var box_15 = Number($("#box15").val()) || 0;
        var box_16 = Number($("#box16").val()) || 0;

        var sum_diff = box_13 + box_14 + box_15 + box_16;
        console.log("diff sum:"+sum_diff);

        if ($.inArray('cell count', box_5) > -1){
            if (sum_diff >100){
                alert('Your BAL differential adds up to more than 100%. Please check your inputs');
                $('#box13').focus();
                return;
            } else {
                micro += "\n\nBAL leukocyte differential:\n" +
                    "Macrophages: " + box_13 + "%\n" +
                    "Neutrophils: " + box_14 + "%\n" +
                    "Lymphocytes: " + box_15 + "%\n" +
                    "Eosinophils: " + box_16 + "%\n\nCPT code: 89051";
            }
        }

         diag = "LUNG, "+box_1.join(', ').replace(/lobe,/, 'and').replace(/.*/, function(a) { return a.toUpperCase(); })+
                ", BRONCHOALVEOLAR LAVAGE:\n- " +
                dxLines[cells];

         if (blood.length >0){
             diag += "\n- " + dxLines[blood];
         }

         diag += stains.join('\n- ');



        $('#outPut-1').val(micro);
        $('#outPut-2').val(diag);
        $('#outPut-3').val(gross);
        $('#outPut-4').val(comment);

				// get clinical history
        clinical = "CLINICAL HISTORY\n\n" + box_0.join(', ').replace(/\w\S*/, function (txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}) + "\n";

        // store your text to localStorage when someone click the link

				if(!$('#alert-modal').hasClass('show')) {
					var textToPass =    "\n"+clinical+
                                        '\n\nMICROSCOPIC DESCRIPTION\n\n'+$('#outPut-1').val()+
                                        '\n\nFINAL DIAGNOSIS\n\n'+$('#outPut-2').val()+
                                        '\n\nCOMMENT\n\n'+$('#outPut-4').val()+
                                        '\n\nGROSS DESCRIPTION\n\n'+$('#outPut-3').val();

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
