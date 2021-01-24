import { connection } from "../index";

export default async function criarAnuncioData(id: number, titulo: string, data: any, descricao: string) {

await connection.raw(`
INSERT INTO classificados
VALUES(${id}, "${titulo}", "${data}", "${descricao}")
`)
}