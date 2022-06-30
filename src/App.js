import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from "./components/styles"
import Footer from "./components/Footer";
import Home from "./pages/Home/index.jsx";
import Details from "./pages/Details/index.jsx";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>

        <Footer />
      </BrowserRouter>
      

      <GlobalStyle />
    </>
  );
}

export default App;
