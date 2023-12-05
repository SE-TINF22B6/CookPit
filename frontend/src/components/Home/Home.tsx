import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import '../Home/Home.css';
import Background from '../Background/Background';
import Login from '../Login/Login';
import SearchSite from '../SearchSite/SearchSite';
import OpenAI from '../openai/OpenAI';

function Home() {


  return (
    <>
      <Background />
      <Header />
      <Login />
      <Routes>
          <Route path='/' element={<SearchSite />} />
          <Route path='/recipe-maker' element={<OpenAI />} />
      </Routes>
    </>
  );
}

export default Home;
