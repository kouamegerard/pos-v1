"use client"

import Image from "next/image"

type ProductItemsHoldProps = {
    id: string,
    title: string,
    price: string,
    complete: boolean,
}

export function ProductItemsHold ({ id, title, price, complete }: ProductItemsHoldProps) {
    return (
        <li key={id} 
            className="border border-slate-300 rounded p-1 bg-green-600"            
        >
            <label htmlFor={id}>
                <Image src={"/next.svg"} alt="Image SRC" width={100} height={100} className="w-[120px] h-[100px]"/>
                <div className="flex flex-col">
                    <span className="text-slate-800">{title}</span>
                    <span className="text-slate-800">Price: {price} €</span>
                </div>
                <input 
                    type="radio"
                    id={id} 
                    defaultChecked={complete}
                    hidden
                />
            </label>
        </li>
    )
}