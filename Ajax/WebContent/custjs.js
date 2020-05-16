function start()
{
    document.getElementById("custhead").style.backgroundColor = "#3561da"
           document.getElementById("custhead1").style.backgroundColor = "#3561da"
           document.getElementById("custhead2").style.backgroundColor = "#3561da"
           document.getElementById("custhead3").style.backgroundColor = "#3561da"
           document.getElementById("custhead4").style.backgroundColor = "#3561da"

          var params ={
        id :0}
           c1.style.transform = "translateX(0)";
           c2.style.transform = "translateX(100%)";
           c3.style.transform = "translateX(100%)";
           b1.style.color = "#4c72db";
           b2.style.color = "#000";
           b3.style.color = "#000";
           c1.style.transitionDelay = "0.3s";
           c2.style.transitionDelay = "0s";
           c3.style.transitionDelay = "0s";

           $.get("http://localhost:8080/Ajax/Serv",  $.param(params), function(responseJson) { 
    	      x = responseJson;
    	      console.log(x);// Execute Ajax GET request on URL of "someservlet" and execute the following function with Ajax response JSON...
    
            $.each(responseJson,  function(index, cust){
                  $("<tr>").appendTo($("#allcust_tbod")) 
                    .append($("<td>").text(cust.cust_id))        // Create HTML <td> element, set its text content with id of currently iterated product and append it to the <tr>.
                    .append($("<td>").text(cust.firstname))      // Create HTML <td> element, set its text content with name of currently iterated product and append it to the <tr>.
                    .append($("<td>").text(cust.lastname))
                    .append($("<td>").text(cust.address))
                    .append($("<td>").text(cust.active_orders));
    });
});
         }

function allord1()
{
    document.getElementById("allorders1").style.visibility = "visible";

    document.getElementById("c1").style.transform = "translateX(100%)";
    document.getElementById("c2").style.transform = "translateX(0)";
    document.getElementById("c3").style.transform = "translateX(100%)";
    document.getElementById("b2").style.color = "#3561da";
    document.getElementById("b1").style.color = "#000";
    document.getElementById("b3").style.color = "#000";
    document.getElementById("c1").style.transitionDelay = "0s";
    document.getElementById("c2").style.transitionDelay = "0.3s";
    document.getElementById("c3").style.transitionDelay = "0s";



    document.getElementById("thcust").style.backgroundColor = "#3561da";
    document.getElementById("thfname").style.backgroundColor = "#3561da";
    document.getElementById("thlname").style.backgroundColor = "#3561da";
    document.getElementById("thadd").style.backgroundColor = "#3561da";
    document.getElementById("thact").style.backgroundColor = "#3561da";
    document.getElementById("thtot").style.backgroundColor = "#3561da";

    document.getElementById("thcust1").innerHTML = "CUST ID";
    document.getElementById("thfname1").innerHTML = "FIRSTNAME";
    document.getElementById("thlname1").innerHTML = "LASTNAME";
    document.getElementById("thadd1").innerHTML = "ADDRESS";
    document.getElementById("thact1").innerHTML = "ACTIVE ORDERS";
    document.getElementById("thtot1").innerHTML = "";

    var params ={
        id :1,
        value: document.getElementById("cid").value
    }
    var Table = document.getElementById("tbod");
    Table.innerHTML = "";
$.get("http://localhost:8080/Ajax/Serv",  $.param(params), function(responseJson) { 
    	      x = responseJson;
    	      console.log(x);
    
            $.each(responseJson, function(index, cust){
                  $("<tr>").appendTo($("#tbod")) 
                    .append($("<td>").text(cust.cust_id))
                    .append($("<td>").text(cust.firstname))        
                    .append($("<td>").text(cust.lastname))
                    .append($("<td>").text(cust.address))
                    .append($("<td>").text(cust.active_orders));
    });
});
}


function allord2()
{
    document.getElementById("allorders2").style.visibility = "visible";
    
    document.getElementById("thcust1").style.backgroundColor = "#3561da";
    document.getElementById("thfname1").style.backgroundColor = "#3561da";
    document.getElementById("thlname1").style.backgroundColor = "#3561da";
    document.getElementById("thadd1").style.backgroundColor = "#3561da";
    document.getElementById("thact1").style.backgroundColor = "#3561da";
    document.getElementById("thtot1").style.backgroundColor = "#3561da";
    
    document.getElementById("thcust1").innerHTML = "CUST ID";
    document.getElementById("thfname1").innerHTML = "FIRSTNAME";
    document.getElementById("thlname1").innerHTML = "LASTNAME";
    document.getElementById("thadd1").innerHTML = "ADDRESS";
    document.getElementById("thact1").innerHTML = "ACTIVE ORDERS";
    document.getElementById("thtot1").innerHTML = "";

    
    
    var params ={
        id :2,
        value: document.getElementById("fname").value
    }
   
    var Table = document.getElementById("tbod1");
    Table.innerHTML = "";

   
$.get("http://localhost:8080/Ajax/Serv",  $.param(params), function(responseJson) { 
    	      x = responseJson;
    	      console.log(x);
            $.each(responseJson, function(index, cust){
                  $("<tr>").appendTo($("#tbod1")) 
                    .append($("<td>").text(cust.cust_id))        
                    .append($("<td>").text(cust.firstname))      
                    .append($("<td>").text(cust.lastname))
                    .append($("<td>").text(cust.address))
                    .append($("<td>").text(cust.active_orders));
    });
});
}

function allOrders1()
{
    

    var params ={
        id :3,
        value: document.getElementById("cid").value
    }
    
    var Table = document.getElementById("tbod");
    Table.innerHTML = "";

    document.getElementById("thcust").innerHTML = "ORDER_ID";
    document.getElementById("thfname").innerHTML = "CUST_ID";
    document.getElementById("thlname").innerHTML = "DESCRIPTION";
    document.getElementById("thadd").innerHTML = "QUANTITY";
    document.getElementById("thact").innerHTML = "RATE";
    document.getElementById("thtot").innerHTML = "TOTAL";

    $.get("http://localhost:8080/Ajax/Serv",  $.param(params), function(responseJson) { 
            $.each(responseJson, function(index, ord){
                  $("<tr>").appendTo($("#tbod")) 
                    .append($("<td>").text(ord.ord_id))        
                    .append($("<td>").text(ord.cust_id))      
                    .append($("<td>").text(ord.desc))
                    .append($("<td>").text(ord.quant))
                    .append($("<td>").text(ord.rate))
                    .append($("<td>").text(ord.tot));
    });
});

    


}
function allOrders2()
{
    var params ={
        id :4,
        value: document.getElementById("fname").value
    }
    var Table = document.getElementById("tbod1");
    Table.innerHTML = "";


    document.getElementById("thcust1").innerHTML = "ORDER_ID";
    document.getElementById("thfname1").innerHTML = "CUST_ID";
    document.getElementById("thlname1").innerHTML = "DESCRIPTION";
    document.getElementById("thadd1").innerHTML = "QUANTITY";
    document.getElementById("thact1").innerHTML = "RATE";
    document.getElementById("thtot1").innerHTML = "TOTAL";

    $.get("http://localhost:8080/Ajax/Serv",  $.param(params), function(responseJson) { 
            $.each(responseJson, function(index, ord){
                  $("<tr>").appendTo($("#tbod1")) 
                  .append($("<td>").text(ord.ord_id))        
                  .append($("<td>").text(ord.cust_id))      
                  .append($("<td>").text(ord.desc))
                  .append($("<td>").text(ord.quant))
                  .append($("<td>").text(ord.rate))
                  .append($("<td>").text(ord.tot));
    });
});
    


}


