import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.user.update({
        where: {
            id: 'e42b8f10-1f8a-43a4-b283-7ae62e6b749f',
        },
        data: {
            name: 'Ciclaninho',
            full_name: 'Ciclaninho natural',
            cpf: 7777,
            address: 'Academia de bairro, Floripa mil grau - SC, 444',
        },
    });

    console.log(result);

}

main();