import React from 'react';
import logo from './logo.svg';
import './App.css';

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
            <input type="text" name="Login" id="Login" />
            <input type="password" name="Senha" id="pass" />

          </form>
        </div>

      </main>
    </div>
  );
}

export default App;
