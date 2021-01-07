# Evaluate News NLP Project

This project was created as part of the Udacity Front End Web Developer Nanodegree Program. The goal of this project is to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites.

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine.

### Prerequisites

Node.js is required and can be downloaded at https://nodejs.org/en/download/.

You can check if Node.js is installed on your computer by running the following code to print Node.js's version from the command line
```
node -v
```

### Installation

1. Get a free API key at http://meaningcloud.com/developer/sentiment-analysis

2. Clone the repository
```
git clone https://github.com/parkjutsu/evaluate-news-nlp-project.git
```

3. Install project dependencies
```
npm install
```

4. Enter the API endpoint and key in the .env file
```
API_URL=**************************
API_KEY=**************************
```

## Usage
### Development Mode (Environment)
Build and start the webpack dev server at port 8080
npm run build-dev

### Production Mode (Environment)
Generate a 'dist' folder for production
npm run build-prod

Run the Express server on port 8081
npm start

## Built With

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [webpack](https://webpack.js.org/)
* [Sentiment Analysis API](https://www.meaningcloud.com/developer/sentiment-analysis)
