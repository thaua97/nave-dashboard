import styled from 'styled-components'

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
    
`
const CardTitle = styled.h1`
    width: 270px;
    height: 23px;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 700;
    color: #6c6c6c;
`

export { Card, CardTitle }