import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Button, IconButton, InputAdornment, OutlinedInput, Typography } from '@material-ui/core';
import rtl from "jss-rtl";
import { create } from 'jss';
import { StylesProvider, jssPreset, ThemeProvider } from "@material-ui/core/styles";
import rtlTheme from '../../src/theme/RtlTheme';
import { toast } from 'react-toastify';
import useStyle from '../../Components/styles/AuthStyle';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { userLogin } from '../../Components/api/apiUsage';
import Link from "next/link";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export default function login() {
    const classes = useStyle();
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [passwordValue, setPasswordValue] = useState(null);

    useEffect(() => {
        if (!!sessionStorage.getItem('email') === false || !!sessionStorage.getItem('loginProcess') === false)
            return router.push('/auth');
    }, [])

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const englishRegex = /^[a-zA-Z0-9?><;,{}[\]\-_+=!@#$%()?|\^&*|']*$/g;
    const passwordChange = (event) => {
        if (event.target.value == '')
            return setPasswordValue(event.target.value)
        else if (event.target.value.match(englishRegex)) {
            return setPasswordValue(event.target.value)
        } else return alert('کیبورد خود را انگلیسی کنید !')
    }
    const submit = () => {
        const data = {
            email: sessionStorage.getItem('email'),
            password: passwordValue
        }
        if (passwordValue !== null) {
            userLogin(data, (isOk, data) => {
                if (!isOk)
                    return data.errors.map((item) => toast.error(item.message))
                else {
                    toast.success(data.message);
                    sessionStorage.removeItem('email');
                    localStorage.setItem("x-auth-token", data["token"]);
                    localStorage.setItem("id", data["id"]);
                    sessionStorage.removeItem('loginProcess');
                    return window.history.go(-2)
                }
            });
        } else return toast.error('رمز عبور خود را وارد کنید!')
    }
    const submitWithEnter = (e) => {
        if (e.key === 'Enter' && passwordValue !== null) {
            const data = {
                email: sessionStorage.getItem('email'),
                password: passwordValue
            }
            if (passwordValue !== null) {
                userLogin(data, (isOk, data) => {
                    if (!isOk)
                        return data.errors.map((item) => toast.error(item.message))
                    else {
                        toast.success(data.message);
                        sessionStorage.removeItem('email');
                        localStorage.setItem("x-auth-token", data["token"]);
                        localStorage.setItem("id", data["id"]);
                        sessionStorage.removeItem('loginProcess');
                        return window.history.go(-2)
                    }
                });
            } else return toast.error('رمز عبور خود را وارد کنید!')
        }
    };
    return (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Head>
                <title>ورود</title>
            </Head>
            <section className={classes.AuthBox}>
                <img src={'/images/logo.png'} alt={"logo"} className={classes.logo} />
                <Typography className={classes.authTitle}>ورود</Typography>

                <StylesProvider jss={jss}>
                    <ThemeProvider theme={rtlTheme}>
                        <OutlinedInput variant="outlined" InputLabelProps={{ classes: { root: classes.labelForms } }} endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={handleClickShowPassword}>
                                    {showPassword ? <VisibilityOff style={{ color: '#38646f' }} /> : <Visibility style={{ color: '#38646f' }} />}
                                </IconButton>
                            </InputAdornment>
                        } type={showPassword ? 'text' : 'password'} onKeyDown={submitWithEnter} placeholder="رمز عبور" autoFocus value={passwordValue} className={classes.passwordInput} onChange={passwordChange} />
                    </ThemeProvider>
                </StylesProvider>
                <Link href="/auth/forgot-password"><a>
                    <Typography style={{ color: 'rgb(255, 161, 68)', fontSize: '14px', marginTop: '2rem' }} >فراموشی رمز عبور</Typography>
                </a></Link>
                <Button variant="contained" color={'primary'} onClick={submit} className={classes.commentButton}><Typography className={classes.buttonText}>ورود</Typography></Button>
            </section>
        </div>
    )
}
