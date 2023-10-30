import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.findMany({
        where: {
            id: "593037f0-e666-4716-9e5e-4d859c1cdc3c"
        },

        include: {
            modules: true,
        },
    });

    //console.log(result);
    console.log(JSON.stringify(result));
}

main();
