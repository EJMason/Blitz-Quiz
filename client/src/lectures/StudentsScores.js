import React from 'react';
import {Bar} from 'react-chartjs-2';;


const StudentsScores = (props) => {
    let studentData = props.studentData;
    let names = [];
    let perCentage = [];
    for(var i = 0; i < studentData.length; i++){
        names.push(studentData[i].name);
        perCentage.push(studentData[i].perCentage);
    }
  let chartData =  {
        labels: names,
        datasets: [{
            label: '% of correct answers by student',
            data: perCentage,
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
            borderWidth: 1
        }]
    }

  let chartOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
  return (
   <Bar
    data={chartData}
    width={100}
    height={50}
    options={chartOptions}
/>
  );
};

export default StudentsScores;