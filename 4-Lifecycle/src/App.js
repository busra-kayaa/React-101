import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const[isVisible, setIsVisible] = useState(true);
  //İlk etapta görünür

  return (
    <div>
      {isVisible && <Counter/>} {/* //true ise göster */}
      <button onClick={() => setIsVisible(!isVisible)}>
        Göster/Gizle
      </button>
      {/* Buton sayesinde counter sayfasını görünmez yapacağız */}
    </div>
  );
}

export default App;
