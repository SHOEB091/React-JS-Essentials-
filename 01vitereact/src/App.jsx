import Chai from "./chai"

// Define a functional component named App
function App() {
  // Declare a constant variable named username and assign it the value "chai aur code"
  const username = "chai aur code"


//Evaluation Expression {} in this we just put final outcome of the javaScript code 

  // Return the JSX to be rendered
  return (
    <>
      {/* Render the Chai component */}
      <Chai/>
      {/* Render an h1 element with the text "chai aur react" followed by the value of username */}
      <h1>chai aur react {username}</h1>
      {/* Render a paragraph element with the text "test para" */}
      <p>test para</p>
    </>
  )
}

// Export the App component as the default export
export default App