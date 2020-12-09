# React Phone Catalogue

It has 3 pages:
- The home page
- The product page: as there aren't too many phones and the app works super fast, I'm taking the product information directly from the state, but on the API I've implemented a route to get the information of a specific phone
- Admin page: here you can add new phones, edit them and delete them

I've tried to keep the design as minimalist as possible and it's fully responsive.

You can see it hosted here:

CLIENT: https://gs-phone-catalogue.netlify.app/   
SERVER: https://gs-phone-catalogue-server.herokuapp.com/phones



# DOCKERIZED APP

This is the first time I use docker-compose, and even if I tested the application on my PC to make sure that everything works correctly, I'm gonna leave you instructions to manually start the client and server in case it fails. I'm sure you know what you have to do, but I always like to include a set of instructions.

## START WITH DOCKER
- Clone the repository
- And use docker-compose up
- The client will start on http://localhost:3001 and the server on http://localhost:4000

## MANUALLY START
- The scripts are the same for both client and server
- yarn install and then yarn start
- In this case the client will start on port 3000 (http://localhost:3000/) and the server will keep starting on http://localhost:4000


## DATABASE
For the database I'm using mongoDb's cloud. They give you a free cluster, so I've used it to make my life easier and make sure that it will always be online. I left the .env file public, so you shouldn't have any problems.

## Extra Libraries

### Client side

- styled-components: it's my library of choice for CSS, normally I would create a full library of CSS reusable components and adapt them through props, but due to the limited time I couldn't do it as complete as I normally do
- filebase64: I'm uploading the images to the database in base64 for easier implementation of CRUD capabilities
- framer-motion: my library of choice for animations
- redux: store management
- axios: http requests
- react-redux-loading-bar: just a simple loading bar
- react-router: for routing


### Server side
This side is simple, it's built in NodeJS and I'm using express, mongoose and nodemon