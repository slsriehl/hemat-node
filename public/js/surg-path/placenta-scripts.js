$(window).on('load', function(){
// Hide dialogs on start
    $('.twin_dialog').dialog({autoOpen:false});

    $('.umbilical').dialog({autoOpen:false});

    $('.dialog-extent').dialog({autoOpen:false});


// Plaenta GA validation - Prevent entering beyond GA max or min
    $("#plac_age").on("input", function(e){
        if ($(this).val().length > 1){
            var num = Number($(this).val()); // this input
            var max = 44; // get max input
            var min = 19;
            if (num > max){ // prevent any inputs
                console.log("node numeric validation error");
                e.preventDefault();
                $(this).val('44');
            }
            if (num < min){
                console.log("node numeric validation error");
                e.preventDefault();
                $(this).val('19');
            }
        }

        });

// Plaenta weight validation - Prevent entering 2000 grams or <50 grams
    $("#plac_wt").on("input", function(e){
            if ($(this).val().length > 1){
                var num = Number($(this).val()); // this input
                    var max = 2000; // get max input
                    if (num >= max){ // prevent any inputs
                        console.log("placenta weight error");
                        alert('Weight greater than 2000g are not allowed, please check your entry');
                        e.preventDefault();
                        $(this).val('');
                    }
            }
    });

// Adjust headers for twin placentas
    $('#plac_dx').on("change", function(){
        var sel = $(this).val();
        if (sel == "partType501"){
            $(".umbilical_0").hide();
            $('.twin_dialog').dialog("open").dialog({
                modal: 'true',
                buttons: {
                    "OK": function () {
                        var twintype = $('#twintype').val();
                        var twinAvessel = $('.umbilical_1').val();
                        twinAvessel = twinAvessel.charAt(0).toUpperCase() + twinAvessel.slice(1);
                        var twinBvessel = $('#umbilical_4').val();
                        var partlength = 499 + Object.keys(partTypes).length;
                        var dxlength = 570;
                        var mxlength = 570;
                        var twindx = twintype.toLowerCase();
                        for (var i = 500; i < dxlength; i++) {
                            if (dxLines.hasOwnProperty("dxLine" + i)) {
                                dxLines["dxLine" + i] = dxLines["dxLine" + i]
                                                        .replace(/MEMBRANES: /, 'MEMBRANES (' + twintype + '): ')
                                                        .replace(/CORD:/, 'CORDS (x2): Twin A: ')
                                                        .replace(/Three/, twinAvessel)
                                                        .replace(/cord/, "and Twin B: "+twinBvessel+" vessel cords");
                            }
                        }
                        for (var j = 500; j < 512; j++) {
                            if (mxLines.hasOwnProperty("mxLine" + j)) {
                                console.log("this fired");
                                console.log("mxLine:\n"+mxLines.mxLine500);
                                mxLines["mxLine" + j] = mxLines["mxLine" + j].replace(/Sections of the umbilical cord confirm .* vessels/, 'Sections from the ' + twindx + ' twin placentas show similar findings and are described together. The umbilical cords (Twin A: '+twinAvessel.toLowerCase() + ' vessel and Twin B: '+twinBvessel.toLowerCase()+' vessel) are');
                            }
                        }
                        $('#partType501').prop('disabled', false);
                        setTimeout(function () {
                            $("#partType301").trigger('click')
                        }, 100);
                        $(".twin_dialog").dialog("close");
                    }
                }
            });
        } else {
            $(".umbilical_0").show();
        }
        });

// PLACENTA PERCENTAGE REFERENCE RANGE AND DATA MODIFIERS
    $('.getref').on('click', function () {
        var partTypes = $.extend(true, {}, partJson); // extended original JSON to this variable, so header replaces are reset on new values entered

        var plac_ga = $('#plac_age').val();
        var plac_weight = $('#plac_wt').val();
        var wk = parseFloat($('#plac_age').val());
        var plac_wt_num = Number($('#plac_wt').val());
        var plac_ref = $('#reference').val();
        var plac_cite = $('#reference').find(":selected").data("ref");
        var plac_type = $("#plac_type").val();
        if (plac_weight.length <1){
            alert("You forgot to enter a placenta weight!");
            return;
        }
        // GET PLACENTA PERCENTILES
        if( plac_type == "partType501" ){ // twin
            console.log("twin reference");
            var wkObj = pinar_twin['wk' + wk];
        } else {
            if (plac_ref == "1"){
                console.log("pinar single");
                wkObj = pinar_single['wk' + wk];
            } else if (plac_ref == "2"){
                console.log("boyd single");
                wkObj = boyd_single['wk' + wk];
            }
        }

        if (wkObj) {
            console.log("WkObj exists as: "+wkObj);
            var percentiles = $.map(wkObj, function (value, key) {
                return {
                    plac_wt_num: Number(value),
                    percentile: key.substr(1)
                };
            }).sort(function (a, b) {
                return a.plac_wt_num - b.plac_wt_num; // ascending sort returned array
            });


            var upperIndex = -1;

            $.each(percentiles, function (i, obj) {
                if (obj.plac_wt_num > plac_wt_num) {
                    // when the percentiles[plac_wt_num] value first exceeds the user plac wt,
                    // return the index position and stop the function
                    upperIndex = i;
                    // if user plac wt is greater than all percentile weights, upperIndex remains -1
                    return false;
                }
            });

            console.log("Upper Index: "+upperIndex);

            var lower, upper;
            var plac_range;
            if (upperIndex > 0) { // meaning, if user plac wt falls between 0 and 90th pctille
                lower = percentiles[upperIndex - 1].percentile; // assign bottom delimiter
                upper = percentiles[upperIndex].percentile; // assgn upper delimiter
                $.each(partTypes, function(key){
                    partTypes[key] = partTypes[key]
                        .replace(/between .* and/, "between "+lower+ " and")
                        .replace(/and .* %ile/, "and "+upper+" %ile");
                });
                plac_range = "Between "+lower+" and "+upper+" percentiles";
            } else if (upperIndex === 0) { // meaning, user plac wt falls below 10th pctiles
                lower = 'xx';
                upper = percentiles[upperIndex].percentile;
                $.each(partTypes, function(key){
                    partTypes[key] = partTypes[key]
                        .replace(/between .* %ile/, "<"+upper+ " %ile");
                });
                plac_range = "Less than "+upper+" percentile";
            } else { // meaning, user plac wt falls above 90th pctiles
                lower = percentiles[percentiles.length - 1].percentile;
                upper = 'ZZ';
                $.each(partTypes, function(key){
                    partTypes[key] = partTypes[key]
                        .replace(/between .* %ile/, ">"+lower+ " %ile");
                });
                plac_range = "Greater than "+lower+" percentile";
            }

            $.each(partTypes, function(key){
                partTypes[key] = partTypes[key]
                    .replace(/\d+ WEEKS/, plac_ga+" WEEKS")
                    .replace(/\d+ grams/, plac_weight+" grams")
            });

            $(".plac-range").val(plac_range);
            $(".ref").text(plac_cite);

            // *********************************************
            // Send placenta reference data to database
            // *********************************************
            console.log("Form submit called");
            // Set placenta weights data object
            let placObj = {};

            $("#plac_save").on("submit", function(e){
                //don't reload page
                e.preventDefault();
                e.stopImmediatePropagation();
                console.log("Form submit after e.preventDefault");

                //define ajax request data obj

                placObj.ga = $('#plac_age').val();
                placObj.weight = $('#plac_wt').val();
                placObj.twin = $('#plac_type option:selected').data('twin');

                $.ajax({
                    url: "https://ipapi.co/json/",
                    type: 'GET',
                    success: function(json)
                    {
                        placObj.country = json.country;
                        placObj.city = json.city;
                        placObj.state = json.region;
                        console.log("Geolocation called");

                    },
                    error: function(err)
                    {
                        console.log("Geolocation Request failed, error= " + err);
                    }
                }).done(function(response) {
                    console.log(".done block called");

                    //ajax call to save new placenta object in the db when geoloc is done
                    $.ajax({
                        url: '/placenta/add',
                        type: 'POST',
                        data: placObj,
                        dataType: "json",
                        cache: false
                    });
                    console.log("Data to DB", placObj);
                });
                return false;
            });
        } else { // when reference ranges aren't available
            console.log("no data: "+wkObj);
            $.each(partTypes, function(key){
                partTypes[key] = partTypes[key]
                    .replace(/\d+ WEEKS/, plac_ga+" WEEKS")
                    .replace(/\d+ grams/, plac_weight+" grams")
                    .replace(/\(.*\)/, "(No reference data available)")
            });

            plac_range = "No reference data available";
            $(".plac-range").val(plac_range);
            $(".ref").text(plac_cite);

        }

        // add final header
        var head = '';
        if( plac_type == "partType501" ) {
            head = partTypes.partType500.replace(/DELIVERY/, 'TWIN DELIVERY');
            $("#outPut-3").val(head).trigger("input");
            $("#outPut-4").val("Placenta Weights Reference: "+plac_cite+"\n\n").trigger("input");
        } else {
            head = partTypes.partType500;
            $("#outPut-3").val(head).trigger("input");
            $("#outPut-4").val("Placenta Weights Reference: "+plac_cite+"\n\n").trigger("input");
        }
    });

});


//***************************************************************************************//

// # UMBILICAL CORD VESSEL MODIFIERS
    $('.umbilical_0').on('change', function(){
        var sel = $(this).val();
        var dxlength = 570;
        sel = sel.charAt(0).toUpperCase() + sel.slice(1);
        for(var i=500; i<dxlength; i++){
            if(dxLines.hasOwnProperty("dxLine"+i)){
                dxLines['dxLine'+i] = dxLines['dxLine'+i].replace(/Three/g, sel).replace(/abnormality/, 'inflammation');
            }
            if (mxLines.hasOwnProperty("mxLine"+i)){
                mxLines['mxLine'+i] = mxLines['mxLine'+i].replace(/three/g, sel.toLowerCase());

            }
        }
    });

// UMBILICAL VASCULITIS VS FUNISITIS
    $('#_dxLine511').on('mousedown', function(e) {
        // stop normal checkbox change for label mousedown
        e.preventDefault();
        // get closest checkbox to this label
        var que = $(this).find('input').attr('id');
        // disable the checkbox
        $("#" + que).prop('checked', false).prop("disabled", true);
        // if it is not checked, then do dialog pop-up
        if (!$("#" + que).is(":checked")) {
            $('.umbilical').dialog("open").dialog({
                close: function () {
                    var vesnum = $('.umbilical_1').val();
                    var vesinf = $('#umbilical_2').val();
                    var funis = $('#umbilical_3').val();
                    var dxlength = 570;
                    var mxlength = 570;
                    if (vesnum != 'three') {
                        for (var i = 500; i < dxlength; i++) {
                            if (dxLines.hasOwnProperty("dxLine" + i)) {
                                dxLines['dxLine' + i] = dxLines['dxLine' + i].replace(/\(.* vessel\)/, "(" + vesnum + " vessel)");
                            }
                        }
                        if (vesnum == "one") {
                            for (var j = 500; j < mxlength; j++) {
                                if (mxLines.hasOwnProperty("mxLine" + j)) {
                                    mxLines['mxLine' + j] = mxLines['mxLine' + j].replace(/confirm .* vessels/, "confirm " + vesnum + " vessel");
                                }
                            }
                        } else {
                            for (var j = 500; j < mxlength; j++) {
                                if (mxLines.hasOwnProperty("mxLine" + j)) {
                                    mxLines['mxLine' + j] = mxLines['mxLine' + j].replace(/confirm .* vessel/, "confirm " + vesnum + " vessels");
                                }
                            }
                        }
                    }
                    for (var i = 500; i < dxlength; i++) {
                        if (dxLines.hasOwnProperty("dxLine" + i)) {
                            dxLines['dxLine' + i] = dxLines['dxLine' + i].replace(/\(.* vessel\)/, "(" + vesinf + " vessel)");
                        }
                    }
                    for (var j = 500; j < mxlength; j++) {
                        if (mxLines.hasOwnProperty("mxLine" + j)) {
                            mxLines['mxLine' + j] = mxLines['mxLine' + j].replace(/(, \w+? )(?! of)/g, ", " + vesinf+"$");
                        }
                    }

                    if (funis == '1') { // Funisitis present
                        for (var i = 500; i < dxlength; i++) {
                            if (dxLines.hasOwnProperty("dxLine" + i)) {
                                dxLines['dxLine' + i] = dxLines['dxLine' + i].replace(/@@/, 'with');
                            }
                        }
                        for (var j = 500; j < mxlength; j++) {
                            if (mxLines.hasOwnProperty("mxLine" + j)) {
                                mxLines['mxLine' + j] = mxLines['mxLine' + j].replace(/#extends/, 'extends');
                            }
                        }
                    } else if (funis == '2') { // necrotizing funisitis
                        for (var i = 500; i < dxlength; i++) {
                            if (dxLines.hasOwnProperty("dxLine" + i)) {
                                dxLines['dxLine' + i] = dxLines['dxLine' + i].replace(/@@/, 'with necrotizing');
                            }
                        }
                        for (var j = 500; j < mxlength; j++) {
                            if (mxLines.hasOwnProperty("mxLine" + j)) {
                                mxLines['mxLine' + j] = mxLines['mxLine' + j].replace(/#extends into the surrounding Wharton's jelly/, "extends to the surrounding Wharton's jelly with formation of necrotizing aggregates");
                            }
                        }
                    } else if (funis == '3') { // no funisitis
                        console.log("No funisitis");
                        for (var i = 500; i < dxlength; i++) {
                            if (dxLines.hasOwnProperty("dxLine" + i)) {
                                dxLines['dxLine' + i] = dxLines['dxLine' + i].replace(/@@/, 'without');
                            }
                        }
                        for (var j = 500; j < mxlength; j++) {
                            if (mxLines.hasOwnProperty("mxLine" + j)) {
                                mxLines['mxLine' + j] = mxLines['mxLine' + j].replace(/#extends/, 'does not extend');
                            }
                        }
                    }

                    $('#dxLine511').prop('disabled', false); // programmatically resume click event after pause
                    setTimeout(function () {
                        $("#dxLine511").trigger('click')
                    }, 100);
                }
            });
        };
    });

// LESION EXTENT MODIFIER
    $('.extent').on('mousedown', function(e){
        // stop normal checkbox change for label mousedown
        e.preventDefault();
        // get closest checkbox to this label
        var que = $(this).find('input').attr('id');
        console.log("label id: "+que);
        // disable the checkbox
        $("#" + que).prop('checked', false).prop("disabled", true);
        // if it is not checked, then do dialog pop-up
        if (!$("#" + que).is(":checked")) {
            $('.dialog-extent').dialog("open").dialog({
                modal: 'true',
                buttons: {
                    "OK": function () {
                        var sel = $('#extent-value').val();
                        var dxlength = 570;
                        var mxlength = 570;
                        for (var j = 500; j < mxlength; j++) {
                            if (mxLines.hasOwnProperty("mxLine" + j)) {
                                mxLines['mxLine' + j] = mxLines['mxLine' + j].replace(/\[.*\]|focal|diffuse|patchy/, sel);
                            }
                        }
                        for (var i = 500; i < dxlength; i++) {
                            if (dxLines.hasOwnProperty("dxLine" + i)) {
                                dxLines['dxLine' + i] = dxLines['dxLine' + i].replace(/\[.*\]|focal|diffuse|patchy/, sel);
                            }
                        }
                        $("#" + que).prop('disabled', false);

                        setTimeout(function () {
                            $("#" + que).trigger('click')
                        }, 100);

                        $(".dialog-extent").dialog('close');
                    }
                }
            });
        };
    });



// **** ADD MICROS WITH ONE-CLICK UNDO *****//
//											//
//											//
// temporary holder for checkbox id
    var part_choice  = null;
    var diag_choice  = null;
    var micro_choice = null;
    var comm_choice  = null;

// new text
    var micro_text = $('#outPut-2').val();
    var final_text = $('#outPut-3').val();
    var comm_text  = $('#outPut-4').val();


// Retain any manual edits within textarea
    $('textarea').on("input", function(){
        if ($(this).is('#outPut-3')){
            final_text = $(this).val();
          //  console.log("final text input change:"+final_text);
        }
        else if ($(this).is('#outPut-2')){
            micro_text = $(this).val();
        }
        else if ($(this).is('#outPut-4')){
            comm_text = $(this).val();
        }
    });

// old micro text to revert to
    var final_old = '';
    var micro_old = '';
    var comm_old  = '';

// fill final diagnosis textbox
    function print_final() {
        if (part_choice !== null) {
            final_text += partTypes[part_choice] + '';
            console.log("final text print function:"+final_text);

            part_choice = null;
            $('input:checkbox[id*="dxLine"]').removeAttr('checked');
            $('input:checkbox[id*="mxLine"]').removeAttr('checked');
            $('#outPut-3').val(final_text);
        }
        else if (diag_choice !== null) {
            final_text += dxLines[diag_choice] + '';
            diag_choice = null;
            $('#outPut-3').val(final_text);
        }
    }

// fill micros textbox
    function print_micro() {
        if (micro_choice !== null) {
            micro_text += mxLines[micro_choice] + '\n';
            micro_choice = null;
            $('#outPut-2').val(micro_text);
        }
    }

// fill comment textbox
    function print_comm() {
        if (comm_choice !== null) {
            comm_text += comLines[comm_choice] + '';
            comm_choice = null;
            $('#outPut-4').val(comm_text);
        }
    }



// Micros: add new selection to list, unless unchecked
    $('input:checkbox').on('click', function () {
        if ($(this).attr('id').indexOf('partType') > -1){
            if ($(this).is(':checked')) {
                part_choice = $(this).attr('id');
                final_old = final_text;
                print_final();
            } else {
                var del = $(this).attr('id');
                var re = new RegExp(partTypes[del] + '$'); // assign RegExp to this value + '$' last occurrence
                final_old = final_text.replace(re, '');
                final_text = final_old;
                $('#outPut-3').val(final_old); // if unchecked, textarea = prior text
            }
        }
        else if ($(this).attr('id').indexOf('dxLine') > -1){
            if ($(this).is(':checked')) {
                diag_choice = $(this).attr('id');
                final_old = final_text;
                print_final();
            } else {
                var del = $(this).attr('id');
                // var re = new RegExp(dxLines[del] + '$'); // assign RegExp to this value + '$' last occurrence
                final_old = final_text.replace(/.*\n/gm, ''); // delete diagnosis with uncheck
                final_text = final_old;

                $('#outPut-3').val(final_old); // if unchecked, textarea = prior text
            }
        }
        else if ($(this).attr('id').indexOf('mxLine') > -1){
            if ($(this).is(':checked')) {
                micro_choice = $(this).attr('id');
                micro_old = micro_text;
                print_micro();
            } else {
                var del = $(this).attr('id');
                micro_old = micro_text.replace(mxLines[del], '');
                micro_text = micro_old;
                $('#outPut-2').val(micro_old); // if unchecked, textarea = prior text
            }
        }
        else if ($(this).attr('id').indexOf('comLine') > -1){
            if ($(this).is(':checked') && $(this).attr('id').indexOf('100') > -1){
                $('#docinput').dialog({
                    close: function(){
                        var doc = $('#doc').val();
                        comLines.comLine100 = comLines.comLine100.replace(/(with ).*(?= on)/, 'with '+doc);
                        comm_choice = 'comLine100';
                        comm_old = comm_text;
                        print_comm();}
                });
            }
            else if ($(this).is(':checked') && $(this).attr('id').indexOf('100')  == -1) {
                comm_choice = $(this).attr('id');
                comm_old = comm_text;
                print_comm();
            }
            else {
                var del = $(this).attr('id');
                comm_old = comm_text.replace(comLines[del], '');
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
    // store your text to localStorage when someone click the link
    var textToPass = $('#outPut-2').val()+'\n\n'+$('#outPut-3').val()+'\n\n'+$('#outPut-4').val();
    $('#outPut-combine').val(textToPass);
    $('#combined-report').modal("show");
    dataObj.singleSection = $('#outPut-combine').val();
    makeCreatePdfBtn();
});

// ======================================================================//

/**
 * Created by Chandra Krishnan on 1/23/2018.
 */
