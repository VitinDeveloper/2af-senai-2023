import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.coursesModules.delete({
        where: {
            id: "afee881f-f585-4552-b6db-f5b088674891",
        },
    });

    console.log(result);
}

main();