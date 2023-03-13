import React from 'react'
import { Link } from 'react-router-dom'
import { setJobType } from '../features/jobs/jobSlice'
import { useDispatch } from 'react-redux'

function Sidebar() {
  const dispatch= useDispatch();

  const setJobTypeHandler = (e,jobType)=>{
    // e.target.preventDefault();
    dispatch(setJobType(jobType));
    
  }

  return (
    <div>
       <div class="sidebar">
          <nav>
            <ul class="space-y-4">
              <li>
                <Link
                 to="/"
                  class="main-menu menu-active"
                  id="lws-alljobs-menu"
                  onClick={(e)=>setJobTypeHandler(e,"all")}
                >
                  <i class="fa-solid fa-briefcase"></i>
                  <span> All Available Jobs</span>
                </Link>
                <ul class="space-y-6 lg:space-y-2 ">
                  <li>
                    <a
                      class="sub-menu"
                      onClick={(e)=>setJobTypeHandler(e,'Internship')}
                      id="lws-internship-menu"
                    >
                      <i class="fa-solid fa-stop !text-[#FF5757]"></i>
                      Internship
                    </a>
                  </li>
                  <li>
                    <a
                      class="sub-menu"
                      onClick={(e)=>setJobTypeHandler(e,'Full Time')}

                      id="lws-fulltime-menu"
                    >
                      <i class="fa-solid fa-stop !text-[#FF8A00]"></i>
                      Full Time
                    </a>
                  </li>
                  <li>
                    <a
                      class="sub-menu"
                      onClick={(e)=>setJobTypeHandler(e,'Remote')}
                      id="lws-remote-menu"
                    >
                      <i class="fa-solid fa-stop !text-[#56E5C4]"></i>
                      Remote
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to='create-job' class="main-menu" id="lws-addJob-menu">
                  <i class="fa-solid fa-file-circle-plus"></i>
                  <span>Add NewJob</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
    </div>
  )
}

export default Sidebar
