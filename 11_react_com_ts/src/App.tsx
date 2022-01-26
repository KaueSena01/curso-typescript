import React, { createContext } from 'react';

import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Destruturing, {Category} from './components/Destruturing';
import State from './components/State';
import Context from './components/Context';

type textOrNull = string | null
type fixed = "valor" | "value"

// context
interface IAppContext{
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {

  // 1 - variaveis
  const name: string = "Sena"
  const isWorking: boolean = true


  // 2 - funções
  const userGreeting = (name: string): string => {
      return `Olá, ${name}`
  }

  const myText:textOrNull = "Algum texto"
  let mySecondText:textOrNull = null

  const value:fixed = "value" 

  // context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5
  }

  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      {isWorking ? (
        <p>Está trabalhando </p>
      ) : (
        <p>Não está trabalhando </p>
      )}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="Sena" />
      <Destruturing 
        title= "Primeiro Post"
        context= "Algum conteudo"
        commentsQty={10}
        tags={["ts", "js"]}
        category={Category.TS}
      />
      <State />
      {myText && <p>Texto</p>}
        <Context />
    </div>
    </AppContext.Provider>
  );
}

export default App;
