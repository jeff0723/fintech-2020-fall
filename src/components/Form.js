import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive'
import { useState, useEffect }from 'react';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Menu } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import Result from './Result'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      container:{
          marginTop:theme.spacing(4),
          marginBottom:theme.spacing(4),
      },
      fromItemTitle:{
        marginTop:theme.spacing(1),
      },
      divider:{
          marginTop:theme.spacing(2),
          marginBottom:theme.spacing(2),
      },
      button:{
        marginBottom:theme.spacing(2),
      },
      title:{
          paddingTop:theme.spacing(2),
      }
}));
function Form(){
    const classes = useStyles();
    const [isSubmit, setIsSumbit] = useState(false);
    const [probability, setProbability] = useState("");
    const [保期天數,設定保期天數] =useState(0);
    const [旅遊地區代碼,設定旅遊地區代碼]=useState("");
    const [timedelta,setTimedelta] =useState(0);
    const [被保險人家庭年收入,設定被保險人家庭年收入] =useState("");
    const [被保險人年收入,設定被保險人年收入] =useState("");
    const [被保險人性別,設定被保險人性別] =useState("");
    const [被保險人年齡,設定被保險人年齡] =useState(0);
    const [被保險人關係,設定被保險人關係] =useState("");
    const [職行業別,設定職行業別] =useState("");
    const [身故受益人,設定身故受益人] =useState("");
    const [受益人,設定受益人] =useState("");
    const [同為要保人,設定同為要保人] =useState("");
    const [總人數,設定總人數] =useState(0);
    const [付款類型,設定付款類型] =useState(0);
    const [保單類型,設定保單類型] =useState(0);
    const [方案名稱,設定方案名稱] =useState(0);
    const [旅行平安保險保額,設定旅行平安保險保額] =useState(0);
    const [傷害醫療保險金保額,設定傷害醫療保險金保額] =useState(0);
    const [每一意外事故體傷責任保險保額,設定每一意外事故體傷責任保險保額] =useState(0);
    const [每一意外事故財損責任保險保額,設定每一意外事故財損責任保險保額] =useState(0);
    const [保險期間內最高賠償責任保險保額,設定保險期間內最高賠償責任保險保額] =useState(0);
    const [食物中毒慰問保險金保額,設定食物中毒慰問保險金保額] =useState(0);
    const [海外突發疾病住院醫療費用保險金保額,設定海外突發疾病住院醫療費用保險金保額] =useState(0);
    const [海外突發疾病門診醫療費用保險金保額,設定海外突發疾病門診醫療費用保險金保額] =useState(0);
    const [行李損失保險保額,設定行李損失保險保額] =useState(0);
    const [行李延誤費用保險保額,設定行李延誤費用保險保額] =useState(0);
    const [交通票證及旅行文件損失保險保額 ,設定交通票證及旅行文件損失保險保額 ] =useState(0);
    const [旅程延誤費用保險保額 ,設定旅程延誤費用保險保額 ] =useState(0);
    const [旅程取消費用保險保額,設定旅程取消費用保險保額] =useState(0);
    const [旅程縮短費用保險保額,設定旅程縮短費用保險保額] =useState(0);
    const [緊急救援費用保險,設定緊急救援費用保險] =useState(0);
    const [總保費,設定總保費] =useState(0);









    const submit = async (e) =>
    {
        e.preventDefault();
        const data = {
            numerical_data :{
                "保期天數":保期天數,
                '總人數':總人數,
                '旅行平安保險 保額':旅行平安保險保額,
                '傷害醫療保險金(實支實付型) 保額':傷害醫療保險金保額,
                '每一意外事故體傷責任保險 保額':每一意外事故體傷責任保險保額,
                '每一意外事故財損責任保險 保額':每一意外事故財損責任保險保額,
                '保險期間內最高賠償責任保險 保額':保險期間內最高賠償責任保險保額,
                '食物中毒慰問保險金 保額':食物中毒慰問保險金保額,
                '海外突發疾病住院醫療費用保險金 保額':海外突發疾病住院醫療費用保險金保額,
                '海外突發疾病門診醫療費用保險金 保額':海外突發疾病門診醫療費用保險金保額,
                '行李損失保險 保額':行李損失保險保額,
                '行李延誤費用保險 保額':行李延誤費用保險保額,
                '交通票證及旅行文件損失保險 保額':交通票證及旅行文件損失保險保額,
                '旅程延誤費用保險 保額':旅程延誤費用保險保額,
                '旅程取消費用保險 保額':旅程取消費用保險保額,
                '旅程縮短費用保險 保額':旅程縮短費用保險保額,
                '緊急救援費用保險':緊急救援費用保險,
                '被保險人年齡':被保險人年齡,
                '總保費':總保費,
                'time_delta':timedelta,
            },
            categorical_data:{
                '付款類型':付款類型,
                '保單類型':保單類型,
                '是否有勾選「同為要保人」':同為要保人,
                '方案名稱':方案名稱,
                '旅遊地區代碼':旅遊地區代碼,
                '行/職業別代號':職行業別,
                '受益人 均分/順位':受益人,
                '身故受益人':身故受益人,
                '家庭年收入':被保險人家庭年收入,
                '被保險人關係':被保險人關係,
                '個人年收入':被保險人年收入,
                '被保險人性別':被保險人性別
            },
        }
        await fetch('/model',{
            method:"POST",
            header:{'Content-Type':"application/json"},
            body:JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            console.log(data)
            setProbability(data.probability);
          });
        setIsSumbit(true);
    }
    return(
        <>
        {!isSubmit?
        <Container maxWidth="sm" className={classes.container}>
            <Paper elevation={3}>
            <form noValidate onSubmit={submit}>
            <Typography variant='h4'className={classes.title}>
                    旅遊資料
                </Typography>
                <Divider className={classes.divider}/>
                <Grid>
                <Typography className={classes.fromItemTitle}>請輸入保期天數</Typography>
                {/* <InputLabel >請輸入保期天數</InputLabel> */}
                <TextField required placeholder='保期天數' variant="outlined" onInput={e=>
                設定保期天數(e.target.value)}/>
                </Grid>
                <Grid>
                <Typography className={classes.fromItemTitle}>請選取旅遊地區代碼</Typography>
                {/* <InputLabel >請輸入旅遊地區代碼</InputLabel> */}
                <Select required variant='outlined' onChange={e=> 設定旅遊地區代碼(e.target.value)} style={{width:200}}>
                    <MenuItem value={"國內"} id="國內">國內 </MenuItem>
                    <MenuItem value={"國外"} id="國外">國外</MenuItem>
                </Select>
                </Grid>
                <Grid>
                {/* <InputLabel >Time Delta</InputLabel>
                 */}
                 <Typography className={classes.fromItemTitle}>請輸入Time Delta</Typography>
                <TextField required  variant="outlined" placeholder='Time Delta' onInput={e=>
                setTimedelta(e.target.value)}/>
                </Grid>
                <Divider className={classes.divider}/>
                <Grid>
                <Typography variant='h4'>
                    被保險人資料
                </Typography>
                <Divider className={classes.divider}/>
                </Grid>
                <Grid>

                {/* <InputLabel >被保險人家庭年收入</InputLabel> */}
                <Typography className={classes.fromItemTitle}>請選取被保險人家庭年收入</Typography>
                <Select required variant='outlined' onChange={e=>
                設定被保險人家庭年收入(e.target.value)} style={{width:200}}>
                    <MenuItem value={"50萬以下"} id="50萬以下">50萬以下 </MenuItem>
                    <MenuItem value={"50萬～ 100萬"} id="50萬～ 100萬">50萬～100萬</MenuItem>
                    <MenuItem value={"100萬～200萬"} id="100萬～200萬">100萬～200萬</MenuItem>
                    <MenuItem value={"200萬以上"} id="200萬以上">200萬以上</MenuItem>
                </Select>
                </Grid>
                <Grid>
                {/* <InputLabel >被保險人年收入</InputLabel> */}
                 <Typography className={classes.fromItemTitle}>請選取保險人年收入</Typography> 
                <Select required variant='outlined' onChange={e=>
                設定被保險人年收入(e.target.value)} style={{width:200}} >
                    <MenuItem value={"50萬以下"} id="50萬以下">50萬以下 </MenuItem>
                    <MenuItem value={"50萬～ 100萬"} id="50萬～ 100萬">50萬～100萬</MenuItem>
                    <MenuItem value={"100萬～200萬"} id="100萬～200萬">100萬～200萬</MenuItem>
                    <MenuItem value={"200萬以上"} id="200萬以上">200萬以上</MenuItem>
                </Select>
                </Grid>
                <Grid>
                <Typography className={classes.fromItemTitle}>請選取保險人性別</Typography> 
                <Select variant='outlined' required onChange={e=>
                設定被保險人性別(e.target.value)} style={{width:200}}>
                    <MenuItem value={"MALE"} id="男">男 </MenuItem>
                    <MenuItem value={"FEMALE"} id="女">女</MenuItem>
                </Select>
                </Grid>
                <Grid>
                <Typography className={classes.fromItemTitle}>請輸入保險人年齡</Typography> 
                <TextField required placeholder='年齡' variant="outlined" onInput={e=>
                設定被保險人年齡(e.target.value)} style={{width:200}}/>
                </Grid>
                <Grid>
                <Typography className={classes.fromItemTitle}>請選取與保險人關係</Typography>
                <Select required variant='outlined' onChange={e=>
                設定被保險人關係(e.target.value)} style={{width:200}}>
                    <MenuItem value={"本人"} id='本人'>本人 </MenuItem>
                    <MenuItem value={"配偶"} id='配偶'>配偶</MenuItem>
                    <MenuItem value={"父母"} id='父母'>父母</MenuItem>
                    <MenuItem value={"子女"} id='子女'>子女</MenuItem>
                    <MenuItem value={"其他"} id="其他">其他</MenuItem>
                </Select>
                </Grid>
                <Grid>
                <Typography className={classes.fromItemTitle}>請選取職/行業別</Typography> 
                <Select required variant='outlined' onChange={e=>
                設定職行業別(e.target.value)} style={{width:200}}>
                    <MenuItem value={"一般職業(含學生及家庭主婦)"} id="一般職業(含學生及家庭主婦)">一般職業(含學生及家庭主婦) </MenuItem>
                    <MenuItem value={"律師(或其合夥人/受僱人)"} id="律師(或其合夥人/受僱人)">律師(或其合夥人/受僱人)</MenuItem>
                    <MenuItem value={"會計師(或其合夥人/受僱人)"} id="會計師(或其合夥人/受僱人)">會計師(或其合夥人/受僱人)</MenuItem>
                    <MenuItem value={"公證人(或其合夥人/受僱人)"} id="公證人(或其合夥人/受僱人)">公證人(或其合夥人/受僱人)</MenuItem>
                    <MenuItem value={"融資從業人員"} id="融資從業人員">融資從業人員</MenuItem>
                    <MenuItem value={"軍火商不動產經紀人"} id="軍火商不動產經紀人">軍火商不動產經紀人</MenuItem>
                    <MenuItem value={"寺廟、教會從業人員"} id="寺廟、教會從業人員" >寺廟、教會從業人員</MenuItem>
                    <MenuItem value={"外交人員、大使館、辦事處"} id="外交人員、大使館、辦事處">外交人員、大使館、辦事處</MenuItem>
                    <MenuItem value={"虛擬貨幣的發行者或交易商"} id="虛擬貨幣的發行者或交易商">虛擬貨幣的發行者或交易商</MenuItem>
                    <MenuItem value={"當鋪業"} id="當鋪業">當鋪業</MenuItem>
                    <MenuItem value={"寶石及貴金屬交易商"} id="寶石及貴金屬交易商">寶石及貴金屬交易商</MenuItem>
                    <MenuItem value={"藝術品/骨董交易商"} id="藝術品/骨董交易商">藝術品/骨董交易商</MenuItem>
                    <MenuItem value={"拍賣公司"} id="拍賣公司">拍賣公司</MenuItem>
                    <MenuItem value={"基金會"} id="基金會">基金會</MenuItem>
                    <MenuItem value={"協會"} id="協會">協會</MenuItem>
                    <MenuItem value={"博奕公司"} id="博奕公司">博奕公司</MenuItem>
                    <MenuItem value={"匯款公司"} id="匯款公司">匯款公司</MenuItem>
                    <MenuItem value={"外幣兌換所"} id="外幣兌換所">外幣兌換所</MenuItem>
                </Select>
                </Grid>
                <Grid>
                <Typography className={classes.fromItemTitle}>請選取身故受益人</Typography> 
                <Select required variant='outlined' onChange={e=>
                設定身故受益人(e.target.value)} style={{width:200}} >
                    <MenuItem value={"本人"} id="本人">本人 </MenuItem>
                    <MenuItem value={"法定繼承人"} id='法定繼承人'>法定繼承人</MenuItem>
                    <MenuItem value={"指定繼承人"} id='指定繼承人'>指定繼承人</MenuItem>
                </Select>
                </Grid>
                <Grid>
                <Typography className={classes.fromItemTitle}>請選取受益人分配方式</Typography> 
                <Select required variant='outlined' onChange={e=>
                設定受益人(e.target.value)} style={{width:200}}>
                    <MenuItem value={"均分"} id="均分">均分 </MenuItem>
                    <MenuItem value={"順位"} id="順位">順位</MenuItem>
                </Select>
                </Grid>
                <Grid>
                <Typography className={classes.fromItemTitle}>請選取是否同為要保人</Typography> 
                <Select variant='outlined' required onChange={e=>
                設定同為要保人(e.target.value)} style={{width:200}} >
                    <MenuItem value={"Y"} id="是">是 </MenuItem>
                    <MenuItem value={"N"} id="否">否</MenuItem>
                </Select>
                </Grid>
                <Grid>
                <Typography className={classes.fromItemTitle}>請輸入總人數</Typography> 
                <TextField required placeholder='總人數' variant="outlined" onInput={e=>
                設定總人數(e.target.value)}/>
                </Grid>
                <Grid>
                <Divider className={classes.divider}/>
                <Typography variant='h4'>
                    保單類型
                </Typography>
                <Divider className={classes.divider}/>
                </Grid>
                <Grid>
                <Typography className={classes.fromItemTitle}>請選取付款類型</Typography> 
                <Select required variant='outlined' onChange={e=>
                設定付款類型(e.target.value)} style={{width:200}}>
                    <MenuItem value={"信用卡線上刷卡"} id="信用卡線上刷卡">信用卡線上刷卡 </MenuItem>
                    <MenuItem value={"全國繳費網"} id="全國繳費網">全國繳費網</MenuItem>
                </Select>
                </Grid>
                <Grid>
                <Typography className={classes.fromItemTitle}>請選取保單類型</Typography> 
                <Select required variant='outlined' onChange={e=>
                設定保單類型(e.target.value)} style={{width:200}}>
                    <MenuItem value={"網路投保件數"} id="網路投保件數">網路投保件數 </MenuItem>
                    <MenuItem value={"網路要保件數"} id="網路要保件數">網路要保件數</MenuItem>
                </Select>
                </Grid>
                <Grid>
                </Grid>
                <Grid>
                <Typography className={classes.fromItemTitle}>請選取方案名稱</Typography> 
                <Select required variant='outlined' onChange={e=>
                設定方案名稱(e.target.value)} style={{width:200}}>
                    <MenuItem value={"加價購任你保"} id="加價購任你保">加價購任你保 </MenuItem>
                    <MenuItem value={"商務型"} id="商務型">商務型</MenuItem>
                    <MenuItem value={"基本型"} id="基本型">基本型</MenuItem>
                    <MenuItem value={"暢遊型"} id="暢遊型">暢遊型</MenuItem>
                    <MenuItem value={"環球型"} id="環球型">環球型</MenuItem>
                    <MenuItem value={"背包型"} id="背包型">背包型</MenuItem>
                    <MenuItem value={"超值型"} id="超值型">超值型</MenuItem>
                </Select>
                </Grid>
                <Divider className={classes.divider}/>
                <Typography variant='h4'>
                    旅平險（必要）
                </Typography>
                <Divider className={classes.divider}/>
                <Grid>
                <Typography className={classes.fromItemTitle}>請輸入旅行平安保險保額</Typography> 
                <TextField required  variant="outlined" onInput={e=>
                設定旅行平安保險保額(e.target.value)}/>
                </Grid>
                <Grid>
                <Typography className={classes.fromItemTitle}>請輸入傷害醫療保險金保額</Typography> 
                <TextField required  variant="outlined" onInput={e=>
                設定傷害醫療保險金保額(e.target.value)}/>
                </Grid>
                <Grid>
                <Typography className={classes.fromItemTitle}>請輸入每一意外事故體傷責任保險保額</Typography> 
                <TextField required  variant="outlined" onInput={e=>
                設定每一意外事故體傷責任保險保額(e.target.value)}/>
                </Grid>
                <Grid>
                <Typography className={classes.fromItemTitle}>請輸入每一意外事故財損責任保險保額</Typography> 
                <TextField required  variant="outlined" onInput={e=>
                設定每一意外事故財損責任保險保額(e.target.value)}/>
                </Grid>
                <Grid>
                <Typography className={classes.fromItemTitle}>請輸入保險期間內最高賠償責任保險保額</Typography> 
                <TextField required  variant="outlined" onInput={e=>
                設定保險期間內最高賠償責任保險保額(e.target.value)}/>
                </Grid>
                <Grid>
                <Divider className={classes.divider}/>
                <Typography variant='h4'>
                    旅平險（自選）
                </Typography>
                <Divider className={classes.divider}/>
                </Grid>
                <Grid>
                <Typography className={classes.fromItemTitle}>請輸入食物中毒慰問保險金保額</Typography> 
                <Radio/>
                <TextField variant="outlined" onInput={e=>
                設定食物中毒慰問保險金保額(e.target.value)}/>
                </Grid>
                <Grid>
                <Typography className={classes.fromItemTitle}>請輸入海外突發疾病住院醫療費用保險金保額</Typography> 
                <Radio/>
                <TextField variant="outlined" onInput={e=>
                設定海外突發疾病住院醫療費用保險金保額(e.target.value)}/>
                </Grid>
                <Grid>
                <Typography className={classes.fromItemTitle}>請輸入海外突發疾病門診醫療費用保險金保額</Typography> 
                <Radio/>
                <TextField variant="outlined" onInput={e=>
                設定海外突發疾病門診醫療費用保險金保額(e.target.value)}/>
                </Grid><Grid>
                <Typography className={classes.fromItemTitle}>請輸入行李損失保險保額</Typography> 
                <Radio/>
                <TextField variant="outlined" onInput={e=>
                設定行李損失保險保額(e.target.value)}/>
                </Grid><Grid>
                <Typography className={classes.fromItemTitle}>請輸入行李延誤費用保險保額</Typography> 
                <Radio/>
                <TextField variant="outlined" onInput={e=>
                設定行李延誤費用保險保額(e.target.value)}/>
                </Grid>
                <Grid>
                <Typography className={classes.fromItemTitle}>請輸入交通票證及旅行文件損失保險保額</Typography> 
                <Radio/>
                <TextField variant="outlined" onInput={e=>
                設定交通票證及旅行文件損失保險保額(e.target.value)}/>
                </Grid>
                <Grid>
                <Typography className={classes.fromItemTitle}>請輸入旅程延誤費用保險保額</Typography> 
                <Radio/>
                <TextField variant="outlined" onInput={e=>
                設定旅程延誤費用保險保額(e.target.value)}/>
                </Grid>
                <Grid>
                <Typography className={classes.fromItemTitle}>請輸入旅程取消費用保險保額</Typography> 
                <Radio/>
                <TextField variant="outlined" onInput={e=>
                設定旅程取消費用保險保額(e.target.value)}/>
                </Grid>
                <Grid>
                <Typography className={classes.fromItemTitle}>請輸入旅程縮短費用保險保額</Typography> 
                <Radio/>
                <TextField variant="outlined" onInput={e=>
                設定旅程縮短費用保險保額(e.target.value)}/>
                </Grid>
                <Grid>
                <Typography className={classes.fromItemTitle}>請輸入緊急救援費用保險</Typography> 
                <Radio/>
                <TextField variant="outlined" onInput={e=>
                設定緊急救援費用保險(e.target.value)}/>
                </Grid>
                <Grid>
                <Divider className={classes.divider}/>
                <Typography className={classes.fromItemTitle}>請輸入總保費</Typography> 
                <TextField required  variant="outlined" onInput={e=>
                設定總保費(e.target.value)}/>
                </Grid>
                {/* <Typography variant='h1'>
                    Hi {probability}
                </Typography> */}
                <Divider className={classes.divider}/>

                <Button type="submit" className={classes.button}  variant="contained" >Submit</Button>
                </form>

            </Paper>
        </Container> : <><Result prob={probability} fee={總保費}/> </>
        } 
        </>
    )
}

export default Form;