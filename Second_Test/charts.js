// Get the elements
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

// Toggle the navbar menu on click Open/Close - when it gets mobile size
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("nav-toggle");
});

// Charts
const config = {responsive: true};

// Bar Chart

const barChartTrace1 = {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [20, 14, 23],
    name: 'SF Zoo',
    type: 'bar',
    marker: {
        color: '#ea335d',
    },
  };
  
  const barChartTrace2 = {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [12, 18, 29],
    name: 'LA Zoo',
    type: 'bar',
    marker: {
        color: '#ea335d',
        opacity: 0.6,
    },
  };
  
const barChartData = [barChartTrace1, barChartTrace2];

const layout = {
    barmode: "group",
    // barmode: "stack", 
    paper_bgcolor: "#172042",
    plot_bgcolor: "#172042",
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
};

  
Plotly.newPlot('barChart', barChartData, layout, config);
 
 
// SCATTER PLOTLY FOR ALL TEMP VALUES
d3.csv(
    "https://raw.githubusercontent.com/finarra/subzero/main/Resources/saveris_alarms_weather.csv",
    function (err, rows) {
        function unpack(rows, key) {
            return rows.map(function (row){
                return row[key];
            });
        }

        // SUPER IMPORTANT DON'T DELETE
        // Get the total counts of alarms for each sensor_alarm
        // const sumAlarms = rows.reduce((a, {
        //    sensor_alarm,
        //    status 
        // }) => (a[sensor_alarm] = (a[sensor_alarm] || 0) + status, a), {});

        // console.log(sumAlarms);

        // Platform 1
        var trace1 = {
            type: "scatter",
            mode: "lines",
            name: "platform_1",
            x: unpack(rows, "date"),
            y: unpack(rows, "platform_1"),
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
        // var trace12 = {
        //     type: "scattter",
        //     mode: "lines",
        //     name: "humidity",
        //     x: unpack(rows, "date"),
        //     y: unpack(rows, "humidity"),
        //     line: {color: "#f7f2f4" },
        // };



        var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10, trace11];
        const layout = {
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
        Plotly.newPlot("scientificChart", data, layout, config);
    }
);
// PIE CHART


// const pieChartData = [
//     {
//         values: [19, 26, 55],
//         labels: ["March", "April", "June"],
//         type: "pie",
//     },
// ];

// const pieChartLayout = {
//     paper_bgcolor: "#172042",
//     plot_bgcolor: "#172042",
//     piecolorway: ["#ea335d", "#03dcee", "#178add"],
//     showlegend: false,
//     margin: {
//         l: 10,
//         r: 10, 
//         b: 10,
//         t: 10,
//         pad: 1,
//     },
//     height: 300,
//     width: 300,
// };

// Plotly.newPlot("pieChart", pieChartData, pieChartLayout);


// DONUT CHART

// const donutChartData = [
//     {
//         values: [10, 40, 50],
//         labels: ["Sep", "Oct", "Nov"],
//         hole: 0.4,
//         type: "pie",
//     },
// ];

// Plotly.newPlot("donutChart", donutChartData, pieChartLayout);

// CARPET CHART

// var carpetChartData = {
//     type: "carpet",
//     a: [4, 4, 4, 4.5, 4.5, 4.5, 5, 5, 5, 6, 6, 6],
//     b: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
//     y: [2, 3.5, 4, 3, 4.5, 5, 5.5, 6.5, 7.5, 8, 8.5, 10],
//     aaxis: {
//         trickprefix: "a = ",
//         tricksuffix: "m", 
//         smoothing: 1,
//         minorgridcount: 9,
//         minorgridcolor: "#ea335d",
//         gridcolor: "#ea335d",
//         color: "#03dcee",
//     },
//     baxis: {
//         trickprefix: "b = ",
//         tricksuffix: "Pa", 
//         smoothing: 1,
//         minorgridcount: 9,
//         minorgridcolor: "#ea335d",
//         gridcolor: "#ea335d",
//         color: "#03dcee",
//     },
// };

// const carpetChartLayout = {
//     paper_bgcolor: "#172042",
//     plot_bgcolor: "#172042",
//     showlegend: false,
//     margin: {
//         l: 10,
//         r: 10,
//         b: 10,
//         t: 10,
//         pad: 1,
//     },
//     font: {
//         color: "#6b6f8a",
//     },
//     height: 300,
//     width: 300,
// };

// Plotly.newPlot(
//     "carpetChart", [carpetChartData], carpetChartLayout
// );
