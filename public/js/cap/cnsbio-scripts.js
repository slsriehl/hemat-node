$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/




//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/

    $('select[id*="box"]').on('change', function(){
        var itemid = this.id;  // get select id
        var itemnum = parseFloat(itemid.match(/\d+/)); // get numeric value from above
        itemnum ++
        $('#s2id_box'+itemnum).show();
        $('#s2id_box'+itemnum).closest('div .test').show(); // show next select box
    });

    $('.embryonal').hide();
    $('.test').hide();
    for (var i=1; i<20; i++){
        $('#s2id_box'+[2*i]).hide();
    }

    $('#type').on('change', function(){
        var sel = $(this).val();
        if (sel == 'Glioma'){
            $('.gliomas').show();
            $('.embryonal').hide();
        } else {
            $('.gliomas').hide();
            $('.embryonal').show();
        }
    });


    $('#box1').change(function(){
        var sel = $('#box1').val();
        if (sel == 'Present') {
            $('#box1_2').show();}
        else {
            $('#box1_2').hide();}
    });

    $('#box2').change(function(){
        var sel = $('#box2').val();
        if (sel == 'Other') {
            $('#box2_2').show();}
        else {
            $('#box2_2').hide();}
    });

    $('#box4').change(function(){
        var sel = $('#box4').val();
        if (sel == 'Other') {
            $('#box4_2').show();}
        else {
            $('#box4_2').hide();}
    });

    $('#box5').change(function(){
        var sel = $('#box5').val();
        if (sel == 'Polysomy') {
            $('#box5_2').show();}
        else {$('#box5_2').hide();}
        if (sel == 'Monosomy') {
            $('#box5_3').show();}
        else {$('#box5_3').hide();}
    });

    $('#box6').change(function(){
        var sel = $('#box6').val();
        if (sel == 'Other') {
            $('#box6_2').show();}
        else {
            $('#box6_2').hide();}
    });

    $('#box8').change(function(){
        var sel = $('#box8').val();
        if (sel == 'Other') {
            $('#box8_2').show();}
        else {
            $('#box8_2').hide();}
    });

    $('#box9').change(function(){
        var sel = $('#box9').val();
        if (sel == 'Present') {
            $('#box9_2').show();}
        else {
            $('#box9_2').hide();}
    });

    $('#box10').change(function(){
        var sel = $('#box10').val();
        if (sel == 'IHC') {
            $('#box10_2').show();}
        else {$('#box10_2').hide();}
        if (sel == 'Other') {
            $('#box10_3').show();}
        else {$('#box10_3').hide();}
    });


    $('#box12').change(function(){
        var sel = $('#box12').val();
        if (sel == 'Other') {
            $('#box12_2').show();}
        else {
            $('#box12_2').hide();}
    });

    $('#box13').change(function(){
        var sel = $('#box13').val();
        if (sel == 'Polysomy') {
            $('#box13_2').show();}
        else {$('#box13_2').hide();}
        if (sel == 'Monosomy') {
            $('#box13_3').show();}
        else {$('#box13_3').hide();}
    });

    $('#box14').change(function(){
        var sel = $('#box14').val();
        if (sel == 'Other') {
            $('#box14_2').show();}
        else {
            $('#box14_2').hide();}
    });

    $('#box15').change(function(){
        var sel = $('#box15').val();
        if (sel == 'Present') {
            $('#box15_2').show();}
        else {
            $('#box15_2').hide();}
    });

    $('#box16').change(function(){
        var sel = $('#box16').val();
        if (sel == 'Other') {
            $('#box16_2').show();}
        else {
            $('#box16_2').hide();}
    });

    $('#box18').change(function(){
        var sel = $('#box18').val();
        if (sel == 'Other') {
            $('#box18_2').show();}
        else {
            $('#box18_2').hide();}
    });

    $('#box19').change(function(){
        var sel = $('#box19').val();
        if (sel == 'Other mutation') {
            $('#box19_2').show();}
        else {
            $('#box19_2').hide();}
    });

    $('#box20').change(function(){
        var sel = $('#box20').val();
        if (sel == 'Other method') {
            $('#box20_2').show();}
        else {$('#box20_2').hide();}
        if (sel == 'Other antibody clone') {
            $('#box20_3').show();}
        else {$('#box20_3').hide();}
    });

    $('#box22').change(function(){
        var sel = $('#box22').val();
        if (sel == 'Other') {
            $('#box22_2').show();}
        else {
            $('#box22_2').hide();}
    });

    $('#box24').change(function(){
        var sel = $('#box24').val();
        if (sel == 'Other') {
            $('#box24_2').show();}
        else {
            $('#box24_2').hide();}
    });


    $('#box26').change(function(){
        var sel = $('#box26').val();
        if (sel == 'Other') {
            $('#box26_2').show();}
        else {
            $('#box26_2').hide();}
    });

    $('#box28').change(function(){
        var sel = $('#box28').val();
        if (sel == 'Other') {
            $('#box28_2').show();}
        else {
            $('#box28_2').hide();}
    });

    $('#box30').change(function(){
        var sel = $('#box30').val();
        if (sel == 'Clone') {
            $('#box30_2').show();}
        else {
            $('#box30_2').hide();}
    });

    $('#box32').change(function(){
        var sel = $('#box32').val();
        if (sel == 'Other') {
            $('#box32_2').show();}
        else {
            $('#box32_2').hide();}
    });

    $('#box34').change(function(){
        var sel = $('#box34').val();
        if (sel == 'Other') {
            $('#box34_2').show();}
        else {
            $('#box34_2').hide();}
    });

    $('#box36').change(function(){
        var sel = $('#box36').val();
        if (sel == 'Other') {
            $('#box36_2').show();}
        else {
            $('#box36_2').hide();}
    });

    $('#box38').change(function(){
        var sel = $('#box38').val();
        if (sel == 'Other') {
            $('#box38_2').show();}
        else {
            $('#box38_2').hide();}
    });

    $('#box40').change(function(){
        var sel = $('#box40').val();
        if (sel == 'Present') {
            $('#box40_2').show();}
        else {
            $('#box40_2').hide();}
    });

    $('#box41').change(function(){
        var sel = $('#box41').val();
        if (sel == 'Other') {
            $('#box41_2').show();}
        else {
            $('#box41_2').hide();}
    });

//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('#writeReport').on('click', function () {




        $('#outPut-1').val(captext);

    });
});
