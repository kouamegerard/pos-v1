import { prisma } from "@/db";


export async function getAllOrdersByStatus( status: string ){

    return prisma.command.findMany({
        where:{
            status: status
        }
    })

}