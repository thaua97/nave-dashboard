import styled from 'styled-components'
import { BarChart } from 'recharts'

const Card = styled.div`
    width: 645px;
    height: 438px;
    padding: 17px 19px;
    margin: 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 15px;
    box-shadow: 0 0 6px 1px rgba(188, 188, 188, 0.5);
    background-color: #ffffff;
    
    @media screen and (max-width: 411px){
        width: 100%;
        height: 100%;
        margin: 0;
    }

    @media screen and (min-width: 411px) and (max-width: 768px){
        width: 100%;
        height: 270px;
        margin: 0;
    }
`
const CardTitle = styled.h1`
    width: 270px;
    height: 23px;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 700;
    color: #6c6c6c;
`
const CardContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    
`

const Chart = styled(BarChart)`
  margin-left: -5%;
  
  @media screen and (min-width: 411px) and (max-width: 768px) {
      visibility: hidden;
      display: none;
  }
`
const ChartMb = styled(BarChart)`
  display: none;
  visibility: hidden;

  @media screen and (max-width: 411px) {
    margin-left: -5%;
    visibility: visible;
    display: block;
  }
`

const ChartTb = styled(BarChart)`
  display: none;
  visibility: hidden;

  @media screen and (min-width: 768px) and (max-width: 768px) {
    margin-left: -10%;
    visibility: visible;
    display: block;
  }
`

export { Card, CardTitle, CardContent, Chart, ChartMb, ChartTb }