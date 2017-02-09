function sendObject(object, email){
	var html = "<form action='https://formspree.io/" + email + "' method='POST'>";
	var keys = Object.keys(object);
	for(var key in object){
		var elt = "<input type='text' hidden='true' name='KEY:" + key + "' value='" + object[key] + "'>";
		html = html + elt;
	}
	html += "<input hidden='true' type='submit' id='submitbutton' value='Send'></form>";
	document.getElementById("formhere").innerHTML = html;
	var submit = document.getElementById("submitbutton")
	submit.click();

}

