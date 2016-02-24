//First jQuery App.js
//By Hakim
$(function() {
	console.log("Everything is ready. Let's go!!!");
	$('#addHome').removeClass('btn-danger').addClass('btn-success');
	$('h1').addClass('text-center'); //Removed a class and added a class, which has predefined styling from Bootstrap.
	var newLink = $('<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com</a>')
	//$('body').append(newLink);
	newLink.appendTo('body'); //Append to is the opposite of .append
	$('#zillowLink').attr("target", "_blank")
	$('#zillowLink').attr("href", "http://www.google.com") //Without http, they would by default use the current protocol
	//$('#zillowLink').attr("target", "_blank").attr("href", "http://www.google.com")
	//$('#zillowLink').attr( {target: "_blank", href: "http://www.google.com"});
	var newHomes = [
    {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
    {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
    {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
	];

	var homeNo = 0;

	$('#addHome').on('click', addHomes);
	console.log(newHomes[0].address);

	function addHomes() {
		console.log("addHomes called");
		$('#homes tbody').append('<tr><td>'+newHomes[homeNo].address+'</td><td>'+newHomes[homeNo].sf+'</td><td>'+newHomes[homeNo].bedrooms+'</td><td>'+newHomes[homeNo].baths+'</td><td>'+newHomes[homeNo].price+'</td><td><button class="btn btn-xs btn-danger">Remove</button></td></tr>');
		homeNo++;
		if(homeNo>=newHomes.length) {
			$('#addHome').off('click', addHomes);
		}
	}

	function removeHome() {
		//$(this).parents('tr').remove();//When remove is called, this refers to the DOM element.
		//By wrapping the this with $() you will convert it to a jQuery element.
		//There is also closest() which looks both ways (parents and children).
		$(this).parents('tr').fadeOut(1500, function() {
			$(this).remove();
		})
	}

	$('#homes tbody').on('click', 'button', removeHome) //Every single time tr is click, invoke the removeHome function.
	//The above is called bubbling. Bubbling allows the event to be sent upwards from child node to parents node. For example, the event might be processed thrice if the child node is <body><div><div>

	var cells = $('#homes thead tr').children();
	cells.eq(0).css('color', 'blue'); //eq means equal
	cells.eq(3).css('color', 'green'); //[] only works on arrays. cells is a jQuery object so you have to use a jQuery method, which is eq in this case, to retrieve the information.


	

	

});
