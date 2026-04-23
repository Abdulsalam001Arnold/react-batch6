
import Counter from "../components/Counter.jsx"
import { useEffect, useState } from "react"

export default function Homepage() {
    useEffect(() => {
        console.log("This is my homepage")
    }, [])

    const [characters, setCharacters] = useState([])

    useEffect(() => {
      const fetchData = async () => {
         const response = await fetch("https://dragonball-api.com/api/characters")

         const data = await response.json()

         const items = data.items

         setCharacters(items)
      }

      fetchData()
    }, [])

    return(
        <div>
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