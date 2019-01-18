$(document).ready( function () {
    $('#TrafficDataTable').DataTable( {
        ajax: {
            url: 'https://data.cityofchicago.org/resource/cm53-g3up.json',
            dataSrc: ''
        },
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
                    return 'x:' + data.location.coordinates[0]  + ' y' + data.location.coordinates[1];
                } else {
                    return '';
                }
            }}
        ],
        responsive: true
    } );
} );