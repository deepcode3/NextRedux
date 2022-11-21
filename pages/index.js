import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSelector, useDispatch } from "react-redux";
import { iconAction } from "../store/icon-slice";
import sun24 from "../icons/kat1.jpeg";
import moon30 from "../icons/kat2.jpeg";
import Link from 'next/link'

export default function Home() {

  const dispatcher = useDispatch()

  let icon = useSelector(state => state.icon)

  function changeIcon() {

    icon.icon === "moon" ? dispatcher(iconAction.iconSun()) : dispatcher(iconAction.iconMoon())

  }


  return (
    <div style={{ backgroundColor: icon.icon === "moon" ? "white" : "#000000b5" }} className={styles.container}>

      <main className={styles.main}>
        <div className='NavBar'> 
          <Link href="/">Home
          </Link>
          <Link href="/about">About
          </Link>
        </div>

        <div onClick={changeIcon} className='iconBox'>
          <Image
            width={700}
            height={200}
            objectFit="cover"
            src={icon.icon === 'moon' ? moon30 : sun24}
            alt="image"
          />
        </div>
        </main>
        </div>
  )
}