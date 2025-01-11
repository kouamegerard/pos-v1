

export async function HeaderMenu () {
    return(

        <header className="flex justify-between items-center p-8 mb-4 ">
            <h1 className="text-2xl ">
                <a href="/" className="text-slate-800 dark:text-slate-100">POS ORDER</a>
            </h1>
            <div className="flex justify-between items-center gap-4">
                <a href="/orders" className="px-4 py-2 rounded bg-slate-500 text-slate-100 text-sm">Orders</a>
                <a href="/cooked" className="px-4 py-2 rounded bg-slate-800 text-slate-100 text-sm">Cooked</a>
            </div>
        </header>
        
    )
}