import styles from "./keyboard.module.css"

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]
type keyboardProps = {
    addGuessedLetter: (letter: string) => void
    activeLetter: string[],
    inactiveLetter: string[]
}

export function Keyboard ({
    addGuessedLetter, 
    activeLetter, 
    inactiveLetter
}: keyboardProps) {
    return (
        <div
            style={{
                display:"grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr)",
                gap: ".5rem"
            }}
        >
            {KEYS.map(key => {
                const isActive = activeLetter.includes(key)
                const isInactive = inactiveLetter.includes(key)
                return (
                <button 
                onClick={() => addGuessedLetter(key)}
                className={ `${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inActive : ""
            }` }
                disabled={isActive || isInactive}
                 key={key} 
                >
                    {key}
                </button>
            )
                })}
            
        </div>
    )
}