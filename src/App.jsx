
import CoreConcept from './component/coreConcepts/CoreConcept';
import Header from './component/Header/Header';
import component from './assets/components.png';
import config from './assets/config.png';
import jsx from './assets/jsx-ui.png';
import state from './assets/state-mgmt.png';
import {CORE_CONCEPTS} from './data'; 
import TabButton from './component/tabButton/TabButton';


function App() {
  // console.log(CORE_CONCEPTS[0])
  const xyz =() =>{
    console.log('Hello World')
  }
  return (
    <div>
    
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>
            Core Concepts
          </h2>

          <ul>
            {/* <CoreConcept  {...CORE_CONCEPTS[0]} />
            <CoreConcept  {...CORE_CONCEPTS[1]} />
            <CoreConcept  {...CORE_CONCEPTS[2]} />
            <CoreConcept  {...CORE_CONCEPTS[3]} /> */}
            

            {CORE_CONCEPTS.map(
              (concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))
            
            }
          </ul>

        </section>

        <section id='examples'>
          <h2>Examples</h2>

          <menu>
            <TabButton select={xyz} >Component </TabButton>
            <TabButton >JSX </TabButton>
            <TabButton >Hooks </TabButton>
            <TabButton >Component2 </TabButton>
          </menu>

        </section>
      </main>

    </div>
  );
}

export default App;
