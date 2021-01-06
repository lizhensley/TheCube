class Chart {

    constructor(data) {
        this.data = data;

        this.isHidden = true;

        this.layoutConfig = {
            paper_bgcolor= 'rgba(0,0,0,0)',
            plot_bgcolor= 'rgba(0,0,0,0)',
            margin: {l: 0, r: 0, b: 0, t: 0, pad: 10},
            scene: {
                camera: {
                    center: {x: 0, y: 0, z: 0},
                    eye: {x: 2, y: 1, z: 1},  
                },
                aspectratio: {x: 1, y: 1, z: 1},
                xaxis: {
                    title: '',
                    domain: [0, 10],
                    range: [0, 10],
                    ticktext:['', 'scrawny', '', '', '', '', '', '', '', 'beefy', ''],
                    tickvals:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    tickangle: -20,
                    backgroundcolor: "rgb(251, 146, 149)",
                    gridcolor: "rgb(250,250,250)",
                    showbackground: true,
                    zerolinecolor: "rgb(250,250,250)"
                },
                yaxis: {
                    title: '',
                    domain: [0, 10],
                    range: [0, 10],
                    ticktext:['', 'kind', '', '', '', '', '', '', '', 'mean', ''],
                    tickvals:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    tickangle: -20,
                    backgroundcolor: "rgb(65, 206, 221)",
                    gridcolor: "rgb(250,250,250)",
                    showbackground: true,
                    zerolinecolor: "rgb(250,250,250)",
                },
                zaxis: {
                    title: '',
                    domain: [0, 10],
                    range: [0, 10],
                    ticktext:['', 'stupid', '', '', '', '', '', '', '', 'smart', ''],
                    tickvals:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    tickangle: -20,
                    backgroundcolor: "rgb(159, 153, 255)",
                    gridcolor: "rgb(250,250,250)",
                    showbackground: true,
                    zerolinecolor: "rgb(250,250,250)"
                }
            },
        };

        this.chartConfig = {
            modeBarButtonsToRemove: ['resetCameraLastSave3d'], 
            responsive: true,
            displaylogo: false
        };

        this.initializeChart();
    }

    initializeChart = function() {
        let dataX = this.data.x;
        let dataY = this.data.y;
        let dataZ = this.data.z;
        let names = this.data.names;
        let text = new Array(dataX.length);

        for (let i = 0; i < dataX.length; i++) {
            text[i] = this.getHoverText(names[i], dataX[i], dataY[i], dataZ[i]);
        }

        this.dataConfig = [{
            opacity: 0.6,
            type: 'scatter3d',
            mode: 'markers',
            hovertemplate: '%{text}',
            text: text,
            showlegend: false,
            x: dataX,
            y: dataY,
            z: dataZ,
        }];

        Plotly.newPlot('chart', this.dataConfig, this.layoutConfig, this.chartConfig);
    }

    updateChart = function(data) {
        let updatedDataConfig = {
            names: data.names,
            x: data.x,
            y: data.y,
            z: data.z
        }

        Plotly.restyle('chart', updatedDataConfig)
    }
    
    getHoverText = function(name, x, y, z) {
        let values = [x, y, z];
        let labels = new Array(3);
        let adjectives = ["scrawny", "beefy", "kind", "mean", "stupid", "smart"]
    
        for (let i = 0; i < 3; i++) {
            let label1 = adjectives[(i * 2)];
            let label2 = adjectives[(i * 2) + 1]
            if (values[i] == 0) {
                labels[i] = label1;
            } else if (values[i] <= 2) {
                labels[i] = "mostly " + label1;
            } else if (values[i] < 5) {
                labels[i] = "kinda " + label1;
            } else if (values[i] == 5) {
                labels[i] = "neither " + label1 + " or " + label2;
            } else if (values[i] < 8) {
                labels[i] = "kinda " + label2;
            } else if (values[i] < 10) {
                labels[i] = "mostly " + label2;
            } else {
                labels[i] = label2;
            }
        }
        return `<b>${name}</b><br><br>• ${labels[0]}<br>• ${labels[1]}<br>• ${labels[2]}<extra></extra>`;
    }
}