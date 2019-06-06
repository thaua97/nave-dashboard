import styled from 'styled-components'

const Card = styled.div`
    width: 312px;
    height: 438px;
    margin: 0px 0px 0px 20px;
    padding: 20px 23px 5px 19px;
    border-radius: 15px;
    box-shadow: 0 0 6px 1px rgba(188, 188, 188, 0.5);
    background-color: #fff;

    @media screen and (max-width: 411px) {
      width: 100%;
      margin: 20px 0px 30px 0px;
    }
`
const CardTitle = styled.h1`
    width: 270px;
    height: 23.1px;
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 700;
    color: #6c6c6c;
`
const CardContent = styled.div`
   width: 280px;
   height: 345px;
   overflow: auto;
`
const CardAction = styled.div`
    cursor: pointer;
    width: 100%;
    height: 40.1px;
    padding: 10px;
    border-radius: 0 0 15px 15px;
    box-shadow: 0 -2px 6px 0 rgba(188, 188, 188, 0.5);
    background-color: #ffffff;
`
const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`
const ListItemAvatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Avatar = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
`
const ListItemContent = styled.div`
  padding-left: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  
`
const ListItemName = styled.h2`
  width: 135px;
  height: 19px;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 500;
  color: #6c6c6c;
`
const ListItemText = styled.p`
  width: 197px;
  margin-bottom: 5px;
  height: 58.1px;
  font-size: 12px;
  color: #6c6c6c;
`
const ListItemTime = styled.span`
  width: 194px;
  height: 19px;
  margin-bottom: 5px;
  font-size: 12px;
  color: rgba(108, 108, 108, 0.5);
`
const Send = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  
`
const Input = styled.input`
  border: none;
  height: 20px;
  width: 201px;
  padding: 5px;
  transition: all .1s;

  ::placeholder {
    width: 201px;
    height: 14px;
    padding: 5px;
    font-size: 12px;
    color: rgba(108, 108, 108, 0.5);

  }

  :hover {
    color: #4c84ff;
    border-bottom: solid 1px #4c84ff;

    ::placeholder {
      color: #4c84ff;
    }
  }

  @media screen and(max-width: 411px) {
    width: 100%;
    height: 30px;
  }

`
const Button = styled.button`
  border: none;
  background: transparent;
  width: 31px;
  height: 14px;
  font-size: 12px;
  color: #4c84ff;
`

export { 
    Card, 
    CardTitle, 
    CardContent,
    CardAction,
    List, 
    ListItem, 
    ListItemAvatar, 
    Avatar, 
    ListItemContent, 
    ListItemName, 
    ListItemText, 
    ListItemTime,
    Send,
    Input,
    Button 
}