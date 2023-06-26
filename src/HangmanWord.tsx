type HangmanWordProps = {
    wordToGuess: string,
    guessedLetter: string[]
}

export function HangmanWord({wordToGuess, guessedLetter}: HangmanWordProps){
    return <div 
    style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace"
    }}>
        {wordToGuess.split("").map((ele, index) => (
            <span style={{ borderBottom:".1em solid black"}} key={index}>
                <span style={{
                    visibility: 
                    guessedLetter.includes(ele) 
                    ? "visible" 
                    : "hidden"
                }}>
                    {ele}
                </span>
            </span>
        ))}
    </div>
}