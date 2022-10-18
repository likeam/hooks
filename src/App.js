import React from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search';
import Dropdown from './components/Dropdown';


const items = [
  {
    title: 'What is React?',
    content: 'React is a fornt end javascript framework'
  },

  {
    title: 'Why use React?',
    content: 'React is a favorite JS liabrary among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
];

const App = () => {
  return (
    <div>
      <Dropdown  />
    </div>
  )
}

export default App


