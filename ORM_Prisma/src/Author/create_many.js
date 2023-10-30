import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
    const result = await prisma.authors.create({
        data: {
            name: "Machado de Assis",
            Books: {
                createMany: {
                    data: [
                        { name: "Dom Casmurro" },
                        { name: "Memórias Póstumas de Brás Cubas" },
                    ],
                },
            },
        },
    });

    console.log(result);
}

main();
