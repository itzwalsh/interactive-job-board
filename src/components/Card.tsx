import React from "react"
import jobs from "../data/jobs.json"

export default function Card() {
  return (
    <div className="flex flex-col gap-y-10 text-title desktop:w-[100%] desktop:items-center desktop:gap-y-6">
      {jobs.map((job) => (
        <div
          className="h-64 w-80 bg-[#FFFFFF] rounded-md job-card desktop:h-36 desktop:w-[80%]"
          key={job.id}
        >
          <div className="desktop:grid desktop:grid-cols-2 desktop:place-items-center desktop:h-full desktop:gap-x-72">
            <div className="desktop:flex">
              {/* Company Photo */}
              <img
                src={job.logo}
                alt="Company Logo"
                className="aspect-square h-12 relative bottom-6 left-6 desktop:static desktop:h-20 desktop:inline"
              />

              <div className="h-full my-auto">
                {/* Company Name - Relevant Tags */}
                <div className="flex gap-x-6 pl-6 -my-2 desktop:gap-x-3 desktop:my-0 desktop:justify-between">
                  <p className="text-primary-cyan font-semibold">
                    {job.company}
                  </p>
                  <ul className="flex gap-x-2 text-neutral-cyan-card uppercase items-center justify-center desktop:text-[12px]">
                    {job.new === true && (
                      <li className="bg-primary-cyan px-2 py-0.5 rounded-full">
                        New!
                      </li>
                    )}
                    {job.featured === true && (
                      <li className="bg-neutral-dark-blue-text px-2 py-0.5 rounded-full">
                        Featured
                      </li>
                    )}
                  </ul>
                </div>
                {/* Job Title */}
                <p className="flex pl-6 pt-4 font-bold desktop:pt-0 desktop:text-[18px] desktop:hover:text-primary-cyan desktop:hover:transition hover:2s">
                  {job.position}
                </p>
                {/* Job posted, contract, location */}
                <ul className="flex gap-x-2 text-neutral-dark-blue pl-6 pt-2 desktop:pt-0 desktop:justify-between">
                  <li className="seperator">{job.postedAt}</li>
                  <li className="seperator">{job.contract}</li>
                  <li className="seperator">{job.location}</li>
                </ul>
              </div>
            </div>

            <div>
              {/*Thin gray Divider */}
              <div className="bg-neutral-dark-blue w-[85%] mt-4 p-[0.5px] mx-auto desktop:hidden"></div>
              {/* Relevant Stack/Tags */}
              <div className="flex gap-x-4 flex-wrap mx-6 my-4 gap-y-4">
                <p className="bg-neutral-cyan-card text-primary-cyan font-bold px-3 py-1 rounded-md hover:text-neutral-cyan-card hover:bg-primary-cyan select-none">
                  {job.role}
                </p>
                <p className="bg-neutral-cyan-card text-primary-cyan font-bold px-3 py-1 rounded-md hover:text-neutral-cyan-card hover:bg-primary-cyan select-none">
                  {job.level}
                </p>
                {job.languages.map((language, index) => (
                  // really shouldn't do this..
                  <p
                    key={index}
                    className="bg-neutral-cyan-card text-primary-cyan font-bold px-3 py-1 rounded-md hover:text-neutral-cyan-card hover:bg-primary-cyan select-none"
                  >
                    {language}
                  </p>
                ))}
                {job.tools.map((tool, index) => (
                  <p
                    key={index}
                    className="bg-neutral-cyan-card text-primary-cyan font-bold px-3 py-1 rounded-md hover:text-neutral-cyan-card hover:bg-primary-cyan select-none"
                  >
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
