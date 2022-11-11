import { React, useState, useEffect } from "react";
import JobCard from "./components/JobCard";

import data from "./data.json";

import backgroundImage from "./images/bg-header-mobile.svg";

function App() {
  const [filter, setFilter] = useState([...data]);
  const [type, settype] = useState([]);

  useEffect(() => {
    if (type.length === 0) {
      setFilter(data);
      console.log("Effect Run");
    }
  });

  const levelClick = (levelValue) => {
    typeCheck(levelValue);
    const result = filter.filter((item) => {
      if (item.level === levelValue) {
        return item;
      }
    });
    console.log(result);
    const arr = [];
    for (let index = 0; index < result.length; index++) {
      arr.push(result[index]);
    }
    setFilter(arr);
  };

  const roleClick = (roleValue) => {
    typeCheck(roleValue);
    const result = filter.filter((item) => {
      if (item.role === roleValue) {
        return item;
      }
    });
    console.log(result);
    const arr = [];
    for (let index = 0; index < result.length; index++) {
      arr.push(result[index]);
    }
    setFilter(arr);
  };

  const typeCheck = (value) => {
    let typeArr = type;
    if (typeArr.includes(value)) {
      typeArr = type;
      typeArr.pop(value);
      return settype(typeArr);
    }
    typeArr.push(value);
    settype(typeArr);
    console.log(type);
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
                onClick={(e) => typeCheck(e.target.value)}
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
              levelClick={levelClick}
              roleClick={roleClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
