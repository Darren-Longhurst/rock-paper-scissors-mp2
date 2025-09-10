# Rock, Paper Scissors Project

### Live website can be found [here]().
---
## Project Rationale

I chose to build a **Rock, Paper, Scissors** for my second milestone project becuase it is a well known, simple game and perfectly demonstrates entry level **JavaScript** logic and front end developement skills.
The mechanics of the game are straight forward, which allowed me time to focus on the UX, styling and game interactivity, rather than eplaining complex game rules.

The game contains **conditional logic, randomisation, event handling, global and block scope functions**.

## Index - Table of Contents ##

- [UX](#ux)
- [Design](#design)
- [Features](#features)
- [Technologies & Design](#technologies-and-design)
- [Testing](#testing)
- [Bugs](#bugs)
- [Depoloyment](#deployment)
- [Credits](#credits)
---
## UX

### User Stories

* As a first time player, I want to quickly understand how to play the game and start playing without any confusion.
* As a first time player, I want to clearly see my choice and the reflecting computer choice in order to understand how the game works.
* As a first time player, I want to see the scoreboard update after either I or the computer has won a round so I can track progress in order to win the game.
* As a first time player, I want the game to tell me when either I or the computer has won so I know the game is complete.
* As a user, I want a reset button so I can restert the gme whenever I want
* As a user, I want win/lose/draw visual feedback for the game to be stimulating and engaging.
* As a user, I want clear instructions available in a seperate modal, so I can refer to these whenever I like and keep the game playing area free from clutter.
* As a user, I want the interface to be mobile-friendly for me to play the game on whichever device I desire.
* As a user, I want a 404 fallback error page with design continuity so if I land on the wrong link, I can see its part of the website and navigate back to the gam easily.
* As a returning user, I want to be able to quickly get into the game without having to bypass a game instructions pop up window.
* As a returning user I want to always have the reset button available to reset the game without having to reload the page.

## Design

### Colour Palette

![colour-palette](assets/README-files/mp2-colour-scheme.png)

### Background Image

![background-image](assets/README-files/background-image.png)

* I used an image picker from the background image **(Rock, Paper, Scissors)** for the x2 container div's used in the game to pull the prominent colours for the buttons and text used throughout the site.
* I have also utilised CSS variables to allow quick global changes across the site if required.
* The upper, middle and lower div container box uses the background image with a white overlay set to 85% opacity.
* The body background uses #26006e, the Player icon uses #f92aee, Computer icon uses #0e79e8, Choices icons also use #26006e and the Result text is dynamic dependant on whether the result is win/tie/lose. i.e Player = #f92aee, Computer = #0e79e8, Tie = #26006e
* Gameplay scores also follow the same colour reflective principles.
* The **"Games Instructions"** button uses colour #26006e and then changes to #f92aee on:hover.
* The **Reset Game** button uses colour #f92aee and #26006e on:hover.
* #ffff is used on buttons with the hover attribute enabled to give greater contrast.

## Typography

* Google fonts have been used in this project and font family Open Sans & Cal Sans have been used with a sans-serif fallback font.
* CSS variables have been used throughout the CSS stylesheet to create globally accessible fonts, which keep continuity and are easily updated throughout the website.

![google-fonts-import-link](assets/README-files/mp2-google-fonts.png)

## Wireframes

I have used Balsamiq **https://balsamiq.cloud/** to design the basic layout for this game. All pages and modals are dynamic and responsive, shown here in the wireframe image links:

* [Home Page](wireframes/mp2-project-homepage.png)
* [Instructions Modal](wireframes/mp2-project-modal.png)

## Features

### Header Container & Favicon

![favicon](assets/README-files/favicon.png)

![header](assets/README-files/header-div.png)

* The header is the first div container and holds both the **"Games Instructions"** and the **"Reset Game"** buttons. Also shown is the favicon which was created using **https://favicon.io/**
* The header is fully reponsive and access to both the **"Games Instructions"** and **"Reset Game"** buttons is available throughout the game.
* I have used Bootstrap custom css classes for button styling and targetted custom css for button:hover classes for added user claity whilst playing the game.

### Modal

![Modal](assets/README-files/modal.png)

* Clear and concise **"Games Instructions"** modal, available from the header container, once the relevant button is clicked.
* Modal contains Font-Awesome is used to show the player and computer icons in this window.
* Once finished reading, user selects the **"Got it!"** button in the bottom left of the modal.
* Modal button also uses bootstrap and custom targetted CSS. 

### Gamplay Area

![Gameplay](assets/README-files/gameplay-div.png)

* The Player and computer icons are clearly displayed and the initial icon display clearly refereces a player vs a computer icon.
* This game is a race to 5, the first to win 5 rounds, wins the game. 
* Round scores for the player, the computer and the number of ties is cleary detailed at the bottom of this window.
* Icons for the player to select are clearly shown in the middle of the page with the player selection and computers random selection, shown directly above.

### Result Area

![Result](assets/README-files/result-div.png)

* The result area container clearly shows the result of the round, once the round has taken place and contains dynammic information within it.
* On game startup It reads **"Let's go, show them who's boss!"**
* If you win a round it reads **"You win this round"** 
* If you lose a round it reads **"Computer wins this round"**
* If the round is a tie, it reads **"It's a tie"**
* If the computer wins the game **"Damn it, computer won the game!"**
* If the player wins the game **"Great job, you've won the game!"**
* Using Jquery, custom css and template literals, the text colour also dynamically updates in the result area to display either the player colour, computer colour or the draw colour dependant on which character has won the round/game.

### Future Code Implimentations

There were a couple of stretch goals that I would have loved to include but didn't have the time.
I would have loved to have offered the player the opportunity to choose other Rock, Paper, Scissors game variants. As well as the first to 5 option, these would have included:

* A timed mode, to see how many wins could be acheived in a set time frame.
* A race to see how many player rounds could be won before the computer reaches a set number of rounds (e.g. 7).
* Custom player icons (e.g. Water, Fire, Sand) working in the same way as Rock paper Scissors with different permutations. 

## Technologies and Design

* HTML5 and CSS 3 programming languages for semantic layout and styling
* JavaScript (ES6) For running the game logic and scoreboard updates
* JQuery To simplify DOM manipulation and event handling
* Font Awesome iProviding the games icons
* [Bootstrap] 5 (https://getbootstrap.com/) 5.3.3 For responsive layout and custom attributes
* CSS Variables For defining reusable colours and consistent syling
* Visual Studio Code - As my IDE using command line to push code to GitHub
* Github - To host my repository

## Testing

