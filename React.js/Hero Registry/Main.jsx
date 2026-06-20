import initialHeroesList from "./Heroes-List"
import { useState } from "react"
export default function Main() {
    const [heroesList, setHeroesList] = useState(initialHeroesList)
    function addNewHero(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newHero = formData.get("hero").trim();
        setHeroesList(function (prevHeroesList) {
            const heroExists = prevHeroesList.some(
                hero => hero.toLowerCase() === newHero.toLowerCase()
            )
            if (heroExists || newHero.trim() === "") {
                return prevHeroesList
            } else {
                return [...prevHeroesList, newHero]
            }
        })
        event.currentTarget.reset()
    }

    function removeHero(heroToRemove) {
        setHeroesList((prevHeroesList) => prevHeroesList.filter(hero => hero !== heroToRemove))
    }

    return (
        <main>
            <form onSubmit={addNewHero}>
                <input type="text" placeholder="e.g. me" name="hero"></input>
                <button>Add hero</button>
            </form>
            <div className="heroes-list">
                {(heroesList.length === 0) ? (
                    <p className="empty-state-message">No heroes enrolled</p>
                ) : (
                    <>
                        <p>Heroes enrolled({heroesList.length})</p>
                        <ul>
                            {
                                heroesList.map((hero) => <li key={hero}>
                                    {hero}
                                    <button onClick={() => removeHero(hero)}>Remove</button></li>)
                            }
                        </ul>
                    </>
                )}
            </div>
        </main>
    )
}
