import styled from 'styled-components'

const Card = styled.div`
    width: 644px;
    height: 438px;
    padding: 17px 19px;
    margin: 0 0;
    border-radius: 15px;
    box-shadow: 0 0 6px 1px rgba(188, 188, 188, 0.5);
    background-color: #ffffff;
`
const CardTitle = styled.h1`
    width: 270px;
    height: 23px;
    font-size: 16px;
    font-weight: 700;
    color: #6c6c6c;
`

const CardContent = styled.div`
    width: 645px;
    height: 373px;
`
export { Card, CardTitle, CardContent }