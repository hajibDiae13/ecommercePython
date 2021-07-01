import React from 'react'
import './profitChart.css'
import {Line} from 'react-chartjs-2'
function ProfitChart(props) {

  return (
    <div class="ProfitChart">
      <Line
        data={{
          labels: props.graph.days,
          datasets : [
            {
              label : "Profit (MAD)",
              data: props.graph.data,
              backgroundColor:'rgba(248, 214, 5, 0.9)',
              fill: false,
              borderColor: "#F8D605",
              tension: 0.25, // disables bezier curves,
            }
          ]
        }}
        height={400}
        width={600}
        options= {{maintainAspectRatio: false,}}
      />
    </div>
  )
}

export default ProfitChart
