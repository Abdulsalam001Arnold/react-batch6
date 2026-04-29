
import { Link } from "react-router-dom"
import { userStore } from "../store/userStore.js"
export default function Navbar() {
    const {isLoggedIn, logOut, user} = userStore()
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

            {isLoggedIn ? (
                <section>
                <h1>Welcome {user?.username}</h1>
                <h1>Welcome {user?.email}</h1>


                <div className="mt-5">
                    <button onClick={logOut}>Logout</button>
                </div>
                </section>
            ) : (
                <div>
                <Link to="/signup">
                <li>Sign-up</li>
                </Link>

                <Link to="/login">
                <li>Login</li>
                </Link>
                </div>
            )}
            </ul>
        </nav>
    )
}