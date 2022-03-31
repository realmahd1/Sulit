import { globalData } from '../../utils/global-data';
import axios from 'axios';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';
import parse from "html-react-parser";
import Prism from "prismjs";
import { useEffect } from 'react';
import Loading from './../../components/Loading';

export default function PostPage({post}) {
  useEffect(() => {
    Prism.highlightAll();
  }, [post]);

  return (
    <Layout>
      <SEO
        title={`${post.header} - ${globalData().name}`}
        description={post.shortExplanation}
      />
      <Header name={globalData().name} />
      <hr className='w-[75%] border-gray-400 -mt-6 mb-8'/>
      {post === undefined ? <Loading /> :
      <article className="px-6 md:px-0">
        <header>
          <h1 className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 text-center mb-12">
            {post.header}
          </h1>
        </header>
        <main className='shadow-2xl p-4'>
          <article className="prose dark:prose-dark">
            {parse(post.text)}
          </article>
        </main>
      {/*   <div className="grid md:grid-cols-2 lg:-mx-24 mt-12">
          {prevPost && (
            <Link href={`/posts/${prevPost.slug}`}>
              <a className="py-8 px-10 text-center md:text-right first:rounded-t-lg md:first:rounded-tr-none md:first:rounded-l-lg last:rounded-r-lg first last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-t md:border-r-0 md:last:border-r md:last:rounded-r-none flex flex-col">
                <p className="uppercase text-gray-500 mb-4 dark:text-white dark:opacity-60">
                  Previous
                </p>
                <h4 className="text-2xl text-gray-700 mb-6 dark:text-white">
                  {prevPost.title}
                </h4>
                <ArrowIcon className="transform rotate-180 mx-auto md:mr-0 mt-auto" />
              </a>
            </Link>
          )}
          {nextPost && (
            <Link href={`/posts/${nextPost.slug}`}>
              <a className="py-8 px-10 text-center md:text-left md:first:rounded-t-lg last:rounded-b-lg first:rounded-l-lg md:last:rounded-bl-none md:last:rounded-r-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-t-0 first:border-t first:rounded-t-lg md:border-t border-b-0 last:border-b flex flex-col">
                <p className="uppercase text-gray-500 mb-4 dark:text-white dark:opacity-60">
                  Next
                </p>
                <h4 className="text-2xl text-gray-700 mb-6 dark:text-white">
                  {nextPost.title}
                </h4>
                <ArrowIcon className="mt-auto mx-auto md:ml-0" />
              </a>
            </Link>
          )}
        </div> */}
      </article>}
      <Footer copyrightText={globalData().footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await axios.get(process.env.URL + "/post/" + id[0]);
  return {
    props: {
      post: response.data,
    }
  }
}
