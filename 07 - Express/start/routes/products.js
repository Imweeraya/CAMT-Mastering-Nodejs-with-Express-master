const express = require('express');

const { data } = require('../data');

const router = express.Router();

router.get('/api/products', (req, res) => {
    res.send(data);
});

router.get('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find((p) => p.id === id);
    res.json(product);
});


router.post('/api/products', (req, res) => {
    const { name, imageURL, type } = req.body;

    const newProduct = {
        id: data.length + 1,
        name,
        imageURL,
        type
      };
  
    data.push(newProduct);
    res.json(newProduct);
  });


router.put('/:id', (req, res) => {
    const { new_name, new_imageURL, new_type } = req.body;
    const productId = Number.parseInt(req.params.id);
    const product = data.find((product) => product.id === productId);
  
    product.name = new_name;
    product.imageURL = new_imageURL;
    product.type = new_type;
  
    res.json(product);
  });

  
router.delete('/:id', (req, res) => {
    const productId = Number.parseInt(req.params.id);
    const productIndex = data.findIndex((product) => product.id === productId);
    data.splice(productIndex, 1);
    res.sendStatus(204);
  });
  

module.exports = router;
  
