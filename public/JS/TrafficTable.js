var tableHeaders = [];
$(document).ready( function () {
    tableHeaders = {"date":1, "location": 2, "park": 3, "phone": 4, "rating": 5};
    //multi-select configuration
    $('#filterDataSelect').multiSelect({
        afterSelect: function(values){
          removeColumn(values);
        },
        afterDeselect: function(values){
            addColumn(values);
        }
      });
    getTrafficData();
} );

function removeColumn(value){
    var table = $('#TrafficDataTable').DataTable();
    table.column(tableHeaders[value]).visible(false);
}

function addColumn(value){
    var table = $('#TrafficDataTable').DataTable();
    table.column(tableHeaders[value]).visible(true);
}

function getTrafficData(){
    $.ajax({
        url: 'https://data.cityofchicago.org/resource/cm53-g3up.json'}).
        done(function (result){
            loadTableData(result);
            generateBackground(result.map(function(value,index) {return value['park']}));
        }).
        fail(function() {
            alert( "Intente recargar la página" );
        });
}



function loadTableData(dataSet) {
    $('#TrafficDataTable').DataTable( {
        
        data: dataSet ,
        dataSrc: '',
        
        columns: [
            {data:"title"},
            {data: null, render: function (data, type, row){
                var date = new Date(data.date);
                return data.day + " " + date.getFullYear() + "/" + date.getMonth() + "/" + date.getDay();
            }},
            {data: null, render: function(data, type, row){
                return data.location_address + ", " + data.location_city + ", " + data.location_state;
            }},
            {data: null, render: function (data, type, row){
                return data.park + " - " + data.park_address;
            }},
            {data:"park_phone"},
            {data:"rating"},
            {data: null, render: function (data, type, row) {
                if (data.location != null){
                    return '<button class="btn btn-dark" onclick=displayMap(' + data.location.coordinates[1] + ',' + data.location.coordinates[0] + ','+ data.parkName + ');>Show map</button>';
                } else {
                    return '';
                }
            }}
        ],
        responsive: true
    } );
}

function displayMap(lat, lng, parkName){
    $('#ParkName').text(parkName);
    $('#mapModal').modal('toggle');
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: lat, lng: lng},
        zoom: 16,
    });
    var marker = new google.maps.Marker({position: {lat,lng}, map: map});
}
