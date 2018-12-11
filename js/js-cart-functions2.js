/* add loop and other code here */ 

var size = titles.length;
var subtotal = 0;
var shipping = 10;


for (var i=0; i < size; i++)
{
	var total = caculateTotal(quantities[i], prices[i]);
	subtotal += total; 
	outputCartRow(filenames[i], titles[i], quantities[i], prices[i], total);
	
}

tax = subtotal * .10;


if (subtotal > 50)
{
	shipping = 0;
}

grandTotal = tax + subtotal + shipping;
