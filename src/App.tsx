import { useState } from "react";
import mainLogo from "./assets/pokeapi_256.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-root container sm:mx-auto my-4 flex justify-center">
      <div
        id="responsive-main-wrapper"
        className="w-full sm:w-5/6 lg:w-4/5 xl:w-3/4 h-full "
      >
        <div className="flex flex-col gap-4">
          <div>
            <img src={mainLogo} className="mx-auto" />
          </div>
          <div className="bg-gray-700">content here</div>
        </div>
      </div>
    </div>
  );
}

export default App;
