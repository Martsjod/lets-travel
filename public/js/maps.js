let platform = new H.service.Platform({
    'apikey': '41GBadAg-ankKCBKs8_e6Um6H-5HUH4-F-qo_w-YXj8'
  });


function landmarkGeocode() {
    let title = document.querySelector('h1').textContent;
    let geocoder = platform.getSearchService(),
        landmarkGeocodingParameters = {
          q: title,
          at: '0,0',
          limit: 1
        };
  
    geocoder.discover(
      landmarkGeocodingParameters,
      showMap,
      () => console.log(e)
    );
}

function showMap(result){
    let location = result.items[0].position;
    let defaultLayers = platform.createDefaultLayers();
    let map = new H.Map(
        document.querySelector('.map'),
        defaultLayers.vector.normal.map,
        {
          zoom: 12,
          center: { lat: location.lat, lng: location.lng }
    });
    var marker = new H.map.Marker({lat:location.lat, lng:location.lng});
    map.addObject(marker);    
    let ui = H.ui.UI.createDefault(map, defaultLayers);
}

landmarkGeocode();
