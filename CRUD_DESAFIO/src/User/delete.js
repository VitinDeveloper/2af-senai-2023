import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.user.delete({
        where: {
            id: 'f8bdc09e-37e5-42a5-ac64-077e011661d8',
        },
    });

    console.log(result);

}

main();