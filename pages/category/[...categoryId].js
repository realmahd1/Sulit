import { Card, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../../Components/header/Header';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Loading from '../../Components/Loading';
import Footer from '../../Components/footer/Footer';
import useStyle from '../../Components/styles/postListStyle';
import moment from 'jalali-moment';
import Link from "next/link";
import { getCategory } from '../../Components/api/apiUsage';

export default function category({ posts }) {
  const classes = useStyle();
  const [category, setCategory] = useState([]);

  const router = useRouter()
  const { categoryId } = router.query;
  useEffect(() => {
    getCategory((isOk, data) => {
      if (!isOk)
        return data.errors.map((item) => toast.error(item.message))
      else return setCategory(data)
    });
  }, []);
  return (
    <>
      {posts === undefined ? <Loading /> : <>
        <Head>
          <title>{categoryId !== undefined && categoryId[1]}</title>
          <link rel="canonical" href={`https://sulit.ir/category/${categoryId[0]}/${categoryId[1]}`} />
        </Head>
        <Header />


        <article style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <Typography className={classes.pageTitle}>{categoryId !== undefined && categoryId[1]}</Typography>
          {category.map((item) => item.id == categoryId[0] && item.categoryDescription !== null && <section className={classes.noticeBox}><Typography style={{padding:'0.5rem'}}>⚠️ {item.categoryDescription}</Typography></section>)}

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
            {posts.length === 20 && <Link href={`/category/${categoryId[0]}/${categoryId[1]}/page/${categoryId[3] === undefined ? 1 : JSON.parse(categoryId[3]) + 1}`}><a><Typography style={{ display: 'flex', fontWeight: 'bold' }}><img src="/images/next.png" loading="lazy" alt="next" style={{ paddingLeft: '0.5rem' }} /> صفحه بعد</Typography></a></Link>}
            {categoryId[3] !== undefined && categoryId[3] !== '0' && <Link href={JSON.parse(categoryId[3]) === 1 ? `/category/${categoryId[0]}/${categoryId[1]}` : `/category/${categoryId[0]}/${categoryId[1]}/page/${JSON.parse(categoryId[3]) - 1}`}><a><Typography style={{ display: 'flex', margin: '0 6rem 0 0rem', fontWeight: 'bold' }}>صفحه قبل <img src="/images/previous.png" loading="lazy" alt="previous" style={{ paddingRight: '0.5rem' }} /></Typography></a></Link>}
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
  const { categoryId } = context.query;
  const response = await axios.get(process.env.URL + `/posts?categoryId=${JSON.parse(categoryId[0])}&page=${categoryId[3] === undefined ? 0 : JSON.parse(categoryId[3])}`);
  return {
    props: {
      posts: response.data,
    }
  }
}