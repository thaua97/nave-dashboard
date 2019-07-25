import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as SalesActions from '../../store/modules/sales/actions'
import * as InfosActions from '../../store/modules/infos/actions'


import Header from '../../components/Header'
import Content from '../../components/Content'
import CardTable from '../../components/Card/CardTable'
import CardReport from '../../components/Card/CardReport'

import Grid from '@material-ui/core/Grid'
import Snackbar from '../../components/Snackbar'

function Dashboard (props) {
  const [ open, setOpen ] = useState(false)
  const [ status, setStatus ] = useState('')
  const [ msg, setMsg ] = useState('')

    useEffect(() => {
      function getInfos () {
        try {
          const { getTraffic, getInfos } = props
          getTraffic()
          getInfos()
        
        } catch (err) {
          setStatus('error')
          setMsg('Error to communicating with server!')
          setOpen(true)
        }
      } 
      getInfos()
    }, [props])

      return (
        <Content 
            header={
              <>
                <Header />
                <Snackbar 
                  open={open}
                  close={ () => setOpen(false)}
                  msg={msg} 
                  status={status}
                />
              </>
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

const mapDispatchToProps = {
    ...SalesActions,
    ...InfosActions
}

export default connect(null, mapDispatchToProps)(Dashboard) 
