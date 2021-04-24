module.exports={
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SC,
    access_token: process.env.ACC_TKN,
    access_token_secret: process.env.ACC_TKN_SC,
    domain: process.env.NODE_ENV === "production" ? "heroku_domain" : "http://localhost:3100",
    db_domain: "devapi.covidhelpindia.org/suppliers",
    webApp_domain: "web.app.com"
}