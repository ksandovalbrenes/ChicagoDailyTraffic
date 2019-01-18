$(document).ready( function () {
    $('#TrafficDataTable').DataTable( {
        ajax: {
            url: 'https://data.cityofchicago.org/resource/cm53-g3up.json',
            dataSrc: ''
        },
        columns: [
            {data:"day", "defaultContent": ""},
            {data:"date", "defaultContent": ""},
            {data:"day", "defaultContent": ""},
            {data:"location_address", "defaultContent": ""},
            {data:"location_city", "defaultContent": ""},
            {data:"location_state", "defaultContent": ""},
            {data:"park", "defaultContent": ""},
            {data:"park_address", "defaultContent": ""},
            {data:"park_phone", "defaultContent": ""},
            {data:"rating", "defaultContent": ""},
            {data:"title", "defaultContent": ""},
            {data:"underwriter", "defaultContent": ""}
        ],
        responsive: true
    } );
} );