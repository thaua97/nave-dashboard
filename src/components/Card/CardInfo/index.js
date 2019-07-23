import React from 'react'
import { Card, Icon, Info, NumInfo, TitleInfo } from './styles'

const CardInfo = (props) => (
    <Card right={props.right} spacing={4} color={props.color}>
        <Icon>{ props.icon }</Icon>
        <Info>
            <NumInfo>{props.num}</NumInfo>
            <TitleInfo>{props.title}</TitleInfo>
        </Info>
    </Card>
)

export default CardInfo
