import styled from 'styled-components'

const Card = styled.div`
    width: 229px;
    height: 100px;
    margin: ${props => props.right === true ? '0 0 0 20px' : '0 0 0 0 '};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;   
    border-radius: 15px;
    box-shadow: 0 0 6px 1px rgba(188, 188, 188, 0.5);
    background-color: ${( props => props.color || '#fff')};

    @media screen and (max-width: 411px){
        width: 335px;
        height: 100px;
        margin: 10px 0px;
    }

`
const Icon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    text-align: right;
    
`
const NumInfo = styled.h2`
    width: 101px;
    height: 33px;
    font-size: 28px;
    font-weight: bold;
    color: #fff;

    @media screen and (max-width: 411px){
        width: 100%;
        height: 33px;
        margin: 0;
    }

`
const TitleInfo = styled.h5`
    width: 60px;
    height: 23px;
    font-size: 16px;
    font-weight: 300;
    color: #fff;
`

export { Card, Icon, Info, NumInfo, TitleInfo }