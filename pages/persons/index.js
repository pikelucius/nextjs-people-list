import styles from '../../styles/Persons.module.css'
import Link from 'next/link'

const persons = ({ peoples }) => {
    return ( 
        <>
            {peoples.map(person => (
                <Link href={'/persons/' + person.id} key={person.id} >
                    <a className={styles.single}>
                        <h1>{person.name}</h1>
                    </a>
                </Link>
            )) }
          
        </>
     );
}
 
export const getStaticProps = async () => {
    const res = await fetch(`http://localhost:5000/peoples`)
    const data = await res.json()

    return {
        props: {
            peoples: data
        }
    }
}
export default persons;
