# Sweeteen Meal Planner

[View Repository in GitHub Pages](https://github.com/jackpoletek/sweeteen-meal-planner) <br>
[View Website](https://jackpoletek.github.io/sweeteen-meal-planner/)

Sweeteen Meal Planner is a diabetes management web application designed for busy teenagers with Type 1 diabetes. The application simplifies carbohydrate counting and insulin dose estimation by providing instant meal analysis based on carbohydrate content, glycaemic index (GI), and time-of-day insulin resistance factors.  <br>
The main goal of the project is to reduce confusion surrounding diabetes nutrition and decision fatigue by presenting all relevant information in a single, intuitive interface.

![Sweeteen Meal Planner](assets/Sweeteen_screenshot.jpg)

## Business & User Goals
### Business Goals:
- Reduce barriers to insulin management for young diabetics
- Establish as essential daily tool for carb counting
- Encourage user retention through a clear and intuitive UX
- Provide a scalable foundation for future health platform integration

### User Goals:
- Eliminate manual carbohydrate calculations
- Understand glycemic impact of meals instantly
- Reduce decision fatigue using a curated food database
- Track insulin requirements across 5 daily meals

## UX
### Target Audience:
- Teenagers (13-19) with Type 1 diabetes
- Tech-savvy but time-constrained users
- Newly diagnosed users requiring simplified explanations
- Users who benefit from visual feedback and single-screen workflows

### User Stories:
- As a student, I want to quickly log lunch carbs between classes
- As an athlete, I need accurate insulin calculations for pre-game snacks
- As a newly diagnosed teen, I want to understand glycemic impact
- As a forgetful user, I need to see my selected foods at a glance
- As an overwhelmed user, I want one-screen meal analysis

## Features & User Story Alignment

### Meal Information
Users select from five meal times, each applying a unique insulin resistance factor:<br>
Breakfast (1.4x) | Second Breakfast (1.3x) | Lunch (0.8x) | Afternoon Snack (0.8x) | Dinner (1.2x)
Each meal applies unique insulin resistance factors<br>
<br>**User Story Alignment**:
- *Quick lunch logging* is supported through a reduced lunch insulin factor
- *Pre-game accuracy* is supported via a dedicated afternoon snack category

### Food Search and Selection
- Searchable local JSON database (100+ foods)
- Real-time dropdown suggestions
- Fast lookup requiring minimal input<br>
<br>**User Stories Alignment**:
- Enables fast food entry between classes
- Keeps all interaction on one screen to reduce cognitive load

### Selected Foods Overview
- Visual list of chosen foods
- Individual carbohydrate values displayed
- Immediate feedback when foods are added or cleared<br>
<br>**User Stories Alignment**:
- Supports memory recall
- Reinforces understanding of the impact of food on insulin levels

### Meal Calculation
- Total carbohydrates calculated automatically
- Weighted meal glycaemic index calculated
- Insulin requirement displayed instantly

<br>**Example Calculation**:
(47g ÷ 10) × 1.4 = 4.82 units

<br>**User Stories Alignment**:
- Supports accurate pre-activity insulin planning
- Ensures all results are visible without scrolling

### Glycaemic Index Guide
Color-coded GI indicators:<br>
$${\color{green}█}$$ Low GI (≤55) - Minimal impact<br>
$${\color{orange}█}$$ Medium GI (56-69) - Moderate impact<br>
$${\color{red}█}$$ High GI (≥70) - Rapid blood sugar rise<br>
<br>**User Stories Alignment**:
- Educates newly diagnosed users
- Enables faster, more informed decisions

## UX Design Process
### UX Goals

<br>The UX design focused on:
- Minimising cognitive load
- Keeping all interactions on a single screen
- Providing immediate, clear feedback
- Avoiding unnecessary navigation or complexity

### Wireframes
The wireframes were created in Figma during the planning phase to define layout, content hierarchy, and interaction flow for desktop, tablet, and mobile devices.<br>
The wireframes ensured:
- Consistent experience across screen sizes
- Clear prioritisation of insulin calculations
- Minimal user input steps
- Visibility of selected foods and results at all times

<br>The final implementation closely follows these wireframes in structure, layout, and interaction design.

#### Desktop (992px)
![large screen_992px](https://github.com/jackpoletek/sweeteen-meal-planner/blob/main/assets/wireframes/Sweeteen%20Meal%20Planner_1%20-%20desktop_992px.jpg)<br>
![large screen_992px](https://github.com/jackpoletek/sweeteen-meal-planner/blob/main/assets/wireframes/Sweeteen%20Meal%20Planner_2%20-%20desktop_992px.jpg)<br>
![large screen_992px](https://github.com/jackpoletek/sweeteen-meal-planner/blob/main/assets/wireframes/Sweeteen%20Meal%20Planner_3%20-%20desktop_992px.jpg)

#### Tablet (768px)
![tablet_768px](https://github.com/jackpoletek/sweeteen-meal-planner/blob/main/assets/wireframes/Sweeteen%20Meal%20Planner_1%20-%20tablet_768px.jpg)<br>
![tablet_768px](https://github.com/jackpoletek/sweeteen-meal-planner/blob/main/assets/wireframes/Sweeteen%20Meal%20Planner_2%20-%20tablet_768px.jpg)

#### Mobile (576px)
<img src="https://github.com/jackpoletek/sweeteen-meal-planner/blob/main/assets/wireframes/Sweeteen%20Meal%20Planner_1%20-%20mobile_576px.jpg" alt="Mobile (576px)" width=20% height=20%/><br>
![mobile_57p6x](https://github.com/jackpoletek/sweeteen-meal-planner/blob/main/assets/wireframes/Sweeteen%20Meal%20Planner_2%20-%20mobile_576px.jpg)

[View all wireframes](https://github.com/jackpoletek/sweeteen-meal-planner/tree/main/assets/wireframes)

## Handling Non-Existent Pages (404 Redirect)
This project is deployed using GitHub Pages, which does not support server-side routing. To prevent users from becoming stranded on invalid URLs, a custom 404.html page has been implemented.<br>
When a user navigates to a non-existent page or resource, GitHub Pages automatically serves the 404.html file. This page includes a timed redirect that returns the user to the main application without requiring browser navigation buttons. A manual return option is also provided.<br>
This approach improves usability and ensures a smooth and controlled user experience.

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

## Testing
### Testing Strategy Overview
Testing was conducted to ensure the application functions correctly, remains user-friendly, and behaves consistently across devices and screen sizes. In this project, manual testing was prioritised for the following reasons: the application logic is relatively lightweight, and UX clarity and responsiveness are key learning outcomes. Moreover, manual testing allowed immediate validation of user stories. Therefore, automated testing was considered but not implemented at this stage.

### Manual Testing
Manual testing involves a human tester interacting directly with the application to identify functional issues, usability problems, and layout inconsistencies. This method is particularly suitable for small-scale, UX-focused applications and MVPs.<br>
Manual testing validated:
- Food search and selection
- Insulin calculation accuracy
- Meal-based insulin factor changes
- Responsive layout behaviour
- Error handling and alerts

### Manual Testing Results
| Feature  | Test Action | Expected Result | Actual Result | Status |
| -------- | ----------- | --------------- | ------------- | ------ |
| Food Search | Enter partial name| Matching results appear | Correct | Pass   |
| Dropdown Selection | Click item | Food added | Correct     | Pass |
| Add Food Button | Enter valid food | Food added | Correct       | Pass   |
| Meal Type Change | Switch meal | Factor updates | Correct       | Pass   |
| Calculations | Add multiple foods | Accurate totals | Correct       | Pass   |
| Clear All | Click button | Reset occurs | Correct       | Pass   |
| Invalid Input | Unknown food | Alert shown | Correct       | Pass   |
| Responsiveness | Resize screen | Layout adapts | Correct       | Pass   |
| Dropdown Close | Click outside | Dropdown closes | Correct       | Pass   |


### Bug Fixes

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
- [W3C HTML Validator](https://validator.w3.org/) <br>
(https://github.com/jackpoletek/sweeteen-meal-planner/blob/main/assets/validators-results/HTML_checker.jpg)

- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) <br>
(https://github.com/jackpoletek/sweeteen-meal-planner/blob/main/assets/validators-results/CSS_checker.jpg)

- [JS Hint](https://jshint.com/) <br>
  (https://github.com/jackpoletek/sweeteen-meal-planner/blob/main/assets/validators-results/JS_checker.jpg)

### Performance
[Lighthouse Score]  
(https://github.com/jackpoletek/sweeteen-meal-planner/blob/main/assets/lighthouse-test/Lighthouse_sweeteen.jpg)


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






