/*
Load graph with json data
Group by day
*/
function LoadGraph(dayArray){
    var data = [30, 86, 168, 281, 303, 365];
    var dayData = [];

    var dayCount = [];
    //Group data
    dayArray.forEach(element => {
        if (dayCount[element] !== undefined){
            dayCount[element] += 1 ;
        } else {
            dayCount[element] = 1;
        }
    });
    var key;
    var data = [];
     
    //Get Key names
    var dataKey = [];
    for(key in dayCount){
        if(dayCount.hasOwnProperty(key)){
            dataKey.push(key);
        }
    }

    //print day names
    d3.select(".graphNames")
    .selectAll("div")
    .data(dataKey)
    .enter()
    .append("div").text(function(d) { return d; });
    
    //Get array values
    for(key in dayCount){
        if(dayCount.hasOwnProperty(key)){
            data.push(dayCount[key]);
        }
    }


    //Graph bars
    d3.select(".graph")
    .selectAll("div")
    .data(data)
    .enter()
    .append("div")
    .style("width", function(d) { return d + "px"; })
    .text(function(d) { return d; });

    
}