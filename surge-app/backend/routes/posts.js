const express = require('express')
const router = express.Router();

//Get all workout
router.get('/', (req, res) =>{
    res.json({messg: 'test'})
})

router.get('/:id', (req, res) =>{
    res.json({messg: 'testw'})
})

router.post('/', (req, res)=>{
    res.json({messg: 'testw2'})
})

router.delete('/:id', (req, res)=>{
    res.json({messg: 'tdelete'})
})

router.patch('/:id', (req, res)=>{
    res.json({messg: 'update'})
})

module.exports = router