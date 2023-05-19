import { type NextPage } from "next";
import { Header } from "~/components/Header";
// import { NavigationBar } from "~/components/NavigationBar";
import { SpotList } from "~/components/SpotList";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data, isLoading } = api.spots.getAll.useQuery();

  if (isLoading) return <div>Loading spots ⏳</div>;

  if (!data) return <div>No spots yet 😭</div>;

  return (
    <main>
      <Header />
      {/* <NavigationBar /> */}
      <SpotList spots={data} />
    </main>
  );
};

export default Home;
