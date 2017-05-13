var model = {
    markers: [
        {
            position: { lat: 52.371700, lng: 4.914827 },
            name: "NATIONAL MARITIME MUSEUM"
        },
        {
            position: { lat: 52.374206, lng: 4.912335 },
            name: "SCIENCE CENTER NEMO"
        },
        {
            position: { lat: 52.366791, lng: 4.892730 },
            name: "STINS FLOWER MARKET"
        },
        {
            position: { lat: 52.379144, lng: 4.900132 },
            name: "AMSTERDAM CENTRAAL"
        },
        {
            position: { lat: 52.365378, lng: 4.959510 },
            name: "CAMPING ZEEBURG AMSTERDAM"
        }
    ]
}
var controller = {
    getMarkers: function () {
        return model.markers;
    }
}
var mapView = {
    init: function () {
        var markers = controller.getMarkers();
        var amsterdam = { lat: 52.374685, lng: 4.899757 };
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: amsterdam
        });
        markerView.render(markers, map);
    }
};
var markerView = {
    render: function (array, baseMap) {
        array.forEach(function (item) {
            console.log(item);
            var marker = new google.maps.Marker({
                position: item.position,
                map: baseMap,
                title: item.name
            });
        });
    }
};