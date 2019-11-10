import App from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { DefaultSeo } from "next-seo";

const DEFAULT_SEO = {
  title: "Big Bank Sports",
  description: "Awesome Sports Site",
  openGraph: {
    type: "website",
    locale: "en",
    title: "Blog Tutorial website",
    description: "Awesome Sports Site",
    site_name: "BlogTutorial"
  }
};

export default class CustomApp extends App {
  componentDidMount() {
    Router.events.on("routeChangeStart", () => {
      NProgress.start();
    });

    Router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });
    Router.events.on("routeChangeError", () => {
      NProgress.done();
    });
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error);
    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <DefaultSeo {...DEFAULT_SEO} />
        <Component {...pageProps} />;
      </>
    );
  }
}
