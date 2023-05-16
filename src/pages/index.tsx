import { type NextPage } from "next";
import Head from "next/head";
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
        <div className="h-full w-full border-x border-slate-400 md:max-w-2xl">
          <div className="flex flex-col">
            {data?.map((spot) => (
              <div key={spot.id} className="border-b border-slate-400 p-8">
                {spot.spotName}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
