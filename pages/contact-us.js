import { Button, Card, Divider, jssPreset, StylesProvider, TextareaAutosize, TextField, ThemeProvider, Typography } from '@material-ui/core';
import Head from 'next/head';
import React, { useState } from 'react'
import Header from '../Components/header/Header';
import useStyle from '../Components/styles/ContactUsStyle';
import rtl from "jss-rtl";
import { create } from 'jss';
import rtlTheme from '../src/theme/RtlTheme';
import ReCAPTCHA from 'react-google-recaptcha';
import Footer from '../Components/footer/Footer';
import { contactUsApi } from '../Components/api/apiUsage';
import { toast } from 'react-toastify';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export default function contactUs() {
    const classes = useStyle();
    const [emailInput, setEmailInput] = useState(null);
    const [name, setName] = useState(null);
    const [title, setTitle] = useState(null);
    const [commentInput, setCommentInput] = useState();
    const [captchaValue, setCaptchaValue] = useState();
    const recaptchaRef = React.createRef();


    const handleChange = (value) => {
        setCaptchaValue(value)
    };

    const submit = () => {
        const data = {
            text: commentInput,
            email: emailInput,
            firstNameLastName: name,
            title,
            token: captchaValue
        }
        contactUsApi(data, (isOk, data) => {
            if (!isOk)
                return data.errors.map((item) => toast.error(item.message))
            else {
                window.location.reload();
                return toast.success(data.message);
            }
        });
    }
    return (
        <>
            <Head>
                <title>تماس با ما</title>
            </Head>
            <Header />

            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
                <Card className={classes.card}>
                    <Typography style={{ marginTop: '2rem', color: '#ffa144', fontSize: '20px', fontWeight: 'bold' }}>تماس با ما</Typography>
                    <Typography style={{ marginTop: '2rem', textAlign: 'center' }}>برای ارتباط و تماس با ما می توانید از ایمیل <a href="mailto:info@sulit.ir">info@sulit.ir</a> و همچنین از فرم زیر استفاده کنید.</Typography>
                    <Divider className={classes.footerDivider} />
                    <StylesProvider jss={jss}>
                        <ThemeProvider theme={rtlTheme}>
                            <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                                <TextField InputLabelProps={{ classes: { root: classes.labelForms } }} value={name} onChange={(event) => setName(event.target.value)} type="text" label="نام و نام خانوادگی" variant="outlined" className={classes.nameInput} />
                                <TextField InputLabelProps={{ classes: { root: classes.labelForms } }} value={emailInput} onChange={(event) => setEmailInput(event.target.value)} type="email" label="ایمیل" variant="outlined" className={classes.emailInput} />
                            </section>
                        </ThemeProvider>
                    </StylesProvider>
                    <StylesProvider jss={jss}>
                        <ThemeProvider theme={rtlTheme}>
                            <TextField InputLabelProps={{ classes: { root: classes.labelForms } }} value={title} onChange={(event) => setTitle(event.target.value)} type="text" label="عنوان" variant="outlined" className={classes.titleInput} />
                        </ThemeProvider>
                    </StylesProvider>

                    <TextareaAutosize value={commentInput} onChange={(event) => setCommentInput(event.target.value)} placeholder="متن" minRows={7} className={classes.commentInput} />

                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '2rem 0' }}>
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={process.env.CAPTCHA_KEY}
                            theme={"dark"}
                            onChange={handleChange}
                        />
                        <Button variant="contained" onClick={submit} color={'primary'} className={classes.commentButton}><Typography className={classes.buttonText}>ثبت دیدگاه</Typography></Button>
                    </div>
                </Card>
            </div>
            <Footer />
        </>
    )
}
