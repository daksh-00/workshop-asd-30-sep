const cache = {}
function cacheMiddleware(req, res, next) {
    try{
        let key = req.originalUrl || req.url
        let val = cache[key]
        if (val){
            return res.json(val)
        }
        let sendJson = res.json.bind(res)
        res.json = (data) => {
            cache[key] = data
            sendJson(data)
        }
        next()
    }catch(err){
        console.log(err)
        next()
    }
}
module.exports = cacheMiddleware
