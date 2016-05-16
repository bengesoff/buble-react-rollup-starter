// Import React, ReactDOM and the component.
import React from 'react'
import ReactDOM from 'react-dom'
import { DummyComponent } from './components/dummy-component.js'

// Define the root element and instantiate the DummyComponent.
const root = document.querySelector('main')
const dummyComponent = React.createElement(DummyComponent)

// Append the DummyComponent instance to the root element.
ReactDOM.render(dummyComponent, root)
