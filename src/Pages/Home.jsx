
import Counter from "../components/Counter.jsx"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"

export default function Homepage() {


    const [characters, setCharacters] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        try {
            const response = await fetch("https://dragonball-api.com/api/character")

            if(!response.ok) {
                toast.error("Failed to get a response from the server.")
                throw new Error("Failed to fetch data")
            }
            const data = await response.json()
            const items = data.items
            toast.success("Data fetched successfully")
            setCharacters(items)
        } catch (err) {
            toast.error(err.message)
            throw new Error(err)
        }
      }

      fetchData()
    }, [])

    return(
        <div>
            <ToastContainer/>
            <h1>This is my homepage</h1>

            <Counter/>

            {characters.map((character) => (
                <div key={character.id}>
                    <img src={character.image} alt="" />
                </div>
            ))}
        </div>
    )
}