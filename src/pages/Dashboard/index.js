import React, { Component } from 'react'

import Content from '../../components/Content'
import CardInfo from '../../components/Card/CardInfo'
import CardTable from '../../components/Card/CardTable'
import CardReport from '../../components/Card/CardReport'

import { FaEye, FaUsers, FaDollarSign, FaShoppingCart } from 'react-icons/fa'
import api from '../../services/api';

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
              <>
                <CardInfo color="#29cb97" icon={<FaEye size="60px" color="#fff"/>} num={this.state.info.visitors} title="Visitors"/>
                <CardInfo color="#fec400" right icon={<FaUsers size="60px" color="#fff"/>} num={this.state.info.users} title="Users"/>
                <CardInfo color="#4c84ff" right icon={<FaDollarSign size="60px" color="#fff"/>} num={this.state.info.sales} title="Sales"/>
                <CardInfo color="#ca66ff" right icon={<FaShoppingCart size="60px" color="#fff"/>} num={this.state.info.orders} title="Orders"/>
              </>
            }
            section={
              <>
                  <CardTable title="Site Traffic Overview"/>
                  <CardReport />
              </>
            }
        />
      )
    }
}
