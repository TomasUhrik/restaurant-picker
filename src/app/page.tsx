import { fetchRandomPlaceId } from "../data-access/fetch-random-place";
import { redirect } from "next/navigation";

export default async function HomeWithInitialData() {
  const { data: randomPlaceId, status: requestStatus } =
    await fetchRandomPlaceId();

  if (requestStatus === "error") {
    return redirect("/error");
  }

  redirect(`/place/${randomPlaceId}`);
}
