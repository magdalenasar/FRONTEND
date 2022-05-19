import { useState } from 'react';
import NTF from './Components/NTF';


const App = ()=>  {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Oef 3</h1>
      <div>App</div>
      <NTF />
      {/* !>main>(h1{load NFT's after 5 clicks}+button{0})+(section>aside\*20>img) */}
    </>
  )
}

export default App;
