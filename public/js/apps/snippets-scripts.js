$(window).on('load', function(){
  // display results from db
    $('.rowselect').on('click', function(){
        console.log('rowselect clicked');
        var sel_id = $(this).attr('id');

        $.post("reported.php", //Required URL of the page on server

            { // Data Sending With Request To Server

                rowid: sel_id

            },

            function(data,status){ // Required Callback Function

                $('#outPut-1').val(data['micros']);

                $('#outPut-2').val(data['finals']);

                $('#outPut-4').val(data['comments'])

                $('#search_id').val(data['entry_id'])

                $('#search_key').val(data['keywords'])

                $('#search_class').val(data['spc_class'])

            },

            "json");

    });


  // update results with {site} or {value} placeholders
    $('#outPut-1').on('focus', function(){
        var txt = $(this).val();
        var site = $('#outPut-2').val();
        if (txt.indexOf("{site}") >=0){
            var dump = prompt('Enter location');
            console.log(dump);
            txt = txt.replace(/{site}/, "'"+dump+"'");
            site = site.replace(/,.*,/, ", "+dump.toUpperCase()+",");
        }else if (txt.indexOf("{value}") >=0){
            var dump = prompt('Enter location');
            txt = txt.replace(/{value}/, dump);
        }
        $('#outPut-1').val(txt);
        $('#outPut-2').val(site);
        $(this).blur;
    });

    // NEW ENTRY SUBMIT

    $("#ent_submit").on("click", function(e){

        //$("#formdata").submit(function(e) {
        var url = "posted.php"; // the script where you handle the form input.
        e.preventDefault(); // avoid to execute the actual submit of the form.

        $.ajax({

            type: "POST",

            url: url,

            data: $("#formdata").serialize(), // serializes the form's elements.

            success: function(data)

            {

                alert(data) ;

                window.location.href = 'index.php?=successfullyadded';
                //console.log(data);

                $("#formdata")[0].reset(); // reset form and clear all hidden inputs
            }
        });
        //});
    });


    // update snippet
    setTimeout(function(){ $('.logerror').fadeOut(); $('.logsuccess').fadeOut();  }, 5000);

    $('.searchresults tbody tr').click(function () {
        var id = $(this).attr('id');
        $('#setHere').val(id);
        console.log(id);
    });

    $('.updateit').click(function () {
        var micros = $('#outPut-1').val();
        var finals = $('#outPut-2').val();
        var comments = $('#outPut-3').val();
        var id = $('#setHere').val();

        $.post('updateit.php', {micros:micros, finals:finals, comments:comments, id:id}, function (data) {
            alert(data);
        });

    });

    // instantiate tags
    $("#ent_key").tagit({

        allowSpaces: true,

        fieldname: "keywords" //Each tag's hidden input field will have this name. If you're using PHP, you may want to use something like itemName[fieldName][] for this option's value.

    });

});






/**
 * Created by chandrakrishnan on 7/8/2017.
 */
