import { Request, Response } from "express";
import criarAnuncioData from "../data/criarAnunciosData"

export default async function criarAnuncio (req: Request, res: Response): Promise<void> {

    try {

        if( !req.body.titulo || !req.body.descricao){
         throw new Error("Existe algum campo em branco, preencha corretamente!")
     }

        const id = Date.now()

        const today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        
        const data = dd + '/' + mm + '/' + yyyy;

        await criarAnuncioData(
            id,
            req.body.titulo,
            data,
            req.body.descricao
        )

        res.status(200).send(`Anúncio "${req.body.titulo}" cadastrado com sucesso!`)

    } catch(error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}