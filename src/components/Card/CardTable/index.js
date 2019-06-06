import React, { Component } from 'react'
import { Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import api from '../../../services/api'

import { Card, CardTitle, CardContent, Chart, ChartMb, ChartTb } from './styles'

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
                <CardContent>
                    
                    <Chart width={590} height={373} data={this.state.sales}>
                        <XAxis dataKey="month" stroke="#4c84ff" />
                        <YAxis />
                        <Tooltip />
                        <CartesianGrid stroke="#ccc" />
                        <Bar type="monotone" dataKey="sales" fill="#4c84ff" barSize={50} />
                    </Chart>    
                    
                    <ChartTb width={340} height={250} data={this.state.sales}>
                        <XAxis dataKey="month" stroke="#4c84ff" />
                        <YAxis />
                        <Tooltip />
                        <CartesianGrid stroke="#ccc" />
                        <Bar type="monotone" dataKey="sales" fill="#4c84ff" barSize={50} />
                    </ChartTb>

                    <ChartMb width={288} height={250} data={this.state.sales}>
                        <XAxis dataKey="month" stroke="#4c84ff" />
                        <YAxis />
                        <Tooltip />
                        <CartesianGrid stroke="#ccc" />
                        <Bar type="monotone" dataKey="sales" fill="#4c84ff" barSize={50} />
                    </ChartMb>
                </CardContent>      
            </Card>
        )
    }
}

