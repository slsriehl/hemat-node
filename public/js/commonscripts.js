
$(window).on('load', function() {
// instantiate copy button
    new Clipboard('.copy');


// instantiate date picker
    $('.datepicker').datepicker({
        todayBtn: "linked",
        orientation: "bottom auto",
        todayHighlight: true,
        autoclose: true
    });

// Add highlight to checkboxes
    $('input:checkbox').click(function () {
        $(this).parent().toggleClass('highlight');
    });


// Filter nav bar links with search box
    // create new expression for case insensitive search
    jQuery.expr[':'].casecontains = function(a, i, m) {
        return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };

// Case insensitive method for filter
    jQuery.expr[":"].caseontains = jQuery.expr.createPseudo(function(arg) {
        return function( elem ) {
            return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });

 // nav-bar search filter - ##note! nav.php must be loaded in nav to work.
    $('#nav-search').on('keyup', function() {
        var input = $('.search-filter').val();
        console.log('input: ' + input);
        if (input.length >1) {
            console.log('input not zero');
            // first hide the links lists from view
            $('.link-search li').hide();
            // but secretly unhide the collapsed links
            // using .show, so the nested uls can be viewed
            $('.link-search .collapse').show();
            // then filter in the matching links only
            $('.link-search').find('li:casecontains("' + input + '")').show();
        } else {
            // secretly unhide the collapsed links
            $('.link-search .collapse').hide();
            // if search is empty, show the div and reset columns
            $('.link-search li').show();
        }
    });


// reset form button via quick page reload
    $('#Reset').on('click', function(){
        location.reload();
    });

// load tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

// load popovers
$(function () {
    $('[data-toggle="popover"]').popover()
});


// IHC box script
    var autocomp_opt = {
        source: ["ACTH","Adenovirus","ALK-1","A1-AT","AFP","Amyloid-A","APP","B72.3","INI1","BCL2","BCL6","BER-Ep","Beta-catenin","Ber-EP4","BKVirus","BRAFV600E","C4d","CA125","Calcitonin","Calponin","Calretinin","CD1a","CD2","CD3","CD4","CD5","CD7","CD8","CD10","CD15","CD20","CD21","CD23","CD25","CD30","CD34","CD43","CD44","CD45","CD45RO","CD56","CD57","CD61","CD68","CD71","CD79a","CD99","CD117","CD123","CD138","CDX2","CEA-mono","CEA-poly","Chromogranin","CMV","ColIV","CyclinD1","CDK4","cytokeratin 34BE12","cytokeratin 8","cytokeratin 5/6","cytokeratin 7","cytokeratin AE1/3","cytokeratin Cam5.2","cytokeratin 17","cytokeratin 19","cytokeratin 20","cytokeratin MAK-6","D2-40","DOG-1","Desmin","E-cad","EBV-LMP","EBV-ISH","EMA","ER","FactorXIIIa","FSH","Galectin-3","Gastrin","GCDFP","GFAP","Glucagon","GLUT-1","Glut-Synth","GlycophorinA","Glypican-3","GH","H.P.","HBME-1","HBcore","HBsurface","HCG","HepPar1","HER2/Neu(IHC)","HSVI&II","Actin,muscle","HHV-8","HMB45","HPV-HR(ISH)","HMB45","HPL","IDH-1","IgA","IgG","IgM","Inhibin","Insulin", "INI-1", "JCVirus","Kappa(IHC)","Lambda(IHC)","Kappa(ISH)","Lambda(ISH)","Ki-67(MIB1)","LH","Lysozyme","Mast-celltrypt","MelanA","MelanomaAA","Mammaglobin","MAP-2","MITF","MLH-1","MOC-31","MSH-2","MSH-6","MUM-1","MPO","Myogenin","Neu-N","NF","NSE","OCT-2","OCT3/4","p16","p40", "p504s","p53","p63","Parainfluenza","ParvoB19","PAX-5","PAX-8", "PD-1", "PDL-1", "PDGF-b","PE10","Perforin","pHH3","PLAP","PMS-2","PR","Prolactin","PTH","Prostatetriple","PSA","PSAP","RCC","RSV","S100","SALL4","SMA","SMMHC","Smoothelin","Somatostatin","SurfactantA","SurfactantB","Synaptophysin","Tau","TdT","Thyroglobulin","Toxoplasma","Transthyretin","Trypsin","TSH","TTF-1","Tubulin","Tyrosinase","Ubiquitin","Uroplakin","Varicella","Villin","WT-1"],
        appendTo: '#IHCbox'
    };
    var autocomp_opt2 = {
        source: [
            "High background",
            "Retained nuclear expression",
            "Stains internal vessels",
            "Weak membranous",
            "Weak nuclear",
            "Weak, diffuse",
            "Strong, diffuse",
            "Strong membranous",
            "Strong nuclear",
            "Golgi pattern",
            "Membranous and golgi pattern",
            "Highlights small T-cells",
            "Highlights small B-cells",
            "Highlights atypical cells",
            "Highlights large cells",
            "No support for carcinoma",
            "No support for rhabdomyosarcoma",
            "No support for nerve sheath or melanoma",
            "No support for lymphoma",
            "No support for classical Hodgkin lymphoma"
        ],
        appendTo: '#IHCbox'
    };

    // init jquery autocomplete with IHCs
    $(".search").autocomplete(autocomp_opt);
    $(".usercomm").autocomplete(autocomp_opt2);

    // ihc combine scripts
    // add new row
    $(".addrow").on('click', function(){
        var new_tr = $('<tr>'+
            '<td scope="row">'+
            '<input class="form-control form-control-sm search" type="text" >'+
            '</td>'+
            '<td>' +
            '<select class="form-control selectpicker form-control-sm ihc_val">'+
            '<option selected hidden>Value?</option><option value="POS">POS</option><option value="NEG">NEG</option><option value="EQUIV">EQUIVOCAL</option>'+
            '</select>'+
            '</td>'+
            '<td>' +
            '<input placeholder="Enter any Comments" class="form-control form-control-sm usercomm" type="text">'+
            '</td>'+
            '<td><button class="btn btn-outline-danger p-1 remrow" data-toggle="tooltip" data-placement="right" title="Delete row"><small>X</small></button></td>'+
            '</tr>');
        $('.search', new_tr).autocomplete(autocomp_opt); //attach autocomplete to dynamically created input
        $('.usercomm', new_tr).autocomplete(autocomp_opt2); //attach autocomplete to dynamically created user comment

        $("#ihctable").append(new_tr);
    });
    // remove added row
    $("#ihctable").on('click','.remrow',function(){
        $(this).parent().parent().remove();
    });



    $('#ihcwrite').on('click', function(){

        // get row values
        var ab = [];
        var val = [];
        var com = [];
        var count = 1;
        var interest = $('#celltype').val();
        var header = 'Immunohistochemistry is performed (with working controls) to further characterize the process. Stains are summarized as follows:\n';
        var body = '\nCELLS OF INTEREST: '+interest+'\nANTIBODY ........... VALUE ... COMMENT\n';
        var ihcout= '';
        var des = $('#disclaimer').val();
        var desc = "\n\nThe immunoperoxidase and/or in situ hybridization stain(s) reported above were developed and their performance characteristics determined by " + des + ". They have not been cleared or approved by the U.S. Food and Drug Administration, although such approval is not required for analyte-specific reagents of this type. This test is used for clinical purposes. It should not be regarded as investigational or for research. This laboratory is certified under the Clinical Laboratory Improvement Amendments of 1988 (CLIA) as qualified to perform high complexity clinical laboratory testing. All controls show appropriate reactivity.";
        var interp = $('#ihc_interp').val();

        // array of antibodies
        $('.search').each(function(){
            var item = $(this).val();
            var dots = '.';
            var space = '';
            var len = 16 - item.length;
            for (var i = 0; i < len; i++){
                space += dots;
            }
            item = item + ' ' +space + ' ';
            ab.push(count+'. '+ item);
            count++;
        });

        // array of values
        $('.ihc_val').each(function(){
            var item = $(this).val();
            var dots = '.';
            var space = '';
            var len = 8 - item.length;
            for (var i = 0; i < len; i++){
                space += dots;
            }
            item = item + ' ' +space + ' ';
            val.push(item);
        });

        // array of comments
        $('.usercomm').each(function(){
            com.push($(this).val());
        });

        for (var i=0; i<ab.length; i++){
            ihcout += ab[i] + val[i] + com[i]+'\n';
        }
        console.log(ihcout);

        // final table
        if (des != "none" ) {
            ihcout = header + body + ihcout + desc ;
        }else {
            ihcout = header + body + ihcout ;
        }

        if (interp.length > 0){
            ihcout += '\n\nINTERPRETATION: '+interp;
        }

        $('#outPut-2').focus().val($('#outPut-2').val() + '\n\n'+ ihcout);

    });

    // Update interp textarea with mysql ajax request
    $("#ihc_preset").on('change', function() {
        $.ajax({
            type: "POST",
            url: "ajax/ihc_display.php",
            data: $('select#ihc_preset').serialize()
        }).done(function(data) {
            $('#ihc_interp').val(data);
        });

    });

    // Save new option/interp to database
    $("#ihc_save").on("click", function(e){

        //$("#formdata").submit(function(e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.

        $.ajax({

            type: "POST",

            url: "ajax/ihc_save.php",

            data: $("#formdata").serialize(), // serializes the form's elements.

            success: function(data)

            {

                alert(data) ;

                window.location.href = '../apps/ihc.php?=success';
                //console.log(data);

            }
        });
    });

		// //initialize bootstrap select
		// $('.selectpicker').selectpicker();

		//dismiss messages: hide and ajax to add to dismissed messages table
		$('.message-dismiss h2').on('click', function(event) {
			console.log('foo');
			$(this).parent().parent().slideUp(500, function() {
				$.ajax({
					type: 'POST',
					url: '/message/dismiss',
					data: {
						id: $(this).attr('id')
					}
				})
				.done(function(response) {
					console.log(response);
					if(response == true) {
						console.log('message dismissed!');
					} else {
						console.log('message not dismissed, try again');
					}
				})
			});
		});

		//show new case reference popup if new selected
		$('#caseRefSelect').on('change', function() {
			if($(this).val() == '-1') {
				$('#new-case-reference').modal('show');
				return;
			} else {
				return;
			}
		});

		//handler to submit new case reference to obj to be sent to back end
		$('#add-case-reference').on('submit', function(event) {
			event.preventDefault();
			console.log(event);
			$('#new-case-reference').modal('hide');
			dataObj.newCaseRef = $('#newCaseReference').val();
			console.log(dataObj);
			var newRefOption = $('<option value="new" selected="selected">');
			newRefOption.append(dataObj.newCaseRef);
			$('#caseRefSelect').append(newRefOption);
			//return false;
		});



		//send a report to the back end for storage and PDFing
		$(document).off('click', '#pdf-report').on('click', '#pdf-report', function(event) {
			if($('#caseRefSelect').val() != 'new') {
				dataObj.referenceId = $('#caseRefSelect').val()
			}
			console.log(dataObj);
			//send the report to the back end to be PDFed and saved
			$.ajax({
				url: '/report/submit',
				type: 'POST',
				data: dataObj
			})
			.done(function(response) {
				console.log(response);
			})
		});

    /*/Google analytics
     var _gaq = _gaq || [];
     _gaq.push(['_setAccount', 'UA-37125342-1']);
     _gaq.push(['_trackPageview']);

     (function() {
     var ga = document.createElement('script');
     ga.type = 'text/javascript';
     ga.async = true;
     ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
     var s = document.getElementsByTagName('script')[0];
     s.parentNode.insertBefore(ga, s);
     })();
     */

});
