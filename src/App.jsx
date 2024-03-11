import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
     <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-02">

        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl">

          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "#FF99C8"}}
          onClick={() => setColor("#FF99C8")}>Carnation pink
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "#FCF6BD"}}
          onClick={() => setColor("#FCF6BD")}>Lemon chiffon
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-black  shadow-lg" style={{backgroundColor: "#D0F4DE"}}
          onClick={() => setColor("#D0F4DE")}>Nyanza
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-black  shadow-lg" style={{backgroundColor: "#A9DEF9"}}
          onClick={() => setColor("#A9DEF9")}>Uranian Blue
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-black  shadow-lg" style={{backgroundColor: "#E4C1F9"}}
          onClick={() => setColor("#E4C1F9")}>Mauve
          </button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
