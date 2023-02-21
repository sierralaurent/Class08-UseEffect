import Link from "next/link"

export default function useEffectOne() {

const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 1)
    }) 

    return(
        <>
        <Link href="/"></Link>
        <div>
            useEffectOne
        </div>
        <div>
            {number}
        </div>
        </>
    )
}