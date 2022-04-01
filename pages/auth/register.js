import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head';
import useStyle from '../../Components/styles/AuthStyle';
import { Button, TextField, Typography } from '@material-ui/core';
import rtl from "jss-rtl";
import { create } from 'jss';
import { StylesProvider, jssPreset, ThemeProvider } from "@material-ui/core/styles";
import rtlTheme from '../../src/theme/RtlTheme';
import { newRegister } from '../../Components/api/apiUsage';
import { toast } from 'react-toastify';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export default function register() {
    const classes = useStyle();
    const router = useRouter();
    const [showName, setShowName] = useState();
    const [password, setPassword] = useState();
    const [repeatPassword, setRepeatPassword] = useState();
    const [disableBtn, setDisableBtn] = useState(true);

    useEffect(() => {
        if (!!sessionStorage.getItem('email') === false || !!sessionStorage.getItem('reqProcess') === false)
            return router.push('/auth');
    }, [])

    const letters = /(?=.*[a-z])(?=.*[A-Z])/g;
    const englishRegex = /^[a-zA-Z0-9?><;,{}[\]\-_+=!@#$%()?|\^&*|']*$/g;

    const passwordChange = (event) => {
        if (event.target.value == '')
            return setPassword(event.target.value)
        else if (event.target.value.match(englishRegex)) {
            return setPassword(event.target.value)
        } else return alert('کیبورد خود را انگلیسی کنید !')
    }
    const repeatPasswordChange = (event) => {
        setDisableBtn(false);
        if (event.target.value == '')
            return setRepeatPassword(event.target.value)
        else if (event.target.value.match(englishRegex)) {
            return setRepeatPassword(event.target.value)
        } else return alert('کیبورد خود را انگلیسی کنید !')
    }
    const submit = () => {
        if (password == repeatPassword) {
            if (password.length >= 8) {
                if (password.match(letters)) {
                    const data = {
                        name: showName,
                        email: sessionStorage.getItem('email'),
                        password
                    }
                    newRegister(data, (isOk, data) => {
                        if (!isOk)
                            return data.errors.map((item) => toast.error(item.message))
                        else {
                            alert(data.message);
                            sessionStorage.removeItem('email');
                            sessionStorage.removeItem('reqProcess');
                            return window.history.go(-2)
                        }
                    });
                } else return toast.error('رمز عبور باید شامل حروف بزرگ و کوچک شود !')
            } else return toast.error('رمز عبور باید بیشتر از 8 کاراکتر باشد !')
        } else return toast.error('رمز عبور و تکرار مشابه نیستند !')
    }
    return (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Head>
                <title>ثبت نام</title>
            </Head>
            <section className={classes.AuthBox}>
                <img src={'/images/logo.png'} alt={"logo"} className={classes.logo} />
                <Typography className={classes.authTitle}><span style={{ color: '#ffa144' }}>ثبت نام</span></Typography>

                <StylesProvider jss={jss}>
                    <ThemeProvider theme={rtlTheme}>
                        <TextField InputLabelProps={{ classes: { root: classes.labelForms } }} value={showName} onChange={(event) => setShowName(event.target.value)} label="نام" variant="outlined" className={classes.showNameInput} />
                        <TextField InputLabelProps={{ classes: { root: classes.labelForms } }} type={'password'} value={password} onChange={passwordChange} label="رمز عبور" variant="outlined" className={classes.registerInput} />
                        <TextField InputLabelProps={{ classes: { root: classes.labelForms } }} type={'password'} value={repeatPassword} onChange={repeatPasswordChange} label="تکرار رمز عبور" variant="outlined" className={classes.registerInput} />
                    </ThemeProvider>
                </StylesProvider>
                <Typography className={classes.alertText}>⚠️ رمز عبور باید شامل حروف بزرگ , کوچیک , عدد و<br /> بیشتر از 8 کاراکتر باشد !</Typography>
                <Button disabled={disableBtn} variant="contained" color={'primary'} onClick={submit} className={classes.commentButton}><Typography className={classes.buttonText}>ثبت نام</Typography></Button>
            </section>
        </div>
    )
}
