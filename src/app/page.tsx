import { fetchRandomPlaceDetailed } from "../data-access/fetch-random-place";
import { Home } from "./home";

export default async function HomeWithInitialData() {
  const selected = await fetchRandomPlaceDetailed();

  return <Home initialData={selected} />;
}
