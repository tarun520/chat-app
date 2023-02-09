const express=require('express');

const router=express.Router();

router.get('/', (req, res) => {
    // Read the contents of the "username.txt" file
    fs.readFile('username.txt', (err, data) => {
      if (err) {
        console.log(err);
        data = 'empty chat';
      }
      // Send the contents of the file as the response
      // along with a form to submit new messages
      res.send(`
        ${data}
        <form action="/" method="POST" onSubmit="document.getElementById('username').value=localStorage.getItem('username')">
          <input type="text" name="message" id="message"></input>
          <button type="submit">send</button>
          <input type="hidden" name="username" id="username"></input>
        </form>
      `);
    });
  });
  
  // Endpoint for submitting messages
  router.post('/', (req, res) => {
    console.log(req.body);
    console.log(req.body.username);
    console.log(req.body.message);
    // Append the message to the "username.txt" file
    fs.writeFile("username.txt", `${req.body.username}:${req.body.message}`, { flag: 'a' }, (err) => {
      if (err) {
        return console.log(err);
      }
      // Redirect back to the home page
      res.redirect('/');
    });
  });
  
  

module.exports=router;