export async function Place() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.FOUR_SQUARE_API_KEY || "",
    },
  };

  const result = await fetch(
    "https://api.foursquare.com/v3/places/search",
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return (
    <div>
      <h1>Place</h1>
      <p>{result && result.results[0].name}</p>
    </div>
  );
}
