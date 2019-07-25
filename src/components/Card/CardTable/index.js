import React from 'react'
import { connect } from 'react-redux'

import { Card, CardTitle, CardContent, Chart, ChartMb, ChartTb, ContentNull } from './styles';
import { Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
//import Snackbar from '../../Snackbar'

function CardTable ({ traffic }, props) {
    return (
        <Card>
            <CardTitle>{props.title}</CardTitle>
            { traffic !== null ?
            <CardContent>
                
                <Chart width={590} height={373} data={traffic}>
                    <XAxis dataKey="month" stroke="#4c84ff" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" />
                    <Bar type="monotone" dataKey="sales" fill="#4c84ff" barSize={50} />
                </Chart>    
                
                <ChartTb width={340} height={250} data={traffic}>
                    <XAxis dataKey="month" stroke="#4c84ff" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" />
                    <Bar type="monotone" dataKey="sales" fill="#4c84ff" barSize={50} />
                </ChartTb>
                <ChartMb width={288} height={250} data={traffic}>
                    <XAxis dataKey="month" stroke="#4c84ff" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" />
                    <Bar type="monotone" dataKey="sales" fill="#4c84ff" barSize={50} />
                </ChartMb>
                
            </CardContent> 
            :
                <ContentNull>No Traffic</ContentNull>
            }     
        </Card>
    );
}

const mapStateToProps = state => ({
  traffic: state.sales
});

export default connect(mapStateToProps)(CardTable)
