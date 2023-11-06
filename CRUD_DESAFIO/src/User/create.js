import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.user.create({
        data: {
            name: "Saulo",
            full_name: "Saulo Amor Divino",
            cpf: 4002,
            address: "Senai casa, Floripa mil grau - SC, 12345"
        },
        // data: {
        //     name: "Ciclano",
        //     full_name: "Ciclano junior",
        //     cpf: 6767,
        //     address: "Iron Berg, Floripa mil grau - SC, 777"
        // },
        // data: {
        //     name: "Fulano",
        //     full_name: "Fulano trembolono",
        //     cpf: 9646,
        //     address: "Academia dos ratão, Floripa mil grau - SC, 123"
        // },
    });

    console.log(result);

}

main();