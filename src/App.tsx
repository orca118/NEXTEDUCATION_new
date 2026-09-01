import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import StudentMentorProgram from './pages/StudentMentorProgram';
import OrcaRobotics from './pages/OrcaRobotics';
import GetInvolved from './pages/GetInvolved';
import Donate from './pages/Donate';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter basename="/NEXTEDUCATION_new">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route
            path="student-mentor-program"
            element={<StudentMentorProgram />}
          />
          <Route path="orca-robotics" element={<OrcaRobotics />} />
          <Route path="get-involved" element={<GetInvolved />} />
          <Route path="donate" element={<Donate />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
