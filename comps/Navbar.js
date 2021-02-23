import Link from 'next/link'
import Image from 'next/image'



const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src='/peoplelist.jpg' width={150} height={90} />
            </div>

            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/persons' ><a>People Listing</a></Link>
        </nav>
      );
}
 
export default Navbar;
