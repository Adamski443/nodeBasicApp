#I've just started to learn Node.js and this little application
#is just some stuff I've been playing with / learning to get some
#messages going back and forth between users in a very basic chat.

#Learnt a bit about web sockets, node, async, bootstrap.

#Uses Node.js, Nodemon, Bootstrap, Express, Socket.io, mongoose with a mongo db database

PRE-REQUISITES:
You need to have Node.js installed
*--I built this in a VS Code editor
*--You need to have a Mongo Database set up
*--as at 21/06/20 you can set this up by visiting https://www.mongodb.com
*--create a MongoDb Atlas account for free and then
*--follow this guide https://docs.atlas.mongodb.com/getting-started/
*--You will need the database connection it will be in the format:
//dbuser:<password>@cluster0-qtfzi.azure.mongodb.net/<dbname>?retryWrites=true&w=majority

TO RUN THIS GITHUB PACKAGE LOCALLY:
*1 - Download the package
*2 - Open it within VS Code (or equivalent editor)
*3 - In Terminal execute "npm install" to install dependencies from package.json file
*4 - In the server.js file replace the dbUrl variable with your MongoDb connection string
WARNING - In this project the Password is included in the server.js file this would not be
the case if you were using it in a Production environment as is a serious security issue!
*5 - In the terminal execute the package by running "nodemon.js"
*6 - Open a browser and browse to the localhost:5001/ the basic chat app will open and you
can then play about with it.

