const path = require('path')
const fs = require('fs/promises')
let pathTofile = path.join(__dirname, '../db.json')
async function readmyFile(){
    try{
        let data = await fs.readFile(pathTofile, 'utf-8')
        const items = JSON.parse(data)
        return items
    }catch(err){
        console.log(err)
    }
}
async function writeMyFile(data){
    try{
        await fs.writeFile(pathTofile, JSON.stringify(data, null, 2))
    }catch(err){
        console.log(err)
    }
}
async function readFileWithDelay() {
    await new Promise((resolve, reject)=>{ setTimeout(resolve,1500) })
    let products = await readmyFile()
    return products
}
module.exports = {
    readmyFile,
    writeMyFile,
    readFileWithDelay
}
