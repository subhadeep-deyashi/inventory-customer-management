google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function genChart() {

  document.getElementById("piechart").style.display = "block";

  var data = google.visualization.arrayToDataTable([
  ['Item', 'Avg Sales Per Day'],
  ['FoodStuff', 16],
  ['Ingredients', 6],
  ['Personal Care', 4],
  ['Home Care', 5],
  ['Beverages', 8]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Average Item Distribution', 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
function genChart1() {

  document.getElementById("piechart").style.display = "block";

  var data = google.visualization.arrayToDataTable([
  ['Item', 'Avg Sales Per Month'],
  ['FoodStuff', 16*33],
  ['Ingredients', 6*45],
  ['Personal Care', 4*20],
  ['Home Care', 5*19],
  ['Beverages', 8*27]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Average Item Distribution', 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
function genChart2() {

  document.getElementById("piechart").style.display = "block";

  var data = google.visualization.arrayToDataTable([
  ['Item', 'Avg Sales Per Year'],
  ['FoodStuff', 16*33*16],
  ['Ingredients', 6*45*20],
  ['Personal Care', 4*20*8],
  ['Home Care', 5*19*9],
  ['Beverages', 8*27*10]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Average Item Distribution', 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
function showInv()
{
    document.getElementById("head3").style.backgroundColor = "#3561da";
    document.getElementById("head2").style.backgroundColor = "#3561da";
    document.getElementById("head1").style.backgroundColor = "#3561da";

    document.getElementById("rad").style.display = "none";
    document.getElementById("piechart").style.display = "none";

    document.getElementById("head1").innerHTML = "ITEM ID";
    document.getElementById("head2").innerHTML = "NAME";
    document.getElementById("head3").innerHTML = "QUANTITY";
    var params ={
        id :5,
    }
    var Table = document.getElementById("inv_tbod");
    Table.innerHTML = "";

    $.get("http://localhost:8080/Ajax/Serv",  $.param(params), function(responseJson) { 
            $.each(responseJson, function(index, inv){
                  $("<tr>").appendTo($("#inv_tbod")) 
                  .append($("<td>").text(inv.item_id))        
                  .append($("<td>").text(inv.name))      
                  .append($("<td>").text(inv.quant))
    });
});
}

function stats()
{
    document.getElementById("head1").innerHTML = "";
    document.getElementById("head2").innerHTML = "";
    document.getElementById("head3").innerHTML = "";
    document.getElementById("head3").style.backgroundColor = "white";
    document.getElementById("head2").style.backgroundColor = "white";
    document.getElementById("head1").style.backgroundColor = "white";
    
    document.getElementById("rad").style.display = "block";
    
    document.getElementById("day").checked = false;
    document.getElementById("Monthly").checked = false;
    document.getElementById("yearly").checked = false;
}