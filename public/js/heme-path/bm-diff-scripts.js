// Bone marrow differential counter scripts
// Used with the diff counter and bm biopsy reporter

$(window).on('load', function() {
// init sound
	var beep = new Audio('../media/beep.mp3');


// focus on text area
$('#diffinput').focus().alphanum({allowNumeric:true, allowLatin:false, disallow : '0.', allow : '+-'});

// Character frequency counter
  $("#diffinput").on('keyup',function () {
	var _limit = $('#limit').val();
  var box = $(this).val();
	var len = box.length;
	$('#counter').val(len);
			// count mono
			if (box.match(/1/g) !==null){// makes sure that match.length doesn't return null
			var _mono  = box.match(/1/g).length;
			var _mono_pct = ((_mono / len) * 100).toFixed(1);
			$('#mono_num').val(_mono);
			$('#asp_9').val(_mono_pct);
			}
			// count lymphs
			if (box.match(/6/g) !==null){
			var _lym  = box.match(/6/g).length;
			var _lym_pct = ((_lym / len) * 100).toFixed(1);
			$('#lymph_num').val(_lym);
			$('#asp_7').val(_lym_pct);
			}
			// count segs
			if (box.match(/4/g) !==null){
			var _segs  = box.match(/4/g).length;
			var _segs_pct = ((_segs / len) * 100).toFixed(1);
			$('#segs_num').val(_segs);
			$('#asp_5').val(_segs_pct);
			}
			// count eos
			if (box.match(/2/g) !==null){
			var _eos  = box.match(/2/g).length;
			var _eos_pct = ((_eos / len) * 100).toFixed(1);
			$('#eos_num').val(_eos);
			$('#asp_10').val(_eos_pct);
			}
			// count pros
			if (box.match(/9/g) !==null){
			var _pro  = box.match(/9/g).length;
			var _pro_pct = ((_pro / len) * 100).toFixed(1);
			$('#pro_num').val(_pro);
			$('#asp_3').val(_pro_pct);
			}
			// count plasma
			if (box.match(/3/g) !==null){
			var _plasma  = box.match(/3/g).length;
			var _plasma_pct = ((_plasma / len) * 100).toFixed(1);
			$('#plasma_num').val(_plasma);
			$('#asp_12').val(_plasma_pct);
			}
			// count meta/myelo
			if (box.match(/7/g) !==null){
			var _meta  = box.match(/7/g).length;
			var _meta_pct = ((_meta / len) * 100).toFixed(1);
			$('#meta_num').val(_meta);
			$('#asp_4').val(_meta_pct);
			}
			// count blasts
			if (box.match(/8/g) !==null){
			var _blast = box.match(/8/g).length;
			var _blast_pct = ((_blast / len) * 100).toFixed(1);
			$('#bl_num').val(_blast);
			$('#asp_2').val(_blast_pct);
			}
			// count nrbcs & checked off
			if (box.match(/5/g) !==null){
			var _nrbc  = box.match(/5/g).length;
			var _nrbc_pct = ((_nrbc / len) * 100).toFixed(1);
			$('#nrbc_num').val(_nrbc);
			$('#asp_6').val(_nrbc_pct);
			}
			// count basos
			if (box.match(/\+/g) !==null){
			var _baso  = box.match(/\+/g).length;
			var _baso_pct = ((_baso / len) * 100).toFixed(1);
			$('#baso_num').val(_baso);
			$('#asp_11').val(_baso_pct);
			}
			// count atypical cells
			if (box.match(/\-/g) !==null){
			var _atyp  = box.match(/\-/g).length;
			var _atyp_pct = ((_atyp / len) * 100).toFixed(1);
			$('#atyp_num').val(_atyp);
			$('#asp_8').val(_atyp_pct);
			}
				if (len >= _limit) {
					beep.play();
					alert ('You have counted '+_limit+' cells.');

				}

			// M:E ratio
			if ($('#asp_6').val() !==''){
			var _nrbc  = parseInt($('#asp_6').val()) || 0;
			var seg = parseInt($('#asp_5').val()) || 0;
			var meta = parseInt($('#asp_4').val()) || 0;
			var pro = parseInt($('#asp_3').val()) || 0;
			var mono = parseInt($('#asp_9').val()) || 0;
			var baso = parseInt($('#asp_11').val()) || 0;
			var eos = parseInt($('#asp_10').val()) || 0;
			var myels = seg + meta + pro + mono + baso + eos;
			var mer = ((myels / _nrbc)).toFixed(1);
			$('#merat').val(mer);
			}else{
			$('#merat').val('Not applicable');
			}


	});//end of function

// Change final input format
	$("#switchtext").on("click", function(){
		var str = $("#diffOut").val();
		if ($(this).hasClass("active")){
            var str_new = str.replace(/%\n/gm, "%; ");
            console.log(str_new);
            $("#diffOut").val(str_new);
        } else {
            $("#diffOut").val(str);
		}
	});
});
