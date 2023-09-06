let myGraph = document.getElementById('myGraph');

let trace1 = {};

trace1.type = "bar";
trace1.name = "January";

trace1.x = [];
trace1.y = [];

trace1.x[0] = "lyft";
trace1.x[1] = "uber";

trace1.y[0] = lyft[0]['count'];
trace1.y[1] = uber[0]['count'];
trace1.text =trace1.y;
trace1.textfont = {
    color : 'white',
    size:15
};
trace1.marker = {
    color:'brown'
};


let trace2 = {};
trace2.type = "bar";
trace2.name = "February";

trace2.x = [];
trace2.y = [];

trace2.x[0] = "lyft";
trace2.x[1] = "uber";

trace2.y[0] = lyft[1]['count'];
trace2.y[1] = uber[1]['count'];
trace2.text =trace2.y;
trace2.textfont = {
    color : 'black',
    size:15
};
trace2.marker = {
    color:'orange'
};

let trace3 = {};

trace3.type = "bar";
trace3.name = "March";

trace3.x = [];
trace3.y = [];

trace3.x[0] = "lyft";
trace3.x[1] = "uber";

trace3.y[0] = lyft[2]['count'];
trace3.y[1] = uber[2]['count'];
trace3.text =trace3.y;
trace3.textfont = {
    color : 'brown',
    size:15
};
trace3.marker = {
    color:'NavajoWhite'
};

let data = [];

data.push(trace1);
data.push(trace2);
data.push(trace3);

let layout = {

    margin: {
        t: 0
    },
    barmode: 'stack'

};
Plotly.newPlot(myGraph, data, layout);