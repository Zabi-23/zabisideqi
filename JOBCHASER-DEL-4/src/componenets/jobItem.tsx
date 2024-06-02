import React, { useState } from 'react';
import { Job } from './Data'; 
import { useSelector } from 'react-redux';
import selectSearchTerm from "../store/store";
import ApplicationForm from '../Apply/Apply';



interface JobItemProps {
  job: Job; 
}

const JobItem: React.FC<JobItemProps> = ({ job }) => {
  const [showDetails, setShowDetails] = useState(false); 

  // Filtrera jobb baserat på söktermen
 // const filteredJobs = job.position.toLowerCase().includes(searchTerm.toLowerCase()); 

  //Ny kod från ansök jobb
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const toggleApplicationForm = () => {
    setShowApplicationForm(!showApplicationForm);
  };

  return (
    <div className="job">
      <div className="job-logo-container">
        <img src={job.logo} alt={`${job.company} logo`} className="job-logo" />
        <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{job.company}</p>
      </div>
      <div>
        <p className="job-position">{job.position}</p>
      </div>
      <button className="show-details-btn" onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {/* ansöka jobb button */}
      <button className="apply-btn" onClick={toggleApplicationForm}>
              Apply
            </button>
     
      <div className="job-details" style={{ display: showDetails ? 'flex' : 'none', flexDirection: 'column' }}>
        <div className="detail-item">
          <span className="detail-label">Role:</span> {job.role}
        </div>
        <div className="detail-item">
          <span className="detail-label">Level:</span> {job.level}
        </div>
        <div className="detail-item">
          <span className="detail-label">Posted At:</span> {job.postedAt}
        </div>
        <div className="detail-item">
          <span className="detail-label">Contract:</span> {job.contract}
        </div>
        <div className="detail-item">
          <span className="detail-label">Location:</span> {job.location}
        </div>
        <div className="detail-item">
          <span className="detail-label">Languages:</span> {job.languages.join(', ')}
        </div>
        <div className="detail-item">
          <span className="detail-label">Tools:</span> {job.tools.join(', ')}
        </div>
        <div className="detail-item">
          <span className="detail-label">Description:</span> {job.description}
        </div>
        <div className="detail-item">
          <span className="detail-label">Email:</span> {job.email}
        </div>
        <div className="detail-item">
          <span className="detail-label">Phone:</span> {job.phone}
        </div>
        <div className="detail-item">
          <span className="detail-label">Address:</span> {job.address}
        </div>
      </div>
      {/* ansöka jobb form */}
      {showApplicationForm && <ApplicationForm />}
    </div>
  );
};

interface JobsProps {
  jobs: Job[]; // Definiera prop för jobbdata
}

const Jobs: React.FC<JobsProps> = ({ jobs }) => {
  /* const searchTerm = useSelector(selectSearchTerm); */
  const [searchTerm, setSearchTerm] = useState<string>('');
  const filteredJobs = jobs.filter(job =>
    job.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <main className="job-container">
        {filteredJobs.map(job => (
          <JobItem key={job.id} job={job} />
        ))}
      </main>
    </div>
  );
};


export { Jobs as default, JobItem };



 


 



