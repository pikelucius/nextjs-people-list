import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'

const NotFound = () => {
  const router = useRouter()

  const initTime = 5
  const [time, setTime] = useState(initTime)
  useEffect(() => {

    if(time !== 0) {
     setTimeout(() => {
        setTime(time-1)
        }, 1000)

    } else {
        clearTimeout();

        router.push('/')
            
    }


  }, [time])

  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found :(</h2>
      <p>Going back to the <Link href="/"><a>Homepage</a></Link> in {time} seconds...</p>
    </div>
  );
}
 
export default NotFound;

