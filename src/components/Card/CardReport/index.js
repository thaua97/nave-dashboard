import React, { Component } from 'react'
import api from '../../../services/api'

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
    Send,
    Input,
    Button  
} from './styles'


export default class CardReport extends Component {
    state = { 
        reports: [],
        msg: ''
    }

    async componentDidMount() {
        const response = await api.get('/reports')
        this.setState({
          reports: response.data
        })
    }

    handleMsgChange = (e) => {
        this.setState({ msg: e.target.value })
    }

    handleSubmit = async e => {
        e.preventDefault()
        
        const response = await api.post('/reports', {
            user: 'NAVER',
            image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
            message: this.state.msg,
            time: '2 min ago'
        })

        if(response.data !== false) {
            const re = await api.get('/reports')
            this.setState({ msg: '' })
            this.setState({
                reports: re.data
            })

        }
    }


    render () {
        return (
            <Card>
                <CardTitle>Reports</CardTitle>
                <CardContent>
                    <List>
                    { this.state.reports && 
                    this.state.reports.map( reports => (
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
                    
                </CardContent>
                <CardAction>
                    <Send onSubmit={this.handleSubmit}>
                        <Input
                            placeholder="Type your coment here..."
                            value={this.state.msg}
                            onChange={this.handleMsgChange}
                            required
                            
                        />
                        <Button type="submit">SEND</Button>
                    </Send>
                </CardAction>
            </Card>
        )    
    }
}