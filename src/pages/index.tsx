import { type NextPage } from "next";
import Head from "next/head";
import { SpotCard } from "~/components/SpotCard";
import { SpotList } from "~/components/SpotList";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data, isLoading } = api.spots.getAll.useQuery();

  if (isLoading) return <div>Loading spots ⏳</div>;

  if (!data) return <div>No spots yet 😭</div>;

  return (
    <>
      <Head>
        <title>Blader Unlimited</title>
        <meta name="description" content="A cozy place for bladers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen justify-center">
        <div className="h-full w-full border-x border-slate-400 md:max-w-5xl">
          <div className="flex justify-center border-y border-slate-400 py-10">
            <h1 className="text-2xl">🛼 Tokyo Blading Spots 🛼</h1>
          </div>
          <SpotList spots={data} />
        </div>
      </main>
    </>
  );
};

export default Home;
