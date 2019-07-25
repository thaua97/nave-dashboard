import React from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import { 
    FaEye, 
    FaUsers, 
    FaDollarSign, 
    FaShoppingCart 
} from 'react-icons/fa'

import CardInfo from '../Card/CardInfo'

function Header({ infos }) {
    return (
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
        </Grid >
    );
}

const mapStateToProps = state => ({
    infos: state.infos
});

export default connect(mapStateToProps)(Header)
