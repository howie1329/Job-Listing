import { React, useState, useEffect } from "react";
import JobCard from "./components/JobCard";

import data from "./data.json";

import backgroundImage from "./images/bg-header-mobile.svg";

function App() {
  const [filter, setFilter] = useState([]);
  const [type, settype] = useState([]);

  useEffect(() => {
    if (type.length === 0) {
      setFilter(data);
      console.log("Effect Run");
    }
  }, [type.length]);

  const onClick = (newType) => {
    const typeData = type;
    if (typeData.includes(newType)) {
      typeData.pop(newType);
      console.log(typeData);
      return settype(typeData);
    }
    typeData.push(newType);
    settype(typeData);
    find(type);
  };

  const find = (filterTypes) => {
    const test = filterTypes.map((type) =>
      data.filter((item) => {
        if (
          item.role === type ||
          item.level === type ||
          item.location === type
        ) {
          return item;
        }
      })
    );
    const arr = [];
    for (let index = 0; index < test.length; index++) {
      console.log(test[index]);
      arr.push(...test[index]);
    }
    console.log(arr);
    console.log([...filter]);
    setFilter(arr);
  };

  const styleClass = () => {
    let className;
    if (type.length < 1) {
      className = "hidden";
    } else {
      className =
        "flex justify-between max-w-full h-10 px-2 border-transparent border-2 bg-lgcyan";
    }

    const onClear = () => {
      settype([]);
    };
    return (
      <div className={className}>
        <div className="flex min-w-[80%] overflow-scroll gap-2">
          {type.map((item) => {
            return (
              <button
                className="border-2 border-transparent bg-ddcyan text-white font-bold rounded-lg px-4"
                value={item}
                onClick={(e) => onClick(e.target.value)}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className="flex">
          <button
            className="border-2 border-transparent bg-ddcyan text-white font-bold rounded-lg px-4"
            onClick={(e) => onClear()}
          >
            Clear
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className=" max-w-screen h-full bg-lgcyan ">
      <div className="">
        <img src={backgroundImage} className="w-full h-1/6"></img>
        {styleClass()}
      </div>
      <div className=" flex flex-col gap-6 mt-12 mx-6 ">
        {filter.map((item, index) => {
          return (
            <JobCard
              key={index}
              Job={item}
              results={filter}
              onFilter={onClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
