import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Player from './components/Player'
import Board from './components/Board'
import { createContext, useReducer} from 'react';
import Counter from './components/Counter';
import counterContext from './context';


function App() {

  const reducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
      case "add":
        return state + 1
      case "subtract":
        return state - 1
      default:
        return state
    }
  }
  const initialState = 0
  
  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <div>
      <Header />
      <Player whichPlayer='x' />
      <Player whichPlayer='o' />
      <Board />
      <counterContext.Provider value={{ state, dispatch }}>
        <Counter />
      </counterContext.Provider>

    
    </div>


  );
}

export default App;
