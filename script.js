import anime from './anime.js';

$('#button').click(function() {
	
	$.ajax({
		url: "./data.json",
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
				
				var textWrapper = document.querySelector('#header');
				textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
				anime.timeline({loop: true})
					.add({
						targets: '#header .letter',
						scale: [4,1],
						opacity: [0,1],
						translateZ: 0,
						easing: "easeOutExpo",
						duration: 950,
						delay: (el, i) => 70*i
					}).add({
						targets: '.ml2',
						opacity: 0,
						duration: 1000,
						easing: "easeOutExpo",
						delay: 1000
					});

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
				
				var textWrapper = document.querySelector('#header');
				textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
				anime.timeline({loop: true})
					.add({
						targets: '#header .letter',
						scale: [4,1],
						opacity: [0,1],
						translateZ: 0,
						easing: "easeOutExpo",
						duration: 950,
						delay: (el, i) => 70*i
					}).add({
						targets: '.ml2',
						opacity: 0,
						duration: 1000,
						easing: "easeOutExpo",
						delay: 1000
					});

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
				
				var textWrapper = document.querySelector('#header');
				textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
				anime.timeline({loop: true})
					.add({
						targets: '#header .letter',
						scale: [4,1],
						opacity: [0,1],
						translateZ: 0,
						easing: "easeOutExpo",
						duration: 950,
						delay: (el, i) => 70*i
					}).add({
						targets: '.ml2',
						opacity: 0,
						duration: 1000,
						easing: "easeOutExpo",
						delay: 1000
					});

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
