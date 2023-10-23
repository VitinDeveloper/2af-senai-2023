import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de Java",
            duration: 300,
            description: "Curso de backend com Java"
        }
    });

    console.log(result);

}

main();