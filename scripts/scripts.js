var fuelChart = document.getElementById('fuelChart').getContext('2d');

var fuelBarChart = Chart.Bar(fuelChart, {
    data:{
        labels:['Liquid fuel', 'Solid fuel'],
        datasets:[{
            label:'Fuel(kg)',
            data:[
            400000,
            500000
            ],
        backgroundColor: 'rgba(0, 82, 136, 0.7)',
        borderWidth: 2,
        borderColor: 'rgba(0, 82, 136, 1)',
        hoverBorderWidth: 3,
        hoverBorderColor: 'rgba(0, 100, 150, 1)',
        }]
    },
    options:{
        scales:{
            yAxes:[{
                ticks:{
                    min: 0,
                }
            }]
        },
        responsive: true,
        maintainAspectRatio: false,
    }
});

var speedChart = document.getElementById('speedChart').getContext('2d');

var speedometer = Chart.Doughnut(speedChart, {
    data:{
        labels:['Speed'],
        datasets:[{
            label:'m/s',
            data:[
            66,
            1,
            33
            ],
        backgroundColor:[
            'rgba(0, 82, 136, 0.7)',
            'rgba(50, 50, 50, 0.7)',
            'rgba(167, 169, 172, 0.6)'
        ],
        borderWidth: 2,
        borderColor:[
            'rgba(0, 82, 136, 1)',
            'rgba(50, 50, 50, 1',
            'rgba(167, 169, 172, 0.6)'],
        hoverBorderWidth: 3,
        hoverBorderColor:[
            'rgba(0, 82, 136, 1)',
            'rgba(50, 50, 50, 1)',
            'rgba(167, 169, 172, 0.6)'],
        }]
    },
    options:{
        responsive: true,
        maintainAspectRatio: false,
        rotation: -1.0 * Math.PI, // start angle in radians
        circumference: Math.PI, // sweep angle in radians
        legend:{
            display:false,
        }
    }
});

var storageChart = document.getElementById('storageChart').getContext('2d');

var storageBarChart = Chart.Bar(storageChart, {
    data:{
        labels:['Food', 'Water'],
        datasets:[{
            label:'Kilogram',
            data:[
            8593,
            4936
            ],
            backgroundColor: 'rgba(167, 169, 172, 0.6)',
            borderWidth: 2,
            borderColor: 'rgba(167, 169, 172, 0.6)',
            hoverBorderWidth: 3,
            hoverBorderColor: 'rgba(167, 169, 172, 1)',
        }]
    },
    options:{
        scales:{
            yAxes:[{
                ticks:{
                    min: 0,
                }
            }]
        },
        responsive: true,
        maintainAspectRatio: false,
    }
});

var progressChart = document.getElementById('progressChart').getContext('2d');

var progressPieChart = Chart.Doughnut(progressChart, {
    data:{
        labels:['Progress to Mars'],
        datasets:[{
            label:'Distance travelled',
            data:[
            60,
            40
            ],
        backgroundColor:[
            'rgba(0, 82, 136, 0.6)',
            'rgba(167, 169, 172, 0.6)'
        ],
        borderWidth: 2,
        borderColor: [
            'rgba(0, 82, 136, 0.6)',
            'rgba(167, 169, 172, 1 )'
        ],
        hoverBorderWidth: 3,
        hoverBorderColor:[
            'rgba(0, 82, 136, 0.6)',
            'rgba(167, 169, 172, 0.6)'
        ],
        }]
    },
    options:{
        responsive: true,
        maintainAspectRatio: false,
    }
});