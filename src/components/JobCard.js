import React from "react";

export default function JobCard({ Job, onFilter, results }) {
  const newStatus = () => {
    if (Job.new) {
      return (
        <p className="border-transparent border-2 rounded-3xl text-white bg-ddcyan px-2 font-semibold">
          NEW!
        </p>
      );
    }
  };
  const featuredStatus = () => {
    if (Job.featured) {
      return (
        <p className="border-2 border-transparent bg-vdcyan text-white rounded-3xl px-2 font-semibold">
          FEATURED
        </p>
      );
    }
  };
  const roleStatus = () => {
    return (
      <>
        <button
          className=" border-2 border-transparent bg-lgcyanf text-ddcyan font-bold rounded-lg px-4"
          value={Job.role}
          onClick={(e) => onFilter(e.target.value)}
        >
          {Job.role}
        </button>
        <button
          className=" border-2 border-transparent bg-lgcyanf text-ddcyan font-bold rounded-lg px-4"
          value={Job.level}
          onClick={(e) => onFilter(e.target.value)}
        >
          {Job.level}
        </button>
        {Job.languages.map((item) => {
          return (
            <button className=" border-2 border-transparent bg-lgcyanf text-ddcyan font-bold rounded-lg px-4">
              {item}
            </button>
          );
        })}
      </>
    );
  };

  return (
    <div className="border-ddcyan border-l-[6px] flex flex-col h-[17rem] px-5 gap-2 rounded-lg pt-3 bg-white">
      {/*top Of Job card*/}
      <div className="flex flex-col border-b-vdcyan border-b-[1px] pb-2 gap-1">
        <div>
          <img width={50} src={Job.logo} />
        </div>
        <div className="flex gap-4">
          <p className="font-bold text-ddcyan">{Job.company}</p>
          <div className="flex gap-2">
            {newStatus()}
            {featuredStatus()}
          </div>
        </div>
        <div className="font-bold text-vdcyan">{Job.position}</div>
        <div className="flex gap-4 font-medium text-slate-600">
          <p>{Job.postedAt}</p>
          <p>{Job.contract}</p>
          <p>{Job.location}</p>
        </div>
      </div>
      {/*Bottom of job card  */}
      <div className="  pt-2 flex gap-3 flex-wrap">{roleStatus()}</div>
    </div>
  );
}
