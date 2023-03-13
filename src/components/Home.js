import React, { useEffect } from "react";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../features/jobs/jobSlice";

function Home() {
  const { jobs, isLoading, isError } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchJobs());
    return () => {};
  }, []);
  let content = "";
  if (isLoading) {
    content = <p style={{ color:'white',fontWeight:"bold" }}>Loading...</p>;
  }
  if (!isLoading && isError)
    content = <p className="error">There was an error occured</p>;

  if (!isLoading && !isError && jobs?.length > 0) {
    content = jobs.map((job) => (
      <Job key={job.id} job={job} />
    ));
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
              />
            </div>
            <select
              id="lws-sort"
              name="sort"
              autocomplete="sort"
              class="flex-1"
            >
              <option>Default</option>
              <option>Salary (Low to High)</option>
              <option>Salary (High to Low)</option>
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
