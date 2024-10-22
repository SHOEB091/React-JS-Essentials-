function customRender(reactElement, container){

    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */



    // Create a new DOM element of the type specified in reactElement.type
    const domElement = document.createElement(reactElement.type)
    
    // Set the inner HTML of the DOM element to the children property of reactElement
    domElement.innerHTML = reactElement.children
    
    // Loop through all properties in reactElement.props
    for (const prop in reactElement.props) {
        // Skip the 'children' property as it is already handled
        if (prop === 'children') continue;
        
        // Set each property as an attribute on the DOM element
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    
    // Append the created DOM element to the specified container
    container.appendChild(domElement)
}

// Define a reactElement object representing an anchor (<a>) element
const reactElement = {
    type: 'a', // The type of the element to create
    props: {
        href: 'https://google.com', // The href attribute for the anchor element
        target: '_blank' // The target attribute for the anchor element
    },
    children: 'Click me to visit google' // The inner text of the anchor element
}

// Select the container element where the new element will be appended
const mainContainer = document.querySelector('#root')

// Call the customRender function to render the reactElement into the mainContainer
customRender(reactElement, mainContainer)