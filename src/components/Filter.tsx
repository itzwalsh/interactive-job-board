import { IoMdClose } from "react-icons/io"

export default function Filter({
  tags,
  handleRemoveTags,
  handleClearTags,
}: any) {
  return (
    // Filter component that renders the tags selected by the user
    <div className="h-fit w-fit mx-16 min-w-[300px] bg-[#FFFFFF] rounded-md desktop:w-[80%] cursor-pointer absolute top-16 flex justify-end min-h-[60px] desktop:justify-between">
      <div className="flex mx-4 my-4 gap-y-3 flex-wrap gap-x-2">
        {tags.map((tag: any, index: any) => (
          <div key={index} className="flex">
            <p className="bg-neutral-cyan-card text-primary-cyan font-bold px-3 py-1 rounded-l-md select-none">
              {tag}
            </p>
            <div className="text-center bg-primary-cyan w-8 inline-block aspect-square hover:bg-neutral-dark-blue-text rounded-r-md">
              <p
                className="flex items-center justify-center h-full"
                onClick={() => handleRemoveTags(index)}
              >
                <IoMdClose className="inline-block text-2xl text-[#FFFFFF]" />
              </p>
            </div>
          </div>
        ))}
      </div>
      <p
        className=" text-neutral-dark-blue font-semibold inline my-auto mr-4 hover:text-primary-cyan hover:underline desktop:mr-6"
        onClick={handleClearTags}
      >
        Clear
      </p>
    </div>
  )
}
