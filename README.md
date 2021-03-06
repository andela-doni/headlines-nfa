[![Build Status](https://travis-ci.org/andela-doni/headlines-nfa.svg?branch=dev)](https://travis-ci.org/andela-doni/headlines-nfa)
[![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/codeclimate/codeclimate)
[![Coverage Status](https://coveralls.io/repos/github/andela-doni/headlines-nfa/badge.svg?branch=dev)](https://coveralls.io/github/andela-doni/headlines-nfa?branch=dev)

# HEADLINES
Headlines is a newsfeed app that displays published articles and sources from well-known and reliable sources. It fetches this data by consuming an api called NewsApi that returns JSON metadata for published articles on a range of news sources and blogs. This application is similar to a mordern RSS feed.

## Table of Contents
1. Getting Started
2. Prerequisites
3. Running Tests
4. Deployment.
5. Technologies

## Getting Started
1. Clone the repo to your local machine
2. ```npm install``` to install the dependencies associated with this project
3. ```npm start``` to start the project on your local machine
4. Navigate to (http://localhost:8000)

## Prerequisites
1. You need to have node installed on your local machine
2. You require your api key from the NEWS API website, for project use

## Running Tests
1. ```npm test``` runs the tests on your local machine, the test coverage is available on the repo

## Deployment
This application is deployed on heroku with this link (https://headlines-doni.herokuapp.com/)

## Technologies 
Headlines is built with Reactjs and Flux architecture. Nodejs and Express are used for server side development. The application and bundled with Webpack.

1. React is front end library developed by Facebook. It's used for handling view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and it has strong foundation and large community behind it.
2. Flux is the application architecture that Facebook uses for building client-side web applications. It complements React's composable view components by utilizing a unidirectional data flow. It's more of a pattern rather than a formal framework.
3. Webpack is a tool to build JavaScript modules in your application
## Limitations
1. The user needs to redirect to the main news source website to view the article.
2. Limited test coverage 
3. Users need to have a google account to login in

## FAQ
1. Where can i get an API Key to run the application on my local
Ans: Request an API key from (https://newsapi.org/)

## Contributions
To contribute to this project:
1. Fork the project & clone locally
2. Create an upstream remote and sync your local copy before you branch
3. Branch for each separate piece of work.
4. Do the work, write good commit messages, and read the CONTRIBUTING file if there is one.
5. Push to your origin repository
6. Create a new PR in GitHub.
7. Respond to any code review feedback






