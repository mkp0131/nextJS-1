import Head from 'next/head';

interface SeoProps {
  title: string;
}

const Seo = ({ title }: SeoProps) => {
  return (
    <Head>
      <title>{title} | NextJS</title>
    </Head>
  );
};

export default Seo;
