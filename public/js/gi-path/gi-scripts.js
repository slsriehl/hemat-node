$(window).on('load', function(){

// load DOM scripts for auto hidden modal fields

    $(".duo_list").dialog({width: "450px", autoOpen: false});
    $(".sto_list").dialog({width: "450px", autoOpen: false});
    $(".eso_list").dialog({width: "450px", autoOpen: false});
    $(".col_list").dialog({width: "450px", autoOpen: false});
    $('.docinput').dialog({width: "500px", autoOpen:false});
    $('.granuloma').dialog({width: "450px", autoOpen:false});
    $('.tuft_list').dialog({width: "450px", autoOpen:false});
    $('.feg_list').dialog({width: "450px", autoOpen:false});

    $('#tuft_1, #tuft_3, #tuft_5').on('change', function(){
        var sel = $(this).val();
        var id = $(this).closest('td').next('td').find('select').attr('id');
        if (sel == 'Yes'){
            $('#'+id).show();
        } else {
            $('#'+id).hide();
        }
    });

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




// Adult micros activation
    $('.adultgi').on('change', function(){
        console.log('adultgi switched');
        var sel = $(this).val();
        if (sel == '1'){ // 1 = Adult designation
            console.log('adultgi confirmed');
            // Change gastric biopsies to include IM description
            $('#column3c').on('click', function(){
                $("#intestinalmetaplasia-confirm").dialog({
                    resizable: false,
                    modal: true,
                    title: "Any intestinal metaplasia?",
                    height: 100,
                    width: 400,
                    buttons: {
                        "Yes": function () {
                            $(this).dialog('close');
                            micro_text = $('#outPut-2').val();
                            final_text = $('#outPut-3').val();
                            micro_text = micro_text.replace(/^\s+|\s+$/g, "")+' Intestinal metaplasia is identified; no dysplasia or carcinoma is seen. \n\n';
                            final_text += '- Intestinal metaplasia present; no dysplasia or carcinoma seen\n';
                            // update textarea
                            $('#outPut-3').val(final_text);
                            $('#outPut-2').val(micro_text);
    
                        },
                        "No": function () {
                            $(this).dialog('close');
                            micro_text = $('#outPut-2').val();
                            micro_text = micro_text.replace(/^\s+|\s+$/g, "")+' No intestinal metaplasia or carcinoma is seen. \n\n';
                            // update textarea
                            $('#outPut-2').val(micro_text);

                        }
                    }
                });
            }); // End stomach segment

        }
    });

// H pylori Immunos variable
    $('#hpihc').on('change', function(){
        if ($(this).val() == 'Yes'){
            for (var i=150; i<168; i++){
                mxLines['mxLine'+i] = mxLines['mxLine'+i].replace(/No Helicobacter-like organisms are seen/, 'Immunohistochemistry is performed (with appropriate controls) that shows no staining for Helicobacter pylori');
                mxLines['mxLine'+i] = mxLines['mxLine'+i].replace(/Helicobacter-like organisms are seen on routine stains/, 'Immunohistochemistry is performed (with appropriate controls) that highlights Helicobacter pylori organisms');
            }
            for (var h=150; h<167; h++){
                dxLines['dxLine'+h] = dxLines['dxLine'+h].replace(/No Helicobacter-like organisms seen/, 'No Helicobacter organisms seen with immunohistochemistry');
                dxLines['dxLine'+h] = dxLines['dxLine'+h].replace(/Helicobacter-like organisms are identified/, 'Helicobacter pylori identified with immunohistochemistry');
            }
        } else {
            for (var i=150; i<168; i++){
                mxLines['mxLine'+i] = mxLines['mxLine'+i].replace(/Immunohistochemistry is performed \(with appropriate controls\) that shows no staining for Helicobacter pylori/, 'No Helicobacter-like organisms are seen');
                mxLines['mxLine'+i] = mxLines['mxLine'+i].replace(/Immunohistochemistry is performed \(with appropriate controls\) that that highlights Helicobacter pylori organisms/, 'Helicobacter-like organisms are seen on routine stains');
            }
            for (var h=150; h<167; h++){
                dxLines['dxLine'+h] = dxLines['dxLine'+h].replace(/No Helicobacter organisms seen with immunohistochemistry/, 'No Helicobacter-like organisms seen');
                dxLines['dxLine'+h] = dxLines['dxLine'+h].replace(/Helicobacter pylori identified with immunohistochemistry/, 'Helicobacter-like organisms are identified');
            }
        }
    });


// replace variables and syntax

//*********************************** ##DUODENUM## ***********************************//

    //*********** Tufting enteropathy modal *****************//
    $('#_dxLine111').on('mousedown', function(e){
        e.preventDefault();
        $('#dxLine111').prop('checked', false).prop("disabled", true); // prevent change state
        if (!$('#dxLine111').is(':checked')){
            $('.tuft_list').dialog('open').dialog({
                title: "Secretory diarrhea workup",
                modal: 'true',
                width: 500,
                buttons: {
                    "OK": function() {
                        var tuft_pasd = $('#tuft_2').val();
                        var tuft_cd10 = $('#tuft_4').val();
                        var tuft_moc = $('#tuft_6').val();

                        if ($('#tuft_1').val() == 'Yes'){
                            if (tuft_pasd == 'Abnormal'){
                                mxLines.mxLine112 += '\nPas-d stain shows an abnormal pattern of brush border staining, with abluminal droplets present. ';
                            } else {
                                mxLines.mxLine112 += '\nPas-d stain shows a normal pattern of brush border staining. ';

                            }
                        }


                        if ($('#tuft_3').val() == 'Yes' || $('#tuft_4').val() == 'Yes'){

                            mxLines.mxLine112 += '\n\nImmunohistochemistry is performed (with working controls) to further assess for abnormal enterocyte junctions. Stains are summarized as follows:\nCELLS OF INTEREST: Enterocytes\nANTIBODY .......... VALUE ... COMMENT'
                            if (tuft_cd10 == 'Abnormal'){
                                mxLines.mxLine112 += '\nCD10 .............. POS ..... Abnormal brush border staining with scattered abluminal gloubles ';
                            } else {
                                mxLines.mxLine112 += '\nCD10 .............. NEG ..... Normal pattern of brush border staining ';
                            }

                            if (tuft_moc == 'Abnormal'){
                                mxLines.mxLine112 += '\nMOC31 ............. POS ..... Abnormal, absent enterocyte membrane staining ';
                            } else {
                                mxLines.mxLine112 += '\nMOC31 ............. NEG ..... Normal pattern of enterocyte membrane staining ';
                            }
                        }

                        // reset checkmark status and close dialog
                        $('#dxLine111').prop('disabled', false);
                        setTimeout(function() {
                            $("#dxLine111").trigger('click')
                        }, 100);// complete the check
                        $(".tuft_list").dialog('close');
                    }
                }
            });
        }
    });

// ******************** replace duodenum location marker for single site micros ***********************//
    var duoArr = []; // part type array
    var duoSel = []; // selected parts from multiple dialog

    $('#_partType105').on('mousedown', function(){
        if (!$('#partType105').is(':checked')){
            // uncheck micros and final boxes on new part
            $('input:checkbox[name*="dxLine"]').prop( "checked", false );
            $('input:checkbox[name*="mxLine"]').prop( "checked", false );
            $("label").removeClass("highlight");

            var duodist = prompt('Enter description');

                    // Update part designation with prompt value
                    partTypes.partType105 = partTypes.partType105.replace(/,(.*)(?=,)/, ", "+duodist.toUpperCase());

                    // add prompt value to multi list options
                    $('.duo_list')
                        .append('<div class="form-inline"><input type="checkbox" class="form-control form-control-sm mr-2 source" value="' + duodist + '">' + duodist + '</div>');

                    // check to see if item already present in array, if so remove for unchecked box
                    if($.inArray(duodist, duoArr) > -1){
                        duoArr.splice(duodist, 1);
                        console.log('already in duo array, removed');
                    }
                    // item not present so add it to the array of part types
                    else {
                        duoArr.push("duodenum "+duodist);
                        console.log('new to duo array, added');
                    }
                    // get most recently added part from the array, and replace json values with it for single site micros
                    var last_duo = duoArr[duoArr.length - 1];
                    for (var i=100; i<113; i++){
                        mxLines['mxLine'+i] = mxLines['mxLine'+i].replace(/'(.*)'/, "'"+last_duo+"'");
                    }

                    console.log("1. click before timeout");
                    $("#partType105").trigger("click");

                    // Janky work-around for firefox, which fires event twice after prompt is closed
                    // disable checkbox to stop FF from firing event again
                    console.log("2. disable before timeout");
                    $('#partType105').prop("disabled", true);


                    // reset click event
                    setTimeout(function() {
                        $("#partType105").prop("checked", false);
                        $('#partType105').prop("disabled", false);

                        console.log("3. timeout unchecked");
                    }, 100);


        } else {
            console.log("part105 is unchecked");
        }
    });

    $('.duopart').on('click', function(e) {
        //e.preventDefault();
        if ($(this).attr('id') != 'partType105') {
            var duo_part = $(this).val();
            var duo_sent;
            var duo_list_markup = $('<div class="form-inline"><input type="checkbox" class="form-control form-control-sm mr-2 source" value="' + duo_part + '">' + duo_part + '</div>');
            if($.inArray(duo_part, duoArr) > -1){ // check to see if item already present in array, if so remove for unchecked box
                duoArr.splice(duo_part, 1);
                console.log('already in duo array, removed');
            } else { // item not present so add it to the array of part types
                duoArr.push(duo_part);
                $('.duo_list').append(duo_list_markup);
                console.log('new to duo array, added');
            }

            // update syntax for single biopsy
            var last_duo = duoArr[duoArr.length - 1];
            console.log('Last duo: '+last_duo);
            console.log('duoArr: '+duoArr+duoArr.length);
            for (var i=100; i<113; i++){
                mxLines['mxLine'+i] = mxLines['mxLine'+i].replace(/the (.*?) show/, 'the \''+last_duo+'\' show');
            }
        }
    });

    // Duodenum multi-part shift-click
    $("#column3b>label").on('mousedown', function(e) {
        e.preventDefault();
        if (e.shiftKey) {
            console.log(mxLines.mxLine204);
            var que = $(this).find('input').attr('id');
            console.log(que);
            $("#" + que).prop('checked', false).prop("disabled", true);
            console.log('before checking if id is checked: ' + que);
            if (!$("#" + que).is(":checked")) {
                var duoid = $("#" + que).attr("id");
                console.log('after disabling checkbox: ' + duoid + '\nlaunch dialog box');
                var duopart;
                var duo_sent;
                $('.duo_list').dialog('open').dialog({
                    title: "Select all part-types to include",
                    modal: 'true',
                    buttons: {
                        "OK": function () {
                            $(".source:checked").each(function () {
                                var sel = $(this).val();
                                if ($.inArray(sel, duoSel) == -1) {
                                    //Value not found in the array.  Add to the end of the array with push();
                                    duoSel.push(sel);
                                    duoSel.join(', ');
                                }
                            });

                            // Correct grammar for multiple items taken from dynamic modal list
                            if (duoSel.length > 2) {
                                duo_sent = "'" + duoSel.slice(0, duoSel.length - 1).join("', '") + "' and '" + duoSel.slice(-1) + "'";
                            } else if (duoSel.length < 1) {
                                duo_sent = '';
                                return;
                            } else {
                                duo_sent = "'" + duoSel.join("' and '") + "'";
                            }
                            // json text replaced with chosen items
                            for (var i = 100; i < 113; i++) {
                                mxLines['mxLine' + i] = mxLines['mxLine' + i].replace(/'.*'/, duo_sent + ' biopsies each'); // replace site for multi site micros
                            }

                            console.log('formatted multi duo text:' + duo_sent);

                            $("#" + duoid).prop('disabled', false);
                            console.log('register un-disable');
                            setTimeout(function() {$("#" + duoid).trigger('click')}, 100);// complete the check
                            console.log('register dynamic click on: ' + duoid);

                            $(".source").prop('checked', false) // reset duo list checks
                            console.log('duoSel after function: ' + duoSel);
                            duoSel.length = 0; // reset multi array
                            console.log('duoSel after erase: ' + duoSel);
                            $(".duo_list").dialog('close');

                        }
                    }
                });
            }
        }
    }); // end brace for shift+click

//############//

//********************************************* STOMACH ******************************************************//
// replace stomach site for single site micros
    var stoArr = []; // part type array
    var stoSel = []; // selected parts for multiple

    $('#_partType156').on('mousedown', function(){
        if (!$('#partType156').is(':checked')){
            // uncheck micros and final boxes on new part
            $('input:checkbox[name*="dxLine"]').prop( "checked", false );
            $('input:checkbox[name*="mxLine"]').prop( "checked", false );
            $("label").removeClass("highlight");
            
            var stodist = prompt('Enter location');
            partTypes.partType156 = partTypes.partType156.replace(/,(.*)(?=,)/, ", "+stodist.toUpperCase());
            $('.sto_list').append('<div class="form-inline"><input type="checkbox" class="form-control form-control-sm mr-2 source" value="' + stodist + '">sto: "' + stodist + '"</div><br>');
            
            if($.inArray(stodist, stoArr) > -1){ // check to see if item already present in array, if so remove for unchecked box
                stoArr.splice(stodist, 1);
                console.log('already in sto array, removed');
            } else { // item not present so add it to the array of part types
                stoArr.push(stodist);
                console.log('new to sto array, added');
            }
            var last_sto = stoArr[stoArr.length - 1];
            for (var i=150; i<169; i++){
                mxLines['mxLine'+i] = mxLines['mxLine'+i].replace(/'(.*)'/, "'"+last_sto+"'");
            }

            console.log("1. click before timeout");
            $("#partType156").trigger("click");

            // Janky work-around for firefox, which fires event twice after prompt is closed
            // disable checkbox to stop FF from firing event again
            console.log("2. disable before timeout");
            $('#partType156').prop("disabled", true);


            // reset click event
            setTimeout(function() {
                $("#partType156").prop("checked", false);
                $('#partType156').prop("disabled", false);

                console.log("3. timeout unchecked");
            }, 100);

        }
    });

    // Shift-click multisite pop-up with modal template
    // name arrays
    var stoArr = []; // part type array
    var stoSel = []; // selected parts for multiple

    // collect part data and create multi-site markup
    $('.stopart').on('click', function(e) {
        // Store part data if user clicked part other than the wildcard part type
        if ($(this).attr('id') != 'partType156') {
            var sto_part = $(this).val();
            var sto_sent;
            var sto_list_markup = $('<div class="form-inline"><input type="checkbox" class="form-control form-control-sm mr-2 source" value="' + sto_part + '">' + sto_part + '</div>');
            if($.inArray(sto_part, stoArr) > -1){ // check to see if item already present in array, if so remove for unchecked box
                stoArr.splice(sto_part, 1);
                console.log('Item is already in array, removed');
            } else { // item not present so add it to the array of part types
                stoArr.push(sto_part);
                $('.sto_list').append(sto_list_markup);
                console.log('New item for array, added');
            }

            // update syntax for single biopsy
            // Get most recently chosen part
            var last_sto = stoArr[stoArr.length - 1];
            console.log('Last item: '+last_sto);
            console.log('stoArr: '+stoArr+stoArr.length);

            // !!!! adjust the variable iteration #s below  and adjust the replace syntax
            for (var i=150; i<169; i++){
                mxLines['mxLine'+i] = mxLines['mxLine'+i].replace(/the (.*?) show/, 'the \''+last_sto+'\' show');
            }

            console.log('formatted multi array text:' + sto_sent);
        }
    });

    // Find label selector or use generic $(?#columnID>label").on("mousedown"...
    $("#column3c>label").on('mousedown', function(e) {
        // prevent normal click propagation
        e.preventDefault();
        // 1. if user clicked shift key...
        if (e.shiftKey) {
            // 2. Find nearest input to the label that was clicked
            var que = $(this).find('input').attr('id');
            console.log(que);
            // 3. Disable this checkbox to prevent an event trigger
            $("#" + que).prop('checked', false).prop("disabled", true);
            // 4. If that checkbox is not checked, run the script
            if (!$("#" + que).is(":checked")) {
                // 5. Pick your variable for the selected chkbox id
                var stoId = $("#" + que).attr("id");
                // 6. Pick a variable for for the text that was sent to your array
                var sto_sent;
                // 7. Open your empty dialog with class ___:: should be   <div class="sto_list"></div><!-- Hidden multi-list-->
                $('.sto_list').dialog('open').dialog({
                    // 8. Give a proper title
                    title: "Select all part-types to include",
                    modal: 'true',
                    buttons: {
                        "OK": function () {
                            // Find each part label that was checked in the multisite modal, which carries a class .source
                            $(".source:checked").each(function () {
                                var sel = $(this).val();
                                // Change the name of the array to push and join
                                if ($.inArray(sel, stoSel) == -1) {
                                    //Value not found in the array.  Add to the end of the array with push();
                                    stoSel.push(sel);
                                    stoSel.join(', ');
                                }
                            });

                            // Format multiple selections for proper grammar
                            if (stoSel.length > 2) {
                                sto_sent = "'" + stoSel.slice(0, stoSel.length - 1).join("', '") + "' and '" + stoSel.slice(-1) + "'";
                            } else if (stoSel.length < 1) {
                                sto_sent = '';
                                return;
                            } else {
                                sto_sent = "'" + stoSel.join("' and '") + "'";
                            }

                            // !!! Replace start and end iteration #s for the json text replacement
                            for (var i=150; i<169; i++) {
                                mxLines['mxLine' + i] = mxLines['mxLine' + i].replace(/'.*'/, sto_sent + ' gastric biopsies each'); // replace site for multi site micros
                            }
                            console.log('formatted multi array text:' + sto_sent);

                            $("#" + stoId).prop('disabled', false);
                            console.log('register un-disable');
                            setTimeout(function() {$("#" + stoId).trigger('click')}, 100);// complete the check
                            console.log('register dynamic click on: ' + stoId);

                            $(".source").prop('checked', false) // reset duo list checks
                            console.log('Sent Array after function: ' + stoSel);
                            stoSel.length = 0; // reset multi array
                            console.log('stoSel after erase: ' + stoSel);
                            $(".sto_list").dialog('close');

                        }
                    }
                });
            }
        }
    }); // end brace for shift+click

    /*
    $('.stopart').on('click', function(e) {
        //e.preventDefault();
        if ($(this).attr('id') != 'partType156') {
            var st_part = $(this).val();
            var sto_sent;
            $('.sto_list').append('<div class="form-inline"><input type="checkbox" class="form-control form-control-sm mr-2 source" value="' + st_part + '">Sto: ' + st_part + '</div>');
            if($.inArray(st_part, stoArr) > -1){ // check to see if item already present in array, if so remove for unchecked box
                stoArr.splice(st_part, 1);
                console.log('already in sto array, removed');
            } else { // item not present so add it to the array of part types
                stoArr.push(st_part);
                console.log('new to sto array, added');
            }

            // update syntax for single biopsy
            var last_sto = stoArr[stoArr.length - 1];
            console.log('Last sto: '+last_sto);
            console.log('stoArr: '+stoArr+stoArr.length);
            if (stoArr.length > 2) {
                sto_sent = "'" + stoArr.slice(0, stoArr.length - 1).join("', '") + "' and '" + stoArr.slice(-1) + "'";
            } else if (stoArr.length <1) {
                sto_sent = '';
            } else {
                sto_sent = "'" + stoArr.join("' and '")+ "'";
            }

            for (var i=150; i<169; i++){
                if (i == 151){
                    mxLines['mxLine'+i] = mxLines['mxLine'+i].replace(/the (.*?) show/, 'the '+sto_sent+' gastric biopsies each show');

                } else {
                    mxLines['mxLine'+i] = mxLines['mxLine'+i].replace(/the (.*?) show/, 'the \''+last_sto+'\' show');

                }
            }
            console.log('formatted multi sto text:' + sto_sent);
        }
    });
    */


    //*********** Focally enchanced gastritis modal *****************//
    $('#_mxLine162').on('mousedown', function(e){
        e.preventDefault();
        var que = $(this).find('input').attr('id');
        $("#" + que).prop('checked', false).prop("disabled", true);
        console.log('feg checked');
        if (!$("#" + que).is(":checked")) {
            $('.feg_list').dialog('open').dialog({
                title: "Focally Enhanced Gastritis",
                modal: 'true',
                width: 500,
                buttons: {
                    "Done": function() {
                        var feg_focus = $('#feg_1').val();
                        var feg_neut = $('#feg_2').val();

                        if (feg_focus == 'Single'){
                            mxLines.mxLine162 = mxLines.mxLine162.replace(/#FFF#/, 'a single focus');
                        } else {
                            mxLines.mxLine162 = mxLines.mxLine162.replace(/#FFF#/, 'multiple foci').replace(/This focus is/, 'These foci are');

                        }


                        if (feg_neut == 'No'){
                            mxLines.mxLine162 = mxLines.mxLine162.replace(/#NNN#/, ' and plasma cells');
                        } else {
                            mxLines.mxLine162 = mxLines.mxLine162.replace(/#NNN#/, ', plasma cells and few neutrophils');;
                        }

                        // reset checkmark status and clost dialog
                        $('#mxLine162').prop('disabled', false);
                        setTimeout(function() {
                            $("#mxLine162").trigger('click')
                        }, 100);
                        $(".feg_list").dialog('close');
                    }

                }
            });
        }
    });

//********************************************** ESOPHAGUS *****************************************************//
// replace esophagus location marker for single site micros
    var esoArr = [];
    var esoSel = [];

    $('#_partType204').on('mousedown', function(){
        if (!$('#partType204').is(':checked')){
            // uncheck micros and final boxes on new part
            $('input:checkbox[name*="dxLine"]').prop( "checked", false );
            $('input:checkbox[name*="mxLine"]').prop( "checked", false );
            $("label").removeClass("highlight");

            var esodist = prompt('Enter location');

            partTypes.partType204 = partTypes.partType204.replace(/,(.*)(?=,)/, ", "+esodist+" CM");
            $('.eso_list').append('<div class="form-inline"><input type="checkbox" class="form-control form-control-sm mr-2 source" value="' + esodist + 'cm">ESO @' + esodist + '</div>');
            if($.inArray(esodist+"cm", esoArr) > -1){ // check to see if item already present in array, if so remove for unchecked box
                esoArr.splice(esodist+"cm", 1);
                console.log('already in sto array, removed');
            } else { // item not present so add it to the array of part types
                esoArr.push(esodist+"cm");
                console.log('new to sto array, added');
            }
            var last_eso = esoArr[esoArr.length - 1]; // most recent esophagus entry
            for (var i=200; i<217; i++){
                mxLines['mxLine'+i] = mxLines['mxLine'+i].replace(/the .* biopsy/, "the '"+last_eso+" esophagus' biopsy");
            }

            // Resume checkbox click event
            // trigger click
            console.log("1. click before timeout");
            $("#partType204").trigger("click");

            // Janky work-around for firefox, which fires event twice after prompt is closed
            // disable checkbox to stop FF from firing event again
            console.log("2. disable before timeout");
            $('#partType204').prop("disabled", true);

            // reset click event with timeout to uncheck and enable to ready state
            setTimeout(function() {
                $("#partType204").prop("checked", false);
                $('#partType204').prop("disabled", false);

                console.log("3. timeout unchecked");
            }, 100);
        }
        console.log('finish mousedown');

    });

    $('.espart').on('click', function() {
        //e.preventDefault();
        if ($(this).attr('id') != 'partType204') {
            var e_part = $(this).val();
            $('.eso_list').append('<div class="form-inline"><input type="checkbox" class="form-control form-control-sm mr-2 source" value="' + e_part + '">ESO ' + e_part + '</div>');
            if($.inArray(e_part, esoArr) > -1){ // check to see if item already present in array, if so remove for unchecked box
                esoArr.splice(e_part, 1);
                console.log('already in sto array, removed');
            } else { // item not present so add it to the array of part types
                esoArr.push(e_part);
                console.log('new to sto array, added');
            }
            // update syntax for single biopsy
            var last_eso = esoArr[esoArr.length - 1];
            for (var i=200; i<217; i++){
                mxLines['mxLine'+i] = mxLines['mxLine'+i].replace(/the .* biopsy/, "the '"+last_eso+" esophagus' biopsy");
            }
        }
    });

    /************** group multiple parts in micro on left shift plus mouse click *******************/
    $(".eso_multi").on('mousedown', function(e) {
        e.preventDefault();
        if (e.shiftKey){
            console.log(mxLines.mxLine204);
            var que = $(this).find('input').attr('id');
            console.log(que);
            $("#"+que).prop('checked', false).prop("disabled", true);
            console.log('before checking if id is checked: '+que);
            if (!$("#"+que).is(":checked")){
                var esoid = $("#"+que).attr("id");
                console.log('after disabling checkbox: '+esoid+'\nlaunch dialog box');
                var esopart;
                var eso_sent;
                $('.eso_list').dialog('open').dialog({
                    title: "Select all part-types to include",
                    modal: 'true',
                    buttons: {
                        "OK": function() {
                            $(".source:checked").each(function() {
                                var sel = $(this).val();
                                if ($.inArray(sel, esoSel) == -1) {
                                    //Value not found in the array.  Add to the end of the array with push();
                                    esoSel.push(sel);
                                    esoSel.join(', ');
                                }
                            });
                            if (esoSel.length > 2) {
                                eso_sent = "'" + esoSel.slice(0, esoSel.length - 1).join("', '") + "' and '" + esoSel.slice(-1) + "'";
                            } else if (esoSel.length <1) {
                                eso_sent = '';
                                return;
                            } else {
                                eso_sent = "'" + esoSel.join("' and '")+ "'";
                            }

                            for (var i=200; i<217; i++){
                                mxLines['mxLine'+i] = mxLines['mxLine'+i].replace(/'.*' esophageal/, eso_sent+' esophageal'); // replace site for multi site micros
                            }
                            console.log('formatted multi eso text:' + eso_sent);

                            $("#"+esoid).prop('disabled', false);
                            console.log('register un-disable');
                            setTimeout(function() {
                                $("#"+esoid).trigger('click')
                            }, 10);// complete the check
                            console.log('register dynamic click on: '+esoid);

                            $(".source").prop('checked', false) // reset eso list checks
                            console.log('esoSel after function: '+esoSel);
                            esoSel.length = 0; // reset multi array
                            console.log('esoSel after erase: '+esoSel);
                            $(".eso_list").dialog('close');

                        }
                    }
                });
            }
        } // end brace for shift+click
        else { // multi site but no shift click
            if (esoArr.length > 2) {
                eso_sent = "'" + esoArr.slice(0, esoArr.length - 1).join("', '") + "' and '" + esoArr.slice(-1) + "'";
            } else if (esoArr.length <1) {
                eso_sent = '';
                return;
            } else {
                eso_sent = "'" + esoArr.join("' and '")+ "'";
            }
            for (var i=200; i<217; i++){
                mxLines['mxLine'+i] = mxLines['mxLine'+i].replace(/'(.*?)' esophageal/, eso_sent+' esophageal'); // replace site for multi site micros
            }
        } // end brace for no shift click
    });

    $('#_dxLine205').on('click', function(e){ // reactive lymphs, ask about eos
        if (!$('#dxLine205').is(':checked')){
            if(confirm("Any eos as well?")) {
                dxLines.dxLine205 = dxLines.dxLine205.replace(/lymphocytes/, 'lymphocytes and few eosinophils ');
                mxLines.mxLine208 = mxLines.mxLine208.replace(/surface. /, 'surface. In addition, a mild increase in intraepithelial eosinophils is also present, and is enumerated at up to 5 in a representative field. ');
            }
        }
    });

    // -----------------------------------
    // Pause checkbox event to get prompt and run script
    // -----------------------------------

    // listen for checkbox label mousedown
    $('.eosnum').on('mousedown', function(e){
        e.preventDefault();
        if (e.shiftKey){

            var que = $(this).find('input').attr('id');

            $("#"+que).prop('checked', false).prop("disabled", true);

            if (!$("#"+que).is(":checked")){

                // get checkbox id
                var esoid = $("#"+que).attr("id");

                // change prompt as needed below
                var prompt_var = prompt('Enter your eos per hpf');

                for (var i=200; i<217; i++){
                    mxLines['mxLine'+i] = mxLines['mxLine'+i].replace(/(?!number up to )\d+/, prompt_var); // replace site for multi site micros
                }

                for (var i=201; i<211; i++){
                    dxLines['dxLine'+i] = dxLines['dxLine'+i]
                                            .replace(/(?:eosinophils)(.*)\n?/, "eosinophils (up to "+prompt_var+" eosinophils per high powered field) \n")
                                            .replace(/(?:Eosinophilic esophagitis)(.*)\n?/, "Eosinophilic esophagitis (up to "+prompt_var+" eosinophils per high powered field) \n"); // replace site for multi site micros
                }


                // Resume checkbox click event
                $("#"+esoid).prop('disabled', false);
                console.log('register un-disable');
                setTimeout(function() {
                    $("#"+esoid).trigger('click')
                }, 100);// complete the check

            }
        }
    });

//######################//

//##colon##//
// replace colon site for single site micros
    var colArr = []; // part type array
    var colSel = []; // selected parts for multiple

    $('#_partType310').on('mousedown', function(){
        if (!$('#partType310').is(':checked')){
            // uncheck micros and final boxes on new part
            $('input:checkbox[name*="dxLine"]').prop( "checked", false );
            $('input:checkbox[name*="mxLine"]').prop( "checked", false );
            $("label").removeClass("highlight");

            var coldist = prompt('Enter location');
            partTypes.partType310 = partTypes.partType310.replace(/,(.*?)(?=,)/, ", "+coldist+" CM");
            $('.col_list').append('<div class="form-inline"><input type="checkbox" class="form-control form-control-sm mr-2 source" value="' + coldist + 'cm">COL @' + coldist + '</div>');

            if($.inArray(coldist+"cm", colArr) > -1){ // check to see if item already present in array, if so remove for unchecked box
                colArr.splice(coldist+"cm", 1);
                console.log('already in sto array, removed');
            } else { // item not present so add it to the array of part types
                colArr.push(coldist+"cm");
                console.log('new to sto array, added');
            }

            var last_col = colArr[colArr.length - 1];
            for (var i=300; i<336; i++){
                mxLines['mxLine'+i] = mxLines['mxLine'+i].replace(/'(.*?)'/, "'"+last_col+" colon'");
            }

            // Resume checkbox click event
            // trigger click
            console.log("1. click before timeout");
            $("#partType310").trigger("click");

            // Janky work-around for firefox, which fires event twice after prompt is closed
            // disable checkbox to stop FF from firing event again
            console.log("2. disable before timeout");
            $('#partType310').prop("disabled", true);

            // reset click event with timeout to uncheck and enable to ready state
            setTimeout(function() {
                $("#partType310").prop("checked", false);
                $('#partType310').prop("disabled", false);

                console.log("3. timeout unchecked");
            }, 100);
        }
    });

    $('.colpart').on('click', function(e) {
        //e.preventDefault();
        if ($(this).attr('id') != 'partType310') {
            var c_part = $(this).val();
            console.log(c_part);
            $('.col_list').append('<div class="form-inline"><input type="checkbox" class="form-control form-control-sm mr-2 source" value="' + c_part + '">COL ' + c_part + '</div>');
            if($.inArray(c_part, colArr) > -1){ // check to see if item already present in array, if so remove for unchecked box
                colArr.splice(c_part, 1);
                console.log('already in sto array, removed');
            } else { // item not present so add it to the array of part types
                colArr.push(c_part);
                console.log('new to sto array, added');
            }
            // update syntax for single biopsy
            var last_col = colArr[colArr.length - 1];
            console.log('Last col: '+last_col);
            console.log('colArr: '+colArr+colArr.length);
            for (var i=300; i<336; i++){
                if (last_col.indexOf("lesion") >= 0){
                    mxLines['mxLine'+i] = mxLines['mxLine'+i].replace(/'(.*?)'/, "'"+last_col+"'").replace(/cm/,'');
                }
                else {
                    mxLines['mxLine'+i] = mxLines['mxLine'+i].replace(/'(.*?)'/, "'"+last_col+" colon'").replace(/cm/,'');
                }
            }
        }
    });



// replace colon location markers for multi site micros
    $(".col_multi").on('mousedown', function(e) {
        e.preventDefault();
        if (e.shiftKey){
            var que = $(this).find('input').attr('id');
            console.log(que);
            $("#"+que).prop('checked', false).prop("disabled", true);
            console.log('before checking if id is checked: '+que);
            if (!$("#"+que).is(":checked")){
                var colid = $("#"+que).attr("id");
                console.log('after disabling checkbox: '+colid+'\nlaunch dialog box');
                var colpart;
                var col_sent;
                $('.col_list').dialog('open').dialog({
                    title: "Select all part-types to include",
                    modal: 'true',
                    buttons: {
                        "OK": function() {
                            $(".source:checked").each(function() {
                                var sel = $(this).val();
                                if ($.inArray(sel, colSel) == -1) {
                                    //Value not found in the array.  Add to the end of the array with push();
                                    colSel.push(sel);
                                    colSel.join(', ');
                                }
                            });
                            if (colSel.length > 2) {
                                col_sent = "'" + colSel.slice(0, colSel.length - 1).join("', '") + "' and '" + colSel.slice(-1) + "'";
                            } else if (colSel.length <1) {
                                col_sent = '';
                                return;
                            } else {
                                col_sent = "'" + colSel.join("' and '")+ "'";
                            }

                            for (var i=300; i<336; i++){
                                mxLines['mxLine'+i] = mxLines['mxLine'+i].replace(/from (.*?) colonic/, 'from '+col_sent +' colonic');
                            }
                            console.log('formatted multi col text:' + col_sent);

                            $("#"+colid).prop('disabled', false);
                            console.log('register un-disable');
                            setTimeout(function() {
                                $("#"+colid).trigger('click')
                            }, 100);// complete the check
                            console.log('register dynamic click on: '+colid);

                            $(".source").prop('checked', false) // reset col list checks
                            console.log('colSel after function: '+colSel);
                            colSel.length = 0; // reset multi array
                            console.log('colSel after erase: '+colSel);

                            $(".col_list").dialog('close');

                        }
                    }
                });
            }

        } // end brace for shift+click
        else { // multi site but no shift click
        } // end brace for no shift click

    });

// Replace blanks in hirschsprung micros


    $('.hirsch').on('mousedown', function(){
        var que = $(this).find('input').attr('id'); // find id of closest checkbox in this label
        $("#"+que).prop('checked', false).prop("disabled", true); // pause check event
        if (!$("#"+que).is(":checked")){
            console.log(que);
            var num = prompt('How many biopsy pieces?');
            var numword = toWords(num);
            var adeq = prompt('How many have adequate submucosa?')
            var adeqword = toWords(adeq);
            mxLines[que] = mxLines[que].replace(/#NUM# / , numword );
            if (adeq == num) {
                console.log("adeq = num");
                mxLines[que] = mxLines[que].replace(/#ADEQ#/, "all").replace(/all adequate biopsy/ , "all biopsy" );
            } else if (adeq == 0){
                console.log("adeq = 0");
                mxLines[que] = mxLines[que].replace(/#ADEQ#/, "none").replace(/Ganglion.*(fragments)/ , "Ganglion cells are not seen in the limited sampled submucosa" );               
            } else {
                mxLines[que] = mxLines[que].replace(/#ADEQ# /, adeqword);
            }
            console.log(mxLines[que]);
            $("#"+que).prop("disabled", false); // undisable checkbox
            $("#"+que).trigger('click'); // resume click event
        }
    });

    /***************************************************************************************************/
    /******************************* GRANULOMA MODAL ****************************************************/

    $('#mxLine311, #mxLine312, #mxLine318, #mxLine319').on('change', function(){
        if ($(this).is(':checked')){
            $('.granuloma').dialog("open").dialog({
                modal: true,
                title: "Granulomas",
                close: function(){
                    var stains = $('#gran_1').val();
                    var stain_gms = $('#gran_2').val();
                    var stain_afb = $('#gran_3').val();
                    var stain_block = $('#gran_4').val();
                    var text = $('#outPut-2').val();
                    if (stains != "No"){
                        text += 'GMS and AFB stains are performed (with adequate controls, block(s) '+stain_block+') to assess for an infectious process. ';
                        if (stain_gms == 'Yes'){
                            text += 'A GMS stain shows occasional fungal elements. ';
                        } else {
                            text += 'A GMS stain shows no fungal elements. ';
                        }
                        if (stain_afb == 'Yes'){
                            text += 'An AFB stain shows occasional mycobacteria. ';
                        } else {
                            text += 'An AFB stain shows no mycobacteria. ';
                        }
                        $('#outPut-2').val(text);
                        // keep changes in textarea by simulating spacebar keypress
                        var e = jQuery.Event("keydown");
                        e.which = 32; // spacebar keycode value
                        $("#outPut-2").focus();
                        $("#outPut-2").trigger();
                        $('#outPut-2').val($('#outPut-2').val()+"\n\n");
                        // end simulation snippett

                    }
                }
            });
        }
    });

    /***************************************************************************************************/
    /******************************* PHYSICIAN DISCUSSED WITH MODAL ************************************/
    $('#_comLine100').on('mousedown', function(e) {
        e.preventDefault();
        var que = $(this).find('input').attr('id'); // find id of closest checkbox in this label
        $("#"+que).prop('checked', false).prop("disabled", true); // pause check event
        if (!$("#"+que).is(":checked")){
            $('.docinput').dialog("open").dialog({
                modal: true,
                width: 500,
                title: "Which physician did you discuss with?",
                buttons: {
                    "OK": function () {
                        // get name of doc
                        var doc = $('#doc').val();

                        // add today's date to commment
                        var currentDate = new Date();
                        var day = currentDate.getDate();
                        var month = currentDate.getMonth() + 1;
                        var year = currentDate.getFullYear();
                        var date = month + '/' + day + '/' + year;

                        comLines.comLine100 = comLines.comLine100.replace(/XXXX/, doc).replace(/QQQQ/, date); // insert today's date into comment.
                        console.log(comLines.comLine100);
                        // reset checkmark status and clost dialog
                        $('#comLine100').prop('disabled', false);
                        setTimeout(function() {
                            $("#comLine100").trigger('click')
                        }, 50);// complete the check
                        $(".docinput").dialog('close');
                    }
                }
            });
        }
    });

//********************//

// **** ADD MICROS WITH ONE-CLICK UNDO *****//
//											//
//											//


// fill final diagnosis textbox
    function print_final() {
        if (part_choice !== null) {
            final_text += partTypes[part_choice] + '';
            part_choice = null;
            $('input:checkbox[name*="dxLine"]').prop( "checked", false );
            $('input:checkbox[name*="mxLine"]').prop( "checked", false );
            $("label").removeClass("highlight");
            $('#outPut-3').val(final_text);
            console.log("print final");

        }
        else if (diag_choice !== null) {
            final_text += dxLines[diag_choice] + '';
            diag_choice = null;
            $('#outPut-3').val(final_text);
            console.log("print diagnosis");

        }
    }

// fill micros textbox
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

// Retain any manual edits within textarea
    $('textarea').on('input', function(){
        if ($(this).is('#outPut-3')){
            final_text = $(this).val();}
        else if ($(this).is('#outPut-2')){
            micro_text = $(this).val();}
        else if ($(this).is('#outPut-4')){
            comm_text = $(this).val();}
    });


// Micros: add new selection to list, unless unchecked
    $('input:checkbox').on('change', function () {
        console.log("input:chkbox change");
        if ($(this).attr('id').indexOf('partType') > -1){
            if ($(this).is(':checked')) {
                part_choice = $(this).attr('id');
                final_old = final_text;
                print_final();
            } else {
                var del = $(this).attr('id');
                final_old = final_text.replace(partTypes[del], '');
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
            } else {
                var del = $(this).attr('id');
                micro_old = micro_text.replace(mxLines[del], '');
                micro_text = micro_old;
                $('#outPut-2').val(micro_old); // if unchecked, textarea = prior text
            }
        }
        else if ($(this).attr('id').indexOf('comLine') > -1){
            if ($(this).is(':checked')) {
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

// ******************** Gross dictation fixer **************************//
    $('#transform').on('click', function () {
        var input = $('#textIn').val();
        input = input
            .replace(/([A-Z]).+:\s/g, '')
            .replace(/\s+(?=R)/g, ' ') // remove any pre-existing labels and all double spaces
            .replace(/\(/g, '')
            .replace(/\) R/g, '. R')
            .replace(/\)\./g, '.')
        ;

        var labels = input.match(/"(.*?)"/gm); // array of all words in quotes

        for (var i = 0; i < labels.length; i++) {
            labels[i] = labels[i].replace(/"/g, "") // remove quotes
                .replace(/\//, " AND ") // replace slashes with AND
                .replace(/biopsy /, '') // replace extraneous biopsy
                .replace(/ biopsy/, '') // replace extraneous biopsy
                .replace(/ colon/, '') // replace extraneous colon
                .toUpperCase();

        }


        // test conditions to modify the way a part is labeled, based on site
        for (var j = 0; j < labels.length; j++) {
            if (labels[j].indexOf('DUODENUM') > -1) {
                labels[j] = labels[j] + ", BIOPSY";
            }
            else if (labels[j].indexOf('BULB') > -1) {
                labels[j] = "DUODENUM, BULB, BIOPSY";
            }
            else if (labels[j].indexOf('ANTRUM') > -1) {
                labels[j] = "STOMACH, " + labels[j] + ", BIOPSY";
            } else if (labels[j].indexOf('BODY') > -1) {
                labels[j] = "STOMACH, BODY, BIOPSY";
            } else if (labels[j].indexOf('STOMACH') > -1) {
                labels[j] = labels[j] + ", BIOPSY";
            } else if (labels[j].indexOf('PROXIMAL') > -1) {
                labels[j] = "ESOPHAGUS, "+labels[j].replace(/ ESOPHAGUS/, '') + ", BIOPSY";
            } else if (labels[j].indexOf('UPPER') > -1) {
                labels[j] = "ESOPHAGUS, PROXIMAL, BIOPSY";
            } else if (labels[j].indexOf('DISTAL') > -1) {
                labels[j] = "ESOPHAGUS, "+labels[j].replace(/ ESOPHAGUS/, '') + ", BIOPSY";
            } else if (labels[j].indexOf('LOWER') > -1) {
                labels[j] = "ESOPHAGUS, DISTAL, BIOPSY";
            } else if (labels[j].indexOf('MIDDLE') > -1) {
                labels[j] = "ESOPHAGUS, MID, BIOPSY";
            } else if (labels[j].indexOf('MID') > -1) {
                labels[j] = "ESOPHAGUS, MID, BIOPSY";
            } else if (labels[j].indexOf('GE ') > -1) {
                labels[j] = "GASTROESOPHAGEAL JUNCTION, BIOPSY";
            } else if (labels[j].indexOf('ESOPHAGUS AT') > -1) {
                labels[j] = "ESOPHAGUS, "+labels[j].replace(/esophagus at /i, '') + ", BIOPSY";
            } else if (labels[j].indexOf('ESOPHAGUS') > -1) {
                labels[j] = labels[j] + ", BIOPSY";
            } else if (labels[j].indexOf('ILEUM') > -1) {
                labels[j] = labels[j] + ", BIOPSY";
            } else if (labels[j].indexOf('CECUM') > -1) {
                labels[j] = "COLON, " + labels[j] + ", BIOPSY";
            } else if (labels[j].indexOf('ASCENDING') > -1) {
                labels[j] = "COLON, " + labels[j].replace(/COLON/, '') + ", BIOPSY";
            } else if (labels[j].indexOf('TRANSVERSE') > -1) {
                labels[j] = "COLON, " + labels[j].replace(/COLON/, '') + ", BIOPSY";
            } else if (labels[j].indexOf('DESCENDING') > -1) {
                labels[j] = "COLON, " + labels[j].replace(/COLON/, '') + ", BIOPSY";
            } else if (labels[j].indexOf('SIGMOID') > -1) {
                labels[j] = "COLON, " + labels[j].replace(/COLON/, '') + ", BIOPSY";
            } else if (labels[j].indexOf('RECTUM') > -1) {
                labels[j] = labels[j] + ", BIOPSY";
            } else if (labels[j].indexOf('RIGHT') > -1) {
                labels[j] = "COLON, " + labels[j].replace(/COLON/, '') + ", BIOPSY";
            } else if (labels[j].indexOf('LEFT') > -1) {
                labels[j] = "COLON, " + labels[j].replace(/COLON/, '') + ", BIOPSY";
            } else if (labels[j].indexOf('RANDOM') > -1) {
                labels[j] = "COLON, " + labels[j].replace(/COLON/, '') + ", BIOPSY";
            } else if (labels[j].indexOf('ANASTOMOSIS') > -1) {
                labels[j] = "COLON, " + labels[j] + ", BIOPSY";
            } else if (labels[j].indexOf('POUCH') > -1) {
                labels[j] = "COLON, " + labels[j] + ", BIOPSY";
            }
        }


        for (var i = 0; i < labels.length; i++) {
            input = input.replace(/\.\sR/, ". " + labels[i] + ": R");
        }

        $('#textOut').val(input);

    });




});
/**
 * Created by chandrakrishnan on 4/28/2017.
 */
