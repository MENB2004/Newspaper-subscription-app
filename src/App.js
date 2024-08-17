import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddSubs from './components/AddSubs';
import Search from './components/Search';
import Delete from './components/Delete';
import ViewALl from './components/ViewALl';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddSubs/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/delete" element={<Delete/>}/>
        <Route path="/view" element={<ViewALl/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
