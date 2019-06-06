import React, { Component } from 'react'
import api from '../../services/api'

import Content from '../../components/Content'
import CardInfo from '../../components/Card/CardInfo'
import CardTable from '../../components/Card/CardTable'
import CardReport from '../../components/Card/CardReport'

import { FaEye, FaUsers, FaDollarSign, FaShoppingCart } from 'react-icons/fa'
import Grid from '@material-ui/core/Grid';

export default class Dashboard extends Component {
  state = {
    info: { }
  }

  async componentDidMount() {
    const response =  await api.get('/information')
    this.setState({
      info: response.data
    })
  }

  render () {

      return (
        <Content 
            header={
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={3}>
                  <CardInfo color="#29cb97" icon={<FaEye size="60px" color="#fff"/>} num={this.state.info.visitors} title="Visitors"/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <CardInfo color="#fec400" right icon={<FaUsers size="60px" color="#fff"/>} num={this.state.info.users} title="Users"/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <CardInfo color="#4c84ff" right icon={<FaDollarSign size="60px" color="#fff"/>} num={this.state.info.sales} title="Sales"/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <CardInfo color="#ca66ff" right icon={<FaShoppingCart size="60px" color="#fff"/>} num={this.state.info.orders} title="Orders"/>
                </Grid>
              </Grid >
            }
            section={
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={8}>
                  <CardTable title="Site Traffic Overview"/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <CardReport />
                </Grid>
              </Grid>
            }
        />
      )
    }
}
