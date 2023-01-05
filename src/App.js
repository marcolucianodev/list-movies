import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from "./components/styles"
import Footer from "./components/Footer";
import Home from "./pages/Home/index.jsx";
import Details from "./pages/Details/index.jsx";
import Header from './components/Header';
import Search from './pages/Search';

const App = () => {

  return (
    <>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path='/search' element={<Search />} />
        </Routes>

        <Footer />
      </BrowserRouter>
      

      <GlobalStyle />
    </>
  );
}

export default App;
