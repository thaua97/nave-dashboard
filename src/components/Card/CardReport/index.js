import React, { useEffect, useState } from 'react'
import api from '../../../services/api'

import Snackbar from '../../Snackbar'

import { 
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
    ContentNull,
    Send,
    Input,
    Button  
} from './styles'

export default function CardReport () {

    const [ reports, setReports ] = useState(null)
    const [ text, setText ] = useState('')
    const [ open, setOpen ] = useState(false)
    const [ status, setStatus ] = useState('')
    const [ msg, setMsg ] = useState('')
    
    useEffect(() => {
        async function getReports() {
            try {
                const res = await api.get('/reports')
                setReports(res.data)
            } catch (error) {
                
            }
        }
        getReports()
    }, [])

    function handleMsgChange(e) {
        setText(e.target.value)
    }

    async function handleSubmit(e){
        e.preventDefault()
        if(!text) {
            setStatus('warning')
            setMsg('Your comment cannot be empty!')
            setOpen(true)
        } else {
            try {
                const res = await api.post('/reports', {
                    user: 'NAVER',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
                    message: text,
                    time: '2 min ago'
                })
                
                if(res.data !== false) {
                    const pay = await api.get('/reports')
                    setText('')
                    setStatus('success')
                    setMsg('Report success!')
                    setOpen(true)
                    setReports(pay.data)
                }

            } catch (error) {
                setStatus('error')
                setMsg('Error to communicating with server!')
                setOpen(true)
            }
        }
    }
        return (
            <Card>
                <CardTitle>Reports</CardTitle>
                <CardContent>
                    {
                        reports !== null && reports.length !== 0
                        ?
                        <List>
                            { reports && 
                            reports.map( reports => (
                                <ListItem key={reports.id}>
                                    <ListItemAvatar>
                                        <Avatar src={reports.image} alt="" />
                                    </ListItemAvatar>
                                    <ListItemContent>
                                        <ListItemName>{reports.user}</ListItemName>
                                        <ListItemText>{reports.message}</ListItemText>
                                        <ListItemTime>{reports.time}</ListItemTime>
                                    </ListItemContent>
                                </ListItem>
                            ))
                            }
                        </List>
                            
                        :
                            <ContentNull>No Reports</ContentNull>
                    
                    }
                </CardContent>
                <CardAction>
                    <Send onSubmit={handleSubmit}>
                        <Input
                            placeholder="Type your comment here..."
                            value={text}
                            onChange={handleMsgChange}
                        />
                        <Button type="submit">SEND</Button>
                    </Send>
                </CardAction>
                <Snackbar 
                    open={open}
                    close={ () => setOpen(false)}
                    msg={msg} 
                    status={status}
                />
            </Card>
        )    
    }
    