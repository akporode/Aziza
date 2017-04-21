# TimeSheet App
This is simple timesheet app that I put together to demonstrate how to use React.js to build UI to capture and display data. It uses MongoDB, a NoSql database, on the backend and Express.js web middleware.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
Give the example
```

* [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-linux/#run-mongodb-community-edition) - install instructions


```
after installing MongoDb, import timesheet app data into MongoDb by executing mongoimport command

mongoimport --db test --collection timesheets --drop --file timesheets.json
```

End with an example of getting some data out of the system or using it for a little demo

## Running the App

Explain how to run the automated tests for this system

1) Start Mongodb

if you system PATH includes the location of MongoDb binary, simply enter mongod at the system prompt:

```
mongod
```

2) Start Application Server - React-backend

Navigate to path the react-backend app: timesheet-app/react-backend. If your package.json file is configured correctly, simple enter npm start at the system prompt:

```
npm start
```
3) Start up  your favorite tool to test REST endpoints

POSTMAN
```
GET  http://localhost:3000/timesheets
to retrieve all timesheets

GET http://localhost:3000/weeks/akporode.shemi@gmail.com
to retrieve all weeks by user email address
```

4) Start up Frontend Server - React-frontend
Navigate to path the react-frontend app: timesheet-app/react-frontend. Install the following packages and simple enter npm start at the system prompt:

```
npm install react react-dom --save

npm install babel babel-loader babel-core bable-preset-es2015 babel-preset-react --save

npm start

```

5) Start up your favorite browser to test the timesheet-app

```
Browse to http://localhost:2020, and poke around. Happy browsing
```
 

## What's the app about?

1) allows you to look up timesheet by employee name
2) allows you to look up timesheet by week for each employee 
3) allos you to edit timesheet for a given week

## Built With

* [MongoDB](https://github.com/mongodb/docs) - The NoSql database
* [Express.js](https://expressjs.com/) - webframe middleware
* [React.js](https://facebook.github.io/react/) Javascript library for building UI
* [Node.js](https://nodejs.org/en/) - Server side runtime environment
* [npm](https://www.npmjs.com) - packaging manager provide by Node.js 

## Authors

* **Akporode Shemi**
