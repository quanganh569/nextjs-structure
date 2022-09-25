import React from "react";

const Tabs = (props: any) => {
  const {
    tabs,
    icons = false,
    tabSelected,
    onChange,
    borderDefault = "border-white",
  } = props;
  return (
    tabs &&
    tabs.length > 0 && (
      <div className="d-flex justify-content-center flex-row h-full text-container">
        {tabs.map((tab: any, index: any) => {
          return (
            <div
              onClick={() => {
                onChange(index);
              }}
              key={index}
              style={{cursor:"pointer"}}
              className={`text-sm px-2 py-1   flex items-center font-medium text-center  
                ${
                  tabSelected === index
                    ? "  bg-white text-sky-500"
                    : ` text-black `
                }
              `}
            >
              <div className="mr-1 ">{icons && icons[index]}</div>
              <span className="">{tab}</span>
            </div>
          );
        })}
      </div>
    )
  );
};

export default Tabs;
