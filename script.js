var ctx = document.getElementById("myChart");

var stars = [20, 17, 17, 15, 10 ];
var frameworks = ["Apple", "Google", "LinkedIn", "Facebook", "Twitter"];

var myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: frameworks,
        datasets: [
            {
                label: "% of women held jobs",
                data: stars,
                backgroundColor: [
                    "rgb(53, 62, 131, 0.2)",
                    "rgba(187, 107, 217, 0.2)",
                    "rgb(173, 186, 255, 0.2)",
                    "rgb(255, 182, 171, 0.2)"
                    
                    
                ],
                borderColor: [
                    "rgb(53, 62, 131, 1)",
                    "rgba(187, 107, 217, 1)",
                    "rgb(173, 186, 255, 1)",
                    "rgb(255, 182, 171, 1)"
                    
                ],
                borderWidth: 1
            }
        ]
       
    },

    options: {
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 80,
                fontColor: 'black'
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

});

var ctx = document.getElementById("myChart2");

var stars = [20, 17, 17, 15, 10];
var frameworks = ["Apple", "Google", "LinkedIn", "Facebook", "Twitter"];

var myChart2 = new Chart(ctx, {
    type: "pie",
    data: {
        labels: frameworks,
        datasets: [
            {
                label: "% of women held jobs",
                data: stars,
                backgroundColor: [
                    "rgba(187, 107, 217, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)"
                ],
                borderColor: [
                    "rgba(187, 107, 217, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)"
                ],
                borderWidth: 1
            }
        ]

    }

});

function newStyle() {
  let newColor = '';
  let newFont = '';
  let x = Math.floor(Math.random()*3);
  switch (x){
    case 0:
      newColor = 'red';
      newFont = 'Times New Roman';
      break;
    case 1:
      newColor = 'green';
      newFont = 'Verdana';
      break;
    case 2:
      newColor = 'blue';
      newFont = 'Helvetica';
      break;
  }
  var elem = document.getElementById('logo')
  elem.style.color = newColor;
  elem.style.fontFamily = newFont;
}




