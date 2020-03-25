const express = require('express');
const router = express.Router();
const {allJobs,findBy} = require('../data/JobsRepo');

/* GET Jobs. */

router.get('/', async (req, res, next) => {
  let body = await allJobs();
  res.status(200).json(body);
}).get('/:id',async (req, res, next) =>{
  try{
    let body = await findBy(req.params['id']);
    res.status(200).json(body);
  }catch (e) {
    res.status(404).json({error:e});
  }

});

module.exports = router;
