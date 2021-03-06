const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 8089

const app = express();
app.use(logger ('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  
require("./controllers/api-controllers")(app);
require("./controllers/html-controllers")(app);


app.listen(PORT, () => {
    console.log("Listening on PORT:" + PORT)
})
