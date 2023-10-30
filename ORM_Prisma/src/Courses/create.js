import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de React Native",
            duration: 300,
            description: "Curso com 300h de React Native",

            teacher: {
                connectOrCreate: {
                    where: {
                        name: "Bruno Fernandes",
                    },
                    create: {
                        name: "Bruno Bandeira",
                    },
                },
            },
        },
    });



    console.log(result);

}

main();