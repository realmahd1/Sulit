import { Input, InputAdornment, Typography } from '@material-ui/core'
import Head from 'next/head'
import React, { useState } from 'react'
import Link from "next/link";
import Router from 'next/router';
import useStyle from '../Components/header/style';
export default function Page404() {
    const classes = useStyle();
    const [searchInput, setSearchInput] = useState(null);
    const submitWithEnter = (e) => {
        if (searchInput !== '' && searchInput !== null && e.key === 'Enter') {
            Router.push({
                pathname: '/search',
                query: { q: encodeURI(searchInput) },
            })
        }
    }

    return (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Head>
                <title>یافت نشد</title>
            </Head>
            <div style={{overflow: 'hidden',width:'100%',display: 'flex',justifyContent: 'center',alignItems: 'center'}}><img src={'/images/404.svg'} alt="404" className={classes.notFoundImage} /></div>
            <Typography className={classes.notFoundText}>صفحه مورد نظر یافت نشد ! دوباره تلاش کنید !</Typography>
            <Input type="search" onChange={(event) => setSearchInput(event.target.value)} onKeyDown={submitWithEnter} variant="filled" placeholder="جستجو کنید"
                startAdornment={<InputAdornment position="start">{<img src={'/images/magnifying-glass.svg'} loading="lazy" alt={"search"} style={{ padding: '0 0 0 10px', height: 'auto', width: '30px' }} />}</InputAdornment>} className={classes.input404}
            />
            <Link href="/"><a><Typography style={{ color: '#ffa144', fontWeight: 'bold', fontSize: '20px' }}>خانه</Typography></a></Link>
        </div>
    )
}
