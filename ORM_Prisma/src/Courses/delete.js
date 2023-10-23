import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.delete({
        where: {
            id: '2c247d07-a133-42f4-836d-321c47abfd2a'
        },
    });

    console.log(result);

}

main();