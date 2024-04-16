import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port=5500;

app.use(express.static(__dirname+'/front-end'));
app.use(express.static(__dirname+'/img'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res) => {
    res.sendFile(__dirname + "/front-end/index.html")
})

app.post("/",(req,res) => {
    res.sendFile(__dirname + "/front-end/home.html")
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
} );