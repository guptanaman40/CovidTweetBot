const app = require('./app');

app.listen(3100, (err, data)=>{
    if(err) return console.log(err);
    console.log("Server running on port 3100");
})