const router = require('express').Router();
const Cars = require('./cars-model');



router.get('/', async (req, res, next) => {
    console.log('fired')
    try {
      const cars = await Cars.getAll();
      res.status(200).json(cars)  
    } catch (err) {
        res.status(500).json({
            message: err.message,
            preMessage: 'something went wrong'
        })
        
    }
})

// router.use('/', (error, req, res, next) => { 
//     res.status(error.status || 500).json({
//         message: error.message
//     })
// })


module.exports = router;
