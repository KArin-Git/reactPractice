import { useState } from 'react' // react hook
import { CORE_CONCEPTS } from './data'
import Header from './components/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx'

function App() {
  const [selectedTopic, setSelectedTopic] = useState('Please click a button')

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)
  }

  console.log('APP CPMPONENT EXE') // 1 time

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              desc={CORE_CONCEPTS[0].desc}
              image={CORE_CONCEPTS[0].image}
            />
            {/* short hand version */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  )
}

export default App
