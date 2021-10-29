import React from 'react'
import ReactDom from 'react-dom'

// stateless functional component
// always returns return JSX

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

// const Gretting = () => {
//  return React.createElement(
//    'div',
//     {},
//      React.createElement('h1', {}, 'hello world')
//  );
// };

// Nested Components, React Tools

function Greeting() {
  return (
    <div>
      <h2>Dario del Rio</h2>
      <p>this is my message</p>
    </div>
  )
}

const Person = () => {}

ReactDom.render(<Greeting />, document.getElementById('root'))
