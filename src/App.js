import Register from './register';
import Login from './login'
import { Fragment, useState } from 'react';
function App() {
  const [isRegister, setIsRegister] = useState(true)
  return (
    <Fragment>
      <button
        className='absolute top-1/2 left-24 w-20 h-20 bg-red-900 text-white rounded-lg z-50' 
        onClick={() => { setIsRegister(!isRegister); console.log(isRegister) }}>
        {isRegister ? 'Login' : 'Register'}
      </button>
      <div className='absolute top-1/2 right-32 rounded-full bg-white w-32 h-32 text-2xl flex justify-center items-center z-50'>
        {isRegister ? <div>True</div> : <div>False</div>}
      </div>
      {isRegister ? <Register /> : <Login />}
    </Fragment>

  );
}


export default App;
