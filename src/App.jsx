import Main from "./components/Main";
import Acceuil from "./components/Accueil";
import {Routes,Route} from 'react-router-dom';
import LearnMore from "./components/learnMore";
import NotFound from "./components/notFound";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="editor" element={<Main />} />
        <Route path="learn" element={<LearnMore/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes> 

    </div>
  );
}

export default App;
