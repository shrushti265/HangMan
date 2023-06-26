import { useState, useEffect, useCallback } from 'react'
import { HangmanDrawing } from './HangmanDrawing'
import { HangmanWord } from './HangmanWord'
import { Keyboard } from './Keyboard'
import words from "./wordList.json"

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(getWord)
  const [guessedLetter, setGuessedLetter] = useState<string[]>([])

  const incorrectLetter = guessedLetter.filter(
    letter => !wordToGuess.includes(letter)
  )

  

  const addGuessedLetter = useCallback((letter: string) => {
     
      if (guessedLetter.includes(letter)) return 

      setGuessedLetter(currentLetter => [...currentLetter, letter])
  }, [guessedLetter])


  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if(!key.match(/^[a-z]$/)) return 

      e.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetter])

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
          <HangmanDrawing numberOfGuesses={incorrectLetter.length}/>
          <HangmanWord wordToGuess={wordToGuess} guessedLetter={guessedLetter}/>
          <div style={{ alignSelf: "stretch" }}>
            <Keyboard activeLetter={guessedLetter.filter(letter => {
              wordToGuess.includes(letter)
            })}
            inactiveLetter={incorrectLetter}
            addGuessedLetter={addGuessedLetter}
             /> 
          </div>
        </div>

    </div>
  )
}

export default App
