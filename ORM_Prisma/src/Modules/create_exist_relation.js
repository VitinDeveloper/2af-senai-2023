import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.modules.create({
        data: {
            description: "Aprendendo firebase do zero",
            name: "Aprendendo Firebase",
            courses: {
                // Criar um novo relacionamento
                create: {
                    // Abrir o relacionamento
                    course: {
                        // Conectar ao relacionamento existente
                        connect: {
                            id: "e27d03d2-f5ca-4f0c-908e-1d1bdda7a83e",
                        },
                    },
                },
            },
        },
    });

    console.log(result);
}

main();
