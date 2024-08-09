import FlowText from './components/FlowText';
import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className='flex flex-col'>
      {/* <div className='flex justify-center'> */}
      <NavBar />
      {/* </div> */}
      <div className="w-[1140] h-[300px] bg-slate-400"></div>
      <FlowText />
    </div>
    </ChakraProvider>
  );
}

export default App;

