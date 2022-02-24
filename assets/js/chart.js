var doughnutPieData = {
  datasets: [{
    data: [],
    backgroundColor: [
      'rgba(255, 99, 132, 0.5)',
      'rgba(54, 162, 235, 0.5)',
      'rgba(255, 206, 86, 0.5)',
      'rgba(75, 192, 192, 0.5)',
      'rgba(153, 102, 255, 0.5)',
      'rgba(255, 159, 64, 0.5)'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    'employee',
    'employer'
  ]
};
var doughnutPieOptions = {
  responsive: true,
  animation: {
    animateScale: true,
    animateRotate: true
  }
};
var Bardata = {
  labels: [],
  datasets: [{
      label: '# of Votes',
    data: [],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1,
    fill: false
  }]
};
var Baroptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  legend: {
    display: false
  },
  elements: {
    point: {
      radius: 0
    }
  }

};



const Pi=(id,data,labels)=>{
  doughnutPieData.datasets[0].data=data
  doughnutPieData.labels=labels
    if ($(`#${id}`).length) {
      var pieChartCanvas = $(`#${id}`).get(0).getContext("2d");
      var pieChart = new Chart(pieChartCanvas, {
        type: 'pie',
        data: doughnutPieData,
        options: doughnutPieOptions
      });
    }

}
const Bar=(id,data,labels)=>{
  Bardata.datasets[0].data=data
  Bardata.labels=labels
  if ($(`#${id}`).length) {
      var barChartCanvas = $(`#${id}`).get(0).getContext("2d");
      var barChart = new Chart(barChartCanvas, {
        type: 'bar',
        data: Bardata,
        options: Baroptions
      });
    }
}