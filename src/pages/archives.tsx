import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/feeds";
import Articles from "../components/articles";
import { GetStaticProps } from "next";

export default function Archives({
  allPostsData,
}: {
  allPostsData: {
    title: string;
    link: string;
    date: string;
    description: string;
    source: string;
  }[];
}) {
  return (
    <Layout>
      <Head>
        <title>Archives | {siteTitle}</title>
      </Head>
      <section>
        <h2>Articles</h2>
        <Articles postsData={allPostsData} />
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
