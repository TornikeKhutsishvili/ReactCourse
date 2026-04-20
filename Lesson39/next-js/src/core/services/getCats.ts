export async function fetchCats() {
  const BaseUrl = "https://api.thecatapi.com/v1";

  try {
    const response = await fetch(
      `${BaseUrl}/images/search?limit=30&api_key=${process.env.CAT_API_KEY}`,
      {
        method: "GET",
        next: { revalidate: 30 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch cats");
    }

    return response.json();

  } catch (error) {
    console.error("Error fetching cats:", error);
    return [];
  }
}