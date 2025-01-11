import { ProductItemsCooked } from "@/components/items/ProductItemsCooked";
import { HeaderMenu } from "@/components/menu/HeaderMenu";
import { prisma } from "@/db";
import { getAllOrdersByStatus } from "@/db/getAllOrdersByStatus";
import { redirect } from "next/navigation";


async function toggleIsReady(id: string, complete: boolean) {
    "use server"
  
    await prisma.command.update({ 
      where: {id}, 
      data: {
        complete,
        status: "ON_HOLD"
      }
    })

    redirect("/cooked")
  
  }

export default async function Cooked () {

    const cooks = await getAllOrdersByStatus("COOKED");

    return(
        <>
            <HeaderMenu />

            <div className="flex flex-wrap gap-4">
                {
                    cooks.map( cook => (
                        <ProductItemsCooked 
                            key={cook.id}
                            {...cook}
                            toggleIsReady={toggleIsReady}
                        />
                    ))
                }
            </div>
        </>
    )

}