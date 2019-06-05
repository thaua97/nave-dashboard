import React from 'react'

import { Card, CardTitle, CardContent } from './styles'

const CardTable = (props) => (
    <Card>
        <CardTitle>{props.title}</CardTitle>
        <CardContent>
            {props.content}
        </CardContent>
    </Card>
)

export default CardTable
