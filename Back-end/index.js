const express = require("express");
const app = express();
const http = require("http");
 
const server = http.Server(app);
const port =  4000;
 
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const WooCommerce = new WooCommerceRestApi({
    url: 'https://swistore.com/korsi/', // Your store URL
    consumerKey: 'ck_75d02998e8d07a69077a018edd9dad04d0040d3d', // Your consumer key
    consumerSecret: 'cs_39331b474762dec8b3653934672e08b45760e512', // Your consumer secret
    version: 'wc/v3' // WooCommerce WP REST API version
  });
 

  let storeData=[];
  WooCommerce.get("products")
  .then((response) => {
    response.data.map(e => {
 storeData.push(e.name)
    })
  })
  .catch((error) => {
    console.log(error.response.data);
  });
  console.log(storeData)
  

  app.get('/', (req, res) => {
    res.send(storeData)
  })







server.listen(port, (err) => {
    if (err) throw logger.error("the server is not running !! " + PORT);
    console.log(`** the server is running on port ${port} **`);
  });