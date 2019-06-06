import React, { Component } from 'react'
import { Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import api from '../../../services/api'

import { Card, CardTitle, Chart, ChartMb } from './styles'

export default class CardTable extends Component {
    state = {
        sales: { }
    }

    async componentDidMount() {
        const response =  await api.get('/sales')
        this.setState({
          sales: response.data
        })
    }

    render (props) {
        return (
            <Card>
                <CardTitle>{this.props.title}</CardTitle>
                <Chart width={590} height={373} data={this.state.sales}>
                    <XAxis dataKey="month" stroke="#4c84ff" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar type="monotone" dataKey="sales" fill="#4c84ff" barSize={50} />
                </Chart>    
                
                <ChartMb width={288} height={250} data={this.state.sales}>
                    <XAxis dataKey="month" stroke="#4c84ff" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar type="monotone" dataKey="sales" fill="#4c84ff" barSize={50} />
                </ChartMb>
            </Card>
        )
    }
}

