import React, { Component } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import api from '../../../services/api'

import { Card, CardTitle } from './styles'

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
                <BarChart width={590} height={373} data={this.state.sales}>
                    <XAxis dataKey="month" stroke="#4c84ff" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar type="monotone" dataKey="sales" fill="#4c84ff" barSize={50} />
                </BarChart>    
                
            </Card>
        )
    }
}

