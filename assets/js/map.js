        function init_map() {
            var myOptions = { zoom: 15, center: new google.maps.LatLng(53.1564004, 29.212327200000004), mapTypeId: google.maps.MapTypeId.ROADMAP };
            map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
            marker = new google.maps.Marker({ map: map, position: new google.maps.LatLng(53.1564004, 29.212327200000004) });
            infowindow = new google.maps.InfoWindow({ content: '<strong>Мы здесь</strong><br>Беларусь, Бобруйск, ул. Крылова 18<br>' });
            google.maps.event.addListener(marker, 'click', function() { infowindow.open(map, marker); });
            infowindow.open(map, marker);
        }
        google.maps.event.addDomListener(window, 'load', init_map);