const express = require("express");
const app = express();
const port = 3333

app.set("view engine")

app.listen(port, () => {
    console.log(`Servidor iniciado: ${port}`);
});
