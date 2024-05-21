
import './App.css';
import Forms from './components/Forms';

export default function App() {
  return (
    <div className='flex w-full h-screen'>
      <div className='w-full flex items-center justify-center lg:w-1/2'>
        <Forms/>

      </div>
      {/* <div className=' hidden lg:flex h-full bg-gray-200'></div>
      <div>Hello</div> */}
    </div>
  )
}
