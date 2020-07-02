const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.model.js');
const { Router } = require('express');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
//Show all celebrities currently on the system
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrities", { celebrities });
    })
    .catch(error => {
      console.log(error)
    })
});

//Show the form to create a new celebrity
router.get('/celebrity/new', (req, res, next) => {
  res.render("new-celebrity");
});

//Insert celebrity from the form on the database
router.post('/celebrities', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase })

  newCelebrity.save()
  .then(() => {
    res.redirect('/celebrities')
  })
  .catch((error) => {
    console.log(error)
  })
});

//Show celebrity' details
router.get('/celebrities/:id', (req, res, next) => {
  let id = req.params.id;
  Celebrity.findById(id)
    .then(details => {
      res.render("celebrety-details", { details });
    })
    .catch(error => {
      console.log(error)
    })
});

//Delete celebrity
router.get('/celebrities/:id/delete', (req, res, next) => {

  let id = req.params.id;

  Celebrity.findById(id)
  .then(details => {
    res.render("delete-celebrity", { details } )
  })
  .catch(error => {
    console.log(error)
  })

});

router.post('/celebrities/:id/delete', (req, res, next) => {
  const { id } = req.body;

  Celebrity.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(error => {
      console.log(error)
    });

});

router.get('/celebrities/:id/edit', (req, res, next) => {
  let id = req.params.id;

  Celebrity.findById(id)
  .then((details) => {
    res.render("edit-celebrity", { details });
  })
  .catch(error => {
    console.log(error)
  })
});

router.post('/celebrities/:id/edit', (req, res, next) => {

  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update({_id: req.body.id}, { $set: {name, occupation, catchPhrase }})
  .then(() => {
    res.redirect('/celebrities')
  })
  .catch((error) => {
    console.log(error)
  })
});

module.exports = router;
