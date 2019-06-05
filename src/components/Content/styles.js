import styled from 'styled-components'

const Container = styled.div`
  padding: 3% 2%;
`
const Layout = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: wrap;
    justify-content: center;
    align-items: flex-start;
`
const Header = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`
const TitleHeader = styled.h1`
    width: 289px;
    height: 37px;
    margin-bottom: 25px;
    font-size: 34px;
    font-weight: 500;
    color: #6c6c6c;
`
const ContentHeader = styled.div`
    display: flex;
    flex-direction: wrap;
    justify-content: flex-end;
    align-items: center;
`
const Section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export { Container, Layout, Header, TitleHeader, ContentHeader, Section }
