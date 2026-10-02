const db = require('../database/db')
async function getAllProducts() {
    return await db.readFileWithDelay()
}
async function getProductById(id) {
    let products = await db.readFileWithDelay()
    return products.find((item)=>{return item.id === id})
}
async function createProduct(productData) {
    let products = await db.readmyFile()
    let newId = products.length ? Math.max(...products.map((p)=>{return p.id})) + 1 : 1
    let newProduct = { id: newId, ...productData }
    products.push(newProduct)
    await db.writeMyFile(products)
    return newProduct
}
async function updateProduct(id, productData) {
    let products = await db.readmyFile()
    let index = products.findIndex((item)=>{return item.id === id})
    if (index === -1){
        return null
    }
    products[index] = { id: id, ...productData }
    await db.writeMyFile(products)
    return products[index]
}
async function patchProduct(id, productData) {
    let products = await db.readmyFile()
    let index = products.findIndex((item)=>{return item.id === id})
    if (index === -1){
        return null
    }
    products[index] = { ...products[index], ...productData, id: id }
    await db.writeMyFile(products)
    return products[index]
}
async function deleteProduct(id) {
    let products = await db.readmyFile()
    let index = products.findIndex((item)=>{return item.id === id})
    if (index === -1){
        return null
    }
    let deleted = products.splice(index, 1)[0]
    await db.writeMyFile(products)
    return deleted
}
module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    patchProduct,
    deleteProduct
}
