import { Button, Divider, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import useStyle from './style';
import Link from "next/link";
import { getCategory, userInfo } from '../api/apiUsage';
import Gravatar from 'react-gravatar'

export default function HamburgerMenu() {
    const classes = useStyle();
    const [isLogin, setIsLogin] = useState(false);
    const [category, setCategory] = useState([]);
    const [user, setUser] = useState('');

    useEffect(() => {
        if (isLogin === true) {
            userInfo((isOk, data) => {
                if (!isOk)
                    return data.errors.map((item) => toast.error(item.message))
                else return setUser(data)
            });
        }
    }, [isLogin]);

    useEffect(() => {
        getCategory((isOk, data) => {
            if (!isOk)
                return data.errors.map((item) => toast.error(item.message))
            else return setCategory(data)
        });
    }, []);
    useEffect(() => {
        if (localStorage.getItem('x-auth-token') !== null)
            return setIsLogin(true);
    }, []);

    return (
        <div className={classes.root}>
            {!isLogin && <Link href={'/auth'}>
                <a>
                    <Button variant="outlined" className={classes.authBtn}>
                        <p style={{ fontFamily: 'IRANSansX', fontSize: '16px' }}>ورود | ثبت نام</p>
                    </Button>
                </a>
            </Link>}
            {isLogin && <>
                {user === '' ? '' : user.avatar == 'false' ? <Gravatar email={user.email} rating="g" className={classes.profileImg} default={'identicon'} /> : isLogin && <img src={user.avatar} alt={user.name} loading="lazy" className={classes.profileImg} />}
                <Typography style={{ marginTop: '1rem' }}>{user.name}</Typography></>}
            <Divider className={classes.footerDivider} />

            <nav style={{ margin: '1rem 3rem 0 8rem' }}>
                <ul><li><Link href={`/posts/mostViewPosts`}><a><Typography className={classes.title}>پربازدیدترین ها🔥</Typography></a></Link></li>{category.map((item) => item.id % 2 === 0 && <li key={item.id}><Link href={`/category/${item.id}/${item.categoryName}`}><a><Typography className={classes.title}>{item.categoryName}</Typography></a></Link></li>)}<li><Link href={'/contact-us'}><a><Typography className={classes.title}>تماس با سولیت🙃</Typography></a></Link></li></ul>
            </nav>
            {isLogin && <>
                <Divider className={classes.footerDivider} />
                <section style={{ display: 'flex', alignItems: 'center', marginTop: '2rem' }}><img src={'/images/settings.svg'} alt={'settings'} style={{ width: '18px', height: '18px' }} /> <Link href={'/setting'}><a><Typography style={{ paddingRight: '0.5rem' }}>تنظیمات</Typography></a></Link></section>
                <section style={{ display: 'flex', alignItems: 'center', marginTop: '1.5rem' }}><img src={'/images/bookmark.png'} alt={'bookmark'} style={{ width: '18px', height: '18px' }} /> <Link href={'/user-saved-posts'}><a><Typography style={{ paddingRight: '0.5rem' }}>پست های ذخیره شده</Typography></a></Link></section>
                <section style={{ display: 'flex', alignItems: 'center', marginTop: '1.5rem' }}><img src={'/images/logout.png'} alt={'logout'} style={{ width: '18px', height: '18px' }} /> <Typography style={{ paddingRight: '0.5rem', color: '#ffa144', fontWeight: 'bold' }} onClick={() => { localStorage.removeItem('x-auth-token'); window.location.reload(); localStorage.removeItem('id'); }}>خروج از حساب کاربری</Typography></section>
            </>}
        </div>
    )
}
