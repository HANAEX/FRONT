import ChartCard from './components/ChartCard';
import FlowText from './components/FlowText';
import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className='flex flex-col'>

        <NavBar />
        
        <div className="w-[1140] h-[400px] bg-slate-400">
          <ChartCard />
        </div>
        <FlowText />
    </div>
    </ChakraProvider>
  );
}

export default App;

