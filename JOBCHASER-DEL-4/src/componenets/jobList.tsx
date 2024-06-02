// JobList.tsx

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredJobs, filterJobs } from '../store/JobsSlice';
import { Job } from './Data';

const JobList: React.FC = () => {
  const dispatch = useDispatch();
  const filteredJobs = useSelector(selectFilteredJobs);

  useEffect(() => {
    dispatch(filterJobs()); // Skicka ett tomt objekt eller undefined
  }, []);
  

  return (
    <div>
      {filteredJobs.map((job: Job) => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;


