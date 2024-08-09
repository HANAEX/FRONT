import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChartCard from './components/ChartCard';
import FlowText from './components/FlowText';
import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react'
import MainPage from './pages/MainPage';

function App() {
  return (
    <ChakraProvider>
      {/* <div className='flex flex-col'>

        <NavBar />
        
        <div className="w-[1140] h-[400px] bg-slate-400">
          <ChartCard />
        </div>
        <FlowText />
    </div> */}

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />}/>
    </Routes>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

