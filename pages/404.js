import Head from 'next/head'
import React from 'react'
import Link from "next/link";
import Layout from '../components/Layout';
export default function Page404() {
    return (
        <Layout>
            <div className='fixed top-[50%] left-[50%] flex flex-col items-center' style={{ transform: 'translate(-50%, -50%)' }}>
                <Head>
                    <title>یافت نشد</title>
                </Head>
                <div className='overflow-hidden w-full flex items-center justify-center'><img src={'/images/404.svg'} alt="404" /></div>
                <p >صفحه مورد نظر یافت نشد ! دوباره تلاش کنید !</p>
                <Link href="/"><a><p className='font-bold text-[#ffa144] text-xl'>خانه</p></a></Link>
            </div>
        </Layout>
    )
}
