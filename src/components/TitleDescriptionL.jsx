import React from 'react'

function TitleDescriptionL({title,description}) {
  return (
    <div className="title_and_description flex flex-col place-items-center text-center ">
          <h1 className="title text-[1.5rem] md:text-[1.7rem] font-semibold md:py-3">
            {title}
          </h1>
          <h6 className=" font-medium pb-7 ">{description}</h6>
    </div>
  )
}

export default TitleDescriptionL