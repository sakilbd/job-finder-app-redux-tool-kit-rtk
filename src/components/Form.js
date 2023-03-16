import React, { useEffect, useState } from "react";
import { updateJob } from "../features/jobs/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import EditForm from "./EditForm";
import { fetchJobs } from "../features/jobs/jobSlice";

function Form() {
  const { jobs, isLoading, isError } = useSelector((state) => state.jobs);
  const { jobId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
    return () => {};
  }, [dispatch]);
  let content = "";
  if (isLoading) {
    content = <div>Loading....</div>;
  }

  if (!isLoading && jobs.length>0) {
    let job = jobs.filter((job) => {
      return job.id == jobId;
    });
    content = <EditForm job={job[0]} />;
  }
  return (
    <div>
      <main class="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 class="mb-10 text-center lws-section-title">Edit Job</h1>

        <div class="max-w-3xl mx-auto">
          {/* <EditForm /> */}
          {content}
        </div>
      </main>
    </div>
  );
}

export default Form;
