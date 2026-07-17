import { Routes, Route } from 'react-router-dom';
import ApplicationRejected from './pages/ApplicationRejected/ApplicationRejected';
import CompleteProfile from './pages/CompleteProfile/CompleteProfile';
import CompleteProfile2 from './pages/CompleteProfile2/CompleteProfile2';
import CompleteProfile3 from './pages/CompleteProfile3/CompleteProfile3';
import CompleteProfile4 from './pages/CompleteProfile4/CompleteProfile4';
import CompleteProfile5 from './pages/CompleteProfile5/CompleteProfile5';
import CompanyProfile from './pages/CompanyProfile/CompanyProfile';
import MertorDashBoard from './pages/MentorDashBoard/MentorDashBoard';
import MertorshipRequest from './pages/MentorshipRequest/MentorshipRequest';
import MertorChats from './pages/MentorChats/MentorChats';
import VerificationProgress from './pages/VerificationProgress/VerificationProgress';
import VerifyEmail from './pages/VerifyEmail/VerifyEmail';
import Welcome from './pages/Welcome/Welcome';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/verification-progress" element={<VerificationProgress />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/application-rejected" element={<ApplicationRejected />} />
      <Route path="/complete-profile" element={<CompleteProfile />} />
      <Route path="/complete-profile2" element={<CompleteProfile2 />} />
      <Route path="/complete-profile3" element={<CompleteProfile3 />} />
      <Route path="/complete-profile4" element={<CompleteProfile4 />} />
       <Route path="/complete-profile5" element={<CompleteProfile5 />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/MentorDashBoard" element={<MertorDashBoard />} />
        <Route path="/MentorshipRequest" element={<MertorshipRequest />} />
        <Route path="/MentorChats" element={<MertorChats />} />

    </Routes>
  );
}

export default App;
