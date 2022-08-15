const express = require("express");
const app = express();
const port = 3333

app.use(express.static("/public"));

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("page/pagina-inicial")
})

app.get("/login", (req, res) => {
    res.render("page/login")
})

app.listen(port, () => {
    console.log(`Servidor iniciado: ${port}`);
});

