import Head from "next/head";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const { PLAUSIBLE_DOMAIN } = publicRuntimeConfig;

export function Header() {
  return (
    <Head>
      <title>Blader Unlimited</title>
      <meta name="description" content="A cozy place for bladers" />
      <link rel="icon" href="/favicon.ico" />
      <script
        defer
        data-domain={PLAUSIBLE_DOMAIN}
        src="https://plausible.io/js/script.js"
      ></script>
    </Head>
  );
}
