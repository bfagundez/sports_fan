import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

class UserParticipationChart extends Component {
  constructor(props){
    super(props)
  }

  generateChartData(){
    let parts = this.props.participations
    let chartData = parts.map(p => ({
      'name': p.sport.name,
      'minutes': Math.ceil(p.total_duration/60)
    }))
    this.setState({ chartData: chartData })
  }

  componentDidMount(){
    this.generateChartData()
  }

  renderChart(){
    console.log('rendering the chart!')
    return(<BarChart width={900} height={400} data={this.state.chartData}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <CartesianGrid strokeDasharray="3 3"/>
           <XAxis dataKey="name"/>
           <YAxis/>
           <Tooltip/>
           <Legend />
           <Bar dataKey="minutes" fill="#8884d8" label="Time spent doing a sport in minutes" />
          </BarChart>)
  }
 
  render(){
    return (
      <div>
        {this.state && this.renderChart()}
      </div>
    )
  }
}

UserParticipationChart.propTypes = {
  participations: PropTypes.object.isRequired
}

export default UserParticipationChart
