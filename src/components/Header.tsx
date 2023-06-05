import Head from "next/head";
import getConfig from "next/config";

const getPlausibleDomain = (): string => {
  const { publicRuntimeConfig } = getConfig() as {
    publicRuntimeConfig: { PLAUSIBLE_DOMAIN: string };
  };
  const { PLAUSIBLE_DOMAIN: plausibleDomain } = publicRuntimeConfig;
  return plausibleDomain;
};

export function Header() {
  return (
    <Head>
      <title>Blade Spots</title>
      <meta name="description" content="A cozy place for bladers" />
      <link rel="icon" href="/favicon.ico" />
      <script
        defer
        data-domain={getPlausibleDomain()}
        src="https://plausible.io/js/script.js"
      ></script>
    </Head>
  );
}
