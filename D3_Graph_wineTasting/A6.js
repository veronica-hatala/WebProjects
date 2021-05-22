var wineCountry;
var price;
var points;

$("body").ready(init);

function init() {
    d3.csv("winemag-data-130k-v2.csv")
            .then(function (data){
                dataset = data;
                wineCountry = data.map(function (d){
                   return d.country;
                });
                price = data.map(function (d){
                   return d.price;
                });
                points = data.map(function (d){
                   return d.points;
                });
                wineInfo = data.map(function (d){
                   return {country: d.country, winePrice: d.price, winePoints: d.points};
                });

    console.log(wineCountry[0]);
    console.log(price[0]);
    console.log(points[0]);

    uniqueCountry = wineCountry.filter(filterFunc);
    console.log("Printing unique countries: " + uniqueCountry);

    var selectCountry = $("<select >")
            .attr("id", "countryValues")
            .change(changeCountry);

    uniqueCountry.forEach(function (d) {
        var opt = $("<option>")
                .html(d)
                .val(d);
        selectCountry.append(opt);
    });

    $("#dropdown").append(selectCountry);



    draw();

    }); //end csv


}

function filterFunc(d, i, n) {
    return n.indexOf(d) == i;
}

function changeCountry() {
    selectedCountry = $("#countryValues option:selected").val();
    console.log(selectedCountry);

    draw();
}

function draw() {

    d3.select("svg").remove();
    svg = d3.select("#chart").append("svg");
    selectedCountry=$("#countryValues option:selected").text();
    console.log(selectedCountry);

    var filteredWines = wineInfo.filter(function(d) {
       return d.country == selectedCountry;
    });


    console.log(filteredWines[10]);
    console.log(filteredWines[10].winePrice);

    var winePriceList = filteredWines.map(function (d) {
        return d.winePrice;
    });

    var winePointsList = filteredWines.map(function (d) {
        return d.winePoints;
    });

    console.log(winePriceList);

    var priceMax = getMax(winePriceList);
    console.log("Max price val: " + priceMax);
    var priceMin = getMin(winePriceList);
    console.log("Min price val: " + priceMin);

    var pointsMax = getMax(winePointsList);
    console.log("Max points val: " + pointsMax);
    var pointsMin = getMin(winePointsList);
    console.log("Min points val: " + pointsMin);


    //var myArray = [0, 10, 10, 20, 100, 700];
    //console.log(getMin(myArray));

    $("#chart").empty();
    var scaleXPrice = d3.scaleLinear()
        .domain([0, priceMax])
        .range([20, 1000-10]);

    var scaleYPoints = d3.scaleLinear()
        .domain([pointsMin, pointsMax])
        .range([20, 1000-10]);


    var svg = d3.select("#chart")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 1000)
        .style("background-color", "#f2f2f2");


    var xAxis = d3.axisBottom()
            .scale(scaleXPrice);
    var yAxis = d3.axisRight()
            .scale(scaleYPoints);

    svg.append("g")
            .call(xAxis);
    svg.append("g")
            .call(yAxis);

    for (i=0; i < filteredWines.length; i++) {
                svg.append("g")
                .append("circle")
                .attr("cx", scaleXPrice(winePriceList[i]))
                .attr("cy", scaleYPoints(winePointsList[i]))
                .attr("r", 10);

    }

}









function getMax(arr) {
    var len = arr.length;
    var max = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i]=="") {

        }
        else if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

function getMin(arr) {
    var len = arr.length;
    var min = 10000;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i]=="") {

        }
        else if (arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
