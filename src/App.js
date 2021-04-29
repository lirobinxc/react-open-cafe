import { useContext } from 'react';
import EditingBar from './components/EditingBar';
import Header from './components/header/Header';
import Hero from './components/Hero';
import Modal from './components/menu/Modal';
import Overview from './components/Overview';
import store from './store/store';

function App() {
  const { state } = useContext(store);
  console.log({ state });

  return (
    <>
      <Header />
      <Hero />
      <Overview />
      <EditingBar />
      <Modal />
      <p>Testing</p>
      <p>Testing</p>
      <p>Testing</p>
      <p>Testing</p>
      <p>Testing</p>
      <p>Testing</p>
      <p>Testing</p>
      <p>Testing</p>
    </>
  );
}

export default App;
