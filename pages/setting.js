import { Button, Card, Divider, TextField, Typography } from '@material-ui/core';
import { jssPreset, StylesProvider, ThemeProvider } from '@material-ui/styles';
import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify';
import { updateUserInfo, userInfo, updateUserPassword, userAvatar, deleteUserAvatar } from '../Components/api/apiUsage';
import Header from '../Components/header/Header';
import useStyle from '../Components/styles/SettingStyle';
import { useRouter } from 'next/router';
import Gravatar from 'react-gravatar';
import rtl from "jss-rtl";
import { create } from 'jss';
import rtlTheme from '../src/theme/RtlTheme';
import Footer from '../Components/footer/Footer';
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export default function Setting() {
    const classes = useStyle();
    const [user, setUser] = useState('');
    const router = useRouter();
    const [showName, setShowName] = useState();
    const [isLogin, setIsLogin] = useState(false);
    const [currentPass, setCurrentPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [newPassRepeat, setNewPassRepeat] = useState('');

    useEffect(() => {
        if (!!localStorage.getItem('x-auth-token') === false)
            return router.push('/');
    }, []);

    useEffect(() => {
        if (localStorage.getItem('x-auth-token') !== null)
            return setIsLogin(true);
    }, [])

    useEffect(() => {
        if (isLogin) {
            userInfo((isOk, data) => {
                if (!isOk)
                    return data.errors.map((item) => toast.error(item.message))
                else {
                    setUser(data);
                    return setShowName(data.name)
                }
            });
        }
    }, [isLogin]);
    const englishRegex = /^[a-zA-Z0-9?><;,{}[\]\-_+=!@#$%()?|\^&*|']*$/g;
    const oldPasswordChange = (event) => {
        if (event.target.value == '')
            return setCurrentPass(event.target.value)
        else if (event.target.value.match(englishRegex)) {
            return setCurrentPass(event.target.value)
        } else return alert('کیبورد خود را انگلیسی کنید !')
    }
    const newPasswordChange = (event) => {
        if (event.target.value == '')
            return setNewPass(event.target.value)
        else if (event.target.value.match(englishRegex)) {
            return setNewPass(event.target.value)
        } else return alert('کیبورد خود را انگلیسی کنید !')
    }
    const repeatNewPassChange = (event) => {
        if (event.target.value == '')
            return setNewPassRepeat(event.target.value)
        else if (event.target.value.match(englishRegex)) {
            return setNewPassRepeat(event.target.value)
        } else return alert('کیبورد خود را انگلیسی کنید !')
    }
    const submit = () => {
        if (showName !== user.name) {
            const data = {
                name: showName
            }
            updateUserInfo(data, (isOk, data) => {
                if (!isOk)
                    return data.errors.map((item) => toast.error(item.message))
                else return toast.success(data.message);
            });
        } else return toast.error('اطلاعاتی ویرایش نشده است!');
    }
    const letters = /(?=.*[a-z])(?=.*[A-Z])/g;

    const changePassSubmit = () => {
        if (newPass == newPassRepeat) {
            if (newPass.length >= 8) {
                if (newPass.match(letters)) {
                    const data = {
                        currentPassword: currentPass,
                        newPassword: newPass
                    }
                    updateUserPassword(data, (isOk, data) => {
                        if (!isOk)
                            return data.errors.map((item) => toast.error(item.message))
                        else {
                            window.location.reload();
                            return toast.success(data.message);
                        }
                    });
                } else return toast.error('رمز عبور باید شامل حروف بزرگ و کوچک شود !')
            } else return toast.error('رمز عبور باید بیشتر از 8 کاراکتر باشد !')
        } else return toast.error('رمز عبور و تکرار مشابه نیستند !')
    }
    const uploadAvatar = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            if (e.target.files[0].size / 1024 / 1024 < 4) {
                const formData = new FormData();
                formData.append("avatar", e.target.files[0]);
                toast.info("فایل شما درحال آپلود است !");
                userAvatar(formData, (isOk, data) => {
                    if (!isOk)
                        return data.errors.map((item) => toast.error(item.message))
                    else {
                        toast.success('عکس شما آپلود شد !');
                        return window.location.reload()
                    }
                })
            } else toast.error("حجم فایل باید کمتر از 4 مگابایت باشد");
        }
    }
    const deleteAvatar = () => {
        deleteUserAvatar((isOk, data) => {
            if (!isOk)
                return data.errors.map((item) => toast.error(item.message))
            else {
                toast.success('عکس شما حذف شد !');
                return window.location.reload()
            }
        })
    }
    const file = useRef()
    return (
        <>
            <Head>
                <title>تنظیمات</title>
            </Head>
           <Header />
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
                <Card className={classes.card}>
                    <input ref={file} type={'file'} accept="image/*" style={{ display: 'none' }} onChange={uploadAvatar} />
                    {user === undefined ? '' : user === null ? '' : user.avatar == 'false' ? <Gravatar email={user.email} rating="g" className={classes.profileImg} default={'identicon'} /> : <img src={user.avatar} alt={user.name} loading="lazy" className={classes.profileImg} />}
                    {user === undefined ? '' : user === null ? '' : user.avatar == 'false' ? <Typography style={{ fontSize: '14px', fontWeight: 'bold', marginTop: '0.5rem', display: 'flex' }} onClick={() => file.current.click()}><img src={'/images/upload.svg'} alt="upload" style={{ width: '23px', height: '23px', paddingLeft: '0.2rem' }} />آپلود عکس</Typography> : <Typography onClick={deleteAvatar} style={{ fontSize: '14px', color: '#ff2e2e', marginTop: '0.5rem',display: 'flex'}}><img src={'/images/x-button.svg'} alt="delete" style={{ width: '17px', height: '17px', paddingLeft: '0.2rem' }} /> حذف</Typography>}
                    <Divider className={classes.divider} />
                    <Typography style={{ color: '#ffa144', fontWeight: 'bold', marginTop: '1rem', fontSize: '18px' }}>اطلاعات کاربری</Typography>

                    <section style={{display: 'flex', flexWrap: 'wrap',justifyContent: 'center',alignItems: 'center' }}>
                        <StylesProvider jss={jss}>
                            <ThemeProvider theme={rtlTheme}>
                                <TextField InputLabelProps={{ classes: { root: classes.labelForms }, shrink: true }} value={showName == null ? user.name : showName} onChange={(event) => setShowName(event.target.value)} label="نام" variant="outlined" className={classes.showNameInput} />
                                <TextField InputLabelProps={{ classes: { root: classes.labelForms }, shrink: true }} disabled value={user === undefined ? '' : user === null ? '' : user.email} label="ایمیل" variant="outlined" className={classes.emailInput} />
                            </ThemeProvider>
                        </StylesProvider>
                    </section>
                    <Button variant="contained" onClick={submit} color={'primary'} className={classes.commentButton}><Typography className={classes.buttonText}>ویرایش</Typography></Button>
                    <Divider className={classes.divider} />

                    <Typography style={{ color: '#ffa144', fontWeight: 'bold', margin: '1.5rem 0', fontSize: '18px' }}>تغییر رمز عبور</Typography>

                    <StylesProvider jss={jss}>
                        <ThemeProvider theme={rtlTheme}>
                            <TextField InputLabelProps={{ classes: { root: classes.labelForms } }} type="password" value={currentPass} label="رمز عبور فعلی" onChange={oldPasswordChange} variant="outlined" className={classes.emailInput} />
                            <TextField InputLabelProps={{ classes: { root: classes.labelForms } }} type="password" value={newPass} onChange={newPasswordChange} label="رمز عبور جدید" variant="outlined" className={classes.emailInput} />
                            <TextField InputLabelProps={{ classes: { root: classes.labelForms } }} type="password" value={newPassRepeat} onChange={repeatNewPassChange} label="تکرار رمز عبور جدید" variant="outlined" className={classes.emailInput} />
                        </ThemeProvider>
                    </StylesProvider>
                    <Typography className={classes.alertText}>⚠️ رمز عبور باید شامل حروف بزرگ , کوچیک , عدد و<br /> بیشتر از 8 کاراکتر باشد !</Typography>

                    <Button variant="contained" onClick={changePassSubmit} color={'primary'} className={classes.commentButton}><Typography className={classes.buttonText}>ثبت</Typography></Button>
                </Card>
            </div>
            <Footer />
        </>
    )
}
