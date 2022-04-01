import { Button, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import useStyle from '../../Components/styles/AuthStyle';
import rtl from "jss-rtl";
import { create } from 'jss';
import { StylesProvider, jssPreset, ThemeProvider } from "@material-ui/core/styles";
import rtlTheme from '../../src/theme/RtlTheme';
import { toast } from 'react-toastify';
import { auth } from '../../Components/api/apiUsage';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRouter } from 'next/router';
import Head from 'next/head';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export default function Auth() {
    const classes = useStyle();
    const router = useRouter()
    const [emailInput, setEmailInput] = useState(null)
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g;
    const [theme, setTheme] = useState(true);
    const [captchaValue, setCaptchaValue] = useState();
    useEffect(() => {
        if (!!localStorage.getItem('x-auth-token') === true)
            return router.push('/');
    }, []);
    useEffect(() => {
        if (localStorage.getItem('theme'))
            setTheme(JSON.parse(localStorage.getItem('theme')))
    }, []);
    const recaptchaRef = React.createRef();

    const handleChange = (value) => {
        setCaptchaValue(value)
    }
    const submit = () => {
        if (emailInput !== null && emailInput.match(emailRegex)) {
            const data = {
                email: emailInput,
                token: captchaValue
            }
            auth(data, (isOk, data) => {
                if (!isOk)
                    return data.errors.map((item) => toast.error(item.message))
                else {
                    if (data.code === 901) {
                        sessionStorage.setItem('email', emailInput)
                        sessionStorage.setItem('reqProcess', true);
                        return router.push('/auth/register')
                    } else if (data.code === 900) {
                        sessionStorage.setItem('email', emailInput)
                        sessionStorage.setItem('loginProcess', true);
                        return router.push('/auth/login')
                    }
                }
            });
        } else return toast.error('ایمیل را بررسی کنید!')
    }
    const submitWithEnter = (e) => {
        if (e.key === 'Enter' && emailInput !== null) {
            const data = {
                email: emailInput,
                token: captchaValue
            }
            auth(data, (isOk, data) => {
                if (!isOk)
                    return data.errors.map((item) => toast.error(item.message))
                else {
                    if (data.code === 901) {
                        sessionStorage.setItem('email', emailInput)
                        sessionStorage.setItem('reqProcess', true);
                        return router.push('/auth/register')
                    } else if (data.code === 900) {
                        sessionStorage.setItem('email', emailInput)
                        sessionStorage.setItem('loginProcess', true);
                        return router.push('/auth/login')
                    }
                }
            });
        }
    };

    return (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Head>
                <title>ورود / ثبت نام</title>
            </Head>
            <section className={classes.AuthBox}>
                <img src={'/images/logo.png'} alt={"logo"} className={classes.logo} />
                <Typography className={classes.authTitle}>ورود / <span style={{ color: '#ffa144' }}>ثبت نام</span></Typography>
                <StylesProvider jss={jss}>
                    <ThemeProvider theme={rtlTheme}>
                        <TextField name="email" onKeyDown={submitWithEnter} InputLabelProps={{ classes: { root: classes.labelForms } }} value={emailInput} onChange={(event) => setEmailInput(event.target.value)} type="email" label="ایمیل خود را وارد کنید" variant="outlined" className={classes.emailInput} />
                    </ThemeProvider>
                </StylesProvider>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.CAPTCHA_KEY}
                    theme={theme === true ? "dark" : "light"}
                    onChange={handleChange}
                />
                <Button variant="contained" onClick={submit} color={'primary'} className={classes.commentButton}><Typography className={classes.buttonText}>ادامه</Typography></Button>
            </section>
        </div>
    )
}
