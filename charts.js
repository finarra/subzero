// Get the elements
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

// Toggle the navbar menu on click Open/Close - when it gets mobile size
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("nav-toggle");
});

// Make charts responsive
const config = {responsive: true};
  

// Retrieve data with d3.json
d3.json('alarmss.json', function(data){
    console.log(data);
    // Get the total count of alarms per sensor
    const sumAlarms = data.reduce((a, {
           sensor_alarm,
           status 
        }) => (a[sensor_alarm] = (a[sensor_alarm] || 0) + status, a), {});

        console.log(sumAlarms);
        var sensorName = Object.keys(sumAlarms);
        console.log(sensorName);
        var sensorAlarms = Object.values(sumAlarms);
        var sensorAlarmsAscending = sensorAlarms.sort(function(a, b){
            return a-b
        }).reverse();
        console.log(sensorAlarmsAscending);

        // Create Bar Chart

        const barChartTrace1 = {
            x: sensorName,
            y: sensorAlarms,
            type: 'bar',
            marker: {
                color: "ea335d"
            },
        };
        const barChartData = [barChartTrace1];

        const layout = {
                // barmode: "group",
                // barmode: "stack", 
                title: "Alarms per Sensor (Annualy)",
                paper_bgcolor: "#172042",
                plot_bgcolor: "#172042",
                showlegend: false,
                margin: {
                    l: 30,
                    r: 30,
                    b: 30,
                    t: 30,
                    pad: 1,
                },
                font: {
                    color: "#6b6f8a",
                },
            };

        Plotly.newPlot('scientificChart', barChartData, layout, config);

    // Create Donut Chart 
        
    // Get the count of 'exceed', 'deficit' & 'recovery' from alarm_type
    var occurences = data.reduce(function (r, row) {
        r[row.alarm_type] = ++r[row.alarm_type] || 1;
        return r;
    }, {});
        
    console.log(occurences)

    var alarmType = Object.keys(occurences);
    console.log(alarmType);
    var alarmTypeCount = Object.values(occurences);
    console.log(alarmTypeCount);

    // Sketch Donut Chart with Plotly js
    
    // Donut Chart
    const donutChartData = [
        {
            values: alarmTypeCount,
            labels: alarmType,
            name: 'Alarm',
            hoverinfo: 'label+percent+name',
            textinfo: 'label',
            hole: 0.4,
            type: "pie",
        },
    ];

    const pieChartLayout = {
        paper_bgcolor: "#172042",
        plot_bgcolor: "#172042",
        piecolorway: ["#60bf11", "#ea335d", "#178add"],
        showlegend: false,
        margin: {
            l: 10,
            r: 10, 
            b: 10,
            t: 10,
            pad: 1,
        },
        height: 300,
        width: 300,
        annotations: [
            {
              font: {
                size: 15,
                color: "#f5f6fa"
              },
              showarrow: false,
              text: 'Alarm Type',
              x: 0.50,
              y: 0.5
            }
          ],
    };

    Plotly.newPlot("barChart", donutChartData, pieChartLayout);

},)


// Use now d3.csv to create a chart with date in x axis.
// Decided to do this because with the d3.json was complicating using date format
d3.csv(
    "https://raw.githubusercontent.com/finarra/subzero/main/Resources/saveris_alarms_weather.csv",
    function (err, rows) {
        function unpack(rows, key) {
            return rows.map(function (row){
                return row[key];
            });
        }
        console.log(rows);

        
        // Create the traces for the line chart of temperatures across the year
        var trace1 = {
            type: "scatter",
            mode: "lines",
            name: "platform_1",
            x: unpack(rows, "date"),
            y: unpack(rows, "status"),
            line: {color: "#ea335d" },
        };

        // Platform 2
        var trace2 = {
            type: "scattter",
            mode: "lines",
            name: "platform_2",
            x: unpack(rows, "date"),
            y: unpack(rows, "platform_2"),
            line: {color: "#03dcee" },
        };

        // Deep Freezer 1
        var trace3 = {
            type: "scattter",
            mode: "lines",
            name: "deepfreezer_1",
            x: unpack(rows, "date"),
            y: unpack(rows, "deepfreezer_1"),
            line: {color: "#e203ee" },
        };

        // Deep Freezer 2
        var trace4 = {
            type: "scattter",
            mode: "lines",
            name: "deepfreezer_2",
            x: unpack(rows, "date"),
            y: unpack(rows, "deepfreezer_2"),
            line: {color: "#eeab03" },
        };

        // Freezer 1
        var trace5 = {
            type: "scattter",
            mode: "lines",
            name: "freezer_1",
            x: unpack(rows, "date"),
            y: unpack(rows, "freezer_1"),
            line: {color: "#0303ee" },
        };

        // Freezer 2
        var trace6 = {
            type: "scattter",
            mode: "lines",
            name: "freezer_2",
            x: unpack(rows, "date"),
            y: unpack(rows, "freezer_2"),
            line: {color: "#ee6d03" },
        };

        // Freezer 3
        var trace7 = {
            type: "scattter",
            mode: "lines",
            name: "freezer_3",
            x: unpack(rows, "date"),
            y: unpack(rows, "freezer_3"),
            line: {color: "#ee03a0" },
        };

        // Freezer 4
        var trace8 = {
            type: "scattter",
            mode: "lines",
            name: "freezer_4",
            x: unpack(rows, "date"),
            y: unpack(rows, "freezer_4"),
            line: {color: "#ee6d03" },
        };

        // Cooling 1
        var trace9 = {
            type: "scattter",
            mode: "lines",
            name: "cooling_1",
            x: unpack(rows, "date"),
            y: unpack(rows, "cooling_1"),
            line: {color: "##ee0375" },
        };

        // Cooling 2
        var trace10 = {
            type: "scattter",
            mode: "lines",
            name: "cooling_2",
            x: unpack(rows, "date"),
            y: unpack(rows, "cooling_2"),
            line: {color: "#03ee0b" },
        };

        // Temperature
        var trace11 = {
            type: "scattter",
            mode: "line",
            name: "temperature",
            x: unpack(rows, "date"),
            y: unpack(rows, "temp"),
            line: {color: "#12fcc2" },
        };

       // Humidity
        var trace12 = {
            type: "scattter",
            mode: "lines",
            name: "humidity",
            x: unpack(rows, "date"),
            y: unpack(rows, "humidity"),
            line: {color: "#f7f2f4" },
        };



        var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10, trace11];
        const layout = {
            title: "Temperatures per Sensor",
            paper_bgcolor: "#172042",
            plot_bgcolor: "172042",
            showlegend: true,
            margin: {
                l: 30,
                r: 30,
                b: 30,
                t: 30,
                pad: 1,
            },
            font: {
                color: "#6b6f8a",
            },
            xaxis :{
                range: ["2021-06-23", "2022-05-01"],
                type: "date",
            },
            yaxis: {
                autorange: true,
                type: "linear",
            },
        };
        Plotly.newPlot("temperatureAlarms", data, layout, config);
    }
);





