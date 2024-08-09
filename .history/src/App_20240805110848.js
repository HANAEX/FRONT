import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react'
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import SemanticPage from './pages/SemanticPage';
import NewsPage from './pages/NewsPage';
import BoardPage from './pages/BoardPage';
import AppOut from './AppOut';

function App() {
  return (
    <ChakraProvider>
    {/* <BrowserRouter>
    <div className='w-full flex justify-center'>
      <NavBar />
    </div>
    <Routes>
    
      <Route path="/" element={<MainPage />}/>
      <Route path="/Login" element={<LoginPage />}/>
      <Route path="/My" element={<MyPage />} />
      <Route path="/Semantic" element={<SemanticPage />} />
      <Route path="/News" element={<NewsPage />} />
      <Route path="/Board" element={<BoardPage />} />
    </Routes>
    </BrowserRouter> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppOut />}>
        <Route path='' element={<MainPage />} />
        <Route path="Login" element={<LoginPage />}/>
        <Route path="My" element={<MyPage />} />
        <Route path="Semantic" element={<SemanticPage />} />
        <Route path="News" element={<NewsPage />} />
        <Route path="Board" element={<BoardPage />} />
      </Route>
    </Routes>
    </BrowserRouter>

    </ChakraProvider>
  );
}

export default App;

