import React from 'react'

import { Card, CardTitle, CardDivider, CardContent } from './styles'

const CardReport = (props) =>(
    <Card>
        <CardTitle>{props.title}</CardTitle>
        <CardContent>
            <CardDivider />
            {props.content}
        </CardContent>
    </Card>    
)

export default CardReport
