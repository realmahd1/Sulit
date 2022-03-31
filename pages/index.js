import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { globalData } from '../utils/global-data';
import SEO from '../components/SEO';
import moment from "jalali-moment";
import axios from 'axios';
import Loading from './../components/Loading';

export default function Index({ posts }) {

  return (
    <Layout>
      <SEO title={globalData().name} description={globalData().blogDescription} />
      <Header name={globalData().name} />
      {posts === undefined ? <Loading /> :
      <main className="w-full">
        <div className="w-full">
          {posts.map((post) => (
            <section key={post._id}
              className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link href={`/post/${post._id}/${post.header}`}>
                <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                  {post.createdAt && (
                    <p className="ssm:text-lg text-sm mb-3 font-bold opacity-60">
                      {moment(post.createdAt).locale("fa").format("YYYY/MM/DD")}
                    </p>
                  )}
                  <h2 className="ssm:text-xl text-base md:text-2xl">{post.header}</h2>
                  {post.shortExplanation && (
                    <p className="mt-3 text-base ssm:text-lg opacity-60">
                      {post.shortExplanation}
                    </p>
                  )}
                  <ArrowIcon className="-mt-2 float-left rotate-180 -ml-4" />
                </a>
              </Link>
            </section>
          ))}
          {posts.length === 20 && <Link href='/posts/1'>
            <a>
              <ArrowIcon className='mt-4 w-[32px] h-[32px]' />
            </a>
          </Link>}
        </div>
      </main>}
      <Footer />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export async function getServerSideProps() {
  const posts = await axios.get(process.env.URL + "/posts");

  return {
    props: {
      posts: posts.data
    }
  }
};