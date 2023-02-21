import Carousel from "@/components/carousel"
import Link from "next/link"
import styles from '@/styles/CarouselPage.module.css'

export default function CarouselPage() {
    return(
        <>
        <Link href="/">Home</Link>
        <Carousel/>
        </>
    )
}