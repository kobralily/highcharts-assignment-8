//js

//chart: streamgraph -- "YAXIS" compensation of employees DIVIDER: per industry XAXIS overtime
//chart: XAXIS compensation of employees BUBBLE: per industry  Yaxis: weighted by gross output

//chart 1
Highcharts.setOptions({
    lang: {
        numericSymbols: ['B'],
    }
});
var colors = Highcharts.getOptions().colors;
Highcharts.chart('container', {

    chart: {
        type: 'streamgraph',
        marginBottom: 30,
        zoomType: 'x'
    },

    // Make sure connected countries have similar colors
    colors: [
        colors[0],
        colors[1],
        colors[2],
        colors[3],
        colors[4],
        colors[5],
        colors[6],
        colors[7],
        colors[8],
        colors[9],
        colors[0],
        colors[1],
        colors[3],
    ],

    title: {
        floating: true,
        align: 'left',
        text: 'Compensation of Employees per Industry'
    },
    subtitle: {
        floating: true,
        align: 'left',
        y: 30,
        text: 'Source: US Department of Commerce, <a href="https://apps.bea.gov/iTable/?reqid=19&step=2&isuri=1&categories=survey#eyJhcHBpZCI6MTksInN0ZXBzIjpbMSwyLDNdLCJkYXRhIjpbWyJDYXRlZ29yaWVzIiwiU3VydmV5Il0sWyJOSVBBX1RhYmxlX0xpc3QiLCIxODkiXV19">Table 6.3D. Wages and Salaries by Industry</a>'
    },

    xAxis: {
        maxPadding: 0,
        type: 'category',
        crosshair: true,
        categories: [
            '',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
            '2019',
            '2020',
            '2021',
        ],
        labels: {
            align: 'left',
            reserveSpace: false,
            rotation: 270
        },
        lineWidth: 0,
        margin: 20,
        tickWidth: 0
    },

    yAxis: {
        visible: false,
        startOnTick: false,
        endOnTick: false
    },

    legend: {
        enabled: false
    },

    plotOptions: {
        series: {
            label: {
                minFontSize: 5,
                maxFontSize: 15,
                style: {
                    color: 'rgba(255,255,255,0.75)'
                }
            },
            accessibility: {
                exposeAsGroupOnly: true
            }
        }
    },

    // Data parsed with olympic-medals.node.js
    series: [{
        name: "Agriculture, forestry, fishing, and hunting",
        data: [
            0,41017,40798,43262,45257,44740,45893,48605,48457
        ]
    }, {
        name: "Mining",
        data: [
            0,86849,78136,63222,64001,70624,73336,60053,56631
        ]
    }, {
        name: "Utilities",
        data: [
            0,55086,57437,58234,60594,62196,63818,65373,66749
        ]
    }, {
        name: "Construction",
        data: [
            0,349130,380711,407506,437181,469948,501785,502583,536557
        ]
    }, {
        name: "Manufacturing",
        data: [
            0,780477,807105,813957,845859,883569,910693,904374,960131
        ]
    }, {
        name: "Wholesale trade",
        data: [
            0,420659,438636,441325,457333,465377,481622,483261,525102
        ]
    }, {
        name: "Retail trade",
        data: [
            0,456001,481775,494573,510544,527398,541891,560131,628418
        ]
    }, {
        name: "Transportation and warehousing",
        data: [
            0,242296,259278,267396,283354,306116,328376,333573,373415
        ]
    }, {
        name: "Information",
        data: [
            0,252967,267097,280738,300015,324744,345469,373861,438181
        ]
    }, {
        name: "Finance and insurance",
        data: [
            0,582076,611170,625472,668515,693117,727235,787544,859741
        ]
    }, {
        name: "Real estate and rental and leasing",
        data: [
            0,109197,117212,121098,128934,137672,147731,147546,162297
        ]
    }, {
        name: "Professional, scientific, and technical services",
        data: [
            0,736696,789823,819167,859626,918853,978182,1031001,1150593
        ]
    }, {
        name: "Management of companies and enterprises",
        data: [
            0,246652,260287,262022,278525,293644,309554,312429,337656
        ]
    }, {
        name: "Administrative and waste management services",
        data: [
            0,316298,337936,350946,370322,390317,412282,410408,468078
        ]
    }, {
        name: "Educational services",
        data: [
            0,139294,144176,151286,157511,164840,172203,174509,181876
        ]
    }, {
        name: "Health care and social assistance",
        data: [
            0,844772,895709,934352,976233,1023344,1075341,1109808,1188198
        ]
    }, {
        name: "Arts, entertainment, and recreation",
        data: [
            0,82488,86934,92024,96837,102533,108138,87460,102194
        ]
    }, {
        name: "Accommodation and food services",
        data: [
            0,271784,292968,313531,331678,350241,370726,288680,367348
        ]
    }, {
        name: "Other services, except government",
        data: [
            0,235137,246656,254086,264496,279068,291720,289501,305003
        ]
    }, {
        name: "Government",
        data: [
            0,1236901,1275756,1308029,1348203,1401965,1450454,1494485,1544140
        ]
    },
    ],

    exporting: {
        sourceWidth: 800,
        sourceHeight: 600
    }

});







//chart2
Highcharts.chart('container2', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'Compensation by Gross Output in 2021'
    },
    subtitle: {
        text: 'Source: US Department of Commerce, <a href="https://apps.bea.gov/iTable/?reqid=19&step=2&isuri=1&categories=survey#eyJhcHBpZCI6MTksInN0ZXBzIjpbMSwyLDNdLCJkYXRhIjpbWyJDYXRlZ29yaWVzIiwiU3VydmV5Il0sWyJOSVBBX1RhYmxlX0xpc3QiLCIxODkiXV19">Table 6.3D. Wages and Salaries by Industry </a><a href="https://apps.bea.gov/iTable/?reqid=150&step=2&isuri=1&categories=gdpxind#eyJhcHBpZCI6MTUwLCJzdGVwcyI6WzEsMiwzXSwiZGF0YSI6W1siQ2F0ZWdvcmllcyIsIkdkcHhJbmQiXSxbIlRhYmxlX0xpc3QiLCIxNSJdXX0=">and Table 6.3D. Wages and Salaries by Industry </a>'
    },
    xAxis: {
        title: {
            enabled: true,
            text: 'Total Compensation ($M)'
        },

        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    },
    yAxis: {
        title: {
            text: 'Gross Output'
        },


        tickInterval: 1000000, // added
    },
    legend: false,

    plotOptions: {
        scatter: {
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} M, {point.y} M'
            }
        }
    },
    series: [{
        name: 'Agriculture, forestry, fishing, and hunting',
        color: '#F7CBDC',
        size: 50,
        data: [[48457, 528378]]

    }, {
        name: 'Mining',
        color: '#98DEF6',
        data: [[56631, 632025]]
    }, {
        name: 'Utilities',
        color: 'rgba(119, 152, 191, .5)',
        data: [[66749, 498284]]
    }, {
        name: 'Construction',
        color: '#F5807C',
        data: [[536557, 1440464]]
    }, {
        name: 'Manufacturing',
        color: '#7EB54A',
        data: [[960131, 5773195]]
    }, {
        name: 'Wholesale trade',
        color: '#50CAA5',
        data: [[525102, 1988473]]
    }, {
        name: 'Retail trade',
        color: '#A750CA',
        data: [[628418, 1927634]]
    }, {
        name: 'Transportation and warehousing',
        color: '#335099',
        data: [[373415, 1213819]]
    }, {
        name: 'Information',
        color: '#B9BF3C',
        data: [[438181, 2280973]]
    }, {
        name: 'Finance and insurance',
        color: '#D15A11',
        data: [[859741, 2595419]]
    }, {
        name: 'Real estate and rental and leasing',
        color: '#F144EC',
        data: [[162297, 3482122]]
    }, {
        name: 'Professional, scientific, and technical services',
        color: '#15C212',
        data: [[1150593, 2556514]]
    }, {
        name: 'Management of companies and enterprises',
        color: '#B13025',
        data: [[337656, 735097]]
    }, {
        name: 'Administrative and waste management services',
        color: '#1B208D',
        data: [[468078, 1157812]]
    }, {
        name: 'Educational services',
        color: '#7EC124',
        data: [[181876, 317744]]
    }, {
        name: 'Health care and social assistance',
        color: '#DD4B82',
        data: [[1188198, 2362844]]
    }, {
        name: 'Arts, entertainment, and recreation',
        color: '#E538F3',
        data: [[102194, 272159]]
    }, {
        name: 'Accommodation and food services',
        color: '#F3AF38',
        data: [[367348, 1014661]]
    }, {
        name: 'Other services, except government',
        color: '#AED820',
        data: [[305003, 593288]]
    }, {
        name: 'Government',
        color: '#000',
        data: [[1544140, 3652291]]
    }]
});
