/////////////// PAST DATA TOTAL HEATMAP ///////////////
d3.csv("https://raw.githubusercontent.com/armyofkittens/Analyze-This-Campaign-Finance-Analysis/Lora/Past%20Data/cycle_year.csv", function(err, rows){

  function filter_and_unpack(rows, key, year) {
  return rows.filter(row => row['cycle'] == year).map(row => row[key])
  }

  var frames = []
  var slider_steps = []

  var n = 13;
  var num = 1990;
  for (var i = 0; i <= n; i++) {
    var z = filter_and_unpack(rows, 'raised_total', num)
    var locations = filter_and_unpack(rows, 'state', num)
    frames[i] = {data: [{z: z, locations: locations, text: locations}], name: num}
    slider_steps.push ({
        label: num.toString(),
        method: "animate",
        args: [[num], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300}
          }
        ]
      })
    num = num + 2
  }

var heatData = [{
      type: 'choropleth',
      locationmode: 'USA-states',
      locations: frames[0].data[0].locations,
      z: frames[0].data[0].z,
      text: frames[0].data[0].locations,
      zauto: false,
      zmin: 30,
      zmax: 10000000,
      colorscale: 'RdBu'

}];
var heatLayout = {
    title: 'Total Contributions By State<br>1990 - 2016',
    geo:{
       scope: 'usa',
       countrycolor: 'rgb(255, 255, 255)',
       showland: true,
       landcolor: 'rgb(217, 217, 217)',
       showlakes: true,
       lakecolor: 'rgb(255, 255, 255)',
       subunitcolor: 'rgb(255, 255, 255)',
       lonaxis: {},
       lataxis: {}
    },
    updatemenus: [{
      x: 0.1,
      y: 0,
      yanchor: "top",
      xanchor: "right",
      showactive: false,
      direction: "left",
      type: "buttons",
      pad: {"t": 87, "r": 10},
      buttons: [{
        method: "animate",
        args: [null, {
          fromcurrent: true,
          transition: {
            duration: 200,
          },
          frame: {
            duration: 500
          }
        }],
        label: "Play"
      }, {
        method: "animate",
        args: [
          [null],
          {
            mode: "immediate",
            transition: {
              duration: 0
            },
            frame: {
              duration: 0
            }
          }
        ],
        label: "Pause"
      }]
    }],
    sliders: [{
      active: 0,
      steps: slider_steps,
      x: 0.1,
      len: 0.9,
      xanchor: "left",
      y: 0,
      yanchor: "top",
      pad: {t: 50, b: 10},
      currentvalue: {
        visible: true,
        prefix: "Year:",
        xanchor: "right",
        font: {
          size: 20,
          color: "#666"
        }
      },
      transition: {
        duration: 300,
        easing: "cubic-in-out"
      }
    }]
};

Plotly.newPlot('contribution_total_heatmap', heatData, heatLayout).then(function() {
    Plotly.addFrames('contribution_total_heatmap', frames);
  });
})

/////////////// PAST DATA INDIVIDUALS HEATMAP ///////////////
d3.csv("https://raw.githubusercontent.com/armyofkittens/Analyze-This-Campaign-Finance-Analysis/Lora/Past%20Data/cycle_year.csv", function(err, rows){

  function filter_and_unpack(rows, key, year) {
  return rows.filter(row => row['cycle'] == year).map(row => row[key])
  }

  var frames = []
  var slider_steps = []

  var n = 13;
  var num = 1990;
  for (var i = 0; i <= n; i++) {
    var z = filter_and_unpack(rows, 'raised_from_individuals', num)
    var locations = filter_and_unpack(rows, 'state', num)
    frames[i] = {data: [{z: z, locations: locations, text: locations}], name: num}
    slider_steps.push ({
        label: num.toString(),
        method: "animate",
        args: [[num], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300}
          }
        ]
      })
    num = num + 2
  }

var heatData = [{
      type: 'choropleth',
      locationmode: 'USA-states',
      locations: frames[0].data[0].locations,
      z: frames[0].data[0].z,
      text: frames[0].data[0].locations,
      zauto: false,
      zmin: 30,
      zmax: 10000000,
      colorscale: 'RdBu'

}];
var heatLayout = {
    title: 'Individual Contributions By State<br>1990 - 2016',
    geo:{
       scope: 'usa',
       countrycolor: 'rgb(255, 255, 255)',
       showland: true,
       landcolor: 'rgb(217, 217, 217)',
       showlakes: true,
       lakecolor: 'rgb(255, 255, 255)',
       subunitcolor: 'rgb(255, 255, 255)',
       lonaxis: {},
       lataxis: {}
    },
    updatemenus: [{
      x: 0.1,
      y: 0,
      yanchor: "top",
      xanchor: "right",
      showactive: false,
      direction: "left",
      type: "buttons",
      pad: {"t": 87, "r": 10},
      buttons: [{
        method: "animate",
        args: [null, {
          fromcurrent: true,
          transition: {
            duration: 200,
          },
          frame: {
            duration: 500
          }
        }],
        label: "Play"
      }, {
        method: "animate",
        args: [
          [null],
          {
            mode: "immediate",
            transition: {
              duration: 0
            },
            frame: {
              duration: 0
            }
          }
        ],
        label: "Pause"
      }]
    }],
    sliders: [{
      active: 0,
      steps: slider_steps,
      x: 0.1,
      len: 0.9,
      xanchor: "left",
      y: 0,
      yanchor: "top",
      pad: {t: 50, b: 10},
      currentvalue: {
        visible: true,
        prefix: "Year:",
        xanchor: "right",
        font: {
          size: 20,
          color: "#666"
        }
      },
      transition: {
        duration: 300,
        easing: "cubic-in-out"
      }
    }]
};

Plotly.newPlot('contribution_ind_heatmap', heatData, heatLayout).then(function() {
    Plotly.addFrames('contribution_ind_heatmap', frames);
  });
})

/////////////// PAST DATA PACS HEATMAP ///////////////
d3.csv("https://raw.githubusercontent.com/armyofkittens/Analyze-This-Campaign-Finance-Analysis/Lora/Past%20Data/cycle_year.csv", function(err, rows){

  function filter_and_unpack(rows, key, year) {
  return rows.filter(row => row['cycle'] == year).map(row => row[key])
  }

  var frames = []
  var slider_steps = []

  var n = 13;
  var num = 1990;
  for (var i = 0; i <= n; i++) {
    var z = filter_and_unpack(rows, 'raised_from_pacs', num)
    var locations = filter_and_unpack(rows, 'state', num)
    frames[i] = {data: [{z: z, locations: locations, text: locations}], name: num}
    slider_steps.push ({
        label: num.toString(),
        method: "animate",
        args: [[num], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300}
          }
        ]
      })
    num = num + 2
  }

var heatData = [{
      type: 'choropleth',
      locationmode: 'USA-states',
      locations: frames[0].data[0].locations,
      z: frames[0].data[0].z,
      text: frames[0].data[0].locations,
      zauto: false,
      zmin: 30,
      zmax: 10000000,
      colorscale: 'RdBu'

}];
var heatLayout = {
    title: 'PAC Contributions By State<br>1990 - 2016',
    geo:{
       scope: 'usa',
       countrycolor: 'rgb(255, 255, 255)',
       showland: true,
       landcolor: 'rgb(217, 217, 217)',
       showlakes: true,
       lakecolor: 'rgb(255, 255, 255)',
       subunitcolor: 'rgb(255, 255, 255)',
       lonaxis: {},
       lataxis: {}
    },
    updatemenus: [{
      x: 0.1,
      y: 0,
      yanchor: "top",
      xanchor: "right",
      showactive: false,
      direction: "left",
      type: "buttons",
      pad: {"t": 87, "r": 10},
      buttons: [{
        method: "animate",
        args: [null, {
          fromcurrent: true,
          transition: {
            duration: 200,
          },
          frame: {
            duration: 500
          }
        }],
        label: "Play"
      }, {
        method: "animate",
        args: [
          [null],
          {
            mode: "immediate",
            transition: {
              duration: 0
            },
            frame: {
              duration: 0
            }
          }
        ],
        label: "Pause"
      }]
    }],
    sliders: [{
      active: 0,
      steps: slider_steps,
      x: 0.1,
      len: 0.9,
      xanchor: "left",
      y: 0,
      yanchor: "top",
      pad: {t: 50, b: 10},
      currentvalue: {
        visible: true,
        prefix: "Year:",
        xanchor: "right",
        font: {
          size: 20,
          color: "#666"
        }
      },
      transition: {
        duration: 300,
        easing: "cubic-in-out"
      }
    }]
};

Plotly.newPlot('contribution_pacs_heatmap', heatData, heatLayout).then(function() {
    Plotly.addFrames('contribution_pacs_heatmap', frames);
  });
})

  ////////////////////// LINE CHART TOTAL CONTRIBUTIONS/////////////////////////////
  var trace1 = {
    x: [1990, 1992, 1994, 1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016],
    y: [214192873,
        299817970,
        274247778,
        351605771,
        312161132,
        437921318,
        386252574,
        784660808,
        565950780,
        852259525,
        664753802,
        917007970,
        681862317,
        166197495],
    mode: 'lines',
    name: 'Pacs'
  };
  
  var trace2 = {
    x: [1990, 1992, 1994, 1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016],
    y: [197534454,
        414261808,
        375236722,
        550050782,
        397972094,
        910003372,
        532155529,
        1464042506,
        971827359,
        3379219586,
        1158967955,
        1995128121,
        1085990378,
        594284643],
    mode: 'lines',
    name: 'Invididuals'
  };
  
  var data = [trace1, trace2];
  
  var layout = {
    title:'Total Contributions: Pacs vs Individual '
  };

  Plotly.newPlot('total_line', data, layout);

   ////////////////////// LINE CHART BY PACS - ELECTION TYPE/////////////////////////////
   var trace1 = {
    x: [1990, 1992, 1994, 1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016],
    y: [127254356,
        159278559,
        168409300,
        198261631,
        197623923,
        232757111,
        249937181,
        304414987,
        354963354,
        410584347,
        407433255,
        455990701,
        423404806,
        113268038],
    mode: 'lines',
    name: 'District'
  };
  
  var trace2 = {
    x: [1990, 1992, 1994, 1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016],
    y: [450837,
        30284984,
        -474522,
        37537063,
        4988765,
        82055530,
        1090199,
        281477277,
        441420,
        194597077,
        4954156,
        195760515,
        2158848,
        7295231],
    mode: 'lines',
    name: 'President'
  };

  var trace3 = {
    x: [1990, 1992, 1994, 1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016],
    y: [86487680,
        110254427,
        106313000,
        115807077,
        109548444,
        123108677,
        135225194,
        198768544,
        210546006,
        247078101,
        252366391,
        265256754,
        256298663,
        45634226],
    mode: 'lines',
    name: 'Senate'
  };
  
  var data = [trace1, trace2, trace3];
  
  var layout = {
    title:'Pac Contributions per Election Type '
  };

  Plotly.newPlot('pac_line', data, layout);

     ////////////////////// LINE CHART BY IND - ELECTION TYPE/////////////////////////////
     var trace1 = {
        x: [1990, 1992, 1994, 1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016],
        y: [88821484,
            140040778,
            162430286,
            207110616,
            196004664,
            269999169,
            273815828,
            358446395,
            443141874,
            562914809,
            572725134,
            608970998,
            546639626,
            159808961],
        mode: 'lines',
        name: 'District'
      };
      
      var trace2 = {
        x: [1990, 1992, 1994, 1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016],
        y: [-25913,
            115176293,
            3272766,
            106254534,
            560025,
            279262552,
            1108374,
            628119663,
            3574041,
            2140335120,
            -3443457,
            779725521,
            71360775,
            281134040],
        mode: 'lines',
        name: 'President'
      };
    
      var trace3 = {
        x: [1990, 1992, 1994, 1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016],
        y: [108738883,
            159044737,
            209533670,
            236685632,
            201407405,
            360741651,
            257231327,
            477476448,
            525111444,
            675969657,
            589686278,
            606431602,
            467989977,
            153341642],
        mode: 'lines',
        name: 'Senate'
      };
      
      var data = [trace1, trace2, trace3];
      
      var layout = {
        title:'Individual Contributions per Election Type '
      };
    
      Plotly.newPlot('indv_line', data, layout);

///////////////////////////// TOTAL RAISED BAR CHART //////////////////////////
var trace1 = {
  x: ['1990', '1992', '1994', '1996', '1998', '2000', '2002', '2004', '2006', '2008', '2010', '2012', '2014', '2016'],
  y: [334494872,
548463778,
500892819,
557810389,
512574715,
847729518,
588276598,
1506931664,
881446983,
3006857825,
973514276,
1615560375,
935593862,
494444901],
  name: 'Democrat',
  type: 'bar'
};

var trace2 = {
  x: ['1990', '1992', '1994', '1996', '1998', '2000', '2002', '2004', '2006', '2008', '2010', '2012', '2014', '2016'],
  y: [301792034,
425674586,
510215427,
787513462,
609611476,
1068443793,
621704376,
1084255350,
778114959,
1446800846,
1032995297,
1849719014,
1033051898,
532584181],
  name: 'Republican',
  type: 'bar'
};


var data = [trace1, trace2];

var layout = {barmode: 'group',
             title: "Total Raised: Democrat vs Republican",
              xaxis: {
                tickvals: ['1990', '1992', '1994', '1996', '1998', '2000', '2002', '2004', '2006', '2008', '2010', '2012', '2014', '2016']}
             }

Plotly.newPlot('raised_bar', data, layout);


///////////////////////////// WINS BAR CHART //////////////////////////
var trace1 = {
  x: ['1990', '1992', '1994', '1996', '1998', '2000', '2002', '2004', '2006', '2008', '2010', '2012', '2014'],
  y: [295,
293,
224,
260,
239,
238,
223,
214,
268,
292,
217,
240,
201],
  name: 'Democrat- Wins',
  type: 'bar'
};

var trace2 = {
  x: ['1990', '1992', '1994', '1996', '1998', '2000', '2002', '2004', '2006', '2008', '2010', '2012', '2014'],
  y: [191,
197,
268,
292,
251,
239,
250,
231,
214,
197,
276,
258,
270],
  name: 'Republican - Wins',
  type: 'bar'
};


var data = [trace1, trace2];

var layout = {barmode: 'group',
             title: "Wins Per Cycle: Democrat vs Republican",
              xaxis: {
                tickvals: ['1990', '1992', '1994', '1996', '1998', '2000', '2002', '2004', '2006', '2008', '2010', '2012', '2014']}
             }

Plotly.newPlot('wins_bar', data, layout);