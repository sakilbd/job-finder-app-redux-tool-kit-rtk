import React, { useEffect, useState } from "react";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../features/jobs/jobSlice";

function Home() {
  const { jobs, isLoading, isError, jobType } = useSelector(
    (state) => state.jobs
  );
  const [sortType, setSortType] = useState("default");
  const dispatch = useDispatch();
  let [searchText ,setSearchText]= useState('');
  let filteredJobs = "";
  const dropDownHandler = (e) => {
    const dropDownValue = e.target.value;

    setSortType(dropDownValue);
    // console.log(dropDownValue);
  };
  useEffect(() => {
    dispatch(fetchJobs());
    return () => {};
  }, []);
  const searchHandler = (value)=>{
   
    setSearchText(value);
  }
  let content = "";
  if (isLoading) {
    content = <p style={{ color: "white", fontWeight: "bold" }}>Loading...</p>;
  }
  if (!isLoading && isError)
    content = <p className="error">There was an error occured</p>;

  if (!isLoading && !isError && jobs?.length > 0) {
    filteredJobs = [...jobs];
    
    if (jobType != "all") {
      
      filteredJobs = jobs.filter((item) => {
        return item.type == jobType;
      });
    }
    if (sortType === "lowToHigh") {
      filteredJobs = filteredJobs.sort((a, b) => {
        return a.salary - b.salary;
      });
    }
    if (sortType === "highToLow") {
      filteredJobs = filteredJobs.sort((a, b) => {
        return b.salary - a.salary;
      });
    }
   
    filteredJobs=filteredJobs.filter(item=>{
      return item.title.toLowerCase().indexOf(searchText)>=0;
    })
   
    content = filteredJobs.map((job) => <Job key={job.id} job={job} />);
  }

  return (
    <div>
      <main class="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <div class="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
          <h1 class="lws-section-title">All Available Jobs</h1>
          <div class="flex gap-4">
            <div class="search-field group flex-1">
              <i class="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
              <input
                type="text"
                placeholder="Search Job"
                class="search-input"
                id="lws-searchJob"
                onChange={(e)=>searchHandler(e.target.value)}
              />
            </div>
            <select
              id="lws-sort"
              name="sort"
              autocomplete="sort"
              class="flex-1"
              onChange={(e) => dropDownHandler(e)}
            >
              <option value="default">Default</option>
              <option value="lowToHigh">Salary (Low to High)</option>
              <option value="highToLow">Salary (High to Low)</option>
            </select>
          </div>
        </div>

        <div class="jobs-list">
          {/* <!-- Single Job 1--> */}
          {content}
          {/* <!-- Single Job 1--> */}
        </div>
      </main>
    </div>
  );
}

export default Home;
