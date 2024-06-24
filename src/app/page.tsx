import { fetchRandomPlace } from "../data-access/fetch-random-place";
import { Home } from "./home";

export default async function HomeWithInitialData() {
  const selected = await fetchRandomPlace();

  return <Home initialData={selected} />;
}
