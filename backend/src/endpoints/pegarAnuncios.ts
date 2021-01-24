import { Request, Response } from "express";
import { pegarAnunciosData } from "../data/pegarAnunciosData"


export default async function pegarAnuncios(req: Request, res: Response):Promise<any> {

    try {

        const result = await pegarAnunciosData()

        res.status(200).send(result)


    } catch (error) {

        res.status(400).send(error.sqlMessage || error.message)
    }
}