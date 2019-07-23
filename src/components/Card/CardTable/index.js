import React, { useEffect, useState } from 'react';

import api from '../../../services/api';

import { Card, CardTitle, CardContent, Chart, ChartMb, ChartTb, ContentNull } from './styles';
import { Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
//import Snackbar from '../../Snackbar'

export default function CardTable (props) {
    const [ sales, setSales ] = useState(null);

    useEffect(() => {
        async function getSales () {
            try {
                const res = await api.get('/sales');
                if(res.data) {
                    setSales(res.data);
                }
            } catch (error) {
                
            }
        }
        getSales();
    }, [])

    return (
        <Card>
            <CardTitle>{props.title}</CardTitle>
            { sales !== null && sales.length !== 0 ?
            <CardContent>
                
                <Chart width={590} height={373} data={sales}>
                    <XAxis dataKey="month" stroke="#4c84ff" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" />
                    <Bar type="monotone" dataKey="sales" fill="#4c84ff" barSize={50} />
                </Chart>    
                
                <ChartTb width={340} height={250} data={sales}>
                    <XAxis dataKey="month" stroke="#4c84ff" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" />
                    <Bar type="monotone" dataKey="sales" fill="#4c84ff" barSize={50} />
                </ChartTb>
                <ChartMb width={288} height={250} data={sales}>
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
