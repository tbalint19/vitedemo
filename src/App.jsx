import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LandingPage from './pages/LandingPage'

const initialState = [
  {
    placeholder: "Felhasznalo nev",
    type: "text",
    value: "",
    isDisabled: false
  },
  {
    placeholder: "Email cim",
    type: "email",
    value: "",
    isDisabled: false
  },
  {
    placeholder: "Jelszo",
    type: "password",
    value: "",
    isDisabled: false
  },
]

const App = () => {
  
  const [ page, setPage ] = useState("home")

  const [ formState, setFormState ] = useState(initialState)

  const setIsDisabled = (index) => {
    setFormState(formState.map(
      (state, i) => i !== index ? state : { ...state, isDisabled: !state.isDisabled }))
  }

  const setInputValue = (index, value) => {
    setFormState(formState.map(
      (state, i) => i !== index ? state : { ...state, value }))
  }

  return (
    <div className="App">
      <nav>
        { [ "home", "about", "landing" ].map(option => (
          <button key={option} onClick={() => setPage(option)}>
            { option }
          </button>
        )) }
      </nav>

      <main>
          { page === "home" && <HomePage /> }
          { page === "about" &&  <AboutPage />}
          { page === "landing" &&  <LandingPage />}
      </main>

      <section>
        { formState.map((inputData, index) => (
           <div key={inputData.placeholder}>
              <input
                type={inputData.type}
                placeholder={inputData.placeholder}
                disabled={inputData.isDisabled}
                value={inputData.value}
                onChange={(e) => setInputValue(index, e.target.value)}/>
              <button onClick={() => setIsDisabled(index)}>
                Edit
              </button>
            </div>
        )) }
      </section>
    </div>
  )
}

export default App
