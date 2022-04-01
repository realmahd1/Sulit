import { Card, Typography } from '@material-ui/core';
import axios from 'axios';
import Head from 'next/head';
import React from 'react';
import Loading from '../Components/Loading';
import Header from '../Components/header/Header';
import Link from "next/link";
import moment from 'jalali-moment'
import Footer from '../Components/footer/Footer';
import useStyle from '../Components/styles/postListStyle';
import { useRouter } from 'next/router';

export default function search({ posts }) {
    const classes = useStyle();
    const router = useRouter()

    return (
        <>
            {posts === undefined ? <Loading /> : <>
                <Head>
                    <title> جستجو برای {decodeURI(router.query.q)}</title>
                </Head>
                <Header />

                <article style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography className={classes.pageTitle}></Typography>
                    {posts.map((item) => <Card key={item._id} className={classes.postBox}>
                        <section className={classes.postImageParent}>
                            <Link href={`/post/${item._id}/${item.header}`}>
                                <a>
                                    <div style={{ background: `url(${item.image}) no-repeat center center`, backgroundSize: 'cover', height: '100%', width: '100%' }} ></div>
                                </a></Link>
                        </section>

                        <section className={classes.textParent}>
                            <Link href={`/post/${item._id}/${item.header}`}>
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
                    {posts.length === 0 && <div style={{ overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img src={'/images/notFound.svg'} alt="not found" className={classes.postNotFoundImage} /></div>}
                    {posts.length === 0 && <Typography className={classes.postNotFoundText}>متاسفانه چیزی یافت نشد ! دوباره تلاش کنید !</Typography>}
                </article>
                <Footer />
            </>}
        </>
    )
}

export async function getServerSideProps(context) {
    try {
        const searchResult = await axios.get(process.env.URL +`/posts?search=${context.query.q}`)
        return {
            props: {
                posts: searchResult.data,
            }
        }
    } catch (error) {
        return {
            props: {
                error: error.data,
            },
        };
    }
}