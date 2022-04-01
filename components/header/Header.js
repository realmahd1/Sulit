import { Button, Divider, Input, Popover, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify';
import { getCategory, userInfo } from '../api/apiUsage';
import MobileMenu from '../mobileMenu/MobileMenu';
import useStyle from './style';
import Gravatar from 'react-gravatar';
import Router from 'next/router';

export default function Header() {
    const classes = useStyle();
    const [category, setCategory] = useState([]);
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState();
    const [searchInput, setSearchInput] = useState(null);
    const closeRef = useRef();
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    useEffect(() => {
        if (localStorage.getItem('x-auth-token') !== null)
            return setIsLogin(true);
    }, [])
    useEffect(() => {
        if (isLogin === true) {
            userInfo((isOk, data) => {
                if (!isOk)
                    return data.errors.map((item) => toast.error(item.message))
                else return setUser(data)
            });
        }
    }, [isLogin])

    useEffect(() => {
        getCategory((isOk, data) => {
            if (!isOk)
                return data.errors.map((item) => toast.error(item.message))
            else return setCategory(data)
        });
    }, []);
    function openSearch() {
        document.getElementById("popup").style.display = "block";
    }

    function closeSearch() {
        document.getElementById("popup").style.display = "none";
    }
    const screenTheme = useTheme();

    const isTabletSize = useMediaQuery(screenTheme.breakpoints.down('sm'));
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const submitWithEnter = (e) => {
        if (searchInput !== '' && searchInput !== null && e.key === 'Enter') {
            closeRef.current.click();
            Router.push({
                pathname: '/search',
                query: { q: encodeURI(searchInput) },
            })
        }
    }
    const search = () => {
        if (searchInput !== '' && searchInput !== null) {
            closeRef.current.click();
            Router.push({
                pathname: '/search',
                query: { q: encodeURI(searchInput) },
            })
        }
    }
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                {!isTabletSize && <section style={{ display: 'flex', alignItems: 'center', marginTop: '-4rem' }}>
                    <Link href={'/'}><a>
                        <img src={'/images/logo.png'} alt="logo" style={{ width: '12.5rem', height: '12.5rem' }} />
                    </a></Link>
                    <nav className={classes.navParent}><ul><li><Link href={`/posts/mostViewPosts`}><a><Typography className={classes.navItem}>پربازدیدترین ها🔥</Typography></a></Link></li>{category.map((item) => item.id % 2 === 0 && <li key={item.id}><Link href={`/category/${item.id}/${item.categoryName}`}><a><Typography className={classes.navItem}>{item.categoryName}</Typography></a></Link></li>)}<li><Link href={'/contact-us'}><a><Typography className={classes.navItem}>تماس با سولیت🙃</Typography></a></Link></li></ul></nav>

                    <nav style={{ alignItems: 'center',marginTop:'1rem' }}>
                        {!isLogin && <Link href={'/auth'}>
                            <a>
                                <Button variant="outlined" className={classes.authBtn}>
                                    <p style={{ fontFamily: 'IRANSansX', fontSize: '16px' }}>ورود | ثبت نام</p>
                                </Button>
                            </a>
                        </Link>}
                        {isLogin && <img src={'/images/add-user.svg'} alt={"user"} loading="lazy" onClick={handleClick} className={classes.userIcon} />}
                        <img src={'/images/magnifying-glass.svg'} onClick={openSearch} style={{ width: '20px' }} loading="lazy" alt={"search"} />
                    </nav>
                </section>}
                {isTabletSize && <MobileMenu />}
            </div>

            <div id="popup" className={classes.overlay}>
                <span className={classes.closebtn} ref={closeRef} onClick={closeSearch} title="Close">×</span>
                <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <div className={classes.overlaycontent}>
                        <Input variant="filled" name="search" value={searchInput} type="search" onChange={(event) => setSearchInput(event.target.value)} onKeyDown={submitWithEnter} placeholder="جستجو کنید ..." className={classes.searchInput} />
                        <img src={'/images/magnifying-glassDark.svg'} className={classes.searchIcon} onClick={search} loading="lazy" alt={"search"} />
                    </div>
                </section>
            </div>

            <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} transformOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <div className={classes.headerProfile}>
                    {user === undefined ? '' : user.avatar == 'false' ? <Gravatar email={user.email} rating="g" className={classes.profileImg} default={'identicon'} /> : <img src={user.avatar} alt={user.name} loading="lazy" className={classes.profileImg} />}
                    <Typography>{user === undefined ? '' : user.name}</Typography>
                    <Divider className={classes.divider} />
                    <section style={{ display: 'flex', alignItems: 'center', marginTop: '2rem' }}><img src={'/images/settings.svg'} alt={'settings'} style={{ width: '18px', height: '18px' }} /> <Link href={'/setting'}><a><Typography style={{ paddingRight: '0.5rem' }}>تنظیمات</Typography></a></Link></section>
                    <section style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}><img src={'/images/bookmark.png'} alt={'bookmark'} style={{ width: '18px', height: '18px' }} /> <Link href={'/user-saved-posts'}><a><Typography style={{ paddingRight: '0.5rem' }}>پست های ذخیره شده</Typography></a></Link></section>
                    <section style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}><img src={'/images/logout.png'} alt={'logout'} style={{ width: '18px', height: '18px' }} /> <Typography style={{ paddingRight: '0.5rem', color: '#ffa144', fontWeight: 'bold' }} onClick={() => { localStorage.removeItem('x-auth-token'); window.location.reload(); localStorage.removeItem('id'); }}>خروج از حساب کاربری</Typography></section>
                </div>
            </Popover>
        </header>
    )
}