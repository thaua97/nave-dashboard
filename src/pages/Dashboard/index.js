import React, {useState} from 'react'

import Content from '../../components/Content'
import CardInfo from '../../components/Card/CardInfo'
import CardTable from '../../components/Card/CardTable'
import CardReport from '../../components/Card/CardReport'

import { FaEye, FaUsers, FaDollarSign, FaShoppingCart } from 'react-icons/fa'

export default function Dashboard(props) {
  return (
    <Content 
        header={
          <>
            <CardInfo color="#29cb97" icon={<FaEye size="60px" color="#fff"/>} num="122500" title="Visitors"/>
            <CardInfo color="#fec400" right icon={<FaUsers size="60px" color="#fff"/>} num="1230" title="Users"/>
            <CardInfo color="#4c84ff" right icon={<FaDollarSign size="60px" color="#fff"/>} num="670" title="Sales"/>
            <CardInfo color="#ca66ff" right icon={<FaShoppingCart size="60px" color="#fff"/>} num="400" title="Orders"/>
          </>
        }
        section={
          <>
              <CardTable title="Site Traffic Overview"/>
              <CardReport title="Report"/>
          </>
        }
    />
  )
}
