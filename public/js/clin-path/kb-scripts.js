$(window).on('load', function() {

// calculate maternal blood volume
    $('.mat_data').on('input', function () {
        var mat_height = $('#mat_height').val();
        var mat_weight = $('#mat_weight').val();
        var mat_unit = $('#mat_unit').val();


        if ((mat_height.length > 0) && (mat_weight.length > 0)) {

            mat_height = parseFloat(mat_height);
            mat_weight = parseFloat(mat_weight);


            if (mat_height >= 100) { // height in cm

                mat_height = (mat_height / 2.54); // convert cm to inches
                console.log('CONVERTED ht: ' + mat_height);
            }
            if (mat_unit == 'kg') {
                mat_weight = (mat_weight / 0.453592); // convert kgs to lbs
                console.log('CONVERTED wt: ' + mat_weight);
            }

            var mat_bv = (Math.sqrt((mat_weight * mat_height) / 3131)) * 2370;
            mat_bv = Math.round(mat_bv);
            console.log(mat_bv);
            $('#mat_blood').val(mat_bv);
        }
    });

// fetal RBC counter
    $('.counter').on('mousedown', function () {
        var sel = this.id;
        var fet = $('#fet_cnt').val();
        var mat = $('#mat_cnt').val();

        if (sel == 'fetal') {
            fet++;
        } else if (sel == 'maternal') {
            mat++;
        }
        // Show RBCs counted
        $('#fet_cnt').val(fet);
        $('#mat_cnt').val(mat);

        // Fetal RBC% calculation
        var fet_ratio = (fet) / (fet + mat);
        var fet_pct = (fet_ratio * 100).toFixed(2);
        $('#fet_pct').val(fet_pct);
    });

// RHIG calculation

    $('#calc').on('click', function () {
        var output = 'RhIG dose calculation\n\n' +
            'Volume of fetal bleed = #AAA ml\n' +
            'Vials of RhIG = #BBB\n';

        var mat_bv = parseFloat($('#mat_blood').val()).toFixed(2);
        var fet_ratio = parseFloat($('#fet_pct').val()) / 100;
        var fet_bleed = fet_ratio * mat_bv;
        if (fet_bleed > 0) {
            var rhig = Math.round(fet_bleed / 30) + 1;
            output = output.replace(/#AAA/, fet_bleed.toFixed(1)).replace(/#BBB/, rhig);
        } else {
            output = output.replace(/#AAA/, "0").replace(/#BBB/, "None");
        }

        $('#rhig_out').val(output);


    });
});
/**
 * Created by Chandra Krishnan on 11/29/2017.
 */
