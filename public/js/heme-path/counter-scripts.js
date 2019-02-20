$(window).on("load", function(){

	// init sound
	var beep = new Audio('../media/beep.mp3');

// set localStorage variables
    if(localStorage.getItem('box1')) {
        $('#box1').val(localStorage.getItem('box1'));
        $('#box1_2').val(localStorage.getItem('box1')+'%')
    }
    if(localStorage.getItem('box2')) {
        $('#box2').val(localStorage.getItem('box2'));
        $('#box2_2').val(localStorage.getItem('box2')+'%')
    }
    if(localStorage.getItem('box3')) {
        $('#box3').val(localStorage.getItem('box3'));
        $('#box3_2').val(localStorage.getItem('box3')+'%')
    }
    if(localStorage.getItem('box4')) {
        $('#box4').val(localStorage.getItem('box4'));
        $('#box4_2').val(localStorage.getItem('box4')+'%')
    }
    if(localStorage.getItem('box5')) {
        $('#box5').val(localStorage.getItem('box5'));
        $('#box5_2').val(localStorage.getItem('box5')+'%')
    }
    if(localStorage.getItem('box6')) {
        $('#box6').val(localStorage.getItem('box6'));
        $('#box6_2').val(localStorage.getItem('box6')+'%')
    }
    if(localStorage.getItem('box7')) {
        $('#box7').val(localStorage.getItem('box7'));
        $('#box7_2').val(localStorage.getItem('box7')+'%')
    }
    if(localStorage.getItem('box8')) {
        $('#box8').val(localStorage.getItem('box8'));
        $('#box8_2').val(localStorage.getItem('box8')+'%')
    }
    if(localStorage.getItem('box9')) {
        $('#box9').val(localStorage.getItem('box9'));
        $('#box9_2').val(localStorage.getItem('box9')+'%')
    }
    if(localStorage.getItem('box10')) {
        $('#box10').val(localStorage.getItem('box10'));
        $('#box10_2').val(localStorage.getItem('box10')+'%')
    }
    if(localStorage.getItem('box11')) {
        $('#box11').val(localStorage.getItem('box11'));
        $('#box11_2').val(localStorage.getItem('box11')+'%')
    }
    if(localStorage.getItem('box12')) {
        $('#box12').val(localStorage.getItem('box12'));
        $('#box12_2').val(localStorage.getItem('box12')+'%')
    }
    if(localStorage.getItem('box13')) {
        $('#box13').val(localStorage.getItem('box13'));
        $('#box13_2').val(localStorage.getItem('box13')+'%')
    }
    if(localStorage.getItem('box14')) {
        $('#box14').val(localStorage.getItem('box14'));
        $('#box14_2').val(localStorage.getItem('box14')+'%')
    }
    if(localStorage.getItem('box15')) {
        $('#box15').val(localStorage.getItem('box15'));
        $('#box15_2').val(localStorage.getItem('box15')+'%')
    }





    // focus on text area
    $('#textarea').focus().alphanum({allowNumeric:true, allowLatin:false, allow : '+-/*0.'});


// Legend variables
    $('input:text').on("blur", function (){

        for (var i=1; i<16; i++){
            var box_i = $('#box'+i).val();
            $('#box'+i+'_2').val(box_i+'%');
        }
    });



// Character frequency counter
    $("#textarea").on('keyup',function () {
        var _limit = $('#limit').val();
        var box = $(this).val();
        var len = box.length;
        $('#counter').val(len);

        if (box.match(/1/g) !== null) {
            var item1 = box.match(/1/g).length;
            var item1_pct = ((item1 / len) * 100).toFixed(1);
            $('#box_1_num').val(item1);
            $('#box_1_pct').val(item1_pct);
        }
        if (box.match(/2/g) !== null) {
            var item2 = box.match(/2/g).length;
            var item2_pct = ((item2 / len) * 100).toFixed(1);
            $('#box_2_num').val(item2);
            $('#box_2_pct').val(item2_pct);
        }
        if (box.match(/3/g) !== null) {
            var item3 = box.match(/3/g).length;
            var item3_pct = ((item3 / len) * 100).toFixed(1);
            $('#box_3_num').val(item3);
            $('#box_3_pct').val(item3_pct);
        }
        if (box.match(/4/g) !== null) {
            var item4 = box.match(/4/g).length;
            var item4_pct = ((item4 / len) * 100).toFixed(1);
            $('#box_4_num').val(item4);
            $('#box_4_pct').val(item4_pct);
        }
        if (box.match(/5/g) !== null) {
            var item5 = box.match(/5/g).length;
            var item5_pct = ((item5 / len) * 100).toFixed(1);
            $('#box_5_num').val(item5);
            $('#box_5_pct').val(item5_pct);
        }
        if (box.match(/6/g) !== null) {
            var item6 = box.match(/6/g).length;
            var item6_pct = ((item6 / len) * 100).toFixed(1);
            $('#box_6_num').val(item6);
            $('#box_6_pct').val(item6_pct);
        }
        if (box.match(/7/g) !== null) {
            var item7 = box.match(/7/g).length;
            var item7_pct = ((item7 / len) * 100).toFixed(1);
            $('#box_7_num').val(item7);
            $('#box_7_pct').val(item7_pct);
        }
        if (box.match(/8/g) !== null) {
            var item8 = box.match(/8/g).length;
            var item8_pct = ((item8 / len) * 100).toFixed(1);
            $('#box_8_num').val(item8);
            $('#box_8_pct').val(item8_pct);
        }
        if (box.match(/9/g) !== null) {
            var item9 = box.match(/9/g).length;
            var item9_pct = ((item9 / len) * 100).toFixed(1);
            $('#box_9_num').val(item9);
            $('#box_9_pct').val(item9_pct);
        }
        if (box.match(/0/g) !== null) {
            var item0 = box.match(/0/g).length;
            var item0_pct = ((item0 / len) * 100).toFixed(1);
            $('#box_10_num').val(item0);
            $('#box_10_pct').val(item0_pct);
        }
        if (box.match(/\./g) !== null) {
            var item11 = box.match(/\./g).length;
            var item11_pct = ((item11 / len) * 100).toFixed(1);
            $('#box_11_num').val(item11);
            $('#box_11_pct').val(item11_pct);
        }
        if (box.match(/\//g) !== null) {
            var item12 = box.match(/\//g).length;
            var item12_pct = ((item12 / len) * 100).toFixed(1);
            $('#box_12_num').val(item12);
            $('#box_12_pct').val(item12_pct);
        }
        if (box.match(/\*/g) !== null) {
            var item13 = box.match(/\*/g).length;
            var item13_pct = ((item13 / len) * 100).toFixed(1);
            $('#box_13_num').val(item13);
            $('#box_13_pct').val(item13_pct);
        }
        if (box.match(/\-/g) !== null) {
            var item14 = box.match(/\-/g).length;
            var item14_pct = ((item14 / len) * 100).toFixed(1);
            $('#box_14_num').val(item14);
            $('#box_14_pct').val(item14_pct);
        }
        if (box.match(/\+/g) !== null) {
            var item15 = box.match(/\+/g).length;
            var item15_pct = ((item15 / len) * 100).toFixed(1);
            $('#box_15_num').val(item15);
            $('#box_15_pct').val(item15_pct);
        }

        if (len >= _limit) {
								beep.play();
                alert ('You have counted '+_limit+' cells.');

            }


    });//end of function

    $('#printDiff').on('click', function (){
        // start counter
        this.counter = this.counter || 0;
        this.counter++;
        // setting field variables
        var item_pct = [];
        var item_name = [];
        for (var i=1; i<16; i++){
            item_pct[i] = $('#box_'+i+'_pct').val();
            item_name[i]= $('#box'+i).val();
        }

        var _limit = $('#limit').val();

        var diffStr = _limit+' count distribution:\n';
        for (var i=1; i<16; i++){
            if (item_name[i] != ''){
                diffStr += item_name[i]+': ' +item_pct[i]+'%\n'
            }
        }

        if (diffStr.length < 25){
            alert("Please define at least one label before counting.")
        }

        $('#diffOut').val(diffStr);

        // append each printed diff into "history" window with counter to label them
        $('#diffHist').val($('#diffHist').val() + this.counter + ':\n' +diffStr+ '\n\n');

        // Localstorage variables
        var label1 = document.getElementById("box1").value;
        localStorage.setItem("box1", label1);

        var label2 = document.getElementById("box2").value;
        localStorage.setItem("box2", label2);

        var label3 = document.getElementById("box3").value;
        localStorage.setItem("box3", label3);

        var label4 = document.getElementById("box4").value;
        localStorage.setItem("box4", label4);

        var label5 = document.getElementById("box5").value;
        localStorage.setItem("box5", label5);

        var label6 = document.getElementById("box6").value;
        localStorage.setItem("box6", label6);

        var label7 = document.getElementById("box7").value;
        localStorage.setItem("box7", label7);

        var label8 = document.getElementById("box8").value;
        localStorage.setItem("box8", label8);

        var label9 = document.getElementById("box9").value;
        localStorage.setItem("box9", label9);

        var label10 = document.getElementById("box10").value;
        localStorage.setItem("box10", label10);

        var label11 = document.getElementById("box11").value;
        localStorage.setItem("box11", label11);

        var label12 = document.getElementById("box12").value;
        localStorage.setItem("box12", label12);

        var label13 = document.getElementById("box13").value;
        localStorage.setItem("box13", label13);

        var label14 = document.getElementById("box14").value;
        localStorage.setItem("box14", label14);

        var label15 = document.getElementById("box15").value;
        localStorage.setItem("box15", label15);

				dataObj.singleSection = $('#diffOut').val();
				makeCreatePdfBtn();
    });

    $('#resetDiff').on("click", function(){
        $('#diffOut').val('');
        $('#counter').val('');
        $('#textarea').val('');
        localStorage.clear();
        for (var i=0; i<16; i++){
            $('#box_'+i+'_pct').val('');
            $('#box_'+i+'_num').val('');
        }
        location.reload();
    });


    // Change final input format
    $("#switchtext").on("click", function(){
        const str = $("#diffOut").val();
        if ($(this).hasClass("active")){
            var str_new = str.replace(/; /gm, "\n");
            $("#diffOut").val(str_new);
        } else {
            str_new = str.replace(/%\n/gm, "%; ").replace(/; \nM:E/, "\n\nM:E");
            console.log(str_new);
            $("#diffOut").val(str_new);
        }
    });

});


/**
 * Created by chandrakrishnan on 4/30/2017.
 */
