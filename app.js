// babel.config.js
module.exports = {
	presets: [
	  '@vue/cli-plugin-babel/preset'
	]
  } 

// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
    res.send("<h1>Hello World!</h1>")
})

// start the server listening for requests
// app.listen(process.env.PORT || 5000, 
//     () => console.log("Server is running..."));

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", 
    this.address().port, 
    app.settings.env);
});    