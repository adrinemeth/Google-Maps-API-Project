var model = {
    amsterdam: {
        lat: 52.364,
        lng: 4.864
    },
    map: function () {
        return new google.maps.Map(document.getElementById('map'), {
            zoom: 11,
            center: model.amsterdam
        })
    }
}

function initMap() {
    model.map();
}
