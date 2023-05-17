import { type NextPage } from "next";
import { Header } from "~/components/Header";
import { NavigationBar } from "~/components/NavigationBar";
import { SpotList } from "~/components/SpotList";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data, isLoading } = api.spots.getAll.useQuery();

  if (isLoading) return <div>Loading spots ⏳</div>;

  if (!data) return <div>No spots yet 😭</div>;

  return (
    <main className="flex h-screen justify-center">
      <Header />
      <div className="h-full w-full border-x border-slate-400 md:max-w-5xl">
        <NavigationBar />
        <SpotList spots={data} />
      </div>
    </main>
  );
};

export default Home;
