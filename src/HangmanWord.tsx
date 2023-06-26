type HangmanWordProps = {
    wordToGuess: string,
    guessedLetter: string[]
    reveal?: boolean
}

export function HangmanWord({reveal=false, wordToGuess, guessedLetter}: HangmanWordProps){
    return <div 
    style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace"
    }}>
        {wordToGuess.split("").map((letter, index) => (
            <span style={{ borderBottom:".1em solid black"}} key={index}>
                <span style={{
                    visibility: 
                    guessedLetter.includes(letter) || reveal
                    ? "visible" 
                    : "hidden",
                    color: !guessedLetter.includes(letter) || reveal ? "red" : "black"
                }}>
                    {letter}
                </span>
            </span>
        ))}
    </div>
}