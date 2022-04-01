import { Card, Typography } from '@material-ui/core';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { userInfo } from '../Components/api/apiUsage';
import Footer from '../Components/footer/Footer';
import Loading from '../Components/Loading';
import useStyle from '../Components/styles/postListStyle';
import Header from '../Components/header/Header';
import moment from 'jalali-moment';

export default function Usersavedposts() {
    const classes = useStyle();
    const [user, setUser] = useState('');
    const router = useRouter();

    const [isLogin, setIsLogin] = useState(false);


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
                }
            });
        }
    }, [isLogin]);
    return (
        <>
            {user === '' ? <Loading /> : <>
                <Head>
                    <title>پست های ذخیره شده</title>
                </Head>
                <Header />

                <article style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography className={classes.pageTitle}>پست های ذخیره شده</Typography>
                    {user.savePost.map((item) => <Card key={item._id} className={classes.postBox}>
                        <section className={classes.postImageParent}>
                            <Link href={`/post/${item.postId}/${item.header}`}>
                                <a>
                                    <div style={{ background: `url(${item.image}) no-repeat center center`, backgroundSize: 'cover', height: '100%', width: '100%' }} ></div>
                                </a></Link>
                        </section>

                        <section className={classes.textParent}>
                            <Link href={`/post/${item.postId}/${item.header}`}>
                                <a>
                                    <Typography variant="h1" className={classes.mostViewPostHeader}><strong>{item.header}</strong></Typography>
                                    <Typography variant="h2" className={classes.mostViewShortExplanation}>{item.shortExplanation}</Typography>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <section className={classes.mostViewcategoryParent}>
                                            <Typography className={classes.category}>{item.sourceTitle}</Typography>
                                        </section>
                                        <section className={classes.mostViewDate}>
                                            <Typography className={classes.postDate}>{moment(item.createdAt).locale("fa").format("YYYY/MM/DD")}</Typography>
                                            <img src={'/images/clock.svg'} className={classes.dateIcon} />
                                        </section>
                                    </div>
                                </a></Link>
                        </section>
                    </Card>)}
                    {user.savePost.length === 0 && <div style={{ overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img src={'/images/notFound.svg'} alt="not found" className={classes.postNotFoundImage} /></div>}
                    {user.savePost.length === 0 && <Typography className={classes.postNotFoundText}>متاسفانه چیزی یافت نشد !</Typography>}
                </article>
                <Footer />
            </>}
        </>
    )
}
