let ctx = document.querySelector("#myChart")

let dataChart = []

for(monthData of data){
    let helper = 0;
    for(dayData of monthData){
        helper += dayData;
    }
    helper /= 5;
    helper /=10;
    helper = (5*helper/3.1)
    dataChart.push(helper)
}

// let myChar = new Chart(ctx, {
//     type: 'line',
//     data: {
//         xLabels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
//         yLabels: ['Request Added', 'Request Viewed', 'Request Accepted', 'Request Solved', 'Solving Confirmed'],
//         datasets: [{
//             label: 'Animated state',
//             data: dataChart,
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true,
//                     max:3
//                 }
//             }]
//         }
//     }
// });

let myChar = new Chart(ctx, {
    type: 'line',
    data: {
      xLabels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      yLabels: ['None','Tough', 'Difficult', 'Average', 'Great', 'Amazing'],
      datasets: [{
        label: "My First dataset",
        data: dataChart,
        fill: true,
        showLine: true
        //borderColor: chartColors.red,
        //backgroundColor: chartColors.red
      }, {
        label: "My First dataset",
        data: [null, 'Request Accepted', 'Request Accepted'],
        fill: false,
        showLine: false
        //borderColor: chartColors.red,
        //backgroundColor: chartColors.red
      }]
    },
    options: {
      responsive: true,
      title:{
        display: true,
        text: 'Chart.js - Non Numeric X and Y Axis'
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Month'
          }
        }],
        yAxes: [{
          type: 'category',
          position: 'left',
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Request State'
          },
          ticks: {
            reverse: true
          },
        }]
      }
    } 
});




// const repetidos = ar => ar.filter (

//     (value,pos,self) => self.slice(pos+1).indexOf(value) >= 0 && pos === self.indexOf(value)

// );