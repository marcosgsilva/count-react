import './App.css'
import ContadorClasse from './components/Contador'
import MeuComponentClass from './components/MyComponent'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <MeuComponentClass />
          <ContadorClasse />
        </div>
      </header>
    </div>
  )
}

export default App
