window.onload = function() {

  var dataPoints = [];

  var chart = new CanvasJS.Chart("chartContainer", {
    theme: "dark2", // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Total Votes"
    },
    data: [{
      type: "pie",
      startAngle: 25,
      toolTipContent: "<b>{label}</b>: {y}",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}",
      dataPoints: dataPoints
    }]
  });

  function addData(data) {
    for (var i = 0; i < data.Items.length; i++) {
      dataPoints.push({
        y: data.Items[i].votes,
        label: data.Items[i].candidate
      });
    }
    chart.render();
  
  }
  
  $.getJSON("data.json", addData);
  }