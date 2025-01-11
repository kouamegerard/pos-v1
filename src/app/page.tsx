import {ProductItems} from "@/components/items/ProductItems";
import { HeaderMenu } from "@/components/menu/HeaderMenu";
import { prisma } from "@/db";
import Image from "next/image";

async function addOrder () {
  "use server"

  await prisma.command.create({ data: { title: "Burger BS", price: "12,4", complete: false, status: "COOKED"} })

}

function getAllOrders() {
  return prisma.command.findMany();
}

export default async function Home() {

  // await addOrder()
  const orders = await getAllOrders();

  console.log("ORDERS:::", orders)

  return (
    <>
      <HeaderMenu />
      <div>
        <ul className="flex justify-center items-center gap-4 flex-wrap">
          {
            orders.map(
              order => (
                <ProductItems
                  key={order.id}
                  {...order}
                />
              )
            )
          }
        </ul>
      </div>
    </>
  );
}
