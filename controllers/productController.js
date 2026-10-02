const productService = require('../services/productService')
async function getProducts(req, res) {
    try{
        let products = await productService.getAllProducts()
        res.json(products)
    }catch(err){
        console.log(err)
    }
}
async function getProductById(req, res) {
    try{
        let {id} = req.params
        id = Number(id)
        let product = await productService.getProductById(id)
        res.json(product)
    }catch(err){
        console.log(err)
    }
}
module.exports = {
    getProducts,
    getProductById
}
