# EventsSeven

## Overview
This project uses NgRx for state management. It currently supports three feature states (auth, user and event-definitions).\
The side effects such as api requests are isolated with the use of NgRx effects.

The `angular-material` library was used to provide the app with modern UI elements.\
A custom theme was created and it can be found in `src/styles/_light-theme.scss`

Packages `lint-staged` and `husky` are used in combination with `prettier` and Angular's own linting to automatically lint and format code before every commit.

The application supports authentication with a Google account via Firebase.

I used Firestore to store event data. Certain rules are in place, to validate client side input before certain CRUD operations.
The rules can be found in the `firestore.rules` file.

I used the BEM system for naming my CSS classes. Every class starts with the ets prefix (which is supposed to be short for events-seven), to make sure custom classes do not conflict with other classes.


## Development server

First run `npm install` to make sure all the dependencies are installed on your system.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

Run `ng build:prod` to generate a production optimized build.

## Assumptions
I have made the following assumption:
* I added a property createdById to the event definition, so it is possible to detect if the event was created by the currently logged-in user
    * Ideally this property would be readonly after event is created, but I ran out of time to properly set all the Firestore validation rules\
* The related-events property should contain event ids instead of event names, so we can associate events with other events in the database
* I assumed I am making an application that would need to scale well, so I tried to make my feature modules as independent as possible, so they could be lazy loaded.

## What I did not manage to do

Unfortunately I ran out of time for certain features that I would expect a production-ready project to have:
* Unit and E2E tests
* Better UI feedback on server side errors (such as a request failing)
* The related events feature: There is currently no way to add or view related events
* Automatic deployment: The automatic deployment is technically set up, and it triggers on merges with dev branch.
The site can be accessed [here](https://events7-dev.web.app/).
I used Firebase hosting to deploy the application in conjunction with GitHub,
  but there appears to be an issue with Google authentication on the deployed app, which works on localhost.
  The domain is present on the authorised domains list in the firebase console, which should be sufficient according to the documentation, but I could not get it to work.
* Different firebase projects for development and production, different sites as well.
    * I did initialize two firebase projects, but I only had time to set up and connect the app to the dev project.
* General polish of the UI.

