import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // select * from courses
    const result = await prisma.courses.findMany({
        where: {
            name: {
                equals: 'Curso de React Native'
            }
        }
    });

    console.log(result);

}

main();