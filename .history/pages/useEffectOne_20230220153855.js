import Link from "next/link"
import { useEffect, useState } from "react"

export default function useEffectOne() {

const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 1)
    }) 

    return(
        <>
        <Link href="/">Home</Link>
        <div>
            useEffect One
        </div>
        <div>
            {number}
        </div>
        </>
    )
}