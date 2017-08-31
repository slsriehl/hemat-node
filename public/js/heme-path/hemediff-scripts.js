
$(window).on('load', function() {

    $('#textarea').focus();


    $('#openhelp').click(function() {
        $('#help').dialog({
            minWidth: 400
        });
    });

    // init sound

    var beep = new Audio('../media/beep.mp3');


    // focus on text area
    $('#textarea').focus().alphanum({
        allowNumeric: true,
        allowLatin: false,
        disallow: '0.',
        allow: '+-'
    });

    // Character frequency counter
    $("#textarea").on('keyup', function() {
        var _limit = $('#limit').val();
        var box = $(this).val();
        var len = box.length;
        $('#counter').val(len);
        // count mono
        if (box.match(/1/g) !== null) { // makes sure that match.length doesn't return null
            var _mono = box.match(/1/g).length;
            var _mono_pct = ((_mono / len) * 100).toFixed(1);
            $('#mono_num').val(_mono);
            $('#mono_pct').val(_mono_pct);
        }
        // count lymphs
        if (box.match(/6/g) !== null) {
            var _lym = box.match(/6/g).length;
            var _lym_pct = ((_lym / len) * 100).toFixed(1);
            $('#lymph_num').val(_lym);
            $('#lymph_pct').val(_lym_pct);
        }
        // count segs
        if (box.match(/4/g) !== null) {
            var _segs = box.match(/4/g).length;
            var _segs_pct = ((_segs / len) * 100).toFixed(1);
            $('#segs_num').val(_segs);
            $('#segs_pct').val(_segs_pct);
        }
        // count eos
        if (box.match(/2/g) !== null) {
            var _eos = box.match(/2/g).length;
            var _eos_pct = ((_eos / len) * 100).toFixed(1);
            $('#eos_num').val(_eos);
            $('#eos_pct').val(_eos_pct);
        }
        // count pros
        if (box.match(/9/g) !== null) {
            var _pro = box.match(/9/g).length;
            var _pro_pct = ((_pro / len) * 100).toFixed(1);
            $('#pro_num').val(_pro);
            $('#pro_pct').val(_pro_pct);
        }
        // count plasma
        if (box.match(/3/g) !== null) {
            var _plasma = box.match(/3/g).length;
            var _plasma_pct = ((_plasma / len) * 100).toFixed(1);
            $('#plasma_num').val(_plasma);
            $('#plasma_pct').val(_plasma_pct);
        }
        // count meta/myelo
        if (box.match(/7/g) !== null) {
            var _meta = box.match(/7/g).length;
            var _meta_pct = ((_meta / len) * 100).toFixed(1);
            $('#meta_num').val(_meta);
            $('#meta_pct').val(_meta_pct);
        }
        // count blasts
        if (box.match(/8/g) !== null) {
            var _blast = box.match(/8/g).length;
            var _blast_pct = ((_blast / len) * 100).toFixed(1);
            $('#bl_num').val(_blast);
            $('#bl_pct').val(_blast_pct);
        }
        // count nrbcs
        if (box.match(/5/g) !== null) {
            var _nrbc = box.match(/5/g).length;
            var _nrbc_pct = ((_nrbc / len) * 100).toFixed(1);
            $('#nrbc_num').val(_nrbc);
            $('#nrbc_pct').val(_nrbc_pct);
        }
        // count basos
        if (box.match(/\+/g) !== null) {
            var _baso = box.match(/\+/g).length;
            var _baso_pct = ((_baso / len) * 100).toFixed(1);
            $('#baso_num').val(_baso);
            $('#baso_pct').val(_baso_pct);
        }
        // count atypical cells
        if (box.match(/\-/g) !== null) {
            var _atyp = box.match(/\-/g).length;
            var _atyp_pct = ((_atyp / len) * 100).toFixed(1);
            $('#atyp_num').val(_atyp);
            $('#atyp_pct').val(_atyp_pct);
        }
        if (len >= _limit) {
                beep.play();
                alert('You have counted ' + _limit + ' cells.');
            }

        // count non-erythroid blasts
        if (box.match(/8/g) !== null) {
            var _neblast = box.match(/8/g).length;
            if (box.match(/5/g) !== null) {
                var _enrbc = box.match(/5/g).length;
            } else {
                var _enrbc = 0
            }
            var _neblast_pct = ((_neblast / (len - _enrbc)) * 100).toFixed(1);
            $('#noneryblast').val(_neblast_pct);
        }

        // M:E ratio
        if (box.match(/5/g) !== null) {
            var _nrbc = parseFloat($('#nrbc_num').val()) || 0;
            var seg = parseFloat($('#segs_num').val()) || 0;
            var meta = parseFloat($('#meta_num').val()) || 0;
            var pro = parseFloat($('#pro_num').val()) || 0;
            var mono = parseFloat($('#mono_num').val()) || 0;
            var baso = parseFloat($('#baso_num').val()) || 0;
            var eos = parseFloat($('#eos_num').val()) || 0;
            var myels = seg + meta + pro + mono + baso + eos;
            console.log(seg + '\n' + meta + '\n' + pro + '\n' + mono + '\n' + baso + '\n' + eos);
            var mer = ((myels / _nrbc)).toFixed(1);
            $('#merat').val(mer);
        } else {
            $('#merat').val('Not applicable');
        }

    }); //end of function

    $('#printDiff').on('click', function() {
        // start counter
        this.counter = this.counter || 0;
        this.counter++;
        // setting field variables
        var blast_pct = $('#bl_pct').val();
        var seg_pct = $('#segs_pct').val();
        var lymph_pct = $('#lymph_pct').val();
        var meta_pct = $('#meta_pct').val();
        var pro_pct = $('#pro_pct').val();
        var mono_pct = $('#mono_pct').val();
        var nrbc_pct = $('#nrbc_pct').val();
        var eos_pct = $('#eos_pct').val();
        var plasma_pct = $('#plasma_pct').val();
        var baso_pct = $('#baso_pct').val();
        var atyp_pct = $('#atyp_pct').val();
        var _limit = $('#limit').val();
        var diffStr = _limit + ' cell differential: Blasts: ' + blast_pct + '%; ' + 'Pros: ' + pro_pct + '%; ' + 'Meta/Myelo: ' + meta_pct + '%; ' + 'Segs: ' + seg_pct + '%; ' + 'Eryth: ' + nrbc_pct + '%;' + ' Lymphs: ' + lymph_pct + '%;' + ' Mono: ' + mono_pct + '%;' + ' Eos: ' + eos_pct + '%; ' + 'Plasma cells: ' + plasma_pct + '%; ' + 'Baso: ' + baso_pct + '%; ' + 'Atypical cells: ' + atyp_pct + '%.' + '\n\nM:E ratio= ' + $('#merat').val();
				//format the diff text automatically
				var text2 = diffStr.replace(/differential: /, 'differential:\n').replace(/; /g, '\n');
        $('#diffOut').val(text2);
				dataObj.singleSection = text2;
				console.log(dataObj);
        // $('#diffOut').val(diffStr);
        // append each printed diff into "history" window with counter to label them
        $('#diffHist').val($('#diffHist').val() + this.counter + ':\n' + diffStr + '\n\n');
				//add a pdf button to the button bar if it's not already there
				if(!$('#pdf-report').length) {

					var reportBtnBox = $('<ul class="report-button-box nav nav-pills">');
					var makePdfBtn = $('<a class="btn btn-lg btn-outline-success p-2 ml-4" id="pdf-report">');
					var pdfBtnText = $('<small>Save & Create PDF</small>')
					makePdfBtn.append(pdfBtnText);
					reportBtnBox.append(makePdfBtn);
					$('.button-box').append(reportBtnBox);
				}

    });

    $('#printAbs').on('click', function() {
        var totalwbc = $('#totwbc').val();
        var pctneut = $('#pctneut').val();
        var pctband = $('#pctband').val();
        var pctlym = $('#pctlym').val();
        var pctmono = $('#pctmono').val();
        var pcteos = $('#pcteos').val();

        if (pctband != 0) {
            var aneut = (totalwbc * ((parseFloat(pctneut, 10) + parseFloat(pctband, 10)) / 100)).toFixed(2);
        } else {
            var aneut = (totalwbc * ((parseFloat(pctneut, 10)) / 100)).toFixed(2);
        }
        var alym = (totalwbc * (parseFloat(pctlym, 10) / 100)).toFixed(2);
        var amono = (totalwbc * (parseFloat(pctmono, 10) / 100)).toFixed(2);
        var aeos = (totalwbc * (parseFloat(pcteos, 10) / 100)).toFixed(2);

        $('#absneut').val(aneut);
        $('#abslym').val(alym);
        $('#absmono').val(amono);
        $('#abseos').val(aeos);

        var fullcbc = "LABORATORY DATA:" + " WBC: " + totalwbc + " K/ul;" + " ABS NEUT: " + aneut + " K/ul;" + " ABS LYMPH: " + alym + " K/ul;" + " ABS MONO: " + amono + " K/ul;" + " ABS EOS: " + aeos + " K/ul.";
        $('#CBCout').val(fullcbc);
    });

    // Diff Chart

    $("#textarea").on('keyup', function() {

        var diff = {
            blast: $('#bl_pct').val(),
            pros: $('#pro_pct').val(),
            meta: $('#meta_pct').val(),
            seg: $('#segs_pct').val(),
            eryth: $('#nrbc_pct').val(),
            lymph: $('#lymph_pct').val(),
            monos: $('#mono_pct').val(),
            eos: $('#eos_pct').val(),
            plasma: $('#plasma_pct').val(),
            baso: $('#baso_pct').val(),
            atyp: $('#atyp_pct').val()
        };

        /* Canvas painting script
         var chart = new CanvasJS.Chart("chartcontainer", {
         title:{
         text: "Marrow differential"
         },

         axisY:{
         title:"%",
         suffix: "%"
         },

         data: [//array of dataSeries
         { //dataSeries object

         /*** Change type "column" to "bar", "area", "line" or "pie"***/
        /*
         type: "column",
         dataPoints: [
         { label: "BL", y: parseFloat(diff.blast ) },
         { label: "PR",     y: parseFloat(diff.pros ) },
         { label: "MY", y: parseFloat(diff.meta) },
         { label: "LYM", y: parseFloat(diff.lymph ) },
         { label: "RBC", y: parseFloat(diff.eryth ) },
         { label: "MO", y: parseFloat(diff.monos ) },
         { label: "EO", y: parseFloat(diff.eos ) },
         { label: "PLA", y: parseFloat(diff.plasma ) },
         { label: "BAS", y: parseFloat(diff.baso ) },
         { label: "ATY", y: parseFloat(diff.atyp ) }
         ]
         }
         ]
         });

         chart.render();
         */
    });

		//this is now done automatically when the report is printed
    // $('#switchtext').change(function() {
    //     var text = $('#diffOut').val();
    //     var text2 = text.replace(/differential: /, 'differential:\n').replace(/; /g, '\n');
    //     $('#diffOut').val(text2);
    // });

});

/**
 * Created by chandrakrishnan on 4/28/2017.
 */
