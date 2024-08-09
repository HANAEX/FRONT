import FlowText from './components/FlowText';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <div className='flex justify-center'>
        <NavBar />
      </div>
      <div className="w-full h-[600px] bg-slate-400"></div>
      <FlowText />
      </>
  );
}

export default App;
