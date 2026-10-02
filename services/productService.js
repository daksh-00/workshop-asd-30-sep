const db = require('../database/db')
async function getAllProducts() {
    return await db.readFileWithDelay()
}
async function getProductById(id) {
    let products = await db.readFileWithDelay()
    return products.find((item)=>{return item.id === id})
}
module.exports = {
    getAllProducts,
    getProductById
}
