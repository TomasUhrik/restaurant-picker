import { COGENT_LABS_LL } from "@/consts/map";
import { Place4SDetailed } from "@/data-access/fetch-random-place";

const NO_STORE = "no-store";

export async function GET(request: Request, response: Response) {
  const fields = ["fsq_id", "description", "photos", "geocodes", "name"];

  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const queryParams = new URLSearchParams({
    ll: COGENT_LABS_LL,
    radius: "1000",
    fields: fields.join(","),
    query: query || "",
  }).toString();

  const result: Array<Place4SDetailed> = await fetch(
    "https://api.foursquare.com/v3/places/search?" + queryParams,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: process.env.FOUR_SQUARE_API_KEY || "",
      },
      cache: NO_STORE,
    }
  )
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((err) => {
      console.log("error happened in fetchRandomPlace:");
      console.error(err);
      throw err;
    });

  return Response.json({ data: result });
}
