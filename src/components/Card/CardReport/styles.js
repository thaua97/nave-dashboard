import styled from 'styled-components'

export const Card = styled.div`
    width: 312px;
    height: 438px;
    margin: 0px 0px 0px 20px;
    border-radius: 15px;
    box-shadow: 0 0 6px 1px rgba(188, 188, 188, 0.5);
    background-color: #fff;

    @media screen and (max-width: 411px) {
      width: 100%;
      margin: 20px 0px 30px 0px;
    }
    
    @media screen and (min-width: 411px) and (max-width: 768px){
        width: 100%;
        height: 270px;
        margin: 0;
    }
`
export const CardTitle = styled.h1`
    width: 270px;
    height: 23.1px;
    margin-bottom: 5px;
    padding: 20px 23px 10px 19px;
    font-size: 16px;
    font-weight: 700;
    color: #6c6c6c;
    
    ::after {
      content: ' ';
      width: 100%;
      height: 2px;
      left: 0;
      right: 0;
      background: #333;
    }

    @media screen and (min-width: 411px) and (max-width: 768px){
       margin-bottom: 20px;
       padding: 20px; 

       ::after {
          content: ' ';
          width: 100%;
          height: 2px;
          left: 0;
          right: 0;
          bottom: 0;
          background: #333;
        }
    }
`
export const CardContent = styled.div`
   width: 100%;
   height: 345px;
   margin-top: 5%;
   padding: 10px 0px 5px 0px;
   overflow: auto;
   border-top: 1px solid rgba(0,0,0, 0.1);

    /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #ccc; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #aaa; 
  }

   @media screen and (min-width: 411px) and (max-width: 768px){
        width: 100%;
        height: 180px;
        margin: 0;
        overflow: auto;
    }

`
export const CardAction = styled.div`
    cursor: pointer;
    width: 100%;
    height: 40.1px;
    padding: 10px;
    border-radius: 0 0 15px 15px;
    box-shadow: 0 -2px 6px 0 rgba(188, 188, 188, 0.5);
    background-color: #ffffff;
`
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`
export const ListItemAvatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Avatar = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
`
export const ListItemContent = styled.div`
  padding-left: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  
`
export const ListItemName = styled.h2`
  width: 135px;
  height: 19px;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 500;
  color: #6c6c6c;
`
export const ListItemText = styled.p`
  width: 197px;
  margin-bottom: 5px;
  height: 58.1px;
  font-size: 12px;
  color: #6c6c6c;
`
export const ListItemTime = styled.span`
  width: 194px;
  height: 19px;
  margin-bottom: 5px;
  font-size: 12px;
  color: rgba(108, 108, 108, 0.5);
`
export const ContentNull = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #c3c3c3;
  font-size: 18px;
`
export const Send = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  
`
export const Input = styled.input`
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

  :focus {
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
export const Button = styled.button`
  border: none;
  background: transparent;
  width: 62px;
  height: 31px;
  font-size: 12px;
  color: #4c84ff;
  cursor: pointer;
  transition: 0.2s all;

  :hover {
    background: #4c84ff33;
  }
`