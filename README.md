# Trivia Time

Trivia Time will be a trivia game that generates 15 random questions, with random categories and difficulties. Each question will render one at a time and be worth 100, 200, or 300 points (depending on the difficulty) and there will be an input field for user to type in answer as well as a “hint” button that users can click to show gifs of the answer and if hint is used 50 points will be deducted from total. Player wins when 1000 points are reached! But if a player goes through all questions and still does not achieve 1000 points, the player automatically loses.

**Deployed Link**
https://blooming-ravine-82753.herokuapp.com/

**_Wireframes_**

![landing page](/public/wireframe-landing.png)

![game page](/public/wireframe-game.png)

![game with hint page](/public/wireframe-hint.png)

![summary page](/public/wireframe-summary.png)

**_Application Pages_**

![landing page](/public/landing.png)

![game page](/public/game.png)

![game with hint page](/public/hint.png)

![summary page](/public/summary.png)

**_List of the Technologies used_**

- React
- React-Bootstrap
- React-Router
- JavaScript
- CSS

**_Your User stories – who are your users, what do they want and why?_**

- As a user I want to be greeted with a landing page that shows the instructions for the web page
- As a user I want to be able to navigate the page as a SPA
- As a user I want to be able to know the category and points each questions are valued
- As a user I want to know how many points I currently have
- As a user I want to be able to enter my answer and go on to next question
- As a user I want to be able to see all my answers compared to the corrected ones along with the questions
- As a user when I navigate to a wrong link I want to be informed with an error message about it
- As a user I want to be able to see the choices for the answers
- As a user when the page takes time to render, I want to see a loading message so that I know it’s not broken
- As a user I want to be able to have a hint option when having difficulty answering the questions
- As a user I want to be able to enter my name and see it show on the page as a personal touch
- As a user I want to be able to send the game to others to play (deployment)

## Installation Instructions

### 1. Install packages and dependencies

- `npm install`

### 2. Start the application in local browser

- `npm start`

**_Descriptions of any Unsolved problems or major hurdles you had to overcome_**

**Resources Used**

- https://opentdb.com/api_config.php
- https://developers.giphy.com/dashboard/
