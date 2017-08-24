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
		var templateTracks =
			'<ul class="collection">' +
				'<li class="collection-item avatar">' +
					'<img src="__image__" alt="" class="circle">' +
					'<span class="title">Tyler Swift</span>' +
					'<p>Track name: __track__</p>' +
					'<p>Collection name: __collection__</p>' +
					'<p>Track Id: __id__</p>' +
					'<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>' +
				'</li>' +
			'</ul>';
		tracks.forEach(function(track, indice){
			containerTracks += templateTracks.replace('__image__', tracks[indice].collectionViewUrl)
								.replace('__track__', tracks[indice].trackName)
								.replace('__collection__', tracks[indice].collectionName)
								.replace('__id__', tracks[indice].trackId)
		});
		container.html(containerTracks);
	};
};

$(document).ready(cargarPagina);
