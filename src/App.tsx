import React from 'react';
import logo from './logo.svg';
import './App.scss';
import './keyframes.scss';

function App() {
  return (
    <div id="geral">
      <aside className="logo-canto">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="agenda">
          Agenda Hair
        </p>
      </aside>
      <main className="conteudo">
        <div>
          <form>
            <p className="pf">Login:</p>
            <input type="text" name="Login" id="Login" />
            <p className="pf">Senha:</p>
            <input type="password" name="Senha" id="pass" />
            <div><br></br></div>
            <button id="botao">
              Entrar
            </button>
          </form>
        </div>

      </main>
    </div>
  );
}

export default App;
