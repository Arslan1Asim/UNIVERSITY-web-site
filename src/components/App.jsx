import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Programs from '../pages/Programs';
import ProgramDetail from '../pages/ProgramDetail';
import Admission from '../pages/Admission';
import Faculty from '../pages/Faculty';
import Layout from './Layout';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<Programs />} />
        <Route path="programs" element={<Programs />} />
        <Route path="program/:id" element={<ProgramDetail />} />
        <Route path="admission" element={<Admission />} />
        <Route path="faculty" element={<Faculty />} />
      </Route>
    </Routes>
  );
}

export default App;
