
import { Link } from "react-router-dom"

export default function Navbar() {

    return(
        <nav className="bg-black w-full px-4 py-3 flex justify-center items-center">
            <ul className="flex md:flex-col items-center justify-center gap-4 text-white">
                <Link to="/">
                <li>Home</li>
                </Link>

                <Link to="/about">
                <li>About</li>
                </Link>

                <Link to="/contact">
                <li>Contact</li>
                </Link>

                <Link to="/signup">
                <li>Sign-up</li>
                </Link>

                <Link to="/login">
                <li>Login</li>
                </Link>
            </ul>
        </nav>
    )
}