const productService = require('../services/productService')
const { clearCache } = require('../middleware/cache')
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
async function createProduct(req, res) {
    try{
        let product = await productService.createProduct(req.body)
        clearCache()
        res.status(201).json(product)
    }catch(err){
        console.log(err)
    }
}
async function updateProduct(req, res) {
    try{
        let {id} = req.params
        id = Number(id)
        let product = await productService.updateProduct(id, req.body)
        if (product){
            clearCache()
            res.json(product)
        }else{
            res.status(404).json({ message: 'Product not found' })
        }
    }catch(err){
        console.log(err)
    }
}
async function patchProduct(req, res) {
    try{
        let {id} = req.params
        id = Number(id)
        let product = await productService.patchProduct(id, req.body)
        if (product){
            clearCache()
            res.json(product)
        }else{
            res.status(404).json({ message: 'Product not found' })
        }
    }catch(err){
        console.log(err)
    }
}
async function deleteProduct(req, res) {
    try{
        let {id} = req.params
        id = Number(id)
        let product = await productService.deleteProduct(id)
        if (product){
            clearCache()
            res.json(product)
        }else{
            res.status(404).json({ message: 'Product not found' })
        }
    }catch(err){
        console.log(err)
    }
}
module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    patchProduct,
    deleteProduct
}
