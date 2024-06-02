import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './types'; 

interface JobsState {
  jobs: Job[];
  filteredJobs: Job[];
  searchTerm: string;
  selectedCategories: string[];
}

interface Job {
  id: number;
  title: string;
  category: string;
}

const initialState: JobsState = {
  jobs: [],
  filteredJobs: [],
  searchTerm: '',
  selectedCategories: [],
};

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobs: (state, action: PayloadAction<Job[]>) => {
      state.jobs = action.payload;
      state.filteredJobs = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.selectedCategories = action.payload;
    },
    filterJobs: (state) => {
      state.filteredJobs = state.jobs.filter((job) => {
        const searchTermMatch = job.title.toLowerCase().includes(state.searchTerm.toLowerCase());
        const categoryMatch = state.selectedCategories.length === 0 || state.selectedCategories.includes(job.category);
        return searchTermMatch && categoryMatch;
      });
    },
  },
});

export const { setJobs, setSearchTerm, setCategories, filterJobs } = jobsSlice.actions;

export const selectFilteredJobs = (state: RootState) => state.jobs.filteredJobs;

export default jobsSlice.reducer;
