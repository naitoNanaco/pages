import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import { Button, Container, SvgIcon, IconButton } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import Twitter from "../../public/images/twitter.svg";
import Github from "../../public/images/github.svg";

const name = "ないとう";
export const siteTitle = "#ITがんばる";

function GithubIcon(props) {
  return (
    <IconButton href="https://github.com/naitoNanaco">
      <SvgIcon {...props}>
        <Github />
      </SvgIcon>
    </IconButton>
  );
}

function TwitterIcon(props) {
  return (
    <IconButton href="https://twitter.com/na_it_o">
      <SvgIcon {...props}>
        <Twitter />
      </SvgIcon>
    </IconButton>
  );
}

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <StyledEngineProvider injectFirst>
      <Container className={styles.container}>
        <Head>
          <meta
            name="description"
            content="個人で書いた記事をまとめています。"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/Do%20**IT**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&widths=auto`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <Container className={styles.headercontainer}>
          <header className={styles.header}>
            <h1 className={styles.headertitle}>
              <Link href="/">
                <a className={styles.title}>{siteTitle}</a>
              </Link>
            </h1>
          </header>
        </Container>
        <Container className={styles.sidecontainer}>
          <Container className={styles.profilecontainer}>
            <Container className={styles.profileimgcontainer}>
              <Image
                className={utilStyles.borderCircle}
                priority
                src="/images/profile.svg"
                height={72}
                width={72}
                alt={name}
              />
            </Container>
            <Container className={styles.profiledesccontainer}>
              <h1 className={styles.name}>{name}</h1>
            </Container>
            <Container className={styles.profilelinkcontainer}>
              <Link href="/portfolio">
                <Button href="#text-buttons">Portfolio</Button>
              </Link>
            </Container>
            <Container className={styles.profilelinkcontainer}>
              <TwitterIcon />
              <GithubIcon />
            </Container>
          </Container>
        </Container>
        <Container className={styles.maincontainer}>
          <main className={styles.main}>
            <article className={styles.articles}>{children}</article>
          </main>
        </Container>
        <Container className={styles.footercontainer}>
          <footer className={styles.footer}>
            <Link href="/">
              <a className={styles.title}>{siteTitle}</a>
            </Link>
          </footer>
        </Container>
      </Container>
    </StyledEngineProvider>
  );
}
