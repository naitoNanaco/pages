import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/feeds";
import Articles from "../components/articles";
import { GetStaticProps } from "next";
import { Button } from "@mui/material";

export default function Home({
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
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2>About</h2>
        <p>書いた記事をまとめています。</p>
      </section>
      <section>
        <h2>Articles</h2>
        <Articles postsData={allPostsData.slice(0, 10)} />
      </section>
      <Link href="/archives">
        <Button variant="text" fullWidth={true}>
          全ての記事
        </Button>
      </Link>
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
