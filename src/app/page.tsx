import { fetchRandomPlaceId } from "../data-access/fetch-random-place";
import { redirect } from "next/navigation";

export default async function HomeWithInitialData() {
  const randomPlaceId = await fetchRandomPlaceId();
  redirect(`/place/${randomPlaceId}`);
}
