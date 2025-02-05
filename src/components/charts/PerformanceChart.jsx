import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

function PerformanceChart({ title, data, labels, gradient = false }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: title
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Performance',
        data: data,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: gradient 
          ? 'rgba(53, 162, 235, 0.5)'
          : 'rgba(53, 162, 235, 0.2)',
        fill: gradient,
        tension: 0.4
      }
    ]
  }

  return <Line options={options} data={chartData} />
}

export default PerformanceChart 