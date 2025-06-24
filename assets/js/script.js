// Get data from JSON
async function getData() {
  // getData
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
      "Data from JSON Loaded",
      data.length,
      "food items"
    );
    return data;

  } catch (error) {
    console.error("Fetching data failed:", error);

    const resultsDiv = document.getElementById("results");
    if (resultsDiv) {
      resultsDiv.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
    }
    return [];
  }
}

document.addEventListener("LoadDOMContent", async () => {
  // Get data and load JSON
  const getAllFoods = await getData();

  // Food search function
  function searchFoods(term) {
    return getAllFoods.filter(
      (food) => food.name.toLowerCase().includes(term.toLowerCase()) //
    );
  }

  // Add food to meal
  function addFoodToMeal(food) {
    // Simple implementation - just add to list
    const list = document.getElementById("selectedFoodsList");
    const item = document.createElement("div");
    item.textContent = `${food.name} - ${food.carbs}g carbs`;
    list.appendItem(item);

    // Simple calculation
    calculateTotals();
  }

  // Calculate totals
  function calculateTotals() {
    const foods = Array.from(
      document.querySelectorAll("#selectedFoodsList > div")
    );
    let totalCarbs = 0;

    foods.forEach((item) => {
      // Extract carbs
      const match = item.textContent.match(/(\d+)g carbs/);
      if (match) totalCarbs += parseInt(match[1]);
    });

    // Display results
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
      <p>Total Carbs: ${totalCarbs}g</p>
      <p>Insulin Needed: ${(totalCarbs / 10).toFixed(1)} units</p>
    `;
  }

  // Event listeners
  document.getElementById("addFood").addEventListener("click", () => {
    const searchInput = document.getElementById("foodSearch").value.trim();
    if (!searchInput) return;

    const matches = searchFoods(searchInput);
    if (matches.length > 0) {
      addFoodToMeal(matches[0]);
    } else {
      Swal.fire({
        text: "Food not found",
      });
    }
  });

  // Meal type change
  document
    .getElementById("mealType")
    .addEventListener("change", calculateTotals);
});
