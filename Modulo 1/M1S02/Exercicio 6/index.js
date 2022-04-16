let map;
let jsonUrl = "https://amapalanches.com/includes/v1/getTodas.php";

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0.03867, lng: -51.051092 },
    zoom: 8,
  });
}

fetch(jsonUrl)
  .then(response => response.json())
  .then(data => {
    data.todas.forEach(element => {
      let lat = parseFloat(element.lat);
      let log = parseFloat(element.lng);
      const myLatLng = { lat: lat, lng: log };
      const contentString = `
        <div id="content">
          <div id="siteNotice">
          </div>
          <h1 id="firstHeading" class="firstHeading">${element.titulo}</h1>
          <div id="bodyContent">
            <p>${element.subTitulo}</p>
          </div>
        </div>
        `;
      const infowindow = new google.maps.InfoWindow({
        content: contentString,
      });
      const marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: element.nome,
        icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
      });
      marker.addListener("mouseover", function () {
        infowindow.open(map, marker);
      });
      marker.addListener("mouseout", () => {
        infowindow.close(map, marker);
      });
    });
  });
