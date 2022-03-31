import Link from 'next/link';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import ArrowIcon from '../../components/ArrowIcon';
import { globalData } from '../../utils/global-data';
import SEO from '../../components/SEO';
import { useRouter } from 'next/router';
import moment from "jalali-moment";
import axios from 'axios';
import Loading from './../../components/Loading';

export default function Posts({ posts }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    
    <Layout>
      <SEO title={globalData().name} description={globalData().blogDescription} />
      <Header name={globalData().name} />
      {posts === undefined ? <Loading /> :
        <main className="w-full">
          <div className="w-full">
            {posts.map((post) => (
              <section
                key={post._id}
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
                    <ArrowIcon className="mt-2 float-left rotate-180 -ml-12" />
                  </a>
                </Link>
              </section>
            ))}
          </div>
          {posts.length === 0 && <div className='w-full flex justify-center overflow-hidden' ><img src={'/images/notFound.svg'} alt="not found" /></div>}
          {posts.length === 0 && <p className='font-bold text-center'>متاسفانه چیزی یافت نشد ! دوباره تلاش کنید !</p>}
          <section className='flex justify-between mt-4'>
            <Link href={`/posts/${JSON.parse(id[0]) + 1}`}>
              <a>
                <ArrowIcon className={`mt-4 w-[32px] h-[32px] ${posts.length === 20 ? 'visible' : 'opacity-0'}`} />
              </a>
            </Link>
            <Link href={`/posts/${JSON.parse(id[0]) - 1}`}>
              <a>
                <ArrowIcon className={`mt-4 rotate-180  w-[32px] h-[32px] ${(id[0] !== undefined && id[0] !== '0') ? 'visible' : 'opacity-0'}`} />
              </a>
            </Link>
          </section>
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

export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await axios.get(process.env.URL + `/posts?page=${id[0] === undefined ? 0 : JSON.parse(id[0])}`);
  return {
    props: {
      posts: response.data,
    }
  }
}