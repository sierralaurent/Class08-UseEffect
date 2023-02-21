import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '@/styles/UseEffectTwo.module.css'


export default function useEffectTwo() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 50);
    },[])

    return(
        <>
        <div className={styles.main}>
        <div className={styles.title}>
        <Link href="/">Home</Link>
        </div>
        <div className={styles.title}>
            useEffect Two
        </div>
        <div className={styles.title}>
            {number}
        </div>
        </div>
        
        </>
    )
}