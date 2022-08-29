// import { Footer, Header, Secao, FiltroSecao } from '@components';
import { Footer, Header } from '@components';
// import { produtos } from '@services';
// import { useState } from 'react';
import styles from './App.module.css';
import { SelecionadoProvider } from '../src/context/selecionados/SelecionadoProvider';
import { Router } from '../src/router/Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <SelecionadoProvider>
      <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Router/>       
      </main>
      <Footer />
    </div>
    </SelecionadoProvider>  
    
    </BrowserRouter>
    
    
    
  );
}

export default App;
