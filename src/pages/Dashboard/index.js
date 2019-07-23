import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import Content from '../../components/Content'
import CardInfo from '../../components/Card/CardInfo'
import CardTable from '../../components/Card/CardTable'
import CardReport from '../../components/Card/CardReport'

import { FaEye, FaUsers, FaDollarSign, FaShoppingCart } from 'react-icons/fa'
import Grid from '@material-ui/core/Grid';
import Snackbar from '../../components/Snackbar'

function Dashboard () {
  const [ infos, setInfos] = useState([])
  const [ open, setOpen ] = useState(false)
  const [ status, setStatus ] = useState('')
  const [ msg, setMsg ] = useState('')

    useEffect(() => {
      async function getInfos () {
        try {
          const res = await api.get('/information')
          setInfos(res.data)
        } catch (err) {
          setStatus('error')
          setMsg('Error to communicating with server!')
          setOpen(true)
        }
      } 
      getInfos()
    }, [])
      return (
        <Content 
            header={
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={3}>
                  <CardInfo color="#29cb97" icon={<FaEye size="60px" color="#fff"/>} num={infos.visitors || 0} title="Visitors"/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <CardInfo color="#fec400" right icon={<FaUsers size="60px" color="#fff"/>} num={infos.users || 0} title="Users"/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <CardInfo color="#4c84ff" right icon={<FaDollarSign size="60px" color="#fff"/>} num={infos.sales || 0} title="Sales"/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <CardInfo color="#ca66ff" right icon={<FaShoppingCart size="60px" color="#fff"/>} num={infos.orders || 0} title="Orders"/>
                </Grid>
                <Snackbar 
                  open={open}
                  close={ () => setOpen(false)}
                  msg={msg} 
                  status={status}
                />
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

export default Dashboard
