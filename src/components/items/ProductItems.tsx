"use client"

import Image from "next/image"

type ProductItemsProps = {
    id: string,
    title: string,
    price: string,
}

export function ProductItems ({ id, title, price }: ProductItemsProps) {
    return (
        <li key={id} className="border border-slate-300 rounded p-1 bg-slate-100">
            <Image src={"/next.svg"} alt="Image SRC" width={100} height={100} className="w-[120px] h-[100px]"/>
            <div className="flex flex-col">
                <span className="text-slate-800">{title}</span>
                <span className="text-slate-800">Price: {price} €</span>
            </div>
        </li>
    )
}