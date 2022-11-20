import React from 'react';

//text wiht icon from props
const IconText = (props: { icon: any; children: string; color?: string }) => {
  let iconStyles = { color: props.color };
  return (
    <div style={iconStyles} className="flex flex-row ">
      <props.icon style={iconStyles} className="mr-2 mt-1.5" />
      {props.children}
    </div>
  );
};

export default IconText;
