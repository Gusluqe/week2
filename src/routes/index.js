const express = require('express');
const router = express.Router();

const services = require('../services.json');
const proyects = require('../proyects.json');
// colocar las rutas aquí
router.get('/', (req, res) => {
    // res.send("<h1>Bienvenido Gustavo</h1>");
    return res.render('home')
});

// rutas aca
router.get('/about-us',(req, res) => {
    res.render("about-us");

});

router.get('/services', (req, res) => {
    
    return res.render('services', { services })
});


//creo la vista(layouts) y renderizo "proyects"
router.get('/proyects', (req, res) => {
    
    return res.render('proyects')
})


router.get('/services/:id', (req, res) => {
    const { id } = req.params
    return res.send(`<h3>este es el servicio ${id}</h3>`)
})

//creo la vista(layouts) y renderizo (res.render) "proyects"
router.get('/about-me', (req, res) => {
    return res.render('about-me')
});

// router.get('/proyects/:id', (req, res) => {
//     const { id } = req.params
//     return res.send(`<h3>este es el servicio ${id}</h3>`)
// })

module.exports = router;
