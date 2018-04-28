const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
const parser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
  console.log('server is running on');
});

app.get('/product/:productid', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../public') })
})


app.get('/product/:productId/sizes_qtys', (req, res) => {
  axios.get(`http://13.57.205.67:3001/product/${req.params.productId}/sizes_qtys`)
    .then((data) => {
      res.status(200).send(data.data)
    })
    .catch((err) => {
      res.status(500).send(err)
    });
});

app.get('/product/:productId/addtocart', (req, res) => {
  axios.get(`http://13.57.205.67:3001/product/${req.params.productId}/addtocart`)
    .then((data) => {
      res.status(200).send(data.data)
    })
    .catch((err) => {
      res.status(500).send(err)
    });
});

app.get('/product/:productId/colors', (req, res) => {
  axios.get(`http://54.183.208.237:3003/product/${req.params.productId}/colors`)
    .then((data) => {
      res.status(200).send(data.data)
    })
    .catch((err) => {
      res.status(500).send(err)
    });
});

app.get('/product/:productId/images', (req, res) => {
  axios.get(`http://54.183.208.237:3003/product/${req.params.productId}/images`)
    .then((data) => {
      res.status(200).send(data.data)
    })
    .catch((err) => {
      res.status(500).send(err)
    });
});

app.get('/productdetails/:productId', (req, res) => {
  axios.get(`http://54.183.208.237:3003/productdetails/${req.params.productId}`)
    .then(data => res.status(200).send(data.data))
    .catch((err) => {
      res.status(500).send(err)
    });
});

app.get('/reviews/:productId', (req, res) => {
  axios.get(`http://13.58.109.199:3005/reviews/${req.params.productId}`)
    .then((data) => {
      res.status(200).send(data.data)
    })
    .catch((err) => {
      res.status(500).send(err)
    });
});
