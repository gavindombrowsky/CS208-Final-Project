# Downtown Donuts - CS208 Full Stack Final Project
    Name: Gavin Dombrowsky

    GitHub: https://github.com/gavindombrowsky/CS208-Final-Project

    Term: Spring 2026

## Project Description

This is my full-stack application for CS208, built with Node.js. I built this as web application for Downtown Donuts, a family-owned bakery established in 1992. The application allows customers to view our signature donut menu, learn about our history, and post live reviews. The backend uses Express for the server logic and a JSON to store comments within.

## Install the Database

This project uses comments.json to store user reviews. This uses the server.json to create and upload the comments to the website when pushing the "Post Comment" button.

JSON
[]

## Create the Data Persistence

Ensure your server.js is configured to read from and write to the comments.json file. The server will automatically handle the creation of the file structure if it is missing, using the Node.js fs module.

## Install Dependencies

npm install

## Run the Application

node server.js

## Access the Application

On Codespaces, you can access the application by forwarding port 3000. Open the forwarded port in your browser to view the application at the following path:

http://localhost:3000/index.html

## Sources of Help & Documentation

During the creation of this project, the following resources were used:

    Express.js Documentation: Used for implementing static file serving and POST request handling.

    Node.js File System (fs) API: Referenced for persistent data management in comments.json.

    MDN Web Docs: Utilized for CSS Flexbox layouts used to center the logo and navigation.