import { HeaderMenu } from "@/components/menu/HeaderMenu";
import { prisma } from "@/db";
import { redirect } from "next/navigation";

async function createOrder(data: FormData) {
    "use server"

    console.log(data)

    const title = data.get('title')?.valueOf()
    const price = data.get('price')?.valueOf()

    if (typeof title !== "string" || title.length === 0)
        throw new Error("Invalid Title...")

    if (typeof price !== "string" || price.length === 0)
        throw new Error("Invalid Price...")

    await prisma.command.create({
        data: {
            title: title,
            price: price
        }
    })
    
    redirect("/")

}

export default async function Orders () {

    return(
        <>
            <HeaderMenu />

            <div>
                <form action={createOrder} className="flex gap-4 flex-col">
                    <div>
                        <label htmlFor="title">
                            <span className="block">Title</span>
                            <input 
                                type="text" 
                                name="title" 
                                id="title" 
                                placeholder="Enter product title" 
                                className="border border-slate-500 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="price">
                            <span className="block">Price</span>
                            <input 
                                type="text" 
                                name="price" 
                                id="price" 
                                placeholder="Enter product price" 
                                className="border border-slate-500 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
                            />
                        </label>
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            name="submit" 
                            className="bg-slate-800 dark:bg-slate-100 px-8 py-2 rounded dark:text-slate-800">
                                <span>Submit</span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )

}