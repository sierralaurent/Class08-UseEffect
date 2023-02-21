import Link from 'next/link'
import { useEffect, useState } from "react"
import styles from '@/styles/useEffectThree.module.css'


export default function useEffectThree() {
const [number, setNumber] = useState(0);

const [value, setValue] = useState(-10);

useEffect(() => {
    setValue(value + 10)
}, [number])
    return(
        <>
        <div className={styles.main}>
        <div className={styles.title}>
        <Link href="/">Home</Link>
        </div>
        <div className={styles.title}>
            <button onClick={() => setNumber(number + 1)}>Click me</button>
        </div>
        <div className={styles.title}>
            useEffectThree
        </div>
        <div className={styles.title}>
            {value}
        </div>

        </div>
        </>
    )
}