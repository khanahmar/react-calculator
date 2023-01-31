import logo from "./logo.svg"
import "./App.css"
import Box from "./Box"
import React from "react"

function App() {
  const [values, setValues] = React.useState("")
  let check = false
  function getText(event) {
    if (event.target.innerText === "=") {
      console.log("click")
      console.log(check)
      return (check = true)
    }
    setValues((preValue) => {
      check = false
      return preValue + event.target.innerText
    })
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Result"
        value={check ? eval(values) : values}
        name="result"
      />
      <Box onClick={getText} />
    </div>
  )
}

export default App
