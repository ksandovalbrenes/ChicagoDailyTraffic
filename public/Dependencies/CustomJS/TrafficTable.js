$(document).ready( function () {
    $('#TrafficDataTable').DataTable( {
        ajax: {
            url: 'https://data.cityofchicago.org/resource/cm53-g3up.json',
            dataSrc: ''
        },
        columns: [
            {data:"cc", "defaultContent": ""},
            {data: null, render: function (data, type, row){
                var date = new Date(data.date);
                return data.day + " " + date.getFullYear() + "/" + date.getMonth() + "/" + date.getDay();
            }},
            {data: null, render: function(data, type, row){
                return data.location_address + ", " + data.location_city + ", " + data.location_state;
            }},
            {data:"park"},
            {data:"park_address"},
            {data:"park_phone"},
            {data:"rating"},
            {data:"title"},
            {data:"underwriter","defaultContent": ""}
        ],
        responsive: true
    } );
} );