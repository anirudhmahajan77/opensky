import Home from "./Components/Home";
import Weather from "./Components/Weather";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route exact path='/weather/:city' element={<Weather />} />
      <Route path='*' element={<Home />} />
    </Routes>
  );
}

export default App;