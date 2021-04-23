## Exploring Various API Calls In Javascript

### Methods
[x] Extracting data from local JSON files \
[x] Fetch API \
[x] Axios Library 

### Extracting data from local JSON Files
Magigseaweed provides global surf forecasts. In absence of their API, which is closed to new applications, they sent me 4 JSON files with swell and weather data at Fistral North(UK), Pipeline(Hawaii), Snapper Rocks(Australia), Trestles(USA). Extracting and mainpulating data from JSON files locally was a useful prerequisite prior to exploring the various methods to make API calls that return data in a JSON data format. 

`const pipeline = require('../public/swell-data/pipeline_616_forecast.json')`

### Fetch
XMLHttpRequest(XHR) was deprecated in ES6 with the introduction of fetch. The Fetch API is a simple interface for fetching resources and handling responses than the older XMLHttpRequest which requires additional logic. 

`npm install fetch` 

* Fetch returns data in a text or JSON depending on request
* Fetch API provides a JavaScript interface for HTTP requests and responses

### Axios 
Axios is an open-source library for making HTTP requests. It is a promise based HTTP client that can be used in plain JavaScript and advanced frameworks like React, Vue.js and Angular. 

`npm install axios`

This code needs to be placed at the top of the file if making calls locally. 
`const { default: axios } = require("axios");`

This code needs to be placed at the top of the file if making call from index.html. 
`<script src="https://unpkg.com/axios/dist/axios.min.js"></script>`

* Axios returns data in a JSON format
* Axios is a very easy and open-source library for making HTTP requests and responses




