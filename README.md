# Application for the showing incidents

## Overview

This application for the using Service Now API

## Installation ##
```sh
npm install
```

## Running ##
```sh
node server.js
```
```sh
npm start
```
go to the browser and open link *http://localhost:4200*

## Description
For the connection with Service Now API I'm using *server.js* file
For the frontend part I'm using AngularJS. I separated app parts on components. In a each component folder I have component.js, module.js, component.spec.js and component.html
The main file of App is app.js. In a folder core I created incident service for the request to the server.js and response incident list
##### Incident-list
In this component I use getting response from incident service (factory) and show it on html template (for the sorting and filter data in table I'm using smart table library).
Using Promises I got data for Chart (Chart.js library)
##### Incident-detail
In this component I'm showing detail of the separate incident