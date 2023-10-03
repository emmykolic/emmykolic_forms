// import logo from './logo.svg';
// // src/App.js
import React from 'react';
import Auth from './components/Auth';

function App() {
  return (
    <div className="App">
      <header className="App-header navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <h3>React Firebase Authentication</h3>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              
            </ul>
            <Auth />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
