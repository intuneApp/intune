import React from 'react';

//text wiht icon from props
const Title = (props: { children: string }) => {
  return (
    <div className="flex flex-row ">
      <h1 className="text-2xl font-bold text-violet-400 mr-2">|</h1>
      <h1 className="text-2xl font-bold mb-4 mt-1"> {props.children}</h1>
    </div>
  );
};

export default Title;
