/* Author: Franndy Abreu */

const next = require('next')
const express = require('express');
const { wooConfiguration } = require('./config')
const WooCommerceAPI = require('woocommerce-api');
const WooCommerce = new WooCommerceAPI({
    url: wooConfiguration.url,
    consumerKey: wooConfiguration.consumerKey,
    consumerSecret: wooConfiguration.consumerSecret,
    wpAPI: true,
    version: 'wc/v1'
});
const port = 3001;
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare().then(() => {
    // Once the next app init is ready, create express server.
    const server = express();

    server.get('/products', (req, res) => {
        WooCommerce.get('products', (err, data, apiResponse) => {
            if(err) throw err;
            res.json(JSON.parse(apiResponse))
        })
    })

    // Wilcard route to be handle by Nextjs.
    server.get('*', (req, res) => {
        return handler(req, res)
    })

    server.listen(port, (err) => {
        if(err) {
            throw err;
        }
        console.log(`App running on port ${port}`)
    })
}).catch(err => {
    console.error(err.stack);
    process.exit(1);
})