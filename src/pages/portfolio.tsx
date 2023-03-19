import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Works from "../components/works";
import Skills from "../components/skills";
import Profile from "../components/profile";

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>Portfolio | {siteTitle}</title>
      </Head>
      <section>
        <h2>Works</h2>
        <Works />
      </section>
      <section>
        <h2>Skills</h2>
        <Skills />
      </section>
      <section>
        <h2>Profile</h2>
        <Profile />
      </section>
    </Layout>
  );
}
