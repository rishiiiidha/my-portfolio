import React from "react";

const ResumeItem = ({ title, company, date }) => {
  return (
    <div>
      <a
        href={company.url}
        target="_blank"
        class="py-3 flex items-center justify-between group-hover:opacity-20 hover:!opacity-100 transition-opacity"
      >
        <div class="flex items-center gap-4">
          <img src={company.image} alt={company.name} class=" w-[30px] mr-2" />
          <div>
            <h3 class="font-sm">{title}</h3>
            <p class="text-sm opacity-40">{company.name}</p>
          </div>
        </div>
        <p class="text-sm opacity-40">{date}</p>
      </a>
    </div>
  );
};

export default ResumeItem;
