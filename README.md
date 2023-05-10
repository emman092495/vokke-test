# Vokke Test - Readme Instructions

This document provides instructions on how to run the "vokke-trial" application. Follow the steps below to set up and run the application successfully.

## Prerequisites

Before you proceed, ensure that you have the following software installed on your system:

* `Node.js (version 14 or above)`
* `npm (Node Package Manager)`

## Installation

1. Clone the repository or download the source code for "vokke-trial" from the provided source.

2. Open a terminal or command prompt and navigate to the project directory.

3. Run the following command to install the project dependencies:

###  `npm install`

This will download and install all the required dependencies specified in the package.json file.

## Running the Application

Once the installation process is complete, follow the steps below to run the application:

1. In the terminal or command prompt, navigate to the project directory if you are not already in it.

2. Execute the following command to start the application:

###  `npm run start`

This command will start the development server and launch the application in your default web browser.

3. The application should now be up and running. You can access it by opening the following URL in your web browser:

###  `http://localhost:3000`

If port 3000 is already in use, the terminal will prompt you to use an alternative port.


### Available Scripts

The following scripts are available for this project:

* npm start: Starts the development server and launches the application.
* npm build: Builds the application for production.
* npm test: Runs the test scripts for the application.
* npm eject: Ejects the application from Create React App configuration.


### Additional Information

* The application uses various dependencies listed in the package.json file. You can refer to their respective documentation for more details on their usage.

* The project includes an ESLint configuration (eslintConfig) to ensure code quality and consistency. The configuration extends the "react-app" and "react-app/jest" configurations.

* The browserslist section in the package.json file defines the supported browsers for the production and development environments.
