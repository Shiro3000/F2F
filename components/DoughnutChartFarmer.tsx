"use client"

import {Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChartFarmer = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                data: [100000,50000],
                backgroundColor: ['#0b8b0b', '#17b517']
            }
        ],
        labels: ['Available Credit', 'Used Credit']
    }

    return <Doughnut 
        data={data} 
        options={{
            cutout: '60%', //thickness of the circle
            plugins: {
                legend: {
                    display: false // take the legend out
                }
            }
        }}
    />
}

export default DoughnutChartFarmer