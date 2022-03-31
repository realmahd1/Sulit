import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="سولیت | Sulit" />
      <meta property="og:locale" content="ir_FA" />
      <meta name="googlebot" content="index, follow" />
      <meta name="googlebot-news" content="index, follow" />
      <meta name="slurp" content="index, follow" />
      <meta name="msnbot" content="index, follow" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" sizes="57x57" href="/images/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/images/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/images/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/images/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/images/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/images/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/images/ms-icon-144x144.png" />
      <meta name="keywords" content="HTML, CSS, JavaScript, برنامه نویسی ,جاوا اسکریپت, جاوا اسکریپت مقدماتی,جاوا اسکریپت مقدماتی,You Don't Know Js" />
    </Head>
  );
}
