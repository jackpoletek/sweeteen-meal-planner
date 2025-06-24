// get data from JSON
async function getData() { // getData
  try {
    const response = await fetch("assets/data/food_db.json");

    if (!response.ok) {
      throw new Error(
        `Failed to load JSON: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log(data);

    console.log(
      "JSON connection successful! Loaded",
      data.length,
      "food items"
    );
    return data;
  } catch (error) {
    console.error("JSON connection failed:", error);

    const resultsDiv = document.getElementById("results");
    if (resultsDiv) {
      resultsDiv.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
    }
    return [];
  }
}