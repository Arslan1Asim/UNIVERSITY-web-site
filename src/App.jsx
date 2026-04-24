import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Programs from './pages/Programs';
import ProgramDetail from './pages/ProgramDetail';
import Admission from './pages/Admission';
import Faculty from './pages/Faculty';
import './components/App.css';

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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
