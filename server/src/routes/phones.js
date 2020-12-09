const express = require('express')
const router = express.Router()
const Phone = require('../models/Phone')
var ObjectID = require('mongoose').Types.ObjectId


// GET PHONE

router.get('/', async (req, res) => {
    try{
        const phones = await Phone.find();
        res.json(phones)
    }catch(err){
        res.json({message: err})
    }
})

// ADD PHONE

router.post('/', async (req, res) => {
    const phone = new Phone({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        description: req.body.description,
        color: req.body.color,
        price: req.body.price,
        imageFileName: req.body.imageFileName,
        screen: req.body.screen,
        processor: req.body.processor,
        ram: req.body.ram
    });
    try {
        const savedPhone = await phone.save()
        res.json(savedPhone)
    } catch(err) {
        res.json({ message: err })
    }
})

//SPECIFIC PHONE

router.get('/:phoneId', async (req, res) => {
    try{
        const phone = await Phone.findById(req.params.phoneId)
        res.json(phone)
    } catch(err) {
        res.json({ message: err })
    }
})

// DELETE PHONE

router.delete('/:phoneId', async (req, res) => {
    try  {
        const removedPhone = await Phone.remove({_id: req.params.phoneId })
        res.json(removedPhone)
    }catch(err) {
        res.json({ message: err })
    }
})

// EDIT PHONE

router.put('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id : ' + req.params.id)

    var updatedRecord = {
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        description: req.body.description,
        color: req.body.color,
        price: req.body.price,
        imageFileName: req.body.imageFileName,
        screen: req.body.screen,
        processor: req.body.processor,
        ram: req.body.ram
    }

    Phone.findByIdAndUpdate(req.params.id, { $set: updatedRecord },{new:true}, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while updating a record : ' + JSON.stringify(err, undefined, 2))
    })
})

module.exports = router