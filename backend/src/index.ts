import knex from "knex";
import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import criarAnuncio from "./endpoints/criarAnuncio";
import pegarAnuncios from "./endpoints/pegarAnuncios";

const cors = require("cors");

dotenv.config();

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","*")
    app.use(cors())
    next();
})

app.use(express.json());

/******************************************************/

app.post("/criarclassificado", criarAnuncio)

app.get("/classificados", pegarAnuncios)


/******************************************************/


const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.log(`Failure upon starting server.`);
    }
});