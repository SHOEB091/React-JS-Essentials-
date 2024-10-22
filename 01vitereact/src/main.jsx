import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

// Define a functional component named MyApp
function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

// Define a plain JavaScript object representing a React element
/*const ReactElement = {
    type: 'a', // The type of the element to create (an anchor tag)
    props: {
        href: 'https://google.com', // The href attribute for the anchor element
        target: '_blank' // The target attribute for the anchor element
    },
    children: 'Click me to visit google' // The inner text of the anchor element
}*/

// Define a JSX element representing an anchor tag
const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

// Define a string variable
const anotherUser = "chai aur react"

// Create a React element using React.createElement
const reactElement = React.createElement(
    'a', // The type of the element to create (an anchor tag)
    {href: 'https://google.com', target: '_blank'}, // The props for the element
    'click me to visit google', // The children (inner text) of the element
    anotherElement // Another JSX element as a child
)

// Render the created React element into the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)    