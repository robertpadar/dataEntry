$('#button').click(function() {
	console.log('ready!')
	$.ajax({
		url: "libs/php/data.json",
		type: 'POST',
		dataType: 'json',
		success: function(result) {
			var number = Math.floor((Math.random() * 3) + 0);
			var dates = [];
			if ( number === 0) {
				$('#header').html(result[0]['name']);
				dates.push(result[0]['from']);
				dates.push(result[0]['to']);
				$('#choose').text(dates);
				$('#name').html(result[0]['talent'][0]);
				$('#description').text('no data');
				$('#submit').text('no data');
				document.getElementById('header').style.backgroundColor = result[0]['color'];
				document.getElementById('submit').style.backgroundColor = result[0]['color'];
				document.getElementById('name').style.backgroundColor = result[0]['color'];
				document.getElementById('description').style.backgroundColor = result[0]['color'];
			} else if ( number === 1) {
				$('#header').html(result[1]['name']);
				dates.push(result[1]['from']);
				dates.push(result[1]['to']);
				$('#choose').text(dates);
				$('#name').html(result[1]['talent'][0]);
				$('#description').html(result[1]['talent'][1]);
				$('#submit').html(result[1]['talent'][2]);
				document.getElementById('header').style.backgroundColor = result[1]['color'];
				document.getElementById('submit').style.backgroundColor = result[1]['color'];
				document.getElementById('name').style.backgroundColor = result[1]['color'];
				document.getElementById('description').style.backgroundColor = result[1]['color'];
			} else if ( number === 2) {
				$('#header').html(result[2]['name']);
				dates.push(result[2]['from']);
				dates.push(result[2]['to']);
				$('#choose').text(dates);
				$('#name').html(result[2]['talent'][0]);
				$('#description').html(result[2]['talent'][1]);
				$('#submit').text('no data');
				document.getElementById('header').style.backgroundColor = result[2]['color'];
				document.getElementById('submit').style.backgroundColor = result[2]['color'];
				document.getElementById('name').style.backgroundColor = result[2]['color'];
				document.getElementById('description').style.backgroundColor = result[2]['color'];
			}
		},
		error: function(jqXHR,textStatus,errorThrown,){
			alert(textStatus + ' : '  + jqXHR.status + ', ' + errorThrown);
		}
	});
});