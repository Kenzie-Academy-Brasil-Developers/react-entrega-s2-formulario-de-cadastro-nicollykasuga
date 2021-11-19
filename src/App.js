import {Switch, Route} from 'react-router-dom'
import {Cadastro} from './components/Cadastro/index'
import {BemVindo} from './components/Bem-vindo/index'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Cadastro/>
          </Route>
          <Route exact path="/bem-vindo/:name">
            <BemVindo/>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
