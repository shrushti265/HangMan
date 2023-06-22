import { useState } from 'react'
import { HangmanDrawing } from './HangmanDrawing'
import { HangmanWord } from './HangmanWord'
import { Keyboard } from './Keyboard'
import words from "./wordList.json"


function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return "test"
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetter, setGuessedLetter] = useState<string[]>([])

  const inCorrectLetter = guessedLetter.filter(
    letter => !wordToGuess.includes(letter)
  )

  return (
    <div 
    style={{ 
      maxWidth: "800px", 
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center"
      }}
      >
        <div style={{
          fontSize: "2rem",
          textAlign: "center"
        }}>Lose win
        </div>
        <div>
          <HangmanDrawing numberOfGuesses={inCorrectLetter.length}/>
          <HangmanWord/>
          <div style={{ alignSelf: "stretch" }}>
            <Keyboard /> 
          </div>
        </div>

    </div>
  )
}

export default App
