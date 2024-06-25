import { fetchRandomPlaceDetailed } from "../data-access/fetch-random-place";
import { redirect } from "next/navigation";

export default async function HomeWithInitialData() {
  const selected = await fetchRandomPlaceDetailed();

  // @TODO: Error handling
  redirect(`/place/${selected.fsq_id}`);
}
