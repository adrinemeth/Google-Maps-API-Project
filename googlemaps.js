var model = {
    markers: [
        {
            position: { lat: 52.371700, lng: 4.914827 },
            name: "Het Scheepvaartmuseum"
        },
        {
            position: { lat: 52.374206, lng: 4.912335 },
            name: "NEMO Science Museum"
        },
        {
            position: { lat: 52.366791, lng: 4.892730 },
            name: "Bloemenmarkt"
        },
        {
            position: { lat: 52.379144, lng: 4.900132 },
            name: "AMSTERDAM CENTRAAL"
        },
        {
            position: { lat: 52.365378, lng: 4.959510 },
            name: "Zeeburg Camping"
        }
    ]
};
var controller = {
    getMarkers: function () {
        return model.markers;
    }
};
var mapView = {
    init: function () {
        var markers = controller.getMarkers();
        var amsterdam = { lat: 52.374685, lng: 4.899757 };
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: amsterdam
        });
        markerView.render(markers, map);
        markerList.init(map);
    }
};
var markerView = {
    render: function (array, baseMap) {
        array.forEach(function (item) {
            var marker = new google.maps.Marker({
                position: item.position,
                map: baseMap,
                title: item.name
            });
            var infowindow = new google.maps.InfoWindow({
                content: item.name
            });
            marker.addListener("click", function () {
                infowindow.open(baseMap, marker);
            });
        });
    }
};
var markerList = {
    init: function (baseMap) {
        markerList.render(baseMap);
        markerList.update();
    },
    render: function (baseMap) {
        var markers = controller.getMarkers();
        this.markerListElem = document.getElementById("marker-list");
        var length = markers.length;
        for (var i = 1; i < length; i++) {
            // Create the list item:
            var marker = markers[i];
            var item = document.createElement("a");
            var listElem = document.createElement("li");
            // Set its contents:
            item.textContent = marker.name;
            function getPosition(x) {
                return function () {
                    baseMap.setZoom(15);
                    baseMap.setCenter(x);
                };
            }
            item.addEventListener("click", getPosition(marker.position));
            // Add it to the list:
            listElem.appendChild(item);
            this.markerListElem.appendChild(listElem);
        }
    },
    update: function () {
        var input, filter, ul, li, a, i;
        input = document.getElementById("search");
        input.addEventListener("keyup", function () {
            filter = this.value.toUpperCase();
            ul = document.getElementById("marker-list");
            li = ul.getElementsByTagName("li");
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        });
    }
};