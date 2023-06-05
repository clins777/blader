import { type NextPage } from "next";
import { Header } from "~/components/Header";
import { Placeholder } from "~/components/Placeholder";
// import { NavigationBar } from "~/components/NavigationBar";
import { SpotList } from "~/components/SpotList";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data, isLoading } = api.spots.getAll.useQuery();

  if (isLoading) return <Placeholder message={"Loading spots ⏳"} />;

  if (!data) return <Placeholder message={"No spots yet 😭"} />;

  return (
    <main>
      <Header />
      {/* <NavigationBar /> */}
      <SpotList spots={data} />
    </main>
  );
};

export default Home;
