const express = require('express');
let app = express();
const db = require('../database/models/index.js');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//works to get all jobs
app.get('/jobs', (req, res) => {
  db.getAll((err, companies) => {
    if (err) {
      console.log('ERROR>>> ', err)
      res.status(400).send(err)
    } else {
      console.log('GET WORKED')
      res.status(200).send(companies)
    }
  })
});
//works to get job by specific id
app.get('/jobs/:id', (req, res) => {
  db.getOne(req.params.id, (err, company) => {
    if (err) {
      console.log('ERROR>>>', err)
      res.status(400).send(err)
    } else {
      console.log('GET ONE WORKED')
      res.status(200).send(company)
    }
  })
});
//works to post new job into database
app.post('/jobs', (req, res) => {
  db.addToCompanies(req.body, (err, categories) => {
    if (err) {
      console.log('ERROR, ', err)
      res.status(400).send(err)
    } else {
      console.log('POST WORKED')
      res.status(200).send(categories)
    }
  })
});
//works to delete from clientside/backend
app.delete('/jobs', (req, res) => {
  let id = req.query.id
  db.deleteCompany(id, (err) => {
    if (err) {
      console.log('ERROR---> ', err)
      res.status(400).send(err)
    } else {
      console.log('GET WORKED')
      res.status(200).send()
    }
  })
});

//need to update by certain id
//VVvvvvvvvvvvvv
app.put('/jobs', (req, res) => {
  console.log(req.query)
  let id = req.query.id 
  let followUp = req.body.followUp
  let dateFollowUp = req.body.dateFollowUp

  db.updateCompany(id, followUp, dateFollowUp, (err) => {
    if (err) {
      console.log('ERROR>>> ', err)
      res.status(400).send(err)
    } else {
      console.log('UPDATE WORKED')
      res.status(200).send()
    }
  })
})



let port = 3210;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
