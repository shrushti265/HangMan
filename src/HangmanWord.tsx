export function HangmanWord(){
    const word = "test";
    const testLetters = [ "e"]
    return <div 
    style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace"
    }}>
        {word.split("").map((ele, index) => (
            <span style={{ borderBottom:".1em solid black"}} key={index}>
                <span style={{
                    visibility: 
                    testLetters.includes(ele) 
                    ? "visible" 
                    : "hidden"
                }}>
                    {ele}
                </span>
            </span>
        ))}
    </div>
}