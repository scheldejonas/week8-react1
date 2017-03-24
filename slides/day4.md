<img align="right" src="../img/cphbusinessWhite.png" />  
#React day4 - shared model
##Using data facade to implement a shared model

## Deployment with Mock backend

[Quick start on deployment to surge](Deployment.md)

[Backend Mock](jsonserver.md)

#### Small exercise: Create the Mock server

1. Create the json-server as described in the Backend Mock link above
2. Test that the server is running at http://localhost:4000
3. Do the CRUD operations on the rest service at http://4000/books to ensure everything is working
   1. Hint: Use Postman for Update, Delete and Create (Put, Delete and Post)

## Using a datafacade to implement a shared model with CRUD

Now we will use the backend mock server we just created. It is running at `localhost:4000/books`.

You should now make a new create-react-app that can use the backend api.

After creating your new create-react-app

find inspiration in the [datafacade](../demo/day4/backend/src/facade) that you find in the demo folder.



