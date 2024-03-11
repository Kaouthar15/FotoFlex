import Main from "./components/Main";
import Acceuil from "./components/Accueil";
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="editor" element={<Main />} />
      </Routes> 

    </div>
  );
}

export default App;
