// App.tsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setJobs } from './store/JobsSlice';
import localjobs from './componenets/Data';
import JobItem from './componenets/jobItem'; 
import Header from './componenets/Header';
import Register from './pages/Register';
import SignInPage from './pages/SignInPage'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './componenets/Hero';
import Footer from './componenets/Footer';
import './App.css'

const App: React.FC = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state: any) => state.jobs.jobs);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    dispatch(setJobs(localjobs));
  }, [dispatch]);

  const filteredJobs = jobs.filter((job: any) => job.position.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Router>
      <div>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<>
            <Hero isFirstPage={false} />
            <JobItem jobs={filteredJobs} />
          </>} />
          <Route path="/login" element={<SignInPage isLoginPage={true} />} />
          <Route path="/register" element={<Register />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;





