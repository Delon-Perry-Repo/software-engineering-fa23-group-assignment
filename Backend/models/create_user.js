// const db = require('../config/database');

// function createUser(userName, userPass, userEmail){

// let sql = `INSERT INTO user (USER_NAME, USER_TYPE, USER_PASS, USER_EMAIL) VALUES ('${userName}', 'user', '${userPass}', '${userEmail}');`; 

// return db.execute(sql);

// }

// let newAccount = document.getElementById("newAccount");

// newAccount.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let userName = document.getElementById("newuname").value;
//     let userEmail = document.getElementById("newemail").value;
//     let userPass = document.getElementById("newpsw").value;
    
//         // Display an alert
//         alert('Account created successfully!');

//     createUser(`${userName}, ${userPass}, ${userEmail}`);

// });

const express = require('express');
const bodyParser = require('body-parser');
const db = require('../config/database');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/newUser', async (req, res) => {
    try {
      const { userName, userPass, userEmail } = req.body;

      
        // Log the received data
        console.log('Received data:', { userName, userPass, userEmail });
  
      let sql = `INSERT INTO user (USER_NAME, USER_TYPE, USER_PASS, USER_EMAIL) VALUES (?, 'user', ?, ?)`;
      
      // Use placeholders to prevent SQL injection
      const [results, fields] = await db.execute(sql, [userName, userPass, userEmail]);
  
      res.status(200).json({ message: 'Data inserted successfully!', results });
    } catch (error) {
      console.error('Error inserting data:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

const PORT = 3306;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

