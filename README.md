
(づ ◕‿◕ )づ 
【The Hangman】: The Quiz Thriller 

By Valentina, Yasmin & Arsentii
❗Game rules:
- Guess one letter at a time
- Wrong guesses = lost lives
- You have 6 lives (attempts)
- Guess the word to win!

▔\▁((.′◔_′◔.))▁/▔


🔧 Tech Stack & Features
- Language: JavaScript 
- Game Loop: Classic while-based loop until win/loss
- Data Structures:
- wordsArrayDescription: array of objects with word & hint
- guessingWord: array tracking user progress
- Rendering: Console-based ASCII graphics

State Management:
- Tracks attempts, available letters, win/lose states

User Input:
- Case-insensitive letter guessing
- Commands: EXIT / END to quit the game
  
ASCII Hangman Frames for visual progress
Hint System and dynamic letter display

🚧 Challenges We Faced
- ❗ Managing input case-sensitivity (solved with .toUpperCase())

- 🔁 Avoiding repeated letter guesses (replaced with ☒)

- 🔄 Ensuring letter availability updates dynamically

- 🎭 Differentiating between game states and rendering accurate messages

- 🔍 Tricky error messages and input flow without GUI

- 📉 Keeping logic in one file — good for MVP, but harder to scale

💡 Future Improvements
- Modularize code (split logic, render, data)

- Difficulty levels (word length / max attempts)

- Highlight guessed letters
