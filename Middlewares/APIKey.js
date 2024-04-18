const api_key_mid = (req, res, next) => {
    const apiKey =  req.query.apiKey
    if(apiKey === process.env.API_SECRET) {
        next()
    } else {
        res.status(400).json({"err": {"message": "API Key is required!"}})
    }
}


export{api_key_mid}