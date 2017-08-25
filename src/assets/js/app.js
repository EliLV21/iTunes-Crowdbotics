var container = $("#containerSongs");

function cargarPagina(){
	var api = {
	  url: 'https://itunes.apple.com/search?term=Taylor+Swift&entity=musicTrack&limit=200',
	};

	$.getJSON(api.url, function(response){
		console.log(response);
	  	var tracks = response.results;
		console.log(tracks);
		list(tracks);
	});
	var list = function (tracks){
		var containerTracks = "";
		var contador = 0;
		var templateTracks =
			'<ul class="collection" data="__data__">' +
				'<li class="collection-item avatar">' +
					'<img src="__image__" alt="" class="circle">' +
					'<p><strong>__track__</strong></p>' +
					'<p>__collection__</p>' +
					'<p class="secondary-content">__id__</p>' +
				'</li>' +
			'</ul>';
		tracks.forEach(function(track, indice){
			containerTracks += templateTracks.replace('__data__', "data-url".contador++)
								.replace('__image__', tracks[indice].artworkUrl130)
								.replace('__track__', tracks[indice].trackName)
								.replace('__collection__', tracks[indice].collectionName)
								.replace('__id__', tracks[indice].trackId)
		});
		container.html(containerTracks);
	};
};

$(document).ready(cargarPagina);
