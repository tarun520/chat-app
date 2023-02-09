
const express = require('express');
const fs = require('fs');
const bodyparser = require('body-parser');
//Routes
const login_routes=require('./routes/login.js')
const message_routes=require('./routes/message.js')

// Initialize the express app
const app = express();

// Use the body-parser middleware to parse the request body
app.use(bodyparser.urlencoded({ extended: false }));

// Endpoint for the home page
  
app.use(message_routes)
app.use(login_routes);
    
       
// });



app.listen(4000);
