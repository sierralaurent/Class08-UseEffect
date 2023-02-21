import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '@/styles/useEffectOne.module.css'

export default function useEffectOne() {

const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 1)
    }) 

    return(
        <>
        <div className={styles.main}>
        <Link href="/">Home</Link>
        <div className={styles.title}>
            useEffect One
        </div>
        <div className={styles.title}>
            {number}
        </div>
        </div>
        </>
    )
}