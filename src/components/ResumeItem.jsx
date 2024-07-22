import React from "react";

const ResumeItem = ({ title, company, date }) => {
  return (
    <div>
      <a
        href={company.url}
        target="_blank"
        className="py-3 flex items-center justify-between group-hover:opacity-20 hover:!opacity-100 transition-opacity"
      >
        <div className="flex items-center gap-4">
          <img
            src={company.image}
            alt={company.name}
            className=" w-[30px] mr-2"
          />
          <div>
            <h3 className="font-sm">{title}</h3>
            <div className="">
              <p className="text-sm opacity-40">{company.name}</p>
              <p className="text-sm opacity-40">{date}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ResumeItem;
