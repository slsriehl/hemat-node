$(window).on('load', function(){
// Hide dialogs on start
    $('.twin_dialog').dialog({autoOpen:false});

    $('.umbilical').dialog({autoOpen:false});

    $('.dialog-extent').dialog({autoOpen:false});

    $('#show-plac-report-block').on('click', function(event) {
        var block = $('#plac-report-block');
        var title = $('#plac-report-title');
        var isHidden = block.hasClass('d-none');
        if(isHidden) {
            block.removeClass('d-none');
            title.text('Collapse');
        } else {
            block.addClass('d-none');
            title.text('Expand');
        }
    });

    // GLOBAL VARIABLES
    var fullJSON;
    var sorted;
    var percentages = [10,25,50,75,90];
    var percentilesHistoric;
    var percentilesRealtime;
    var countries, states, cities;
    var minDataPoints = 10;

    // *********************************************
    // GET REALTIME REFERENCE
    // *********************************************

    $.ajax({
            url: 'https://hematogones.com/surg-path/placenta-data',
            type: 'GET',
            dataType: "json",
            success: function(json){
                fullJSON = json;
                // Get lists of all countries, states, and cities in the dataset
                countries = getAllGeo(json,"country").map(function(obj,index){
                    return isoCountries[obj];
                });
                states = getAllGeo(json,"state");
                cities = getAllGeo(json,"city");
            },
            error: function(err)
            {
            }

    }).done(function(response){
             console.log("Got Data from DB");
    });



//***************************************************************************************//
// SCRIPTS PERTAINING TO THE PLACENTA REFERENCE AND SENDING DATA TO DB
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
                        alert('Are you sure this placenta weighs more than 2000g? The database does not support that kind of weight. Please check your entry and try again');
                        e.preventDefault();
                        $(this).val('');
                    }
            }
    });

// PLACENTA HISTORIC REFERENCE RANGE AND DATA ENTRY
    $('.getref').on('click', function (e) {
        e.preventDefault();
        var plac_ga = $('#plac_age').val();
        var plac_weight = $('#plac_wt').val();
        var wk = parseFloat($('#plac_age').val());
        var plac_wt_num = Number($('#plac_wt').val());
        var plac_ref = $('#reference').val();
        var plac_cite = $('#reference').find(":selected").data("ref");
        var plac_type = $("#plac_type").val();
        var minWeight = 50;

        if(!(wk > 0)){
            alert("You forgot to enter a gestational age!");
            return;
        }
        if (plac_weight.length <1){
            alert("You forgot to enter a placenta weight!");
            return;
        }
        if (plac_weight < minWeight){ // prevent any inputs
            console.log("placenta weight error");
            alert('Are you sure this placenta weighs less than 50g? The database does not support that kind of weight. Please check your entry and try again');
            return;
        }


    // *********************************************
    // Send placenta reference data to database
    // *********************************************

        let placObj = {};
        placObj.ga = $('#plac_age').val();
        placObj.weight = $('#plac_wt').val();
        placObj.twin = $('#plac_type option:selected').data('twin');

        // if statement here when user agrees to submit data...
        var checked = $("#agreement").prop('checked');

        if (checked){
            console.log("Form submit called");
            // Set placenta weights data object

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

                        // AJAX success page
                        $("#alert-1").show();
                        $(".getref").prop("disabled", true);
                        setTimeout(function() {
                            $("#alert-1").fadeOut('1000');
                            $(".getref").prop("disabled", false);
                        }, 1500);

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
        }

        var partTypes = handleSubmit(false,placObj,plac_ga,plac_weight,plac_wt_num,wk,plac_ref,plac_cite,plac_type);

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



        function handleSubmit(filter,placObj,plac_ga,plac_weight,plac_wt_num,wk,plac_ref,plac_cite,plac_type){

            var partTypes = $.extend(true, {}, partJson); // extended original JSON to this variable, so header replaces are reset on new values entered

            // GET PLACENTA PERCENTILES FROM STATIC REFERENCES
            if( plac_type == "partType501" ){ // twin
                console.log("twin reference");
                var wkObj = pinar_twin['wk' + wk];
                plac_cite = "Pinar H. et al. Pediatr Pathol Lab med 1996; 16:901-7.";
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

                console.log('here');

                console.log("Upper Index: "+upperIndex);
                console.log(percentiles);
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

                if (!filter){
                    $(".plac-range").val(plac_range);
                    $(".ref").text(plac_cite);
                }

            } else { // when reference ranges aren't available
                console.log("no data: "+wkObj);
                if (!filter){
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
            }
            if (!filter){
                $("#results").removeClass("d-none");
            }


        // *********************************************
        // Process Realtime Data
        // *********************************************

            var plac_range_2;
            var percentiles2;

            // Given the array of percentile ranges and the inputted weight, returns the text to display
            function displayTextFromPercents(percentiles,weight){
                // if the inputted weight is less than all the percentiles, then it's in the bottom range
                var p = "Less than " + percentiles[0].percentile + " percentile"                         
                // loop through the dictionary to find the percentile range into which that the inputted data point falls, and create the appropriate string to display
                percentiles.forEach(function(obj,index){
                    if (weight >= obj.plac_wt_num){
                        if (index == percentiles.length - 1){
                            p = "Greather than " + obj.percentile + " percentile";
                        } else {
                            p = "Between " + obj.percentile + " and " + percentiles[index+1].percentile + " percentiles";
                        }
                    }
                });
                return p;
            }  
        
                // Get realtime data from the database, filter it for the inputs, and sort it by weight
                sorted = filterJSON(fullJSON, placObj.ga, placObj.twin)
                
                // If there exists realtime data that matches the filters, reveal the data tables
                if (sorted.length > 0){
                    $("#div_dataTable").removeClass("d-none");
                    $("#div_summaryTable").removeClass("d-none");
                    // If the user just entered a new data point, temporarily remove the geo filter
                    if (!filter){
                        $("#geoInput").val('');
                        $("#geoSelection").val('0');
                        $("#geoInput").addClass('d-none');
                        $("#div_summaryTable2").addClass('d-none');
                    }
                    // If there exists realtime data, populate the full data table
                    populateTable(sorted);
                } else {
                    $("#div_dataTable").addClass("d-none");
                }
                // If there is not enough data, do not show a summary table and clear the graph
                if (sorted.length < minDataPoints){
                    console.log("Not enough data");
                    plac_range_2 = "Not enough data points available";
                    $("#div_summaryTable").addClass('d-none');
                    $("#div_summaryTable2").addClass('d-none');
                    $("#graphContainer").addClass('d-none');
                    $("#warningLabel").html("Not enough data points to display summary statistics");
                    $("#warningLabel").removeClass('d-none');
                } else {
                    percentiles2 = calculatePercents(percentages, sorted);  
                    if (!filter){  
                        plac_range_2 = displayTextFromPercents(percentiles2,placObj.weight)
                    }
                    // populate the summary table
                    populateSummary(percentiles2,placObj.ga,placObj.twin,"",sorted.length); 
                    // If there exists historic data, draw the graph. Otherwise, empty the graph
                    if (wkObj){
                        percentilesHistoric = Object.values(wkObj).reverse().map(function(num,index){
                            return Number(num);
                        });
                        percentilesRealtime = percentiles2.map(function(obj,index){
                            return obj.plac_wt_num;
                        });
                        drawGraph([percentilesHistoric, percentilesRealtime], sorted);
                    } else {
                        $("#graphContainer").empty();
                    }
                }

                if (!filter){
                 // change the filters down below to match the inputted data point
                    $("#plac_age_filter").val(placObj.ga);
                    $("#twin_filter").val(placObj.twin ? "partType501" : "partType500");
                    $("#geoSelection").val(0);
                    $("#geoInput").addClass('d-none');
                    // show the appropriate string with the realtime reference range
                    $(".plac-range-2").val(plac_range_2); 
                } 

                return partTypes;
        }

    // *********************************************
    // Helper Functions
    // *********************************************

        function filterJSON(JSON, age, twin){
            return JSON.filter(function(obj){
                return obj["gestage"] == age && obj["twin"] == twin;
            }).sort(function(a, b){
                    return a.weight-b.weight;
            })     
        }

        function filterArray(fullArray, criteria){
            return fullArray.filter(function(obj){
                var g = criteria[0];
                return g == "country" ? (isoCountries[obj[g]].toLowerCase() == criteria[1]) : (obj[g].toLowerCase() == criteria[1]);
            });
        }

        // Calculate each percentile as specified in the array named "percentages" using the mathematical formula for percentile calculation
        function calculatePercents(percentages, filteredArray){
            return percentages.map(function(percent,index){
                var i = (percent / 100) * filteredArray.length;
                var p;
                var suffix = percent % 10 == 1 ? "st" : (percent % 10 == 2 ? "nd" : (percent % 10 == 3 ? "rd" : "th"))
                if (Number.isInteger(i)){
                    p = (filteredArray[i-1]["weight"] + filteredArray[i]["weight"]) / 2
                } else {
                    p = filteredArray[Math.ceil(i) - 1]["weight"]
                }
                // create a dictionary with the weights and percentiles
                return {plac_wt_num: p, percentile: percent + "" + suffix};
            });
        }

    // *********************************************
    // Box & Whisker Graph
    // *********************************************

    var xScale;
    var colors = ['#879772','#325d8a','#ac112d'];
    var graphedGeo = false;
    var h = 200;
    var paddingSmall = 20;
    var paddingLarge = 150;
    var graphWidth = 600;
    var width = graphWidth + paddingLarge;
    var rectHeight = h/2 - paddingSmall;


// Function to draw the initial set of graphs
// "percentiles" is an array of 2 or 3 arrays, each array containing 5 weights for the 5 significant percentiles
// "sorted" is the full set of realtime data that matches the inputted filters
function drawGraph(percentiles, sorted, filtered=[]){
    var min = sorted[0]['weight'];
    var max = sorted[sorted.length-1]['weight'];
    var numGraphs = percentiles.length;
    var height = numGraphs * h - h/2;

    if (numGraphs == 3) {
        graphedGeo = true;
    } else {
        graphedGeo = false;
    }

    // Empty the graph, then append an svg with the specified height and width
    $("#graphContainer").empty();
    $("#graphContainer").removeClass('d-none');

    var svg = d3.select("#graphContainer")
        .append("svg")
        .attr("width", width)
        .attr("height", height+paddingSmall*3); 

    var g = svg.append("g")
        .attr("transform", "translate(0,"+paddingSmall+")") 

    // create the x-axis scale based on the min and max weight values
    xScale = d3.scaleLinear()
                .domain([min,max])
                .range([paddingLarge,width-paddingSmall])

    // for each set of percentiles, plot a box and whisker graph
    percentiles.forEach(function(set,index){
        var rect = g.append('rect')
            .attr("class",index == 2 ? "rectGeoData" : "rect")
            .attr('y',index*h)
            .attr('x',xScale(set[1]))
            .attr('height',rectHeight)
            .attr('width', xScale(set[3]) - xScale(set[1]))
            .attr('fill',colors[index])
            .attr('stroke-width',2)
            .attr('stroke','black');
        var midline = g.append('line')
            .attr("class",index == 2 ? "midlineGeoData" : "midline")
            .attr('x1',xScale(set[2]))
            .attr('x2',xScale(set[2]))
            .attr('y1',index*h)
            .attr('y2',rectHeight + index*h)
            .attr('stroke','black')
            .attr('stroke-width',2);
        var lowline = g.append('line')
            .attr("class",index == 2 ? "lowlineGeoData" : "lowline")
            .attr('x1',xScale(set[0]))
            .attr('x2',xScale(set[1]))
            .attr('y1',rectHeight/2 + index*h)
            .attr('y2',rectHeight/2 + index*h)
            .attr('stroke','black')
            .attr('stroke-width',2);
        var highline = g.append('line')
            .attr("class",index == 2 ? "highlineGeoData" : "highline")
            .attr('x1',xScale(set[3]))
            .attr('x2',xScale(set[4]))
            .attr('y1',rectHeight/2 + index*h)
            .attr('y2',rectHeight/2 + index*h)
            .attr('stroke','black')
            .attr('stroke-width',2);
    })

    // append the x-axis to the bottom and append an axis label
    var x_axis = d3.axisBottom().scale(xScale);
    var axis = g.append("g")
        .attr("transform", "translate(0,"+height+")")
        .call(x_axis);
    axis.append("text")
        .attr("y",paddingSmall * 3/2)
        .attr("x", paddingLarge + graphWidth/2)
        .text("Weight (g)")
        .attr("text-anchor", "middle")
        .style("fill", "black")

    // helper function to draw a text label in a group
    function textLabel(group,className,text,height){
        group.append("text")
        .attr('class',className)
        .attr("x",paddingSmall)
        .attr("y",height)
        .style("fill","black")
        .text(text)
    }

    // Append text labels for each box & whisker plot
    textLabel(g,"textLabel","Historic Reference",h*1/4);
    textLabel(g,"textLabel","Realtime Reference",h*5/4);

    // helper function to draw cirlces in a group
    function drawCircles(group,className,offset,rectHeight,xScale,color){
        group.append("circle")
        .attr("class",className)
        .attr('r',rectHeight/24)
        .attr('cy',function(d){return offset + Math.random() * rectHeight}) // randomize y coordinate of data points
        .attr('cx',function(d){return xScale(d.weight)})
        .style('fill',colors[color])
        .style("fill-opacity", .7)
        .attr('stroke',colors[color])
        .style('stroke-opacity',1)
    }

    // Append circles for each realtime data point
    var realtimeCircles = g.selectAll("realtimeData").data(sorted).enter();
    drawCircles(realtimeCircles,"realtimeData",h/2,rectHeight,xScale,1)

    // If a geo filter graph is also being plotted, append a text label and append circles for each data point
    if (numGraphs > 2) {
        textLabel(g,"textLabelGeo","Realtime Refernce with Filter",h*9/4);

        var geoCircles = g.selectAll("realtimeGeoData").data(sorted).enter();
        drawCircles(geoCircles,"realtimeGeoData",3*h/2,rectHeight,xScale,2);
    }
}

    
    // Function to update the 3rd plot based on a change to the geo filter
    function drawGraphGeo(percentilesGeo, g, v){     
         // make the opacity 0 for any data points that do not match the filter
        d3.selectAll(".realtimeGeoData")
            .transition().duration(5000)
            .style('fill-opacity',function(d) { 
                if (g != "country"){
                    return (d[g].toLowerCase() == v ? .7 : 0)
                } else {
                    return (isoCountries[d[g]].toLowerCase() == v ? .7 : 0)
                }
            })
            .style('stroke-opacity',function(d) { 
                if (g != "country"){
                    return (d[g].toLowerCase() == v ? 1 : 0)
                } else {
                    return (isoCountries[d[g]].toLowerCase() == v ? 1 : 0)
                }
            })    

            // move the elements of the box & whisker plot to match the updated percentiles
            d3.select(".rectGeoData")
            .transition().duration(5000)
            .attr('x',xScale(percentilesGeo[1]))
            .attr('width', xScale(percentilesGeo[3]) - xScale(percentilesGeo[1]))
            d3.select(".midlineGeoData")
            .transition().duration(5000)
            .attr('x1',xScale(percentilesGeo[2]))
            .attr('x2',xScale(percentilesGeo[2]))
            d3.select(".lowlineGeoData")
            .transition().duration(5000)
            .attr('x1',xScale(percentilesGeo[0]))
            .attr('x2',xScale(percentilesGeo[1]))
            d3.select(".highlineGeoData")
            .transition().duration(5000)
            .attr('x1',xScale(percentilesGeo[3]))
            .attr('x2',xScale(percentilesGeo[4]))
    }

    // *********************************************
    // Summary Data Table and Full Data Table 
    // *********************************************

        function getAllGeo(arr,selection){
            //creates a list of all the countries/states/cities in the dataset, sorts them, and filters out duplicates
            return arr.map(function(obj){
                return obj[selection];
            }).sort().filter(function(item, index, array) {
                return !index || (item != array[index - 1]);
            })
        }

        function closeAllLists(){
            $("#autocompleteList").empty();
            $("#autocompleteList").addClass('d-none');
        }

        // Given the array of options and the value of the text input, creates an autocomplete dropdown
        function createDropdown(arr, val){
            arr.forEach(function(item,index){
                // check if the item starts with the same letters as the text field value
                if (item.substr(0, val.length).toLowerCase() == val.toLowerCase()) {
                    // make the matching letters bold
                    var HTML = "<strong>" + item.substr(0, val.length) + "</strong>";
                    var rest = item.substr(val.length);
                    // fix whitespace bug
                    if (item[val.length - 1] == " "){
                        rest = '&nbsp' + rest;
                    }   
                    else if (rest.length > 0 && rest[0] == " "){
                        rest = '&nbsp' + rest.substr(1);
                    } 
                    HTML += rest;
                    HTML = '<li class="list-group-item list-group-item-action" style="z-index: 1;">' + HTML + '</li>';
                    $(HTML).appendTo('#autocompleteList').on("click", function() {
                          // insert the value for the autocomplete text field //
                          $('#geoInput').val(item);
                          closeAllLists();
                    })
                }
            });
        }

        // Event handler: updates the dropdown autocomplete list when the user searches for a country/state/city
        $("#geoInput").on("keyup", function() {
            var val = $(this).val();
            var selection = $("#geoSelection").val()
            closeAllLists();
            if (!val) { 
                return false;
            }
            var arr = (selection == 3 ? countries : (selection == 4 ? states : cities));    
            createDropdown(arr,val);
            $("#autocompleteList").removeClass('d-none');
        });
        
        // Event handler: updates the summary table, data table, and graph accordingly when the user submits the filter
        $("#geoForm").on("submit", function(e) {
            e.preventDefault();
            var warningOff = $('#warningLabel').hasClass('d-none');
            if(!warningOff) {
                $('#warningLabel').addClass('d-none')
            }
            var wk = parseFloat($('#plac_age_filter').val())
            var twn = $('#plac_age_filter').val()
            if(!(wk > 0)){
                alert("You forgot to enter a gestational age!");
                return;
            }

            // prepare inputs to handleSubmit function
            var selection = $("#geoSelection").val()
            var plac_ga = $('#plac_age_filter').val();
            var plac_type = $("#twin_filter").val();
            let placObj = {};
            placObj.ga = plac_ga
            placObj.weight = 0
            placObj.twin = $('#twin_filter option:selected').data('twin');
            var plac_cite = "Pinar H. et al. Pediatr Pathol Lab med 1996; 16:901-7.";
            handleSubmit(true,placObj,plac_ga,0,0,wk,"1",plac_cite,plac_type);

            // if a geofilter is being applied
            if (selection != 0){
                var g = (selection == 3 ? "country" : (selection == 4 ? "state" : "city")); 
                var v = $("#geoInput").val().toLowerCase();
                var filteredData = filterArray(sorted,[g,v]);
                // if there exist data that match the filters
                if (filteredData.length > 0){
                    populateTable(filteredData);
                    var filteredPercentiles = calculatePercents(percentages, filteredData);
                    if (filteredData.length < minDataPoints){
                        $("#warningLabel").html("Not enough data points to display geo filtered summary statistics");
                        $("#warningLabel").removeClass('d-none');
                        $("#div_summaryTable2").addClass('d-none');
                        if (percentilesHistoric){
                            drawGraph([percentilesHistoric,percentilesRealtime], sorted);
                        } else {
                            $("#graphContainer").addClass('d-none');
                        }
                    } else {
                        // only populate the summary table and draph the 3rd box & whisker plot if there are enough data points
                        populateSummary(filteredPercentiles,wk,twn,"2",filteredData.length,g.charAt(0).toUpperCase() + g.slice(1) + " = " + $("#geoInput").val());
                        if (percentilesHistoric){
                            var percentilesFiltered = filteredPercentiles.map(function(obj,index){
                                return obj.plac_wt_num;
                            });
                            drawGraph([percentilesHistoric,percentilesRealtime,percentilesFiltered], sorted);
                            drawGraphGeo(percentilesFiltered, g, v);
                        } else {
                            $("#graphContainer").addClass('d-none');
                        }
                    }
                } else {
                    $("#warningLabel").html("Not enough data points to display geo filtered summary statistics");
                    $("#warningLabel").removeClass('d-none');
                    $("#div_summaryTable2").addClass('d-none');
                    $("#div_dataTable").addClass("d-none");
                }
            }
        });

        // Event handler: resets the summary table, data table, and graph if the user selects filter as "None"
        $("#geoSelection").on("change", function() {
            var value = $(this).val();
            $("#geoInput").val('');
            console.log('here')
            if (value != "0"){
                $("#geoInput").removeClass('d-none');
            } else {
                $("#geoInput").addClass('d-none');
                $("#div_summaryTable2").addClass('d-none');
                populateTable(sorted);
                drawGraph([percentilesHistoric,percentilesRealtime],sorted);
            }
        });

        // geo is either "" or "2" to match the id of the HTML element containing the non geo filtered and geo filtered summary statistics, respectively
        // label is what is added to the end of the label to indicate the geo filter that was applied
        function populateSummary(data, ga, tw, geo, n, label){
            // empty the table
            $("#div_summaryTable" + geo).removeClass('d-none')
            $("#warningLabel").addClass('d-none');
            $("#warningLabel").html('');
            $("#summaryData" + geo).removeClass('d-none');
            $('#summaryHead' + geo).empty()
            $('#summaryHeader' + geo).empty()
            $('#summaryHeader' + geo).html('N = ' + n + (geo == "" ? "" : ", " + label))
            $('#summaryBody' + geo).empty()
            $('#summaryHead' + geo).append('<th scope="col" class="text-center">Gestational Age</th>')
            $('#summaryHead' + geo).append('<th scope="col" class="text-center">Gestational Type</th>')
            // create a column heading for each calculated percentile
            var contentHead;
            percentages.forEach(function(percent,index){
                contentHead += '<th scope="col" class="text-center">' + percent + '%</th>'
            });
            $('#summaryHead' + geo).append(contentHead);
            // add a table data to the table body for each calculatepod percentile
            var contentBody = '<td>'+ ga + '</td><td>' + (tw == 1 ? "Twin" : "Single") + '</td>';
            data.forEach(function(p,index){
                contentBody += '<td>' + p.plac_wt_num + 'g</td>'   
            });
            $('#summaryBody' + geo).append(contentBody);
        }

        function populateTable(data){
            $('#fullData tbody').empty();
            // add a table row for each data point
            var content;
            data.forEach(function(row,index){
                content += '<tr class="dataRow"><td>' + row.gestage + '</td><td>' + row.weight + '</td><td>' + row.twin + '</td><td>' 
                        + row.country + '</td><td>' + row.state + '</td><td>' + row.city + '</td></tr>'
            });
            $('#fullData').append(content);
        }    

        $("#plac_age_filter").on("input", function(e){
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
});

// Checkbox styling
$('#agreement').change(function(){
    $('.checkbox_container').removeClass('highlight')
});

//***************************************************************************************//
// SCRIPTS PERTAINING TO THE REPORTING TOOL
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
                            for (var j = 510; j < 512; j++) {
                                if (mxLines.hasOwnProperty("mxLine" + j)) {
                                    mxLines['mxLine' + j] = mxLines['mxLine' + j].replace(/confirm .* vessels/, "confirm " + vesnum + " vessel");
                                }
                            }
                        } else {
                            for (var j = 510; j < 512; j++) {
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
                    for (var j = 510; j < 512; j++) {
                        if (mxLines.hasOwnProperty("mxLine" + j)) {
                            mxLines['mxLine' + j] = mxLines['mxLine' + j].replace(/(, .*? )(?! of)/g, ", " + vesinf+" ");
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

// ADJUST REPORT HEADERS FOR TWIN PLACENTAS
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

// **** ADD MICROS WITH ONE-CLICK UNDO *****//
//                                          //
//                                          //
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
//                                          //
//                                          //
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
