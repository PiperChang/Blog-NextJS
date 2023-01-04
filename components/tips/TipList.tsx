import React from 'react'

const TipListItem = (props: TipListItemProps) => {
  return (
    <div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">
          {props.tags.map((tag,idx) => {
            return (
              <div
                key={tag+idx}
                className={`btn-tags focus:outline-none`}
              >
                {tag}
              </div>
            );
          })}
          </span>
          <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
            {props.title}
          </h2>
          <p className="leading-relaxed">
            {props.content}
          </p>
          <a className="text-indigo-500 inline-flex items-center mt-4">
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TipListItem 