function caculateTotal(price, quantity)
{
	return price * quantity;
}

	
function outputCartRow(file, title, quantity, price, total)
{
	   	var open_tr = "<tr>";
    	var img_td = "<td><img src=\"images/" + file + "\"></td>";
    	var title_td = "<td>" + title + "</td>";
    	var quantity_td = "<td class=\"center\">" + quantity + "</td>";
    	var price_td = "<td class=\"right\">$" + price.toFixed(2) + "</td>";
    	var total_td = "<td class=\"right\">$" + total.toFixed(2) + "</td>";
    	var close_tr = "</tr>";
		
		var row = open_tr + img_td + title_td + quantity_td + price_td + total_td + close_tr;
			
	document.write(row);

}


function output(amount)
{
		document.write("$" + amount.toFixed(2));
	
}


