import Image from "next/image"

export default function Carousel() {
const [img, setImg] = useState(0);

const changeImage = (change) => {

}

    return(
        <>
        <div style={{
            backgroundImage:"url(/carousel-images/" + img + ".jpg",
            backgroundSize: 'cover',
            backgroundRepeat: "no-repeat",
            width: 500,
            height: 300
        }}>
            <Image 
            src={"/icons/leftArrow.png"}
            alt={"/icons/leftArrow.png"}
            width={100}
            height={100}
            onClick={() => changeImage("backward")}
            />
            <Image 
            src={"/icons/rightArrow.png"}
            alt={"/icons/rightArrow.png"}
            width={100}
            height={100}
            onClick={() => changeImage("forward")}
            />

        </div>
        </>
    )
}