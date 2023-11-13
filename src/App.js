import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Table from './components/Table/Table';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { ALL_TABLES, allTables } from './redux/tablesRedux';
import { ApiURL } from './config';

const App = () => {

  const dispatch = useDispatch();

  useEffect (()=>{

    fetch(ApiURL+"/tables")
    .then((res)=>res.json())
    .then((res)=>{
    dispatch(allTables(res))
    });

  },[]);
  

  return (
    <main>
    <Container>
    <NavBar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:tableId" element={<Table />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      
      <Footer />
    </Container>
    </main>
  );
}

export default App;
