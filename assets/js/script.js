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

document.addEventListener("DOMContentLoaded", async () => {
  // Get data and load JSON
  const getAllFoods = await getData();
  let selectedFoods = [];

  // Insulin factors for each meal type
  const insulinLevels = {
    breakfast: 1.4,
    "second breakfast": 1.3,
    lunch: 0.8,
    "afternoon snack": 0.8,
    dinner: 1.2,
  };

  // Get DOM elements
  const foodSearchInput = document.getElementById("foodSearch");
  const foodDropdown = document.getElementById("foodDropdown");

  // Food search function
  function searchFoods(term) {
    return getAllFoods.filter((food) =>
      food.name.toLowerCase().includes(term.toLowerCase())
    );
  }

  // Show user input
  foodSearchInput.addEventListener("input", function () {
    const term = this.value.trim();
    foodDropdown.innerHTML = ""; // Remove previous results

    if (term.length === 0) {
      foodDropdown.classList.remove("show");
      return;
    }

    const matchFound = searchFoods(term);

    if (matchFound.length > 0) {
      // Only show the first match
      const food = matchFound[0];
      const option = document.createElement("div");
      option.classList.add("dropdown-item");
      option.textContent = food.name;
      option.addEventListener("click", () => {
        addFoodToMeal(food);
        foodSearchInput.value = "";
        foodDropdown.classList.remove("show");
      });
      foodDropdown.appendChild(option);

      foodDropdown.classList.add("show");
    } else {
      foodDropdown.classList.remove("show");
    }
  });

  // Add food to meal
  function addFoodToMeal(food) {
    // Remove placeholder
    const placeholder = document.querySelector(
      "#selectedFoodsList .text-placeholder"
    );
    if (placeholder) {
      placeholder.textContent = "You have selected the following foods:";
    }

    // Add food to list
    selectedFoods.push(food);

    const list = document.getElementById("selectedFoodsList");
    const item = document.createElement("div");
    item.textContent = `${food.name} - ${food.carbs}g carbs`;
    list.appendChild(item);

    calculateTotals();
  }

  // Calculate totals
  function calculateTotals() {
    const mealType = document.getElementById("mealType").value;
    const insulinSensitivity = insulinLevels[mealType] || 1.0; // 1.0 as default

    let totalCarbs = selectedFoods.reduce((sum, food) => sum + food.carbs, 0);
    const mealGI = calculateMealGI(selectedFoods);

    const carbCount = totalCarbs / 10;
    const insulinNeeded = (insulinSensitivity * carbCount).toFixed(2);

    // Display results
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
      <p>Total Carbs: ${totalCarbs}g</p>
      <p>Meal Glycaemic Index: ${mealGI.toFixed(1)}</p>
      <p>Insulin Needed: ${insulinNeeded} units (${mealType} factor: ${insulinSensitivity})</p>
    `;
  }

  // Event listeners
  document.getElementById("addFood").addEventListener("click", () => {
    const searchInput = foodSearchInput.value.trim();
    if (!searchInput) return;

    const match = searchFoods(searchInput);
    if (match.length > 0) {
      addFoodToMeal(match[0]);
      foodSearchInput.value = "";
      foodDropdown.classList.remove("show");
    } else {
      Swal.fire({ text: "Food not found" });
    }
  });

  // Meal type change
  document
    .getElementById("mealType")
    .addEventListener("change", calculateTotals);

  // Clear All button
  document
    .getElementById("clearSelection")
    .addEventListener("click", function () {
      // Clear selected foods
      selectedFoods = [];

      // Clear food list
      const list = document.getElementById("selectedFoodsList");
      list.innerHTML = '<p class="text-placeholder">No foods selected</p>';

      // Reset totals
      calculateTotals();
    });
});

// Calculate total GI of each meal
function calculateMealGI(foodList) {
  if (foodList.length === 0) return 0;

  let totalWeight = 0;
  let totalCarbs = 0;

  for (food of foodList) {
    totalWeight += food.glycemicIndex * food.carbs;
    totalCarbs += food.carbs;
  }

  return totalCarbs > 0 ? totalWeight / totalCarbs : 0;
}
