import styled from 'styled-components'

const Card = styled.div`
    width: 312px;
    height: 438px;
    margin: 0px 0px 0px 20px;
    padding: 20px 23px 0px 19px;
    border-radius: 15px;
    box-shadow: 0 0 6px 1px rgba(188, 188, 188, 0.5);
    background-color: #fff;
`
const CardTitle = styled.h1`
    width: 270px;
    height: 23.1px;
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 700;
    color: #6c6c6c;
`
const CardDivider = styled.span`
  width: 312px;
  height: 2px;
  border: solid 1px #ddd;
`
const CardContent = styled.div`
   width: 312px;
   height: 438px;
`
export { Card, CardTitle, CardDivider, CardContent }