import FlowText from './components/FlowText';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='w-[1140px] flex justify-center'>
      <NavBar />
      <div className="w-full h-[600px] bg-slate-400"></div>
      <FlowText />
    </div>
  );
}

export default App;
