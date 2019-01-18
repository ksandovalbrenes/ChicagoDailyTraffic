var parkNames = [0,0,0,0,0,0,0,0,0];
var parkValues = ["", "", "", "", "", "", "", "", "", ""];

function linearScale() {
    return d3.scaleLinear().domain([0, d3.max(parkValues)]).range(0, 100);
}


function generateBackground(parkArray) {
    var parkCount = [];
    parkArray.forEach(element => {
        if (parkCount[element] !== undefined){
            parkCount[element] += 1 ;
        } else {
            parkCount[element] = 1;
        }
    });
    parkCount.sort();
    parkCount.reverse();
    parkCount = parkCount.slice(0,10);

    var temporalArray = [];
    for (var i = 0; i < 10; i++){
        
        temporalArray[i] = parkCount[i];
    }
    parkValues = d3.values(temporalArray);
    parkNames = d3.entries(temporalArray);

 
    //var svg = d3.select("svg");
    //width = svg.style("width").replace("px", "");
    //height = svg.style("height").replace("px", "");

    var x = 0;
    var y = 0; 

    d3.select(".graph")
    .selectAll("div")
    .data(parkCount)
    .enter()
    .append("div")
    .style("width", function(d) { return linearScale(d) + "px"; })
    .text(function(d) { return (d); });

    }
    /*
    function asdf(){

    

    var circles = svg.selectAll("circle")
    .data(parkCount)
    .enter()
    .append("circle")
    .attr("cx",function(d, i) {
        r = Math.pow(d,2);
        x += (r*2)+1;
        if (x > width){
            y = 200;
        }
        return x;
    })
    .attr("cy",function(d, i){
        console.log(y);
        return y;
    })
    .attr("r", function(d, i){
        
        return Math.pow(d,2);
    });
    */

