import { ProductItemsCooked } from "@/components/items/ProductItemsCooked";
import { ProductItemsHold } from "@/components/items/ProductItemsHold";
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

    redirect("/waits")
  
}

export default async function Waits () {

    const cooks = await getAllOrdersByStatus("COOKED");
    const orders = await getAllOrdersByStatus("ON_HOLD");

    return(
        <>
            <HeaderMenu />

            <div className="flex justify-between items-start">
                <div className="flex flex-wrap gap-4 px-2">
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
                <div className="flex flex-wrap gap-4 px-2">
                    {
                        orders.map( cook => (
                            <ProductItemsHold 
                                key={cook.id}
                                {...cook}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )

}