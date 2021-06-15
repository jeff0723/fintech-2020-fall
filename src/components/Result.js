import React from 'react';
import Paper from '@material-ui/core/Paper';
import { useState, useEffect }from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import { Icon } from 'react-icons-kit'
import Typography from '@material-ui/core/Typography';
import {ic_check_circle} from 'react-icons-kit/md/ic_check_circle'
import {ic_do_not_disturb} from 'react-icons-kit/md/ic_do_not_disturb'
import Grid from '@material-ui/core/Grid';

import { withBaseIcon } from 'react-icons-kit'
const useStyles = makeStyles((theme) => ({
   root:{
       marginBottom:theme.spacing(1)
   },
   title:{
    //    marginTop:theme.spacing(2),
       paddingTop:theme.spacing(2),
       marginLeft:theme.spacing(2),
   },
   content:{
       marginTop:theme.spacing(2),
       marginBottom:theme.spacing(2),
       paddingBottom:theme.spacing(1),

   },
}));
function Result(props){
    const classes = useStyles()
    const prob = parseFloat(props.prob)
    const fee = parseFloat(props.fee)
    const expectedLoss = prob*9193
    return (
        <>
        <Typography variant='h3' className={classes.root}>計算結果: </Typography>
        <Container maxWidth="sm">
        <Paper maxWidth="sm" elevation={5}>
        <Typography variant='h4'align='left' className={classes.title} ><strong>出險機率: </strong></Typography>
        {expectedLoss > fee?
        <div style={{color:'#ff0000'}}>
        <Typography variant='h1'>{(prob*100).toFixed(2)}% </Typography>
        <Icon size={300} icon={ic_do_not_disturb}/>
        </div>:
        <div style={{color:'#00ff14'}}>
        <Typography variant='h1'>{(prob*100).toFixed(2)}% </Typography>
        <Icon size={300} icon={ic_check_circle}/>
        </div>
        }
        <Typography variant='h4'align='left' className={classes.title}><strong> 預期損失金額: </strong></Typography>
        <Typography variant='h1' className={classes.content}><strong>{(expectedLoss).toFixed(1)}元</strong></Typography>

        </Paper>
        </Container>
        </>
    )
}
export default Result;