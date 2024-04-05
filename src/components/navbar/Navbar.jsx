import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
import { auth } from "@/lib/auth";
import Image from "next/image";

const Navbar = async () => {

  const session = await auth();

  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>
      <div style={{display: 'flex', gap: '10px' }}>
        <img src="/logo.jpg"  alt="" style={{width: '30px', height:'30px'}}/>
          BrandName
      </div>
          </Link>

      <div>
        <Links session={session}/>
      </div>
    </div>
  )
}

export default Navbar