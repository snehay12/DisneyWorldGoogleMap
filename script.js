function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 28.35770328848039,
			lng: -81.55804120680122,
		},
		zoom: 16.8,
		mapId: '997462eb11a2ddf0',
		mapTypeControl: false,
		fullscreenControl: false,
		streetViewControl: false,
	});
	const markers = [
		[
			"Star Wars: Galaxy\'s Edge",
			28.3538322802499, -81.56177484655994,
			'starWar.png',
			90,
			85.8,
		],
		[
			"You Are Here - Disney Hollywood Studio",
			28.35770328848039,
			-81.55804120680122,
			'pointer.svg',
			30,
			40.8,
		],
		[
			'Toy Story Land',
			28.35622098983583, -81.56089511164089,
			'toyStory.png',
			50,
			48,
		],
		['Mickey & Minnie\'s Runaway Railway', 28.356928427795346, -81.56068788634359, 'mickey.png', 65, 63],
		['Savi\'s Workshop - Handbuilt Lightsabers ', 28.354521510486176, -81.56191432753914, 'lightSaber.png', 45, 45.5],
		['Voyage of the Little Mermaid', 28.35760888785142, -81.56138865193068, 'mermaid.png', 68, 68],
		[
			'Dinosaur Gertie\'s Ice Cream',
			28.357096664140183, -81.55901753108009,
			'dinosaur.png',
			55,
			60.7,
		],
	];

	for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];

		const marker = new google.maps.Marker({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			title: currMarker[0],
			icon: {
				url: currMarker[3],
				scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
			},
			animation: google.maps.Animation.DROP,
		});

		const infowindow = new google.maps.InfoWindow({
			content: currMarker[0],
		});

		marker.addListener('click', () => {
			infowindow.open(map, marker);
		});
	}
}