import { useState } from 'react'
import MouseTracker from './components/MouseTracker';
import LemonCocktails from './components/LemonCocktails';
import SearchCocktail from './components/SearchCocktail';

const App = () =>  {
  const [isVisible, setisVisible] = useState(0)

  return (

    <>
      <SearchCocktail />
    </>
  )
}

export default App
