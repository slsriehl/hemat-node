$(window).on('load', function(){
    $('#writeReport').on('click', function(){
        var temp1 = $('#temp1').val();
        if (temp1 >= 50){temp1+="F";}else if(temp1<50){temp1+="C"};
        var temp2 = $('#temp2').val();
        if (temp2 >= 50){temp2+="F";}else if(temp2<50){temp2+="C"};
        var blood_type = $('#blood_type').val();
        var cc = $('#cc').val();
        var bp1 = $('#bp1').val();
        var bp2 = $('#bp2').val();
        var prod = $('#prod').val();
        var prod_type = $('#prod_type').val();
        var hemol = $('#hemol').val();
        var date1 = $('#date1').val();
        var date2 = $('#date2').val();
        var treat  = $('#LR').val().join(", ").replace(/,(?=[^,]*$)/, ' and');
        var pretest = $('#pretest').val();
        var time1 = $('#time1').val();
        var time2 = $('#time2').val();
        var posttest = $('#posttest').val();
        var symptoms = $('#symptoms').val().join(', ').replace(/,(?=[^,]*$)/, ' and');
        var premed = $('#premed').val();
        var dat = $('#dat').val();
        var interp = $('#interp').val();



        var text = '';

        text += 'TRANSFUSION REACTION INVESTIGATION\n\nTRANSFUSION REACTION SIGNS AND SYMPTOMS:  After receipt of ' + blood_type +', '+treat+' '+ prod +' unit, the patient showed '+symptoms+'. Premedication ' + premed+


            '\n\nPRE-TRANSFUSION VITAL SIGNS @ '+time1+', '+date1+'\n'+
            'Temperature:\t\t'+temp1+

            '\nBlood Pressure:\t\t'+bp1+

            '\n\nPOST-TRANSFUSION VITAL SIGNS @ '+time2+', '+date2+'\n'+
            'Temperature:\t\t'+temp2+

            '\nBlood Pressure:\t\t'+bp2+

            '\n\nBLOOD PRODUCTS RECEIVED AND TYPE:\n'+
            'Patient Blood type:\t\t'+blood_type.replace(/a/,'').replace(/n /,'').replace(/ /,'')+

            '\nBlood Product type:\t\t'+prod_type+

            '\n\nLABORATORY INVESTIGATION:\n'+
            'Clerical Check:\t\t\t'+cc+

            '\nVisual Hemolysis Check:\t\t'+hemol+

            '\nPre-transfusion testing:\t'+pretest+

            '\nPost-transfusion testing:\t'+posttest+

            '\nDAT:\t\t\t\t'+dat+


            '\n\nFINAL DIAGNOSIS:\n '+dxOuts['dxOut'+interp] +
            '\n\nCOMMENTS:\n'+commLines['commLine' +interp];

        $('#outPut-1').val(text);

    });

});



/**
 * Created by Chandra Krishnan on 6/15/2017.
 */
