let cache = {}
function cacheMiddleware(req, res, next) {
    try{
        let key = req.originalUrl || req.url
        let now = Date.now()
        let entry = cache[key]
        if (entry && (now - entry.createdAt < 60000)){
            res.setHeader('X-Cache', 'HIT')
            return res.json(entry.data)
        }
        res.setHeader('X-Cache', 'MISS')
        let sendJson = res.json.bind(res)
        res.json = (data) => {
            cache[key] = {
                data: data,
                createdAt: Date.now()
            }
            sendJson(data)
        }
        next()
    }catch(err){
        console.log(err)
        next()
    }
}
function clearCache(){
    cache = {}
}
module.exports = {
    cacheMiddleware,
    clearCache
}
