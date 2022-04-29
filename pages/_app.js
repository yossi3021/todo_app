import '../styles/globals.css'
import {useRouter} from "next/router"
import styles from "../styles/App.module.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
