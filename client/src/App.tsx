import { IoPhonePortraitOutline } from 'react-icons/io5'
import './App.css'
import Slider from './components/Slider/Slider'
import Header from './components/Header/Header';
import Category from './pages/Category';
import Error from './components/Error';

function App() {

  return (
    <div className='h-screen w-full'>
     
      
      <Header />
      <div className='mt-[160px] space-y-6 '>
      <Slider />
      <Category />
      </div>
      <Error/>
    </div>
  )
}

export default App
