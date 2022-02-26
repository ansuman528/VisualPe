const getPulseData=(type,callback)=>{
  fetch(`https://raw.githubusercontent.com/PhonePe/pulse/master/data/aggregated/transaction/country/india/${type}`,
   {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Authorization"
   }
      
      ).then((resp)=>resp.json())
      .then((resp)=>{
              {
                 callback(resp)
              }
          })
      .catch(()=>{ 
          console.log("connection error")
      })
}
const getData =(type,callback)=>{
  fetch(`https://bridge-test-api.herokuapp.com/get-data/${type}`,
  {
      method:'get',
      mode:'cors',
      credentials: 'same-origin',
      headers: {"Content-type": "application/json; charset=UTF-8"},
  }
  ).then((resp)=>resp.json())
  .then((resp)=>{
          {
             callback(resp)
          }
      })
  .catch(()=>{ 
      console.log("connection error")
  })
}
const insert=(id,data)=>{
  if ($(`#${id}`).length) {
    $(`#${id}`).get(0).innerHTML=data
  }
}
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
      label: '₹',
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

const logout=()=>{
  localStorage.setItem("jwt",null)
  window.location.href="/login.html"
}
var jwt=localStorage.getItem("jwt")
insert("phn-no",JSON.parse(window.atob(jwt.split('.')[1])).phone)
insert("phn-noa",JSON.parse(window.atob(jwt.split('.')[1])).phone)
fetch(`https://bridge-test-api.herokuapp.com/checklogin`,
  {
      method:'get',
      mode:'cors',
      credentials: 'same-origin',
      headers: {"Content-type": "application/json; charset=UTF-8","x-access-token":jwt},
  }
  ).then((resp)=>resp.json())
  .then((resp)=>{
          {
             console.log(resp)
             if(resp.wait==true)
             window.location.href="/wait.html"
             if(resp.auth==false)
             window.location.href="/login.html"
          }
      })
  .catch(()=>{ 
      $(sub).get(0).innerHTML=`<h3>Oops something went wrong ...</h3><h4>Try again </h4><h5>Reloading page ...</h5>`
      setTimeout(()=>window.location.reload(),5000)
  })