import styles from '../../styles/Persons.module.css'
import Link from 'next/link'


const details = ({details}) => {
    return ( 
        <div>
            <h1>{details.name}, {details.age}</h1>
            <h3>{details.adress}</h3>
            <h3>{details.extra}</h3>
            <div className={styles.btn}>
                <Link href='/persons'>
                    <a className={styles.text}>Go Back</a>
                </Link>
            </div>
        </div>
     );
}

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:5000/peoples')
    const data = await res.json()

    const ids = data.map(data => data.id)
    const paths = ids.map(id => ({ params: { id: id.toString() }}))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const res = await fetch(`http://localhost:5000/peoples/${context.params.id}`)
    const data = await res.json()

    return {
        props: {
            details: data
        }
    }
}

export default details;