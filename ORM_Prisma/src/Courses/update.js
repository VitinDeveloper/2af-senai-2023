import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    const result = await prisma.courses.update({
        where: {
            id: '2c247d07-a133-42f4-836d-321c47abfd2a'
        },
        data: {
            name: "Curso de Java - v2",
            duration: 350,
            description: "Curso de backend com Java"
        },
    });

    console.log(result);

}

main();