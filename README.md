# Sweeteen Meal Planner

[View Repository in GitHub Pages](https://github.com/jackpoletek/sweeteen-meal-planner) <br>
[View Website](https://jackpoletek.github.io/sweeteen-meal-planner/)

Sweeteen Meal Planner is a diabetes management web app designed for busy teens with Type 1 diabetes. It simplifies carb counting and insulin dose calculation by providing instant meal analysis based on carb content, glycaemic index, and time-of-day insulin resistance factors.

## Business & Customer Goals
### Business Goals:
- Reduce barriers to insulin management for young diabetics
- Establish as essential daily tool for carb counting
- Drive user retention through intuitive UX
- Position for future integration with health platforms

### Customer Goals:
- Eliminate manual carb calculations
- Understand glycemic impact instantly
- Avoid decision fatigue with curated food database
- Track insulin needs across 5 daily meals

## UX
### Target Customer:
- Teens (13-19) with Type 1 diabetes
- Tech-savvy but time-constrained users
- Individuals struggling with consistent carb counting
- Non-medical users needing simplified health tools

### Client Stories:
- As a student, I want to quickly log lunch carbs between classes
- As an athlete, I need accurate insulin calculations for pre-game snacks
- As a newly diagnosed teen, I want to understand glycemic impact
- As a forgetful user, I need to see my selected foods at a glance
- As an overwhelmed user, I want one-screen meal analysis

## Features

### Meal Information
Breakfast | Second Breakfast | Lunch | Afternoon Snack | Dinner
Each meal applies unique insulin resistance factors (e.g. Breakfast: 1.4x)

### Food Selection
- Search 100+ foods from local JSON database
- Filter by carb count/GI index
- Real-time typeahead suggestions

### Selected Foods
- Visual list of chosen foods
- Individual carb counts + GI classification
- Remove/edit functionality

### Meal Calculation
Total Carbs: 47g
Meal GI: 62 (Medium Impact)
Insulin Needed: 4.82 units 
  = (47g ÷ 10) × 1.4 breakfast factor

### Glycaemic Index Guide
Color-coded GI indicators:
█ Low GI (≤55) - Minimal impact
█ Medium GI (56-69) - Moderate impact
█ High GI (≥70) - Rapid blood sugar rise

## Future Features
- Mobile App Integration - Sync with Apple Health/Google Fit
- Bolus Calculator - Factor in current blood glucose levels
- Meal History - Track trends over time
- Social Sharing - Safe recipe exchange between users

## Technologies Used
Frontend: HTML5, CSS3, Bootstrap 5
Logic: Vanilla JavaScript
Data: Local JSON food database
UI: SweetAlert (Swal) for modals
APIs: Nutritionix integration (future)


## Wireframes - Figma()

#### Desktop
- large screen_1039px <br>
()

#### Tablet
- tablet_768px <br>
()

#### Mobile
- mobile_398px <br>
)

[View all wireframes](https://github.com/jackpoletek/)



## Testing & Bug Fixes

Fixed issues during development: <br>

1. Undefined foods error <br>
SOLUTION: Removed deprecated array iteration

2. Placeholder persistence bug <br>
SOLUTION: Added DOM check before resetting:
  if (placeholder) placeholder.textContent = "Selected foods:";

3. Totals not resetting <br>
SOLUTION: Added calculateTotals() in clearSelection

4. Dropdown display issues <br>
SOLUTION: CSS overhaul:
  #foodDropdown {
    position: fixed;
    width: 100%;
    z-index: 10000;
    max-height: 2.5rem; /* Single-item view */
  }


### Validation
- [W3C HTML Validator](https://validator.w3.org/)

- i <br>


- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) <br>

()

### Performance
[Lighthouse Score]  

- i
()


## Deployment
Clone repository: git clone https://github.com/jackpoletek/sweeteen-meal-planner.git <br>
**GitHub Pages**  
git push origin main

## Credits

### Content
- Food database: USDA nutritional data (modified)
- GI classifications: International GI Foundation

### Media
No external images used (minimalist design)

### Code
- Carb calculation formula: ADA guidelines
- UI patterns: Bootstrap 5 documentation

## Aknowledgements:
Huge thanks to my lecturer and above all to my mentor who provided the simplest and most effective solutions when it came to implementing them in the app.
As usual, big thanks to the City of Bristol College and Code Institute.
Last but not least - thanks to Urszula who inspired me to make this app.
