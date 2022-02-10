# Authentication App [Live Demo](https://authentication-app-frontend.netlify.app)

An simple JWT authentication web application. Developed using React JS as a front-end library for the UI, and Python 3/Flask 2.0 as back-end API server.

***

## Table of contents

* [Overview](#overview)
  * [Features](#features)
  * [Responsibilities](#responsibilities)
  * [Screenshots](#screenshots)
* [installation](#installation)
* [Implementation](#implementation)

***

## Overview

## Features

* Registration
* Login
* Logout
* Client-side validation in both login & registration forms
* Simple profile page
* Authentication using JWT token
* Protected routes in both client-side using react router & server-side using JWT

## Responsibilities

* **As a front-end**
  * Designed the user interface "UI" using HTML/JSX, React/JavaScript, CSS/SASS.
  * Applied some user experience "UX" concepts to make a smooth experience for the app end-user.
  * Used modern sans-serif fonts to enhance the application design.
  * Optimize the images size using lossless compression.
  * Applied some web animations using CSS/JavaScript to enhance user experience.
  * Validated application forms using both Formik & Yup. And send cleaned data to the back-end.
  * Use HTML semantics elements to improve web accessibility and search engine optimization "SEO".
  * Used PostCSS/Autoprefixer to solve cross-browser issues.
  * Used Normalize CSS to make the user experience is the same across different browsers.
  * Used lazy loading concept to optimize app bundle for fast app loading.
  * Bundled the application files using Webpack 5. And used Babel to transpile application JavaScript/ES Next to a backwards compatible code to support old browsers.
  * Taking design responsive in mind by using a design suitable for big, tablets, and mobile screens.
  * Protected application routes from the authenticated users using React router and React context API.
  * Fetching API data from the server. And populate the user interface in the browser.

* **As a back-end**
  * Designed the database schema.
  * Created the API routes which will serve the front-end client.
  * Protected the API routes from authenticated users.
  * Deployed the application on the cloud "Heroku".

## Screenshots

* On PC
  ![auth-profile-pc](https://user-images.githubusercontent.com/61619208/153246839-3be07ab6-89ed-4d93-b438-29c9b7fb75ef.png)
  
  ![auth-register-pc](https://user-images.githubusercontent.com/61619208/153246906-cc59a1e2-804d-4c66-8b42-538dd8df4330.png)
  
  ![auth-login-pc](https://user-images.githubusercontent.com/61619208/153246940-28c7b469-9420-4088-a305-0ce11feabeb2.png)
  
  ![auth-notfound-pc](https://user-images.githubusercontent.com/61619208/153246965-25d9ef83-0f4f-4b28-883e-f9e131f0a4b8.png)
  
* On Mobile

  ![auth-profile-mob](https://user-images.githubusercontent.com/61619208/153247201-d6c2ee3a-fb78-4146-9b8a-ed848d933a02.png)
  
  ![auth-register-mob](https://user-images.githubusercontent.com/61619208/153247274-c17c260d-6dd7-4ca6-90ab-39abc7155e14.png)
  
  ![auth-login-mob](https://user-images.githubusercontent.com/61619208/153247295-b557969f-503c-4163-8627-6ac7cbecb7cb.png)
  
  ![auth-notfound-mob](https://user-images.githubusercontent.com/61619208/153247307-d8ac61ad-63f0-4138-9890-59eb2928595e.png)

## Installation

* First, clone and run API [back-end server](https://github.com/mohamedhany01/authentication-app-backend-server):

  * `cd authentication-app-backend-server`
  * Create `.flaskenv` file, and add `FLASK_APP=run.py FLASK_ENV=development`
  * Populate `.env` file with proper values.
  * Create a virtual environment
    * `python3 -m venv venv`
  * Activate the virtual environment
    * `. venv/bin/activate`
  * Install application dependencies
    * `pip3 install -r requirements.txt`
  * Run flask server the virtual environment
    * `flask run`

* Second, clone and run front-end:

  * `cd authentication-app-frontend-client`
  * Install application dependencies
    * `npm i`
  * Build and run dev server
    * `npm run build && npm run dev`

## Implementation

As **front-end** technologies, the application implemented using:

* **React JS**
  * **React router** "routes navigation"
  * **Formik & Yup** "form validation"
  * **Babel**
* **Styling**
  * **SASS**
  * **PostCSS**
  * **Autoprefixer CSS**
  * **Normalize CSS**
* **API**
  * **Axios** "Data fetching/posting"
* **Web bundler**
  * **Webpack 5**

As **back-end** technologies, the application implemented using:

* **Python/Flask**
* **Database**
  * **SQL/SQLAlchemy ORM**
  * **PostgreSQL**
