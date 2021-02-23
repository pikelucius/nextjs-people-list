import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>PEOPLE LIST | Home </title>
        <meta name="keywords" content="people"/>
      </Head>
    
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam suscipit nobis vero, sequi laboriosam ex assumenda natus autem maxime aspernatur velit ab asperiores, possimus commodi minima ipsam tenetur distinctio! Ab!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam suscipit nobis vero, sequi laboriosam ex assumenda natus autem maxime aspernatur velit ab asperiores, possimus commodi minima ipsam tenetur distinctio! Ab!</p>
      </div>
    </>
   
  )
}
