
const express = require ("express");
const functions = require("./functions");
const path = require("path");
const app = express();

const port = 3000;

app.set("view engine", "hbs");
app.use("/assets", express.static(path.join(__dirname,"./assets")));
app.use("/js", express.static(path.join(__dirname,"./js")));

app.get("/", function (req,res){
    res.render("index", {
        pageTitle: "Zajecia 27.02",
        subTitle: "nodejs",
        subTitle: functions.someText,
        subsubsubTitle: functions.someFunction()
    })
})

app.get("/about", function (req,res){
    res.render("about", {
        mainName: "md"
    })
})

app.get("/about/marcin", function (req, res){
    res.send("strona o marcinie"
    )
});


app.listen(port, (err) => {
    if (err) {
        return console.log(`Wystapil blad: ${err}`)}
    console.log(`aplikacja dziala na porcie ${port}`)
});