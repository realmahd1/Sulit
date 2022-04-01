import { Card, Typography } from '@material-ui/core'
import axios from 'axios'
import Head from 'next/head'
import React from 'react'
import Header from '../../Components/header/Header'
import Loading from '../../Components/Loading'
import useStyle from '../../Components/styles/postListStyle';
import { useRouter } from 'next/router';
import Footer from '../../Components/footer/Footer'
import Link from "next/link";
import moment from 'jalali-moment'

export default function posts({ posts }) {
    const classes = useStyle();

    const router = useRouter()
    const { id } = router.query
    return (
        <>
            {posts === undefined ? <Loading /> : <>
                <Head>
                    <title>{id[0] == "newPosts" ? 'تازه ترین ها🌌' : 'پربازدید ترین ها🔥'}</title>
                    <link rel="canonical" href={`https://sulit.ir/posts/${id[0]}`} />
                </Head>
                <Header />
                <article style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography className={classes.pageTitle}>{id[0] == "newPosts" ? 'تازه ترین ها 🌌' : 'پربازدید ترین ها🔥'}</Typography>
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

                    <section style={{ display: 'flex', marginTop: '2rem' }}>
                        {posts.length === 20 && <Link href={`/posts/${id[0]}/page/${id[2] === undefined ? 1 : JSON.parse(id[2]) + 1}`}><a><Typography style={{ display: 'flex', fontWeight: 'bold' }}><img src="/images/next.png" loading="lazy" alt="next" style={{ paddingLeft: '0.5rem' }} /> صفحه بعد</Typography></a></Link>}
                        {id[2] !== undefined && id[2] !== '0' && <Link href={JSON.parse(id[2]) === 1 ? `/posts/${id[0]}` : `/posts/${id[0]}/page/${JSON.parse(id[2]) - 1}`}><a><Typography style={{ display: 'flex', margin: '0 6rem 0 0rem', fontWeight: 'bold' }}>صفحه قبل <img src="/images/previous.png" loading="lazy" alt="previous" style={{ paddingRight: '0.5rem' }} /></Typography></a></Link>}
                    </section>
                    {posts.length === 0 && <div style={{ overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img src={'/images/notFound.svg'} alt="not found" className={classes.postNotFoundImage} /></div>}
                    {posts.length === 0 && <Typography style={{ fontWeight: 'bold' }}>متاسفانه چیزی یافت نشد ! دوباره تلاش کنید !</Typography>}
                </article>
                <Footer />
            </>}
        </>
    )
}
export async function getServerSideProps(context) {
    const { id } = context.query;
    const response = id[0] == 'newPosts' ? await axios.get(process.env.URL + `/posts?page=${id[2] === undefined ? 0 : JSON.parse(id[2])}`) : await axios.get(process.env.URL + `/posts?filter=view&page=${id[2] === undefined ? 0 : JSON.parse(id[2])}`);
    return {
        props: {
            posts: response.data,
        }
    }
}