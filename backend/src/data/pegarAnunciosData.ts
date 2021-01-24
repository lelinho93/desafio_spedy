import { connection } from "../index";

export async function pegarAnunciosData() {

    const result: any = await connection.raw(`
    SELECT * FROM classificados
    `)
    return result[0]
}