import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
// import Login from './components/Login'
import '../Home/Home.css';
import Background from '../Background/Background';
import Body from '../SearchSite/SearchSite';

function Home() {


  return (
    <>
     <Background />
      <Header />
      <Body />
      {/* <Login /> */}
      {/* <Routes> */}
          {/* <Route path='/' element={<some component />} /> */}
      {/* </Routes> */}
    </>
  );
}

export default Home;
