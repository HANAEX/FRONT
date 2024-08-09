import Menu from './components/Menu';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='flex justify-center'>
      <NavBar />
      <div className='w-[80px]'></div>
      <Menu />
    </div>
  );
}

export default App;
