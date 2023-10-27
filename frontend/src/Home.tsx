import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './styles/Home.css';

function Home() {


  return (
    <>
      <Header />
      <Routes>
          {/* <Route path='/' element={<some component />} /> */}
      </Routes>
    </>
  );
}

export default Home;
