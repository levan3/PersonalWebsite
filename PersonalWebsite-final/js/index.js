const submitBtn = document.getElementById('recommendation-submit');
// const table = document.getElementById("table");

//Load recomondation data on page load
window.onload = function() {
	let dataObj = {
		'name':'',
		'title':'',
		'organization':'',
		'message':''
	}
	let jsonData = JSON.stringify(dataObj);

	fetchRecommondations(jsonData);
};

submitBtn.addEventListener('click',function(){
	let name = document.getElementById('name').value;
	let title = document.getElementById('title').value;
	let organization = document.getElementById('organization').value;
	let message = document.getElementById('message').value;

	let dataObj = {
		'name':name,
		'title':title,
		'organization':organization,
		'message':message
	}
	let jsonData = JSON.stringify(dataObj);
	fetchRecommondations(jsonData);
	alert("Your data has been added!");

});

function fetchRecommondations(data) {
	postData(data,'./php/recommendations.php').then(function(data){
		$("#table-name tr").remove();
		var table = document.getElementById('table-name');
		
	for(let i = 0; i < data.length; i++) {	
		
		 
		var name = document.createElement('div');

			var row = table.insertRow();

			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);

			cell1.innerHTML = '<span class = " name">'+data[i]['name']+'</span><span class = " jobtitle">'+data[i]['jobtitle']+'</span><span class = "organization">'+data[i]['organization']+'</span>';
			cell2.innerHTML = '<span class = "recommendati0n">'+data[i]['recommendation']+'</span>';
			
			
		}
		
	});
}

async function postData(data,url) {
	const response = await fetch(url, {
		method:'POST',
		headers: {
			'Content-Type':'application/json'
		},
		body:data
	});
	return response.json();
}



