import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '@/styles/UseEffectOne.module.css'

export default function useEffectOne() {

const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 1)
    }) 

    return(
        <>
        <div className={styles.main}>
            <div className={styles.title}>
            <Link href="/">Home</Link>
        <div className={styles.title}>
            useEffect One
        </div>
        <div className={styles.title}>
            {number}
        </div>
        </div>
            </div>
        </>
    )
}