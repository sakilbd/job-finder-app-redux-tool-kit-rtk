import React, { useState } from "react";
import { createJob, updateJob } from "../features/jobs/jobSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";


function Form({ formType }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [salary, setsalary] = useState("");
  const [deadline, setDeadline] = useState("");

  const {jobId} = useParams(); 

  const submitHandler = (e) => {
  
    e.preventDefault();
    const data={title,type,salary,deadline}
    
    console.log(title);
    console.log("jobId",jobId);
    if(formType=='edit-job'){
      dispatch(updateJob({jobId,data}));
    }
    else{
      dispatch(createJob(data))
    }
   
  };
  return (
    <div>
      <main class="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 class="mb-10 text-center lws-section-title">
          {formType == "edit-job" ? "Edit Job" : "Add NewJob"}
        </h1>

        <div class="max-w-3xl mx-auto">
          <form class="space-y-6" onSubmit={(e)=>submitHandler(e)}>
            <div class="fieldContainer">
              <label
                for="lws-JobTitle"
                class="text-sm font-medium text-slate-300"
              >
                Job Title
              </label>
              <select
                id="lws-JobTitle"
                name="lwsJobTitle"
                required
                onChange={(e) => setTitle(e.target.value)}
              >
                <option value="" hidden selected>
                  Select Job
                </option>
                <option>Software Engineer</option>
                <option>Software Developer</option>
                <option>Full Stack Developer</option>
                <option>MERN Stack Developer</option>
                <option>DevOps Engineer</option>
                <option>QA Engineer</option>
                <option>Product Manager</option>
                <option>Social Media Manager</option>
                <option>Senior Executive</option>
                <option>Junior Executive</option>
                <option>Android App Developer</option>
                <option>IOS App Developer</option>
                <option>Frontend Developer</option>
                <option>Frontend Engineer</option>
              </select>
            </div>

            <div class="fieldContainer">
              <label for="lws-formType">Job Type</label>
              <select id="lws-formType" name="lwsformType" required onChange={(e) => setType(e.target.value)}>
                <option value="" hidden selected>
                  Select Job Type
                </option>
                <option>Full Time</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>
            </div>

            <div class="fieldContainer">
              <label for="lws-JobSalary">Salary</label>
              <div class="flex border rounded-md shadow-sm border-slate-600">
                <span class="input-tag">BDT</span>
                <input
                  type="number"
                  name="lwsJobSalary"
                  id="lws-JobSalary"
                  required
                  class="!rounded-l-none !border-0"
                  placeholder="20,00,000"
                  onChange={(e) => setsalary(e.target.value)}
                />
              </div>
            </div>

            <div class="fieldContainer">
              <label for="lws-JobDeadline">Deadline</label>
              <input
                type="date"
                name="lwsJobDeadline"
                id="lws-JobDeadline"
                required
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>

            <div class="text-right">
              <button
                type="submit"
                id="lws-submit"
                class="cursor-pointer btn btn-primary w-fit"
              >
                {formType == "edit-job" ? "Edit" : "Add"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Form;
