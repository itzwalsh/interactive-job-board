import React, { useState } from "react"
import jobs from "../data/jobs.json"
import Filter from "./Filter"

export default function Card() {
  const [tags, setTags] = useState<any>([])

  //Add new tags to the tags array based on the selected tag from the job listings text,
  //incorporate conditionals that ensure tags are not duplicated and that there are <4 tags
  const handleAddTags = (event: any) => {
    const tag = event.target.textContent
    if (!tags.includes(tag) && tags.length < 5) {
      setTags([...tags, tag])
    }
  }
  //Remove tags from the tags array based on the selected tag from the filter component
  const handleRemoveTags = (indexToRemove: any) => {
    setTags([...tags.filter((_: any, index: any) => index !== indexToRemove)])
  }

  const handleClearTags = () => {
    setTags([])
  }

  return (
    <>
      {tags.length > 0 && (
        <Filter
          tags={tags}
          handleRemoveTags={handleRemoveTags}
          handleClearTags={handleClearTags}
        />
      )}

      <div className="flex flex-col gap-y-10 text-mobile-title desktop:w-[100%] desktop:items-center desktop:gap-y-6">
        {jobs
          .filter(
            (job) =>
              tags.length === 0 ||
              tags.every(
                (tag: any) =>
                  job.role === tag ||
                  job.level === tag ||
                  job.languages.includes(tag) ||
                  job.tools.includes(tag)
              )
          )
          .map((job: any) => (
            <div
              className={`h-64 w-80 bg-[#FFFFFF] rounded-r-lg desktop:h-36 desktop:w-[80%] cursor-pointer ${
                job.featured ? "featured-job" : ""
              }`}
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
                    <div className="flex gap-x-6 pl-6 -my-2 desktop:gap-x-3 desktop:my-0">
                      <p className="text-primary-cyan font-semibold desktop:text-desktop-title">
                        {job.company}
                      </p>
                      <ul className="flex gap-x-2 text-neutral-cyan-card uppercase items-center justify-center">
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
                    <p className="flex pl-6 pt-4 font-bold desktop:pt-0 desktop:text-desktop-title desktop:hover:text-primary-cyan desktop:hover:transition hover:2s">
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
                    <p
                      onClick={handleAddTags}
                      className="bg-neutral-cyan-card text-primary-cyan font-bold px-3 py-1 rounded-md hover:text-neutral-cyan-card hover:bg-primary-cyan select-none"
                    >
                      {job.role}
                    </p>
                    <p
                      onClick={handleAddTags}
                      className="bg-neutral-cyan-card text-primary-cyan font-bold px-3 py-1 rounded-md hover:text-neutral-cyan-card hover:bg-primary-cyan select-none"
                    >
                      {job.level}
                    </p>
                    {job.languages.map((language: any, index: any) => (
                      // really shouldn't do this..
                      <p
                        onClick={handleAddTags}
                        key={index}
                        className="bg-neutral-cyan-card text-primary-cyan font-bold px-3 py-1 rounded-md hover:text-neutral-cyan-card hover:bg-primary-cyan select-none"
                      >
                        {language}
                      </p>
                    ))}
                    {job.tools.map((tool: any, index: any) => (
                      <p
                        onClick={handleAddTags}
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
    </>
  )
}
