import { getAllOrdersByStatus } from "@/db/getAllOrdersByStatus";


export default async function Finish() {

    const orders = getAllOrdersByStatus("ON_HOLD");

    return (
        <>

        </>
    );

}